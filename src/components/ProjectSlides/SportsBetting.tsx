import SportsBettingImage from "../../images/SportsBetting.png";

function SportsBetting() {
  return (
    <div className="project">
      <div className="project-image">
        <img
          id="sportsbetting-image"
          alt="Sports Betting Project"
          className="project-pad-left"
          src={SportsBettingImage}
        ></img>
      </div>
      <div className="project-caption">
        <h2>Sports Betting Data Visualization</h2>
        <h3>
          February - April 2023 • DS 4200 (Information Presentation &
          Visualization) Final Project
        </h3>
        <h3>
          <a
            href="https://github.com/DS4200-S23-Class/project-zach-george-filip-travis"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>{" "}
          •{" "}
          <a
            href="https://ds4200-s23-class.github.io/project-zach-george-filip-travis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        </h3>
        <em>JavaScript • D3</em>
        <p>
          Pulled NBA bets data from the Odds API, and used D3 to visualize betting data.
        </p>
      </div>
    </div>
  );
}

export default SportsBetting;
