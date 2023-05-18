import styled from "styled-components";

export const StyledGenreFilter = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const StyledGenreFilterItem = styled.div<{ isActive: boolean }>`
  position: relative;
  margin-right: 30px;
  font-family: 'Montserrat',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: #FFFFFF;
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    bottom: -20px;
    height: 2px;
    background: #F65261;
    left: 0;
    z-index: 1;
  }
  
  &:last-of-type {
    margin-right: 0;
  }
`;