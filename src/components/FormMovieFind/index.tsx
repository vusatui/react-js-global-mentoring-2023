import {FormMovieFindForm, FormMovieFindLabel} from "./styled";
import SearchForm from "../SearchForm";

interface FormMovieFindProps {
    className?: string
    search: string
    handleSearch: (search: string) => void
}

const FormMovieFind = ({
    className,
    search,
    handleSearch,
}: FormMovieFindProps) => (
    <FormMovieFindForm className={className}>
        <FormMovieFindLabel>
            FIND YOUR MOVIE
        </FormMovieFindLabel>
        <SearchForm
            onSearch={handleSearch}
            placeholder="What do you want to watch?"
            initialValue={search}
        />
    </FormMovieFindForm>
);


export default FormMovieFind;