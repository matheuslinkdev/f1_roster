import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.module.scss";

import f1_roster_icon from "/public/icons/f1_roster-icon.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <img
          src={f1_roster_icon}
          alt="f1 roster icon"
          style={{
            maxWidth: "5rem",
            maxHeight: "5rem",
          }}
        />
        <Navbar.Brand href="/f1_roster/" className="brand">
          F1 Roster
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links-nav">
            <Nav.Link>
              <Link to="/f1_roster/" className="link">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/f1_roster/standings" className="link">
                Standings
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/f1_roster/results" className="link">
                Results
              </Link>
            </Nav.Link>
            <NavDropdown title="Infos" id="basic-nav-dropdown">
              <NavDropdown.Item className="dropdown-link">
                <Link to="/f1_roster/drivers">Drivers</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdown-link">
                <Link to="/f1_roster/schedule">Schedule</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdown-link">
                <Link to="/f1_roster/constructors">Constructors</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
