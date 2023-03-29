import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { fbAuth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Home from "../pages/Home";
import SignIn from "../pages/Login/SignIn";
import SignUp from "../pages/Login/SignUp";
import SignOut from "../pages/Login/SignOut";
import Record from "../pages/Record";
import styled from "styled-components";
import Nav from "./Nav";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isHome, setIsHome] = useState(false);

  const currPath = window.location.pathname;

  useEffect(() => {
    if (currPath === "/") {
      setIsHome(true);
    }
    onAuthStateChanged(fbAuth, (user) => {
      console.log(user);
      if (user) {
        setIsLoggedIn(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, [currPath]);

  return (
    <Wrap>
      <Nav isLoggedIn={isLoggedIn} isHome={isHome} />
      <Routes>
        <Route path="/" element={<Home isLoggendIn={isLoggedIn} />}></Route>
        <Route
          path="/signout"
          element={<SignOut isLoggedIn={isLoggedIn} />}
        ></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/recording" element={<Record />}></Route>
      </Routes>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: calc(var(--vh, 1vh) * 100);
  * {
    max-width: 480px;
  }

  ${"" /* 녹음 기능 wave 나오는 부분 숨기기 */}
  canvas.visualizer {
    width: 0px;
    height: 0px;
  }
`;

export default App;
