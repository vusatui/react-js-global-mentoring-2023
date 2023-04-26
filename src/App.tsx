import React, {useEffect, useMemo, useState} from 'react';
import {MovieDetailsDTO} from "./models/MovieDetailsDTO";
import {MovieTileDTO} from "./models/MovieTileDTO";
import {SelectOptionDTO} from "./models/SelectOptionDTO";
import {getMovies} from "./services/movie-service";
import useMovies from "./hooks/useMovies";
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Home from "./pages/Home";
import { useNavigate } from "react-router-dom";

const EMPTY_STRING = "";

function App() {
    const navigate = useNavigate();

    const {
        movies,
        setMovies,
        sortValue,
        setSortValue,
        selectedMovie,
        setSelectedMovie,
        genreValue,
        setGenreValue,
    } = useMovies();

    const [
        genreOptions,
    ] = useState<SelectOptionDTO<string>[]>([
        { id: "Comedy", label: "Comedy", value: "Comedy" },
        { id: "Comedy", label: "Drama", value: "Comedy" },
        { id: "Comedy", label: "Romance", value: "Comedy"},
    ]);

    const [
        sortOptions,
    ] = useState<SelectOptionDTO<string>[]>([
        { id: "1", label: "Release Date", value: "release_date" },
        { id: "2", label: "Title", value: "title" },
    ]);

    const [
        search,
        setSearch,
    ] = useState<string>(new URLSearchParams(window.location.search).get("search") ?? "");

    const movieDetails = useMemo<MovieDetailsDTO|null|undefined>(
        () => selectedMovie
            ? movies.find(movie => movie.title === selectedMovie)
            : null, [movies, selectedMovie]);

    const moviesTiles = useMemo<MovieTileDTO[]>(() => movies.map(movie => ({
        imageUrl: movie.imageUrl,
        title: movie.title,
        year: movie.year,
        genres: movie.genres,
    })), [movies]);

    const handleMovieFind = (searchQuery: string) => {
        const url = new URL(window.location.href);
        url.searchParams.set("search", searchQuery);
        window.history.pushState({}, EMPTY_STRING, url);
        setSearch(searchQuery);
    };

    const handleMoviesSort = (value: string) => {
        setSortValue(value);
    };

    const handleGenreSelect = (value: string) => {
        setGenreValue(value === genreValue ? EMPTY_STRING : value);
    };

    const handleMovieClick = (movieId: string) => {
        setSelectedMovie(selectedMovie === movieId ? null : movieId);
    };

    useEffect(() => {
        getMovies(sortValue, genreValue, search).then(movieResponse => {
            setMovies(movieResponse.data.map(movie => ({
                imageUrl: movie.poster_path,
                title: movie.title,
                year: movie.release_date,
                genres: movie.genres.map(genre => ({ name: genre })),
                duration: `${movie.runtime}`,
                rating: movie.vote_average,
                description: movie.overview,
            })));
        });
    }, [sortValue, genreValue, search, setMovies]);

    useEffect(() => {
        selectedMovie
            ? navigate(`/${selectedMovie}`)
            : navigate(`/`);
    }, [navigate, selectedMovie])

    return createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route
                    path="/"
                    element={<Home
                        search={search}
                        handleMovieFind={handleMovieFind}
                        movies={moviesTiles}
                        handleMovieClick={handleMovieClick}
                        sortOptions={sortOptions}
                        sortValue={sortValue}
                        handleSort={handleMoviesSort}
                        genreOptions={genreOptions}
                        genreValue={genreValue}
                        handleGenreSelect={handleGenreSelect}
                    />}
                />
                <Route
                    path="/:movieId"
                    element={<Home
                        movieDetails={movieDetails}
                        search={search}
                        handleMovieFind={handleMovieFind}
                        movies={moviesTiles}
                        handleMovieClick={handleMovieClick}
                        sortOptions={sortOptions}
                        sortValue={sortValue}
                        handleSort={handleMoviesSort}
                        genreOptions={genreOptions}
                        genreValue={genreValue}
                        handleGenreSelect={handleGenreSelect}
                    />}
                />
            </>
        )
    );

}

export default App;
