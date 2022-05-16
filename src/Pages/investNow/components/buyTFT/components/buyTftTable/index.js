import React, { useEffect } from "react";
import bnbIcon from "../../../../../../Assets/bnbIcon.png";
import busdIcon from "../../../../../../Assets/busdIcon.png";
import usdtIcon from "../../../../../../Assets/usdtIcon.png";
import "./buyTftTable.css";
import Header from "./components/header";
import Row from "./components/row";
import { useSelector, useDispatch } from "react-redux";
import {
  BUSDApprove,
  Buy,
  BuyTFTComp,
  DiscChange,
  initWeb3,
  Price,
  USDTApprove,
} from "../../../../../../state/ui";
const BuyTftTable = ({ handleBuyBUSD, handleBuyBNB, handleBuyUSDT }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    var lBNB = 0;
    var lBUSD = 0;
    var lUSDT = 0;
    dispatch(BuyTFTComp({ BNB: lBNB, BUSD: lBUSD, USDT: lUSDT }));
  }, []);

  const TFTDollarValue = useSelector((state) => {
    return state.adoptReducer.price;
  });

  const _discount = useSelector((state) => {
    return state.adoptReducer.discount;
  });

  const _discountUSD = useSelector((state) => {
    return state.adoptReducer.discountUSD;
  });

  return (
    <div>
      <table className="buy-tft-table">
        <Header />
        <tbody>
          <br />
          <Row
            icon={busdIcon}
            currency="BUSD"
            discount={`${_discountUSD}%`}
            tftPrice={(
              (Number(TFTDollarValue) / 1000000000000000000) *
              (1 - _discountUSD / 100)
            ).toFixed(5)}
            handleBuyAtDiscountClick={() => handleBuyBUSD()}
          />
          <br />
          <Row
            icon={bnbIcon}
            currency="BNB"
            discount={`${_discount}%`}
            tftPrice={(
              (Number(TFTDollarValue) / 1000000000000000000) *
              (1 - _discount / 100)
            ).toFixed(5)}
            handleBuyAtDiscountClick={() => handleBuyBNB()}
          />
          <br />
          <Row
            icon={usdtIcon}
            currency="USDT"
            discount={`${_discountUSD}%`}
            tftPrice={(
              (Number(TFTDollarValue) / 1000000000000000000) *
              (1 - _discountUSD / 100)
            ).toFixed(5)}
            handleBuyAtDiscountClick={() => handleBuyUSDT()}
          />
        </tbody>
      </table>
    </div>
  );
};

export default BuyTftTable;
