import React from 'react';
import axios from 'axios';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/api/users/logout');
      alert('Logged out successfully!');
    } catch (err) {
      console.error('Logout failed', err.response?.data?.message || err.message);
    }
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      Logout
    </button>
  );
};

export default Logout;
