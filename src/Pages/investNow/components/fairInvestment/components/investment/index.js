import React from "react";
import "./investment.css";

const Investment = ({ index, invested, price, monthly,quarterly,daily, dailyTime,monthlyTime,quarterlyTime,claim ,withdraw}) => {
  return (
    <>
      <h5 className="df jcsb">INVESTMENT{index+1}</h5>
      <h6 className="df jcsb mt30">
        <span>TFT Invested: {invested}</span> <span>TFT Price:{price}</span>
      </h6>
      <div className="m0 df jcsb aic mb5">
        <span>Daily Returns (0.16%): {daily} TFT</span>
        <button  
        onClick={()=>{claim(index)}}
        className="customOrangeBtn">CLAIM ALL</button>
      </div>
      <div className="m0 df jcsb aic mb5">
        <span>Monthly Bonus (5%): {monthly} TFT</span>
        <div className="appOrangeColor">DAYS LEFT:&nbsp;{monthlyTime}</div>
      </div>
      <div className="m0 df jcsb aic">
        <span>Quarterly Dividend (10%):{quarterly} BUSD</span>
        <div className="appOrangeColor">DAYS LEFT:&nbsp;{quarterlyTime}</div>
      </div>
      <div className="mt20">
        <button 
        onClick={()=>{withdraw(index)}}
        className="withdraw-btn">
          <span>WITHDRAW INVESTMENT</span>
        </button>
      </div>
    </>
  );
};

export default Investment;
