import React from "react";
import "./stockBox.css";

const StockBox = ({ text, value }) => {
  return (
    <div className="stockBox-wrapper">
      <div>
        <div className="stockBox-text">{text}</div>
        <h3 className="stockBox-value">{value}</h3>
      </div>
    </div>
  );
};

export default StockBox;
