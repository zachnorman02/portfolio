import React, { useEffect } from 'react';
import '../styles/navbar.css';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link} from 'react-router-dom';
import ReactGA from "react-ga";
import { isMobile } from 'react-device-detect';
const TRACKING_ID = "G-G33T7R2YL3";
ReactGA.initialize(TRACKING_ID);

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState<boolean>(false);

  useEffect(() => {
    if (isMobile) {
      if (navbarOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  }, [navbarOpen])

  function handleClick(link: string) {
      ReactGA.event({
          category: 'Navigation',
          action: 'Clicked Link',
          label: link
      });
  }

  return (
    <div className="navbar">
      <button
        className="icon navbar-btn"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`links ${navbarOpen ? "open" : ""}`} id="navbar-links">
        <Link
          to="/"
          onClick={() => {
            setNavbarOpen(!navbarOpen);
            handleClick("Home");
          }}
        >
          Home
        </Link>
        <Link
          to="/projects"
          onClick={() => {
            setNavbarOpen(!navbarOpen);
            handleClick("Projects");
          }}
        >
          Projects
        </Link>
        <Link
          to="/resume"
          onClick={() => {
            setNavbarOpen(!navbarOpen);
            handleClick("Resume");
          }}
        >
          Resume
        </Link>
        <Link
          to="/classes"
          onClick={() => {
            setNavbarOpen(!navbarOpen);
            handleClick("Classes");
          }}
        >
          Classes
        </Link>
        <a
          href="https://zachnorman02.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            handleClick("Blog");
          }}
        >
          Blog
        </a>
        <a
          href="https://www.github.com/zachnorman02"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            handleClick("GitHub");
          }}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/zachnorman02"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            handleClick("LinkedIn");
          }}
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Navbar;