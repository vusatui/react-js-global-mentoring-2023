import {StyledTopBarStyledLogo, StyledTopBarWrapper} from "./styled";
import Container from "../../Container";
import ButtonAddMovie from "../../ButtonAddMovie";

interface TopBarProps {
    className?: string
}

const TopBar = ({
    className
}: TopBarProps) => (
    <Container className={className}>
        <StyledTopBarWrapper>
            <StyledTopBarStyledLogo />
            <ButtonAddMovie />
        </StyledTopBarWrapper>
    </Container>
);

export default TopBar;