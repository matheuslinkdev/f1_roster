import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.scss'

import f1_roster_icon from "/public/icons/f1_roster-icon.png";

function NavBar() {
  return (
    <Navbar expand="lg"className="navbar">
      <Container>
        <img
          src={f1_roster_icon}
          alt="f1 roster icon"
          style={{
            maxWidth: "5rem",
            maxHeight: "5rem",
          }}
        />
        <Navbar.Brand href="/" className="brand">
          F1 Roster
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links-nav">
            <Nav.Link className="link" href="/">Home</Nav.Link>
            <Nav.Link className="link" href="/standings">Standings</Nav.Link>
            <Nav.Link className="link" href="/results">Results</Nav.Link>
            <NavDropdown title="Infos" id="basic-nav-dropdown">
              <NavDropdown.Item className="dropdown-link" href="/drivers">Drivers</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-link" href="/schedule">Schedule</NavDropdown.Item>
              <NavDropdown.Item className="dropdown-link" href="/constructors">
                Constructors
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
