import React from "react";
import CustomInput from "../../../../../../Components/customInput";
import LinearTimer from "../../../../../../Components/linearTimer";
import "./loanInvestment.css";

const LoanInvestment = ({
  headingText,
  interestPaidPercentageValue,
  busdLoanAvailablePercentageValue,
  tft,
  daily,
  dollar,
  withdraw,
  index,
  allowance,
  disable,
  time,
}) => {
  return (
    <div className="loanTerm-main-wrapper">
      <div className="term-title-wrapper">
        {/* <h5>30 Days Term</h5> */}
        <h5>{headingText}</h5>
      </div>
      <div className="linearTimer-wrapper">
        <LinearTimer time={time} />
      </div>
      <div className="tftDeposited-wrapper">
        <div style={{ padding: "10px 20px" }}>
          TFT Deposited: <span className="orange-color">{tft} TFT</span>
        </div>
        <p style={{ background: "#FBFBFB" }}>
          0.1% Daily Investment Earned:{" "}
          <span className="orange-color">{daily} TFT</span>
        </p>
        <p>
          To Withdraw TFT, Repay BUSD Loan:{" "}
          <span className="orange-color">{dollar} BUSD</span>
        </p>
      </div>
      <div className="depositApprove-btn-wrapper">
        <button
          disabled={disable}
          onClick={() => {
            withdraw(index, dollar);
          }}
          className="deposit-Approve-btn"
        >
          <span>{allowance ? "CONFIRM" : "REPAY"}</span>
        </button>
      </div>
    </div>
  );
};

export default LoanInvestment;
