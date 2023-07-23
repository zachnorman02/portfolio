import "../styles/resume.css";
import Certs from "./ResumePieces/Certs";
import EC from "./ResumePieces/EC";
import Experience from "./ResumePieces/Experience";
import School from "./ResumePieces/School";
import Skills from "./ResumePieces/Skills";
import ResumePDF from "../Norman_Zach_Resume.pdf"

function Resume() {
  return (
    <div className="content">
      <h1>Resume</h1>
      <a
        href={ResumePDF}
        target="_blank"
        rel="noopener noreferrer"
      >
        PDF Version
      </a>{" "}
      <a
        href="https://www.linkedin.com/in/zachnorman02"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <p>Last Updated: May 2023</p>
      <Skills />
      <Certs />
      <div className="timelines">
        <School />
        <Experience />
        <EC />
      </div>
    </div>
  );
}

export default Resume;
