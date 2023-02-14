import React from "react";
import Testimonial from "./components/Testimonial/Testimonial";
import Role from "./components/Role/Role";
import Header from "./components/header/header"
import Footer from '../src/components/footer/Footer';
import WhyCap from '../src/components/footer/WhyCAP'
import About from '../src/components/about/about'
import Contact from '../src/components/footer/Contact'
import KaizenForm from "./components/Kaizen Form/KaizenForm";
import Navbar from "./components/Kaizen Form/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Stats from "./components/stats/Stats";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Header id="home" />
              <About id="about" />
              <WhyCap id="whycap" />
              <Stats />
              <Role id="roles" />
              <Testimonial />
              <Contact id="contacts" />
              <Footer />
            </>
          } />
          <Route path="/form" element={<><Navbar id="home"/><KaizenForm /></>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
