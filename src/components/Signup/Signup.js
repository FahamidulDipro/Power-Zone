import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";

import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();
  const [passwordMatchError, setpasswordMatchError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const cpassword = event.target.cpassword.value;
    if (password === cpassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      console.log("updated profile");
      navigate("/home");
    } else {
      setpasswordMatchError(
        <p className="text-danger fw-bold">Password didn't match</p>
      );
    }
  };
  if (user) {
    console.log(user);
  }
  let displayError;
  if (error) {
    toast(" User Can't Be Created");
    displayError = <p className="text-danger">{error?.message}</p>;
  } else {
    toast("New User Created");
  }
  return (
    <div
      className=" container d-flex justify-content-center"
      style={{ marginTop: "200px" }}
    >
      {user ? <ToastContainer /> : null}

      <section className="w-50">
        <h1 className="text-start mb-5 text-light">Please Signup</h1>
        {/* Signup Form with Required fields */}
        <Form className="text-start" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              className="border-0 shadow-lg p-3" required 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              className="border-0 shadow-lg p-3" required 
            />
            {displayError}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              className="border-0 shadow-lg p-3" required 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        
            <Form.Control
              type="password"
              name="cpassword"
              placeholder="Confirm Password"
              className="border-0 shadow-lg p-3" required 
            />
          </Form.Group>
          {passwordMatchError}
          <Button
            type="submit"
            className="w-100 p-3 fw-bold signup-btn bg-lightGreen"
          >
            Sign Up
          </Button>
          <p className="fw-bold text-light confirmation mt-3">
            Already have an account?{" "}
            <NavLink
              className="text-lightGreen text-decoration-none"
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
