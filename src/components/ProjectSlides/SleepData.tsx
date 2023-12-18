import SleepImage from "../../images/Sleep.png";

function SleepData() {
  return (
    <div className="project">
      <div className="project-image">
        <img
          id="sleep-image"
          alt="Sleep Data Project"
          className="project-pad-left"
          src={SleepImage}
        ></img>
      </div>
      <div className="project-caption">
        <h2>Analyzing Sleep Data</h2>
        <h3>
          October - December 2023 • STAT 8452 (Nonparametric Statistics) Final
          Project
        </h3>
        <h3>
          <a
            href="https://github.com/zachnorman02/STAT-8452-Final-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>{" "}
          •{" "}
          <a
            href="https://zachnorman02.github.io/STAT-8452-Final-Project/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ pointerEvents: "none", cursor: "default" }}
          >
            Webpage (Coming Soon)
          </a>
        </h3>
        <em>R • ggplot</em>
        <p>
          Used R to analyze data for 46 people to see what impacts their sleep
          the most.
        </p>
      </div>
    </div>
  );
}

export default SleepData;
