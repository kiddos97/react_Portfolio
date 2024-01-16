import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import Portfolio_page from "./components/Portfolio_page";

function App() {
  useEffect(() => {
    document.title = "Portfolio";

    const link = document.createElement("link");
    link.rel = "icon";
    link.href = "public/favicon.ico";

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio_page" element={<Portfolio_page />} />
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
