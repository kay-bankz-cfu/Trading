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
              CAPITAL FLOW TRADING <br /> HUB
            </h2>
            <h3 className="sub-heading">Elite By Strategy</h3>
            <p className="subtitle">
              Unlock the power of the financial market with our
              institutional-grade strategies
              and all in one ecosystem—perfect for beginners and pro traders
              alike.
            </p>

            <div className="cta-group">
              <a href="#about_us" className="btn primary">
                Explore
              </a>
              <a href="#learn-more" className="btn outline">
                Learn More
              </a>
            </div>
          </div>
        </header>

        <div className="header_img" data-aos="fade-left">
          <img src="./dashboardd.jpg" alt="Capital Flow" />
        </div>
      </section>

      <div className="section_two" id="about_us">
        <h1>Why Choose Capital Flow?</h1>
        <h2 className="section_two_headline">
          Trade with Confidence - Thrive with Expertise
        </h2>
        <p className="section_two_subheading">
          CFTRADINGHUB stand out by blending cutting-edge strategies
          with unmatched reliability
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
          <a className="discover" href="https://chat.whatsapp.com/CqnLFOQXKYe67rXhQCandc?mode=wwt">
            Discover More
          </a>
        </div>
      </div>

      <section className="features" id="learn-more">
        <div className="container">
          <h1>Services we offer</h1>
          <h2>
            Comprehensive Solutions for Market Success & Real-time Signals
          </h2>
          <p className="features_subheading">
            Our Unified Ecosystem Empowers You to Trade Smarter,Grow Faster And
            Succed With Confidence Across Forex, Crypto, Stocks, Commodities And
            Indices
          </p>
          <div className="feature-grid">
            <div className="feature-second" data-aos="fade-right">
              <img src="./bg1.jpg" alt="" />
              <h3>Multi-Asset Trading and Fund Management</h3>
              <p className="real">
                Grow your wealth with our professional trading and fund
                management services. We deploy capital across diverse markets
                using smart money tactics, algorithmic insight, and price
                action all governed by a 2% drawdown cap.
              </p>
            </div>
            <div className="feature-second">
              <img src="./bg3.jpg" alt="" />
              <h3>Analysis-Backed Signal</h3>
              <p className="real">
                Get real-time high-probability trade setup with clear entry,
                stop-loss and take-profit levels. Powered by price action
                fibonacci metrics and institutional oder flow, our signal offer
                clarity and confidence for traders at any level.
              </p>
            </div>
            <div className="feature-second" data-aos="fade-left">
              <img src="bg2.jpg" alt="" />
              <h3>Market Mastery Training</h3>
              <p className="real">
                Become a pro trader with our immersive training program. Learn
                smart money techniques, algorithmic layering, advanced risk
                management, and psychological discipline through live insight and
                mentorship, designed for beginners and veterans alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="dashboard_container">
        <h6 data-aos="zoom-in">
          With Capital Flow Trading Hub, You get a trusted partner, a powerful
          ecosystem and strategies that deliver. Either you are starting out or
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
          <summary>What makes Capital Flow Trading Hub's approach different?</summary>
          <p>
            Our approach is structured, data-driven, and risk-focused. Traders are executed based on predefined rules, statistical edge, and disciplined execution - not impulse or speculation.
          </p>
        </details>
        <details className="faq-item">
          <summary>What markets does Capital Flow Trading Hub operate in?</summary>
          <p>
            We analyze and trade Forex, Crypto, Indices, Commodities, and Selected Equities, adapting strategies to liquidity, volatility, and market conditions.
          </p>
        </details>
        <details className="faq-item">
          <summary>How is risk managed on each trade?</summary>
          <p>
            Risk is controlled through strict position sizing, predefined stop-loss levels, and maximum drawdown rules. Capital preservation is always the priority, ensuring long-term sustainability and consistency.
          </p>
        </details>
        <details className="faq-item">
          <summary>Is my capital protected?</summary>
          <p>
            Yes, our strict risk management limits trade drawdown to 2%,
            ensuring long-term capital safety.
          </p>
        </details>
        <details className="faq-item">
          <summary>Who is Capital Flow Trading Hub suitable for?</summary>
          <p>
            Our framework is suitable for disciplined traders, serious learners, and investors who value structured decision-making, risk management, and long-term consistency over short-term speculation.
          </p>
        </details>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <a href="#"> 
            <img src="./logo.png" alt="" />
          </a>
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
          <p>© 2023 Capital Flow Trading Hub. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default Landingpage;
