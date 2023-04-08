import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-400 py-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="social-media-icons flex space-x-6">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-gray-400 hover:text-white transition-all duration-300" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="text-gray-400 hover:text-white transition-all duration-300" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-gray-400 hover:text-white transition-all duration-300" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="text-gray-400 hover:text-white transition-all duration-300" />
        </a>
      </div>
      <div className="footer-text">
        <p className="text-sm">&copy; 2023 YumDrop.  All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);
};
export default Footer;
