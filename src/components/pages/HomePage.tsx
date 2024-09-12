import React from "react";
import About from "./homeSections/About";
import Welcome from "./homeSections/Welcome";
import Work from "./homeSections/Work";
import Contact from "./homeSections/Contact";
import Delivery from "./homeSections/Delivery";
import Carusel from "./homeSections/Carusel";
import Partners from "./homeSections/Partners";
import Reviews from "./homeSections/Reviews";
import Caruselone from "./homeSections/Caruselone";
import Product from "./homeSections/Product";

const HomePage = () => {
  return (
    <>
      <Welcome />
      <About />
      <Product />
      <Work />
      <Delivery />
      <Reviews />
      <Partners />
      <Caruselone />
      <Carusel />
      <Contact />
    </>
  );
};

export default HomePage;
