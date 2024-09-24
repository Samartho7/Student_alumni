import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Ensure this path is correct
import man from '../assets/man.svg'; // Import your SVG logo

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" exact>
          {/* SVG logo added here */}
          <img src={man} alt="logo" className="navbar-logo" />
          Alumnify
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" exact>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/alumni">
              Alumni Page
            </Nav.Link>
            <Nav.Link as={NavLink} to="/students">
              Student Page
            </Nav.Link>
            <Nav.Link as={NavLink} to="/chat">
              Chat
            </Nav.Link>
            <Nav.Link as={NavLink} to="/forums">
              Forums
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              Login/Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
