import {GenreDTO} from "./GenreDTO";

export interface MovieDetailsDTO {
    imageUrl: string
    title: string
    year: string
    genres: GenreDTO[]
    duration: string
    rating: number
    description: string
}