import {ChangeEventHandler} from "react";
import {StyledIcon, StyledInput, StyledInputWrapper} from "./styled";

interface InputTextProps {
    className?: string
    placeholder?: string
    icon?: JSX.Element
    id: string
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
}

const InputText = ({
    className,
    placeholder,
    icon,
    id,
    value,
    onChange,
}: InputTextProps) => (
    <StyledInputWrapper>
        <StyledInput
            id={id}
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