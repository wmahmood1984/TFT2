import React from "react";
import "./investment.css";

const Investment = ({ReInvest, index, invested, price, monthly,quarterly,daily, dailyTime,monthlyTime,quarterlyTime,claim ,withdraw, dailyClaim,monthlyClaim,quarterlyClaim}) => {
  console.log("monthly time",monthlyTime)
  return (
    <>
      <h5 className="df jcsb">INVESTMENT{Number(index)+1}</h5>
      <h6 className="df jcsb mt30">
        <span>TFT Invested: {invested}</span> <span>TFT Price:{price}</span>
      </h6>
      <div className="m0 df jcsb aic mb5">
        <span>Daily Returns (0.16%): {daily} TFT</span>
        <button  
        onClick={()=>{dailyClaim(index)}}
        className="customOrangeBtn">CLAIM DAILY</button>
      </div>
      <div className="m0 df jcsb aic mb5">
        <span>Monthly Bonus (5%): {monthly} TFT</span>
        {monthlyTime>0 ? 
        <div className="appOrangeColor">DAYS LEFT:&nbsp;{monthlyTime}</div>:
        <button  
        onClick={()=>{monthlyClaim(index)}}
        className="customOrangeBtn">CLAIM MONTHLY</button>}

      </div>
      <div className="m0 df jcsb aic">
        <span>Quarterly Dividend (10%):{quarterly} BUSD</span>
        {quarterlyTime>0 ? 
        <div className="appOrangeColor">DAYS LEFT:&nbsp;{quarterlyTime}</div>:
        <button  
        onClick={()=>{quarterlyClaim(index)}}
        className="customOrangeBtn">CLAIM QUARTERLY</button>}
      </div>
      <div className="mt20">
        <button 
        onClick={()=>{claim(index)}}
        className="withdraw-btn">
          <span>CLAIM ALL</span>
        </button>
      </div>
      <div className="mt20">
        <button 
        onClick={()=>{withdraw(index)}}
        className="withdraw-btn">
          <span>WITHDRAW INVESTMENT</span>
        </button>
      </div>
      <div className="mt20">
        <button 
        onClick={()=>{ReInvest(index)}}
        className="withdraw-btn">
          <span>CLAIM & REINVEST</span>
        </button>
      </div>
    </>
  );
};

export default Investment;
