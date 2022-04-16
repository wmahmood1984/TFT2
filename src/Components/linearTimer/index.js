import React from "react";
import "./linearTimer.css";

const LinearTimer = () => {
  return (
    <div className="linearTimer-main-wrapper">
      <div className="uper-text-wrapper">
        <div className="start">Start</div>
        <div className="middle-timer-text">30d : 15h : 20m : 01s</div>
        <div className="end">End</div>
      </div>
      <div className="timer-Line-wrapper">
        <div className="line">
          <div className="movingCircle">
            <i className="ri-arrow-right-s-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinearTimer;
