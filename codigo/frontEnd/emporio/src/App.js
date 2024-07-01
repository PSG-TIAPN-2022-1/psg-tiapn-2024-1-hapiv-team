import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login/Login.jsx";
import TelaEstoque from "./screens/BaseScreen/components/TelaEstoque/TelaEstoque.jsx";
import TelaFinancas from "./screens/BaseScreen/components/TelaFinancas/TelaFinancas.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/estoque" element={<TelaEstoque />} />
          <Route path="/financas" element={<TelaFinancas />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
