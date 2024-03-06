import { Accordion } from "react-bootstrap";

import ReactCountryFlag from "react-country-flag";
import { getCountryCode } from "../../Services/CountryFlags";
import moment from "moment";

const ScheduleList = ({ schedule }) => {
  return (
    <main>
      {schedule.map((round, index) => {
        const countryName = round.Circuit.Location.Country._text;
        const countryCode = getCountryCode(countryName);

        // let raceTime = "TBC"
        // let qualifyingTime = "TBC";

        // if (round.Qualifying && round.Qualifying.Time._text) {
        //   const utcQualifyingMoment = moment.utc(
        //     round.Qualifying.Time._text,
        //     "HH:mm:ss"
        //   );
        //   const localQualifyingMoment = utcQualifyingMoment.local(); // Converter para a hora local do usuário
        //   qualifyingTime = localQualifyingMoment.format("MM-DD-YYYY HH:mm:ss");
        // }

        return (
          <Accordion key={index}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h4> {round.RaceName._text}</h4>{" "}
                <span>
                  {round.FirstPractice.Date._text} - {round.Date._text}{" "}
                </span>
                {countryCode && (
                  <ReactCountryFlag
                    style={{
                      fontSize: "5em",
                      lineHeight: "2em",
                    }}
                    countryCode={countryCode}
                    svg
                  />
                )}
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
                    First Pratice:{" "}
                    {round.FirstPractice
                      ? round.FirstPractice.Date._text
                      : "TBC"}
                  </p>
                  <p>
                    Second Practice:{" "}
                    {round.SecondPractice
                      ? round.SecondPractice.Date._text
                      : "TBC"}
                  </p>
                  {round.ThirdPractice ? (
                    <p>Third Pratice: {round.ThirdPractice.Date._text}</p>
                  ) : round.Sprint ? (
                    <p>Sprint: {round.Sprint.Date._text}</p>
                  ) : null}
                  <section>
                    <p>Qualifying: </p>
                    <p>
                      {round.Qualifying ? round.Qualifying.Date._text : "TBC"}
                    </p>
                    <p>
                      {round.Qualifying ? round.Qualifying.Time._text : "TBC"}
                    </p>
                  </section>
                </section>
                <section>
                  <p>Race: </p>
                  <span>{round.Date._text}</span>
                  <span>{round.Time._text}</span>
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
