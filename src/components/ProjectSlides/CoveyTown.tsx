import CoveyTownImage from "../../images/CoveyTown.png";

function CoveyTown() {
  return (
    <div className="project">
      <div className="project-image">
        <img
          id="coveytown-image"
          alt="CoveyTown Project"
          src={CoveyTownImage}
        ></img>
      </div>
      <div className="project-caption">
        <h2>Covey.town Polling Area</h2>
        <h3>
          November - December 2022 • CS 4530 (Software Engineering) Final
          Project
        </h3>
        <h3>
          <a
            href="https://github.com/neu-cs4530/fall-22-team-project-group-413"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>{" "}
          •{" "}
          <a
            href="https://polling-area-413.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        </h3>
        <em>TypeScript • React • Netlify • Heroku • Jest • Phaser</em>
        <p>
          Covey.town is a video conferencing site similar to Gather.town, where
          there are various areas for users to video chat and interact in. We
          added a new type of area to existing Covey.town codebase that allowed
          for the creation of polls tied to the area. Our development allowed
          for binary (yes/no) polls to be created and voted on, utilizing the
          react-leaf-polls package. Typescript and React were used for
          implementation, and tests were written using Jest. Our feature was
          deployed using Heroku and Netlify. Future development would include
          fixing the issue with closing the polling window, relaying votes to
          other players, and showing the results at the end of a polling time
          window.
        </p>
      </div>
    </div>
  );
}

export default CoveyTown;
