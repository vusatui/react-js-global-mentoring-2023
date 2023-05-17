import {StyledAppWrapper} from "../../styled";
import MovieDetails from "../../components/MovieDetails";
import Header from "../../components/Header";
import PageBody from "../../components/PageBody";
import Footer from "../../components/Footer";
import React, {useMemo, useState} from "react";
import {MovieDetailsDTO} from "../../models/MovieDetailsDTO";
import {MovieTileDTO} from "../../models/MovieTileDTO";
import {SelectOptionDTO} from "../../models/SelectOptionDTO";
import {Route, Routes, useNavigate} from "react-router-dom";
import withMovieDetails from "../../components/withMovieDetails";
import SuccessfullMessage from "../../components/SuccessfullMessage";
import FormMovieAdd from "../../components/FormMovieAdd";
import Dialog from "../../components/Dialog";
import {FormMovieAddDTO} from "../../models/FormMovieAddDTO";
import {createFormModel} from "../../components/FormMovieAdd/helpers";

interface HomeProps {
    className?: string
    search: string
    handleMovieFind: (search: string) => void
    movies: MovieDetailsDTO[]
    handleMovieClick: (movieId: string) => void
    sortOptions: SelectOptionDTO<string>[]
    sortValue: string
    handleSort: (value: string) => void
    genreOptions: SelectOptionDTO<string>[]
    genreValue: string
    handleGenreSelect: (value: string) => void
}

const Home = ({
  className,
  search,
  handleMovieFind,
  movies,
  handleMovieClick,
  sortOptions,
  sortValue,
  handleSort,
  genreOptions,
  genreValue,
  handleGenreSelect,
}: HomeProps) => {
    const navigate = useNavigate();

    const moviesTiles = useMemo<MovieTileDTO[]>(() => movies.map(movie => ({
        imageUrl: movie.imageUrl,
        title: movie.title,
        year: movie.year,
        genres: movie.genres,
    })), [movies]);

    const MovieDetailsWithMovieDetails = withMovieDetails(MovieDetails, movies);

    const [isShowSuccessMessage, setIsShowSuccessMessage] = useState<boolean>(false);

    const model = useMemo<FormMovieAddDTO>(() => createFormModel(), []);
    const handleSubmit = (e: FormMovieAddDTO) => {
        console.log(e);
        setIsShowSuccessMessage(true);
        setTimeout(() => {
            setIsShowSuccessMessage(false);
        }, 1000);
    };

    const handleCloseButton = () => {
        navigate("/");
    };

    return (
        <StyledAppWrapper className={className}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Header
                            search={search}
                            handleSearch={handleMovieFind}
                        />
                    }
                />
                <Route
                    path="new"
                    element={
                    <>
                        <Header
                            search={search}
                            handleSearch={handleMovieFind}
                        />
                        <Dialog
                            isOpened={true}
                            onCloseButtonClick={handleCloseButton}
                        >
                            {isShowSuccessMessage
                                ? <SuccessfullMessage title="CONGRATULATIONS !">
                                    The movie has been added to <br/>
                                    database successfully
                                </SuccessfullMessage>
                                : <FormMovieAdd
                                    title="ADD MOVIE"
                                    initialData={model}
                                    handleSubmit={handleSubmit}
                                />
                            }
                        </Dialog>
                    </>

                    }
                />
                <Route
                    path=":movieId"
                    element={<MovieDetailsWithMovieDetails />}
                />
            </Routes>
            <PageBody
                movies={moviesTiles}
                handleMovieClick={handleMovieClick}
                sortOptions={sortOptions}
                sortValue={sortValue}
                handleSort={handleSort}
                genreOptions={genreOptions}
                genreValue={genreValue}
                handleGenreSelect={handleGenreSelect}
            />
            <Footer/>
        </StyledAppWrapper>
    );
};

export default Home;