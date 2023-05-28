"use client";

import {useMemo} from "react";

import {SelectOptionDTO} from "../../models/SelectOptionDTO";

import {
    StyledSortControl,
    StyledSortControlLabel, StyledSortControlSelectButton, StyledSortControlSelectIcon,
    StyledSortControlSelectInput, StyledSortControlSelectInputWrapper, StyledSortControlSelectOption,
    StyledSortControlSelectOptions, StyledSortControlSelectValue
} from "./styled";


interface SortControlProps {
    className?: string
    options: SelectOptionDTO<string>[]
    value: string
    onSelect: (value: string) => void
}

const SortControl = ({
    className,
    options,
    value,
    onSelect,
}: SortControlProps) => {
    const selectedLabel = useMemo<string|undefined>(
        () => options.filter(option => option.value === value).pop()?.label,
        [options, value],
    );

    const handleSelect = (value: string) => onSelect(value);

    return (
        <StyledSortControl className={className}>
            <StyledSortControlLabel>
                Sort by
            </StyledSortControlLabel>
            <StyledSortControlSelectInputWrapper>
                <StyledSortControlSelectInput
                    value={value}
                    onChange={handleSelect}
                >
                    {({ open }) => (
                        <>
                            <StyledSortControlSelectButton>
                                <StyledSortControlSelectValue>
                                    {selectedLabel}
                                </StyledSortControlSelectValue>
                                <StyledSortControlSelectIcon isRotated={open} />
                            </StyledSortControlSelectButton>

                            <StyledSortControlSelectOptions>
                                {options.map(option => (
                                    <StyledSortControlSelectOption
                                        key={option.id}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </StyledSortControlSelectOption>
                                ))}
                            </StyledSortControlSelectOptions>
                        </>
                    )}
                </StyledSortControlSelectInput>
            </StyledSortControlSelectInputWrapper>
        </StyledSortControl>
    );
};

export default SortControl;