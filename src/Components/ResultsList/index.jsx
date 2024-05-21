import ReactCountryFlag from "react-country-flag";
import { getCountryCode } from "../../Services/CountryFlags";
import { getOrdinalSuffix } from "../../Services/Sufix";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  List,
  ListItem,
  Center,
  Box,
  Text,
} from "@chakra-ui/react";

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
    <Center flexDir="column">
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
                w="95dvw"
                m="5px auto"
                border="1px solid #202020"
                
                bg="#353535"
                borderRadius={2}
                overflow="hidden"
              >
                <AccordionButton
                  _expanded={{ bg: "#202020" }}
                  h="80px"
                  color="white"
                  fontWeight={600}
                  fontSize="1.1rem"
                >
                  {RaceName._text}
                  <ReactCountryFlag
                    countryCode={circuitCountryCode}
                    style={{ fontSize: "40px", marginLeft: "10px" }}
                    svg
                  />
                  <AccordionIcon position="absolute" right="3dvw" />
                </AccordionButton>
                <AccordionPanel >
                  <List m="auto" >
                    {results.map((result, resultIndex) => {
                      const { Nationality, GivenName, FamilyName } =
                        result.Driver;
                      const countryCode = getCountryCode(Nationality._text);

                      return (
                        <ListItem
                          key={resultIndex}
                          borderRadius="5px"
                           w="100%" my={1}
                           display="flex"
                           justifyContent="space-between"
                           alignItems="center"
                           p={2}
                           bg="#050505bd"
                           border="1px solid transparent"
                           transition=".2s linear"
                              _hover={{ borderColor: "red.500"}}
                        >
                     
                            <Box display="flex"
              width="250px"
              maxWidth="50%"
              justifyContent="space-between"
              flexDir={{ base: "column", md: "row" }}>
                              <Text fontSize={22} fontWeight={500}>
                                {result._attributes.position}
                                {getOrdinalSuffix(result._attributes.position)}
                              </Text>
                              <Text fontSize={20}>
                                {GivenName._text} {FamilyName._text}
                              </Text>
                              <ReactCountryFlag countryCode={countryCode} svg   style={{ fontSize: "26px" }} />
                            </Box>
                            <Box textAlign="end" maxW="50%">
                              <Text fontSize={18}>
                                {result._attributes.points}{" "}
                                {result._attributes.position % 10 === 0
                                  ? "Point"
                                  : "Points"}
                              </Text>
                              <Text fontSize={18}>{result.Constructor.Name._text}</Text>
                              <Text fontSize={18} fontWeight={500}>{formatFinishingStatus(result)}</Text>
                            </Box>
                         
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
    </Center>
  );
};

export default RaceResultsList;
