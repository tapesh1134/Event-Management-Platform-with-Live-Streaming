import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ loggedInUser, onLogout }) => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div>
        <Link to="/" className="text-white text-xl">My App</Link>
      </div>
      <div>
        {loggedInUser ? (
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Welcome, {loggedInUser.username}</span>
            <button onClick={onLogout} className="text-white bg-red-500 px-4 py-2 rounded">
              Logout
            </button>
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link to="/login" className="text-white">Login</Link>
            <Link to="/signup" className="text-white">Signup</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
