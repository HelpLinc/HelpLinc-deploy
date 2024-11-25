import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`bg-[#060644] font-bold text-white p-4 flex justify-between items-center ${isMenuOpen ? 'h-auto' : 'h-24'}`}>
      <div className="flex items-center">
        <img src='/HelpLogo.webp' alt="Logo" className="h-10 mr-4" />
        <h1 className="text-2xl font-bold">HelpLinc</h1>
      </div>

      {/* Burger icon for mobile */}
      <button
        className="lg:hidden p-2 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Navigation menu */}
      <nav className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} mr-20`}>
        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
          <li><Link to="/frequently-asked-questions" className="hover:text-gray-300">FAQ</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;