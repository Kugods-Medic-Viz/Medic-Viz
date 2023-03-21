import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { fbAuth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Home from "../pages/Home";
import SignIn from "../pages/Login/SignIn";
import SignUp from "../pages/Login/SignUp";
import Record from "../pages/Record";

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
    <>
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Home isLoggendIn={isLoggedIn} />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/recording" element={<Record />}></Route>
      </Routes>
    </>
  );
}

export default App;
