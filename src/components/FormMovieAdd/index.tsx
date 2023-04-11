import {FormMovieAddDTO} from "../../models/FormMovieAddDTO";
import {
    StyledForm, StyledFormButtonReset,
    StyledFormButtons, StyledFormButtonSubmit, StyledFormLabelLeft, StyledFormLabelRight,
    StyledFormRow,
    StyledFormRows,
    StyledFormTitle,
    StyledFormWrapper, StyledTextarea
} from "./styled";
import InputText from "../InputText";
import {useState} from "react";
import CalendarIcon from "../icons/CalendarIcon";
import GenreSelect from "../GenreSelect";
import {GenreDTO} from "../../models/GenreDTO";
import Label from "../Label";

interface FormMovieAddProps {
    initialData: FormMovieAddDTO
}

const genresOptions: GenreDTO[] = [
    { name: "Fantastic" },
    { name: "Anime" },
];

const FormMovieAdd = ({
  initialData
}: FormMovieAddProps) => {
    const [model, setModel] = useState(initialData);

    return (
        <StyledFormWrapper>
            <StyledFormTitle>
                ADD MOVIE
            </StyledFormTitle>
            <StyledForm>
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
                        <Label
                            htmlFor="overview"
                            title="OVERVIEW"
                        >
                            <StyledTextarea
                                id="overview"
                                value={model.overview}
                                placeholder="Movie description"
                                onChange={(e) => setModel({ ...model, overview: e.target.value })}
                            />
                        </Label>
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