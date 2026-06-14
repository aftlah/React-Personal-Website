import { useState } from "react";
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Experience from "./components/pages/Experience";
import Skills from "./components/pages/Skills";
import { Project } from "./components/pages/Project";
import WelcomeAnimation from "./components/ui/WelcomeAnimation";
import CustomCursor from "./components/ui/CustomCursor";
import ScrollProgress from "./components/ui/ScrollProgress";
import FloatingElements from "./components/ui/FloatingElements";

function App() {
  const [bootDone, setBootDone] = useState(false);

  return (
    <div className="relative overflow-x-hidden min-h-screen cursor-none">
      <WelcomeAnimation onComplete={() => setBootDone(true)} />
      {bootDone && (
        <>
          <CustomCursor />
          <ScrollProgress />
          <FloatingElements />
          <Navbar />
          <main className="pb-28 pt-24 relative z-10">
            <Home />
            <About />
            <Experience />
            <Skills />
            <Project />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
