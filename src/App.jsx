import React from "react"
import Navbar from "./components/pages/Navbar"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Skills from "./components/pages/Skills"
import Project from "./components/pages/Project"


function App() {

  return (
    <>
    <Navbar home={"#home"} about={"#about"} skills={"#skills"} project={"#project"}/>
    <Home id={"home"}/>
    <About id={"about"}/>
    <Skills  id={"skills"}/>
    <Project id={"project"}/>
    </>
  )
}

export default App
