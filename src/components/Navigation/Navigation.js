import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="fixed-top"
    >
      <Container>
        <Navbar.Brand>
          <NavLink
            className="text-success fw-bold text-decoration-none"
            to={"/"}
          >
            Power Zone
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavLink
              to="/home"
              className="text-secondary mx-3 text-decoration-none fw-bold mt-1"
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className="text-secondary mx-3 text-decoration-none fw-bold mt-1"
            >
              Services
            </NavLink>
            <NavLink
              to="/checkout"
              className="text-secondary mx-3 text-decoration-none fw-bold mt-1"
            >
              Checkout
            </NavLink>
            <NavLink
              to="/blogs"
              className="text-secondary mx-3 text-decoration-none fw-bold mt-1"
            >
              Blogs
            </NavLink>
            <NavLink
              to="/about"
              className="text-secondary mx-3 text-decoration-none fw-bold mt-1"
            >
              About
            </NavLink>
            <NavLink
              to="/login"
              className="text-secondary mx-3 text-decoration-none fw-bold mt-1"
            >
              Login
            </NavLink>

            <NavLink to={"/signup"}>
              <Button variant="success rounded-pill fw-bold">Signup</Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
