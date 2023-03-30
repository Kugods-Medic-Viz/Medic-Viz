import styled from "styled-components";

export const HomeWrap = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  flex-direction: column;
  padding: 30px;
  height: 750px;
`;

export const LogoImg = styled.button`
  width: 79px;
  height: 99px;
  background: url("img/Home/LogoImg.png");
  background-size: cover;
  border: none;
  margin: 80px 0px 0px 30px;
`;

export const Logo = styled.button`
  width: 121px;
  height: 99px;
  background: url("img/Home/LogoText.png");
  background-size: cover;
  border: none;
  margin: 20px 0px 100px 30px;
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${
    "" /* padding-left: 55px;
  padding-right: 55px; */
  }
  margin-bottom: 100px;
`;

export const RecordBtn = styled.button`
  width: 180px;
  height: 189px;
  background: url("img/Home/RecordBtn.png");
  background-size: cover;
  border: none;
`;

export const AlgorithmBtn = styled.button`
  width: 180px;
  height: 189px;
  background: url("img/Home/AlgorithmBtn.png");
  background-size: cover;
  border: none;
`;
