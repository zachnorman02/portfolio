const Timeline = require("react-timeline-scribble").Timeline;
const Event = require("react-timeline-scribble").Event;

function Experience() {
    return (
      <div>
        <h2>Work Experience</h2>
        <Timeline>
          <Event
            interval={"May 2023 - Present"}
            title={"Vanguard  - Malvern, PA"}
            subtitle={"Application Engineer (Full-Time)"}
          >
            <ul>
              <li>TBD, I just started</li>
            </ul>
          </Event>
          <Event
            interval={"Feb 2022 - Nov 2022"}
            title={"Orita - Remote"}
            subtitle={
              "Developer (Contract) • Python, Django, HTML, CSS, Svelte, JavaScript"
            }
          >
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
          </Event>
          <Event
            interval={"Jan 2022 - Sep 2022"}
            title={"Baltimore Orioles - Baltimore, MD"}
            subtitle={
              "Developer (Co-op) • HTML, CSS, JavaScript, React, Django, AWS, Python, pandas"
            }
          >
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
          </Event>
          <Event
            interval={"Dec 2021 - Jun 2022"}
            title={"Secret Analytics - Remote"}
            subtitle={"Mobile Developer (Freelance) • Python, Plotly Dash"}
          >
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
          </Event>
          <Event
            interval={"Sep 2021 - Dec 2021"}
            title={"Northeastern University - Boston, MA"}
            subtitle={
              "Object-Oriented Design (CS3500) TA (Part-Time) • Java, Junit, IntelliJ, Teaching"
            }
          >
            <ul>
              <li>
                Ran lab sections of 16-20 students practicing lecture content
              </li>
              <li>Held office hours for course content and homework help</li>
              <li>Graded labs, homeworks, and exams for 350+ students</li>
            </ul>
          </Event>
          <Event
            interval={"Aug 2021 - Dec 2021"}
            title={"Northeastern University - Boston, MA"}
            subtitle={
              "Information Technology Services Customer Experience Technician (Part-Time) • Customer Support, Ticketing"
            }
          >
            <ul>
              <li>
                Assisted students, professors, alumni, and parents with
                university technology services through phone and chat with a
                4.9/5 rating
              </li>
            </ul>
          </Event>
          <Event
            interval={"May - Aug 2019; June 2020 - May 2021"}
            title={"McDonogh School - Owings Mills, MD"}
            subtitle={"Technology Department Intern (Part-Time) • Computer Setup/Support, Networking, Technology Hardware and Infrastructure"}
          >
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
          </Event>
        </Timeline>
      </div>
    );
}

export default Experience;