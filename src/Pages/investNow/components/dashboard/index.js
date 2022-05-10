import React, { useState, useEffect } from "react";
import StockBox from "./components/stockBox";
import "./dashboard.css";
import { useSelector, useDispatch } from "react-redux";
import { initWeb3, Price } from "../../../../state/ui";
const Dashboard = ({ handleBuyAtDiscountClick, handleBuyAtMarketClick }) => {
  const dispatch = useDispatch();

  const circulatingSupply = useSelector((state) => {
    return state.adoptReducer.circulatingSupply;
  });

  const tftStakedDeposited = useSelector((state) => {
    return (
      (Number(state.adoptReducer.tftStaked) +
        Number(state.adoptReducer.tftDeposited)) /
      100000000000000
    ).toFixed(4);
  });

  const treasuryBalance = useSelector((state) => {
    return (Number(state.adoptReducer.treasuryBalance) / 1000000000000000000)
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  });

  const loanIssued = useSelector((state) => {
    return (Number(state.adoptReducer.loanIssued) / 1000000000000000000)
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  });

  const TFTDollarValue = useSelector((state) => {
    return state.adoptReducer.price;
  });

  useEffect(() => {
    //    dispatch(initWeb3());
  }, []);

  console.log("price 2", TFTDollarValue);

  return (
    <div className="dashboard-wrapper">
      <div className="content-wrapper">
        <p className="dashboard-top-text">
          Welcome to The Fair Trust. A financial ecosystem like none other, one
          that gives profit back to its stakeholders and is constantly evolving
          and expanding. Our projects will span across various sectors: New Age
          Banking, Artist Launchpad, Real Estate, Gaming… the possibilities are
          endless. Investing in The Fair Trust will be like investing in all of
          these sectors at once.
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
          <StockBox
            text="Current Circulating Supply - Million"
            value={(circulatingSupply / 100000000000000)
              .toFixed(0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          />
          <div className="stock-middle">
            <StockBox
              text="% off TFT Staked + Deposited"
              value={tftStakedDeposited}
            />
          </div>
          <StockBox text="Treasury Value" value={treasuryBalance} />
        </div>
        <div className="stockBoxWrapper-row">
          <StockBox text="Loan Issued" value={loanIssued} />
          <div className="stock-middle">
            <StockBox
              text="TFT Price"
              value={(Number(TFTDollarValue) / 1000000000000000000).toFixed(4)}
            />
          </div>
          <StockBox
            text="Market Cap -  Million"
            value={(
              ((Number(circulatingSupply) / 1000000000000000000) *
                Number(TFTDollarValue)) /
              100000000
            )
              .toFixed(0)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Dashboard;
