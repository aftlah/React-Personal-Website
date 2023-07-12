import React from "react";
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Project from "./components/pages/Project";

function App() {
  return (
    <div className="relative overflow-x-hidden bg-slate-50">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
