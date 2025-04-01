"use client"; // ✅ Add this at the top

import React, { useState, useContext } from "react";
import { CrowdFundingContext } from "../context/CrowdFunding";
import Logo from "../components/Logo";
import Menu from "../components/Menu";

const NavBar = () => {
  const { currentAccount, connectWallet } = useContext(CrowdFundingContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuList = ["White Paper", "Project", "Donation", "Members"];

  return (
    <div className="backgroundMain">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" aria-label="FundChainX" title="FundChainX" className="inline-flex items-center mr-8">
              <Logo color="text-white" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 ">
              FundChainX
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="flex items-center hidden space-x-8 lg:flex">
            {menuList.map((el, i) => (
              <li key={i}>
                <a href="/" aria-label={el} title={el} className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400">
                  {el}
                </a>
              </li>
            ))}
          </ul>

          {/* Wallet Connection Button */}
          {!currentAccount && (
            <ul className="flex items-center hidden space-x-8 lg:flex">
              <li>
                <button
                  onClick={connectWallet}
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  aria-label="Connect Wallet"
                  title="Connect Wallet"
                >
                  Connect Wallet
                </button>
              </li>
            </ul>
          )}

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-40">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full">
            <div className="p-5 bg-white border rounded shadow-sm">
              <div className="flex items-center justify-between mb-4">
                {/* Mobile Logo */}
                <div>
                  <a href="/" aria-label="Company" title="Company" className="inline-flex items-center">
                    <Logo color="text-black" />
                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                      Company
                    </span>
                  </a>
                </div>

                {/* Close Button */}
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    className="p-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3-6.3,6.3c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0l6.3-6.3 6.3,6.3c0.4,0.4,1,0.4,1.4,0s0.4-1,0-1.4l-6.3-6.3 6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <nav>
                <ul className="space-y-4">
                  {menuList.map((el, i) => (
                    <li key={i}>
                      <a href="/" aria-label={el} title={el} className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                        {el}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="/"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      aria-label="Connect Wallet"
                      title="Connect Wallet"
                    >
                      Connect Wallet
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
