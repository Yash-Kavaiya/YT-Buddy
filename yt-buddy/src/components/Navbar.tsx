import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">YT-Buddy</Link>
        <div className="space-x-4">
          <Link to="/video-content" className="hover:text-gray-300">Video Content</Link>
          <Link to="/video-stats" className="hover:text-gray-300">Stats</Link>
          <Link to="/content-generator" className="hover:text-gray-300">Generate</Link>
          <Link to="/ideas-generator" className="hover:text-gray-300">Ideas</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
