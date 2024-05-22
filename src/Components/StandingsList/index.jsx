import { getCountryCode } from "../../Services/CountryFlags";
import ReactCountryFlag from "react-country-flag";
import { getOrdinalSuffix } from "../../Services/Sufix";
import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

const DriverStandingsList = ({ driverStandings }) => {
  return (
    <Center w="95dvw" flexDir="column" m="auto" mt={10} >

      {driverStandings.map((standing, index) => {
        const countryName = standing.Driver.Nationality._text;
        const countryCode = getCountryCode(countryName);
        return (
          <Flex
            alignItems="center"
            justifyContent="space-between"
            key={index}
            w="100%"
            h="100%"
            bgColor="common.800"
            border="1px solid transparent"
            borderRadius="5px"
            color="#fff"
            p={1}
            my={1}
            transition=".2s linear"
            _hover={{ borderColor: "red.500", transform: "scale(1.01)"}}
          >
            <Box
              display="flex"
              width="250px"
              maxWidth="50%"
              justifyContent="space-between"
              flexDir={{ base: "column", md: "row" }}
            >
              <Text fontSize={22} fontWeight={500} color="red.500">
                {standing._attributes.position}
                {getOrdinalSuffix(standing._attributes.position)}
              </Text>
              <Text fontSize={20}>
                {standing.Driver.GivenName._text}{" "}
                {standing.Driver.FamilyName._text}
              </Text>
              <ReactCountryFlag
                countryCode={countryCode}
                svg
                style={{ fontSize: "30px" }}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              textAlign="end"
              width="250px"
              maxWidth="50%"
              flexDir={{ base: "column", md: "row" }}
              mr={1}
            >
              <Text fontSize={18}>{standing.Constructor.Name._text}</Text>
              <Text fontSize={18}>Points: {standing._attributes.points}</Text>
              <Text fontSize={18}>Wins: {standing._attributes.wins}</Text>
            </Box>
          </Flex>
        );
      })}
    </Center>
  );
};

export default DriverStandingsList;
