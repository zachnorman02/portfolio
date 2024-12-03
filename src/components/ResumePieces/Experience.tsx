const Timeline = require("react-timeline-scribble").Timeline;
const Event = require("react-timeline-scribble").Event;

function Experience() {
    return (
      <div>
        <h2>Work Experience</h2>
        <Timeline>
          <Event
            interval={"Nov 2024 - Present"}
            title={"Vanguard  - Malvern, PA"}
            subtitle={"Application Engineer II (Full-Time)"}
          ></Event>
          <Event
            interval={"May 2023 - Nov 2023"}
            title={"Vanguard  - Malvern, PA"}
            subtitle={"Application Engineer I (Full-Time)"}
          >
            <ul>
              <li>
                Build out AWS Lambda functions to extract data on 50,000+ funds,
                benchmarks, and portfolios from internal data lakes, APIs, and
                third-party platforms, transform, and load data into internal
                and external platforms.
              </li>
              <li>
                Communicate with business clients on building and enhancing data
                pipelines by gathering requirements, translating them into
                technical specifications, and creating detailed documentation
                for future reference.
              </li>
              <li>
                Design data visualizations using Plotly to monitor and track the
                success rates of 20+ daily business-critical reports to provide
                insights into common failures and areas for improvement and
                future development roadmap.
              </li>
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
                Developed a Python program using Django to automate the
                generation of business analytics reports from JSON data,
                leveraging CSS and templates for cohesive and professional
                report design.
              </li>
              <li>
                Implemented a front-end interface using Svelte allowing
                companies to upload their data and connect with third-party
                e-commerce platforms.
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
                Created data retrieval, aggregation, and the user interface for
                an amateur baseball player dashboard page using Django and React
                that allowed for viewing and filtering data on 32,000+
                draft-eligible players, improving scouting efficiency and
                decision-making for drafts.
              </li>
              <li>
                Introduced advanced editing features for pitch-by-pitch game
                audit pages, enabling coaches and analysts to add, delete,
                reorder, and mass-update pitch data, resulting in improved data
                accuracy and usability.
              </li>
              <li>
                Updated multiple AWS Lambda functions responsible for data
                retrieval, calculation, and population to ensure storage of
                accurate game and player data.
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
              {/* <li>
                Site:{" "}
                <a
                  href="https://www.secretanalytics.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.secretanalytics.xyz
                </a>
              </li> */}
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
            subtitle={
              "Technology Department Intern (Part-Time) • Computer Setup/Support, Networking, Technology Hardware and Infrastructure"
            }
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