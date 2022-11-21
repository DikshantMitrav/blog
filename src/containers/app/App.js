import React from "react";
import "./App.css";
import Home from "../home/Home";
import Technology from "../content/Technology";
import Bollywood from "../content/Bollywood";
import Hollywood from "../content/Hollywood";
import Fitness from "../content/Fitness";
import Food from "../content/Food";
import Login from "../content/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/food" element={<Food />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
