import React from "react";
import { Accordion, ListGroup } from "react-bootstrap";
import ReactCountryFlag from "react-country-flag";
import { countryNameToCodeMapping } from "../../Services/CountryFlags";

const RaceResultsList = ({ raceResults }) => {

  function getOrdinalSuffix(position) {
    const lastTwoDigits = position % 100;

    if (lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13) {
      return "th";
    }

    const lastDigit = position % 10;

    if (lastDigit === 1) {
      return "st";
    } else if (lastDigit === 2) {
      return "nd";
    } else if (lastDigit === 3) {
      return "rd";
    } else {
      return "th";
    }
  }

  const getCountryCode = (countryName) => {
    for (const country in countryNameToCodeMapping) {
      if (country === countryName) {
        return countryNameToCodeMapping[country];
      }
    }
    return null;
  };

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
