import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import PortfolioDisplay from "./components/PortfolioDisplay";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>

          <Route path="/" element={<Nav />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<PortfolioDisplay />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
