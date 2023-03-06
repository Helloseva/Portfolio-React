import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../src/components/Header";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Resume";
import "./App.css";

function App() {
  const [activeTab, handleClick] = useState("about");

  // This method is checking to see what the value of `activeTab` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderTab = () => {
    if (activeTab === "About") {
      return <About />;
    }
    if (activeTab === "Contact") {
      return <Contact />;
    }
    if (activeTab === "Portfolio") {
      return <Portfolio />;
    }
    if (activeTab === "Resume") {
      return <Resume />;
    }
    return <About />;
  };

  return (
    <>
      <Header
        activeTab={activeTab}
        handleClick={handleClick}
      ></Header>
      <main>{renderTab()}</main>
      <Footer></Footer>
    </>
  );
}
export default App;
