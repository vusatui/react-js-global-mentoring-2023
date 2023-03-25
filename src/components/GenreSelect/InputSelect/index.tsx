import {useState} from "react";

import {
    StyledArrowIcon,
    StyledContainer,
    StyledDropDown,
    StyledDropdownItem,
    StyledInputCheckbox,
    StyleSelectInput
} from "./styled";

interface InputSelectProps {
    className?: string
    label?: string
    name: string
    options: string[]
    value: string[]
    onChange: (v: string[]) => void
}

const InputSelect = ({
    className,
    label = "Select Genre",
    name,
    options,
    value,
    onChange,
}: InputSelectProps) => {
    const [isOpened, setIsOpened] = useState(false);

    const handleContainerClick = () => setIsOpened(!isOpened);

    const handleOptionSelect = (option: string) =>
        onChange(value.includes(option) ? value.filter(item => item !== option) : [...value, option]);

    return (
        <StyledContainer
            className={className}
            onClick={handleContainerClick}
        >
            <StyleSelectInput
                name={name}
                value={value}
                multiple={true}
            >
                {options.map(option =>
                    (<option key={option} value={option}>{option}</option>))}
            </StyleSelectInput>
            <span>{label}</span>
            <StyledArrowIcon isRotated={isOpened} />
            {isOpened && <StyledDropDown onClick={e => e.stopPropagation()}>
                {options.map(option =>
                    (<StyledDropdownItem key={option} onClick={() => handleOptionSelect(option)}>
                        <StyledInputCheckbox value={value.includes(option)} onChange={() => null} />
                        {option}
                    </StyledDropdownItem>))}
            </StyledDropDown>}
        </StyledContainer>
    );
};

export default InputSelect;