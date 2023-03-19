import CollegeImage from "../../images/DS3000.png";

function CollegeDiversity() {
  return (
    <div className="project">
      <div className="project-image">
        <img id="college-image" alt="College Diversity Project" src={CollegeImage}></img>
      </div>
      <div className="project-caption project-pad-right">
        <h2>Analyzing College Diversity</h2>
        <h3>
          May - June 2021 | DS 3000 (Foundations of Data Science) Final Project
        </h3>
        <h3>
          <a
            href="https://github.com/leoRysing/DS-3000-final-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </h3>
        <em>
          Python • pandas • scikit-learn • Plotly • Seaborn • Jupyter Notebook
        </em>
        <p>
          Given data on universities and their racial breakdown on their campus,
          we wanted to see if there was a relationship between various
          attributes of the college, such as cost, location, or programs
          offered, and their diversity. We found that whether a college was
          public or private, their total price, and amount of student population
          in lower income brackets influenced the racial diversity. Pandas and
          Numpy were used for data wrangling, Scikit-learn was used for feature
          selection and classification models, and Plotly and Seaborn were used
          for visualization.
        </p>
      </div>
    </div>
  );
}

export default CollegeDiversity;
