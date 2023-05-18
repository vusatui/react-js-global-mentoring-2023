import Label from "../components/Label";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: "Components/Label",
    component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = args => (
    <Label {...args}>
        Content
    </Label>
);

export const Base = Template.bind({});
Base.args = {
    title: "This is Label",
    htmlFor: "input-id"
};