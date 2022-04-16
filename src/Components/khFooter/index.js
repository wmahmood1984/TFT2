/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import footerLogo from "../../Assets/footer_logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="kh-footer-main-wrapper">
      <div className="kh-footer-inner-wrapper">
        <div className="img-wrapper">
          <div className="logo-img-wrapper">
            <img src={footerLogo} alt="footerLogo" />
          </div>
        </div>
        <div className="links-wrapper">
          <div className="links-left">
            <div className="social-media-main-container">
              <p className="footer-links-heading">Let's get social</p>
              <ul className="social-media-container d-flex flex-wrap list-unstyled">
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
                    href="#"
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
                    href="#"
                    className="d-flex flex-wrap justify-content-center align-items-center"
                  >
                    <i className="fab fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="footer-links-heading mt30">Contact</p>
              <a className="footer-mail" href="mailto:Info@TheFairTrust.com">
                Info@TheFairTrust.com
              </a>
            </div>
          </div>
          <div className="links-right">
            <div className="quick-link-container list-unstyled">
              <p className="contact-text mb-3 footer-links-heading">
                NAVIGATION
              </p>
              <ul className="mb-0 list-unstyled tal footer-navigation-ul">
                <li>
                  <a href="coming-soon.html">Faq</a>
                </li>
                <li>
                  <a href="coming-soon.html">Blog</a>
                </li>
                <li>
                  <a href="coming-soon.html">Whitepaper</a>
                </li>
                <li>
                  <a href="file/COOKIE_POLICY.pdf" target="_blank">
                    Cookie Policy
                  </a>
                </li>
                <li className="mb-0">
                  <a href="file/PRIVACY_POLICY.pdf" target="_blank">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
