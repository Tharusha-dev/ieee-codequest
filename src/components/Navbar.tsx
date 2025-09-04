
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md z-50 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <Link href="#hero" className="text-2xl font-bold text-green-500 hover:text-green-400 transition-colors duration-300">
            CodeQuest
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="#introduction" className="text-lg text-gray-300 hover:text-white transition-colors duration-300">
            Introduction
          </Link>
          <Link href="#timeline" className="text-lg text-gray-300 hover:text-white transition-colors duration-300">
            Timeline
          </Link>
          <Link href="#prizes" className="text-lg text-gray-300 hover:text-white transition-colors duration-300">
            Prizes
          </Link>
          <Link href="#faq" className="text-lg text-gray-300 hover:text-white transition-colors duration-300">
            FAQ
          </Link>
          <Link href="#registration" className="text-lg text-gray-300 hover:text-white transition-colors duration-300">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
