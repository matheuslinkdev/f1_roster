"use client"

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

import Link  from 'next/link';
import Image from "next/image";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Image
          src="https://i.postimg.cc/SRNkp0rT/f1-roster-icon.png"
          alt="f1 roster icon"
          width={170}
          height={170}
          layout="responsive"
          className="navbar-icon"
        />
        <Navbar.Brand href="/" className="brand">
          F1 Roster
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links-nav">
            <Nav.Link>
              <Link href="/" className="link">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/standings" className="link">
                Standings
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/results" className="link">
                Results
              </Link>
            </Nav.Link>
            <NavDropdown title="Infos" id="basic-nav-dropdown">
              <NavDropdown.Item className="dropdown-link">
                <Link href="/drivers">Drivers</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdown-link">
                <Link href="/schedule">Schedule</Link>
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdown-link">
                <Link href="/constructors">Constructors</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

