import React from "react";
import "./header.css";

const Header = () => {
  return (
    <thead className="table-header">
      <tr>
        <th>CURRENCY</th>
        <th>DISCOUNT</th>
        <th>TFT PRICE</th>
        <th>ACTIONS</th>
      </tr>
    </thead>
  );
};

export default Header;
