import styled from "styled-components";
import Label from "../Label";
import InputTextarea from "../InputTextarea";

export const StyledFormWrapper = styled.div``;

export const StyledFormTitle = styled.div`
  margin-bottom: 38px;
  font-family: 'Montserrat',serif;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #FFFFFF;
`;

export const StyledForm = styled.form``;

export const StyledFormRows = styled.div`
  margin-bottom: 60px;
`;

export const StyledFormRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const StyledFormLabelLeft = styled(Label)`
  width: 525px;
  margin-right: 30px;
`;

export const StyledFormLabelRight = styled(Label)`
  width: 301px;
`;

export const StyledTextarea = styled(InputTextarea)`
  height: 197px;
`;

export const StyledFormButtons = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
`;

export const StyledFormButtonReset = styled.button`
  padding: 16px 57px;
  border: 1.5px solid #F65261;
  border-radius: 4px;
  font-family: 'Montserrat',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  color: #F65261;
  margin-right: 13px;
`;

export const StyledFormButtonSubmit = styled.button`
  padding: 16px 48px;
  background: #F65261;
  border-radius: 4px;
  font-family: 'Montserrat',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
`;