import {StyledPageBody} from "./styled";
import MovieList from "../MovieList";
import {MovieTileDTO} from "../../models/MovieTileDTO";
import {SelectOptionDTO} from "../../models/SelectOptionDTO";

interface PageBodyProps {
    className?: string
    movies: MovieTileDTO[]
    handleMovieClick: (movieId: string) => void
    sortOptions: SelectOptionDTO<string>[]
    sortValue: string
    handleSort: (value: string) => void
    genreOptions: SelectOptionDTO<string>[]
    genreValue: string
    handleGenreSelect: (value: string) => void
}

const PageBody = ({
      className,
      movies,
      handleMovieClick,
      sortOptions,
      sortValue,
      handleSort,
      genreOptions,
      genreValue,
      handleGenreSelect,
}: PageBodyProps) => {
    return (
        <StyledPageBody className={className}>
            <MovieList 
                movies={movies}
                handleMovieClick={handleMovieClick}
                sortOptions={sortOptions}
                sortValue={sortValue}
                handleSort={handleSort}
                genreOptions={genreOptions}
                genreValue={genreValue}
                handleGenreSelect={handleGenreSelect}
            />
        </StyledPageBody>
    );
};

export default PageBody;