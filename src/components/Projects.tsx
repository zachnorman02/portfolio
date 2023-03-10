import React from "react";
import "../styles/projects.css";

function Projects() {
  return (
    <div className="content">
      <h1>Projects</h1>
      <p>
        Many of these projects were completed either in-class, or through my
        work experience. Demos and Github repositories are linked for code I can
        share, otherwise code is available upon request for the projects listed
        as class assignments. For more projects (though many of the ones not
        mentioned here are subpar or unfinished), go to my{" "}
        <a href="https://www.github.com/zachnorman02">Github</a>.
      </p>
      <div className="project">
        <h2>WebGL Image Processor</h2>
        <h3>
          December 2022 • CS 4300 (Computer Graphics) Final Project •{" "}
          <a href="https://github.com/zachnorman02/webgl-image-processor">
            Code
          </a>{" "}
          •{" "}
          <a href="https://zachnorman02.github.io/webgl-image-processor/">
            Demo
          </a>
        </h3>
        <em>JavaScript • WebGL • GLSL</em>
        <p>
          Used WebGL to create an interactive site that allowed for loading an
          image and applying filters, such as monochrome, sepia, and other types
          of color filters that involved the use of a kernel to get the color
          values of surrounding pixels.
        </p>
      </div>
      <div className="project">
        <h2>Covey.town Polling Area</h2>
        <h3>
          November - December 2022 • CS 4530 (Software Engineering) Final
          Project •{" "}
          <a href="https://github.com/neu-cs4530/fall-22-team-project-group-413">
            Code
          </a>{" "}
          • <a href="https://polling-area-413.netlify.app/">Demo</a>
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
      <div className="project">
        <h2>Predicting CS:GO Winners</h2>
        <h3>
          October - December 2021 | DS 4400 (Machine Learning 1) Final Project •{" "}
          <a href="https://github.com/zachnorman02/DS-4400-Final-Project">
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
      <div className="project">
        <h2>Java Swing Image Processor</h2>
        <h3>June 2021 | CS 3500 (Object-Oriented Design) Assignment</h3>
        <em>Java • Junit • Swing • IntelliJ</em>
        <p>
          Created an image processor using Java Swing. Allowed for importing and
          exporting of images, and had various filter options that could be
          applied to the image.
        </p>
      </div>
      <div className="project">
        <h2>Analyzing College Diversity</h2>
        <h3>
          May - June 2021 | DS 3000 (Foundations of Data Science) Final Project
          •{" "}
          <a href="https://github.com/leoRysing/DS-3000-final-project">Code</a>
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

export default Projects;
