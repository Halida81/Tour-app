import React from "react";
import logo from "../assets/icons/Logo.svg";
import instagram from "../assets/icons/Instagram.svg";
import youtube from "../assets/icons/Youtube.svg";
import twitter from "../assets/icons/Twitter.svg";
import "./FooterStyles.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6"></div>
          <div className="col-xs-6 col-md-3">
            <h6>
              <img src={logo} alt="logo" />
            </h6>
            <div className="footer-links">
              <p style={{ width: "250px" }}>
                We believe brand interaction is key in commu- nication. Real
                innovations and a positive.
              </p>

              <span>
                <img src={instagram} alt="instagram" />
                <img src={youtube} alt="youtube" />
                <img src={twitter} alt="twitter" />
              </span>
            </div>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>About Us</h6>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/category/front-end-development/">
                  UI Design
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  PHP
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/java-programming-language/">
                  Java
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/android/">Android</a>
              </li>
            </ul>
          </div>{" "}
          <div className="col-xs-6 col-md-3">
            <h6>Company</h6>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/category/c-language/">C</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/front-end-development/">
                  UI Design
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  PHP
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/java-programming-language/">
                  Java
                </a>
              </li>
            </ul>
          </div>{" "}
          <div className="col-xs-6 col-md-3">
            <h6>Support</h6>
            <ul className="footer-links">
              <li>
                <a href="http://scanfcode.com/category/back-end-development/">
                  PHP
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/java-programming-language/">
                  Java
                </a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/android/">Android</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Get in Tuoch</h6>
            <div className="footer-links">
              <input
                placeholder="Your email here..."
                type="email"
                style={{ display: "block" }}
              />
              <button>Get access</button>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              TravelAgent &copy; 2023 All Rights Reserved
              {/* <a href="#">Scanfcode</a>. */}
            </p>
          </div>

          <div>Desined by Halida</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
