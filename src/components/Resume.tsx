import "../styles/resume.css";
import EC from "./ResumePieces/EC";
import Experience from "./ResumePieces/Experience";
import School from "./ResumePieces/School";
import Skills from "./ResumePieces/Skills";
const Timeline = require("react-timeline-scribble").Timeline;
const Event = require("react-timeline-scribble").Event;

function Resume() {
  return (
    <div className="content">
      <h1>Resume</h1>
      <a href="/" target="_blank" rel="noopener noreferrer">
        PDF Version (Coming Soon)
      </a>{" "}
      <a
        href="https://www.linkedin.com/in/zachnorman02"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <p>Last Updated: March 2023</p>
      <Skills />
      <div className="timelines">
        <School />
        <Experience />
        <EC />
      </div>
    </div>
  );
}

export default Resume;
