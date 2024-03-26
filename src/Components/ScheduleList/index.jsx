import { Accordion } from "react-bootstrap";
import ReactCountryFlag from "react-country-flag";
import { getCountryCode } from "../../Services/CountryFlags";
import moment from "moment";

import "./style.module.scss";

const ScheduleList = ({ schedule }) => {
  const utcDateToLocalFormat = (date, time) => {
    const utcDatetimeMoment = moment.utc(
      date + " " + time,
      "YYYY-MM-DD HH:mm:ss"
    );
    const localDatetimeMoment = utcDatetimeMoment.local();
    return localDatetimeMoment.format("YYYY-MM-DD, HH:mm");
  };

  return (
    <main>
      <h1 className="page-name">2024 Formula 1 Schedule: </h1>
      {schedule.map((round, index) => {
        const countryName = round.Circuit.Location.Country._text;
        const countryCode = getCountryCode(countryName);

        return (
          <Accordion key={index}>
            <Accordion.Item
              eventKey="0"
              style={{ backgroundColor: "transparent" }}
            >
              <Accordion.Header>
                <article className="header-infos">
                  <section>
                    <h4 className="grand-prix-name"> {round.RaceName._text}</h4>{" "}
                    {countryCode && (
                      <ReactCountryFlag
                        countryCode={countryCode}
                        className="country-flag-img"
                        svg
                      />
                    )}
                  </section>
                  <section>
                    <span className="grand-prix-date">
                      {utcDateToLocalFormat(round.Date._text, round.Time._text)}
                    </span>
                  </section>
                </article>
              </Accordion.Header>
              <Accordion.Body
                style={{ display: "flex" }}
                className="race-infos"
              >
                <section className="circuit-infos">
                  <span>Round {round._attributes.round}</span>
                  <h5>{round.Circuit.CircuitName._text}</h5>
                  <p>
                    {round.Circuit.Location.Locality._text}
                    {", "}
                    {round.Circuit.Location.Country._text}
                  </p>
                </section>
                <article className="race-dates">
                  <section>
                    <div>
                      <span>First Pratice: </span>
                      <p>
                        {round.FirstPractice
                          ? utcDateToLocalFormat(
                              round.FirstPractice.Date._text,
                              round.FirstPractice.Time._text
                            )
                          : "TBC"}
                      </p>
                    </div>
                    <div>
                      <span>Second Practice: </span>
                      <p>
                        {round.SecondPractice
                          ? utcDateToLocalFormat(
                              round.SecondPractice.Date._text,
                              round.SecondPractice.Time._text
                            )
                          : "TBC"}
                      </p>
                    </div>
                    <div>
                      {round.ThirdPractice ? (
                        <>
                          <span>Third Pratice: </span>
                          <p>
                            {utcDateToLocalFormat(
                              round.ThirdPractice.Date._text,
                              round.ThirdPractice.Time._text
                            )}
                          </p>
                        </>
                      ) : round.Sprint ? (
                        <>
                          <span>Sprint: </span>
                          <p>
                            {utcDateToLocalFormat(
                              round.Sprint.Date._text,
                              round.Sprint.Time._text
                            )}
                          </p>
                        </>
                      ) : null}
                    </div>
                  </section>
                  <section>
                    <div>
                      <span>Qualifying:</span>
                      <p>
                        {round.Qualifying
                          ? utcDateToLocalFormat(
                              round.Qualifying.Date._text,
                              round.Qualifying.Time._text
                            )
                          : "TBC"}
                      </p>
                    </div>
                    <div>
                      <span>Race: </span>
                      <p>
                        {utcDateToLocalFormat(
                          round.Date._text,
                          round.Time._text
                        )}
                      </p>
                    </div>
                  </section>
                </article>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </main>
  );
};

export default ScheduleList;
