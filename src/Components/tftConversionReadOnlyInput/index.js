import React from "react";

const TftConversionReadOnlyInput = ({ value }) => {
  return (
    <div className="form-group">
      <label className="sr-only" htmlFor="inlineFormInputGroupUsername">
        Username
      </label>
      <div className="input-group">
        <div className="input-group-prepend">
          <div
            className="input-group-text"
            style={{ border: "1px solid #2F5D8E" }}
          >
            TFT Coversion
          </div>
        </div>
        <input
          style={{ backgroundColor: "#EFEFEF" }}
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
