import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SideNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here (like clearing user data, tokens, etc.)
    navigate('/'); // Redirect to login page
  };

  return (
    <div className="w-1/6 h-screen bg-gray-800 text-white p-4 fixed top-0 left-0 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-4">Navigation</h2>
        <ul>
          <li className="mb-2">
            <Link to="/dashboard" className="hover:text-gray-400">
              User Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/form" className="hover:text-gray-400">
              Form
            </Link>
          </li>
          {/* Add more navigation links here */}
        </ul>
      </div>

      <div className="mt-auto">
        <button
          onClick={handleLogout}
          className="bg-red-500 w-full py-2 mt-4 text-center rounded-lg hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideNav;
