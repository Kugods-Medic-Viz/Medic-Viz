import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../../firebase";

function SignIn() {
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
    try {
      setErrorMsg("");
      signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
      setErrorMsg(error);
      // switch (error.code) {
      //   case "auth/weak-password":
      //     setErrorMsg("비밀번호는 6자리 이상이어야 합니다.");
      //     break;
      //   case "auth/invalid-email":
      //     setErrorMsg("잘못된 이메일 주소입니다.");
      //     break;
      //   case "auth/email-already-in-use":
      //     setErrorMsg("이미 가입되어 있는 계정입니다.");
      //     break;
      // }
      alert(errorMsg);
    }
  };

  const onSocialClick = async (event) => {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
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
