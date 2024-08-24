import React from "react";
import { FaHome, FaGlobe, FaCog } from "react-icons/fa";

const Side: React.FC = () => {
  return (
    <div className="flex bg-gray-100 text-gray-900">
      <aside className="flex h-screen w-20 flex-col items-center border-r border-gray-200 bg-white">
        <div className="flex h-[4.5rem] w-full items-center justify-center border-b border-gray-200 p-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsapwuIZ2JPUVRaWSoX_xoEIOHWxneY7EupS8gsFriA&s"
            alt="Logo"
          />
        </div>
        <nav className="flex flex-1 flex-col gap-y-4 pt-10">
          <a href="#" className="group relative rounded-xl bg-gray-100 p-2 text-blue-600 hover:bg-gray-50">
            <FaHome className="h-6 w-6" />
            <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
              <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                <div className="absolute inset-0 -left-1 flex items-center">
                  <div className="h-2 w-2 rotate-45 bg-white"></div>
                </div>
                Layouts <span className="text-gray-400">(Y)</span>
              </div>
            </div>
          </a>
          <a href="#" className="text-gray-400 group relative rounded-xl p-2 hover:bg-gray-50">
            <FaGlobe className="h-6 w-6 group-hover:text-blue-600" />
            <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
              <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                <div className="absolute inset-0 -left-1 flex items-center">
                  <div className="h-2 w-2 rotate-45 bg-white"></div>
                </div>
                Color Scheme <span className="text-gray-400">(Y)</span>
              </div>
            </div>
          </a>
        </nav>

        <div className="flex flex-col items-center gap-y-4 py-10">
          <button className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100">
            <FaCog className="h-6 w-6" />
          </button>

          <button className="mt-2 rounded-full bg-gray-100">
            <img
              className="h-10 w-10 rounded-full"
              src="https://avatars.githubusercontent.com/u/35387401?v=4"
              alt="Profile"
            />
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Side;
