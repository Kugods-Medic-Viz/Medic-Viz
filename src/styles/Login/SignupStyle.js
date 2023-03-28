import styled from "styled-components";

export const SignupWrap = styled.div`
`;

export const SignupForm = styled.form`
  padding: 20px;
  margin: 10px;
`;

export const SignupTitle = styled.h1`
  color: ${(props) => props.theme.gray};
  font-size: 28px;
  font-weight: 700;
  padding: 20px 0 20px 0;
  margin-bottom: 0px;
`;

export const Logo = styled.button`
  width: 110px;
  height: 90px;
  background: url("img/Login/logo.png");
  background-size: cover;
  border: none;
  margin-bottom: 100px;
`;

export const SignupInput = styled.input`
  width: 326px;
  height: 40px;
  border: 2px solid #a1a1a1;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;


export const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignupBtn = styled.button`
  width: 326px;
  height: 40px;
  background: url("img/Login/signupBtn.png");
  background-size: cover;
  border: none;
  margin: 40px 0px 20px;
`;


export const MovetoSignin = styled.div`
  font-size: 12px;
`;

export const SigninBtn = styled.button`
  width: 100px;
  height: 35px;
  background-size: cover;
  border: none;
  margin: 0px 20px;
`;