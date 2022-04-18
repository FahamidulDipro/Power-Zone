import React from "react";
import { Table } from "react-bootstrap";

const Blogs = () => {
  return (
    <div
      className="text-light container text-start p-3"
      style={{ marginTop: "100px" }}
    >
      <h2 style={{ color: "rgb(125, 184, 37)", marginTop: "50px" }}>
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

      <h2 style={{ color: "rgb(125, 184, 37)", marginTop: "50px" }}>
        Q2. Why are you using firebase? What other options do you have to
        implement authentication?
      </h2>
      <p>
        <b>Answer: </b>I am using <b>Firebase</b> because it manages all data
        real-time in the database. Firebase allow syncing the real-time data not
        only on the web but also across all the devices- Android, iOS without
        reloading the screen. Firebase also offers us integrate Google Ads,
        AdMob, DoubleClick, Play Store, Data Studio, BigQuery, and Slack, to
        make our app development with efficient and accurate management and
        maintenance. We can create Applications without backend server in
        Firebase. Firebase is also faster than any other backend services.
      </p>
      <h3>Ohter options to implement authentication</h3>
      <hr />
      <p>
        1. We can use <b>React Firebase Hooks</b>. This library explores how
        React Hooks can work to make integration with Firebase even more
        straightforward than it already is.
      </p>
      <p>
        2.There are other authentication providers such as Okta, Auth0, OpenId
        etc which connect all our apps in days, not months, with instant access
        to thousands of pre-built integrations - even add apps to the network
        automatically. Integrations are easy to set up, constantly monitored,
        proactively repaired and handle authentication and provisioning.
      </p>

      <h2 style={{ color: "rgb(125, 184, 37)", marginTop: "50px" }}>
        Q3. What other services does firebase provide other than authentication?
      </h2>
      <p>
        <b>Answer: </b> Firebase provides following services other than
        authentication:
        <ul>
          <li>Cloud Firestore</li>
          <li>Cloud Storage</li>
          <li>Cloud Functions</li>
          <li>Hosting</li>
          <li>Google Analytics</li>
          <li>Predictions</li>
          <li>Dynamic Links</li>
          <li>Cloud Messaging</li>
          <li>Remote Config</li>
        </ul>
      </p>
    </div>
  );
};

export default Blogs;
