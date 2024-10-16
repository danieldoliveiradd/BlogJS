import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./styles/main.scss";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/entrar" element={<LoginPage/>}/>
        <Route path="/cadastro" element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
