import {CSSProperties} from "react";
import {StyledContainer, StyledInput, StyledLabel} from "./styled";

interface Props {
    style?: CSSProperties
    className?: string
    name?: string
    value: boolean
    onChange: (v: boolean) => void
}

const InputCheckbox = ({
    style = undefined,
    className = undefined,
    value,
    onChange,
}: Props) => (
    <StyledContainer
        style={style}
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