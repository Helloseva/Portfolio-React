import React from "react";
import Nav from "./Nav";

function Header(props) {
    const { activeTab, handleClick } = props;
  
    return (
      <div class="homeScreen">
        <section>
          <div>
            <Nav activeTab={activeTab} handleClick={handleClick}></Nav>
            <div>
              <h1 id="welcome">Welcome to the</h1>
              <h1 id="introduction">portfolio of Sevda Seyidova</h1>
            </div>
          </div>
        </section>
        <div class="diagonal"></div>
      </div>
    );
  }
  
  export default Header;