/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import footerLogo from "../../Assets/footer_logo.png";
import "./footer.css";

const Footer1 = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-4 mb-md-0 text-center text-md-left first-item item">
            <a href="index.html">
              <img
                src={footerLogo}
                className="img-fluid footer-logo"
                width="500"
                height="474"
              />
            </a>
          </div>

          <div className="col-12 col-md-6 mb-md-0 text-center">
            <div className="social-media-main-container">
              <p
                className="social-text mb-2 mb-md-3 footer-title"
                style={{ textAlign: "right" }}
              >
                Let's get social
              </p>
              <ul className="social-media-container d-flex flex-wrap list-unstyled justify-content-center justify-content-md-start mb-0">
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
                    href={"https://discord.com/invite/v8r55zcWsr"}
                    target="_blank"
                    className="d-flex flex-wrap justify-content-center align-items-center"
                  >
                    <i className="fab fa-discord"></i>
                  </a>
                </li>
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
                    href="https://instagram.com/thefairtrust"
                    target="_blank"
                    className="d-flex flex-wrap justify-content-center align-items-center"
                  >
                    <i className="fab fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="contact-detail">
              <p
                className="contact-text mb-2 mb-md-3 footer-title"
                style={{
                  textAlign: "right",
                  marginTop: 10,
                }}
              >
                Contact
              </p>
              <a
                href="mailto:Info@TheFairTrust.com"
                style={{
                  textAlign: "right",
                  float: "right",
                }}
              >
                Info@TheFairTrust.com
              </a>
            </div>
          </div>

          <div className="col-12 col-md-2 text-center text-md-left mb-sm-0 third-item item">
            <div className="quick-link-container list-unstyled">
              <p className="contact-text mb-3 footer-title">NAVIGATION</p>
              <ul className="mb-0">
                <li>
                  <a
                    target="_blank"
                    href={
                      "https://the-fair-trust.gitbook.io/the-fair-trust/faq"
                    }
                  >
                    Faq
                  </a>
                </li>
                <li>
                  <a target="_blank" href={"https://thefairtrust.medium.com"}>
                    Blog
                  </a>
                </li>

                <li>
                  <a
                    target="_blank"
                    href={"https://the-fair-trust.gitbook.io/the-fair-trust/"}
                  >
                    Whitepaper
                  </a>
                </li>
                <li>
                  <a
                    href={
                      "https://ipfs.io/ipfs/QmUkzYEm71K8ucZ8TBVhLarpmpz8uiqXENsd9WkqtH6DeZ"
                    }
                    target="_blank"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li className="mb-0">
                  <a
                    href={
                      "https://ipfs.io/ipfs/QmTQZVaRp8xaPPiWdykNKZrxgodAzNzuTPeUH69ecrm4NP"
                    }
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
