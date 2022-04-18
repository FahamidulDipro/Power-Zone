import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mt-5 py-5 bg-dark d-flex justify-content-center ">
        <div
          style={{
            borderTop: "1px solid grey",
            borderBottom: "1px solid grey",
          }}
          className="pt-4 w-75"
        >
          <div className="icon-container d-flex justify-content-between flex-lg-row flex-md-row flex-sm-column flex-column">
            <div className="addressContainer text-light text-start">
              <h2>My Address</h2>
              <p>515 Forest Avenue</p>
              <p>New York</p>
              <p>
                <b>Telephone:</b> 646-837-1289
              </p>
            </div>
            <div className="text-start">
              <i className="fa-brands fa-google fa-2x text-light mx-3"></i>
              <i className="fa-brands fa-facebook fa-2x text-light mx-3"></i>
              <i className="fa-brands fa-github  fa-2x text-light mx-3"></i>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-light pb-3 bg-dark m-0">
        © 2012-2022 - Power Zone Ltd
      </p>
    </>
  );
};

export default Footer;
