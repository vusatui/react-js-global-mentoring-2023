import {StyledHeader, StyledHeaderBg, StyledHeaderSearchFormWrapper, StyledTopBar} from "./styled";

import FormMovieFind from "../FormMovieFind";

interface HeaderProps {
    className?: string
}

const Header = ({
    className,
}: HeaderProps) => (
    <StyledHeader className={className}>
        <StyledHeaderBg />
        <StyledTopBar />
        <StyledHeaderSearchFormWrapper>
            <FormMovieFind />
        </StyledHeaderSearchFormWrapper>
    </StyledHeader>
);

export default Header;