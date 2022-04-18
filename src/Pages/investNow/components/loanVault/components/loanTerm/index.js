import React from "react";
import CustomInput from "../../../../../../Components/customInput";
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
  EOT
}) => {

  return (
    <div className="loanTerm-main-wrapper">
      <div className="term-title-wrapper">
        {/* <h5>30 Days Term</h5> */}
        <h5>{headingText}</h5>
      </div>
      <div className="interest-box-wrapper">
        <div className="inerest-box">
          <p>
            Daily Interests <br />
            Paid {interestPaidPercentageValue}%
          </p>
        </div>
        <div className="inerest-box right">
          <p>
            BUSD Loan
            <br />
            Available {busdLoanAvailablePercentageValue}%
          </p>
        </div>
      </div>
      <div className="interest-input-wrapper">
        <CustomInput
          lable="BUSD"
          enterLable={`Deposit TFT`}
          placeholder={`TFT AMOUNT`}
          value={value}
          OnChange={(e)=>{

            setValue(e);setValue2(e)}}
          belowLabel={`TFT Available ${TFTAvailable}`}
          rightButtonText="Max"
        />
      </div>
      <div className="receiveBusd-wrapper">
        <p>
          Receive BUSD: ${dollar} <br />
          End Of Term Interest Earned: {EOT} TFT
        </p>
      </div>
      <div className="depositApprove-btn-wrapper">
        <button
          disabled={disable}
          onClick={stakeFunction}
          className="deposit-Approve-btn"
        >
          <span>{allowance ? "Stake" : "Approve"}</span>
        </button>
      </div>
    </div>
  );
};

export default LoanTerm;
