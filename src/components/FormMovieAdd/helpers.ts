import {FormMovieAddDTO} from "../../models/FormMovieAddDTO";
import {MovieDetailsDTO} from "../../models/MovieDetailsDTO";

export const createFormModel = (movieDetails?: MovieDetailsDTO): FormMovieAddDTO => ({
    title: movieDetails?.title ?? "",
    movieUrl: "",
    genre: movieDetails?.genres ?? [],
    overview: movieDetails?.description ?? "",
    runtime: movieDetails?.duration ?? "",
    rating: String(movieDetails?.rating) ?? "",
    releaseDate: movieDetails?.year ?? "",
});