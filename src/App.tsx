import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    document.title = "Portfolio";
  });
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
