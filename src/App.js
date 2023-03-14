import React from "react";
import { app, auth } from "./firebase";

function App() {
  console.log("app", app);
  console.log("auth", auth);
  return <div className="App">App</div>;
}

export default App;
