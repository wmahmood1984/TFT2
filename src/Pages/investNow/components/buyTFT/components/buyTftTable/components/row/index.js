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
      {/* <td>
        <span className="bnbIcon-wrapper">
          
        </span>
      </td> */}
      <td>
        <img
          className="bnbIcon"
          src={icon}
          alt="bnbIcon"
          style={{ width: "30px" }}
        />
        <span className="ml20">{currency}</span>
      </td>
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
