import styled from "styled-components";

export const SignupWrap = styled.div`
  padding: 20px;
`;

export const SignupForm = styled.form`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SignupTitle = styled.h1`
  color: ${(props) => props.theme.gray};
  font-size: 28px;
  font-weight: 700;
  padding: 20px 0 20px 0;
  margin: 10px 0px 0px 70px;
`;

export const Logo = styled.button`
  width: 110px;
  height: 90px;
  background: url("img/Login/logo.png");
  background-size: cover;
  border: none;
  margin: 0px 0px 80px 70px;
`;

export const SignupInput = styled.input`
  width: 340px;
  height: 41px;
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
  width: 340px;
  height: 41px;
  background: url("img/Login/signupBtn.png");
  background-size: cover;
  border: none;
  margin: 40px 0px 20px;
`;


export const MovetoSignin = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SigninBtn = styled.button`
  width: 100px;
  height: 35px;
  background-size: cover;
  border: none;
  margin: 5px 20px;
`;