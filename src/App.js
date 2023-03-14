import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { app, auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Home from "./pages/Home";
import SignIn from "./pages/Login/SignIn";
import SignUp from "./pages/Login/SignUp";

function App() {
  //firebase import 확인용
  // console.log("app", app);
  // console.log("auth", auth);
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //로그인 상태 확인용 테스트 코드
  if (isLoggedIn) {
    console.log(true);
  } else {
    console.log(false);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      <div>App</div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
      </Routes>
    </>
  );
}

export default App;
