import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { fbAuth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Home from "../pages/Home";
import SignIn from "../pages/Login/SignIn";
import SignUp from "../pages/Login/SignUp";
import Record from "../pages/Record";
import styled from "styled-components";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(fbAuth, (user) => {
      console.log(user);
      if (user) {
        setIsLoggedIn(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <Wrap>
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Home isLoggendIn={isLoggedIn} />}></Route>
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
  justify-content: center;
  align-item: center;
  min-height: calc(var(--vh, 1vh) * 100);
  * {
    max-width: 480px;
  }
`;

export default App;
