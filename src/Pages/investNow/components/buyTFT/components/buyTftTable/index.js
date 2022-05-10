import React from "react";
import bnbIcon from "../../../../../../Assets/bnbIcon.png";
import busdIcon from "../../../../../../Assets/busdIcon.png";
import usdtIcon from "../../../../../../Assets/usdtIcon.png";
import "./buyTftTable.css";
import Header from "./components/header";
import Row from "./components/row";

const BuyTftTable = ({ handleBuyAtDiscountClick }) => {
  return (
    <div>
      <table className="buy-tft-table">
        <Header />
        <tbody>
          <br />
          <Row
            icon={busdIcon}
            currency="BUSD"
            discount="28%"
            tftPrice="$33"
            handleBuyAtDiscountClick={handleBuyAtDiscountClick}
          />
          <br />
          <Row
            icon={bnbIcon}
            currency="BNB"
            discount="28%"
            tftPrice="$33"
            handleBuyAtDiscountClick={handleBuyAtDiscountClick}
          />
          <br />
          <Row
            icon={usdtIcon}
            currency="USDT"
            discount="28%"
            tftPrice="$33"
            handleBuyAtDiscountClick={handleBuyAtDiscountClick}
          />
        </tbody>
      </table>
    </div>
  );
};

export default BuyTftTable;
