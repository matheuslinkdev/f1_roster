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

        const utcDateToLocalFormat = (date, time) => {
          const utcDatetimeMoment = moment.utc(
            date + " " + time,
            "YYYY-MM-DD HH:mm:ss"
          );
          const localDatetimeMoment = utcDatetimeMoment.local();
          return localDatetimeMoment.format("YYYY-MM-DD, HH:mm:ss");
        };

        return (
          <Accordion key={index}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h4> {round.RaceName._text}</h4>{" "}
                <section>
                  <span>
                    {utcDateToLocalFormat(round.Date._text, round.Time._text)}
                  </span>
                </section>
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
                      ? utcDateToLocalFormat(
                          round.FirstPractice.Date._text,
                          round.FirstPractice.Time._text
                        )
                      : "TBC"}
                  </p>
                  <p>
                    Second Practice:{" "}
                    {round.SecondPractice
                      ? utcDateToLocalFormat(
                          round.SecondPractice.Date._text,
                          round.SecondPractice.Time._text
                        )
                      : "TBC"}
                  </p>
                  {round.ThirdPractice ? (
                    <p>
                      Third Pratice:{" "}
                      {utcDateToLocalFormat(
                        round.ThirdPractice.Date._text,
                        round.ThirdPractice.Time._text
                      )}
                    </p>
                  ) : round.Sprint ? (
                    <p>
                      Sprint:{" "}
                      {utcDateToLocalFormat(
                        round.Sprint.Date._text,
                        round.Sprint.Time._text
                      )}
                    </p>
                  ) : null}
                </section>
                <section>
                  <p>
                    Qualifying:
                    {round.Qualifying
                      ? utcDateToLocalFormat(
                          round.Qualifying.Date._text,
                          round.Qualifying.Time._text
                        )
                      : "TBC"}
                  </p>
                  <p>
                    Race:{" "}
                    {utcDateToLocalFormat(round.Date._text, round.Time._text)}
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
