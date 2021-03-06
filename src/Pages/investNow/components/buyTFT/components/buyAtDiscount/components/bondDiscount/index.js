import React from "react";
import CustomInput from "../../../../../../../../Components/customInput";
import TftConversionReadOnlyInput from "../../../../../../../../Components/tftConversionReadOnlyInput";
import arrowdown from "../../../../../../../../Assets/arrowdown.png";
import "./bondDiscount.css";

const BondDiscount = ({
  disable,
  headingIcon,
  currency,
  onCurrencyChange,
  value,
  balance,
  DiscountedPrice,
  BuyFunction,
  discount,
  LivePrice,
  allowance,
  Conversion,
  handleBack,
}) => {
  console.log("tft value", DiscountedPrice);
  return (
    <div className="bondDiscount-wraooer">
      <div className="bondDiscount-heading">
        <span className="bondDiscount-heading-img">
          <img src={headingIcon} alt="bnbIcon" />
          &nbsp;&nbsp;
          {currency}
        </span>
        <span>Discount on TFT: {discount}%</span>
      </div>
      <div className="bondDiscount-inner-wrapper">
        <div className="bondDiscountOnTFT1">
          <span>
            TFT Market Price:{" "}
            <span style={{ color: "#D45E2C" }}>${LivePrice}</span>
          </span>{" "}
          <span>
            TFT Discounted Price:{" "}
            <span style={{ color: "#D45E2C" }}>${DiscountedPrice}</span>
          </span>
        </div>

        <div className="mt30">
          <CustomInput
            lable="BUSD"
            enterLable={`Enter ${currency}`}
            placeholder={`${currency} AMOUNT`}
            value={value}
            OnChange={onCurrencyChange}
            belowLabel={`${currency} Available`}
            rightButtonText="Max"
            balance={balance}
            disable={disable}
          />
          <div className="downarrow-w">
            <div className="downarrow">
              <img src={arrowdown} alt="arrowdown" />
            </div>
          </div>
          {/* Tft Conversion Start */}
          <div className="tft-conversion-wrapper">
            <div className="left">
              <TftConversionReadOnlyInput value={Conversion} />
            </div>
            {/* <div className="right">
              
            </div> */}
          </div>
          <div className="back-buytft-w">
            <button className="back" onClick={() => handleBack()}>
              <span>Back</span>
            </button>
            <button className="buy" disabled={disable} onClick={BuyFunction}>
              <span>{allowance ? "Buy TFT" : "Approve"}</span>
            </button>
          </div>
        </div>
        {/* Tft Conversion End */}
      </div>
    </div>
  );
};

export default BondDiscount;
