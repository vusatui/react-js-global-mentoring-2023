import {ReactNode} from "react";

import {StyledContent, StyledMessageIcon, StyledMessageTitle, StyledMessageWrapper} from "./styled";

interface SuccessfullMessageProps {
    className?: string
    title: string
    children: ReactNode
}

const SuccessfullMessage = ({
    className,
    title,
    children,
}: SuccessfullMessageProps) => (
    <StyledMessageWrapper className={className}>
        <StyledMessageIcon/>
        <StyledMessageTitle>
            {title}
        </StyledMessageTitle>
        <StyledContent>
            {children}
        </StyledContent>
    </StyledMessageWrapper>
);

export default SuccessfullMessage;