import React from "react";
import pic from "./Assets/Capture.png";
import image7 from "./Assets/image7.png";
import slider1 from "./Assets/slider1.gif";
import image14 from "./Assets/image14.png";
import slider2 from "./Assets/slider2.gif";
import _5 from "./Assets/5.png";
import _3 from "./Assets/3.png";
import _7 from "./Assets/image7.png";
import Ballon5 from "./Assets/Ballon5.gif";
import _9 from "./Assets/9.png";
import _10 from "./Assets/10.png";

import _15 from "./Assets/image15.png";
import _16 from "./Assets/image16.png";
import _17 from "./Assets/image17.png";
import _18 from "./Assets/image18.png";
import Fish4 from "./Assets/Fish4.gif";
import Micky from "./Assets/team/Micky.jpg";
import Karen from "./Assets/team/Karen.jpg";
import Anthony from "./Assets/team/Anthony.jpg";
import Steve from "./Assets/team/steve.png";
import Roopanshi from "./Assets/team/Roopanshi.jpg";
import video4 from "./Assets/Balloon_2_demo_3.mp4";
import { Link, useParams } from "react-router-dom";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./main.css";

export default function Main() {
  const { referrer } = useParams();
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots) => (
      <div
        style={{
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (item, i) => (
      <div className="cust-dot">
        {/* {i + 1} */}
        {console.log("item", item)}
      </div>
    ),
    arrows: true,
  };
  var linktoInvest = referrer == undefined ? "Invest" : `Invest/${referrer}`;
  return (
    <div>
      <Header />
      <section
        id="homeslider"
        className="container"
        style={{ marginBottom: "45px" }}
      >
        {/* <div className="owl-carousel"> */}
        <Slider {...settings} className="owl-carousel">
          <div className="item first-item">
            <div className="row align-items-center">
              <div
                className="col-12 col-md-6 left-content"
                style={{ textAlign: "left" }}
              >
                <img
                  src={image7}
                  className="img-fluid mb-2 left-image d-block d-md-inline mx-auto"
                  width="800"
                  height="56"
                />
                <p className="text-center text-md-left">
                  Built with a simple goal-give back to its stakeholders.
                  Guaranteed passive income of 10% quarterly in BUSD.
                </p>
              </div>
              <div className="col-12 col-md-6 right-content justify-content-center">
                <img
                  src={slider1}
                  className="img-fluid right-image first-slide-image d-block mx-auto"
                  width="500"
                  height="375"
                />
              </div>
            </div>
          </div>
          <div className="item second-item">
            <div className="row align-items-center">
              <div
                className="col-12 col-md-6 left-content"
                style={{ textAlign: "left" }}
              >
                <img
                  src={image14}
                  className="img-fluid mb-2 left-image d-block d-md-inline mx-auto"
                  width="800"
                  height="56"
                />
                <p className="text-center text-md-left">
                  Introducing world's first interest paying loan. Stake TFT as
                  collateral and borrow 50% BUSD, and the best part is WE PAY
                  YOU 0.2% interest every single day.
                </p>
              </div>
              <div className="col-12 col-md-6 right-content justify-content-center">
                <img
                  src={slider2}
                  className="img-fluid right-image second-slide-image d-block mx-auto"
                  width="500"
                  height="375"
                />
              </div>
            </div>
          </div>
        </Slider>
        {/* </div> */}
      </section>

      <section className="invest-now-container orange-bg d-none">
        <div className="container text-center text-white">
          <h3 className="text-white mb-0">INVEST NOW</h3>
          <p className="mb-0 text-uppercase">
            We Made it riskfree for you to invest. Well almost.
          </p>
          <p className="mb-2 text-uppercase">
            We Made it riskfree for you to invest, Well almost.
          </p>
          <p className="mb-0 text-uppercase">
            {referrer ? (
              <Link
                className="form-inline my-2 my-lg-0 common-btn orange-btn invest-now-btn"
                to={`/Invest/${referrer}`}
              >
                INVEST NOW
              </Link>
            ) : (
              <Link
                className="form-inline my-2 my-lg-0 common-btn orange-btn invest-now-btn"
                to="/Invest"
              >
                INVEST NOW
              </Link>
            )}
          </p>
        </div>
      </section>

      <section className="rock-solid-container">
        <div className="container mb-3 mb-md-5">
          <div className="row">
            <div className="col-12 col-md-4 mb-3 mb-md-0 text-center text-md-left">
              <h4 className="text-uppercase mb-2 mb-md-3">No Fine Print</h4>
              <p>
                Keeping things simple & transparent. Daily rewards, guaranteed
                dividends, no lock-ins.
              </p>
            </div>
            <div className="col-12 col-md-4 mb-3 mb-md-0 text-center text-md-left">
              <h4 className="text-uppercase mb-2 mb-md-3">Value Innovation</h4>
              <p>
                Growth from constant innovation, breaking norms and expanding
                across various sectors.
              </p>
            </div>
            <div className="col-12 col-md-4 mb-md-0 text-center text-md-left">
              <h4 className="text-uppercase mb-2 mb-md-3">Community Focused</h4>
              <p>
                Strength in the diversity of our community & team. Protocol
                built by and for the people.
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              <img
                src={_5}
                className="rock-solid-img"
                width="2000"
                height="205"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="tft-token-container orange-bg">
        <div className="container text-left text-md-center">
          <h1 className="title text-white">TFT TOKEN </h1>
          <p className="mb-0 text-white">
            The native cryptocurrency of The Fair Trust, backed by the
            cumulative potential of all of The Fair Trust Investments and the
            value of its treasury. Tradable on the Binance Blockchain.
          </p>
        </div>
      </section>

      <section className="about-us-container">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="left-content mb-4 mb-md-0">
                <img
                  src={_3}
                  className="img-fluid lazy"
                  width="1000"
                  height="728"
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="right-content text-left">
                <h1 className="title">
                  Our <span className="text-blue">Story</span>
                </h1>
                <p>
                  It’s a jungle out there, where people get scammed every day,
                  they pay crazy interest rates, get sold overrated bonds, where
                  opportunities to invest in great projects are given to the big
                  players first… it’s time to change that.
                </p>
                <p>
                  The goal of The Fair Trust is simple, unbank the banking
                  system. Create a financial platform like none other, one that
                  gives profit back to its stakeholders and is constantly
                  evolving.
                </p>
                <p className="mb-0">
                  We are here to build a borderless and democratic community of
                  investors funding the next generations of revolutionary
                  blockchain projects. Projects that span across various
                  sectors: New Age Banking, Real Estate, Digital Marketplace,
                  Gaming… the possibilities are endless. Investing in The Fair
                  Trust is like investing in all of these sectors at once.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-work-container">
        <div className="container text-left text-md-center text-white">
          <h1 className="title">
            How it <span className="text-blue">Works</span>
          </h1>
          <p className="mb-0 text-blue">
            The Fair Trust is designed to be fair and equally rewarding, what
            you choose will depend on your financial goal. To start with we will
            have two options: The Fair Investment and The Fair Loan.
          </p>
        </div>
      </section>

      <section className="invest-in-yourself-container">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="left-content" style={{ textAlign: "left" }}>
                <img src={_7} />
                <div className="content mt-4">
                  <p className="mb-0" style={{ textAlign: "left" }}>
                    A portion of The Fair Trust treasury will be utilized to
                    kickstart leading-edge projects across varying sectors. The
                    returns from these investments will be rewarded back to The
                    Fair Trust Stakeholders in the form of:{" "}
                  </p>
                  <ul
                    style={{ textAlign: "left" }}
                    className="mb-0 mt-1 list-unstyled"
                  >
                    <li>
                      <span className="text-orange">-</span> Daily returns of
                      0.16%
                    </li>
                    <li>
                      <span className="text-orange">-</span> Monthly bonus of 5%
                    </li>
                    <li>
                      <span className="text-orange">-</span> Guaranteed 10%
                      quarterly dividend in BUSD
                    </li>
                    <li>
                      <span className="text-orange">-</span> New project tokens
                    </li>
                  </ul>
                  <blockquote style={{ textAlign: "left" }} className="quote">
                    "You may just have the next unicorn in your portfolio"
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 text-center">
              <div className="rewards-image-content mt-4 mt-md-0">
                <video
                  playsInline
                  autoPlay
                  muted
                  loop
                  className="w-100"
                  style={{ height: "450px", width: "300px", border: "none" }}
                  src={video4}
                >
                  {/* <source src="video/Balloon_2_demo_3.mp4" type="video/mp4">
              Your browser does not support the video tag.</source> */}
                </video>
                {/* <img data-src={Ballon5} className="lazy img-fluid" alt="" width="1500" height="2012" /> */}
              </div>
            </div>
            <div className="col-12 col-md-6">
              {/* <div className="right-content text-center">
            <h2 className="mb-0 pb-2">Invest in yourself,</h2>
            <h2 className="mb-0 pb-2">it pays the best interest</h2>
          </div> */}
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 order-1 order-md-2">
              <div className="left-content" style={{ textAlign: "left" }}>
                <img
                  src={_9}
                  className="lazy fair-loan-image"
                  width="800"
                  height="96"
                />
                <div
                  className="fair-loan-image-content mt-4"
                  style={{ textAlign: "left" }}
                >
                  <p>
                    Want to stay invested in The Fair Trust but need to free up
                    some cash for those unexpected bills or opportunities, you
                    can have both and earn while doing so.
                  </p>
                  <p className="mb-0">
                    With The Fair Loan, we pay you interest when you to take a
                    loan from us, yes you heard us right. The way it works is
                    straightforward. Deposit TFT and borrow up to 50% in BUSD.
                    In addition to that we will pay you daily 0.2% fixed
                    interest on the TFT deposited. No credit checks, no
                    liquidation, it is that simple.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 order-2 order-md-1 mt-4 mt-md-0">
              <div className="right-image-content text-center">
                <img src={_10} className="img-fluid" width="500" height="418" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="we-made-it-riskfree-container orange-bg">
        <div className="container text-center text-white">
          <p className="mb-0 text-uppercase">
            We Made it riskfree for you to invest, Well almost. Learn How,{" "}
            {referrer ? (
              <Link to={`/Invest/${referrer}`}>
                <span style={{ color: "white" }}>INVEST NOW</span>
              </Link>
            ) : (
              <Link to="/Invest">
                <span style={{ color: "white" }}>INVEST NOW</span>
              </Link>
            )}
          </p>
          <p className="mb-0 text-uppercase"></p>
        </div>
      </section>

      <section className="road-map-container">
        <div className="container">
          <div className="col-12 px-0">
            <h1 className="title mb-3 mb-md-0 text-left">
              Road<span className="text-blue">Map</span>
            </h1>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 road-map-content">
              <div className="content-box-container first-content-box-container">
                <div className="content-box mt-4 mt-md-0 mb-md-3 order-2 order-md-1">
                  <div className="box box1">
                    <h1 className="title mb-1">Q2</h1>
                    <h3 className="sub-title">2022</h3>
                  </div>
                  <div className="box box2">
                    <ul className="pl-0 list-unstyled mb-0 content">
                      <li style={{ textAlign: "left" }}>
                        Community Seed Round
                      </li>
                      <li style={{ textAlign: "left" }}>
                        Strategic Pre-Launch
                      </li>
                      <li style={{ textAlign: "left" }}>
                        Launch The Fair Trust Platform
                      </li>
                      <li style={{ textAlign: "left" }}>
                        Audit of Entire Project
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content-image order-1 order-md-2">
                  <img
                    src={_15}
                    className="first-image img-fluid"
                    width="1182"
                    height="871"
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 road-map-content">
              <div className="content-box-container second-content-box-container">
                <div className="content-box mt-4 mt-md-0 order-2 order-md-1">
                  <div className="box box1">
                    <h1 className="title mb-1">Q3</h1>
                    <h3 className="sub-title">2022</h3>
                  </div>
                  <div className="box box2">
                    <ul className="pl-0 list-unstyled mb-0 content">
                      <li style={{ textAlign: "left" }}>
                        Launch The Fair Studio
                      </li>
                      <li style={{ textAlign: "left" }}>
                        Launch The Fair Game
                      </li>
                      <li style={{ textAlign: "left" }}>
                        Launch The Fair Fund
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content-image order-1 order-md-2">
                  <img
                    src={_16}
                    className="second-image img-fluid"
                    width="1182"
                    height="871"
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 road-map-content">
              <div className="content-box-container third-content-box-container">
                <div className="content-box mt-4 mt-md-0 order-2 order-md-1">
                  <div className="box box1">
                    <h1 className="title mb-1">Q4</h1>
                    <h3 className="sub-title">2022</h3>
                  </div>
                  <div className="box box2">
                    <ul className="pl-0 list-unstyled mb-0 content">
                      <li style={{ textAlign: "left" }}>
                        Open application for outsider investments
                      </li>
                      <li style={{ textAlign: "left" }}>
                        Expand the Fair Loan (lending &amp; borrowing) for other
                        tokens
                      </li>
                      <li style={{ textAlign: "left" }}>
                        Governance Integration
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content-image order-1 order-md-2">
                  <img
                    src={_17}
                    className="third-image img-fluid"
                    width="1182"
                    height="871"
                  />
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 road-map-content">
              <div className="content-box-container fourth-content-box-container">
                <div className="content-box mt-4 mt-md-0 order-2 order-md-1">
                  <div className="box box1">
                    <h1 className="title mb-1">Q1</h1>
                    <h3 className="sub-title">2023</h3>
                  </div>
                  <div className="box box2">
                    <ul className="pl-0 list-unstyled mb-0 content">
                      <li style={{ textAlign: "left" }}>
                        Beta Testing of Fair Trust Wallet
                      </li>
                      <li style={{ textAlign: "left" }}>
                        Launch The Fair Casino
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="content-image order-1 order-md-2 text-center">
                  <img
                    src={_18}
                    className="fourth-image img-fluid"
                    width="1182"
                    height="871"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-right">
              <p className="more-to-come-text">More To Come...</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tokenomics-container">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6" style={{ textAlign: "left" }}>
              <h1 className="title mb-4">
                Token<span className="text-blue">omics</span>
              </h1>
              <p className="tag-line-text">
                A fair and equitable distribution of tokens keeping future
                utility, the viability of the project and its stakeholders in
                mind.
              </p>
              <ul className="list-unstyled">
                <li>
                  <span className="text-orange">-</span> Periodic burning of
                  tokens
                </li>
                <li>
                  <span className="text-orange">-</span> Fixed and low
                  circulating supply
                </li>
                <li>
                  <span className="text-orange">-</span> Team token vested
                  across 5 years
                </li>
                <li>
                  <span className="text-orange">-</span> Built-in anti-whale
                  &amp; day trading measures
                </li>
              </ul>
            </div>

            <div className="d-none d-md-block col-1"></div>

            <div className="col-12 col-md-5">
              <ul className="tokenomics-list">
                <li style={{ textAlign: "left" }}>Team</li>
                <li style={{ textAlign: "left" }}>
                  External Strategic Advisor
                </li>
                <li style={{ textAlign: "left" }}>Community Seed Launch</li>
                <li style={{ textAlign: "left" }}>Strategic Pre-Launch</li>
                <li style={{ textAlign: "left" }}>Liquidity Pool</li>
                <li style={{ textAlign: "left" }}>
                  Marketing / Community Airdrop
                </li>
                <li style={{ textAlign: "left" }}>Leftover for Community</li>
              </ul>
            </div>
          </div>

          {/* <div className="row">
        <div className="col-12 mt-3">
          <img data={Fish4}  />
        </div>
      </div> */}
          <img src={Fish4} style={{ width: "1000px", height: "400px" }}></img>
        </div>
      </section>

      <section className="team-container">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 col-md-4">
              <h1 className="title mb-4 text-left">
                Core <span className="text-blue">Team</span>
              </h1>
              <p className="mb-0 text-left mb-4 mb-md-0">
                Powered by passion and fueled with the need to make a change.
                Our team has decades of combined experience from working within
                leaders such as Deloitte, IBM to founding multiple eCommerce and
                multi-chain service brands. We are a team of makers and thinkers
                that constantly challenge the status quo.
              </p>
            </div>

            <div className="col-12 col-md-8">
              <div className="team-image-container">
                <div className="team-content text-center">
                  <img
                    src={Micky}
                    className="lazy img-fluid"
                    width="500"
                    height="500"
                  />
                  <p className="mb-1">Micky P.</p>
                  <span>Technology</span>
                </div>
                <div className="team-content text-center">
                  <img
                    src={Karen}
                    className="lazy img-fluid"
                    width="500"
                    height="500"
                  />
                  <p className="mb-1">Karen F.</p>
                  <span>Operations</span>
                </div>
                <div className="team-content text-center">
                  <img
                    src={Anthony}
                    className="lazy img-fluid"
                    width="500"
                    height="500"
                  />
                  <p className="mb-1">Anthony D.</p>
                  <span>Finance</span>
                </div>
                <div className="team-content text-center">
                  <img
                    src={Roopanshi}
                    className="lazy img-fluid"
                    width="500"
                    height="500"
                  />
                  <p className="mb-1">Roopanshi B.</p>
                  <span>Marketing</span>
                </div>
                <div className="team-content text-center">
                  <img
                    src={Steve}
                    className="lazy img-fluid"
                    width="500"
                    height="500"
                  />
                  <p className="mb-1">Steve D.</p>
                  <span>Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="be-a-part-container orange-bg">
        <div className="container text-center text-white">
          <p className="mb-0 text-uppercase">
            Be a part of our Journey,{" "}
            {referrer ? (
              <Link to={`/Invest/${referrer}`}>
                <span style={{ color: "white" }}>INVEST NOW</span>
              </Link>
            ) : (
              <Link to="/Invest">
                <span style={{ color: "white" }}>INVEST NOW</span>
              </Link>
            )}
          </p>
        </div>
      </section>
      <Footer />
      {/* <!-- scroll to top --> */}
      <button className="back-to-top" type="button">
        <i className="fas fa-regular fa-angle-up"></i>
      </button>
    </div>
  );
}
