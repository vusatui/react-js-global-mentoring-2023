import {StyledPageBody} from "./styled";
import MovieList from "../MovieList";
import {MovieTileDTO} from "../../models/MovieTileDTO";
import {SelectOptionDTO} from "../../models/SelectOptionDTO";
import {MovieDetailsDTO} from "@/models/MovieDetailsDTO";
import {useMemo} from "react";

interface PageBodyProps {
    className?: string
    movies: MovieDetailsDTO[]
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
    const movieTileDTOs = useMemo<MovieTileDTO[]>(() => movies.map(movie => ({
        imageUrl: movie.imageUrl,
        title: movie.title,
        year: movie.year,
        genres: movie.genres,
    })), [movies]);

    return (
        <StyledPageBody className={className}>
            <MovieList 
                movies={movieTileDTOs}
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