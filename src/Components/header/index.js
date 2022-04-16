/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import pic from "../../Assets/Capture.png";
import { Link, useParams } from "react-router-dom";
import "./header.css";

const Header = ({
  buyTft,
  handleBuyAtDiscountClick,
  handleBuyAtMarketClick,
}) => {
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
                    <ul className="social-media-container d-flex flex-wrap list-unstyled mb-0">
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

                    <Link
                      to="/Invest"
                      className="form-inline my-2 my-lg-0 common-btn orange-btn invest-now-btn"
                      onClick={() => setBuyTFTToggle((prev) => !prev)}
                    >
                      {/* Launch App */}
                      {buyTft ? "Buy TFT" : "Launch App"}
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
                        <li onClick={() => setBuyTFTToggle(false)}>
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
