import {render} from "@testing-library/react";

import SortControl from "./index";

import {SelectOptionDTO} from "../../models/SelectOptionDTO";

const options: SelectOptionDTO<string>[] = [
    { id: "1", label: "Release Date", value: "Release Date" },
    { id: "2", label: "Title", value: "Title" },
];

const mockHandleSelect = jest.fn();

const Component = () => (<SortControl options={options} value={"Release Date"} onSelect={mockHandleSelect} />)

describe("SortControl", () => {

    it("Should renders correctly", () => {
        const { asFragment } = render(<Component />);
        expect(asFragment()).toMatchSnapshot();
    });

});