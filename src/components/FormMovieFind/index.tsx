import {FormMovieFindForm, FormMovieFindLabel} from "./styled";
import SearchForm from "../SearchForm";

const FormMovieFind = () => {
    const handleSearch = async (search: string) => {
        // TODO: Create API Service
    };

    return (
        <FormMovieFindForm>
            <FormMovieFindLabel>
                FIND YOUR MOVIE
            </FormMovieFindLabel>
            <SearchForm
                onSearch={handleSearch}
                placeholder="What do you want to watch?"
            />
        </FormMovieFindForm>
    )
};

export default FormMovieFind;