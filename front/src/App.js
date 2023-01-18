import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login/Login";
import SignUp from "./component/signUp/SignUp";
import Main from "./component/mainPage/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mainPage" element={<Main />} />
    </Routes>
  );
}

export default App;
