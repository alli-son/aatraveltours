import React, { useState } from "react";
import "../App.css";
import { Button } from "./button";
import "./herosection.css";
import ModalVideo from "react-modal-video";
import "./modalvideo.css";

function HeroSection() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="hero-container">
      <video src="../videos/video-1.mp4" autoPlay loop muted></video>
      <h1>EXPLORE WITH US</h1>
      <p>Adventure awaits.</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="hB_yGv4BoMo"
          onClose={() => setOpen(false)}
        />

        <button className="btn-demo" onClick={() => setOpen(true)}>
          VIEW DEMO <i className="far fa-play-circle"></i>
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
