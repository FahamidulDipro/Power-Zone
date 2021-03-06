import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const emailRef = useRef("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate("/home");
  }
  const resetPassword = async (event) => {
    const email = emailRef.current.value;

    if (email) {
      await sendPasswordResetEmail(email);
      toast("Password Reset Email Sent");
    } else {
      toast("Please enter your Email Address");
    }
  };

  let displayError;
  if (error) {
    displayError = <p className="text-danger">{error?.message}</p>;
  }
  return (
    <div className="mt-5">
      <ToastContainer />
      <div
        className=" container d-flex justify-content-center"
        style={{ marginTop: "200px" }}
      >
        <section className="w-50">
          <h1 className="text-start mb-5 text-light">Please Login</h1>
          {/* Login Form with 'Required' fields */}
          <Form className="text-start" onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                className="border-0 shadow-lg p-3"
                ref={emailRef} required 
              />
            </Form.Group>
            {displayError}

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                className="border-0 shadow-lg p-3" required 
              />
              {displayError}
            </Form.Group>

            <Button
              type="submit"
              className="w-100 p-3 fw-bold signup-btn bg-lightGreen"
            >
              Login
            </Button>
            <p className="fw-bold text-light confirmation mt-3">
              Don't have an account?{" "}
              <NavLink
                className="text-lightGreen text-decoration-none"
                to={"/signup"}
              >
                Please Signup
              </NavLink>
            </p>
            <p className="fw-bold text-light confirmation mt-3">
              Forget Password?{" "}
              <span
                className="text-lightGreen text-decoration-none "
                style={{ cursor: "pointer" }}
                onClick={resetPassword}
              >
                Reset Password
              </span>
            </p>
            <SocialLogin></SocialLogin>
          </Form>
        </section>
      </div>
    </div>
  );
};

export default Login;
