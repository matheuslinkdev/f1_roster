import { Accordion, Card, ListGroup } from "react-bootstrap";
import { getCountryCode } from "../../Services/CountryFlags";
import ReactCountryFlag from "react-country-flag";
import { getOrdinalSuffix } from "../../Services/Sufix";
import "./style.scss";

const DriverStandingsList = ({ driverStandings }) => {
  return (
    <main className="container">
      <h1 className="page-name">Driver Standings</h1>

      {driverStandings.map((standing, index) => {
        const countryName = standing.Driver.Nationality._text;
        const countryCode = getCountryCode(countryName);
        return (
          <Card body key={index} className="driver-standing-card">
            <section className="standing-card-content">
              <section className="driver-info">
                <p className="driver-standing-position">
                  {standing._attributes.position}
                  {getOrdinalSuffix(standing._attributes.position)}
                </p>
                <p className="driver-name">
                  {standing.Driver.GivenName._text}{" "}
                  {standing.Driver.FamilyName._text}
                </p>
                <ReactCountryFlag
                className="driver-country"
                  countryCode={countryCode}
                  svg
                />
              </section>
              <section className="other-infos">
              <p className="driver-constructor">{standing.Constructor.Name._text}</p>
              <p className="driver-points">Points: {standing._attributes.points}</p>
              <p className="driver-wins">Wins: {standing._attributes.wins}</p>
              </section>
            </section>
          </Card>
        );
      })}
    </main>
  );
};

export default DriverStandingsList;
