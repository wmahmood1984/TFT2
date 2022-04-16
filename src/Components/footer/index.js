/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import footerLogo from "../../Assets/footer_logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-md-4 mb-md-0 text-center text-md-left first-item item">
            <a href="index.html">
              <img
                src={footerLogo}
                class="img-fluid footer-logo"
                width="500"
                height="474"
              />
            </a>
          </div>

          <div class="col-12 col-md-6 mb-md-0 text-center text-md-left second-item item">
            <div class="social-media-main-container">
              <p class="social-text mb-2 mb-md-3 footer-title">
                Let's get social
              </p>
              <ul class="social-media-container d-flex flex-wrap list-unstyled justify-content-center justify-content-md-start mb-0">
                <li>
                  <a
                    href="https://t.me/TheFairTrust"
                    target="_blank"
                    class="d-flex flex-wrap justify-content-center align-items-center"
                  >
                    <span class="icon-icons8-telegram-app font-weight-bold"></span>
                  </a>
                </li>
                <li>
                  <a
                    href={"https://discord.com/invite/v8r55zcWsr"}
                    target="_blank"
                    class="d-flex flex-wrap justify-content-center align-items-center"
                  >
                    <i class="fab fa-discord"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/thefairtrust?s=21"
                    target="_blank"
                    class="d-flex flex-wrap justify-content-center align-items-center"
                  >
                    <i class="fab fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/thefairtrust"
                    target="_blank"
                    class="d-flex flex-wrap justify-content-center align-items-center"
                  >
                    <i class="fab fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="contact-detail">
              <p class="contact-text mb-2 mb-md-3 footer-title">Contact</p>
              <a href="mailto:Info@TheFairTrust.com">Info@TheFairTrust.com</a>
            </div>
          </div>

          <div class="col-12 col-md-2 text-center text-md-left mb-sm-0 third-item item">
            <div class="quick-link-container list-unstyled">
              <p class="contact-text mb-3 footer-title">NAVIGATION</p>
              <ul class="mb-0">
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
                <li class="mb-0">
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

          {/* <div class="col-12 col-sm-6 col-md-3 align-self-end fourth-item item">
          <div class="copyright-container text-center text-sm-right">
            <p style={{}} class="mb-0">Copyright &#169; <span class="font-weight-bold">The Fair Trust</span></p>
          </div>
        </div>  */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
