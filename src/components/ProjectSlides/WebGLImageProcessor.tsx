import WebGLImage from "../../images/WebGL.png";

function WebGLImageProcessor() {
    return (
      <div className="project">
        <div className="project-image">
          <img
            id="webgl-image"
            alt="WebGL Project"
            className="project-pad-left"
            src={WebGLImage}
          ></img>
        </div>
        <div className="project-caption">
          <h2>WebGL Image Processor</h2>
          <h3>December 2022 • CS 4300 (Computer Graphics) Final Project</h3>
          <h3>
            <a
              href="https://github.com/zachnorman02/webgl-image-processor"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>{" "}
            •{" "}
            <a
              href="https://zachnorman02.github.io/webgl-image-processor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </h3>
          <em>JavaScript • WebGL • GLSL</em>
          <p>
            Used WebGL to create an interactive site that allowed for loading an
            image and applying filters, such as monochrome, sepia, and other
            types of color filters that involved the use of a kernel to get the
            color values of surrounding pixels.
          </p>
        </div>
      </div>
    );
}

export default WebGLImageProcessor;