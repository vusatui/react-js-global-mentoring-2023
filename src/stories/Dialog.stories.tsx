import Dialog from "../components/Dialog";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {useMemo, useState} from "react";
import FormMovieAdd from "../components/FormMovieAdd";
import {FormMovieAddDTO} from "../models/FormMovieAddDTO";
import {createFormModel} from "../components/FormMovieAdd/helpers";
import SuccessfullMessage from "../components/SuccessfullMessage";
import FormMovieDelete from "../components/FormMovieDelete";

export default {
    title: "Components/Dialog",
    component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = () => {
    const [ isOpened, setIsOpened ] = useState(false);
    const handleCloseButton = () => setIsOpened(false);
    const handleOpenDialog = () => setIsOpened(true);
    return (
        <>
            <button onClick={handleOpenDialog}>Open Dialog</button>
            <Dialog
                isOpened={isOpened}
                onCloseButtonClick={handleCloseButton}
            >
                Dialog content 1
            </Dialog>
        </>
    );
};

const MovieAddTemplate: ComponentStory<typeof Dialog> = () => {
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
            <button onClick={handleOpenDialog}>
                Add Movie
            </button>
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

const MovieDeleteTemplate: ComponentStory<typeof Dialog> = () => {
    const [ isOpened, setIsOpened ] = useState<boolean>(false);
    const handleCloseButton = () => setIsOpened(false);
    const handleOpenDialog = () => setIsOpened(true);

    const [isShowSuccessMessage, setIsShowSuccessMessage] = useState<boolean>(false);

    const handleSubmit = () => setIsShowSuccessMessage(true);

    return (
        <>
            <button onClick={handleOpenDialog}>
                Delete Movie
            </button>
            <Dialog
                isOpened={isOpened}
                onCloseButtonClick={handleCloseButton}
            >
                {isShowSuccessMessage
                    ? <SuccessfullMessage title="CONGRATULATIONS !">
                        The movie has been added to <br/>
                        database successfully
                    </SuccessfullMessage>
                    : <FormMovieDelete
                        onConfirm={handleSubmit}
                    />
                }
            </Dialog>
        </>
    );
};


const MovieEditTemplate: ComponentStory<typeof Dialog> = () => {
    const [ isOpened, setIsOpened ] = useState<boolean>(false);
    const handleCloseButton = () => setIsOpened(false);
    const handleOpenDialog = () => setIsOpened(true);

    const [isShowSuccessMessage, setIsShowSuccessMessage] = useState<boolean>(false);

    const model = useMemo<FormMovieAddDTO>(() => {
        const formMovieAddDTO = createFormModel();
        formMovieAddDTO.title = "Moana";
        formMovieAddDTO.movieUrl = "https://www.moana.com";
        formMovieAddDTO.releaseDate = "11/14/2016";
        formMovieAddDTO.rating = "7.6";
        formMovieAddDTO.runtime = "1h 47min";
        formMovieAddDTO.overview = "Moana Waialiki is a sea voyaging enthusiast and the only daughter of a chief in a long line of navigators. " +
            "When her island's fishermen can't catch any fish and the crops fail, she learns that the demigod Maui caused the blight by stealing the heart of the goddess, Te Fiti. " +
            "The only way to heal the island is to persuade Maui to return Te Fiti's heart, so Moana sets off on an epic journey across the Pacific." +
            " The film is based on stories from Polynesian mythology.";

        return formMovieAddDTO;
    }, []);
    const handleSubmit = (e: FormMovieAddDTO) => {
        console.log(e);
        setIsShowSuccessMessage(true);
    };


    return (
        <>
            <button onClick={handleOpenDialog}>
                Edit Movie
            </button>
            <Dialog
                isOpened={isOpened}
                onCloseButtonClick={handleCloseButton}
            >
                {isShowSuccessMessage
                    ? <SuccessfullMessage title="CONGRATULATIONS !">
                        The movie has been updated successfully
                    </SuccessfullMessage>
                    : <FormMovieAdd
                        title="EDIT MOVIE"
                        initialData={model}
                        handleSubmit={handleSubmit}
                    />
                }
            </Dialog>
        </>
    );
};

export const Base = Template.bind({});

export const MovieAdd = MovieAddTemplate.bind({});

export const MovieDelete = MovieDeleteTemplate.bind({})

export const MovieEdit = MovieEditTemplate.bind({});