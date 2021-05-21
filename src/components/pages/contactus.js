import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function ContactUs() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-wrapper">
          <h1 className="contactus">Contact Us</h1>
          <div>
            <p>
              Book your weekend getaway with us and avail our exciting promos!
              Feel free to talk with us from our details below.
            </p>
            <ul>
              <li>Contacts:</li>
              <li>Tel. #: 1234-567-890</li>
              <li>Mobile #: 0987-654-321</li>
              <li>Email: aanda@gmail.com</li>
            </ul>
            <ul>
              <li>You can also connect with us through our socials!</li>
              <li>
                <Link
                  to={{ pathname: "https://www.facebook.com" }}
                  target="_blank"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  to={{ pathname: "https://www.instagram.com" }}
                  target="_blank"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  to={{ pathname: "https://www.youtube.com" }}
                  target="_blank"
                >
                  Youtube
                </Link>
              </li>
              <li>
                <Link
                  to={{ pathname: "https://www.twitter.com" }}
                  target="_blank"
                >
                  Twitter
                </Link>
              </li>
              <li>
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
                width="800"
                height="600"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
