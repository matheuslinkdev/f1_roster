import { getCountryCode } from "../../Services/CountryFlags";
import ReactCountryFlag from "react-country-flag";
import { getOrdinalSuffix } from "../../Services/Sufix";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

const DriverStandingsList = ({ driverStandings }) => {
  return (
    <Center w="95dvw" flexDir="column" m="auto">

      {driverStandings.map((standing, index) => {
        const countryName = standing.Driver.Nationality._text;
        const countryCode = getCountryCode(countryName);
        return (
            <Flex key={index} w="100%" bgColor="#050505bd" color="#fff" my={1} justifyContent="space-between" mx={4}>
              <Box display="flex">
                <Text>
                  {standing._attributes.position}
                  {getOrdinalSuffix(standing._attributes.position)}
                </Text>
                <Text>
                  {standing.Driver.GivenName._text}{" "}
                  {standing.Driver.FamilyName._text}
                </Text>
                <ReactCountryFlag
                  countryCode={countryCode}
                  svg
                />
              </Box>
              <Box>
                <Text>
                  {standing.Constructor.Name._text}
                </Text>
                <Text>
                  Points: {standing._attributes.points}
                </Text>
                <Text>
                  Wins: {standing._attributes.wins}
                </Text>
              </Box>
            </Flex>
          
        );
      })}
    </Center>
  );
};

export default DriverStandingsList;
