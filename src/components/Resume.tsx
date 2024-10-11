import React, { useEffect, useState } from "react";
import "../styles/resume.css";
import Certs from "./ResumePieces/Certs";
import EC from "./ResumePieces/EC";
import Experience from "./ResumePieces/Experience";
import School from "./ResumePieces/School";
import Skills from "./ResumePieces/Skills";
import ResumePDF from "../Norman_Zach_Resume.pdf";

function Resume() {
  const [lastModified, setLastModified] = useState("");

  useEffect(() => {
    const fetchLastModified = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/zachnorman02/portfolio/commits?path=src/latex_files/resume.pdf"
        );
        const data = await response.json();
        if (data && data.length > 0) {
          const lastCommitDate = data[0].commit.committer.date;
          setLastModified(
            new Date(lastCommitDate).toLocaleString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })
          );
        }
      } catch (error) {
        setLastModified("Unable to fetch file history");
      }
    };

    fetchLastModified();
  }, []);

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
      <p>PDF Last Updated: {lastModified} (updates automatically)</p>
      {/* will want to use this instead, but maybe use above for the footer: https://api.github.com/repos/zachnorman02/portfolio/commits?path=src/Norman_Zach_Resume.pdf */}
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
