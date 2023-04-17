import KnotAProblemImage from "../../images/KnotAProblem.png";

function KnotAProblem() {
  return (
    <div className="project">
      <div className="project-image">
        <img
          id="knotaproblem-image"
          alt="Knot a Problem"
          className="project-pad-left"
          src={KnotAProblemImage}
        ></img>
      </div>
      <div className="project-caption">
        <h2>Knot A Problem</h2>
        <h3>
          February - April 2023 • IS 4300 (Human-Computer Interaction) Final
          Project
        </h3>
        <h3>
          <a
            href="https://www.figma.com/file/ThlZsShkbxJ9h9XqqtsIM3/Lo-Fi-Prototype?node-id=0%3A1&t=uDTEIS3TZD4bWxCo-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wireframe
          </a>{" "}
          •{" "}
          <a
            href="https://www.figma.com/proto/ThlZsShkbxJ9h9XqqtsIM3/Hi-Fi-Prototype?page-id=0%3A1&node-id=7-6&viewport=553%2C149%2C0.47&scaling=scale-down&starting-point-node-id=7%3A6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prototype
          </a>{" "}
          •{" "}
          <a
            href="/projects"
            target="_blank"
            rel="noopener noreferrer"
            style={{pointerEvents: "none", cursor: "default"}}
          >
            Report (Coming Soon)
          </a>
        </h3>
        <em>Figma</em>
        <p>
          Designed an app for knot-tying tutorials. Went through the entire design process, from conception, low and high-fidelity prototyping, and usability testing. 
        </p>
      </div>
    </div>
  );
}

export default KnotAProblem;
