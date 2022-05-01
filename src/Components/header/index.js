/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState,useEffect } from "react";
import pic from "../../Assets/Capture.png";
import { Link, useParams } from "react-router-dom";
import "./header.css";
import { useSelector, useDispatch } from "react-redux";
import { initWeb3, Price } from "../../state/ui";
import { chainId, tokenAddress } from "../../config";
import Web3 from "web3";
const Header = ({
  buyTft,
  handleBuyAtDiscountClick,
  handleBuyAtMarketClick,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(initWeb3());
}, []);

  const address = useSelector((state) => {
   return state.adoptReducer.address
  });

  const network = useSelector((state) => {
    return state.adoptReducer.networkId
   });

  const [success, setCopySuccess] = useState();
  const [collapsible, setCollapsible] = useState(false);
  const [buyTFTToggle, setBuyTFTToggle] = useState(false);
  const [textArea, setTextArea] = useState();
  const show = collapsible ? "show" : "";
  const copyToClipboard = (e) => {
    textArea.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess("Copied!");
  };

  const buyAtDiscountClick = () => {
    handleBuyAtDiscountClick();
    setBuyTFTToggle(false);
  };
  const buyAtMarketClick = () => {
    handleBuyAtMarketClick();
    setBuyTFTToggle(false);
  };

  async function connect(){
    const web3 = new Web3(Web3.givenProvider)
    if (window.ethereum.networkVersion !== chainId) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: web3.utils.toHex(chainId) }],
        });
      } catch (err) {
          // This error code indicates that the chain has not been added to MetaMask.
        if (err.code === 4902) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainName: 'BSC Testnet',
                chainId: web3.utils.toHex(chainId),
                nativeCurrency: { name: 'BSCTest', decimals: 18, symbol: 'TBNB' },
                rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
              },
            ],
          });
        }
      }
    }
    dispatch(initWeb3());
  try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
 
  } catch (error) {
    if (error.code === 4001) {
      // User rejected request
    }

   
  }

  }



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

  window.ethereum.on("accountsChanged",(e,r)=>{window.location.reload()})

  return (
    <header className="sticky-top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 pr-lg-0 header-container">
            <nav className="navbar navbar-expand-lg navbar-light px-0 py-md-0">
              <a className="navbar-brand" href={"https://thefairtrust.finance"}>
                <img
                  src={pic}
                  title="The Fair Trust"
                  alt="The Fair Trust"
                  width="200"
                  height="21"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                onClick={() => {
                  setCollapsible(!collapsible);
                }}
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                style={show ? { display: "block" } : { display: "none" }}
                className={"collapse navbar-collapse" + show}
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Resources
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a
                        className="dropdown-item"
                        href={
                          "https://the-fair-trust.gitbook.io/the-fair-trust/faq"
                        }
                        target="_blank"
                      >
                        faq
                      </a>
                      <a
                        className="dropdown-item"
                        href={"https://thefairtrust.medium.com"}
                        target="_blank"
                      >
                        blog
                      </a>
                      <a
                        className="dropdown-item"
                        href={
                          "https://the-fair-trust.gitbook.io/the-fair-trust/"
                        }
                        target="_blank"
                      >
                        white paper
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="pt-2 pb-0 py-md-0 social-media-main-container">
                  <div className="row mx-0 align-items-center">
                    <ul
                      className="social-media-container d-flex flex-wrap list-unstyled mb-0"
                      style={{ marginRight: "5px" }}
                    >
                      <li>
                        <a
                          href="https://twitter.com/thefairtrust?s=21"
                          target="_blank"
                          className="d-flex flex-wrap justify-content-center align-items-center"
                        >
                          <i className="fab fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://t.me/TheFairTrust"
                          target="_blank"
                          className="d-flex flex-wrap justify-content-center align-items-center"
                        >
                          <span className="icon-icons8-telegram-app font-weight-bold"></span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://instagram.com/thefairtrust"
                          target="_blank"
                          className="d-flex flex-wrap justify-content-center align-items-center"
                        >
                          <i className="fab fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href={"https://discord.com/invite/v8r55zcWsr"}
                          target="_blank"
                          className="d-flex flex-wrap justify-content-center align-items-center"
                        >
                          <i className="fab fa-discord"></i>
                        </a>
                      </li>
                    </ul>
                    {buyTft ? (
                      <button 
                      onClick={connect}
                      className="connect-button-in-topNav">
                        <span>{address ?  `${address.slice(0,5)}...${address.slice(-4)}`  : "Connect Wallet"}</span>
                      </button>
                    ) : null}
                    <Link
                      to="/Invest"
                      className={
                        buyTft
                          ? ""
                          : "form-inline my-2 my-lg-0 common-btn orange-btn invest-now-btn"
                      }
                      style={
                        buyTft
                          ? {
                              border: "1px solid #ccc",
                              borderRadius: "30px",
                              width: "140px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginRight: "10px",
                              height: "30px",
                              cursor: "pointer",
                              background: "#D55E2D",
                              color: "#fff",
                              position: "relative",
                              marginBottom: "2px",
                            }
                          : null
                      }
                      onClick={() => setBuyTFTToggle((prev) => !prev)}
                    >
                      {/* Launch App */}
                      {buyTft ? <span>Buy TFT</span> : "Launch App"}
                    </Link>
                    {buyTft ? (
                      <ul
                        style={!buyTFTToggle ? { display: "none" } : null}
                        className="buyTft-dropdown"
                      >
                        <li onClick={() => buyAtDiscountClick()}>
                          Buy At Discount
                        </li>
                        <li onClick={() => buyAtMarketClick()}>
                          Buy At Market
                        </li>
                        <li onClick={() => 
                        {
                          setTokn()
                
                          setBuyTFTToggle(false)
                        }}>
                          Add TFT To Wallet
                        </li>
                      </ul>
                    ) : null}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
