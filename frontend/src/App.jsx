import './App.css'
import './Styles/DashboardHeader.css'
import './Styles/AddCustomer.css';
import './Styles/CustomerDisplay.css'
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
                  <Routes>
                      <Route element={<Dashboard />} path={"/"}/>
                  </Routes>
              </div>
      </Router>
  )
}

export default App
