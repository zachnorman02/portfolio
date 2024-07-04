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
              Worked on Website team, developing the website that gives
              information about Generate Product Development with 140+ members,
              and its projects, teams, and engagements, for use by clients and
              the Northeastern community
            </li>
            <li>
              Contributed to development on mobile versions of Landing and
              Culture pages
            </li>
            <li>Fixed page resizing issues on Culture page and Footer</li>
            <li>
              Collaborated on the creation of the new Projects page to show past
              Generate projects, including a mobile-supported version
            </li>
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
              Contributed to FinishLine, the project management dashboard for
              Northeastern Electric Racing, which has 200+ club members and 80+
              projects across the club
            </li>
            <li>
              Fixed bug with tooltips cutting off when overflowing off screen,
              adding functionality for dynamic tooltip positioning based on
              screen size
            </li>
            <li>
              Contributed to the switch from FontAwesome to MaterialUI for
              dashboard UI
            </li>
            <li>Added public attribution of dashboard contributors</li>
            <li>
              Wrote tests, table text wrapping, and various other
              quality-of-life improvements to the dashboard
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
        <Event
          interval={"June 2016 - Apr 2022"}
          title={"McDonogh Robotics  - Owings Mills, MD"}
          subtitle={
            "FRC Hardware Member, Scouting Lead, Captain • Construction • Java"
          }
        >
          <ul>
            <li>
              As a student (2016-2020):
              <ul className="sublist">
                <li>
                  Helped with mechanical planning and building of FRC
                  competition robots
                </li>
                <li>
                  Led team efforts for scouting robots at competitions during
                  junior and senior years of high school
                </li>
                <li>
                  Planned team meetings and organized robot build and
                  competition plans during senior year of high school
                </li>
              </ul>
            </li>
            <li>
              After graduation (2020-2022), assisted high school students
              throughout the robotics season with building a competition-ready
              robot, using what I had learned from my time on the team
            </li>
          </ul>
        </Event>
        <Event
          interval={"Sep 2016 - May 2020"}
          title={"Technology Consultant - Owings Mills, MD"}
          subtitle={"Member, Leader"}
        >
          <ul>
            <li>
              Student club for assisting other students and faculty with various
              technology issues. Involved troubleshooting common issues and
              creating educational resources for the school community. I was the
              leader of the club my senior year.
            </li>
          </ul>
        </Event>
        <Event
          interval={"Aug 2019 - May 2020"}
          title={"Peer Education - Owings Mills, MD"}
        >
          <ul>
            <li>
              Worked with 7th and 8th grade students on various social-emotional
              learning topics such as mental health, peer pressure, and other
              issues commonly affecting middle school students. Also assisted
              8th graders in feeling prepared for the transition to high school.
            </li>
          </ul>
        </Event>
      </Timeline>
    </div>
  );
}

export default EC;
