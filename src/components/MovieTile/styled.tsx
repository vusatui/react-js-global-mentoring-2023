"use client";

import styled from "styled-components";

export const StyledMovieCard = styled.div.attrs( { "data-testid": "movie-card" })`
  position: relative;
  width: 323px;
  cursor: pointer;
`;

export const StyledCardTop = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const StyledImage = styled.img`
  width: 100%;
`;

export const StyledCardBottom = styled.div`

`;

export const StyledCardBottomTop = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;


export const StyledCardTitle = styled.div`
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  opacity: 0.7;
`;

export const StyledCardYear = styled.div`
  border: 1px solid #555555;
  border-radius: 4px;
  padding: 4px 8px;
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.7;
`;

export const StyledCardGenres = styled.div`
  font-family: 'Montserrat', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.5;
`;