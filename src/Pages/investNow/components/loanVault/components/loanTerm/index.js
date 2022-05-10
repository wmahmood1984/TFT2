import React from "react";
import CustomInput from "../../../../../../Components/customInput";
import ticvector from "../../../../../../Assets/ticvector.png";
import "./loanTerm.css";

const LoanTerm = ({
  headingText,
  interestPaidPercentageValue,
  busdLoanAvailablePercentageValue,
  value,
  setValue,
  TFTAvailable,
  stakeFunction,
  allowance,
  disable,
  dollar,
  setValue2,
  EOT,
}) => {
  console.log("disable in loand", disable);
  return (
    <div className="loanTerm-main-wrapper">
      <div className="term-title-wrapper">
        {/* <h5>30 Days Term</h5> */}
        {headingText}
      </div>
      <div className="interest-box-wrapper">
        <div className="d-interest">
          <p>
            <img src={ticvector} alt="ticvector" />
            Daily Interests Paid:&nbsp;
            <span style={{ color: "#D45E2C" }}>
              {interestPaidPercentageValue}%
            </span>
          </p>
        </div>
        <div className="d-interest">
          <p>
            <img src={ticvector} alt="ticvector" />
            BUSD Loan Available:&nbsp;
            <span style={{ color: "#D45E2C" }}>
              {busdLoanAvailablePercentageValue}%
            </span>
          </p>
        </div>
      </div>
      <div className="interest-input-wrapper">
        <CustomInput
          lable="BUSD"
          enterLable={`Deposit TFT`}
          placeholder={`TFT AMOUNT`}
          value={value}
          disable={disable}
          OnChange={(e) => {
            setValue(e);
            setValue2(e);
          }}
          belowLabel={`TFT Available `}
          rightButtonText="Max"
          balance={TFTAvailable}
        />
      </div>
      <div className="receiveBusd-wrapper">
        <p style={{ background: "#FBFBFB" }}>
          Receive BUSD:
          <span style={{ color: "#D45E2C" }}>${dollar}</span>
        </p>
        <p>
          End Of Term Interest Earned:
          <span style={{ color: "#D45E2C" }}>{EOT} TFT</span>
        </p>
      </div>
      <div className="depositApprove-btn-wrapper">
        <button
          disabled={disable}
          onClick={stakeFunction}
          className="deposit-Approve-btn"
        >
          <span>{allowance ? "Deposit" : "Approve"}</span>
        </button>
      </div>
    </div>
  );
};

export default LoanTerm;
