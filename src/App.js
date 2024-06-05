import { Route } from "react-router-dom";
import { HashRouter, Routes, Navigate, Outlet } from 'react-router-dom';
import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

// Import other js files
import NavBar from "./components/NavBar.js";
import HomePage from "./components/HomePage.js"
import Projects from './components/Projects';
import About from './components/About';
// import SoleOpinionBackground from "./components/project-extra-pages/SoleOpinionBackground.js";
import Blog from "./components/Blog.js";
import BlogDetailPage from "./components/BlogDetailPage.js";


function App() {
  return (
    <HashRouter basename="/" >
      <div className="App">
        <div className="row">
          <div className="col-0 col-md-4">
            <NavBar />
          </div>
          <div className="col-12 col-md-8">
            gpoo
          </div>
        </div>
      </div> 
    </HashRouter>

  );
}

export default App;
