import About from "./components/pages/About"
import Home from "./components/pages/Home"
import { Navbar } from "./components/pages/Navbar"
import Skills from "./components/pages/Skills"
// import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
    <div className="min-h-screen scroll-smooth">
      {/* <BrowserRouter>
      <Routes> */}

      <Navbar home={"#home"} about={"#about"} skills={"#skills"}/>
      <Home id={"home"}/>
      <About id={"about"}/>
      <Skills id={"skills"}/>

      {/* </Routes>
      </BrowserRouter> */}
   </div>
  )
}

export default App
