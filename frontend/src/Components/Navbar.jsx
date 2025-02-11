import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlusSquare, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { IoPersonOutline } from 'react-icons/io5';
import axios from 'axios';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null); // User state for authentication

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await axios.post('/api/users/logout');
      setUser(null); // Clear user state on logout
      alert('Logged out successfully!');
    } catch (err) {
      console.error('Logout failed', err.response?.data?.message || err.message);
    }
  };

  return (
    <div className='max-w-[1140px] mx-auto px-4 h-16 flex items-center justify-between flex-col sm:flex-row'>
      {/* Logo */}
      <div className="text-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        <Link to="/">SKINTELLECT</Link>
      </div>

      {/* Navbar Items */}
      <div className="flex items-center space-x-4">
        {/* Create Button */}
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

        {/* Authentication Links */}
        {user ? (
          <>
            {/* Profile */}
            <Link to="/profile" className="flex items-center">
              <IoPersonOutline className="text-2xl text-gray-800 dark:text-white" />
            </Link>

            {/* Logout Button */}
            <button onClick={handleLogout} className="flex items-center p-2">
              <FaSignOutAlt className="text-red-500" />
            </button>
          </>
        ) : (
          <>
            {/* Login */}
            <Link to="/login" className="flex items-center">
              <FaSignInAlt className="text-green-500 text-xl" />
            </Link>

            {/* Register */}
            <Link to="/register" className="flex items-center">
              <button className="p-2 text-blue-500">SignUp</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
