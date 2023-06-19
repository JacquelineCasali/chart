import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/reset.scss";
import "./styles/style.scss";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/cadastro" element={<Register />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
