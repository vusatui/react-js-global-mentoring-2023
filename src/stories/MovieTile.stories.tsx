import MovieTile from "../components/MovieTile";

import {ComponentMeta, ComponentStory} from "@storybook/react";

import {GenreDTO} from "../models/GenreDTO";
import {MovieTileDTO} from "../models/MovieTileDTO";

export default {
    title: "Components/MovieTile",
    component: MovieTile,
} as ComponentMeta<typeof MovieTile>;

const genres: GenreDTO[] = [
    { name: "Drama" },
    { name: "Biography" },
    { name: "Music" },
];

const movieTileDTO: MovieTileDTO = {
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/2e/Bohemian_Rhapsody_poster.png",
    title: "Bohemian Rhapsody",
    year: "2003",
    genres,
}

const Template: ComponentStory<typeof MovieTile> = ({ movieTile }) => {
    const handleClick = (value: MovieTileDTO) => console.log(value);

    return (<MovieTile movieTile={movieTile} onClick={handleClick} />);
};

export const Base = Template.bind({});
Base.args = {
    movieTile: movieTileDTO,
};