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
  disable
}) => {
  const [maxClicked,setMaxClicked] = useState(false)
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
          disabled={disable}
          //   placeholder="BUSD AMOUNT"
          placeholder={placeholder}
          onChange={(e)=>{ OnChange(e.target.value)}}
          value={value}
        />
        <button className="max-btn" onClick=
        
        {()=>{OnChange(balance)}}>
          
          <span>{rightButtonText}</span>
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
