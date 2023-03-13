import './App.css';
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import React from "react";

// Import other js files
import NavBar from "./components/NavBar.js";
import HomePage from "./components/HomePage.js"
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/*' element={<Navigate to={'/home'} />} />
      </Routes>
    </div>
  );
}

export default App;
