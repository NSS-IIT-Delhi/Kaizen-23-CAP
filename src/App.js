import React, { useEffect } from "react";

import Home from '../src/components/Home/home'
import KaizenForm from "./components/Kaizen Form/KaizenForm";
import LeaderBoard from "./components/leaderboard/LeaderBoard";
import Navbar from "./components/Kaizen Form/navbar";
import Winners from './components/winners/LeaderBoard'
import Team from './components/Team/Team'
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const TRACKING_ID = "UA-190720982-1";

ReactGA.initialize(TRACKING_ID);


function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<><Navbar id="home" /><KaizenForm /></>} />
          <Route path="/team" element={<><Navbar id="home" /><Team /></>} />
          <Route path="/leaderboard" element={<><Navbar id="home" /><LeaderBoard /></>} />
          <Route path="/winners" element={<><Navbar id="home" /><Winners /></>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
