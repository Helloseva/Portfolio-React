import React from "react";

function Nav(props) {
    const { activeTab, handleClick } = props;
  
    return (
      <section className="navv">
        <ul className="navv">
          <li className="navList">
            <a
              href="#about"
              onClick={() => handleClick("About")}
              // Check if the activeTab is `About` and set link used
              className={activeTab === "About" ? "nav-link active" : "nav-link"}
            >
              About
            </a>
          </li>
          <li className="navList">
            <a
              href="#portfolio"
              onClick={() => handleClick("Portfolio")}
              // Check if the activeTab is `Portfolio` and set link used
              className={
                activeTab === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li className="navList">
            <a
              href="#contact"
              onClick={() => handleClick("Contact")}
              // Check if the activeTab is `Contact` and set link used
              className={
                activeTab === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
          <li className="navList">
            <a
              href="#resume"
              onClick={() => handleClick("Resume")}
              // Check if the activeTab is `Resume` and set link used
              className={activeTab === "Resume" ? "nav-link active" : "nav-link"}
            >
              Resume
            </a>
          </li>
        </ul>
      </section>
    );
  }
  
  export default Nav;