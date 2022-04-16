import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router";
import Main from "./Main";
import InstantBuy from "./Pages/InstantBuy";
import Staking from "./Pages/Staking";
import Loan from "./Pages/Loan";
import AdminA from "./Pages/Admin";
import InvestNow from "./Pages/investNow";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/:referrer" element={<Main></Main>}></Route>
        <Route path="Invest" element={<InvestNow />}></Route>
        {/* <Route path="Invest" element={<Home></Home>}></Route> */}
        {/* <Route path="Invest/:referrer" element={<Home></Home>}></Route> */}
        <Route path="Admin" element={<AdminA></AdminA>}></Route>
        <Route path="InstantBuy" element={<InstantBuy></InstantBuy>}></Route>
        <Route path="staking" element={<Staking></Staking>}></Route>
        <Route path="loan" element={<Loan></Loan>}></Route>
      </Routes>
    </div>
  );
}
