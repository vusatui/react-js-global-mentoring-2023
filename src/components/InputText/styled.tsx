import styled from "styled-components";
import React from "react";

export const StyledInputWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledInput = styled.input<{ isWithIcon?: boolean }>`
  width: 100%;
  padding: ${({ isWithIcon }) => isWithIcon ? "16px 60px 16px 18px" : "16px 18px"};
  background: rgba(50, 50, 50, 0.948044);
  mix-blend-mode: normal;
  opacity: 0.8;
  border-radius: 4px;
  border: none;
  appearance: none;
  outline: none;
  font-family: 'Montserrat',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
  
  ::placeholder {
    opacity: 0.3;
  }
`;

export const StyledIcon = styled(
    ({ component, ...props }) => React.cloneElement(component, props)
)`
  fill: red;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
`