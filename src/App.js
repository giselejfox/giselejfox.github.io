import { Route } from "react-router-dom";
import { HashRouter, Routes, Navigate, Outlet } from 'react-router-dom';
import React from "react";

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
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog" element={<Outlet />}>
            <Route path=':blogTitlePath' element={<BlogDetailPage />} />
            <Route index element={<Blog />} />
          </Route>
          {/* <Route path="/sole-opinion-background" element={<SoleOpinionBackground />} /> */}
          <Route path='/*' element={<Navigate to={'/'} />} />
        </Routes>
      </div> 
    </HashRouter>

  );
}

export default App;
