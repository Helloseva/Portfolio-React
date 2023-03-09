import React from "react";
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>

          <Route path="/" element={<Nav />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Contact />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App;
