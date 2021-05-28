import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function ContactUs() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-wrapper">
          <h1 className="contactus">Contact</h1>
          <div className="contact-details">
            <p>
              Book your weekend getaway with us and avail our exciting promos!
              Feel free to talk with us from our details below.
            </p>
            <ul>
              <li>Get in Touch</li>
              <li>Tel. #: 1234-567-890</li>
              <li>Mobile #: 0987-654-321</li>
              <li>Email: aanda@gmail.com</li>
            </ul>
            <ul>
              <li>You can also connect with us through our socials!</li>
              <li>
                <span className="fab fa-facebook-f"></span>
                <Link
                  to={{ pathname: "https://www.facebook.com" }}
                  target="_blank"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <span className="fab fa-instagram"></span>
                <Link
                  to={{ pathname: "https://www.instagram.com" }}
                  target="_blank"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <span className="fab fa-youtube"></span>
                <Link
                  to={{ pathname: "https://www.youtube.com" }}
                  target="_blank"
                >
                  Youtube
                </Link>
              </li>
              <li>
                <span className="fab fa-twitter"></span>
                <Link
                  to={{ pathname: "https://www.twitter.com" }}
                  target="_blank"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <span className="fab fa-linkedin"></span>
                <Link
                  to={{ pathname: "https://www.linkedin.com" }}
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
            <div>
              <img
                src="https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fG9mZmljZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Contact Us"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
