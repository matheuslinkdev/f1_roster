import ReactCountryFlag from "react-country-flag";
import { getCountryCode } from "../../Services/CountryFlags";
import Image from "next/image";
import { Box, Center, List, ListItem, Text } from "@chakra-ui/react";

const DriversList = ({ drivers }) => {
  return (
    <Center>
      <List>
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
                style={{
                  borderColor: `#${correctedColor}`,
                  borderWidth: "0px 0px 0px 2px",
                }}
              >
                <Image
                  src={driver.headshot_url}
                  alt={`${driver.full_name} photo`}
                  width={93}
                  height={93}
                />
                <Box>
                  <span style={{ color: `#${correctedColor}` }}>
                    #{driver.driver_number}
                  </span>
                  <Text>{driver.full_name}</Text>
                </Box>

                <Box>
                  <Text>Team: {driver.team_name}</Text>
                  <Text>Acronym: {driver.name_acronym}</Text>
                  <Text>
                    {countryCode && (
                      <ReactCountryFlag
                        countryCode={countryCode}
                        alt="Country Icon"
                        svg
                      />
                    )}
                  </Text>
                </Box>
              </ListItem>
            );
          })}
      </List>
    </Center>
  );
};

export default DriversList;
