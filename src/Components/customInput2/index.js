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
  allowance,
  disable,
}) => {
  const [maxClicked, setMaxClicked] = useState(false);

  return (
    <div className="form-group mb-0">
      <label className="sr-only" htmlFor="inlineFormInputGroupUsername">
        {/* BUSD */}
        {lable}
      </label>
      <div className="input-group">
        <div className="input-group-prepend">
          <div
            className="input-group-text"
            style={{ border: "1px solid #2F5D8E" }}
          >
            {/* Enter BUSD */}
            {enterLable}
          </div>
        </div>
        <input
          type="value"
          className="form-control"
          id="inlineFormInputGroupUsername"
          //   placeholder="BUSD AMOUNT"
          disabled={disable}
          placeholder={placeholder}
          onChange={(e) => {
            setMaxClicked(false);
            OnChange(e.target.value);
          }}
          value={maxClicked ? balance : value}
        />
        <button
          className="max-btn"
          disabled={disable}
          onClick={() => {
            rightFunction();
          }}
        >
          <span>{allowance ? "Buy Tickets" : "APPROVE"}</span>
        </button>
      </div>
      <p
        id="busdHelp"
        className="form-text text-muted busd-small-text mb-0"
        style={{ textAlign: "left" }}
      >
        {/* BUSD Available <span className="text-orange">0</span> */}
        <span style={{ color: "#2F5D8E" }}>{belowLabel}</span>{" "}
        <span className="text-orange">{balance}</span>
      </p>
    </div>
  );
};

export default CustomInput;
