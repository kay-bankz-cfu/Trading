import React from "react";
import "./Landingpage.css";
import Navbar from "./Navbar.jsx";
import { SiMicrostrategy } from "react-icons/si";
import { GiCapitol } from "react-icons/gi";
import { GiCommercialAirplane } from "react-icons/gi";
import { GiTeacher } from "react-icons/gi";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";
import { SiCoinmarketcap } from "react-icons/si";

function Landingpage() {
  return (
    <div className="landing_page">
      <Navbar />

      <section className="hero-wrapper">
        <header className="landing-hero" data-aos="fade-right">
          <div className="hero-content">
            <h2>
              CAPIATL FLOW TRADING <br /> HUB
            </h2>
            <h3 className="sub-heading">Elite By Strategy</h3>
            <p className="subtitle">
              Unlock the power of the financial market with our
              institutional-grade strategies
              <br />
              and all in one ecosystem—perfect for beginners and pro traders
              alike.
            </p>

            <div className="cta-group">
              <a href="#about_us" className="btn primary">
                Explore CF
              </a>
              <a href="#learn-more" className="btn outline">
                Learn More
              </a>
            </div>
          </div>
        </header>

        <div className="header_img" data-aos="fade-left">
          <img src="/capitalflow.png" alt="Capital Flow" />
        </div>
      </section>

      <div className="section_two" id="about_us">
        <h1>Why Choose Capital Flow?</h1>
        <p className="section_two_headline">
          Trade with Confidence.. Thrive with Expertise
        </p>
        <p className="section_two_subheading">
          Capital Flow Trading Hub Stand Out By blending Cutting-Edge Strategies
          With Unmatched Reliability
        </p>
        <b className="section_two_content">Here is why traders choose us:</b>
        <div>
          <div className="section_two_divided">
            <div className="content_container">
              <i>
                <SiMicrostrategy />
              </i>
              <b>Hybrid Strategy Edge</b>
              <div>
                Our unique fusion of smart money concept,
                algorithmic precision, and institutional analysis delivers
                high probability trades
              </div>
            </div>
            <div className="content_container">
              <i>
                <GiCapitol />
              </i>
            
              <b>Ironclad Capital Protection</b>
              <div>
                Ever trade is capped at a 2% drawdown,
               ensuring your capital is safe with our disciplined
                risk management
              </div>
            </div>
          </div>

          <div className="section_two_divided">
            <div className="content_container">
              <i>
                <GiCommercialAirplane />
              </i>
              <b>All-in-One Ecosystem</b>
              <div>
                Seamlessly access fund management, trade signal,
               expert consultation and mastery training under one
                trusted brand.
              </div>
            </div>
            <div className="content_container">
              <i>
                <GiTeacher />
              </i>
              
              
              <b>Tailored to You</b>
              <div>
                Personalized onboarding and flexible profit-sharing  align
                with your goals, from individual
                 investors to institutions
              </div>
            </div>
          </div>
        </div>
        <div className="discover-wrapper">
          <a className="discover" href="#">
            Discover More
          </a>
        </div>
      </div>

      <section className="features" id="learn-more">
        <div className="container">
          <h2>Services we offer</h2>
          <h4>
            Comprehensive Solutions for Market Success & Real-time Signals
          </h4>
          <p>
            Our Unified Ecosystem Empowers You to Trade Smarter,Grow Faster And
            Succed With Confidence Across Forex, Crypto, Stocks, Commodities And
            Indices
          </p>
          <div className="feature-grid">
            <div className="feature" data-aos="fade-right">
              <img src="./bg1.jpg" alt="" />
              <h3>Multi-Asset Trading and Fund Management</h3>
              <p>
                Grow your wealth with our professional tradimg and fund
                management services. We deploy capital across diverse markets
                using smart money tactics, algorithemic insight, and price
                action all governed by a 2% drowndown cap.
              </p>
            </div>
            <div className="feature">
              <img src="./bg3.jpg" alt="" />
              <h3>Analysis-Backed Signal</h3>
              <p>
                Get real-time high-probability trade setup with clear entry,
                stop-loss and take-profit levels. Powered by price action
                fibonacci metrics and institutional oder flow, our signal offer
                clarity and confidence for traders at any level.
              </p>
            </div>
            <div className="feature" data-aos="fade-left">
              <img src="bg2.jpg" alt="" />
              <h3>Market Mastery Traning</h3>
              <p>
                Become a pro trader with our immersive training program. Learn
                smart money techniques, algorithemic layerin, advanced risk
                management, and psycological dicipline through live insight and
                mentorship, desighned for beginners and veterians alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="dashboard_container">
        <h6 data-aos="zoom-in">
          With Capital Flow Trading Hub, You get a trusted partner, a powerful
          ecosystem and strategies that deliver. Whether you are starting out or
          scaling up, we're here to guide you every step of the way.
        </h6>
        <img src="./dashboard.jpg" alt="" data-aos="zoom-in-up" />
      </div>

      <section className="faq">
        <div>
          <h2>FAQ</h2>
          <p>Answers to Your Questions</p>
        </div>

        <details className="faq-item">
          <summary>Who is Capital Flow Trading Hub for?</summary>
          <p>
            We serve both new and experienced traders looking to succeed in
            Forex, Crypto, Stocks, Commodities, and Indices.
          </p>
        </details>
        <details className="faq-item">
          <summary>What makes your strategies stand out?</summary>
          <p>
            Our hybrid approach combines smart money, algorithmic precision and
            institutional insights, backed by 2% drawdown cap for safety.
          </p>
        </details>
        <details className="faq-item">
          <summary>How can i get started?</summary>
          <p>
            Reach out to explore our services and personalized onboarding
            process tailored to your goals.
          </p>
        </details>
        <details className="faq-item">
          <summary>Is my capital protected?</summary>
          <p>
            Yes, our strict risk management limits trade drawdown to 2%,
            ensuring long-term capital safety.
          </p>
        </details>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h3>Capital Flow</h3>
            <p>
              Empowering traders with institutional-grade strategies and a
              unified trading ecosystem.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#about_us">About Us</a>
              </li>
              <li>
                <a href="#learn-more">Services</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact" id="contact">
            <h4>Contact</h4>
            <p>Email: capitalflowtradinghub@gmail.com</p>
            <p>Phone: +234 706 811 3071</p>
          </div>
          <div className="footer-icon">
            <a href="https://www.instagram.com/cftradinghub_?igsh=b2V2Y2Rtb25qczd3">
              <FaInstagramSquare />
            </a>
            <a href="https://www.tiktok.com/@cftradinghub?_r=1&_t=ZS-92Z5h2xxjy1"><AiFillTikTok /></a>
            <a href="https://x.com/CFtradinghub?s=09">
              <FaXTwitter />
            </a>
            <a href="https://chat.whatsapp.com/CqnLFOQXKYe67rXhQCandc?mode=wwt">
              <IoLogoWhatsapp />
            </a>
            <a href="https://t.me/CF_tradinghub">
              <FaTelegramPlane />
            </a>
            <a href="https://youtube.com/@cftradinghub?si=NuFQc840fSQA2OCG">
              <ImYoutube2 />
            </a>
            <a href="https://coinmarketcap.com/community/profile/CFtradinghub/">
              <SiCoinmarketcap />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Capital Flow Trading Hub. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default Landingpage;
