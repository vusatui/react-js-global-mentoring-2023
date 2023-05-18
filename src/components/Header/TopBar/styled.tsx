import styled from "styled-components";
import Logo from "../../Logo";

export const StyledTopBarWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StyledTopBarStyledLogo = styled(Logo)`
  z-index: 1000;
`;