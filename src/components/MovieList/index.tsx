import {
    StyledMovieList,
    StyledMovieListFound,
    StyledMovieListFoundCount,
    StyledMovieListGrid,
    StyledMovieListGridItem
} from "./styled";
import Container from "../Container";
import MovieFilters from "./MovieFilters";
import {GenreDTO} from "../../models/GenreDTO";
import {MovieTileDTO} from "../../models/MovieTileDTO";
import MovieTile from "../MovieTile";

const genres: GenreDTO[] = [
    { name: "Drama" },
    { name: "Biography" },
    { name: "Music" },
];

const movieTileDTO: MovieTileDTO = {
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/2e/Bohemian_Rhapsody_poster.png",
    title: "Bohemian Rhapsody",
    year: "2003",
    genres,
};

const MovieList = () => {
    const handleClick = (value: MovieTileDTO) => console.log(value);

    return (
        <StyledMovieList>
            <Container>
                <MovieFilters />
                <StyledMovieListFound>
                    <StyledMovieListFoundCount>
                        39&nbsp;
                    </StyledMovieListFoundCount>
                     movies found
                </StyledMovieListFound>
                <StyledMovieListGrid>
                    {Array(6).fill(null).map(() => (
                        <StyledMovieListGridItem key={movieTileDTO.title}>
                            <MovieTile
                                movieTile={movieTileDTO}
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