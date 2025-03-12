"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#FEFBF0] text-[#333333] border-b-2 border-[#990000]">
      <div className="max-w-screen-xl flex justify-between items-center mx-auto p-4">
        {/* Left section: Icon */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/Logo.png" className="h-16" alt="Ngado Kado Logo" />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#990000]">NGADO</span>
            <span className="text-sm tracking-wider text-[#800000]">KADO</span>
          </div>
        </a>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-white rounded-lg bg-[#990000] hover:bg-[#800000] focus:outline-none"
          aria-controls="navbar-hamburger"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          <Link
            href="/"
            className="text-[#333333] hover:bg-[#990000] hover:text-white transition duration-200 py-2 px-3 rounded"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[#333333] hover:bg-[#990000] hover:text-white transition duration-200 py-2 px-3 rounded"
          >
            About
          </Link>
          <Link
            href="/produk"
            className="text-[#333333] hover:bg-[#990000] hover:text-white transition duration-200 py-2 px-3 rounded"
          >
            Product
          </Link>
          <Link
            href="/teams"
            className="text-[#333333] hover:bg-[#990000] hover:text-white transition duration-200 py-2 px-3 rounded"
          >
            Teams
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-[#FEFBF0] text-[#333333] px-4 py-2 space-y-4 border-t border-[#e5e0d5]`}
      >
        <Link
          href="/"
          className="block py-2 hover:pl-2 hover:text-[#990000] transition-all duration-200"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block py-2 hover:pl-2 hover:text-[#990000] transition-all duration-200"
        >
          Tentang
        </Link>
        <Link
          href="/produk"
          className="block py-2 hover:pl-2 hover:text-[#990000] transition-all duration-200"
        >
          Produk
        </Link>
        <Link
          href="/teams"
          className="block py-2 hover:pl-2 hover:text-[#990000] transition-all duration-200"
        >
          Teams
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
