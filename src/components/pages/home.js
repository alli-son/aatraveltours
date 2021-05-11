import React from "react";
import "../../App.css";
import HeroSection from "../herosection";
import Cards from "../cards";
import Footer from "../footer";

function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <Cards></Cards>
      <Footer></Footer>
    </>
  );
}

export default Home;
