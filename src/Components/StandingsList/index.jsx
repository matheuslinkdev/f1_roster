import { Accordion, Card, ListGroup } from "react-bootstrap";
import { getCountryCode } from "../../Services/CountryFlags";
import ReactCountryFlag from "react-country-flag";
import { getOrdinalSuffix } from "../../Services/Sufix";

const DriverStandingsList = ({ driverStandings }) => {
  return (
    <main>
      <h1>Driver Standings</h1>

      {driverStandings.map((standing, index) => {
        const countryName = standing.Driver.Nationality._text;
        const countryCode = getCountryCode(countryName);
        return (
          <Card body key={index}>
            <section style={{ display: "flex" }}>
              <h2>{standing._attributes.position}{getOrdinalSuffix(standing._attributes.position)}</h2>
              <ReactCountryFlag
                style={{ fontSize: "3rem" }}
                countryCode={countryCode}
                svg
              />
              <p>
                {standing.Driver.GivenName._text}{" "}
                {standing.Driver.FamilyName._text}
              </p>
              <p>{standing.Constructor.Name._text}</p>
              <p>Points: {standing._attributes.points}</p>
              <p>Wins: {standing._attributes.wins}</p>
            </section>
          </Card>
        );
      })}
    </main>
  );
};

export default DriverStandingsList;
