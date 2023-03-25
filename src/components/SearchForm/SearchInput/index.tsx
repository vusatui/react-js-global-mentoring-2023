import {ChangeEvent} from "react";

import {StyledInput} from "./styled";

interface SearchInputProps {
    className?: string,
    placeholder?: string
    value: string
    onChange: (v: ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({
    placeholder = "What do you want to watch?",
    className,
    value,
    onChange,
}: SearchInputProps) => (
    <StyledInput
        className={className}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
    />
);

export default SearchInput;