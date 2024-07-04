import RentImage from "../../images/Rent.png";

function RentData() {
  return (
    <div className="project">
      <div className="project-image">
        <img
          id="rent-image"
          alt="Rent Data Project"
          className="project-pad-left"
          src={RentImage}
        ></img>
      </div>
      <div className="project-caption">
        <h2>Analyzing Rent Data</h2>
        <h3>March - May 2024 • STAT 8406 (Regression Methods)<br/> Final Project</h3>
        <h3>
          <a
            href="https://github.com/zachnorman02/STAT-8406-Final-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </h3>
        <em>R • ggplot</em>
        <p>
          Used R to analyze data for 10000 apartment listings to determine what impacts rent prices the most, and how well linear regression fits the data. Main data is from UCI, with additional data merged in from the IRS, Census Bureau, and Google Maps API
        </p>
      </div>
    </div>
  );
}

export default RentData;
