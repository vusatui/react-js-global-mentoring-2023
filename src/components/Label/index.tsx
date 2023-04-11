import {ReactNode} from "react";

import {StyledLabel, StyledLabelContent, StyledLabelTitle} from "./styled";

interface LabelProps {
    className?: string
    title: string
    htmlFor: string
    children: ReactNode
}

const Label = ({
    className,
    title,
    htmlFor,
    children
}: LabelProps) => (
    <StyledLabel className={className} htmlFor={htmlFor}>
        <StyledLabelTitle>
            {title}
        </StyledLabelTitle>
        <StyledLabelContent>
            {children}
        </StyledLabelContent>
    </StyledLabel>
);

export default Label;