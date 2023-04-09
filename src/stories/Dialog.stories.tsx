import Dialog from "../components/Dialog";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: "Components/Dialog",
    component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = () => {

    return (
        <>
            <Dialog>
                Dialog content 1
            </Dialog>
            <div id="modals-root"></div>
        </>

    );
};

export const Base = Template.bind({});