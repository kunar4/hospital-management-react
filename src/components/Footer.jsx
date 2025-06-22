import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-success text-light py-4">
      <div className="container text-center">
        <p className="mb-1">&copy; 2025 Healthcare Startup. All rights reserved.</p>
        <p className="mb-2">Stay connected with us:</p>
        <div className="mb-3">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light mx-2">
            <i className="bi bi-facebook"></i> Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-light mx-2">
            <i className="bi bi-twitter"></i> Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-light mx-2">
            <i className="bi bi-instagram"></i> Instagram
          </a>
        </div>

        <div>
          <Link to="/faq" className="text-light mx-2">FAQ</Link>
          <Link to="/privacy" className="text-light mx-2">Privacy Policy</Link>
          <Link to="/terms" className="text-light mx-2">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
