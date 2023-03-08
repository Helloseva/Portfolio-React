import React from "react";

function About() {
    return (
        <section id="aboutMe" className="my-5 intro">
            <p class="me1">Hello. My Name is Sevda Seyidova.</p>

            <div class=" flex-row wrapper">
                <div class="intro-img">
                    <img id="profPic" src="profimg.jpeg" alt="prof-pic" />
                    <p class="me">
                        I'm highly business-savvy Front End Engineer with expertise in front end
                        technologies from a rigorous coding Bootcamp Certificate with edX and Trilogy.
                        Skilled in strategic thinking, bridging the gap between UI/UX designs and
                        technical implementation, and developing visually appealing interfaces in
                        a fast-paced environment that provide exceptional user experience and
                        engagement.
                        Contact me if you have cool opportunities that you think I can help :)  
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;