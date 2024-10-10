import React, { useEffect, useState } from "react";
import "../styles/footer.css";

function Footer() {
  const [lastModified, setLastModified] = useState("");

  useEffect(() => {
    const fetchLastCommitDate = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/zachnorman02/portfolio/commits/main"
        );
        const data = await response.json();
        if (
          data &&
          data.commit &&
          data.commit.committer &&
          data.commit.committer.date
        ) {
          const lastCommitDate = data.commit.committer.date;
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
        setLastModified("Unable to fetch last update time");
      }
    };

    fetchLastCommitDate();
  }, []);

  return (
    <div className="footer">
      <p>...</p>
      <p>
        Zach Norman | Last updated: {lastModified} |{" "}
        <a
          href="https://github.com/zachnorman02/portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website Repo
        </a>
      </p>
    </div>
  );
}

export default Footer;
