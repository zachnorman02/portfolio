import WalmartImage from "../../images/Walmart.png";

function WalmartData() {
  return (
    <div className="project">
      <div className="project-image">
        <img
          id="walmart-image"
          alt="Walmart Data Project"
          className="project-pad-left"
          src={WalmartImage}
        ></img>
      </div>
      <div className="project-caption">
        <h2>Analyzing Walmart Data</h2>
        <h3>
          October - December 2023 • STAT 7500 (Statistical Programming) Final
          Project
        </h3>
        <h3>
          <a
            href="https://github.com/zachnorman02/STAT-7500-Final-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>{" "}
          •{" "}
          <a
            href="https://zachnorman02.github.io/STAT-7500-Final-Project/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Webpage
          </a>
        </h3>
        <em>R • ggplot</em>
        <p>Used R to analyze data for 45 Walmart stores to see what impacts their sales the most.</p>
      </div>
    </div>
  );
}

export default WalmartData;
