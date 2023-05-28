import FormMovieAdd from "./index";
import {useMemo} from "react";
import {FormMovieAddDTO} from "../../models/FormMovieAddDTO";
import {createFormModel} from "./helpers";
import {render} from "@testing-library/react";

const ADD_MOVIE = "ADD MOVIE";

const Component = () => {
    const model = useMemo<FormMovieAddDTO>(() => createFormModel(), []);
    const handleSubmit = (e: FormMovieAddDTO) => {
        console.log(e);
    };

    return (
        <FormMovieAdd
            title={ADD_MOVIE}
            initialData={model}
            handleSubmit={handleSubmit}
        />
    );
}

describe("FormMovieAdd", () => {

    it("Should renders correctly", () => {
        const { asFragment } = render(<Component />);
        expect(asFragment()).toMatchSnapshot();
    });

});