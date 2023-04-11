import {ChangeEventHandler} from "react";
import {StyledIcon, StyledInput, StyledInputWrapper} from "./styled";

interface InputTextProps {
    className?: string
    placeholder?: string
    icon?: JSX.Element
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
}

const InputText = ({
    className,
    placeholder,
    icon,
    value,
    onChange,
}: InputTextProps) => (
    <StyledInputWrapper>
        <StyledInput
            className={className}
            placeholder={placeholder}
            isWithIcon={!!icon}
            value={value}
            onChange={onChange}
        />
        {icon && <StyledIcon component={icon} />}
    </StyledInputWrapper>
);

export default InputText;