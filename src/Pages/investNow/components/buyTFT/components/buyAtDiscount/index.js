import React, { useEffect, useState } from "react";
import "./buyAtDiscount.css";
import bnbIcon from "../../../../../../Assets/bnbIcon.png";
import busdIcon from "../../../../../../Assets/busdIcon.png";
import usdtIcon from "../../../../../../Assets/usdtIcon.png";
import BondDiscount from "./components/bondDiscount";
import { useSelector, useDispatch } from "react-redux";
import { BUSDAddress, USDTAddress } from "../../../../../../config";

import {
  BUSDApprove,
  Buy,
  BuyTFTComp,
  DiscChange,
  initWeb3,
  Price,
  USDTApprove,
} from "../../../../../../state/ui";

const BuyAtDiscount = () => {
  const dispatch = useDispatch();
  const [BNB, setBNB] = useState(0);
  const [BUSD, setBUSD] = useState(0);
  const [USDT, setUSDT] = useState(0);
  const _discount = useSelector((state) => {
    return state.adoptReducer.discount;
  });
  const [Disc, setDisc] = useState(0);

  const _price = useSelector((state) => {
    return state.adoptReducer.price;
  });

  const _balance = useSelector((state) => {
    return state.adoptReducer.balance;
  });

  const _BUSDbalance = useSelector((state) => {
    return state.adoptReducer.BUSDbalance;
  });

  const _USDTbalance = useSelector((state) => {
    return state.adoptReducer.USDTbalance;
  });

  const _BUSDAllowance = useSelector((state) => {
    return state.adoptReducer.BUSDAllowance;
  });

  const _USDTAllowance = useSelector((state) => {
    return state.adoptReducer.USDTAllowance;
  });

  const toggle = useSelector((state) => {
    return state.adoptReducer.toggle;
  });

  const BNBBalance = useSelector((state) => {
    return state.adoptReducer.BNBBalance;
  });

  const TFTDollarValue = useSelector((state) => {
    return state.adoptReducer.price;
  });

  const USDtoTFT1 = useSelector((state) => {
    return state.adoptReducer.USDtoTFT1;
  });

  const USDTtoTFT1 = useSelector((state) => {
    return state.adoptReducer.USDTtoTFT1;
  });

  const BNBtoTFT = useSelector((state) => {
    return state.adoptReducer.BNBtoTFT;
  });

  window.ethereum.on("accountsChanged", (e, r) => {
    window.location.reload();
  });
  window.ethereum.on("chainChanged", (e, r) => {
    window.location.reload();
  });

  useEffect(() => {
    var lBNB = BNB ? BNB : 0;
    var lBUSD = BUSD ? BUSD : 0;
    var lUSDT = USDT ? USDT : 0;
    dispatch(BuyTFTComp({ BNB: lBNB, BUSD: lBUSD, USDT: lUSDT }));
  }, [BNB, BUSD, toggle, USDT]);

  console.log("BUSD allowance ", _BUSDAllowance);

  async function Invest() {
    if (BNB > 0) {
      dispatch(Buy({ quantity: 0, value: BNB, usdCon: BUSDAddress }));
      setBNB(0);
    } else if (BUSD > 0) {
      if (_BUSDAllowance / 100000000000000000 >= BUSD) {
        console.log("Investment busd called");
        dispatch(Buy({ quantity: BUSD, value: BNB, usdCon: BUSDAddress }));
        setBUSD(0);
      } else {
        dispatch(BUSDApprove({ quantity: BUSD }));
      }
    } else {
      if (_USDTAllowance / 1000000000000000000 >= USDT) {
        console.log("Investment USDT Called");
        dispatch(Buy({ quantity: USDT, value: BNB, usdCon: USDTAddress }));
        setUSDT(0);
      } else {
        dispatch(USDTApprove({ quantity: USDT }));
      }
    }
  }

  async function handleDiscount() {
    setDisc(0);
    dispatch(DiscChange({ Disc }));
  }
  return (
    <div className="buyAtDiscount-wrapper">
      <>
        <BondDiscount
          headingIcon={busdIcon}
          currency="BUSD"
          onCurrencyChange={setBUSD}
          value={BUSD}
          balance={(_BUSDbalance / 1000000000000000000).toFixed(2)}
          TFTValue={(
            (Number(USDtoTFT1) * (1 + _discount / 100)) /
            100000000
          ).toFixed(4)}
          BuyFunction={Invest}
          discount={_discount}
          LivePrice={(TFTDollarValue / 1000000000000000000).toFixed(4)}
          allowance={Number(_BUSDAllowance / 1000000000000000000) >= BUSD}
          disable={_BUSDbalance == 0}
        />
        <BondDiscount
          headingIcon={bnbIcon}
          currency="BNB"
          onCurrencyChange={setBNB}
          value={BNB}
          balance={(BNBBalance / 1000000000000000000).toFixed(2)}
          TFTValue={((BNBtoTFT / 100000000) * (1 + _discount / 100)).toFixed(2)}
          BuyFunction={Invest}
          discount={_discount}
          LivePrice={(TFTDollarValue / 1000000000000000000).toFixed(4)}
          allowance={true}
          disable={BNBBalance == 0}
        />
        <BondDiscount
          headingIcon={usdtIcon}
          currency="USDT"
          onCurrencyChange={setUSDT}
          value={USDT}
          BuyFunction={Invest}
          balance={(_USDTbalance / 1000000000000000000).toFixed(2)}
          TFTValue={(
            (Number(USDTtoTFT1) * (1 + _discount / 100)) /
            100000000
          ).toFixed(4)}
          discount={_discount}
          LivePrice={(TFTDollarValue / 1000000000000000000).toFixed(4)}
          allowance={Number(_USDTAllowance / 1000000000000000000) >= USDT}
          disable={_USDTbalance == 0}
        />
      </>
    </div>
  );
};

export default BuyAtDiscount;
