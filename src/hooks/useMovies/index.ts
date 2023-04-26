import {useState} from "react";
import {MovieDetailsDTO} from "../../models/MovieDetailsDTO";

const EMPTY_STRING = "";

const useMovies = () => {
    const [
        movies,
        setMovies,
    ] = useState<MovieDetailsDTO[]>([]);

    const [
        sortValue,
        setSortValue,
    ] = useState<string>(EMPTY_STRING);

    const [
        selectedMovie,
        setSelectedMovie,
    ] = useState<string|null>(null);


    const [
        genreValue,
        setGenreValue,
    ] = useState<string>(EMPTY_STRING);

    return {
        movies,
        setMovies,
        sortValue,
        setSortValue,
        selectedMovie,
        setSelectedMovie,
        genreValue,
        setGenreValue,
    };
};

export default useMovies;