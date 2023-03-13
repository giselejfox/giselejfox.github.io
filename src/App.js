import './App.css';
import { Route } from "react-router-dom";
import { HashRouter, Routes, Navigate } from 'react-router-dom';
import React from "react";

// Import other js files
import NavBar from "./components/NavBar.js";
import HomePage from "./components/HomePage.js"
import Projects from './components/Projects';


function App() {
  return (
    <HashRouter basename="/" >
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/*' element={<Navigate to={'/'} />} />
        </Routes>
      </div>
    </HashRouter>

  );
}

export default App;
