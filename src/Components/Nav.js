import React, { useState, useCallback } from "react";
import NavLinks from "./NavLinks";
import ProfileMenu from "./ProfileMenu";
import "remixicon/fonts/remixicon.css";
import logo from "../images/doctor2.jpg";
import { navLinks } from "../data/LinksData";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const handleMobileMenuToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleProfileMenuToggle = useCallback(() => {
    setIsProfileMenuOpen((prev) => !prev);
  }, []);

  return (
    <nav className="container mx-auto p-6">
      <div className="flex items-center justify-between">
        <button>
          <img src={logo} alt="Logo" className="size-28" />
        </button>

        <div className="hidden md:flex space-x-10">
          <NavLinks links={navLinks} />
          <div className="relative">
            <button
              onClick={handleProfileMenuToggle}
              className="py-2 px-6 rounded-full text-white text-2xl bg-cyan-600 hover:bg-cyan-800 hover:scale-110 hover:shadow-2xl transition-all duration-150 ease-linear"
            >
              Profile
              <i className="ri-arrow-down-s-fill"></i>
            </button>
            <ProfileMenu
              isProfileMenuOpen={isProfileMenuOpen}
              toggleMenu={handleProfileMenuToggle}
            />
          </div>
        </div>

        <button
          id="mobile-btn"
          className="md:hidden"
          onClick={handleMobileMenuToggle}
        >
          <i className="ri-menu-line text-3xl"></i>
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="absolute flex flex-col items-center space-y-4 bg-gray-50 py-8 left-6 right-6 drop-shadow-lg border border-gray-300 mt-4">
          <NavLinks links={navLinks} />
          <div className="relative">
            <button
              onClick={handleProfileMenuToggle}
              className="py-2 px-6 rounded-full text-white text-2xl bg-cyan-600 hover:bg-cyan-800 hover:scale-110 hover:shadow-2xl transition-all duration-150 ease-linear"
            >
              Profile
              <i className="ri-arrow-down-s-fill"></i>
            </button>
            <ProfileMenu
              isProfileMenuOpen={isProfileMenuOpen}
              toggleMenu={handleProfileMenuToggle}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

