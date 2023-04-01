import {useMemo} from "react";

import {MovieTileDTO} from "../../models/MovieTileDTO";

import {
    StyledCardBottom,
    StyledCardBottomTop, StyledCardGenres,
    StyledCardTitle,
    StyledCardTop, StyledCardYear,
    StyledImage,
    StyledMovieCard
} from "./styled";

interface MovieTileProps {
    className?: string
    movieTile: MovieTileDTO
    onClick: (movieTile: MovieTileDTO) => void
}

const GENRE_SEPARATOR = ", ";

const MovieTile = ({
    className,
    movieTile,
    onClick
}: MovieTileProps) => {
    const handleClick = () => onClick(movieTile);

    const genres = useMemo(() => movieTile.genres.map(genre => genre.name)
        .join(GENRE_SEPARATOR), [movieTile])

    return (
        <StyledMovieCard
            className={className}
            onClick={handleClick}
        >
            <StyledCardTop>
                <StyledImage src={movieTile.imageUrl} />
            </StyledCardTop>
            <StyledCardBottom>
                <StyledCardBottomTop>
                    <StyledCardTitle>
                        {movieTile.title}
                    </StyledCardTitle>
                    <StyledCardYear>
                        {movieTile.year}
                    </StyledCardYear>
                </StyledCardBottomTop>
                <StyledCardGenres>
                    {genres}
                </StyledCardGenres>
            </StyledCardBottom>
        </StyledMovieCard>
    );
}

export default MovieTile;