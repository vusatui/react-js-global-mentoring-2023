import {GenreDTO} from "../../models/GenreDTO";
import {FormMovieAddDTO} from "../../models/FormMovieAddDTO";

import {
    StyledError,
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
import {Formik, FormikErrors, FormikHelpers} from "formik";

interface FormMovieAddProps {
    initialData: FormMovieAddDTO
    title: string
    handleSubmit: (model: FormMovieAddDTO) => void
}

const genresOptions: GenreDTO[] = [
    { name: "Fantastic" },
    { name: "Anime" },
];

const FormMovieAdd = ({
  initialData,
  title,
  handleSubmit: _handleSubmit,
}: FormMovieAddProps) => {
    const handleValidate = (values: FormMovieAddDTO): FormikErrors<FormMovieAddDTO> =>
        (Object.keys(values) as [keyof FormMovieAddDTO]).reduce(
            (errors, key) => {
                if (!values[key]) {
                    errors[key] = "Required"
                }
                return errors
            }, ({} as FormikErrors<FormMovieAddDTO>));

    const handleSubmit = (values: FormMovieAddDTO, { setSubmitting }: FormikHelpers<FormMovieAddDTO>) => {
        _handleSubmit(values);
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={initialData}
            validate={handleValidate}
            onSubmit={handleSubmit}
        >
            {({
                values,
                errors,
                handleSubmit,
                isSubmitting,
                setFieldValue,
                resetForm,
                /* and other goodies */
            }) => (
                <StyledFormWrapper>
                <StyledFormTitle>
                    { title }
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
                                    value={values.title}
                                    onChange={(e) => setFieldValue("title", e.target.value, true)}
                                />
                                {errors.title && <StyledError>{ errors.title }</StyledError>}
                            </StyledFormLabelLeft>
                            <StyledFormLabelRight
                                htmlFor="release-date"
                                title="RELEASE DATE"
                            >
                                <InputText
                                    id="release-date"
                                    value={values.releaseDate}
                                    icon={(<CalendarIcon />)}
                                    placeholder="Select Date"
                                    onChange={(e) => setFieldValue("releaseDate", e.target.value, true)}
                                />
                                {errors.releaseDate && <StyledError>{ errors.releaseDate }</StyledError>}
                            </StyledFormLabelRight>
                        </StyledFormRow>
                        <StyledFormRow>
                            <StyledFormLabelLeft
                                htmlFor="movie-url"
                                title="MOVIE URL"
                            >
                                <InputText
                                    id="movie-url"
                                    value={values.movieUrl}
                                    placeholder="https://"
                                    onChange={(e) => setFieldValue("movieUrl", e.target.value, true)}
                                />
                                {errors.movieUrl && <StyledError>{ errors.movieUrl }</StyledError>}
                            </StyledFormLabelLeft>
                            <StyledFormLabelRight
                                htmlFor="rating"
                                title="RATING"
                            >
                                <InputText
                                    id="rating"
                                    value={values.rating}
                                    placeholder="7.8"
                                    onChange={(e) => setFieldValue("rating", e.target.value, true)}
                                />
                                {errors.rating && <StyledError>{ errors.rating }</StyledError>}
                            </StyledFormLabelRight>
                        </StyledFormRow>
                        <StyledFormRow>
                            <StyledFormLabelLeft
                                htmlFor="genre"
                                title="GENRE"
                            >
                                <GenreSelect
                                    genres={genresOptions}
                                    onSelect={(e) => setFieldValue("genre", e, true)}
                                />
                                {errors.genre && <StyledError>{ errors.genre.toString() }</StyledError>}
                            </StyledFormLabelLeft>
                            <StyledFormLabelRight
                                htmlFor="runtime"
                                title="RUNTIME"
                            >
                                <InputText
                                    id="runtime"
                                    value={values.runtime}
                                    placeholder="minutes"
                                    onChange={(e) => setFieldValue("runtime", e.target.value, true)}
                                />
                                {errors.runtime && <StyledError>{ errors.runtime }</StyledError>}
                            </StyledFormLabelRight>
                        </StyledFormRow>
                        <StyledFormRow>
                            <StyledFormLabelTextarea
                                htmlFor="overview"
                                title="OVERVIEW"
                            >
                                <StyledTextarea
                                    id="overview"
                                    value={values.overview}
                                    placeholder="Movie description"
                                    onChange={(e) => setFieldValue("overview", e.target.value, true)}
                                />
                                {errors.overview && <StyledError>{ errors.overview }</StyledError>}
                            </StyledFormLabelTextarea>
                        </StyledFormRow>
                    </StyledFormRows>
                    <StyledFormButtons>
                        <StyledFormButtonReset type="reset" onClick={() => resetForm()}>
                            RESET
                        </StyledFormButtonReset>
                        <StyledFormButtonSubmit type="submit" disabled={isSubmitting}>
                            SUBMIT
                        </StyledFormButtonSubmit>
                    </StyledFormButtons>
                </StyledForm>
            </StyledFormWrapper>
            )}
        </Formik>
    );
};

export default FormMovieAdd;