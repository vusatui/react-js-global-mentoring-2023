import {ComponentMeta, ComponentStory} from "@storybook/react";

import {useState} from "react";

import GenreSelect from "../components/GenreSelect";

import {GenreDTO} from "../models/GenreDTO";

export default {
    title: "Components/GenreSelect",
    component: GenreSelect,
} as ComponentMeta<typeof GenreSelect>;

const genres: GenreDTO[] = [
    { name: "Crime" },
    { name: "Documentary" },
    { name: "Horror" },
    { name: "Comedy" },
];

const Template: ComponentStory<typeof GenreSelect> = args => {
    const [selectedGenres, setSelectedGenres] = useState<GenreDTO[]>([]);

    const handleSelect = (value: GenreDTO[]) => setSelectedGenres(value);

    return (
        <>
            <pre>{selectedGenres.map(v => v.name).join()}</pre>
            <GenreSelect
                {...args}
                genres={genres}
                onSelect={handleSelect}
            />
        </>
    );
};

export const Base = Template.bind({});