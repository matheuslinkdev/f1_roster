import ReactCountryFlag from "react-country-flag";
import { getCountryCode } from "../../Services/CountryFlags";
import { getOrdinalSuffix } from "../../Services/Sufix";
import "./style.scss";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionHeader, AccordionPanel, Flex, List, ListItem } from "@chakra-ui/react";

const RaceResultsList = ({ raceResults }) => {
  const formatFinishingStatus = (result) => {
    const statusId = parseInt(result.Status._attributes.statusId);
    if (
      statusId === 1 ||
      [11, 12, 13, 14, 15, 16, 17, 18, 19].includes(statusId)
    ) {
      return result.Time && result.Time._text
        ? `Time: ${result.Time._text}`
        : result.Status._text;
    } else {
      return result.Status._text === 2 ? "DSQ" : "DNF";
    }
  };

  return (
    <main>
      {raceResults.map((race, index) => {
        const { Circuit, RaceName, ResultsList } = race.RaceTable.Race || {};
        const circuitCountryName = Circuit
          ? Circuit.Location.Country._text
          : "";
        const circuitCountryCode = getCountryCode(circuitCountryName);
        const results = ResultsList ? ResultsList.Result : [];

        return (
          <Accordion key={index} allowToggle>
            {RaceName && (
              <AccordionItem
                className="accordion-item"
                w="95dvw"
                m="5px auto"
                border="1px solid #202020"
                borderRadius={2}
                overflow="hidden"
              >
                <AccordionButton _expanded={{ bg: "#202020" }} h="80px" color="white" fontWeight={600} fontSize="1.1rem">
                  {RaceName._text}
                  <ReactCountryFlag
                    countryCode={circuitCountryCode}
                    style={{fontSize: "40px", marginLeft: "10px"}}
                    svg
                  />
                  <AccordionIcon position="absolute" right="3dvw" />
                </AccordionButton>
                <AccordionPanel bg="#050505bd">
                  <List m="auto">
                    {results.map((result, resultIndex) => {
                      const { Nationality, GivenName, FamilyName } =
                        result.Driver;
                      const countryCode = getCountryCode(Nationality._text);

                      return (
                        <ListItem
                          key={resultIndex}
                          style={{ display: "flex", margin: "auto" }}
                          className="driver-finishing-card"
                        >
                          <article>
                            <section className="driver-finishing-info">
                              <p className="driver-finishing-position">
                                {result._attributes.position}
                                {getOrdinalSuffix(result._attributes.position)}
                              </p>
                              <p className="driver-finishing-name">
                                {GivenName._text} {FamilyName._text}
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
                                {formatFinishingStatus(result)}
                              </p>
                            </section>
                          </article>
                        </ListItem>
                      );
                    })}
                  </List>
                </AccordionPanel>
              </AccordionItem>
            )}
          </Accordion>
        );
      })}
    </main>
  );
};

export default RaceResultsList;
