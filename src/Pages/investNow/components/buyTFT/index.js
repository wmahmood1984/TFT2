import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./buyTFT.css";
import BuyTftTable from "./components/buyTftTable";

const BuyTFT = ({ handleBuyAtDiscountClick }) => {

  const TFTDollarValue = useSelector((state) => {
    return state.adoptReducer.price;
  });
  return (
    <>
      <h2 className="buyTft-h">
        <span>BUY TFT AT AN INSTANT DISCOUNT</span>
      </h2>
      <div className="buy-tft-wrapper">
        <h4 className="buy-tft-heading">TFT Market Price : ${(Number(TFTDollarValue) / 1000000000000000000).toFixed(5)}</h4>
        <BuyTftTable handleBuyAtDiscountClick={handleBuyAtDiscountClick} />
      </div>
    </>
  );
};

export default BuyTFT;
