import { Route } from "react-router-dom";
import { HashRouter, Routes } from 'react-router-dom';
import React from "react";

// Import other js files
import NavBar from "./components/NavBar.js";
import About from "./components/About.js"
import JournalListing from "./components/JournalListing.js";
import JournalPost from "./components/JournalPost.js";
import CreationsListing from "./components/CreationsListing.js";

function App() {
  return (
    <HashRouter basename="/" >
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/journal" element={<JournalListing />} />
          <Route path="/journal/:postId" element={<JournalPost />} />
          <Route path="/creations" element={<CreationsListing />} />
          <Route path="/" element={<About />} />
        </Routes>
      </div> 
    </HashRouter>

  );
}

export default App;
