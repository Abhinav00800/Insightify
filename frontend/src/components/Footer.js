import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
         
          <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear()} Insightify. All rights reserved.
          </p>

      
          <div className="flex space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaTwitter className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/abhinav_sharma0080?igsh=Y2RwZHVoamFtdjJ1&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaFacebook className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhinavsharma0080/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
