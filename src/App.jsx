import logo from "./logo.svg";
import "./App.css";
import { Parallax } from "react-parallax";
import React, { useState } from "react";
import img1 from "./assets/vecteezy_liquid-gradient-color-background-fluid-gradient_677949/Abstract.jpg";
import Main from "./Main";
import Header from "./Header";
import Skills from "./Skills";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Parallax bgImage={img1} strength={500}>
        <Main />
      </Parallax>
      <Parallax bgImage={img1} strength={500}>
        <Skills />
      </Parallax>
      <Parallax bgImage={img1} strength={500}>
        <Projects />
      </Parallax>
    </div>
  );
}

export default App;
