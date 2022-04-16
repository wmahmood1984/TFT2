import React from "react";
import StockBox from "./components/stockBox";
import "./dashboard.css";

const Dashboard = ({ handleBuyAtDiscountClick, handleBuyAtMarketClick }) => {
  return (
    <div className="dashboard-wrapper">
      <div className="content-wrapper">
        <p className="dashboard-top-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
          inventore magnam doloribus, quidem suscipit eveniet saepe quia
          necessitatibus? Mollitia nobis soluta vero molestiae adipisci fugit
          ducimus ea minima, dolores amet.
        </p>
      </div>
      <div className="button-wrapper">
        <button className="tft-btn" onClick={() => handleBuyAtDiscountClick()}>
          Buy TFT at Discount
        </button>
        <button
          className="tft-btn tft-btn-right"
          onClick={() => handleBuyAtMarketClick()}
        >
          Buy TFT at Market Price
        </button>
      </div>
      {/* <ul className="dashboard-pricing-wrapper">
        <li>
          <p>Current Circulating Supply</p> <p>$15</p>
        </li>
        <li>
          <p>% off TFT Staked + Deposited</p> <p>$5</p>
        </li>
        <li>
          <p>Treasury Value</p> <p>$50</p>
        </li>
        <li>
          <p>Loan Issued</p> <p>$150</p>
        </li>
        <li>
          <p>TFT Price</p> <p>$250</p>
        </li>
        <li>
          <p>Market Cap</p> <p>$40</p>
        </li>
      </ul> */}
      <div className="stockBoxWrapper">
        <div className="stockBoxWrapper-row">
          <StockBox text="Current Circulating Supply" value="1,091,927" />
          <div className="stock-middle">
            <StockBox text="% off TFT Staked + Deposited" value="1,091,927" />
          </div>
          <StockBox text="Treasury Value" value="1,091,927" />
        </div>
        <div className="stockBoxWrapper-row">
          <StockBox text="Loan Issued" value="1,091,927" />
          <div className="stock-middle">
            <StockBox text="TFT Price" value="1,091,927" />
          </div>
          <StockBox text="Market Cap" value="1,091,927" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
