import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import './Navigation.css';
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
            style={{ color: "rgb(125, 184, 37)", fontSize: "25px" }}
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
              className={({isActive})=>isActive?'active-link':'link'}
            >
              Home
            </NavLink>

            <NavLink
              to="/checkout"
              className={({isActive})=>isActive?'active-link':'link'}
            >
              Checkout
            </NavLink>
            <NavLink
              to="/blogs"
              className={({isActive})=>isActive?'active-link':'link'}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/about"
              className={({isActive})=>isActive?'active-link':'link'}
            >
              About
            </NavLink>
            {user ? (
              <NavLink to={"/login"}>
                <Button
                  variant=" rounded-pill fw-bold"
                  style={{ background: "rgb(125, 184, 37)" }}
                  onClick={logout}
                >
                  Logout
                </Button>
              </NavLink>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={({isActive})=>isActive?'active-link':'link'}
                >
                  Login
                </NavLink>

                <NavLink to={"/signup"}>
                  <Button
                    variant=" rounded-pill fw-bold"
                    style={{ background: "rgb(125, 184, 37)" }}
                  >
                    Signup
                  </Button>
                </NavLink>
              </>
            )}
            {user ? (
              <span className="text-light my-2 mx-5">
                Signed in as:{" "}
                <span className="text-lightGreen fw-bold">
                  {user?.displayName}
                </span>
                <span>
                  {user?.photoURL ? (
                    <img
                      src={user?.photoURL}
                      alt="userImage"
                      style={{
                        width: "30px",
                        borderRadius: "50%",
                        marginLeft: "20px",
                      }}
                    />
                  ) : null}
                </span>
              </span>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
