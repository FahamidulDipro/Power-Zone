import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/home">Power Zone</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/home"
                className="text-decoration-none mx-3 text-light"
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                className="text-decoration-none mx-3 text-light"
              >
                Services
              </NavLink>
              <NavLink
                to="/checkout"
                className="text-decoration-none mx-3 text-light"
              >
                Checkout
              </NavLink>
              <NavLink
                to="/about"
                className="text-decoration-none mx-3 text-light"
              >
                About
              </NavLink>
            </Nav>
            <Nav>
              <NavLink
                to="/login"
                className="text-decoration-none mx-3 text-light"
              >
                Login{" "}
              </NavLink>
              <NavLink
                eventKey={2}
                to="/signup"
                className="text-decoration-none mx-3 text-light"
              >
                Sign up
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
