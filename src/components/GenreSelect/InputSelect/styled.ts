import styled from "styled-components";
import ArrowIcon from "../../icons/ArrowIcon";
import InputCheckbox from "../InputCheckbox";

export const StyledContainer = styled.div`
  background: rgba(50, 50, 50, 0.948044);
  mix-blend-mode: normal;
  opacity: 0.8;
  border-radius: 4px;
  font-family: 'Montserrat',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 18px 23px 15px 18px;
  position: relative;
  user-select: none;
`;

export const StyleSelectInput = styled.select`
  display: none;
`;

export const StyledArrowIcon = styled(ArrowIcon)<{ isRotated: boolean }>`
  transform-origin: center;
  ${({ isRotated }) => isRotated && `transform: rotate(180deg);`}
`;

export const StyledDropDown = styled.div`
  background: rgba(35, 35, 35, 0.918051);
  box-shadow: 
      0 0 2px rgba(0, 0, 0, 0.1), 
      0 2px 10px rgba(0, 0, 0, 0.1), 
      0 10px 20px rgba(0, 0, 0, 0.1), 
      0 10px 50px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(13.5914px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 4px;
  padding: 16px 18px 28px 18px;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: flex;
  flex-flow: column;
  
  & > * {
    padding-bottom: 18px;
  }
  
  &:last-child {
    padding-bottom: 0;
  }
`;

export const StyledDropdownItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

export const StyledInputCheckbox = styled(InputCheckbox)`
  margin-right: 7px;
`;