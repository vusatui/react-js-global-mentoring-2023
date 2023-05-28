"use client";

import styled from "styled-components";
import SuccessIcon from "../icons/SuccessIcon";

export const StyledMessageWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

export const StyledMessageIcon = styled(SuccessIcon)`
  margin-bottom: 51px;
`;

export const StyledMessageTitle = styled.div`
  margin-bottom: 30px;
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #FFFFFF;
`;

export const StyledContent = styled.div`
  font-family: 'Montserrat',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #FFFFFF;
`;