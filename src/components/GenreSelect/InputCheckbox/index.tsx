import {StyledContainer, StyledInput, StyledLabel} from "./styled";

interface InputCheckboxProps {
    className?: string
    name?: string
    value: boolean
    onChange: (v: boolean) => void
}

const InputCheckbox = ({
    className,
    value,
    onChange,
}: InputCheckboxProps) => (
    <StyledContainer
        className={className}
    >
        <StyledInput
            type="checkbox"
            value={String(value)}
            onChange={e => onChange(!!e.target.value)}
        />
        <StyledLabel isChecked={value} />
    </StyledContainer>
);

export default InputCheckbox;