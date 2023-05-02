import {MovieDetailsDTO} from "../../models/MovieDetailsDTO";
import {Navigate, useParams} from "react-router-dom";
import {useMemo} from "react";

const withMovieDetails = (
    WrappedComponent: (props: { movieDetails: MovieDetailsDTO }) => JSX.Element,
    movies: MovieDetailsDTO[],
) => (props: any) => {
    const { movieId } = useParams<"movieId">();

    const movieDetails = useMemo<MovieDetailsDTO | null | undefined>(
        () => movieId
            ? movies.find(movie => movie.title === movieId)
            : null, [movieId]);

    return (movieDetails ? <WrappedComponent movieDetails={movieDetails}  {...props}/> : <Navigate to="/"/>);
};

export default withMovieDetails;