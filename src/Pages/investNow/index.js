import React, { useState } from "react";
// import React, { useEffect } from "react";
import Footer from "../../Components/footer";
import Header from "../../Components/header";
import SideBar from "./components/sideBar";
import "./investNow.css";
import ContentArea from "./components/contentArea";
// import { useSelector, useDispatch } from "react-redux";
// import { setTest } from "../../state/ui";

const InvestNow = () => {
  const [dashboard, setDashboard] = useState(true);
  const [buyTft, setBuyTft] = useState(false);
  const [buyAtDiscount, setBuyAtDiscount] = useState(false);
  const [buyAtMarket, setBuyAtMarket] = useState(false);
  const [fairInvestment, setFairInvestment] = useState(false);
  const [loanVault, setLoanVault] = useState(false);
  const [oneFor10X, setOneFor10X] = useState(false);
  const [airDrop, setAirDrop] = useState(false);

  // const dispatch = useDispatch();

  // const handleTest = () => {
  //   dispatch(setTest({ name: "khurram", roll: 91 }));
  // };
  // const Test = useSelector((state) => {
  //   return state.adoptReducer.test;
  // });

  // useEffect(() => {
  //   handleTest();
  // }, []);

  const handleBuyAtDiscountClick = () => {
    setDashboard(false);
    setBuyTft(false);
    setBuyAtDiscount(true);
    setBuyAtMarket(false);
    setFairInvestment(false);
    setLoanVault(false);
    setOneFor10X(false);
    setAirDrop(false);
  };
  const handleBuyAtMarketClick = () => {
    setDashboard(false);
    setBuyTft(false);
    setBuyAtDiscount(false);
    setBuyAtMarket(true);
    setFairInvestment(false);
    setLoanVault(false);
    setOneFor10X(false);
    setAirDrop(false);
  };

  return (
    <>
      <Header
        buyTft
        handleBuyAtDiscountClick={handleBuyAtDiscountClick}
        handleBuyAtMarketClick={handleBuyAtMarketClick}
      />
      {/* SideBar */}
      <div className="investnow-content df">
        <SideBar
          dashboard={dashboard}
          buyTft={buyTft}
          buyAtDiscount={buyAtDiscount}
          buyAtMarket={buyAtMarket}
          fairInvestment={fairInvestment}
          loanVault={loanVault}
          oneFor10X={oneFor10X}
          airDrop={airDrop}
          setDashboard={setDashboard}
          setBuyTft={setBuyTft}
          setBuyAtDiscount={setBuyAtDiscount}
          setBuyAtMarket={setBuyAtMarket}
          setFairInvestment={setFairInvestment}
          setLoanVault={setLoanVault}
          setOneFor10X={setOneFor10X}
          setAirDrop={setAirDrop}
          handleBuyAtDiscountClick={handleBuyAtDiscountClick}
          handleBuyAtMarketClick={handleBuyAtMarketClick}
        />
        <ContentArea
          dashboard={dashboard}
          buyTft={buyTft}
          buyAtDiscount={buyAtDiscount}
          buyAtMarket={buyAtMarket}
          fairInvestment={fairInvestment}
          loanVault={loanVault}
          oneFor10X={oneFor10X}
          airDrop={airDrop}
          handleBuyAtDiscountClick={handleBuyAtDiscountClick}
          handleBuyAtMarketClick={handleBuyAtMarketClick}
        />
      </div>
      <Footer />
    </>
  );
};

export default InvestNow;
