import React from "react";
import { FaHome, FaGlobe, FaCog, FaPlus } from "react-icons/fa";


const Side: React.FC = () => {
  return (
    <div id="default-sidebar" className="fixed top-0 left-0 z-40 w-14 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <aside className="flex flex-col items-center h-30 bg-gray-800">
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
      </div>
    </div>
  );
};

export default Side;
