import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink
              to="/home"
              className="text-decoration-none mx-3 text-light"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-decoration-none mx-3 text-light"
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className="text-decoration-none mx-3 text-light"
            >
              Services
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

export default Navigation;
