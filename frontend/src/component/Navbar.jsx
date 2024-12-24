import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Event App</Link>
        <div className="space-x-4">
          {user ? (
            <>
              <span className="text-white">{`Welcome, ${user.username}`}</span>
              <button
                onClick={onLogout}
                className="text-white hover:text-blue-500"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-blue-500">Login</Link>
              <Link to="/signup" className="text-white hover:text-blue-500">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
