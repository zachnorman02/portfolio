const Timeline = require("react-timeline-scribble").Timeline;
const Event = require("react-timeline-scribble").Event;

function School() {
  return (
    <div id="school">
      <h2>Education</h2>
      <Timeline>
        <Event
          interval={"Aug 2023 - Dec 2024"}
          title={"Villanova University - College of Liberal Art and Sciences"}
          subtitle={"Master of Science in Applied Statistics and Data Science"}
        >
        </Event>
        <Event
          interval={"Sep 2020 - Apr 2023"}
          title={
            "Northeastern University - Khoury College of Computer Sciences"
          }
          subtitle={"Bachelor of Science in Computer Science and Mathematics"}
        >
          GPA: 3.4/4.0
        </Event>
        <Event
          interval={"Aug 2016 - Jun 2020"}
          title={"McDonogh School"}
          subtitle={"High School Diploma"}
        >
          GPA: 4.3/4.0
        </Event>
      </Timeline>
    </div>
  );
}

export default School;
