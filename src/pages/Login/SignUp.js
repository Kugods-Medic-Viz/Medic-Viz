import React, { useState } from "react";
import * as S from "../../styles/Login/SignupStyle";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, fbAuth } from "../../firebase";

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [errorMsg, setErrorMsg] = useState();

  const handleOnChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSignUplick = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      if (newAccount) {
        await createUserWithEmailAndPassword(fbAuth, email, password);
        alert("가입 성공!");
        navigate("/");
      } else {
        alert("이미 가입된 계정입니다!");
      }
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/weak-password":
          setErrorMsg("비밀번호는 6자리 이상이어야 합니다.");
          break;
        case "auth/invalid-email":
          setErrorMsg("잘못된 이메일 주소입니다.");
          break;
        case "auth/email-already-in-use":
          setErrorMsg("이미 가입되어 있는 계정입니다.");
          break;
      }
    }
  };

  return (
    <S.SignupWrap>
      <S.SignupForm>
        <S.SignupTitle> 회원가입 </S.SignupTitle>
        <S.Logo> </S.Logo>
        <div>
          <S.SignupInput
            name="email"
            type="email"
            placeholder="이메일 주소"
            required
            value={email}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <S.SignupInput
            name="password"
            type="password"
            placeholder="비밀번호 (6자리 이상)"
            required
            value={password}
            onChange={handleOnChange}
          />
        </div>
        <S.BtnWrap>
          <S.SignupBtn type="submit" onClick={onSignUplick}>
          </S.SignupBtn>
        </S.BtnWrap>
      </S.SignupForm>
      <div>{errorMsg}</div>
      <hr></hr>
      <S.MovetoSignin>
        이미 계정이 있으신가요?
        <Link to="/signin">
          <S.SigninBtn>로그인하기</S.SigninBtn>
        </Link>
      </S.MovetoSignin>
    </S.SignupWrap>
  );
}
export default SignUp;
