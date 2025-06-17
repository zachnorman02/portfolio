import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { isMobile } from "react-device-detect";
import WebGLImageProcessor from "./ProjectSlides/WebGLImageProcessor";
import CSGO from "./ProjectSlides/CSGO";
import OODImageProcessor from "./ProjectSlides/OODImageProcessor";
import CollegeDiversity from "./ProjectSlides/CollegeDiversity";
import "../styles/projects.css";
import SportsBetting from "./ProjectSlides/SportsBetting";
import KnotAProblem from "./ProjectSlides/KnotAProblem";
import WalmartData from "./ProjectSlides/WalmartData";
import RentData from "./ProjectSlides/RentData";
import XRays from "./ProjectSlides/XRays";

function Projects() {
  const [swipe, setSwipe] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    if (isMobile) {
      const selectedElement = document.querySelector(".slide.selected");
      if (selectedElement) {
        const carouselWrapper = document.querySelector(
          ".slider-wrapper"
        ) as HTMLElement;
        if (carouselWrapper) {
          const height = selectedElement.getBoundingClientRect().height;
          carouselWrapper.style.height = `${height}px`;
        }
      }
    }
  }, [currentSlide]);

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
          GitHub
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
        useKeyboardArrows={true}
        onChange={(index) => {setCurrentSlide(index);}}
      >
        <WebGLImageProcessor />
        <CSGO />
        <OODImageProcessor />
        <CollegeDiversity />
        <SportsBetting />
        <KnotAProblem />
        <WalmartData />
        <RentData />
        <XRays />
      </Carousel>
    </div>
  );
}

export default Projects;
