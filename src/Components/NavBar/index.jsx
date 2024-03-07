import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

import f1_roster_icon from "/public/icons/f1_roster-icon.png";

function NavBar() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#e11001" }}>
      <Container>
        <img
          src={f1_roster_icon}
          alt="f1 roster icon"
          style={{
            maxWidth: "5rem",
            maxHeight: "5rem",
          }}
        />
        <Navbar.Brand href="/">F1 Roster</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/standings">Standings</Nav.Link>
            <Nav.Link href="/results">Results</Nav.Link>
            <NavDropdown title="Infos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/drivers">Drivers</NavDropdown.Item>
              <NavDropdown.Item href="/schedule">Schedule</NavDropdown.Item>
              <NavDropdown.Item href="/constructors">
                Constructors
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
