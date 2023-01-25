import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login/Login";
import SignUp from "./component/signUp/SignUp";
import Intro from "./component/intro/Intro";
import Todolist from "./component/todolist/Todolist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/todolist" element={<Todolist />} />
    </Routes>
  );
}

export default App;
