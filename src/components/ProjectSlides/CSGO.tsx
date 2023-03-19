import CSGOImage from "../../images/DS4400.png";

function CSGO() {
  return (
    <div className="project">
      <div className="project-image">
        <img id="csgo-image" alt="CSGO Project" src={CSGOImage}></img>
      </div>
      <div className="project-caption project-pad-right">
        <h2>Predicting CS:GO Winners</h2>
        <h3>
          October - December 2021 | DS 4400 (Machine Learning 1) Final Project
        </h3>
        <h3>
          <a
            href="https://github.com/zachnorman02/DS-4400-Final-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </h3>
        <em>Python • scikit-learn • Matplotlib</em>
        <p>
          Given a dataset of CS:GO round features and their outcome
          (winner/loser), we wanted to find if certain features impacted the
          result of the match. We analyzed different models to see which was
          most accurate, and then found the best features, which was time left,
          armor of each team, and amount of money of each team. Scikit-learn was
          used for the feature selection and models, and Matplotlib was used for
          visualization.
        </p>
      </div>
    </div>
  );
}

export default CSGO;
