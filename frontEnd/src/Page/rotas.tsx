import { Routes, Route } from "react-router-dom";
import React from "react";

//Pages
import Home from "./Home";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Rotas;
