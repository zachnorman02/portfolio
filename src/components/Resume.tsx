import React from "react";
import "../styles/resume.css";

function Resume() {
  return (
    <div className="content">
      <h1>Resume</h1>
      <a href="/">PDF Version (Coming Soon)</a>
      <a href="https://www.linkedin.com/in/zachnorman02">LinkedIn</a>
      <p>Last Updated: March 2023</p>
      <h2>Education</h2>
      <table id="education">
        <tr>
          <td>
            <strong>
              Northeastern University - Khoury College of Computer Sciences
            </strong>
          </td>
          <td className="align-right">September 2020 - April 2023</td>
        </tr>
        <tr>
          <td>
            <p>Bachelor of Science in Computer Science and Mathematics</p>
          </td>
          <td className="align-right">
            <p>GPA: 3.4/4.0</p>
          </td>
        </tr>
        <tr>
          <td>
            <br />
          </td>
        </tr>
        <tr>
          <td>
            <strong>McDonogh School</strong>
          </td>
          <td className="align-right">August 2016 - June 2020</td>
        </tr>
        <tr>
          <td>
            <p>High School Diploma</p>
          </td>
          <td className="align-right">
            <p>GPA: 4.3/4.0</p>
          </td>
        </tr>
      </table>
      <h2>Skills</h2>
      <table id="skills">
        <tr>
          <td>
            <p>
              <strong>Languages: </strong> Java, Python, JavaScript, TypeScript,
              HTML, CSS, SQL, C++, LaTeX
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <strong>Frameworks and Libraries: </strong> React, Svelte, Django,
              D3, pandas, scikit-learn, Plotly & Plotly-Dash, Seaborn
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <strong>Tools and Technologies: </strong> JetBrains IDEs, VS Code,
              Jupyter Notebook, AWS, Figma, Git, Docker
            </p>
          </td>
        </tr>
      </table>
      <h2>Experience</h2>
      <table id="experience">
        <tr>
          <td>
            <p>
              <strong>Vanguard</strong>, Malvern, PA
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <em>Application Engineer, Full-Time</em>
            </p>
          </td>
          <td className="align-right">
            <p>May 2023 - Present</p>
          </td>
        </tr>
        <tr>
          <td>
            <br />
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <strong>Generate Product Development</strong>, Boston, MA
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <em>Website Developer, Extracurricular Club Involvement</em> ???
              JavaScript, React
            </p>
          </td>
          <td className="align-right">
            <p>January 2023 - April 2023</p>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>
                Implement mobile-supported pages for the club website, seen by
                100+ club members and the Northeastern community
              </li>
              <li>Fix resizing and linking bugs across the website</li>
              <li>
                Site:{" "}
                <a
                  href="https://www.generatenu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.generatenu.com
                </a>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <br />
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <strong>Northeastern Electric Racing</strong>, Boston, MA
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <em>
                Software Solutions Developer, Extracurricular Club Involvement
              </em>{" "}
              ??? TypeScript, React
            </p>
          </td>
          <td className="align-right">
            <p>September 2022 - April 2023</p>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>
                Fix various resizing bugs across FinishLine, the project
                management dashboard for 120+ club members and 80+ projects
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <br />
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <strong>Orita</strong>, Remote
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <em>Developer, Contract</em> ??? Python, Django, HTML, CSS, Svelte,
              JavaScript
            </p>
          </td>
          <td className="align-right">
            <p>February 2022 - November 2022</p>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>
                Implemented the frontend in Svelte for a webpage with user
                signup/login flow and options to upload data files or connect
                external e-commerce data sources
              </li>
              <li>
                Created a Python program to generate a PDF business report given
                a JSON file using Django and CSS for page creation and
                weasyprint for PDF conversion
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <br />
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <strong>Baltimore Orioles</strong>, Baltimore, MD
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <em>Developer, Co-op</em> ??? HTML, CSS, JavaScript, React, Django,
              AWS, Python, pandas
            </p>
          </td>
          <td className="align-right">
            <p>January 2022 - September 2022</p>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>
                Developed amateur baseball player dashboard page containing data
                on draft-eligible players, retrieving and aggregating data from
                multiple tables and displayed the data on the internal team
                dashboard with various filtering options
              </li>
              <li>
                Wrote data processes and AWS Lambda functions to aggregate or
                correct data from games and update database tables using Django
              </li>
              <li>
                Added various improvements and features to pre-existing pages on
                the internal team dashboard
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <br />
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <strong>Secret Analytics</strong>, Remote
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <em>Developer, Freelance</em> ??? Python, Plotly Dash
            </p>
          </td>
          <td className="align-right">
            <p>December 2021 - June 2022</p>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>
                Improved the mobile experience of the site using Python and
                Plotly Dash by implementing a responsive layout and building a
                mobile-friendly navigation menu
              </li>
              <li>
                Site:{" "}
                <a
                  href="https://www.secretanalytics.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.secretanalytics.xyz
                </a>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <br />
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <strong>Northeastern University</strong>, Boston, MA
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <em>Object-Oriented Design (CS3500) TA, Part-Time</em> ??? Java,
              Junit, IntelliJ, Teaching
            </p>
          </td>
          <td className="align-right">
            <p>September 2021 - December 2021</p>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>
                Ran lab sections of 16-20 students practicing lecture content
              </li>
              <li>Held office hours for course content and homework help</li>
              <li>Graded labs, homeworks, and exams for 350+ students</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <br />
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <em>
                Information Technology Services Customer Experience Technician,
                Part-Time
              </em>{" "}
              ??? Customer Support, Ticketing
            </p>
          </td>
          <td className="align-right">
            <p>August 2021 - December 2021</p>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>
                Assisted students, professors, alumni, and parents with
                university technology services through phone and chat with a
                4.9/5 rating
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <br />
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <strong>McDonogh School</strong>, Owings Mills, MA
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <em>Technology Department Intern, Part-Time</em> ??? Computer
              Setup/Support, Networking, Technology Hardware and Infrastructure
            </p>
          </td>
          <td className="align-right">
            <p>June - August 2019; June 2020 - May 2021</p>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>
                Installed webcams and wireless projection devices for hybrid
                learning
              </li>
              <li>
                Provided assistance and support for projector and computer
                issues
              </li>
              <li>
                Set up classroom desktops, teacher laptops, and student
                Chromebooks
              </li>
              <li>
                Relocated (uninstalled + installed) technology equipment around
                campus, including projectors, desktop computers, and phones
              </li>
            </ul>
          </td>
        </tr>
      </table>
      <h2>Extracurriculars</h2>
      <table id="ecs">
        <tr>
          <td>
            <p>
              <strong>Northeastern Robotics</strong>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              <em>VexU Software</em>
            </p>
          </td>
          <td className="align-right">
            <p>August 2021 - April 2023</p>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>
                Wrote driving software for the VexU competition robots in C++
                using the PROS and okapi libraries.
              </li>
            </ul>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Resume;
