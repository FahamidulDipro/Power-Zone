import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mt-5 py-5 bg-dark d-flex justify-content-center">
        <div
          style={{
            borderTop: "1px solid grey",
            borderBottom: "1px solid grey",
          }}
          className="pt-4 w-75"
        >
          <i className="fa-brands fa-google fa-2x text-light mx-3"></i>
          <i className="fa-brands fa-facebook fa-2x text-light mx-3"></i>
          <i className="fa-brands fa-github  fa-2x text-light mx-3"></i>
          <p className="text-center text-light mt-5">
            © 2012-2022 - Power Zone Ltd
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
