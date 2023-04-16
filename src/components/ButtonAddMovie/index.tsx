import {StyledButtonAddMovie} from "./styled";
import SuccessfullMessage from "../SuccessfullMessage";
import FormMovieAdd from "../FormMovieAdd";
import Dialog from "../Dialog";
import {useMemo, useState} from "react";
import {FormMovieAddDTO} from "../../models/FormMovieAddDTO";
import {createFormModel} from "../FormMovieAdd/helpers";

const ButtonAddMovie = () => {
    const [ isOpened, setIsOpened ] = useState<boolean>(false);
    const handleCloseButton = () => setIsOpened(false);
    const handleOpenDialog = () => setIsOpened(true);

    const [isShowSuccessMessage, setIsShowSuccessMessage] = useState<boolean>(false);

    const model = useMemo<FormMovieAddDTO>(() => createFormModel(), []);
    const handleSubmit = (e: FormMovieAddDTO) => {
        console.log(e);
        setIsShowSuccessMessage(true);
    };

    return (
        <>
            <StyledButtonAddMovie onClick={handleOpenDialog}>
                + ADD MOVIE
            </StyledButtonAddMovie>
            <Dialog
                isOpened={isOpened}
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
    );
};

export default ButtonAddMovie;