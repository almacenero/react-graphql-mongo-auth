import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeaderPage from "./Components/Header/index";
import BodyPage from "./Components/Body/index";

function App() {
  return (
    <div>
      <HeaderPage />
      <BodyPage />
    </div>
  );
}

export default App;
