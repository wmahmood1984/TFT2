/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from "react";
import AirDrop from "../airDrop";
import BuyTFT from "../buyTFT";
import BuyAtDiscount from "../buyTFT/components/buyAtDiscount";
import Dashboard from "../dashboard";
import FairInvestment from "../fairInvestment";
import LoanVault from "../loanVault";
import OneFor10X from "../oneFor10X";
import { useSelector, useDispatch } from "react-redux";
import { Price } from "../../../../state/ui";
import Loader from "../../../../Components/loader";
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
  const dispatch = useDispatch();
  const toggle = useSelector((state) => {
    return state.adoptReducer.toggle;
  });

  useEffect(() => {
    dispatch(Price({ BNB: 0, BUSD: 0, USDT: 0 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);
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
      {toggle ? <Loader /> : null}
    </div>
  );
};

export default ContentArea;
