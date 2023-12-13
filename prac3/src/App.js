import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Analytics from "./Components/Analytics/Analytics";
import Messages from "./Components/Messages/Messages";

function App() {
  return (
    <div className="master">
      <div className="two"><BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </BrowserRouter></div>
      <div className="one"><Sidebar /></div>
      
    </div>
  );
}

export default App;
