import Counter from "./index";
import {act, render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {useState} from "react";

const INITIAL_STATE = 0;

const Component = () => {
    const [value, setValue] = useState<number>(INITIAL_STATE)
    const handleChange = (v: number) => act(() => setValue(v));
    return (<Counter value={value} onChange={handleChange} />);
};

describe("Counter", () => {

    test("Should renders correctly", () => {
        const { asFragment } = render(<Component />);
        expect(screen.getByText("0")).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

    test("Should decrement value", () => {
        render(<Component />);
        userEvent.click(screen.getByText("-"));
        expect(screen.getByText("-1")).toBeInTheDocument();
    });

    test("Should increment value", async () => {
        render(<Component />);
        userEvent.click(screen.getByText("+"));
        expect(screen.getByText("1")).toBeInTheDocument();
    });

});