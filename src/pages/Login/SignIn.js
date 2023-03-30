import React, { useState } from "react";
import * as S from "../../styles/Login/SigninStyle";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { fbAuth } from "../../firebase";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const onSignInClick = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      await signInWithEmailAndPassword(fbAuth, email, password);
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/user-not-found":
          setErrorMsg("가입되지 않은 계정입니다.");
          break;
        case "auth/wrong-password":
          setErrorMsg("잘못된 비밀번호 입니다.");
          break;
        case "auth/too-many-requests":
          setErrorMsg(
            "연속된 로그인 요청이 여러 번 감지되어 로그인 요청이 금지되었습니다."
          );
          break;
        case "auth/invalid-email":
          setErrorMsg("잘못된 이메일입니다.");
          break;
      }
    }
    onAuthStateChanged(fbAuth, (user) => {
      if (user) {
        navigate("/");
      }
    });
  };

  const onSocialClick = async (event) => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(fbAuth, provider);
    navigate("/");
  };

  return (
    <S.SigninWrap>
      <S.SigninTitle> 로그인 </S.SigninTitle>
      <S.Logo> </S.Logo>
      <S.SigninForm>
        <div>
          <S.SigninInput
            name="email"
            type="email"
            placeholder="이메일 주소"
            required
            value={email}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <S.SigninInput
            name="password"
            type="password"
            placeholder="비밀번호"
            required
            value={password}
            onChange={handleOnChange}
          />
        </div>
        <S.BtnWrap>
          <S.SigninBtn type="submit" onClick={onSignInClick}>
          </S.SigninBtn>
        </S.BtnWrap>
        <S.BtnWrap>
          <S.SigningoogleBtn onClick={onSocialClick} name="google">
          </S.SigningoogleBtn>
        </S.BtnWrap>
      </S.SigninForm>
      <div>{errorMsg}</div>
      <hr></hr>
      <S.MovetoSignup>
        아직 계정이 없다면
        <Link to="/signup">
          <S.SignupBtn> 계정 만들기 </S.SignupBtn>
        </Link>
      </S.MovetoSignup>
    </S.SigninWrap>
  );
}
export default SignIn;
