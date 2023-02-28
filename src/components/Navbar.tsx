import React from 'react';
import '../styles/navbar.css';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link} from 'react-router-dom';

function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState<boolean>(false);

  return (
    <div className="navbar">
      <button
        className="icon navbar-btn"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`links ${navbarOpen ? "open" : ""}`} id="navbar-links">
        <Link to="/portfolio">Home</Link>
        <Link to="/portfolio/projects">Projects</Link>
        <Link to="/portfolio/resume">Resume</Link>
        <Link to="/portfolio/classes">Classes</Link>
        <Link to="/portfolio/blog">Blog</Link>
        <a
          href="https://www.github.com/zachnorman02"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/zachnorman02"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Navbar;