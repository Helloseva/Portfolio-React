import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ProjectsGallery from "./components/ProjectsGallery";
import Resume from "./components/Resume";
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects-gallery/*" element={<ProjectsGallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;