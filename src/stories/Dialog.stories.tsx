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

export const Base = Template.bind({});

export const MovieAdd = MovieAddTemplate.bind({});

export const MovieDelete = MovieDeleteTemplate.bind({});