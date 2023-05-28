"use client";

import {ChangeEvent, FormEvent, useState} from "react";

import {StyledForm, StyledSearchInput} from "./styled";

import SearchSubmitButton from "./SearchSubmitButton";

interface SearchFormProps {
    placeholder?: string
    initialValue?: string
    onSearch: (v: string) => void
}

const SearchForm = ({
    placeholder,
    initialValue = "",
    onSearch,
}: SearchFormProps) => {
    const [searchValue, setSearchValue] = useState(initialValue)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSearch(searchValue);
    };

    return (
        <StyledForm onSubmit={handleFormSubmit}>
            <StyledSearchInput
                value={searchValue}
                placeholder={placeholder}
                onChange={handleChange}
            />
            <SearchSubmitButton />
        </StyledForm>
    );
};

export default SearchForm;