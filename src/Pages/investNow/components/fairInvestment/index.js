import React, { useEffect, useState } from "react";
import CustomInput from "../../../../Components/customInput";
import InvesNowContentBox from "../../../../Components/invesNowContentBox";
import Investment from "./components/investment";
import "./fairInvestment.css";
import { useSelector, useDispatch } from "react-redux";
import {
  Stakinga,
  TFTApprove,
  Price,
  UnStakinga,
  claimA,
  bulkclaimA,
  stakingComp,
} from "../../../../state/ui";

const FairInvestment = () => {
  const dispatch = useDispatch();
  const TFTDollarValue = useSelector((state) => {
    return state.adoptReducer.price;
  });

  const [TFT, setTFT] = useState();

  const toggle = useSelector((state) => {
    return state.adoptReducer.toggle;
  });

  useEffect(() => {
    dispatch(stakingComp({ }));
  }, [toggle]);

  const _balance = useSelector((state) => {
    return state.adoptReducer.balance;
  });

  const _circulatingSupply = useSelector((state) => {
    return state.adoptReducer.circulatingSupply;
  });


  const tftStaked = useSelector((state) => {
    return state.adoptReducer.tftStaked;
  });

  const _TFTAllowance = useSelector((state) => {
    return state.adoptReducer.TFTAllowance;
  });

  const _indStakingInf = useSelector((state) => {
    return state.adoptReducer.indStakingInf;
  });
  const initialValue = 0;
  const initialValue2 = 0;
  var filteredInfo =
    _indStakingInf && _indStakingInf.filter((item) => item.quantity > 0);
  var amountsArray =
    _indStakingInf && _indStakingInf.map((item) => item.quantity);
  var dailyamountsArray =
    _indStakingInf && _indStakingInf.map((item) => item.daily);
  var idsArray = _indStakingInf && filteredInfo.map((item) => item.stakingId);
  var totalQuantity =
    _indStakingInf &&
    amountsArray.reduce(
      (previousValue, currentValue) =>
        Number(previousValue) + Number(currentValue),
      initialValue
    ) / 100000000;



  const dailyStaking = useSelector((state) => {
    return Number(state.adoptReducer.dailyStaking);
  });

  const monthStaking = useSelector((state) => {
    return Number(state.adoptReducer.monthStaking);
  });

  const quarterlySTaking = useSelector((state) => {
    return Number(state.adoptReducer.quarterlySTaking);
  });




  console.log("reward", filteredInfo);

  function Stake() {
    if (Number(_TFTAllowance) / 100000000 >= TFT) {
      dispatch(Stakinga({ _qty: TFT }));
      setTFT(0);
    } else {
      dispatch(TFTApprove({ quantity: TFT }));
    }
  }

  function Unstake(id) {
    dispatch(UnStakinga({ id }));
  }

  function handleClaim(id) {
    dispatch(claimA({ id }));
  }

  function bulkClaim() {
    dispatch(bulkclaimA({ id: idsArray }));
  }

  console.log("list", );

  window.ethereum.on("accountsChanged", (e, r) => {
    window.location.reload();
  });
  window.ethereum.on("chainChanged", (e, r) => {
    window.location.reload();
  });

  var currentTime = new Date().getTime() / 1000;

  console.log("price", TFTDollarValue)

  return (
    <>
      <InvesNowContentBox>
        <h5 className="df jcsb">
          <span>
            TFT Price: ${(TFTDollarValue / 1000000000000000000).toFixed(4)}
          </span>{" "}
          <span>TFT Stake Holders:{((Number(tftStaked)/Number(_circulatingSupply)*100)).toFixed(8)}%</span>
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
            OnChange={setTFT}
            belowLabel={`TFT Available : `}
            rightButtonText="Max"
            balance={ (_balance / 100000000).toFixed(4)}
            disable={_balance==0}
 

          />
        </div>
        <br />
        <div className="m0 df jcsb aic mb5">
          <span>Daily Returns ({`${dailyStaking/100}`}%): {TFT==undefined? 0 : TFT*dailyStaking/10000} TFT</span>
          {/* <div className="customOrangeBtn">CLAIM ALL</div> */}
        </div>
        <div className="m0 df jcsb aic mb5">
        <span>Monthly Bonus ({`${monthStaking}`}%): {TFT==undefined? 0 : TFT*monthStaking/100} TFT</span>
          {/* <div className="appOrangeColor">DAYS LEFT:&nbsp;12</div> */}
        </div>
        <div className="m0 df jcsb aic">
        <span>Quarterly Dividend ({`${quarterlySTaking}`}%): {TFT==undefined? 0 : (TFT * Number(TFTDollarValue) /1000000000000000000* quarterlySTaking/100).toFixed(2)} BUSD</span>
          {/* <div className="appOrangeColor">DAYS LEFT:&nbsp;05</div> */}
        </div>
        <br />
        <div className="invest-approve-btn-wrapper">
          <button 
          disabled={_balance==0}
          className="invest-approve-btn" onClick={Stake}>
            <span>
              {Number(_TFTAllowance / 100000000) >= TFT ? "Stake" : "Approve"}
            </span>
          </button>
        </div>
        {/* <div className="p0 tal m0" style={{ marginTop: "20px" }}>
          <span>Total TFT Invested: {totalQuantity} TFT</span>
        </div> */}
        {/* <div className="m0 df jcsb aic">
          <span>Total Daily Returns To Claim: {dailyAmount} TFT</span>
          <button
            onClick={() => {
              bulkClaim();
            }}
            className="customOrangeBtn"
          >
            CLAIM ALL
          </button>
        </div> */}
      </InvesNowContentBox>

      {_indStakingInf &&
        filteredInfo.map((val, key) => {
          console.log("daily", val.monthly);
          return (
            <InvesNowContentBox key={key}>
              <Investment
                index={val.stakingId}
                invested={val.quantity / 100000000}
                price={(TFTDollarValue / 1000000000000000000).toFixed(4)}
                monthly={(Number(val.monthly) / 100000000).toFixed(0)}
                quarterly={(Number(val.quarterly) / 1000000000000000000).toFixed(0)}
                daily={(Number(val.daily) / 100000000).toFixed(0)}
                dailyTime={(
                  (Number(val.timeOfInvestment) + 60 * 60 * 24 - currentTime) /
                  (60 * 60 * 24)
                ).toFixed(0)}
                monthlyTime={(
                  (Number(val.timeOfInvestment) +
                    60 * 60 * 24 * 30 -
                    currentTime) /
                  (60 * 60 * 24)
                ).toFixed(0)}
                quarterlyTime={(
                  (Number(val.timeOfInvestment) +
                    60 * 60 * 24 * 90 -
                    currentTime) /
                  (60 * 60 * 24)
                ).toFixed(0)}
                claim={handleClaim}
                withdraw={Unstake}
              />
            </InvesNowContentBox>
          );
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
