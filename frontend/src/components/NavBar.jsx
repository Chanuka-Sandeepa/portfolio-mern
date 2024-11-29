/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { FaHome, FaUser, FaCog, FaEnvelope, FaCoins, FaBars, FaTimes } from 'react-icons/fa';
import logopic from '../mypic.png'

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu visibility

  const links = [
    { href: '#home', label: 'Home', icon: <FaHome /> },
    { href: '#about', label: 'About', icon: <FaUser /> },
    { href: '#projects', label: 'Projects', icon: <FaCoins /> },
    { href: '#skills', label: 'Skills', icon: <FaCog /> },
    { href: '#contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  const handleScroll = (href) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close menu after navigating (for mobile view)
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur-lg border-b border-gray-700 shadow-xl z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section with Image */}
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-blue-500 transition-transform duration-300 hover:scale-110">
            <img
              src={logopic} // Replace with your image URL
              alt="Logo"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Hamburger Menu Icon for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 text-2xl hover:text-white"
          >
            {menuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between menu and close icon */}
          </button>
        </div>

        {/* Navigation Links (Desktop and Mobile) */}
        <div
          className={`fixed md:static top-0 right-0 h-full md:h-auto bg-gray-900 md:bg-transparent z-40 md:z-auto w-2/3 md:w-auto transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:translate-x-0 flex flex-col md:flex-row md:items-center gap-6 px-6 md:px-0 py-8 md:py-0`}
        >
          {links.map(({ href, label, icon }) => (
            <button
              key={href}
              onClick={() => handleScroll(href)}
              className="flex items-center gap-4 text-lg font-medium text-gray-300 hover:text-white transition-transform duration-300 transform hover:scale-105"
            >
              <span className="text-2xl">{icon}</span>
              <span className="text-xl">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
