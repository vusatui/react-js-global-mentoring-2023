import {
    StyledMovieList,
    StyledMovieListFound,
    StyledMovieListFoundCount,
    StyledMovieListGrid,
    StyledMovieListGridItem
} from "./styled";
import Container from "../Container";
import MovieFilters from "./MovieFilters";
import {MovieTileDTO} from "../../models/MovieTileDTO";
import MovieTile from "../MovieTile";
import {SelectOptionDTO} from "../../models/SelectOptionDTO";

interface MovieListProps {
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

const MovieList = ({
    className,
    movies,
    handleMovieClick,
    sortOptions,
    sortValue,
    handleSort,
    genreOptions,
    genreValue,
    handleGenreSelect,
}: MovieListProps) => {
    const handleClick = (value: MovieTileDTO) => {
        handleMovieClick(value.title);
    };

    return (
        <StyledMovieList className={className}>
            <Container>
                <MovieFilters
                    sortOptions={sortOptions}
                    sortValue={sortValue}
                    handleSort={handleSort}
                    genreOptions={genreOptions}
                    genreValue={genreValue}
                    handleGenreSelect={handleGenreSelect}
                />
                <StyledMovieListFound>
                    <StyledMovieListFoundCount>
                        39&nbsp;
                    </StyledMovieListFoundCount>
                     movies found
                </StyledMovieListFound>
                <StyledMovieListGrid>
                    {movies.map((movie) => (
                        <StyledMovieListGridItem key={movie.title}>
                            <MovieTile
                                movieTile={movie}
                                onClick={handleClick}
                            />
                        </StyledMovieListGridItem>
                    ))}
                </StyledMovieListGrid>
            </Container>
        </StyledMovieList>
    );
};

export default MovieList;