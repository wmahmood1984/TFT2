/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import AirDrop from "../airDrop";
import BuyTFT from "../buyTFT";
import BuyAtDiscount from "../buyTFT/components/buyAtDiscount";
import Dashboard from "../dashboard";
import FairInvestment from "../fairInvestment";
import LoanVault from "../loanVault";
import OneFor10X from "../oneFor10X";
import "./contentArea.css";

const ContentArea = ({
  dashboard,
  buyTft,
  buyAtDiscount,
  buyAtMarket,
  fairInvestment,
  loanVault,
  oneFor10X,
  airDrop,
  handleBuyAtDiscountClick,
  handleBuyAtMarketClick,
}) => {
  return (
    <div className="contentArea-wrapper">
      {dashboard ? (
        <Dashboard
          handleBuyAtDiscountClick={handleBuyAtDiscountClick}
          handleBuyAtMarketClick={handleBuyAtMarketClick}
        />
      ) : null}
      {buyTft ? (
        <BuyTFT handleBuyAtDiscountClick={handleBuyAtDiscountClick} />
      ) : null}
      {buyAtDiscount ? <BuyAtDiscount /> : null}
      {buyAtMarket ? (
        <iframe
          src="https://pancakeswap.finance/swap?outputCurrency=0x8E39816e67Fa39C768c0a6CB2E4B2E99A2813B6f"
          width="100%"
          height="100%"
        ></iframe>
      ) : null}
      {fairInvestment ? <FairInvestment /> : null}
      {loanVault ? <LoanVault /> : null}
      {oneFor10X ? <OneFor10X /> : null}
      {airDrop ? <AirDrop /> : null}
    </div>
  );
};

export default ContentArea;
