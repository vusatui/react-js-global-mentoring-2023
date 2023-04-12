import {FormEventHandler, useState} from "react";

import {GenreDTO} from "../../models/GenreDTO";
import {FormMovieAddDTO} from "../../models/FormMovieAddDTO";

import {
    StyledForm, StyledFormButtonReset,
    StyledFormButtons, StyledFormButtonSubmit, StyledFormLabelLeft, StyledFormLabelRight, StyledFormLabelTextarea,
    StyledFormRow,
    StyledFormRows,
    StyledFormTitle,
    StyledFormWrapper, StyledTextarea
} from "./styled";

import InputText from "../InputText";
import CalendarIcon from "../icons/CalendarIcon";
import GenreSelect from "../GenreSelect";

interface FormMovieAddProps {
    initialData: FormMovieAddDTO
    handleSubmit: (model: FormMovieAddDTO) => void
}

const genresOptions: GenreDTO[] = [
    { name: "Fantastic" },
    { name: "Anime" },
];

const FormMovieAdd = ({
  initialData,
  handleSubmit: _handleSubmit,
}: FormMovieAddProps) => {
    const [model, setModel] = useState<FormMovieAddDTO>(initialData);

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        _handleSubmit(model);
    };

    return (
        <StyledFormWrapper>
            <StyledFormTitle>
                ADD MOVIE
            </StyledFormTitle>
            <StyledForm onSubmit={handleSubmit}>
                <StyledFormRows>
                    <StyledFormRow>
                        <StyledFormLabelLeft
                            htmlFor="title"
                            title="TITLE"
                        >
                            <InputText
                                id="title"
                                value={model.title}
                                onChange={(e) => setModel({ ...model, title: e.target.value })}
                            />
                        </StyledFormLabelLeft>
                        <StyledFormLabelRight
                            htmlFor="release-date"
                            title="RELEASE DATE"
                        >
                            <InputText
                                id="release-date"
                                value={model.releaseDate}
                                icon={(<CalendarIcon />)}
                                placeholder="Select Date"
                                onChange={(e) => setModel({ ...model, releaseDate: e.target.value })}
                            />
                        </StyledFormLabelRight>
                    </StyledFormRow>
                    <StyledFormRow>
                        <StyledFormLabelLeft
                            htmlFor="movie-url"
                            title="MOVIE URL"
                        >
                            <InputText
                                id="movie-url"
                                value={model.movieUrl}
                                placeholder="https://"
                                onChange={(e) => setModel({ ...model, movieUrl: e.target.value })}
                            />
                        </StyledFormLabelLeft>
                        <StyledFormLabelRight
                            htmlFor="rating"
                            title="RATING"
                        >
                            <InputText
                                id="rating"
                                value={model.rating}
                                placeholder="7.8"
                                onChange={(e) => setModel({ ...model, rating: e.target.value })}
                            />
                        </StyledFormLabelRight>
                    </StyledFormRow>
                    <StyledFormRow>
                        <StyledFormLabelLeft
                            htmlFor="genre"
                            title="GENRE"
                        >
                            <GenreSelect
                                genres={genresOptions}
                                onSelect={(e) => setModel({ ...model, genre: e })}
                            />
                        </StyledFormLabelLeft>
                        <StyledFormLabelRight
                            htmlFor="runtime"
                            title="RUNTIME"
                        >
                            <InputText
                                id="runtime"
                                value={model.runtime}
                                placeholder="minutes"
                                onChange={(e) => setModel({ ...model, runtime: e.target.value })}
                            />
                        </StyledFormLabelRight>
                    </StyledFormRow>
                    <StyledFormRow>
                        <StyledFormLabelTextarea
                            htmlFor="overview"
                            title="OVERVIEW"
                        >
                            <StyledTextarea
                                id="overview"
                                value={model.overview}
                                placeholder="Movie description"
                                onChange={(e) => setModel({ ...model, overview: e.target.value })}
                            />
                        </StyledFormLabelTextarea>
                    </StyledFormRow>
                </StyledFormRows>
                <StyledFormButtons>
                    <StyledFormButtonReset>
                        RESET
                    </StyledFormButtonReset>
                    <StyledFormButtonSubmit>
                        SUBMIT
                    </StyledFormButtonSubmit>
                </StyledFormButtons>
            </StyledForm>
        </StyledFormWrapper>
    );
};

export default FormMovieAdd;