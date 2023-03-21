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
          subtitle={"Website Developer (Extracurricular) • JavaScript, React"}
        >
          <ul>
            <li>
              Implemented mobile-supported pages for the club website, seen by
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
        </Event>
        <Event
          interval={"Sep 2022 - Apr 2023"}
          title={"Northeastern Electric Racing - Boston, MA"}
          subtitle={
            "Software Solutions Developer (Extracurricular) • TypeScript, React"
          }
        >
          <ul>
            <li>
              Fixed various resizing bugs across FinishLine, the project
              management dashboard for 200+ club members and 80+ projects
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
              Github Repo:{" "}
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
