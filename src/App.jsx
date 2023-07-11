import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./Components/About";
import { Projects } from "./Components/Projects";
import { Home } from "./Components/Home";
import { Java } from "./Components/Java";
import Js from "./Components/Js";
import Python from "./Components/Python";

function App() {
  return (
    <Router basename="/">
      <>
        <div
          style={{
            display: "flex",
            gap: "20px",
            minWidth: "700px",
          }}
        >
          <div>
            <Link to="/home">Home</Link>
          </div>
          <div>
            <Link to="/projects">Projects</Link>
          </div>
          <div>
            <Link to="/about">About Me</Link>
          </div>
        </div>
        <hr style={{ marginTop: "70px" }}></hr>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/java" element={<Java />} />
          <Route path="/python" element={<Python />} />
          <Route path="/js" element={<Js />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
