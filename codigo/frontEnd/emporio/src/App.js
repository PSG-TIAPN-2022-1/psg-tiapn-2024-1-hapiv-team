import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login/Login.jsx";
import Base from "./screens/BaseScreen/Base";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/base" element={<Base />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
