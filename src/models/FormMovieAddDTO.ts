import {GenreDTO} from "./GenreDTO";

export interface FormMovieAddDTO {
    title: string
    movieUrl: string
    genre: GenreDTO[]
    overview: string
    runtime: string
    rating: string
    releaseDate: string
}