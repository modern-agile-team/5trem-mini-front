import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./component/lntro/Intro";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
    </Routes>
  );
}

export default App; 