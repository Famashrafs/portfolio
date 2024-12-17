import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link className="nav-link" href="#action1">Home</Nav.Link>
            <Nav.Link className="nav-link" href="#about">About</Nav.Link>
            <Nav.Link className="nav-link" href="#skills">Skills</Nav.Link>
            <Nav.Link className="nav-link" href="#certificates">Certificates</Nav.Link>
            <Nav.Link className="nav-link" href="#projects">Projects</Nav.Link>
            <Nav.Link className="nav-link" href="#testimonials">testimonial</Nav.Link>
            <Nav.Link className="nav-link" href="#contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  );
}

export default Header;
