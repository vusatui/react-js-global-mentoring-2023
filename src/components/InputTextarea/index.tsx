import {ChangeEventHandler} from "react";
import {StyledInputTextarea} from "./styled";

interface InputTextareaProps {
    className?: string
    placeholder?: string
    id: string
    rows?: number
    value: string
    onChange: ChangeEventHandler<HTMLTextAreaElement>
}

const InputTextarea = ({
    className,
    placeholder,
    id,
    rows,
    value,
    onChange,
}: InputTextareaProps) => (
    <StyledInputTextarea
        id={id}
        className={className}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
    />
);

export default InputTextarea;