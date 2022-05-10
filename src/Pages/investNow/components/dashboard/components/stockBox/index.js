import React from "react";
import arrowup from "../../../../../../Assets/arrowup.png";
import "./stockBox.css";

const StockBox = ({ text, value }) => {
  return (
    <div className="stockBox-wrapper">
      <div>
        <div className="stockBox-text">{text}</div>
        <h3 className="stockBox-value">{value}</h3>
        <button className="blue-btn">
          <img src={arrowup} alt="arrowup" />
          25.9%
        </button>
      </div>
    </div>
  );
};

export default StockBox;
