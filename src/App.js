import React from "react";

import Home from '../src/components/Home/home'
import KaizenForm from "./components/Kaizen Form/KaizenForm";
import Navbar from "./components/Kaizen Form/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <Home />
          } />
          <Route path="/form" element={<><Navbar id="home"/><KaizenForm /></>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
