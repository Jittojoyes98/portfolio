import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ScrollDown from "./components/ScrollDown";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mt-32 flex flex-col gap-y-28">
      <Navbar />
      <Home />
      <ScrollDown />
    </div>
  );
}

export default App;
