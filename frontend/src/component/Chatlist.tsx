import React from "react";
import { FaSearch } from "react-icons/fa";

interface Chat {
  name: string;
  status: string;
  avatar: string;
  online: boolean;
}

const chats: Chat[] = [
  { name: "Richard Wilson", status: "playing NFS Heat", avatar: "https://avatars.githubusercontent.com/u/35387401?v=4", online: true },
  { name: "Nanami Kento", status: "", avatar: "https://via.placeholder.com/150", online: false },
  { name: "Nanami Kento, Satoru Gojo...", status: "4 participants", avatar: "https://via.placeholder.com/150", online: false },

];

const Chatlist: React.FC = () => {
  return (
    <div className="sm:ml-14">
    <div className="flex flex-col w-64 bg-gray-900">
      {/* Search Bar */}
      <div className="p-4">
        <div className="flex items-center bg-gray-800 rounded-full px-4 py-2">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent flex-1 ml-2 outline-none text-gray-100 placeholder-gray-500"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="overflow-y-auto">
        {chats.map((chat, index) => (
          <div
            key={index}
            className={`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-800 ${
              index === 4 ? "bg-gray-800" : ""
            }`}
          >
            <div className="relative">
              <img
                src={chat.avatar}
                alt={chat.name}
                className="h-10 w-10 rounded-full"
              />
              {chat.online && (
                <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 border-2 border-gray-900"></span>
              )}
            </div>
            <div className="ml-4">
              <div className="text-sm font-semibold">{chat.name}</div>
              {chat.status && (
                <div className="text-xs text-gray-400">{chat.status}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Chatlist;
