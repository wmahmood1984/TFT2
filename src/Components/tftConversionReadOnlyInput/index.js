import React from "react";

const TftConversionReadOnlyInput = ({value}) => {
  return (
    <div className="form-group">
      <label className="sr-only" htmlFor="inlineFormInputGroupUsername">
        Username
      </label>
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">TFT Coversion</div>
        </div>
        <input
          style={{ backgroundColor: "#FFFFFF" }}
          type="value"
          className="form-control"
          id="inlineFormInputGroupUsername"
          placeholder="TFT AMOUNT"
          value={value}
          readOnly
        />
      </div>
    </div>
  );
};

export default TftConversionReadOnlyInput;
