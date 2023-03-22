import {StyledButton} from "./styled";

interface SearchSubmitButtonProps {
    className?: string,
    text?: string
}

const SearchSubmitButton = ({
    className,
    text = "SEARCH",
}: SearchSubmitButtonProps) => (
    <StyledButton
        type="submit"
        className={className}
    >
        {text}
    </StyledButton>
);

export default SearchSubmitButton;