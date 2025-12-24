import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import { Project } from "./components/pages/Project";

function App() {
  return (
    <div className="relative overflow-x-hidden min-h-screen">
      <Navbar />
      <main className="pb-32 pt-10">
        <Home />
        <About />
        <Skills />
        <Project/>
      </main>
    </div>
  );
}

export default App;
