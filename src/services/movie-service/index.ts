import {FormMovieAddDTO} from "../../models/FormMovieAddDTO";

const BASE_URL = "http://localhost:4000";

interface Movie {
    id: number
    title: string
    tagline: string
    vote_average: number
    vote_count: number
    release_date: string
    poster_path: string
    overview: string
    budget: number
    revenue: number
    runtime: number
    genres: string[]
}

export interface MovieResponse {
    data: Movie[]
    total: number
    offset: number
    limit: number
}

export const getMovies = async (
    sortBy: string,
    filter: string,
    search: string,
    searchBy: string = "title"
): Promise<MovieResponse> => {
    const url = new URL(`${BASE_URL}/movies`);
    if (sortBy) url.searchParams.set("sortBy", sortBy);
    if (filter) url.searchParams.set("filter", filter);
    if (search) url.searchParams.set("search", search);
    if (searchBy) url.searchParams.set("searchBy", searchBy);
    try {
        return (await fetch(url)).json();
    } catch (e) {
        console.error(e);
    }
}

export const createMovie = async (
    movieDTO: FormMovieAddDTO,
): Promise<MovieResponse> => {
    const url = new URL(`${BASE_URL}/movies`);
    // @ts-ignore
    return (await fetch({
        url: url.toString(),
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(movieDTO),
    })).json();
}

export const updateMovie = async (
    movieDTO: Partial<FormMovieAddDTO>,
): Promise<MovieResponse> => {
    const url = new URL(`${BASE_URL}/movies`);
    // @ts-ignore
    return (await fetch({
        url: url.toString(),
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(movieDTO),
    })).json();
}