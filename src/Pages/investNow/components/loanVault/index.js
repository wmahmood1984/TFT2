import React, { useState, useEffect } from "react";
import LoanInvestment from "./components/loanInvestment";
import LoanTerm from "./components/loanTerm";
import "./loanVault.css";
import { useSelector, useDispatch } from "react-redux";
import {
  LStakinga,
  TFTApprove,
  Price,
  LUnStakinga,
  BUSDApprove,
} from "../../../../state/ui";
const LoanVault = () => {
  const dispatch = useDispatch();

  const [TFT30, setTFT30] = useState();
  const [TFT45, setTFT45] = useState();
  const [Scheme, setScheme] = useState();

  const toggle = useSelector((state) => {
    return state.adoptReducer.toggle;
  });

  useEffect(() => {
    dispatch(Price({ BNB: 0, BUSD: 0, USDT: 0 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);

  const _TFTAllowance = useSelector((state) => {
    return state.adoptReducer.TFTAllowance;
  });

  const _balance = useSelector((state) => {
    return state.adoptReducer.balance;
  });

  const _indStakingInf = useSelector((state) => {
    return state.adoptReducer.indLoanInf;
  });

  //var _indStakingInf = _indStakingInf && _indStakingInf.filter(item=>item.quantity>0)

  const _BUSDAllowance = useSelector((state) => {
    return state.adoptReducer.BUSDAllowance;
  });
  console.log("allowance", _indStakingInf);

  function Stake30() {
    if (Number(_TFTAllowance) / 100000000 >= TFT30) {
      dispatch(LStakinga({ _qty: TFT30, Scheme: 1 }));
      setTFT30(0);
    } else {
      dispatch(TFTApprove({ quantity: TFT30 }));
    }
  }

  function Unstake30(id, dollar) {
    if (Number(_BUSDAllowance) / 1000000000000000000 >= dollar) {
      dispatch(LUnStakinga({ id, Scheme: 1 }));
    } else {
      dispatch(BUSDApprove({ quantity: dollar }));
    }
  }

  function Stake45() {
    if (Number(_TFTAllowance) / 100000000 >= TFT45) {
      dispatch(LStakinga({ _qty: TFT45, Scheme: 2 }));
      setTFT45(0);
    } else {
      dispatch(TFTApprove({ quantity: TFT45 }));
    }
  }

  function Unstake45(id, dollar) {
    if (Number(_BUSDAllowance) / 1000000000000000000 >= dollar) {
      dispatch(LUnStakinga({ id, Scheme: 2 }));
    } else {
      dispatch(BUSDApprove({ quantity: dollar }));
    }
  }

  window.ethereum.on("accountsChanged", (e, r) => {
    window.location.reload();
  });
  window.ethereum.on("chainChanged", (e, r) => {
    window.location.reload();
  });

  var currentTime = new Date().getTime() / 1000;
  return (
    <div className="loanVault-main-wrapper">
      <div className="loanTerm-wrapper">
        <LoanTerm
          headingText="30 Days Term"
          interestPaidPercentageValue="0.1"
          busdLoanAvailablePercentageValue="50"
          value={TFT30}
          setValue={setTFT30}
          TFTAvailable={(_balance / 100000000).toFixed(2)}
          stakeFunction={Stake30}
          allowance={Number(_TFTAllowance / 100000000) >= TFT30}
          disable={_indStakingInf && _indStakingInf[0].dollarGiven > 0}
          dollar={
            _indStakingInf &&
            (_indStakingInf[0].dollarGiven / 1000000000000000000).toFixed(2)
          }
        />
        <LoanTerm
          headingText="45 Days Term"
          interestPaidPercentageValue="0.2"
          busdLoanAvailablePercentageValue="50"
          value={TFT45}
          setValue={setTFT45}
          TFTAvailable={(_balance / 100000000).toFixed(2)}
          stakeFunction={Stake45}
          allowance={Number(_TFTAllowance / 100000000) >= TFT45}
          disable={_indStakingInf && _indStakingInf[1].dollarGiven > 0}
          dollar={
            _indStakingInf &&
            (_indStakingInf[1].dollarGiven / 1000000000000000000).toFixed(2)
          }
        />
      </div>
      <div className="loanInvestment-wrapper">
        <LoanInvestment
          headingText="30 Days Term"
          interestPaidPercentageValue="0.2"
          busdLoanAvailablePercentageValue="50"
          tft={
            _indStakingInf &&
            (_indStakingInf[0].quantity / 100000000).toFixed(2)
          }
          daily={
            _indStakingInf && (_indStakingInf[0].daily / 100000000).toFixed(2)
          }
          dollar={
            _indStakingInf &&
            (_indStakingInf[0].dollarGiven / 1000000000000000000).toFixed(2)
          }
          withdraw={Unstake30}
          index={_indStakingInf && _indStakingInf[0].stakingId}
          allowance={
            _indStakingInf &&
            Number(_BUSDAllowance) >= Number(_indStakingInf[0].dollarGiven)
          }
          disable={_indStakingInf && _indStakingInf[0].dollarGiven == 0}
        />
        <LoanInvestment
          headingText="45 Days Term"
          interestPaidPercentageValue="0.2"
          busdLoanAvailablePercentageValue="50"
          tft={
            _indStakingInf &&
            (_indStakingInf[1].quantity / 100000000).toFixed(2)
          }
          daily={
            _indStakingInf && (_indStakingInf[1].daily / 100000000).toFixed(2)
          }
          dollar={
            _indStakingInf &&
            (_indStakingInf[1].dollarGiven / 1000000000000000000).toFixed(2)
          }
          withdraw={Unstake45}
          index={_indStakingInf && _indStakingInf[1].stakingId}
          allowance={
            _indStakingInf &&
            Number(_BUSDAllowance) >= Number(_indStakingInf[1].dollarGiven)
          }
          disable={_indStakingInf && _indStakingInf[1].dollarGiven == 0}
        />
      </div>
    </div>
  );
};

export default LoanVault;
