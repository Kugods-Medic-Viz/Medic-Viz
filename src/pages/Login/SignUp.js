import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);

  const handleOnChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    //test용 변수
    let data;
    try {
      if (newAccount) {
        data = await createUserWithEmailAndPassword(auth, email, password);
        alert("가입 성공!");
      } else {
        alert("이미 가입된 계정입니다!");
        data = signInWithEmailAndPassword(auth, email, password);
      }
      console.log(data);
    } catch (error) {
      alert("오류!");
      console.log(error);
    }
  };
  return (
    <>
      <h1> 회원가입 페이지 </h1>
      <form onSubmit={handleOnSubmit}>
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
        <button type="submit">Create Acoount</button>
        <Link to="/login">
          <button>Back To Login</button>
        </Link>
      </form>
    </>
  );
}
export default SignUp;
