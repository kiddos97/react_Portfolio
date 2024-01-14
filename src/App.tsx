import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
//import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
//import Project_page from "./components/Project_page";

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
