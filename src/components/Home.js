import React from "react";

//The layout of the front page with jumbotron, hero image and buttons with links

function Home() {
  return (
    <div class="homeScreen">
      <section>
        <div>
          <div>
            <h1 id="welcome">Welcome to my Portfolio!</h1>
            <h1 id="introduction">I'm Sevda Seyidova</h1>
            <p id="softDev">
              <span class="highlight">
              Junior Front End Web Developer in the making :)
              </span>
            </p>
            <div className="socials">
            <span className="text-center d-inline-block">
              <a
                className="button btn-primary btn-lg w-100 heroButton"
                href="https://github.com/Helloseva "
                role="button"
              >
                GitHub
              </a>
            </span>
            <span className="text-center d-inline-block">
              <a
                className="button btn-primary btn-lg w-100 heroButton"
                href="https://www.linkedin.com/in/sseva"
                role="button"
              >
                LinkdIn
              </a>
            </span>
            <span className="text-center d-inline-block">
              <a
                class="button btn-primary btn-lg w-100 heroButton"
                href="mailto: abc@example.com"
                role="button"
              >
                email me
              </a>
            </span>
            <span className="text-center d-inline-block">
              <a
                className="button btn-primary btn-lg w-100 heroButton"
                href="https://docs.google.com/document/d/1uFvHLDInuy_9T65lVdgF20mnSHSEh-CCqwi7u4eKaQc/edit"
                role="button"
              >
                resume
              </a>
            </span>
            </div>
            </div>
        </div>
      </section>
      <div class="diagonal"></div>
    </div>
  );
}

export default Home;