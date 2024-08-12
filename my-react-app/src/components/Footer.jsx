import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4 text-red-400">Contact Us</h2>
            <p className="text-lg mb-2 text-red-200">
              Email: <a href="mailto:mehulsingh2022@vitbhopal.ac.in" className="underline hover:text-gray-300">mehulsingh2022@vitbhopal.ac.in</a>
            </p>
            <p className="text-lg mb-2 text-red-200">Phone: +91 2837921798</p>
            <p className="text-lg mb-4 text-red-200">Address: VIT Bhopal University, Bhopal, India</p>
            <img
              src="https://image3.mouthshut.com/images/imagesp/925979577s.jpg"
              alt="University Logo"
              className="w-24 h-24 object-contain"
            />
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-end">
            <h2 className="text-2xl font-semibold mb-4 text-red-400">Follow Us</h2>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/youruniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <i className="fab fa-facebook-f fa-2x"></i>
              </a>
              <a
                href="https://twitter.com/youruniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a
                href="https://www.instagram.com/youruniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/youruniversity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <i className="fab fa-linkedin-in fa-2x"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center mt-8">
          <p className="text-lg">
            <span className="font-semibold text-red-400">Disclaimer:</span> Our university is committed to maintaining a safe and respectful environment. Ragging and any form of harassment are strictly prohibited. Please report any incidents and support our efforts to uphold a ragging-free campus.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
