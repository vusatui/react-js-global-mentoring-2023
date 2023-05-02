import React, {useEffect, useState} from 'react';
import {SelectOptionDTO} from "./models/SelectOptionDTO";
import {getMovies} from "./services/movie-service";
import useMovies from "./hooks/useMovies";
import {
    useNavigate,
    useParams,
    useSearchParams
} from "react-router-dom";
import Home from "./pages/Home";

const EMPTY_STRING = "";

function App() {
    const navigate = useNavigate();

    let [searchParams, setSearchParams] = useSearchParams();

    const { movieId } = useParams<"movieId">();

    const {
        movies,
        setMovies,
    } = useMovies();

    const [
        sortValue,
        setSortValue,
    ] = useState<string>(searchParams.get("sortedBy") ?? EMPTY_STRING);

    const [
        genreValue,
        setGenreValue,
    ] = useState<string>(searchParams.get("genre") ?? EMPTY_STRING);

    const [
        genreOptions,
    ] = useState<SelectOptionDTO<string>[]>([
        { id: "Comedy", label: "Comedy", value: "Comedy" },
        { id: "Drama", label: "Drama", value: "Comedy" },
        { id: "Romance", label: "Romance", value: "Comedy"},
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
    ] = useState<string>(searchParams.get("search") ?? EMPTY_STRING);


    const handleMovieFind = (searchQuery: string) => {
        setSearch(searchQuery);
    };

    const handleMoviesSort = (value: string) => {
        setSortValue(value);
    };

    const handleGenreSelect = (value: string) => {
        setGenreValue(value === genreValue ? EMPTY_STRING : value);
    };

    const handleMovieClick = (movieIdValue: string) => {
        navigate((movieId === movieIdValue) ? "/" : `/${movieIdValue}`);
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
        searchParams.set("search", search)
        searchParams.set("genre", genreValue)
        searchParams.set("sortedBy", sortValue)
        setSearchParams(searchParams);
    }, [search, genreValue, sortValue, searchParams, setSearchParams]);

    return (
        movies
            ? <Home
                search={search}
                handleMovieFind={handleMovieFind}
                movies={movies}
                handleMovieClick={handleMovieClick}
                sortOptions={sortOptions}
                sortValue={sortValue}
                handleSort={handleMoviesSort}
                genreOptions={genreOptions}
                genreValue={genreValue}
                handleGenreSelect={handleGenreSelect}
            />
            : <div>Loading</div>
    );
}

export default App;
