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
                <Flex justifyContent="space-between" w="80%" textAlign="start">
                  <Box display="flex" alignItems="center">
                    <Heading size="md" fontWeight={500}>{round.RaceName._text}</Heading>{" "}
                    <Center display={{base: "none", md: "block"}}>

                    {countryCode && (
                      <ReactCountryFlag countryCode={countryCode} svg style={{fontSize: 28, marginLeft: "10px"}}/>
                    )}
                    </Center>
                  </Box>
                  <AccordionIcon position="absolute" right="3dvw" />
                  <Box display="flex" alignItems="center">
                    <Heading size="sm" fontWeight={500} display={{base: "none", md: "block"}}>{round.Circuit.CircuitName._text}</Heading>
                    <Text ml={2} fontWeight={500} mt="1px">
                      {utcDateToLocalFormat(round.Date._text, round.Time._text)}
                    </Text>
                  </Box>
                </Flex>
              </AccordionButton>
              <AccordionPanel display="flex" flexDir={{base: "column", md: "row"}} justifyContent="space-between">
                <Box>
                  <Text fontWeight={500} my={4}>Round {round._attributes.round}</Text>
                  <Heading size="md" fontWeight={500} my={4}>{round.Circuit.CircuitName._text}</Heading>
                  <Text fontWeight={500} fontSize={20} my={4}>
                    {round.Circuit.Location.Locality._text}
                    {", "}
                    {round.Circuit.Location.Country._text}
                  </Text>
                </Box>
               
                  <Box fontSize={18} fontWeight={500}>
                    <Flex my={4}>
                      <Text>First Practice: </Text>
                      <Text ml={1}>
                        {round.FirstPractice
                          ? utcDateToLocalFormat(
                              round.FirstPractice.Date._text,
                              round.FirstPractice.Time._text
                            )
                          : "TBC"}
                      </Text>
                    </Flex>
                    <Flex my={4}>
                      <Text>Second Practice: </Text>
                      <Text ml={1}>
                        {round.SecondPractice
                          ? utcDateToLocalFormat(
                              round.SecondPractice.Date._text,
                              round.SecondPractice.Time._text
                            )
                          : "TBC"}
                      </Text>
                    </Flex>
                    <Flex my={4}>
                      {round.ThirdPractice ? (
                        <>
                          <Text>Third Practice: </Text>
                          <Text ml={1}>
                            {utcDateToLocalFormat(
                              round.ThirdPractice.Date._text,
                              round.ThirdPractice.Time._text
                            )}
                          </Text>
                        </>
                      ) : round.Sprint ? (
                        <>
                          <Text>Sprint: </Text>
                          <Text ml={1}>
                            {utcDateToLocalFormat(
                              round.Sprint.Date._text,
                              round.Sprint.Time._text
                            )}
                          </Text>
                        </>
                      ) : null}
                    </Flex>
                  </Box>
                  <Box fontSize={18} fontWeight={500}>
                    <Flex my={4}>
                      <Text>Qualifying:</Text>
                      <Text ml={1}>
                        {round.Qualifying
                          ? utcDateToLocalFormat(
                              round.Qualifying.Date._text,
                              round.Qualifying.Time._text
                            )
                          : "TBC"}
                      </Text>
                    </Flex>
                    <Flex my={4}>
                      <Text>Race: </Text>
                      <Text ml={1}>
                        {utcDateToLocalFormat(
                          round.Date._text,
                          round.Time._text
                        )}
                      </Text>
                    </Flex>
                  </Box>
                
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        );
      })}
    </Center>
  );
};

export default ScheduleList;
