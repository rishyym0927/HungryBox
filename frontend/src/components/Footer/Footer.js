import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-left">
          <img className="logo" src={assets.logo} alt="" />
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>

        <div className="footer-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div className="footer-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>+91 0123456789</li>
            <li>hungerybox@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="copyright">
        Copyright 2024 @ HungryBox.com - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
