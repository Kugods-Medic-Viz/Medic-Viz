import styled from "styled-components";

export const RecordWrap = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  height: 800px;
`;
export const RecordFrom = styled.form`
  padding: 30px;
  marign: 10px;
`;

export const RecordTitle = styled.h1`
  color: ${(props) => props.theme.subColor};
  font-size: 28px;
  font-weight: 700;
  padding: 32px 0 35px 0;
`;

export const RecordInput = styled.input`
  width: 100%;
  height: 48px;
  border: 2px solid #a1a1a1;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  box-sizing: border-box;
  margin-bottom: 42px;
`;
export const BtnWarp = styled.div`
  display: flex;
  justify-content: center;
`;

export const AnalyzeBtn = styled.input`
  width: 335px;
  height: 46px;
  background: url("img/Record/analyzeBtn.png");
  background-size: cover;
  border: none;
  margin: 42px 0px;
`;
