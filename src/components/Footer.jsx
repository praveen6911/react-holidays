import React from 'react';
import '../styles/Footer.css'; // Import CSS file for footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">IDI oka footer</p>
          <div className="social-icons">
            {/* Add social media icons here */}
            <a href="#" className="social-icon-link"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon-link"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon-link"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
