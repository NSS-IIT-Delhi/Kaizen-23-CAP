// import React from 'react'
// import Header from "./header/header"

// function App() {
//   return (
//     <Header/>
//   )
// }

// export default App

import React from "react";
import Testimonial from "./components/Testimonial/Testimonial";
import Role from "./components/Role/Role";
import Header from "./header/header"
import Footer from '../src/components/footer/Footer';
import WhyCap from '../src/components/footer/WhyCAP'
import Contact from '../src/components/footer/Contact'

function App() {
  return (
    <>
      <Header />
      <WhyCap />
      <Role />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
