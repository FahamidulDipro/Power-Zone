import React from "react";
import { Table } from "react-bootstrap";

const Blogs = () => {
  return (
    <div
      className="text-light container text-start p-3"
      style={{ marginTop: "100px" }}
    >
      <h2 style={{ color: "rgb(125, 184, 37)" }} className="mt-5">
        Q1. What is the difference between Authentication and Authorization?
      </h2>
      <p className="mt-3">
        <b>Answer: </b>Here are the differences between Authentication and
        Authorization:{" "}
      </p>
      <Table bordered className="text-light ">
        <thead>
          <tr>
            <th className="text-center">Authentication</th>
            <th className="text-center">Authorization</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              It is <b>authentication</b> which verifies that who the user is.
            </td>
            <td>Authorization determines what resources a user can access.</td>
          </tr>
          <tr>
            <td>
              <b>Authentication</b> works through passwords, OTPs, biometric
              information, and other information provided which are provided by
              the user.
            </td>
            <td>
              On the oter hand <b>Authorization</b> works through settings that
              are implemented and maintained by the organization.
            </td>
          </tr>
          <tr>
            <td>
              Authentication is visible to and user can change it partially.
            </td>
            <td>
              User can't change Authorization and it isn't also visible to the
              user.
            </td>
          </tr>
        </tbody>
      </Table>

      <h2 style={{ color: "rgb(125, 184, 37)" }}>
        Q2. Why are you using firebase? What other options do you have to
        implement authentication?
      </h2>
      <p>
        <b>Answer: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequuntur maxime eius ab magni consequatur esse, voluptas totam
        voluptates dolorum laboriosam aliquam ratione provident perferendis
        minus officiis quis aliquid fugit amet.
      </p>

      <h2 style={{ color: "rgb(125, 184, 37)" }}>
        Q3. What other services does firebase provide other than authentication?
      </h2>
      <p>
        <b>Answer: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Consequuntur maxime eius ab magni consequatur esse, voluptas totam
        voluptates dolorum laboriosam aliquam ratione provident perferendis
        minus officiis quis aliquid fugit amet.
      </p>
    </div>
  );
};

export default Blogs;
