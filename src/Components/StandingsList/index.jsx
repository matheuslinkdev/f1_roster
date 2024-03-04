import { Accordion, Card, ListGroup } from "react-bootstrap";

const DriverStandingsList = ({ driverStandings }) => {
  return (
    <main>
      <h1>Driver Standings</h1>

      {driverStandings.map((standing, index) => (
        <Card body key={index}>
          <section style={{display: "flex"}}>
            <h2>{standing._attributes.position}</h2>
            <p>
              {standing.Driver.GivenName._text}{" "}
              {standing.Driver.FamilyName._text}
            </p>
            <p>{standing.Constructor.Name._text}</p>
            <p>Points: {standing._attributes.points}</p>
            <p>Wins: {standing._attributes.wins}</p>
          </section>
        </Card>
      ))}
    </main>
  );
};

export default DriverStandingsList;
