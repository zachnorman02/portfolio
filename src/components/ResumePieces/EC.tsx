const Timeline = require("react-timeline-scribble").Timeline;
const Event = require("react-timeline-scribble").Event;

function EC() {
  return (
    <div id="ecs">
      <h2>Extracurriculars</h2>
      <Timeline>
        <Event
          interval={"Jan - Apr 2023"}
          title={"Generate Product Development - Boston, MA"}
          subtitle={"Website Developer • JavaScript, React"}
        >
          <ul>
            <li>
              Implemented mobile-supported pages for the club website, seen by
              100+ club members and the Northeastern community
            </li>
            <li>Fixed resizing and linking bugs across the website</li>
            <li>Created new projects page to show off past club projects</li>
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
            <li>
              GitHub Repo:{" "}
              <a
                href="https://github.com/GenerateNU/website"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/GenerateNU/website
              </a>
            </li>
          </ul>
        </Event>
        <Event
          interval={"Sep 2022 - Apr 2023"}
          title={"Northeastern Electric Racing - Boston, MA"}
          subtitle={"Software Solutions Developer • TypeScript, React"}
        >
          <ul>
            <li>
              Fixed various resizing bugs across FinishLine, the project
              management dashboard for 200+ club members and 80+ projects
            </li>
            <li>
              GitHub Repo:{" "}
              <a
                href="https://github.com/Northeastern-Electric-Racing/FinishLine"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/Northeastern-Electric-Racing/FinishLine
              </a>
            </li>
          </ul>
        </Event>
        <Event
          interval={"Aug 2021 - Apr 2023"}
          title={"Northeastern Robotics  - Boston, MA"}
          subtitle={"VexU Software • C++, PROS, okapi"}
        >
          <ul>
            <li>
              Wrote driving software for the VexU competition robots in C++
              using the PROS and okapi libraries.
            </li>
            <li>
              GitHub Repo:{" "}
              <a
                href="https://github.com/zachnorman02/HSKY"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/zachnorman02/HSKY
              </a>
            </li>
          </ul>
        </Event>
      </Timeline>
    </div>
  );
}

export default EC;
