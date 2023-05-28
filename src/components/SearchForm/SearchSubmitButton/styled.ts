"use client";

import styled from "styled-components";

export const StyledButton = styled.button.attrs( { "data-testid": "search-button" })`
  background: #F65261;
  border-radius: 4px;
  padding: 18px 73px 15px 74px;
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
`;