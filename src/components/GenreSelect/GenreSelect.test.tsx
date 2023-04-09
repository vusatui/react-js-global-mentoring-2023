import {act, render, screen, within} from "@testing-library/react";
import GenreSelect from "../GenreSelect";
import {GenreDTO} from "../../models/GenreDTO";
import userEvent from "@testing-library/user-event";

const FIRST_ELEMENT_INDEX = 0;

const genresOptions: GenreDTO[] = [
    { name: "Fantastic" },
    { name: "Anime" },
];

const mockHandleSelect = jest.fn();

const Component = () => <GenreSelect genres={genresOptions} onSelect={mockHandleSelect} />;

describe("GenreSelect", () => {

    it("Should renders correctly", () => {
        const { asFragment } = render(<Component />);
        expect(asFragment()).toMatchSnapshot();
        const click = () => userEvent.click(screen.getByText("Select Genre"));
        act(() => click());
        expect(asFragment()).toMatchSnapshot();
    });

    it("Should test that component renders all genres passed in props", () => {
        render(<Component />);
        const click = () => userEvent.click(screen.getByText("Select Genre"));
        act(() => click());
        genresOptions.forEach(
            async ({ name }) => expect(await screen.findAllByText(name))
                .toBeInTheDocument(),
        );
    });

    it("Should test that component highlights a selected genre passed in props", async () => {
        const { asFragment } = render(<Component />);
        const clickSelectGenre = () => userEvent.click(screen.getByText("Select Genre"));
        act(() => clickSelectGenre())
        const selectItem: HTMLElement = await screen.getAllByRole("option")[FIRST_ELEMENT_INDEX];
        const clickOption = () => userEvent.click(selectItem);
        act(() => clickOption());
        const checkbox: HTMLInputElement = within(selectItem).getByTestId("checkbox");
        expect(checkbox).toBeInTheDocument();
        expect(checkbox?.value).toBeTruthy();
        expect(asFragment()).toMatchSnapshot();
    });

    it("Test 'onSelect' passes correct genre in arguments", async () => {
        render(<Component />);
        const clickSelectGenre = () => userEvent.click(screen.getByText("Select Genre"));
        act(() => clickSelectGenre());
        const selectItem: HTMLElement = await screen.getAllByRole("option")[FIRST_ELEMENT_INDEX];
        const clickOption = () => userEvent.click(selectItem);
        act(() => clickOption());
        expect(mockHandleSelect).toBeCalledWith([{ name: "Fantastic" }]);
    });

});