import React, { useState } from "react";
import "../../App.css";
import { MountainImg } from "../mountainimg";
import { BeachImg } from "../beachimg";
import { TouristImg } from "../touristimg";

function Services() {
  const [current, setCurrent] = useState(0);
  const length = MountainImg.length;
  const [currentBeach, setCurrentBeach] = useState(0);
  const lengthBeach = BeachImg.length;
  const [currentTourist, setCurrentTourist] = useState(0);
  const lengthTourist = TouristImg.length;

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

  // Tourist Spots slider
  const nextSlideTourist = () => {
    setCurrentTourist(
      currentTourist === lengthTourist - 1 ? 0 : currentTourist + 1
    );
  };

  const prevSlideTourist = () => {
    setCurrentTourist(
      currentTourist === 0 ? lengthTourist - 1 : currentTourist - 1
    );
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
          <div>
            <span>
              <div className="left-arrow-wrapper" onClick={prevSlide}>
                <i className="fas fa-angle-left left-arrow"></i>
              </div>
              <div className="right-arrow-wrapper" onClick={nextSlide}>
                <i className="fas fa-angle-right right-arrow"></i>
              </div>
            </span>
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
      <div className="services-beaches">
        <div className="slider">
          <div>
            <span>
              <div className="left-arrow-wrapper" onClick={prevSlideBeach}>
                <i className="fas fa-angle-left left-arrow"></i>
              </div>
              <div className="right-arrow-wrapper" onClick={nextSlideBeach}>
                <i className="fas fa-angle-right right-arrow"></i>
              </div>
            </span>
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
      </div>

      {/* Tourist spots */}
      <div className="services-tourist">
        <div className="services-tourist-text">
          <h2>Tourist Spots</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur doloremque quidem animi iure provident quia harum,
            praesentium voluptatibus ullam aperiam laborum nostrum quasi odio
            eaque, vero quis, quos atque. Impedit.
          </p>
          <ul>
            <li>Scenery</li>
            <li>Cityscape</li>
            <li>Memories</li>
          </ul>
        </div>
        <div className="slider">
          <div>
            <span>
              <div className="left-arrow-wrapper" onClick={prevSlideTourist}>
                <i className="fas fa-angle-left left-arrow"></i>
              </div>
              <div className="right-arrow-wrapper" onClick={nextSlideTourist}>
                <i className="fas fa-angle-right right-arrow"></i>
              </div>
            </span>
            {TouristImg.map((tourist, index) => {
              return (
                <div
                  key={index}
                  className={
                    index === currentTourist ? "slide active" : "slide"
                  }
                >
                  {index === currentTourist && (
                    <img src={tourist.image} alt="Mountain" />
                  )}
                  {index === currentTourist ? (
                    <p className="tagline">{tourist.text}</p>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Testimonials */}

      <div className="testimonials">
        <div className="overlay"></div>
        <div className="testimonials-wrapper">
          <div className="testimonials-content">
            <h2>Testimonials</h2>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                perferendis reprehenderit sequi aperiam voluptatibus alias
                necessitatibus cumque praesentium doloribus hic.
              </p>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <p>- John Doe</p>
            </div>
            <div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                facilis odio laboriosam ipsa maxime at?
              </p>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star"></i>
              <p>- Jane Smith</p>
            </div>
            <div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <i className="fa fa-star checked"></i>
              <p>- Peter White</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
