import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div className="footer-top-border"></div>
    <div className="footer-container">
      <div className="footer-col">
        <img src="/images/logo.png" alt="Logo" className="footer-logo" />
        <div className="footer-brand">Jackuline School of Thought</div>
        <div className="footer-address">
          Katarkhadak Village,<br /> Maharashtra 412108, India
        </div>
      </div>
      
      <div className="footer-col">
        <div className="footer-heading">Quick Links</div>
        <a href="/" className="footer-link">Home</a>
        <a href="/about" className="footer-link">About</a>
        <a href="/book" className="footer-link">Book</a>
        <a href="/experiences" className="footer-link">Experiences</a>
        <a href="/contact" className="footer-link">Contact</a>
      </div>
      
      <div className="footer-col">
        <div className="footer-heading">Contact</div>
        <div className="contact-item">
          <span className="contact-label">Phone:</span> 
          <a href="tel:+919607393939" className="footer-link inline">+91 9607393939</a>
        </div>
        <div className="contact-item email-item">
          <span className="contact-label">Email:</span> 
          <a href="mailto:jackulineschoolofthought@gmail.com" className="footer-link inline email-link">
            jackulineschoolofthought@gmail.com
          </a>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/JackulineSOT"
             target="_blank"
             rel="noopener noreferrer"
             className="social-link"
             aria-label="Facebook">
            <FaFacebookF className="social-icon" />
          </a>
          <a href="https://www.instagram.com/jackulineschoolofthought"
             target="_blank"
             rel="noopener noreferrer"
             className="social-link"
             aria-label="Instagram">
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>
      
      <div className="footer-col">
        <div className="footer-heading">Adventures</div>
        <a href="/lakeside" className="footer-link">Lakeside Excursion</a>
        <a href="/hilltop" className="footer-link">Hill-top Expedition</a>
        <a href="/safari" className="footer-link">Jungle Safari</a>
        <a href="/campsite" className="footer-link">Campsite Activities</a>
      </div>
    </div>
    
    <div className="footer-divider"></div>
    
    <div className="footer-bottom">
      &copy; {new Date().getFullYear()} Jackuline School of Thought. All rights reserved.
    </div>
    
    <style jsx>{`
      .footer {
        background: #1e5631;
        color: #fff;
        padding: 60px 24px 32px;
        position: relative;
      }
      
      .footer-top-border {
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 4px;
        background: #ffcc00;
      }
      
      .footer-container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex; flex-wrap: wrap;
        justify-content: space-between;
        gap: 40px;
      }
      
      .footer-col {
        flex: 1 1 230px;
        min-width: 200px;
      }
      
      .footer-logo {
        width: 70px;
        margin-bottom: 16px;
        filter: brightness(1.05);
      }
      
      .footer-brand {
        font-weight: 700;
        font-size: 1.3rem;
        margin-bottom: 10px;
        letter-spacing: 0.5px;
      }
      
      .footer-address {
        font-size: 1rem;
        opacity: 0.9;
        line-height: 1.6;
      }
      
      .footer-heading {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 18px;
        position: relative;
        padding-bottom: 10px;
      }
      
      .footer-heading::after {
        content: '';
        position: absolute;
        bottom: 0; left: 0;
        width: 40px; height: 3px;
        background: #ffcc00;
        border-radius: 2px;
      }
      
      .footer-link {
        color: #fff;
        text-decoration: none;
        display: block;
        margin-bottom: 12px;
        font-size: 1.05rem;
        opacity: 0.85;
        transition: all 0.25s ease;
      }
      
      .footer-link:hover {
        opacity: 1;
        padding-left: 6px;
        color: #ffcc00;
      }
      
      .footer-link.inline {
        display: inline;
        margin-bottom: 0;
      }
      
      .footer-link.inline:hover {
        padding-left: 0;
        text-decoration: underline;
      }
      
      .contact-item {
        margin-bottom: 12px;
        line-height: 1.5;
      }
      
      .email-item {
        word-break: break-word;
      }
      
      .contact-label {
        font-weight: 600;
        margin-right: 6px;
        display: block;
        margin-bottom: 4px;
      }
      
      .email-link {
        font-size: 0.95rem;
      }
      
      .social-icons {
        display: flex;
        gap: 12px;
        margin-top: 20px;
      }
      
      .social-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px; height: 40px;
        border-radius: 50%;
        background-color: rgba(255,255,255,0.2);
        transition: all 0.3s ease;
      }
      
      .social-link:hover {
        background-color: #ffcc00;
        transform: translateY(-3px);
      }
      
      .social-icon {
        color: #1e5631;
        width: 20px; height: 20px;
      }
      
      .footer-divider {
        max-width: 1200px;
        margin: 30px auto 0;
        height: 1px;
        background: rgba(255,255,255,0.15);
      }
      
      .footer-bottom {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
        padding-top: 24px;
        font-size: 0.95rem;
        opacity: 0.75;
      }
      
      @media (max-width: 768px) {
        .footer {
          padding: 50px 20px 30px;
        }
        
        .footer-container {
          flex-direction: column;
          gap: 40px;
        }
        
        .footer-col {
          width: 100%;
        }
      }
    `}</style>
  </footer>
);

export default Footer;
