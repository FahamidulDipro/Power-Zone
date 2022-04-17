import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const Navigation = () => {
  const [user, loading, error] = useAuthState(auth);
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
          style={{color:'rgb(125, 184, 37)',fontSize:'25px'}}
            className=" fw-bold text-decoration-none mx-4"
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
              className="text-secondary mx-3 text-decoration-none fw-bold my-1"
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className="text-secondary mx-3 text-decoration-none fw-bold my-1"
            >
              Services
            </NavLink>
            <NavLink
              to="/checkout"
              className="text-secondary mx-3 text-decoration-none fw-bold my-1"
            >
              Checkout
            </NavLink>
            <NavLink
              to="/blogs"
              className="text-secondary mx-3 text-decoration-none fw-bold my-1"
            >
              Blogs
            </NavLink>
            <NavLink
              to="/about"
              className="text-secondary mx-3 text-decoration-none fw-bold my-1"
            >
              About
            </NavLink>
            <NavLink
              to="/login"
              className="text-secondary mx-3 text-decoration-none fw-bold my-1"
            >
              Login
            </NavLink>

            <NavLink to={"/signup"}>
              <Button variant=" rounded-pill fw-bold" style={{background:'rgb(125, 184, 37)'}}>Signup</Button>
            </NavLink>
            <span className="text-light my-2 mx-5">Signed in as: <span className="text-lightGreen fw-bold">{user?.email}</span></span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
