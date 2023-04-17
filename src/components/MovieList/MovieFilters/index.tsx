import {StyledMovieFilters} from "./styled";
import GenreFilter from "./GenreFilter";
import SortControl from "../../SortControl";
import {SelectOptionDTO} from "../../../models/SelectOptionDTO";
import {useCallback} from "react";

const options: SelectOptionDTO<string>[] = [
    { id: "1", label: "Release Date", value: "Release Date" },
    { id: "2", label: "Title", value: "Title" },
];

const MovieFilters = () => {
    const handleSelect = useCallback<(value: string) => void>((value) => {
        // TODO
    }, []);

    return (
        <StyledMovieFilters>
            <GenreFilter />
            <SortControl
                value={options[0].value}
                options={options}
                onSelect={handleSelect}
            />
        </StyledMovieFilters>
    );
};

export default MovieFilters;