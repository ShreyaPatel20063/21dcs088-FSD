import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home'; 
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';



function App() {
  return (
   <div>
      <BrowserRouter> 
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
      </Routes>
      
      </BrowserRouter>
   </div>
      
  );
}

export default App;
