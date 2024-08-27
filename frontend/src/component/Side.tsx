import React from "react";
import { FaHome, FaGlobe, FaCog, FaPlus } from "react-icons/fa";


const Side: React.FC = () => {
  return (
    <aside className="flex flex-col items-center w-20 bg-gray-800 py-4 border-r border-gray-700">
      <div className="mb-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsapwuIZ2JPUVRaWSoX_xoEIOHWxneY7EupS8gsFriA&s"
          alt="Logo"
          className="h-10 w-10"
        />
      </div>
      <nav className="flex-1 flex flex-col items-center space-y-6">
        <a href="#" className="relative group flex flex-col items-center">
          <FaHome className="h-6 w-6 text-gray-400 group-hover:text-white" />
        </a>
        <a href="#" className="relative group flex flex-col items-center">
          <FaGlobe className="h-6 w-6 text-gray-400 group-hover:text-white" />
        </a>
        <a href="#" className="relative group flex flex-col items-center">
          <FaCog className="h-6 w-6 text-gray-400 group-hover:text-white" />
        </a>
      </nav>
      <div className="mt-6">
        <button className="p-2 bg-gray-700 rounded-full">
          <FaPlus className="h-6 w-6 text-gray-400" />
        </button>
      </div>
    </aside>
  );
};

export default Side;
