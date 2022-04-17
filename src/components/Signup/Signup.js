import React from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Signup.css";
const Signup = () => {
  return (
    <div
      className=" container d-flex justify-content-center"
      style={{ marginTop: "200px" }}
    >
      <section className="w-50">
        <h1 className="text-start mb-5 text-light">Please Signup</h1>
        <Form className="text-start  ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Name"
              className="border-0 shadow-lg p-3"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              className="border-0 shadow-lg p-3"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              className="border-0 shadow-lg p-3"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              className="border-0 shadow-lg p-3"
            />
          </Form.Group>

          <Button
            variant="success"
            type="submit"
            className="w-100 p-3 fw-bold signup-btn signup-btn"
          >
            Sign Up
          </Button>
          <p className="fw-bold text-light confirmation mt-3">
            Already have an account?{" "}
            <NavLink
              className="text-success text-decoration-none"
              to={"/login"}
            >
              Please Login
            </NavLink>
          </p>
        </Form>
      </section>
    </div>
  );
};

export default Signup;
