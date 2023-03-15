import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";

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
      await signInWithEmailAndPassword(auth, email, password);
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
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });
  };

  const onSocialClick = async (event) => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    navigate("/");
  };

  return (
    <>
      <h1> 로그인 페이지 </h1>
      <form>
        <div>
          Email :
          <input
            name="email"
            type="email"
            placeholder="Enter Email"
            required
            value={email}
            onChange={handleOnChange}
          />
        </div>
        <div>
          Password :
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            required
            value={password}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <button type="submit" onClick={onSignInClick}>
            Log in
          </button>
        </div>
        <div>
          <button onClick={onSocialClick} name="google">
            Continue with Google
          </button>
        </div>
      </form>
      <div>{errorMsg}</div>
      <hr></hr>
      <p>
        Don't Have Account?
        <Link to="/signup">
          <button>Go To Make Account</button>
        </Link>
      </p>
    </>
  );
}
export default SignIn;
