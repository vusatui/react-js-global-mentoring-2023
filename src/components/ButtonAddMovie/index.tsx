import {StyledButtonAddMovie} from "./styled";
import Link from 'next/link';

const ButtonAddMovie = () => {
    return (
        <Link href="/new">
            <StyledButtonAddMovie>
                + ADD MOVIE
            </StyledButtonAddMovie>
        </Link>
    );
};

export default ButtonAddMovie;