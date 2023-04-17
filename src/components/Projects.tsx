import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { isMobile } from "react-device-detect";
import WebGLImageProcessor from "./ProjectSlides/WebGLImageProcessor";
import CoveyTown from "./ProjectSlides/CoveyTown";
import CSGO from "./ProjectSlides/CSGO";
import OODImageProcessor from "./ProjectSlides/OODImageProcessor";
import CollegeDiversity from "./ProjectSlides/CollegeDiversity";
import "../styles/projects.css";
import SportsBetting from "./ProjectSlides/SportsBetting";
import KnotAProblem from "./ProjectSlides/KnotAProblem";

function Projects() {
  const [swipe, setSwipe] = useState(true);

  return (
    <div className="content">
      <h1>Projects</h1>
      <p>
        Many of these projects were completed either in-class, or through my
        work experience. Demos and Github repositories are linked for code I can
        share, otherwise code is available upon request for the projects listed
        as class assignments. For more projects (though many of the ones not
        mentioned here are subpar or unfinished), go to my{" "}
        <a
          href="https://www.github.com/zachnorman02"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github 
        </a>
        .
      </p>
      <button onClick={() => setSwipe(!swipe)} id="projects-swipe-button">
        {swipe ? "Disable" : "Enable"} Swipe on Desktop
      </button>
      <Carousel
        className="projects-carousel"
        showThumbs={false}
        showStatus={false}
        emulateTouch={swipe}
        infiniteLoop={true}
        dynamicHeight={isMobile}
        useKeyboardArrows={true}
      >
        <WebGLImageProcessor/>
        <CoveyTown/>
        <CSGO/>
        <OODImageProcessor/>
        <CollegeDiversity/>
        <SportsBetting/>
        <KnotAProblem/>
      </Carousel>
    </div>
  );
}

export default Projects;
