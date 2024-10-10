import "../styles/resume.css";
import Certs from "./ResumePieces/Certs";
import EC from "./ResumePieces/EC";
import Experience from "./ResumePieces/Experience";
import School from "./ResumePieces/School";
import Skills from "./ResumePieces/Skills";
import ResumePDF from "../Norman_Zach_Resume.pdf"
import preval from "babel-plugin-preval/macro";

const lastModified = preval`
  const fs = require('fs');
  const path = require('path');
  const filePath = path.join(__dirname, '../Norman_Zach_Resume.pdf');
  const stats = fs.statSync(filePath);
  module.exports = stats.mtime.toISOString();
`;

const formattedDate = new Date(lastModified).toLocaleString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});

function Resume() {
  return (
    <div className="content">
      <h1>Resume</h1>
      <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
        PDF Version
      </a>{" "}
      <a
        href="https://www.linkedin.com/in/zachnorman02"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <p>PDF Last Updated: {formattedDate} (updates automatically)</p>
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
