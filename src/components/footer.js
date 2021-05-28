import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <button
              onClick={() =>
                alert("Thank you for subscribing at our newsletter!")
              }
              className="btn btn-subscribe"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Services</h2>
            <Link to="/services">Mountains</Link>
            <Link to="/services">Beaches and Islands</Link>
            <Link to="/services">Tourist Spots</Link>
            <Link to="/services">Testimonials</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/contactus">Contact</Link>
            <Link to="/contactus">Phone Number</Link>
            <Link to="/contactus">Email</Link>
            <Link to="/contactus">Socials</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to={{ pathname: "https://www.facebook.com" }} target="_blank">
              Facebook
            </Link>
            <Link
              to={{ pathname: "https://www.instagram.com" }}
              target="_blank"
            >
              Instagram
            </Link>
            <Link to={{ pathname: "https://www.youtube.com" }} target="_blank">
              Youtube
            </Link>
            <Link to={{ pathname: "https://www.twitter.com" }} target="_blank">
              Twitter
            </Link>
            <Link to={{ pathname: "https://www.linkedin.com" }} target="_blank">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to={{ pathname: "https://www.facebook.com" }}
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to={{ pathname: "https://www.instagram.com" }}
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to={{ pathname: "https://www.youtube.com" }}
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to={{ pathname: "https://www.twitter.com" }}
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to={{ pathname: "https://www.linkedin.com" }}
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
          <small className="website-rights">A&A Travel and Tours © 2021</small>
        </div>
      </section>
    </div>
  );
}

export default footer;
