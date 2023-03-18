import {ChangeEvent, CSSProperties, FormEvent, useState} from "react";

import {StyledForm, StyledSearchInput} from "./styled";

import SearchSubmitButton from "./SearchSubmitButton";

interface Props {
    placeholder?: string
    style?: CSSProperties
    initialValue?: string
    onSearch: (v: string) => void
}

const GenreSelect = ({
    placeholder,
    style,
    initialValue = "",
    onSearch,
}: Props) => {
    const [searchValue, setSearchValue] = useState(initialValue)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSearch(searchValue);
    };

    return (
        <StyledForm
            style={style}
            onSubmit={handleFormSubmit}
        >
            <StyledSearchInput
                value={searchValue}
                placeholder={placeholder}
                onChange={onChange}
            />
            <SearchSubmitButton />
        </StyledForm>
    );
};

export default GenreSelect;