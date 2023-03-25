import styled from "styled-components";

export const StyledContainer = styled.div``;

export const StyledInput = styled.input`
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
`;

export const StyledLabel = styled.label<{ isChecked: boolean }>`
  position: relative;
  height: 16px;
  width: 16px;
  display: inline-block;
  
  &:before {
    content:'';
    -webkit-appearance: none;
    box-shadow: 
        0 1px 2px rgba(0, 0, 0, 0.05), 
        inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    height: 100%;
    width: 100%;
    display: inline-block;
    position: relative;
    cursor: pointer;
    background: #FFFFFF;
    border: 1px solid #E6E8ED;
    border-radius: 2px;
    box-sizing: border-box;
  }

  ${({ isChecked }) => isChecked && `
   &:before {
      background: #E64C5A;
      border: solid #E64C5A;
      border-radius: 2px;
   }
   
   &:after {
      content: '';
      display: block;
      position: absolute;
      top: 60%;
      left: 50%;
      width: 4px;
      height: 8px;
      border: solid #FFFFFF;
      border-width: 0 2px 2px 0;
      transform: translate(-50%, -50%) rotate(45deg);
   }
  `}
`;