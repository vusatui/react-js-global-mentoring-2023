import {ComponentMeta, ComponentStory} from "@storybook/react";

import {useState} from "react";

import GenreSelect from "../components/GenreSelect";

import {GenreDTO} from "../models/GenreDTO";

export default {
    title: "Components/GenreSelect",
    component: GenreSelect,
} as ComponentMeta<typeof GenreSelect>;

const Template: ComponentStory<typeof GenreSelect> = args => {
    const [selectedGenres, setSelectedGenres] = useState<GenreDTO[]>([]);

    const genres: GenreDTO[] = [
        { name: "Crime" },
        { name: "Documentary" },
        { name: "Horror" },
        { name: "Comedy" },
    ];

    return (
        <>
            <pre>
                {selectedGenres.map(v => v.name).join()}
            </pre>
                <GenreSelect {...args} genres={genres} onSelect={setSelectedGenres} />
            </>
    );
};

export const Base = Template.bind({});