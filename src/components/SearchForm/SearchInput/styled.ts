import styled from "styled-components";

export const StyledInput = styled.input.attrs( { "data-testId": "search-input" })`
  background: rgba(50, 50, 50, 0.8);
  mix-blend-mode: normal;
  opacity: 0.7;
  border-radius: 4px;
  border: none;
  padding: 17px 19px;
  appearance: none;
  outline: none;
  font-family: 'Montserrat',serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #FFFFFF;

  &::placeholder {
    color: #FFFFFF;
    opacity: 0.3;
  }
`;