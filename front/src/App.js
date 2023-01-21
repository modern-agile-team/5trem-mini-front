import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login/Login";
import SignUp from "./component/signUp/SignUp";
import MainPage from "./component/mainPage/MainPage";
import MainPageFriend from "./component/mainPage_Friend/MainPageFriend";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mainPage" element={<MainPage />} />
      <Route path="/mainPage/friend" element={<MainPageFriend />} />
    </Routes>
  );
}

export default App;
