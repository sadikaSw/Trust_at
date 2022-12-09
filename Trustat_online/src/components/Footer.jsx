import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <div class="pg-footer">
        <footer class="footer">
          <svg
            class="footer-wave-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <path
              class="footer-wave-path"
              d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
            ></path>
          </svg>
          <div class="footer-content">
            <div class="footer-content-column">
              <div class="footer-logo">
                <a class="footer-logo-link" href="#">
                  <span class="hidden-link-text">LOGO</span>
                  <Link to="/">
                    <img src={logo} name="pw logo" className="img" />
                  </Link>
                </a>
              </div>
              <div class="footer-menu">
                <h2 class="footer-menu-name">Questions?</h2>
                <ul id="menu-get-started" class="footer-menu-list">
                  <li class="menu-item menu-item-type-post_type menu-item-object-product">
                    <a href="#">+94 769982478</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-content-column">
              <div class="footer-menu">
                <h2 class="footer-menu-name"> Company</h2>
                <ul id="menu-company" class="footer-menu-list">
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to="/">Contact</Link>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to="/about">About Us</Link>
                  </li>
                </ul>
              </div>
              <div class="footer-menu">
                <h2 class="footer-menu-name"> Legal</h2>
                <ul id="menu-legal" class="footer-menu-list">
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                    <a href="#">Privacy Notice</a>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <a href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-content-column">
              <div class="footer-menu">
                <h2 class="footer-menu-name"> Products and Tools</h2>
                <ul id="menu-quick-links" class="footer-menu-list">
                  <li class="menu-item menu-item-type-custom menu-item-object-custom">
                    <Link to="/">Email Verification</Link>
                  </li>
                  <li class="menu-item menu-item-type-custom menu-item-object-custom">
                    <Link to="/">Phishing Analysis</Link>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to="/">Proxy Detection</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-content-column">
              <div class="footer-call-to-action">
                <h2 class="footer-call-to-action-title"> Let's Chat</h2>
                <p class="footer-call-to-action-description">
                  {" "}
                  Have a support question?
                </p>
                <a
                  class="footer-call-to-action-button button"
                  href="#"
                  target="_self"
                >
                  {" "}
                  Get in Touch{" "}
                </a>
              </div>
              <div class="footer-call-to-action">
                
                
              </div>
            </div>
            <div class="footer-social-links">
              {" "}
              <svg
                class="footer-social-amoeba-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 236 54"
              >
                <path
                  class="footer-social-amoeba-path"
                  d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"
                ></path>
              </svg>
              <a class="footer-social-link linkedin" href="#" target="_blank">
                <FaLinkedinIn />
              </a>
              <a class="footer-social-link twitter" href="#" target="_blank">
                <FaTwitter />
              </a>
              <a class="footer-social-link insta" href="#" target="_blank">
                <FaInstagram />
              </a>
              <a class="footer-social-link facebook" href="#" target="_blank">
                <FaFacebook />
              </a>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="footer-copyright-wrapper">
              <p class="footer-copyright-text">
                <a class="footer-copyright-link" href="#" target="_self">
                  {" "}
                  ©{new Date().getFullYear()}. | Designed By:{" "}
                  <span> Zuuli Tec</span>. | All rights reserved.{" "}
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  margin: 0;
  padding: 0;
  position: relative;

  .img {
    width: 250px;
    margin-left: -15px;
  }
  span {
    color: var(--clr-primary-5);
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  .pg-footer {
    font-family: "Roboto", sans-serif;
  }

  .footer {
    background-color: var(--clr-black);
    color: #fff;
  }
  .footer-wave-svg {
    background-color: transparent;
    display: block;
    height: 30px;
    position: relative;
    top: -1px;
    width: 100%;
  }
  .footer-wave-path {
    fill: var(--clr-white);
  }

  .footer-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1230px;
    padding: 40px 15px 450px;
    position: relative;
  }

  .footer-content-column {
    box-sizing: border-box;
    float: left;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    color: #fff;
  }

  .footer-content-column ul li a {
    color: #fff;
    text-decoration: none;
  }

  .footer-logo-link {
    display: inline-block;
  }
  .footer-menu {
    margin-top: 30px;
  }

  .footer-menu-name {
    color: #fffff2;
    font-size: 15px;
    font-weight: 900;
    letter-spacing: 0.1em;
    line-height: 18px;
    margin-bottom: 0;
    margin-top: 0;
    text-transform: uppercase;
  }
  .footer-menu-list {
    list-style: none;
    margin-bottom: 0;
    margin-top: 10px;
    padding-left: 0;
  }
  .footer-menu-list li {
    margin-top: 5px;
  }

  .footer-call-to-action-description {
    color: #fffff2;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .footer-call-to-action-button:hover {
    background-color: var(--clr-grey-1);
    color: var(--clr-primary-7);
  }
  .button:last-of-type {
    margin-right: 0;
  }
  .footer-call-to-action-button {
    background-color: var(--clr-grey-7);
    border-radius: 21px;
    color: #fffff2;
    display: inline-block;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.1em;
    line-height: 18px;
    padding: 12px 30px;
    margin: 0 10px 10px 0;
    text-decoration: none;
    text-transform: uppercase;
    transition: background-color 0.2s;
    cursor: pointer;
    position: relative;
  }
  .footer-call-to-action {
    margin-top: 30px;
  }
  .footer-call-to-action-title {
    color: #fffff2;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: 0.1em;
    line-height: 18px;
    margin-bottom: 0;
    margin-top: 0;
    text-transform: uppercase;
  }
  .footer-call-to-action-link-wrapper {
    margin-bottom: 0;
    margin-top: 10px;
    color: #fff;
    text-decoration: none;
  }
  .footer-call-to-action-link-wrapper a {
    color: #fff;
    text-decoration: none;
  }

  .footer-social-links {
    bottom: 0;
    height: 54px;
    position: absolute;
    right: 0;
    width: 236px;
  }

  .footer-social-amoeba-svg {
    height: 54px;
    left: 0;
    display: block;
    position: absolute;
    top: 0;
    width: 236px;
  }

  .footer-social-amoeba-path {
    fill: var(--clr-grey-3);
  }

  .footer-social-link.linkedin {
    height: 26px;
    left: 5px;
    top: 11px;
    width: 26px;
  }

  .footer-social-link {
    display: block;
    padding: 10px;
    position: absolute;
  }

  .hidden-link-text {
    position: absolute;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    -webkit-clip-path: inset(0px 0px 99.9% 99.9%);
    clip-path: inset(0px 0px 99.9% 99.9%);
    overflow: hidden;
    height: 1px;
    width: 1px;
    padding: 0;
    border: 0;
    top: 50%;
  }

  .footer-social-icon-svg {
    display: block;
  }

  .footer-social-icon-path {
    fill: #fffff2;
    transition: fill 0.2s;
  }

  .footer-social-link.twitter {
    height: 28px;
    left: 67px;
    top: 3px;
    width: 28px;
  }

  .footer-social-link.insta {
    height: 24px;
    left: 127px;
    top: 12px;
    width: 24px;
  }

  .footer-social-link.facebook {
    height: 37px;
    left: 181px;
    top: 7px;
    width: 34px;
  }

  .footer-copyright {
    background-color: var(--clr-grey-3);
    color: #fff;
    padding: 15px 30px;
    text-align: center;
  }

  .footer-copyright-wrapper {
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
  }

  .footer-copyright-text {
    color: #fff;
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 0;
    margin-top: 0;
  }

  .footer-copyright-link {
    color: #fff;
    text-decoration: none;
  }
  /* Media Query For different screens */
  @media (min-width: 320px) and (max-width: 479px) {
    /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
    .footer-content {
      margin-left: auto;
      margin-right: auto;
      max-width: 1230px;
      padding: 40px 15px 1050px;
      position: relative;
    }
  }
  @media (min-width: 480px) and (max-width: 599px) {
    /* smartphones, Android phones, landscape iPhone */
    .footer-content {
      margin-left: auto;
      margin-right: auto;
      max-width: 1230px;
      padding: 40px 15px 1050px;
      position: relative;
    }
  }
  @media (min-width: 600px) and (max-width: 800px) {
    /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
    .footer-content {
      margin-left: auto;
      margin-right: auto;
      max-width: 1230px;
      padding: 40px 15px 1050px;
      position: relative;
    }
  }
  @media (min-width: 801px) {
    /* tablet, landscape iPad, lo-res laptops ands desktops */
  }
  @media (min-width: 1025px) {
    /* big landscape tablets, laptops, and desktops */
  }
  @media (min-width: 1281px) {
    /* hi-res laptops and desktops */
  }
  @media (min-width: 760px) {
    .footer-content {
      margin-left: auto;
      margin-right: auto;
      max-width: 1230px;
      padding: 40px 15px 450px;
      position: relative;
    }

    .footer-wave-svg {
      height: 50px;
    }

    .footer-content-column {
      width: 24.99%;
    }
  }
  @media (min-width: 568px) {
    /* .footer-content-column {
      width: 49.99%;
  } */
  }
`;

export default Footer;
