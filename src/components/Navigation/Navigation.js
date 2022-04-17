import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const Navigation = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
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
           {
             user?<NavLink to={"/login"}>
             <Button variant=" rounded-pill fw-bold" style={{background:'rgb(125, 184, 37)'}} onClick={logout}>Logout</Button>
           </NavLink>:<>
           <NavLink
              to="/login"
              className="text-secondary mx-3 text-decoration-none fw-bold my-1"
            >
              Login
            </NavLink>

            <NavLink to={"/signup"}>
              <Button variant=" rounded-pill fw-bold" style={{background:'rgb(125, 184, 37)'}}>Signup</Button>
            </NavLink></>
           } 
           {
             user?<span className="text-light my-2 mx-5">Signed in as: <span className="text-lightGreen fw-bold">{user?.displayName}</span></span>:null
           } 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
