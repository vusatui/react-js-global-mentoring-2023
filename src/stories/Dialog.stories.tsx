import Dialog from "../components/Dialog";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {useState} from "react";

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

export const Base = Template.bind({});