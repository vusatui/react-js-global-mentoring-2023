"use client";

import styled from "styled-components";

import { Listbox } from '@headlessui/react'

import ArrowIcon from "../icons/ArrowIcon";

export const StyledSortControl = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const StyledSortControlLabel = styled.label`
  margin-right: 31px;
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.888889px;
  text-transform: uppercase;
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.6;
`;

export const StyledSortControlSelectInputWrapper = styled.div`
  position: relative;
`;

export const StyledSortControlSelectInput = styled(Listbox)`
  
`;

export const StyledSortControlSelectValue = styled.span`
  margin-right: 13px;
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.888889px;
  text-transform: uppercase;
  color: #FFFFFF;
`;

export const StyledSortControlSelectIcon = styled(ArrowIcon)<{ isRotated: boolean }>`
  width: 12px;
  transform-origin: center;
  ${({ isRotated }) => isRotated && `transform: rotate(180deg);`}
`;

export const StyledSortControlSelectOptions = styled(Listbox.Options)`
  margin-top: 10px;
  padding: 20px;
  background: rgba(35, 35, 35, 0.918051);
  box-shadow: 
      0 0 2px rgba(0, 0, 0, 0.1),
      0 2px 10px rgba(0, 0, 0, 0.1), 
      0 10px 20px rgba(0, 0, 0, 0.1), 
      0 10px 50px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(13.5914px);
  border-radius: 4px;
  
  * {
    padding-bottom: 18px;
  }
  
  &:last-child {
    padding-bottom: 0;
  }
`;

export const StyledSortControlSelectOption = styled(Listbox.Option)`
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.888889px;
  text-transform: uppercase;
  color: #FFFFFF;
  cursor: pointer;
`;

export const StyledSortControlSelectButton = styled(Listbox.Button).attrs({ "data-testid": "button" })`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 165px;
  background: transparent;
  border: none;
  outline: none;
  appearance: none;
  padding: 0;
  cursor: pointer;
`;