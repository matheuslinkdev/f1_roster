import React from "react";
import { Accordion, ListGroup } from "react-bootstrap";
import ReactCountryFlag from "react-country-flag";
import { countryNameToCodeMapping, getCountryCode } from "../../Services/CountryFlags";
import { getOrdinalSuffix } from "../../Services/Sufix";

const RaceResultsList = ({ raceResults }) => {

 

  return (
    <main>
      {raceResults.map((race, index) => {
        const circuitCountryName = race.RaceTable.Race.Circuit.Location.Country._text;
        const circuitCountryCode = getCountryCode(circuitCountryName);
        return (
          <Accordion key={index}>
            {race.RaceTable.Race ? (
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {race.RaceTable.Race.RaceName._text}
                  <ReactCountryFlag
                    style={{
                      fontSize: "5em",
                      lineHeight: "2em",
                    }}
                    countryCode={circuitCountryCode}
                    svg
                  />
                </Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    {race.RaceTable.Race.ResultsList.Result.map(
                      (result, resultIndex) => {
                        const countryName = result.Driver.Nationality._text;
                        const countryCode = getCountryCode(countryName);

                        return (
                          <ListGroup.Item
                            key={resultIndex}
                            style={{ display: "flex" }}
                          >
                            <h3>
                              {result._attributes.position}
                              {getOrdinalSuffix(
                                result._attributes.position
                              )}{" "}
                            </h3>
                            <span>
                              {result._attributes.points}{" "}
                              {result._attributes.position % 10 === 0
                                ? "Point"
                                : "Points"}
                            </span>
                            <h5>
                              {result.Driver.GivenName._text}{" "}
                              {result.Driver.FamilyName._text}
                            </h5>
                            <ReactCountryFlag
                              style={{ fontSize: "3rem" }}
                              countryCode={countryCode}
                              svg
                            />
                            <p>{result.Constructor.Name._text}</p>
                            <p>
                              {result.Time && result.Time._text
                                ? result.Time._text
                                : result.Status._text}
                            </p>
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
