import React from "react";
import "./App.css";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Sidebar from "./component/Navbar/Sidebar";

function App() {
  return (
    <Routers>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Routers>
  );
}

export default App;
