import React from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ServicesLoad from "../ServicesLoad/ServicesLoad";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div className="mt-5">
      <Slider></Slider>
      <ServicesLoad></ServicesLoad>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
