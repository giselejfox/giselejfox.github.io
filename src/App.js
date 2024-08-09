import { Route } from "react-router-dom";
import { HashRouter, Routes, Navigate, Outlet } from 'react-router-dom';
import React from "react";

import NavBar from "./components/NavBar";


function App() {
  return (
    <HashRouter basename="/" >
      <div className="App">
        <div className="row">
          <div className="col-0 col-md-3">
            <NavBar />
          </div>
          <div className="col-12 col-md-9" >
            <Routes>
              <Route path="/about-me" /> 
            </Routes>
            
          </div>
        </div>
      </div> 
    </HashRouter>

  );
}

export default App;
