import { Accordion, ListGroup } from "react-bootstrap";
import ReactCountryFlag from "react-country-flag";
import { getCountryCode } from "../../Services/CountryFlags";
import { getOrdinalSuffix } from "../../Services/Sufix";
import "./style.scss";

const RaceResultsList = ({ raceResults }) => {
  return (
    <main>
      {raceResults.map((race, index) => {
        const circuitCountryName =
          race.RaceTable.Race.Circuit.Location.Country._text;
        const circuitCountryCode = getCountryCode(circuitCountryName);
        return (
          <Accordion key={index}>
            {race.RaceTable.Race ? (
              <Accordion.Item eventKey="0" >
                <Accordion.Header>
                  {race.RaceTable.Race.RaceName._text}
                  <ReactCountryFlag
                    className="country-flag"
                    countryCode={circuitCountryCode}
                    svg
                  />
                </Accordion.Header>
                <Accordion.Body className="finishing-list">
                  <ListGroup>
                    {race.RaceTable.Race.ResultsList.Result.map(
                      (result, resultIndex) => {
                        const countryName = result.Driver.Nationality._text;
                        const countryCode = getCountryCode(countryName);

                        return (
                          <ListGroup.Item
                            key={resultIndex}
                            style={{ display: "flex" }}
                            className="driver-finishing-card"
                          >
                            <article>
                              <section className="driver-finishing-info">
                                <p className="driver-finishing-position">
                                  {result._attributes.position}
                                  {getOrdinalSuffix(
                                    result._attributes.position
                                  )}{" "}
                                </p>
                                <p className="driver-finishing-name">
                                  {result.Driver.GivenName._text}{" "}
                                  {result.Driver.FamilyName._text}
                                </p>
                                <ReactCountryFlag
                                  className="driver-finishing-country"
                                  countryCode={countryCode}
                                  svg
                                />
                              </section>
                              <section className="other-finishing-infos">
                                <span className="driver-finishing-points">
                                  {result._attributes.points}{" "}
                                  {result._attributes.position % 10 === 0
                                    ? "Point"
                                    : "Points"}
                                </span>
                                <p className="finishing-constructor-name">
                                  {result.Constructor.Name._text}
                                </p>
                                <p className="driver-finishing-status">
                                  Time:{" "}
                                  {result.Time && result.Time._text
                                    ? result.Time._text
                                    : result.Status._text}
                                </p>
                              </section>
                            </article>
                          </ListGroup.Item>
                        );
                      }
                    )}
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
            ) : (
              ""
            )}
          </Accordion>
        );
      })}
    </main>
  );
};

export default RaceResultsList;
