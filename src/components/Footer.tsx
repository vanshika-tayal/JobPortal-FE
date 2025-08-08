import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <div className="footer-logo-icon">JP</div>
            <span className="footer-logo-text">JobPortal</span>
          </div>
          <p className="footer-tagline">Your gateway to career opportunities</p>
        </div>

        <div className="footer-center">
          <p className="copyright">
            © {currentYear} JobPortal. All rights reserved.
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;