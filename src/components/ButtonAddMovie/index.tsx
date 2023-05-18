import {StyledButtonAddMovie} from "./styled";
import {useNavigate} from "react-router-dom";

const ButtonAddMovie = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => navigate("/new");

    return (
        <>
            <StyledButtonAddMovie onClick={handleButtonClick}>
                + ADD MOVIE
            </StyledButtonAddMovie>
        </>
    );
};

export default ButtonAddMovie;