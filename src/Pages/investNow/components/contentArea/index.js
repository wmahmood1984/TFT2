/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import AirDrop from "../airDrop";
import BuyTFT from "../buyTFT";
import BuyAtDiscount from "../buyTFT/components/buyAtDiscount";
import Dashboard from "../dashboard";
import FairInvestment from "../fairInvestment";
import contentAreaLeftCircle from "../../../../Assets/contentAreaLeftCircle.png";
import contentAreaRightCircle from "../../../../Assets/contentAreaRightCircle.png";
import LoanVault from "../loanVault";
import OneFor10X from "../oneFor10X";
import { useSelector, useDispatch } from "react-redux";
import { Price } from "../../../../state/ui";
import Loader from "../../../../Components/loader";
import "./contentArea.css";
import Footer1 from "../../../../Components/footer1";

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

  // useEffect(() => {
  //   dispatch(Price({ BNB: 0, BUSD: 0, USDT: 0, TFT }));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [toggle]);
  return (
    <div className="contentArea-wrapper">
      <img
        src={contentAreaLeftCircle}
        className="contentAreaLeftCircle"
        alt="contentAreaLeftCircle"
      />
      <img
        src={contentAreaRightCircle}
        className="contentAreaRightCircle"
        alt="contentAreaRightCircle"
      />
      <div className="blue-lyaer" />
      {dashboard ? (
        <Dashboard
          handleBuyAtDiscountClick={handleBuyAtDiscountClick}
          handleBuyAtMarketClick={handleBuyAtMarketClick}
        />
      ) : null}
      {false ? (
        <BuyTFT handleBuyAtDiscountClick={handleBuyAtDiscountClick} />
      ) : null}
      {buyAtDiscount ? (
        <BuyAtDiscount handleBuyAtDiscountClick={handleBuyAtDiscountClick} />
      ) : null}
      {buyAtMarket ? (
        <iframe
          src="https://pancakeswap.finance/swap?outputCurrency=0x8E39816e67Fa39C768c0a6CB2E4B2E99A2813B6f"
          width="100%"
          style={{ height: "calc(100vh - 60px)", marginTop: "-10px" }}
        ></iframe>
      ) : null}
      {fairInvestment ? <FairInvestment /> : null}
      {loanVault ? <LoanVault /> : null}
      {oneFor10X ? <OneFor10X /> : null}
      {airDrop ? <AirDrop /> : null}
      {toggle ? <Loader /> : null}
      {/* <Footer1 /> */}
    </div>
  );
};

export default ContentArea;
