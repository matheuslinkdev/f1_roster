import ReactCountryFlag from "react-country-flag";
import { getCountryCode } from "../../Services/CountryFlags";
import moment from "moment";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

const ScheduleList = ({ schedule }) => {
  const monthMap = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  const utcDateToLocalFormat = (date, time) => {
    const localDatetimeMoment = moment.utc(date + " " + time).local();
    const monthAbbr = monthMap[localDatetimeMoment.format("MM")];
    const formattedDate = `${monthAbbr} ${localDatetimeMoment.format(
      "DD"
    )}, ${localDatetimeMoment.format("HH:mm")}`;
    return formattedDate;
  };

  return (
    <Center flexDir="column">
      {schedule.map((round, index) => {
        const countryName = round.Circuit.Location.Country._text;
        const countryCode = getCountryCode(countryName);

        return (
          <Accordion key={index} allowToggle>
            <AccordionItem
              w="95dvw"
              m="5px auto"
              border="1px solid #202020"
              bg="#353535"
              borderRadius={2}
              overflow="hidden"
            >
              <AccordionButton _expanded={{ bg: "#202020", color: "white" }}>
                <Flex className="header-infos">
                  <Box>
                    <Heading className="grand-prix-name"> {round.RaceName._text}</Heading>{" "}
                    {countryCode && (
                      <ReactCountryFlag
                        countryCode={countryCode}
                        className="country-flag-img"
                        svg
                      />
                    )}
                  </Box>
                  <AccordionIcon position="absolute" right="3dvw" />
                  <Box>
                    <Text className="grand-prix-date">
                      {utcDateToLocalFormat(round.Date._text, round.Time._text)}
                    </Text>
                  </Box>
                </Flex>
              </AccordionButton>
              <AccordionPanel
                style={{ display: "flex" }}
                className="race-infos"
              >
                <Box className="circuit-infos">
                  <Text>Round {round._attributes.round}</Text>
                  <Heading>{round.Circuit.CircuitName._text}</Heading>
                  <Text>
                    {round.Circuit.Location.Locality._text}
                    {", "}
                    {round.Circuit.Location.Country._text}
                  </Text>
                </Box>
                <Flex className="race-dates">
                  <Box>
                    <Flex>
                      <Text>First Practice: </Text>
                      <Text>
                        {round.FirstPractice
                          ? utcDateToLocalFormat(
                              round.FirstPractice.Date._text,
                              round.FirstPractice.Time._text
                            )
                          : "TBC"}
                      </Text>
                    </Flex>
                    <Flex>
                      <Text>Second Practice: </Text>
                      <Text>
                        {round.SecondPractice
                          ? utcDateToLocalFormat(
                              round.SecondPractice.Date._text,
                              round.SecondPractice.Time._text
                            )
                          : "TBC"}
                      </Text>
                    </Flex>
                    <Flex>
                      {round.ThirdPractice ? (
                        <>
                          <Text>Third Practice: </Text>
                          <Text>
                            {utcDateToLocalFormat(
                              round.ThirdPractice.Date._text,
                              round.ThirdPractice.Time._text
                            )}
                          </Text>
                        </>
                      ) : round.Sprint ? (
                        <>
                          <Text>Sprint: </Text>
                          <Text>
                            {utcDateToLocalFormat(
                              round.Sprint.Date._text,
                              round.Sprint.Time._text
                            )}
                          </Text>
                        </>
                      ) : null}
                    </Flex>
                  </Box>
                  <Box>
                    <Flex>
                      <Text>Qualifying:</Text>
                      <Text>
                        {round.Qualifying
                          ? utcDateToLocalFormat(
                              round.Qualifying.Date._text,
                              round.Qualifying.Time._text
                            )
                          : "TBC"}
                      </Text>
                    </Flex>
                    <Flex>
                      <Text>Race: </Text>
                      <Text>
                        {utcDateToLocalFormat(
                          round.Date._text,
                          round.Time._text
                        )}
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        );
      })}
    </Center>
  );
};

export default ScheduleList;
