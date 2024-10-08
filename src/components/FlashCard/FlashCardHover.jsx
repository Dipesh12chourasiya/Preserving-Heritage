import React from "react";
import './FlashCardHover.css'
const FlashCardHover = () => {
  return (
    <div className="Parent">
      <div className="wrapper">
        <div className="card">
          <div className="front">
            <h1>Signature</h1>
            <p>
              7.7 deck<span>2018</span>
            </p>
            <p className="price">$ 89.00</p>
          </div>
          <div className="right">
            <h2>Signature</h2>
            <ul>
              <li>Width 7.7"</li>
              <li>Length 31.75"</li>
              <li>Wheelbase 14"</li>
              <li>Nose 6.875"</li>
              <li>Tail 6.25"</li>
            </ul>
            <button>Add to cart, yo</button>
          </div>
        </div>
        <div className="img-wrapper">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/577128/deck.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FlashCardHover;
