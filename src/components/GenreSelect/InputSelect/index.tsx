import {CSSProperties, useState} from "react";

import {
    StyledArrowIcon,
    StyledContainer,
    StyledDropDown,
    StyledDropdownItem,
    StyledInputCheckbox,
    StyleSelectInput
} from "./styled";

interface Props {
    style?: CSSProperties
    className?: string
    label?: string
    name: string
    options: string[]
    value: string[]
    onChange: (v: string[]) => void
}

const InputSelect = ({
    style = undefined,
    className = undefined,
    label = "Select Genre",
    name,
    options,
    value,
    onChange,
}: Props) => {
    const [isOpened, setIsOpened] = useState(false);

    const handleContainerClick = () => setIsOpened(!isOpened);

    const handleOptionSelect = (v: string) =>
        onChange(value.includes(v) ? value.filter(el => el !== v) : [...value, v]);

    return (
        <StyledContainer
            style={style}
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