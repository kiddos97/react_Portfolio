import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
//import { Routes, Route } from "react-router-dom";
//import Project_page from "./components/Project_page";

function App() {
  useEffect(() => {
    document.title = "Portfolio";
  });
  return (
    <>
      <NavBar />

      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default App;
