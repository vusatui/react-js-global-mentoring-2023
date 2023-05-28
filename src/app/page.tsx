'use client';

import {useMemo, useState} from "react";
import {SelectOptionDTO} from "@/models/SelectOptionDTO";
import {MovieTileDTO} from "@/models/MovieTileDTO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {getMovies} from "@/services/movie-service";
import PageBody from "@/components/PageBody";
import {MovieDetailsDTO} from "@/models/MovieDetailsDTO";

const EMPTY_STRING = "";

export default async function Home() {
    const movies: MovieDetailsDTO[] = (await getMovies("", "", "", ""))
        .data.map(movie => ({
            imageUrl: movie.poster_path,
            title: movie.title,
            year: movie.release_date,
            genres: movie.genres.map(genre => ({name: genre})),
            duration: `${movie.runtime}`,
            rating: movie.vote_average,
            description: movie.overview,
        }));

    const genreOptions = [
        {id: "Comedy", label: "Comedy", value: "Comedy"},
        {id: "Drama", label: "Drama", value: "Comedy"},
        {id: "Romance", label: "Romance", value: "Comedy"},
    ]

    const sortOptions = [
        {id: "1", label: "Release Date", value: "release_date"},
        {id: "2", label: "Title", value: "title"},
    ];


    const handleMovieFind = (searchQuery: string) => {

    };

    const handleMoviesSort = (value: string) => {

    };

    const handleGenreSelect = (value: string) => {

    };

    const handleMovieClick = (movieIdValue: string) => {

    };

    return (
        <div>
            <Header
                search="search"
                handleSearch={handleMovieFind}
            />
            <PageBody
                movies={movies}
                handleMovieClick={handleMovieClick}
                sortOptions={sortOptions}
                sortValue=""
                handleSort=""
                genreOptions={genreOptions}
                genreValue=""
                handleGenreSelect={handleGenreSelect}
            />
            <Footer/>
        </div>
    );
};