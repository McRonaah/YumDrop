import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-400 py-4 rounded-lg">
    <div className="container mx-auto flex justify-between items-center">
      <div className="social-media-icons flex space-x-6">
        <a href="https://www.linkedin.com/in/ronald-kipchirchir-034983246/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-gray-400 hover:text-white transition-all duration-300" />
        </a>
        <a href="https://twitter.com/Ronaah_254/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="text-gray-400 hover:text-white transition-all duration-300" />
        </a>
        <a href="https://www.instagram.com/ronaah_254_africa/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-gray-400 hover:text-white transition-all duration-300" />
        </a>
        <a href="https://www.facebook.com/ronaah254/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="text-gray-400 hover:text-white transition-all duration-300" />
        </a>
      </div>
      <div>
      <p>CopyRight By Ronald Kipchirchir&#169;</p>
      </div>
      <div className="footer-text">
        <p className="text-sm">&copy; 2023 YumDrop.  All Rights Reserved &trade; inc.</p>
      </div>
    </div>
  </footer>
);
};
export default Footer;
