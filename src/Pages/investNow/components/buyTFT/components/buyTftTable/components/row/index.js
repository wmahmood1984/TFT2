import React from "react";
import "./row.css";

const Row = ({
  icon,
  currency,
  discount,
  tftPrice,
  handleBuyAtDiscountClick,
}) => {
  return (
    <tr className="buy-tft-table-row">
      <td>
        <span className="bnbIcon-wrapper">
          <img className="bnbIcon" src={icon} alt="bnbIcon" />
        </span>
      </td>
      <td>{currency}</td>
      <td>{discount}</td>
      <td>{tftPrice}</td>
      <td>
        <button
          className="table-buyNow-btn"
          onClick={() => handleBuyAtDiscountClick()}
        >
          Buy
        </button>
      </td>
    </tr>
  );
};

export default Row;
