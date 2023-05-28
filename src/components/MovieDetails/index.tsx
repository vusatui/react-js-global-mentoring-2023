"use client";

import {useMemo} from "react";

import {MovieDetailsDTO} from "../../models/MovieDetailsDTO";

import {
    StyledMovieDescription,
    StyledMovieDetails, StyledMovieDuration, StyledMovieGenres,
    StyledMovieImage,
    StyledMovieLeft, StyledMovieRating,
    StyledMovieRight, StyledMovieRightBottom, StyledMovieRightMiddle,
    StyledMovieRightTop, StyledMovieRightTopTop,
    StyledMovieTitle, StyledMovieYear
} from "./styled";

const GENRE_SEPARATOR = ", ";

interface MovieDetailsProps {
    className?: string
    movieDetails: MovieDetailsDTO
}

const MovieDetails = ({
    className,
    movieDetails
}: MovieDetailsProps) => {
    const genres = useMemo(() => movieDetails.genres.map(genre => genre.name)
        .join(GENRE_SEPARATOR), [movieDetails]);

    return (
        <StyledMovieDetails className={className}>
            <StyledMovieLeft>
                <StyledMovieImage src={movieDetails.imageUrl} />
            </StyledMovieLeft>
            <StyledMovieRight>
                <StyledMovieRightTop>
                    <StyledMovieRightTopTop>
                        <StyledMovieTitle>
                            {movieDetails.title}
                        </StyledMovieTitle>
                        <StyledMovieRating>
                            {movieDetails.rating}
                        </StyledMovieRating>
                    </StyledMovieRightTopTop>
                    <StyledMovieGenres>
                        {genres}
                    </StyledMovieGenres>
                </StyledMovieRightTop>
                <StyledMovieRightMiddle>
                    <StyledMovieYear>
                        {movieDetails.year}
                    </StyledMovieYear>
                    <StyledMovieDuration>
                        {movieDetails.duration}
                    </StyledMovieDuration>
                </StyledMovieRightMiddle>
                <StyledMovieRightBottom>
                    <StyledMovieDescription>
                        {movieDetails.description}
                    </StyledMovieDescription>
                </StyledMovieRightBottom>
            </StyledMovieRight>
        </StyledMovieDetails>
    );
};

export default MovieDetails;