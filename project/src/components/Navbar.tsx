import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Youtube, 
  Home, 
  FileText, 
  BarChart2, 
  PenTool, 
  Lightbulb,
  Info, 
  Mail,
  LifeBuoy 
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Track scroll position to add depth with shadows
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Check if a link is active for visual feedback
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`bg-gradient-to-r from-red-600 to-red-700 text-white transition-all duration-300 ${
        scrolled ? 'shadow-xl' : 'shadow-lg'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            aria-label="YTubeTools Homepage"
          >
            <Youtube className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-red-100">
              YTubeTools
            </span>
          </Link>

          {/* Desktop Menu with Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`flex items-center space-x-2 py-2 px-3 rounded-full hover:bg-red-500/20 transition-all duration-300 ${
                isActive('/') ? 'bg-red-500/30 font-medium' : 'text-red-50'
              }`}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            
            <Link 
              to="/video-tools" 
              className={`flex items-center space-x-2 py-2 px-3 rounded-full hover:bg-red-500/20 transition-all duration-300 ${
                isActive('/video-tools') ? 'bg-red-500/30 font-medium' : 'text-red-50'
              }`}
            >
              <FileText className="h-5 w-5" />
              <span>Video Tools</span>
            </Link>
            
            <Link 
              to="/video-analytics" 
              className={`flex items-center space-x-2 py-2 px-3 rounded-full hover:bg-red-500/20 transition-all duration-300 ${
                isActive('/video-analytics') ? 'bg-red-500/30 font-medium' : 'text-red-50'
              }`}
            >
              <BarChart2 className="h-5 w-5" />
              <span>Analytics</span>
            </Link>
            
            <Link 
              to="/content-creation" 
              className={`flex items-center space-x-2 py-2 px-3 rounded-full hover:bg-red-500/20 transition-all duration-300 ${
                isActive('/content-creation') ? 'bg-red-500/30 font-medium' : 'text-red-50'
              }`}
            >
              <PenTool className="h-5 w-5" />
              <span>Content Creation</span>
            </Link>
            
            <Link 
              to="/idea-generator" 
              className={`flex items-center space-x-2 py-2 px-3 rounded-full hover:bg-red-500/20 transition-all duration-300 ${
                isActive('/idea-generator') ? 'bg-red-500/30 font-medium' : 'text-red-50'
              }`}
            >
              <Lightbulb className="h-5 w-5" />
              <span>Idea Generator</span>
            </Link>
            
            <Link 
              to="/about" 
              className={`flex items-center space-x-2 py-2 px-3 rounded-full hover:bg-red-500/20 transition-all duration-300 ${
                isActive('/about') ? 'bg-red-500/30 font-medium' : 'text-red-50'
              }`}
            >
              <Info className="h-5 w-5" />
              <span>About</span>
            </Link>
            
            <Link 
              to="/support" 
              className={`flex items-center space-x-2 py-2 px-3 rounded-full hover:bg-red-500/20 transition-all duration-300 ${
                isActive('/support') ? 'bg-red-500/30 font-medium' : 'text-red-50'
              }`}
            >
              <LifeBuoy className="h-5 w-5" />
              <span>Support</span>
            </Link>

            <Link 
              to="/contact" 
              className={`flex items-center space-x-2 py-2 px-3 rounded-full hover:bg-red-500/20 transition-all duration-300 ${
                isActive('/contact') ? 'bg-red-500/30 font-medium' : 'text-red-50'
              }`}
            >
              <Mail className="h-5 w-5" />
              <span>Contact</span>
            </Link>
          </div>

          {/* Mobile Menu Button with micro-interaction */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="focus:outline-none p-2 rounded-full hover:bg-red-500/20 transition-all duration-300"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? 
                <X className="h-6 w-6" /> : 
                <Menu className="h-6 w-6" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu with entrance animation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 overflow-hidden">
            {[
              { path: '/', icon: <Home size={20} />, label: 'Home' },
              { path: '/video-tools', icon: <FileText size={20} />, label: 'Video Tools' },
              { path: '/video-analytics', icon: <BarChart2 size={20} />, label: 'Analytics' },
              { path: '/content-creation', icon: <PenTool size={20} />, label: 'Content Creation' },
              { path: '/idea-generator', icon: <Lightbulb size={20} />, label: 'Idea Generator' },
              { path: '/about', icon: <Info size={20} />, label: 'About' },
              { path: '/support', icon: <LifeBuoy size={20} />, label: 'Support' },
              { path: '/contact', icon: <Mail size={20} />, label: 'Contact' },
              
            ].map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 
                  ${isActive(item.path) ? 'bg-red-500/30 font-medium' : ''}
                  hover:bg-red-500/20`}
                onClick={toggleMenu}
                style={{
                  opacity: 0,
                  animation: `fadeSlideIn 0.2s ease-out forwards ${index * 0.05}s`
                }}
              >
                <div className="text-red-100">{item.icon}</div>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
      
      {/* Add CSS keyframes for animations */}
      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;