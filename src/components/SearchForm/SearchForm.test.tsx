import SearchForm from "./index";
import {act, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const INITIAL_VALUE: string = "James Bond";
const UPDATED_VALUE: string = "Star Wars";

const mockHandleSearch = jest.fn();

const Component = () => <SearchForm initialValue={INITIAL_VALUE} onSearch={mockHandleSearch} />;

describe("SearchForm", () => {

    it("Should renders correctly", () => {
        const { asFragment } = render(<Component />);
        expect(screen.getByDisplayValue(INITIAL_VALUE)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

    it("Test 'onSelect' passes correct genre in arguments", () => {
        render(<Component />);
        const input = screen.getByTestId("search-input");
        const button = screen.getByTestId("search-button");
        act(() => {
            userEvent.clear(input);
            userEvent.type(input, UPDATED_VALUE);
            userEvent.click(button);
        });
        expect(mockHandleSearch).toBeCalledWith(UPDATED_VALUE);
    });

    it("Test that after typing to the input and pressing Enter key, the 'onChange' prop is called with proper value", () => {
        render(<Component />);
        const input = screen.getByTestId("search-input");
        act(() => {
            userEvent.clear(input);
            userEvent.type(input, UPDATED_VALUE)
            userEvent.keyboard("{enter}");
        });
        expect(mockHandleSearch).toBeCalledWith(UPDATED_VALUE);
    });

});