import {
    StyledFormMovieDeleteFooter,
    StyledFormMovieDeleteSubmitButton,
    StyledFormMovieDeleteTitle,
    StyledFormMovieDeleteWarning,
    StyledFormMovieDeleteWrapper
} from "./styled";

interface FormMovieDeleteProps {
    className?: string
    onConfirm: () => void
}

const FormMovieDelete = ({
    className,
    onConfirm,
}: FormMovieDeleteProps) => (
    <StyledFormMovieDeleteWrapper className={className}>
        <StyledFormMovieDeleteTitle>
            DELETE MOVIE
        </StyledFormMovieDeleteTitle>
        <StyledFormMovieDeleteWarning>
            Are you sure you want to delete this movie?
        </StyledFormMovieDeleteWarning>
        <StyledFormMovieDeleteFooter>
            <StyledFormMovieDeleteSubmitButton onClick={onConfirm}>
                CONFIRM
            </StyledFormMovieDeleteSubmitButton>
        </StyledFormMovieDeleteFooter>
    </StyledFormMovieDeleteWrapper>
);

export default FormMovieDelete;