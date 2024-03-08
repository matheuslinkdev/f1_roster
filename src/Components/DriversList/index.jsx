import { Card, ListGroup } from "react-bootstrap";
import ReactCountryFlag from "react-country-flag";
import { getCountryCode } from "../../Services/CountryFlags";

import "./style.scss";

const DriversList = ({ drivers }) => {
  return (
    <main>
      <ListGroup className="drivers-list">
        {drivers
          .sort((a, b) => a.team_name.localeCompare(b.team_name))
          .map((driver, index) => {
            //One color have a problem in the API, i found this solution
            const colorMapping = {
              "5.2e+253": "52e253",
            };

            const countryName = driver.country_code;
            const countryCode = getCountryCode(countryName);

            const correctedColor =
              colorMapping[driver.team_colour] || driver.team_colour;

            return (
              <ListGroup.Item
                key={index}
                style={{
                  borderColor: `#${correctedColor}`,
                  borderWidth: "0px 0px 0px 2px",
                }}
                className="driver-card"
              >
                <img src={driver.headshot_url} className="driver-img" />
                <section className="driver-info">
                  <span style={{ color: `#${correctedColor}` }}>
                    #{driver.driver_number}
                  </span>
                  <p>{driver.full_name}</p>
                </section>

                <section className="other-infos">
                  <p>Team: {driver.team_name}</p>
                  <p>Acronym: {driver.name_acronym}</p>
                  <p>
                    {countryCode && (
                      <ReactCountryFlag className="country-flag" countryCode={countryCode} svg />
                    )}
                  </p>
                </section>
              </ListGroup.Item>
            );
          })}
      </ListGroup>
    </main>
  );
};

export default DriversList;
