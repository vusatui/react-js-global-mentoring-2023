import {ChangeEvent, CSSProperties} from "react";

import {StyledInput} from "./styled";

interface Props {
    className?: string,
    placeholder?: string
    style?: CSSProperties
    value: string
    onChange: (v: ChangeEvent<HTMLInputElement>) => void
}

const SearchInput = ({
    placeholder = "What do you want to watch?",
    style = undefined,
    className = undefined,
    value,
    onChange,
}: Props) => (
    <StyledInput
        className={className}
        style={style}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
    />
);

export default SearchInput;