"use client";

import styled from "styled-components";

import bitmap from "../../assets/images/Bitmap.png";
import TopBar from "./TopBar";

export const StyledHeader = styled.div`
  position: relative;
  padding: 20px 0 151px;
  display: flex;
  flex-flow: column;
  align-items: center;
  border-bottom: 10px solid #888888;
  background: #000;
`;

export const StyledHeaderBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: url(${bitmap.src});
  opacity: 0.3;
`;

export const StyledHeaderSearchFormWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledTopBar = styled(TopBar)`
  position: relative;
  margin-bottom: 35px;
  
`;