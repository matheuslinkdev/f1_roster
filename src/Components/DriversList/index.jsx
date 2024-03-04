import { Card, ListGroup } from "react-bootstrap";
const DriversList = ({ drivers }) => {
  return (
    <main>
      {drivers
        .sort((a, b) => a.team_name.localeCompare(b.team_name))
        .map((driver, index) => {
          //One color have a problem in the API, i found this solution
          const colorMapping = {
            "5.2e+253": "52e253",
          };

          const correctedColor =
            colorMapping[driver.team_colour] || driver.team_colour;

          return (
            <Card
              style={{
                width: "15rem",
                backgroundColor: `#${correctedColor}`,
              }}
              key={index}
            >
              <Card.Img
                variant="top"
                style={{ width: "5rem" }}
                src={driver.headshot_url}
              />
              <Card.Body>
                <Card.Title style={{color: "#fff"}}>{driver.full_name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Team: {driver.team_name}</ListGroup.Item>
                <ListGroup.Item>Acronym: {driver.name_acronym}</ListGroup.Item>
              </ListGroup>
            </Card>
          );
        })}
    </main>
  );
};

export default DriversList;
