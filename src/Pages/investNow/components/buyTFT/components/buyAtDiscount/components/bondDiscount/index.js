import React from "react";
import CustomInput from "../../../../../../../../Components/customInput";
import TftConversionReadOnlyInput from "../../../../../../../../Components/tftConversionReadOnlyInput";
import "./bondDiscount.css";

const BondDiscount = ({disable, headingIcon, currency,onCurrencyChange,value,balance,TFTValue,BuyFunction,discount,LivePrice,allowance }) => {
  console.log("allowance in bonddiscount",allowance)
  return (
    <div className="bondDiscount-wraooer">
      <h4 className="bondDiscount-heading">
        <img src={headingIcon} alt="bnbIcon" />
        &nbsp;&nbsp;
        {currency}
      </h4>
      <h5 className="bondDiscountOnTFT">
        <span>Discount On TFT</span> <span>{discount}%</span>
      </h5>
      <h5 className="bondDiscountOnTFT1">
        <span>TFT Price</span> <span>{LivePrice}</span>
      </h5>

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

        <br />
        {/* Tft Conversion Start */}
        <div className="tft-conversion-wrapper">
          <div className="left">
            <TftConversionReadOnlyInput value={TFTValue}/>
          </div>
          <div className="right">
            <button className="buyButton"
            disabled={disable}
            onClick={BuyFunction}
            >
              <span>{allowance ? "Buy tft" : "Approve"}</span>
            </button>
          </div>
        </div>
      </div>
      {/* Tft Conversion End */}
    </div>
  );
};

export default BondDiscount;
