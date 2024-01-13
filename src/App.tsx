import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

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
    </div>
  );
}

export default App;
