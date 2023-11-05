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
        <Link to="/" onClick={() => setNavbarOpen(!navbarOpen)}>
          Home
        </Link>
        <Link to="/projects" onClick={() => setNavbarOpen(!navbarOpen)}>
          Projects
        </Link>
        <Link to="/resume" onClick={() => setNavbarOpen(!navbarOpen)}>
          Resume
        </Link>
        <Link to="/classes" onClick={() => setNavbarOpen(!navbarOpen)}>
          Classes
        </Link>
        <a
          href="https://zachnorman02.atlassian.net/wiki/spaces/~63361d2861dbef2805c0363d/overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
        <a
          href="https://www.github.com/zachnorman02"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
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