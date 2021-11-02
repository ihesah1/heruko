import React, { Component } from 'react'
import About from "./components/about";
import Education from "./components/education"
import Exper from "./components/exper";
import PersonalInfo from "./components/PersonalInfo"
import Info from "./components/Info" 
import "./App.css"

function App() {
  return (
    <div className="App">
    <About />
    <Education />
    <Info  />
    </div>
  );
}

export default App;
