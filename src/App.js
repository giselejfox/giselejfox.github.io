import { Route } from "react-router-dom";
import { HashRouter, Routes } from 'react-router-dom';
import React from "react";

// Import other js files
import NavBar from "./components/NavBar.js";
import About from "./components/About.js"
import BlogListing from "./components/BlogListing.js";
import BlogPost from "./components/BlogPost.js";

function App() {
  return (
    <HashRouter basename="/" >
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/blog" element={<BlogListing />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="/" element={<About />} />
        </Routes>
      </div> 
    </HashRouter>

  );
}

export default App;
