import {ComponentMeta, ComponentStory} from "@storybook/react";

import {useState} from "react";

import Counter from "../components/Counter";

export default {
    title: "Components/Counter",
    component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = args =>{
    const [counterValue, setCounterValue] = useState<number>(0);

    return (
        <Counter
            {...args}
            value={counterValue}
            onChange={setCounterValue}
        />
    );
}

export const Base = Template.bind({});