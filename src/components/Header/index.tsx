import {StyledHeader, StyledHeaderBg, StyledHeaderSearchFormWrapper, StyledTopBar} from "./styled";

import FormMovieFind from "../FormMovieFind";

interface HeaderProps {
    className?: string
    search: string
    handleSearch: (search: string) => void
}

const Header = ({
    className,
    search,
    handleSearch,
}: HeaderProps) => (
    <StyledHeader className={className}>
        <StyledHeaderBg />
        <StyledTopBar />
        <StyledHeaderSearchFormWrapper>
            <FormMovieFind
                search={search}
                handleSearch={handleSearch}
            />
        </StyledHeaderSearchFormWrapper>
    </StyledHeader>
);

export default Header;