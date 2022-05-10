import React from "react";

import "./buyTFT.css";
import BuyTftTable from "./components/buyTftTable";

const BuyTFT = ({ handleBuyAtDiscountClick }) => {
  return (
    <>
      <h2 className="buyTft-h">
        <span>BUY TFT AT AN INSTANT DISCOUNT</span>
      </h2>
      <div className="buy-tft-wrapper">
        <h4 className="buy-tft-heading">TFT Market Price : $35</h4>
        <BuyTftTable handleBuyAtDiscountClick={handleBuyAtDiscountClick} />
      </div>
    </>
  );
};

export default BuyTFT;
