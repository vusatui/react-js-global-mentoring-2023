"use client";

import {MovieDetailsDTO} from "../../models/MovieDetailsDTO";
import {useRouter} from "next/router";
import {useMemo} from "react";

const withMovieDetails = (
    WrappedComponent: (props: { movieDetails: MovieDetailsDTO }) => JSX.Element,
    movies: MovieDetailsDTO[],
) => (props: any) => {
    const router = useRouter();
    const { movieId } = router.query

    const movieDetails = useMemo<MovieDetailsDTO | null | undefined>(
        () => movieId
            ? movies.find(movie => movie.title === movieId)
            : null, [movieId]);

    return (movieDetails ? <WrappedComponent movieDetails={movieDetails}  {...props}/> : <Navigate to="/"/>);
};

export default withMovieDetails;