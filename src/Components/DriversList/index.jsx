import ReactCountryFlag from "react-country-flag";
import { getCountryCode } from "../../Services/CountryFlags";
import Image from "next/image";
import { Flex, Center, List, ListItem, Text } from "@chakra-ui/react";

const DriversList = ({ drivers }) => {
  return (
    <Center flexDir="column">
      <List w="95dvw" m="auto" h={70} maxH={120}>
        {drivers
          .sort((a, b) => a.team_name.localeCompare(b.team_name))
          .map((driver, index) => {
            // One color has a problem in the API, I found this solution
            const colorMapping = {
              "5.2e+253": "52e253",
            };

            const countryName = driver.country_code;
            const countryCode = getCountryCode(countryName);

            const correctedColor =
              colorMapping[driver.team_colour] || driver.team_colour;

            return (
              <ListItem
                key={index}
                borderLeft={`5px solid #${correctedColor}`}
                borderRadius="5px"
                w="95%"
                m="5px auto"
                bgColor="common.900"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Flex
                  alignItems={{ base: "start", md: "center" }}
                  flexDir={{ base: "column", md: "row" }}
                  justify="left"
                  textAlign="left"
                  w={300}
                  maxW="50%"
                >
                  <Image
                    src={driver.headshot_url}
                    alt={`${driver.full_name} photo`}
                    width={75}
                    height={65}
                  />

                  <Text
                    color={`#${correctedColor}`}
                    fontSize={20}
                    fontWeight={500}
                    ml={2}
                  >
                    #{driver.driver_number}
                  </Text>
                  <Text fontSize={18} fontWeight={500} ml={2} mt="2px">
                    {driver.full_name}
                  </Text>
                </Flex>

                <Flex
                  alignItems={{ base: "end", md: "center" }}
                  justifyContent="space-between"
                  flexDir={{ base: "column", md: "row" }}
                >
                  <Text
                    color={`#${correctedColor}`}
                    fontSize={18}
                    fontWeight={500}
                    mr={1}
                  >
                    {driver.team_name}
                  </Text>
                  <Text fontSize={18} fontWeight={500} mr={2} ml={4}>
                    Acronym: {driver.name_acronym}
                  </Text>
                  <Text>
                    {countryCode && (
                      <ReactCountryFlag
                        countryCode={countryCode}
                        alt="Country Icon"
                        svg
                        style={{ fontSize: 26, marginRight: "2px" }}
                      />
                    )}
                  </Text>
                </Flex>
              </ListItem>
            );
          })}
      </List>
    </Center>
  );
};

export default DriversList;
