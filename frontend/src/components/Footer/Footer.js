import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <section class="section-container mt-4">
    <div class="container">
        <div class="grid-layout">
            <div class="brand-container">
                 <div class="crop">
        <img src="https://hungrybox-frontend.onrender.com/static/media/logo.7464c701e35f7a0fefb1.png" alt="Donald Duck"/>
    </div>

                <p class="brand-description">
                Craving something delicious? 🍕 We've got you covered! Fast. Fresh. Reliable. 💨
                </p>

                <ul class="social-icons">
                    <li>
                        <a href="#" title="" class="social-icon twitter">
                        <img src={assets.twitter_icon} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#" title="" class="social-icon facebook">
                        <img src={assets.facebook_icon} alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#" title="" class="social-icon linkedin">
                        <img src={assets.linkedin_icon} alt="" />
                        </a>
                    </li>
                    
                </ul>
            </div>

            <div class="links-container">
                <p class="section-title">Company</p>

                <ul class="links-list">
                    <li>
                        <a href="#" title="" class="link-item">About</a>
                    </li>
                    <li>
                        <a href="#" title="" class="link-item">Features</a>
                    </li>
                    <li>
                        <a href="#" title="" class="link-item">Works</a>
                    </li>
                    <li>
                        <a href="#" title="" class="link-item">Career</a>
                    </li>
                </ul>
            </div>

            <div class="help-container">
                <p class="section-title">Help</p>

                <ul class="links-list">
                    <li>
                        <a href="#" title="" class="link-item">Customer Support</a>
                    </li>
                    <li>
                        <a href="#" title="" class="link-item">Delivery Details</a>
                    </li>
                    <li>
                        <a href="#" title="" class="link-item">Terms & Conditions</a>
                    </li>
                    <li>
                        <a href="#" title="" class="link-item">Privacy Policy</a>
                    </li>
                    
                </ul>
            </div>
            <div class="subscription-container">
    <p class="subscription-heading">Subscribe to newsletter</p>

    <form action="#" method="POST" class="subscription-form">
        <div>
            <label for="email" class="sr-only"></label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                class="email-input"
            />
        </div>

        <button type="submit" class="subscribe-button">Subscribe</button>
    </form>
</div>

        </div>
        <hr class="custom-divider" />

<p class="footer-text">© Copyright 2021, All Rights Reserved by hungrybox</p>

    </div>
</section>

  );
};

export default Footer;
