import MovieTile from "../MovieTile";
import {GenreDTO} from "../../models/GenreDTO";
import {MovieTileDTO} from "../../models/MovieTileDTO";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
};

const mockHandleClick = jest.fn();

const Component = () => (<MovieTile movieTile={movieTileDTO} onClick={mockHandleClick} />);

describe("MovieTile", () => {

    it("Should renders correctly", () => {
        const { asFragment } = render(<Component/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it("Should on click receive correct arg", () => {
        render(<Component/>);
        userEvent.click(screen.getByTestId("movie-card"));
        expect(mockHandleClick).toBeCalledWith(movieTileDTO);
    });

});