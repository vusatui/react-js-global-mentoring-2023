import {ReactNode} from "react";
import {Portal} from "react-portal";

import {
    StyledCloseButton,
    StyledCloseIcon,
    StyledDialogContainer,
    StyledDialogContent,
    StyledDialogHeader, StyledDialogOverlay
} from "./styled";

interface DialogProps {
    children: ReactNode
    isOpened: boolean
    onCloseButtonClick: () => void
}

const Dialog = ({
    children,
    isOpened,
    onCloseButtonClick,
}: DialogProps) => (
    <>
        {isOpened && <Portal>
            <StyledDialogOverlay>
                <StyledDialogContainer>
                    <StyledDialogHeader>
                        <StyledCloseButton onClick={onCloseButtonClick}>
                            <StyledCloseIcon />
                        </StyledCloseButton>
                    </StyledDialogHeader>
                    <StyledDialogContent>
                        {children}
                    </StyledDialogContent>
                </StyledDialogContainer>
            </StyledDialogOverlay>
        </Portal>}
    </>
);

export default Dialog;