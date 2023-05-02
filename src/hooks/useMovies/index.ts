import {useState} from "react";
import {MovieDetailsDTO} from "../../models/MovieDetailsDTO";

const useMovies = () => {
    const [
        movies,
        setMovies,
    ] = useState<MovieDetailsDTO[]|null>(null);


    return {
        movies,
        setMovies,
    };
};

export default useMovies;