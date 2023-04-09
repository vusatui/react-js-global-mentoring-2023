import {GenreDTO} from "../../models/GenreDTO";
import {MovieDetailsDTO} from "../../models/MovieDetailsDTO";
import MovieDetails from "./index";
import {render} from "@testing-library/react";

const genres: GenreDTO[] = [
    {name: "Drama"},
    {name: "Biography"},
    {name: "Music"},
];

const movieDetailsDTO: MovieDetailsDTO = {
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/2e/Bohemian_Rhapsody_poster.png",
    title: "Bohemian Rhapsody",
    year: "2003",
    rating: 8.9,
    genres,
    duration: "2h 34min",
    description: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) " +
        "are two hit men who are out to retrieve a suitcase stolen from their employer, " +
        "mob boss Marsellus Wallace (Ving Rhames). " +
        "Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later " +
        "when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer " +
        "who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven " +
        "together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
};

const Component = () => (<MovieDetails movieDetails={movieDetailsDTO} />);

describe("MovieDetails", () => {

    it("Should renders correctly", () => {
        const { asFragment } = render(<Component />);
        expect(asFragment).toMatchSnapshot();
    });

});