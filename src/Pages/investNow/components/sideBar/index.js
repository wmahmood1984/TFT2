import React, { useState } from "react";
import optionHover from "../../../../Assets/optionHover.png";
import greyDashboard from "../../../../Assets/greyDashboard.png";
import blueDashboard from "../../../../Assets/blueDashboard.png";
import greywallet from "../../../../Assets/greywallet.png";
import bluewallet from "../../../../Assets/bluewallet.png";
import greyFairInvest from "../../../../Assets/greyFairInvest.png";
import blueFairInvest from "../../../../Assets/blueFairInvest.png";
import blueFairLoan from "../../../../Assets/blueFairLoan.png";
import greyFairLoan from "../../../../Assets/greyFairLoan.png";
import blueFairPlay from "../../../../Assets/blueFairPlay.png";
import greyFairPlay from "../../../../Assets/greyFairPlay.png";
import greyAirDrop from "../../../../Assets/greyAirDrop.png";
import blueAirDrop from "../../../../Assets/blueAirDrop.png";
import greyComunityVote from "../../../../Assets/greyComunityVote.png";
import greyChart from "../../../../Assets/greyChart.png";
import bluePrice from "../../../../Assets/price.png";
import "./sideBar.css";
import { tokenAddress } from "../../../../config";
import { useSelector, useDispatch } from "react-redux";
const SideBar = ({
  dashboard,
  buyTft,
  buyAtDiscount,
  buyAtMarket,
  fairInvestment,
  loanVault,
  oneFor10X,
  airDrop,
  setDashboard,
  setBuyTft,
  setBuyAtDiscount,
  setBuyAtMarket,
  setFairInvestment,
  setLoanVault,
  setOneFor10X,
  setAirDrop,
  handleBuyAtDiscountClick,
  handleBuyAtMarketClick,
}) => {
  const [buyTftDropdown, setBuyTftDropdown] = useState(false);
  const [fairGameDropdown, setFairGameDropdown] = useState(false);
  const [opTop, setOpTop] = useState(5);
  const handleDashboardClick = () => {
    setDashboard(true);
    setBuyTft(false);
    setBuyAtDiscount(false);
    setBuyAtMarket(false);
    setFairInvestment(false);
    setLoanVault(false);
    setOneFor10X(false);
    setAirDrop(false);
    setBuyTftDropdown(false);
    setFairGameDropdown(false);
    setOpTop(5);
  };
  const handleBuyTftClick = () => {
    setDashboard(false);
    setBuyTft(true);
    setBuyAtDiscount(true);
    setBuyAtMarket(false);
    setFairInvestment(false);
    setLoanVault(false);
    setOneFor10X(false);
    setAirDrop(false);
    setBuyTftDropdown((prev) => !prev);
    setFairGameDropdown(false);
    setOpTop(55);
  };
  const handleFairInvestmentClick = () => {
    setDashboard(false);
    setBuyTft(false);
    setBuyAtDiscount(false);
    setBuyAtMarket(false);
    setFairInvestment(true);
    setLoanVault(false);
    setOneFor10X(false);
    setAirDrop(false);
    setBuyTftDropdown(false);
    setFairGameDropdown(false);
    setOpTop(45 * 2 + 17);
  };
  const handleLoanVaultClick = () => {
    setDashboard(false);
    setBuyTft(false);
    setBuyAtDiscount(false);
    setBuyAtMarket(false);
    setFairInvestment(false);
    setLoanVault(true);
    setOneFor10X(false);
    setAirDrop(false);
    setBuyTftDropdown(false);
    setFairGameDropdown(false);
    setOpTop(45 * 3 + 25);
  };
  const handleOneFor10XClick = () => {
    setDashboard(false);
    setBuyTft(false);
    setBuyAtDiscount(false);
    setBuyAtMarket(false);
    setFairInvestment(false);
    setLoanVault(false);
    setOneFor10X(true);
    setAirDrop(false);
    setBuyTftDropdown(false);
    setFairGameDropdown((prev) => !prev);
    setOpTop(45 * 4 + 35);
  };
  const handleAirDropClick = () => {
    setDashboard(false);
    setBuyTft(false);
    setBuyAtDiscount(false);
    setBuyAtMarket(false);
    setFairInvestment(false);
    setLoanVault(false);
    setOneFor10X(false);
    setAirDrop(true);
    setBuyTftDropdown(false);
    setFairGameDropdown(false);
    setOpTop(45 * 5 + 40);
  };
  const dispatch = useDispatch();
  const setTokn = async () => {
    const tokenSymbol = "TFT";
    const tokenDecimals = 8;
    const Picture = "https://i.ibb.co/3Bkpg9T/Token.jpg";

    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: Picture, // A string url of the token logo
          },
        },
      });

      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("Your loss!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const _price = useSelector((state) => {
    return state.adoptReducer.price;
  });

  return (
    <div className="sidebar-main-wrapper">
      <div className="sidebar-links-wrapper">
        <ul style={{ paddingTop: "45px" }}>
          <img
            className="optionHover"
            style={{
              width: "98%",
              position: "absolute",
              top: opTop,
              right: 0,
              zIndex: -1,
            }}
            src={optionHover}
            alt="optionHover"
          />
          <li
            style={
              dashboard
                ? {
                    fontWeight: 600,
                    color: "#2F5D8E",
                  }
                : null
            }
            onClick={() => handleDashboardClick()}
          >
            {/* <i className="ri-dashboard-fill"></i> */}
            <img
              src={dashboard ? blueDashboard : greyDashboard}
              alt="greywallet"
            />
            &nbsp; Dashboard
          </li>
          <li
            onClick={() => handleBuyTftClick()}
            style={{ justifyContent: "space-between" }}
          >
            <span style={{ display: "flex", alignItems: "center" }}>
              <span
                style={
                  buyAtDiscount
                    ? {
                        fontWeight: 600,
                        color: "#2F5D8E",
                        display: "flex",
                        alignItems: "center",
                      }
                    : { display: "flex", alignItems: "center" }
                }
              >
                {/* <i className="ri-secure-payment-fill"></i> */}
                <img
                  src={buyAtDiscount ? bluewallet : greywallet}
                  alt="greywallet"
                />
                &nbsp; Buy TFT
              </span>
            </span>
            <span
              className="mycaret"
              style={
                buyTftDropdown
                  ? {
                      backgroundColor: "#2F5D8E",
                    }
                  : null
              }
            >
              <i
                className="fal fa-angle-down"
                style={
                  buyTftDropdown
                    ? {
                        marginLeft: 5,
                        transform: "rotate(180deg)",
                        marginTop: "-8px",
                        display: "inline-block",
                        position: "relative",
                      }
                    : { marginLeft: 5 }
                }
              ></i>
            </span>
          </li>
          <ul
            className="sub-nav"
            style={
              !buyTftDropdown
                ? {
                    display: "none",
                  }
                : null
            }
          >
            <li
              onClick={() => handleBuyAtDiscountClick()}
              style={
                buyAtDiscount
                  ? {
                      fontWeight: 600,
                      color: "#2F5D8E",
                    }
                  : null
              }
            >
              Buy At Discount
            </li>
            <li
              onClick={() => handleBuyAtMarketClick()}
              style={
                buyAtMarket
                  ? {
                      fontWeight: 600,
                      color: "#2F5D8E",
                    }
                  : null
              }
            >
              Buy At Market
            </li>
            <li
              onClick={() => {
                setTokn();
              }}
            >
              {/* <button> */}
              Add TFT to Wallet
              {/* </button> */}
            </li>
          </ul>
          <li
            onClick={() => handleFairInvestmentClick()}
            style={
              fairInvestment
                ? {
                    fontWeight: 600,
                    color: "#2F5D8E",
                  }
                : null
            }
          >
            {/* <i className="ri-money-cny-circle-fill"></i> */}
            <img
              src={fairInvestment ? blueFairInvest : greyFairInvest}
              alt="greywallet"
            />
            &nbsp; The Fair Investment
          </li>
          <li
            onClick={() => handleLoanVaultClick()}
            style={
              loanVault
                ? {
                    fontWeight: 600,
                    color: "#2F5D8E",
                  }
                : null
            }
          >
            {/* <i className="ri-money-cny-box-line"></i> */}
            <img
              src={loanVault ? blueFairLoan : greyFairLoan}
              alt="greywallet"
            />
            &nbsp; The Fair Loan
          </li>
          <li
            onClick={() => handleOneFor10XClick()}
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <span
              style={
                oneFor10X
                  ? {
                      fontWeight: 600,
                      color: "#2F5D8E",
                      display: "flex",
                      alignItems: "center",
                    }
                  : { display: "flex", alignItems: "center" }
              }
            >
              {/* <i className="ri-money-cny-circle-fill"></i> */}
              <img
                src={oneFor10X ? blueFairPlay : greyFairPlay}
                alt="greywallet"
              />
              &nbsp; The Fair Game
            </span>
            <span
              className="mycaret"
              style={
                fairGameDropdown
                  ? {
                      backgroundColor: "#2F5D8E",
                    }
                  : null
              }
            >
              <i
                className="fal fa-angle-down"
                style={
                  fairGameDropdown
                    ? {
                        marginLeft: 5,
                        transform: "rotate(180deg)",
                        marginTop: "-8px",
                        display: "inline-block",
                        position: "relative",
                      }
                    : { marginLeft: 5 }
                }
              ></i>
            </span>
          </li>
          <ul
            className="sub-nav"
            style={
              !fairGameDropdown
                ? {
                    display: "none",
                  }
                : null
            }
          >
            <li
              style={
                oneFor10X
                  ? {
                      fontWeight: 600,
                      color: "#2F5D8E",
                    }
                  : null
              }
            >
              One For 10X
            </li>
            <li>NFT Battle - coming soon</li>
          </ul>
          <li
            onClick={() => handleAirDropClick()}
            style={
              airDrop
                ? {
                    fontWeight: 600,
                    color: "#2F5D8E",
                  }
                : null
            }
          >
            {/* <i className="ri-chat-poll-line"></i> */}
            <img src={airDrop ? blueAirDrop : greyAirDrop} alt="greywallet" />
            &nbsp; Airdrop
          </li>
          <li style={{ alignItems: "start" }}>
            {/* <i className="ri-community-line"></i> */}
            <img src={greyComunityVote} alt="greywallet" />
            &nbsp;
            <span>
              Community Vote
              <br />
              <span style={{ fontSize: "14px", marginLeft: "35px" }}>
                coming soon
              </span>
            </span>
          </li>
          <li>
            {/* <i className="ri-bar-chart-grouped-line"></i> */}
            <img src={greyChart} alt="greywallet" />
            &nbsp; Chart
          </li>
          <li>
            {/* <i className="ri-price-tag-2-line"></i> */}
            <img src={bluePrice} alt="greywallet" />
            &nbsp; TFT Price
            <br />
            <span style={{ fontSize: "14px", marginLeft: "35px" }}>
              ${(_price / 1000000000000000000).toFixed(4)}
            </span>
          </li>
        </ul>
      </div>
      <div className="sidebar-socialmedia-wrapper"></div>
    </div>
  );
};

export default SideBar;
