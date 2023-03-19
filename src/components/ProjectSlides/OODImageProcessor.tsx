import OODImage from "../../images/OODImageProcessor.png";

function OODImageProcessor() {
  return (
    <div className="project">
      <div className="project-image">
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img
          id="ood-image"
          alt="OOD Image Processor Project"
          className="project-pad-left"
          src={OODImage}
        ></img>
      </div>
      <div className="project-caption">
        <h2>Java Swing Image Processor</h2>
        <h3>June 2021 | CS 3500 (Object-Oriented Design) Assignment</h3>
        <em>Java • Junit • Swing • IntelliJ</em>
        <p>
          Created an image processor using Java Swing. Allowed for importing and
          exporting of images, and had various filter options that could be
          applied to the image.
        </p>
      </div>
    </div>
  );
}

export default OODImageProcessor;
