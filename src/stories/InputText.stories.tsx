import {ComponentMeta, ComponentStory} from "@storybook/react";

import InputText from "../components/InputText";
import {ChangeEventHandler, useState} from "react";
import CalendarIcon from "../components/icons/CalendarIcon";

export default {
    title: "Components/InputText",
    component: InputText
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = args => {
    const [value, setValue] = useState("");
    const handleInput: ChangeEventHandler<HTMLInputElement> = (e) => setValue(e.target.value);

    return (
        <InputText
            {...args}
            placeholder="This is a placeholder"
            value={value}
            onChange={handleInput}
        />
    );
};

export const Base = Template.bind({});

export const WithIcon = Template.bind({});
WithIcon.args = {
    ...WithIcon.args,
    icon: (<CalendarIcon />),
};

