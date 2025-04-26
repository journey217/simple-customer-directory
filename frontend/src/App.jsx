import './App.css'
import React, { useState, useEffect, useContext } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Dashboard from "./Pages/Dashboard.jsx";
function App() {

  return (
      <Router>
              <div className="App">
                  <header className="App-header">
                      <div className="maincontent" id="mainContent">
                          <Routes>
                              <Route element={<Dashboard />} path={"/"}/>
                          </Routes>
                      </div>
                  </header>
              </div>
      </Router>
  )
}

export default App
