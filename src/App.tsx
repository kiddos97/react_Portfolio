import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

function App() {
  useEffect(() => {
    document.title = "Portfolio";
  });
  return (
    <div>
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
