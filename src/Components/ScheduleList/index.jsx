import { Accordion } from "react-bootstrap";

const ScheduleList = ({ schedule }) => {
  return (
    <main>
      {schedule.map((round, index) => {
        return (
          <Accordion key={index}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h4> {round.RaceName._text}</h4> <span>{round.Date._text}</span>
              </Accordion.Header>
              <Accordion.Body style={{ display: "flex" }}>
                <section>
                  <span>Round {round._attributes.round}</span>
                  <h5>{round.Circuit.CircuitName._text}</h5>
                  <p>
                    {round.Circuit.Location.Locality._text}
                    {", "}
                    {round.Circuit.Location.Country._text}
                  </p>
                </section>
                <section>
                  <p>
                    Qualifying:{" "}
                    {round.Qualifying ? round.Qualifying.Date._text : "TBC"}
                  </p>
                  <p>
                    {round.Qualifying ? round.Qualifying.Time._text : "TBC"}
                  </p>
                </section>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </main>
  );
};

export default ScheduleList;
