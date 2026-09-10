import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    // <header>
    //     <nav>
    //         <ul>
    //             <li><a href="#Home">Home</a></li>
    //             <li><a href="#About">About</a></li>
    //             <li><a href="#Cover">Cover Letter</a></li>
    //             <li><a href="#Resume">Resume</a></li>
    //             <li><a href="#Coursers">Coursers</a></li>
    //             <li><a href="#Projects">Projects</a></li>
    //             <li><a href="#testimonial">testimonial</a></li>
    //             <li><a href="#Contact">Contact Me</a></li>
    //         </ul>
    //     </nav>
    // </header>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="nav-link" href="#action1">Home</Nav.Link>
            <Nav.Link className="nav-link" href="#action2">About</Nav.Link>
            <Nav.Link className="nav-link" href="#action2">Resume</Nav.Link>
            <Nav.Link className="nav-link" href="#action2">Coursers</Nav.Link>
            <Nav.Link className="nav-link" href="#action2">Projects</Nav.Link>
            <Nav.Link className="nav-link" href="#action2">testimonial</Nav.Link>
            <Nav.Link className="nav-link" href="#action2">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  );
}

export default Header;
