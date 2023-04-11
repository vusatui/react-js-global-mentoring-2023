import {FormMovieAddDTO} from "../../models/FormMovieAddDTO";

export const createFormModel = (): FormMovieAddDTO => ({
    title: "",
    movieUrl: "",
    genre: [],
    overview: "",
    runtime: "",
    rating: "",
    releaseDate: "",
});