import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#060644] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are dedicated to providing the best healthcare services to ensure your well-being.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-white">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Healthcare St, Kigali City, Rwanda</p>
            <p className="text-gray-400">Email: originalhelplink@gmail.com</p>
            <p className="text-gray-400">Phone: +250 790 113 334</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2023 HelpLink. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-full text-gray-800"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;