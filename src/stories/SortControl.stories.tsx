import {useState} from "react";

import {ComponentMeta, ComponentStory} from "@storybook/react";

import SortControl from "../components/SortControl";

import {SelectOptionDTO} from "../models/SelectOptionDTO";

export default {
    title: "Components/SortControl",
    component: SortControl
} as ComponentMeta<typeof SortControl>;

const options: SelectOptionDTO<string>[] = [
    { id: "1", label: "Release Date", value: "Release Date" },
    { id: "2", label: "Title", value: "Title" },
];

const Template: ComponentStory<typeof SortControl> = ({ options, value }) => {
    const [sortingValue, setSortingValue] = useState<string>(value);

    const handleSelect = (value: string) => setSortingValue(value);

    return (<SortControl options={options} value={sortingValue} onSelect={handleSelect} />);
};

export const Base = Template.bind({});
Base.args = {
    options,
    value: "Release Date",
};