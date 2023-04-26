import {StyledAppWrapper} from "../../styled";
import MovieDetails from "../../components/MovieDetails";
import Header from "../../components/Header";
import PageBody from "../../components/PageBody";
import Footer from "../../components/Footer";
import React from "react";
import {MovieDetailsDTO} from "../../models/MovieDetailsDTO";
import {MovieTileDTO} from "../../models/MovieTileDTO";
import {SelectOptionDTO} from "../../models/SelectOptionDTO";

interface HomeProps {
    className?: string
    movieDetails?: MovieDetailsDTO | null
    search: string
    handleMovieFind: (search: string) => void
    movies: MovieTileDTO[]
    handleMovieClick: (movieId: string) => void
    sortOptions: SelectOptionDTO<string>[]
    sortValue: string
    handleSort: (value: string) => void
    genreOptions: SelectOptionDTO<string>[]
    genreValue: string
    handleGenreSelect: (value: string) => void
}

const Home = ({
  className,
  movieDetails,
  search,
  handleMovieFind,
  movies,
  handleMovieClick,
  sortOptions,
  sortValue,
  handleSort,
  genreOptions,
  genreValue,
  handleGenreSelect,
}: HomeProps) => {
    return (
        <StyledAppWrapper className={className}>
            {movieDetails
                ? <MovieDetails movieDetails={movieDetails} />
                : <Header
                    search={search}
                    handleSearch={handleMovieFind}
                />
            }
            <PageBody
                movies={movies}
                handleMovieClick={handleMovieClick}
                sortOptions={sortOptions}
                sortValue={sortValue}
                handleSort={handleSort}
                genreOptions={genreOptions}
                genreValue={genreValue}
                handleGenreSelect={handleGenreSelect}
            />
            <Footer/>
        </StyledAppWrapper>
    );
};

export default Home;