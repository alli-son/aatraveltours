import React from "react";
import CardsItem from "./cardsitem";
import "./cards.css";
import img5 from "../images/img-5.jpg";
import img6 from "../images/img-6.jpg";
import img7 from "../images/img-7.jpg";
import img8 from "../images/img-8.jpg";
import img9 from "../images/img-9.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these AWESOME Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardsItem
              src={img5}
              text="A sea of clouds waiting for you at Mt. Pulag"
              label="Adventure"
              path="/services"
            ></CardsItem>
            <CardsItem
              src={img7}
              text="Island hopping at its finest at Burias Island"
              label="Sightseeing"
              path="/services"
            ></CardsItem>
          </ul>
          <ul className="cards__items">
            <CardsItem
              src={img9}
              text="Be one with the ocean on a private trip at Coron Palawan"
              label="Luxury"
              path="/services"
            ></CardsItem>
            <CardsItem
              src={img6}
              text="Experience the breathtaking sights of Bakun Trio"
              label="Adrenaline"
              path="/services"
            ></CardsItem>
            <CardsItem
              src={img8}
              text="Travel through the beauty of Siargao Island"
              label="Excitement"
              path="/services"
            ></CardsItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
