import { CircularProgress } from "@material-ui/core";
import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <CircularProgress style={{ color: "#1CCAFF" }} />
    </div>
  );
};

export default Loader;
