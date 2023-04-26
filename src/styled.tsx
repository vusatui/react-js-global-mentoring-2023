import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }
  
  body {
    background: #232323;
  }
`;

export const StyledAppWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
`;