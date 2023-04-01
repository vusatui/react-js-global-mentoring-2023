import {GenreDTO} from "./GenreDTO";

export interface MovieTileDTO {
    imageUrl: string
    title: string
    year: string
    genres: GenreDTO[]
}