import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { PromoImg } from "../promoimg";

function SignUp() {
  return (
    <>
      <div className="packages-container">
        <div>
          <h2>Promo Tour Packages</h2>
          <h3>
            Looking for your next affordable itinerary destination? Check out
            our awesome promos and packages below.
          </h3>
        </div>
        <div className="packages-details-container">
          {PromoImg.map((pack, index) => {
            return (
              <div key={index}>
                <img
                  src={pack.image}
                  width="200"
                  height="300"
                  alt="Travel and Tours"
                />
                <div className="packages-details">
                  <p>{pack.title}</p>
                  <div>
                    <h4>{pack.length}</h4>
                    {pack.detail}
                    <Link to="/contactus">Contact us for details &gt;</Link>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div>
            <img src={img9} width="200" height="300" />
            <div className="packages-details">
              <p>3D2N explore Coron - Coron Promo Day Tour Package</p>
              <div>
                <h4>for as low as P2,500</h4>
                <ul>
                  <li>3D2N Room accommodation at Coron City</li>
                  <li>Daily breakfast</li>
                  <li>Coron adventure day tour</li>
                  <li>Private boat</li>
                  <li>Private tour guide</li>
                  <li>All permits and fees</li>
                </ul>
                <Link to="/contactus">Contact us for details &gt;</Link>
              </div>
            </div>
          </div> */}
          {/* <div>
            <img src={img9} width="200" height="300" />
            <div className="packages-details">
              <p>3D2N explore Coron - Coron Promo Day Tour Package</p>
              <div>
                <h4>for as low as P2,500</h4>
                <ul>
                  <li>3D2N Room accommodation at Coron City</li>
                  <li>Daily breakfast</li>
                  <li>Coron adventure day tour</li>
                  <li>Private boat</li>
                  <li>Private tour guide</li>
                  <li>All permits and fees</li>
                </ul>
                <Link to="/contactus">Contact us for details &gt;</Link>
              </div>
            </div>
          </div>
          <div>
            <img src={img9} width="200" height="300" />
            <div className="packages-details">
              <p>3D2N explore Coron - Coron Promo Day Tour Package</p>
              <div>
                <h4>for as low as P2,500</h4>
                <ul>
                  <li>3D2N Room accommodation at Coron City</li>
                  <li>Daily breakfast</li>
                  <li>Coron adventure day tour</li>
                  <li>Private boat</li>
                  <li>Private tour guide</li>
                  <li>All permits and fees</li>
                </ul>
                <Link to="/contactus">Contact us for details &gt;</Link>
              </div>
            </div>
          </div>
          <div>
            <img src={img9} width="200" height="300" />
            <div className="packages-details">
              <p>3D2N explore Coron - Coron Promo Day Tour Package</p>
              <div>
                <h4>for as low as P2,500</h4>
                <ul>
                  <li>3D2N Room accommodation at Coron City</li>
                  <li>Daily breakfast</li>
                  <li>Coron adventure day tour</li>
                  <li>Private boat</li>
                  <li>Private tour guide</li>
                  <li>All permits and fees</li>
                </ul>
                <Link to="/contactus">Contact us for details &gt;</Link>
              </div>
            </div>
          </div>
          <div>
            <img src={img9} width="200" height="300" />
            <div className="packages-details">
              <p>3D2N explore Coron - Coron Promo Day Tour Package</p>
              <div>
                <h4>for as low as P2,500</h4>
                <ul>
                  <li>3D2N Room accommodation at Coron City</li>
                  <li>Daily breakfast</li>
                  <li>Coron adventure day tour</li>
                  <li>Private boat</li>
                  <li>Private tour guide</li>
                  <li>All permits and fees</li>
                </ul>
                <Link to="/contactus">Contact us for details &gt;</Link>
              </div>
            </div>
          </div>
          <div>
            <img src={img9} width="200" height="300" />
            <div className="packages-details">
              <p>3D2N explore Coron - Coron Promo Day Tour Package</p>
              <div>
                <h4>for as low as P2,500</h4>
                <ul>
                  <li>3D2N Room accommodation at Coron City</li>
                  <li>Daily breakfast</li>
                  <li>Coron adventure day tour</li>
                  <li>Private boat</li>
                  <li>Private tour guide</li>
                  <li>All permits and fees</li>
                </ul>
                <Link to="/contactus">Contact us for details &gt;</Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default SignUp;
