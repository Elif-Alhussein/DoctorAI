import React from "react";
import { Link } from "react-router-dom";

const ProfileMenu = ({ isProfileMenuOpen, toggleMenu }) => {
  if (!isProfileMenuOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-36 bg-slate-50 rounded-lg shadow-lg py-2 z-10 flex flex-col items-center justify-center">
      <Link
        to="/login"
        onClick={toggleMenu}
        className="block px-4 py-2 text-gray-800 hover:bg-gray-300 hover:scale-110 hover:shadow-2xl transition-all duration-150 ease-linear rounded-full text-center font-bold"
        target="_blank" 
        rel="noopener noreferrer"
      >
        Login
      </Link>
      <Link
        to="/signin"
        onClick={toggleMenu}
        className="block px-4 py-2 text-gray-800 hover:bg-gray-300 hover:scale-110 hover:shadow-2xl transition-all duration-150 ease-linear rounded-full text-center font-bold"
        target="_blank" 
        rel="noopener noreferrer"
      >
        Sign in
      </Link>
    </div>
  );
};

export default ProfileMenu;
