import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  useEffect(() => {
    document.title = "Portfolio";
  });
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
