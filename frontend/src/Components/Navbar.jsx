import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlusSquare } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    // Apply or remove the dark mode class on the root <html> element
    if (!darkMode) {
      document.documentElement.classList.add('dark'); // Activate dark mode
    } else {
      document.documentElement.classList.remove('dark'); // Deactivate dark mode
    }
  };

  return (
    <div className='max-w-[1140px] mx-auto px-4 h-16 flex items-center justify-between flex-col sm:flex-row'>
      <div className="text-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        <Link to="/">SKINTELLECT</Link>
      </div>

      <div className="flex items-center space-x-4">
       
        <Link to="/create" className="flex items-center">
          <button className="p-2">
            <FaPlusSquare />
          </button>
        </Link>

        {/* Dark mode toggle button */}
        <button
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition duration-300"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <MdLightMode className="text-yellow-500" />
          ) : (
            <MdDarkMode className="text-gray-800 dark:text-gray-200" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
