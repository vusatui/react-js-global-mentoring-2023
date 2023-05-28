"use client";

import styled from "styled-components";

export const StyledMovieFilters = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  position: relative;
  padding: 20px 0;
  
  &:after {
    content: '';
    position: absolute;
    height: 4px;
    width: 100%;
    background: #424242;
    bottom: -2px;
    z-index: 0;
    box-shadow: #000 inset 0 -2px 0;
  }
`;