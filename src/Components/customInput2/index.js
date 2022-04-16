import React, { useState } from "react";
import "./customInput.css";

const CustomInput = ({
  lable,
  enterLable,
  placeholder,
  value,
  belowLabel,
  rightButtonText,
  OnChange,
  balance,
  rightFunction,
  allowance
}) => {
  const [maxClicked,setMaxClicked] = useState(false)
  console.log("allowance in function",allowance)
  return (
    <div className="form-group mb-0">
      <label className="sr-only" htmlFor="inlineFormInputGroupUsername">
        {/* BUSD */}
        {lable}
      </label>
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            {/* Enter BUSD */}
            {enterLable}
          </div>
        </div>
        <input
          type="value"
          className="form-control"
          id="inlineFormInputGroupUsername"
          //   placeholder="BUSD AMOUNT"
          placeholder={placeholder}
          onChange={(e)=>{setMaxClicked(false); OnChange(e.target.value)}}
          value={maxClicked? balance :  value}
        />
        <button className="max-btn" onClick=
        
        {()=>{rightFunction()}}>
          
          <span>{allowance ? "Buy Tickets" :  "APPROVE"}</span>
        </button>
      </div>
      <p
        id="busdHelp"
        className="form-text text-muted busd-small-text mb-0"
        style={{ textAlign: "left" }}
      >
        {/* BUSD Available <span className="text-orange">0</span> */}
        {belowLabel} <span className="text-orange">{balance}</span>
      </p>
    </div>
  );
};

export default CustomInput;
