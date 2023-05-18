import {StyledMovieFilters} from "./styled";
import GenreFilter from "./GenreFilter";
import SortControl from "../../SortControl";
import {SelectOptionDTO} from "../../../models/SelectOptionDTO";

interface MovieFiltersProps {
    sortOptions: SelectOptionDTO<string>[]
    sortValue: string
    handleSort: (value: string) => void
    genreOptions: SelectOptionDTO<string>[]
    genreValue: string
    handleGenreSelect: (value: string) => void
}

// const options: SelectOptionDTO<string>[] = [
//     { id: "1", label: "Release Date", value: "Release Date" },
//     { id: "2", label: "Title", value: "Title" },
// ];

const MovieFilters = ({
      sortOptions,
      sortValue,
      handleSort,
      genreOptions,
      genreValue,
      handleGenreSelect,
}: MovieFiltersProps) => {
    return (
        <StyledMovieFilters>
            <GenreFilter
                options={genreOptions}
                value={genreValue}
                handleSelect={handleGenreSelect}
            />
            <SortControl
                value={sortValue}
                options={sortOptions}
                onSelect={handleSort}
            />
        </StyledMovieFilters>
    );
};

export default MovieFilters;