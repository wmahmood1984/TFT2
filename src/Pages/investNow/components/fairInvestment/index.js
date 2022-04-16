import React, { useEffect, useState } from 'react'
import CustomInput from "../../../../Components/customInput";
import InvesNowContentBox from "../../../../Components/invesNowContentBox";
import Investment from "./components/investment";
import "./fairInvestment.css";
import { useSelector,useDispatch } from 'react-redux'
import { Stakinga, TFTApprove, Price, UnStakinga,claimA, bulkclaimA } from '../../../../state/ui';


const FairInvestment = () => {
  const dispatch = useDispatch()
  const TFTDollarValue = useSelector((state)=>{
    return  state.adoptReducer.TFTDollarValue; 
   
   });

   const [ TFT,setTFT] = useState();

   const toggle = useSelector((state)=>{
       return  state.adoptReducer.toggle; 
      
      });

   useEffect(()=>{


       dispatch(Price({BNB:0,BUSD:0,USDT:0}))
   
     },[toggle])

     const _balance = useSelector((state)=>{
      return  state.adoptReducer.balance; 
     
     });

   const _TFTAllowance = useSelector((state)=>{
       return  state.adoptReducer.TFTAllowance; 
      
      });
   
   const _indStakingInf = useSelector((state)=>{
       return  state.adoptReducer.indStakingInf; 
      
      });
      const initialValue = 0;
      const initialValue2 = 0;
   var filteredInfo = _indStakingInf && _indStakingInf.filter(item=>item.quantity>0)
   var amountsArray = _indStakingInf && _indStakingInf.map(item=>item.quantity)
   var dailyamountsArray = _indStakingInf && _indStakingInf.map(item=>item.daily)
   var idsArray = _indStakingInf && filteredInfo.map(item=>item.stakingId)
   var totalQuantity = _indStakingInf && amountsArray.reduce(
    (previousValue, currentValue) => Number(previousValue) + Number(currentValue) , initialValue
  )/100000000;

  var dailyAmount = _indStakingInf && dailyamountsArray.reduce(
    (previousValue, currentValue) => Number(previousValue) + Number(currentValue), initialValue2
  )/100000000;



   const _indRewardInf = useSelector((state)=>{
       return  state.adoptReducer.indRewardInf; 
      
      });

    console.log("reward", amountsArray)  
 
        
   function Stake() {
       if( Number(_TFTAllowance)/100000000 >= TFT){
           dispatch(Stakinga({_qty:TFT}))
           setTFT(0)
       }else{
           dispatch(TFTApprove({quantity :  TFT}))
       }
   }

   function Unstake(id){
       dispatch(UnStakinga({id}))
   }

  function handleClaim(id){
    dispatch(claimA({id}))
  }

  function bulkClaim(){
    dispatch(bulkclaimA({id :  idsArray}))
  }

   console.log("list",idsArray)

   window.ethereum.on("accountsChanged",(e,r)=>{window.location.reload()})
   window.ethereum.on("chainChanged",(e,r)=>{window.location.reload()})
   
   var currentTime = new Date().getTime() / 1000


  return (
    <>
      <InvesNowContentBox>
        <h5 className="df jcsb">
          <span>TFT Price: ${(TFTDollarValue/1000000000000000000).toFixed(4)}</span> <span>TFT Stake Holders:30%</span>
        </h5>
        <div className="investNow-btn-wrapper">
          <h4 className="investNow-heading mt30">INVEST NOW</h4>
        </div>
        <div className="mt30">
          <CustomInput
            lable="BUSD"
            enterLable={`Enter TFT`}
            placeholder={`TFT AMOUNT`}
            value={TFT}
            OnChange ={setTFT}
            belowLabel={`TFT Available :  ${(_balance/100000000).toFixed(4)}`}
          />
        </div>
        <div className="invest-approve-btn-wrapper">
          <button className="invest-approve-btn"
          onClick={Stake}
          >
            <span>{Number(_TFTAllowance/100000000) >= TFT ?  "Stake" : "Approve"}</span>
          </button>
        </div>
        <div className="p0 tal m0" style={{ marginTop: "20px" }}>
          <span>Total TFT Invested: {totalQuantity} TFT</span>
        </div>
        <div className="m0 df jcsb aic">
          <span>Total Daily Returns To Claim: {dailyAmount} TFT</span>
          <button 
          onClick={()=>{bulkClaim()}}
          className="customOrangeBtn">CLAIM ALL</button>
        </div>
      </InvesNowContentBox>

      {_indStakingInf &&  filteredInfo.map((val, key) => {
        console.log("daily",val.monthly)
        return(
          <InvesNowContentBox key={key}>
          <Investment index={key}
          invested = {val.quantity/100000000}
          price={(TFTDollarValue/1000000000000000000).toFixed(4)}
          monthly={(Number(val.monthly)/100000000).toFixed(0)}
          quarterly={(Number(val.quarterly)/100000000).toFixed(0)}
          daily={(Number(val.daily)/100000000).toFixed(0)}
          dailyTime={((Number(val.timeOfInvestment)+(60*60*24)-currentTime)/(60*60*24)).toFixed(0)}
          monthlyTime={((Number(val.timeOfInvestment)+(60*60*24*30)-currentTime)/(60*60*24)).toFixed(0)}
          quarterlyTime={((Number(val.timeOfInvestment)+(60*60*24*90)-currentTime)/(60*60*24)).toFixed(0)}
          claim = {handleClaim}
          withdraw = {Unstake}
          />
          </InvesNowContentBox>
        )
        
      })}
      {/* <InvesNowContentBox>
        <Investment index={1} />
      </InvesNowContentBox>
      <InvesNowContentBox>
        <Investment index={2} />
      </InvesNowContentBox>
      <InvesNowContentBox>
        <Investment index={3} />
      </InvesNowContentBox> */}
    </>
  );
};

export default FairInvestment;