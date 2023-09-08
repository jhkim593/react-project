// import logo from './logo.svg';
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "pages";
import DetailPage from "pages/detail";

function App() {
  // return <MainPage />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="todos/:todoId" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
