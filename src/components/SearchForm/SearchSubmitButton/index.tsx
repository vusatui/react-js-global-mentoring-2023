import {CSSProperties} from "react";

import {StyledButton} from "./styled";

interface Props {
    className?: string,
    style?: CSSProperties
    text?: string
}

const SearchSubmitButton = ({
    className,
    style = undefined,
    text = "SEARCH",
}: Props) => (
    <StyledButton
        type="submit"
        className={className}
        style={style}
    >
        {text}
    </StyledButton>
);

export default SearchSubmitButton;