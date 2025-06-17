import XRay from "../../images/XRay.png";

function XRays() {
  return (
    <div className="project">
      <div className="project-image">
        <img id="xray-image" alt="XRay Classification Project" src={XRay}></img>
      </div>
      <div className="project-caption project-pad-right">
        <h2>XRay Classification</h2>
        <h3>
          March - May 2025 | STAT 8490 (Deep Learning) Final Project
        </h3>
        <h3>
          <a
            href="hhttps://github.com/zachnorman02/STAT-8490-Final-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </h3>
        <em>
          Python • pandas • scikit-learn • Tensorflow
        </em>
        <p>
          Looked at 7000+ X-Ray images and attempted various Convolutional Neural Networks to classify each x-ray into either no diagnosis (normal), pneumonia, COVID-19, or tuberculosis. 
        </p>
      </div>
    </div>
  );
}

export default XRays;
