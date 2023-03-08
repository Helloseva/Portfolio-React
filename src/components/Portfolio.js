import React from "react";

function Portfolio() {
    return (
      <div>
        <section id="portfolio" className="jobs">
          <p className="projects">-My Projects-</p>
          <div className="container-fluid">
            <div className="row row-1">
              <div className="col">
                {" "}
                <div
                  style={{ backgroundImage: "url(/homepage.png)" }}
                  className="item-wrap work"
                >
                  <a href="github.com/Helloseva/Eco-Travel-Planner">
                    <div>
                      <h3 className="projectTitle">EcoExplorer</h3>
                      <p>
                        {" "}
                        Sustainable travel app with using 3rd party APIs to search 
                        sustainable travel options including sustainable activities 
                        and to calculate carbon emissions generated from their travel
                        itinerary.
                      </p>
                    </div>
                  </a>
                </div>
                ;{" "}
              </div>
              <div className="col">
                {" "}
                <div
                  style={{ backgroundImage: "url(/sign_up_photo.jpeg)" }}
                  className="item-wrap work"
                >
                  {" "}
                  <div>
                    <h3 className="projectTitle"> Weekly Planner</h3>
                    <p>
                      Node.js, Jquery, Javascript
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                {" "}
                <div
                  style={{ backgroundImage: "url(/doges.webp)" }}
                  className="item-wrap work"
                >
                  {" "}
                  <div>
                    <h3 className="projectTitle"> Weather Dashboard</h3>
                    <p> HTML, JavaScript, CSS, Openweather API, Jquery </p>
                  </div>
                </div>
              </div>
              <div className="col">
                {" "}
                <div
                  style={{ backgroundImage: "url(/calender.jpeg)" }}
                  className="item-wrap work"
                >
                  {" "}
                  <div>
                    <h3 className="projectTitle"> Console Finances </h3>
                    <p> HTML, CSS, Jquery, Moment </p>
                  </div>
                </div>
              </div>
              <div className="col">
                {" "}
                <div
                  style={{ backgroundImage: "url(/weatherstack-forecast.gif)" }}
                  className="item-wrap work"
                >
                  {" "}
                  <div>
                    <h3 className="projectTitle"> CV</h3>
                    <p> rEADME</p>
                  </div>
                </div>
                ;{" "}
              </div>
              <div className="col">
                {" "}
                <div
                  style={{ backgroundImage: "url(/employee-tracker.png)" }}
                  className="item-wrap work"
                >
                  {" "}
                  <div>
                    <h3 className="projectTitle"> Coding Quiz</h3>
                    <p>Javascript</p>
                  </div>
                </div>
              </div>
              <div className="col">
                {" "}
                <div
                  style={{ backgroundImage: "url(/redme-gen.png)" }}
                  className="item-wrap work"
                >
                  {" "}
                  <div>
                    <h3 className="projectTitle"> README Generator</h3>
                    <p>Node.js</p>
                  </div>
                </div>
              </div>
              <div className="col">
                {" "}
                <div
                  style={{ backgroundImage: "url(/note-taker.png)" }}
                  className="item-wrap work"
                >
                  {" "}
                  <div>
                    <h3 className="projectTitle">Team Profile Generator</h3>
                    <p>Node.js,  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Portfolio;