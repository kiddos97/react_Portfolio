import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Project_page from "./components/Project_page";

function App() {
  useEffect(() => {
    document.title = "Portfolio";
  });
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project_page" element={<Project_page />} />
      </Routes>
      {/* <Hero />
      <About />
      <Skills />
      <Project />
      <Contact /> */}
    </>
  );
}

export default App;
