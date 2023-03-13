import React from "react";
import myResume from "../assets/resume.pdf";

function Resume() {
  return (
    <div>
      <section id="resume" className="download-intro">
        <h1 class="resumeTitle">Download My Resume</h1>
        <a href={myResume} className="download-logo" size="100x">
        </a>
      </section>
    </div>
  );
}

export default Resume;