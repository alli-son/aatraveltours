import React, { useState } from "react";
import "../../App.css";
import { MountainImg } from "../mountainimg";
import { BeachImg } from "../beachimg";

function Services() {
  const [current, setCurrent] = useState(0);
  const length = MountainImg.length;
  const [currentBeach, setCurrentBeach] = useState(0);
  const lengthBeach = BeachImg.length;

  // Mountain slider
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Beach and Island slider
  const nextSlideBeach = () => {
    setCurrentBeach(currentBeach === lengthBeach - 1 ? 0 : currentBeach + 1);
  };

  const prevSlideBeach = () => {
    setCurrentBeach(currentBeach === 0 ? lengthBeach - 1 : currentBeach - 1);
  };

  // if (!Array.isArray(MountainImg) || MountainImg.length <= 0) {
  //   return null;
  // }

  return (
    <>
      <div className="services">
        <div className="overlay"></div>
        <div className="services-wrapper">
          <div className="services-tagline">
            <h3>Mother nature matched with passionate people</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

      {/* Mountains */}
      <div className="services-mountain">
        <div className="services-mountain-text">
          <h2>Mountains</h2>
          <p>
            Quisque fringilla, ligula eget ultricies tempor, eros enim
            sollicitudin neque, et malesuada ligula velit at elit.
          </p>
          <ul>
            <li>Hiking</li>
            <li>Trekking</li>
            <li>Climbing</li>
          </ul>
        </div>
        <div className="slider">
          <span>
            <div className="left-arrow-wrapper" onClick={prevSlide}>
              <i className="fas fa-angle-left left-arrow"></i>
            </div>
            <div className="right-arrow-wrapper" onClick={nextSlide}>
              <i className="fas fa-angle-right right-arrow"></i>
            </div>
          </span>
          <div>
            {MountainImg.map((mount, index) => {
              return (
                <div
                  key={index}
                  className={index === current ? "slide active" : "slide"}
                >
                  {index === current && (
                    <img src={mount.image} alt="Mountain" />
                  )}
                  {index === current ? (
                    <p className="tagline">{mount.text}</p>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Beaches and Islands */}
      {/* <div className="services-beaches">
        <div className="slider">
          <span>
            <div className="left-arrow-wrapper" onClick={nextSlideBeach}>
              <i className="fas fa-angle-left left-arrow"></i>
            </div>
            <div className="right-arrow-wrapper" onClick={nextSlideBeach}>
              <i className="fas fa-angle-right right-arrow"></i>
            </div>
          </span>
          <div>
            {BeachImg.map((beach, index) => {
              return (
                <div
                  key={index}
                  className={index === currentBeach ? "slide active" : "slide"}
                >
                  {index === currentBeach && (
                    <img src={beach.image} alt="Beaches" />
                  )}
                  {index === currentBeach ? (
                    <p className="tagline">{beach.text}</p>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="services-beaches-text">
          <h2>Beaches and Islands</h2>
          <p>
            Integer maximus dolor vel imperdiet aliquam. Nulla facilisi.
            Praesent finibus magna ac porttitor cursus. Sed at felis sit amet
            nunc fringilla porta eu ac quam.
          </p>
          <ul>
            <li>Island Hopping</li>
            <li>Diving</li>
            <li>Swimming</li>
          </ul>
        </div>
      </div> */}
    </>
  );
}

export default Services;
