import FormMovieDelete from "./index";
import {render} from "@testing-library/react";

const handleConfirm = jest.fn();

const Component = () => (<FormMovieDelete  onConfirm={handleConfirm}/>)

describe("FormMovieDelete", () => {

    it("Should renders correctly", () => {
        const { asFragment } = render(<Component />);
        expect(asFragment()).toMatchSnapshot();
    });

});