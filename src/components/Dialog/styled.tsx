"use client";

import styled from "styled-components";

import CloseIcon from "../icons/CloseIcon";

export const StyledDialogOverlay = styled.div`
  position: fixed;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 157px 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(35, 35, 35, 0.918051);
  mix-blend-mode: normal;
  backdrop-filter: blur(12.2323px);
  overflow: auto;
  z-index: 3;
`;

export const StyledDialogContainer = styled.div`
  background: #232323;
  box-shadow: 
          0 0 2px rgba(0, 0, 0, 0.1), 
          0 2px 10px rgba(0, 0, 0, 0.07), 
          0 10px 20px rgba(0, 0, 0, 0.05), 
          0 10px 50px rgba(0, 0, 0, 0.05);
`;

export const StyledDialogHeader  = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 30px 11px 30px;
`;

export const StyledCloseButton = styled.button.attrs({ "data-testid": "close-modal-button" })`
  background: none;
  box-shadow: none;
  padding: 0;
  border: none;
  cursor: pointer;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  width: 20.77px;
  height: 20.77px;
`;

export const StyledDialogContent  = styled.div`
  padding: 0 60px 60px 60px;
`;