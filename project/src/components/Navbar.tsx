import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Youtube } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Youtube className="h-8 w-8" />
            <span className="text-xl font-bold">YTubeTools</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-red-200 transition-colors">Home</Link>
            <Link to="/video-tools" className="hover:text-red-200 transition-colors">Video Tools</Link>
            <Link to="/video-analytics" className="hover:text-red-200 transition-colors">Analytics</Link>
            <Link to="/content-creation" className="hover:text-red-200 transition-colors">Content Creation</Link>
            <Link to="/idea-generator" className="hover:text-red-200 transition-colors">Idea Generator</Link>
            <Link to="/about" className="hover:text-red-200 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-red-200 transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link to="/" className="block hover:text-red-200 transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/video-tools" className="block hover:text-red-200 transition-colors" onClick={toggleMenu}>Video Tools</Link>
            <Link to="/video-analytics" className="block hover:text-red-200 transition-colors" onClick={toggleMenu}>Analytics</Link>
            <Link to="/content-creation" className="block hover:text-red-200 transition-colors" onClick={toggleMenu}>Content Creation</Link>
            <Link to="/idea-generator" className="block hover:text-red-200 transition-colors" onClick={toggleMenu}>Idea Generator</Link>
            <Link to="/about" className="block hover:text-red-200 transition-colors" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="block hover:text-red-200 transition-colors" onClick={toggleMenu}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;