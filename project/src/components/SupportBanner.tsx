import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SupportBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closeBanner = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-red-50 via-red-100 to-red-50 border-b border-red-200"
        >
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <div className="flex items-center">
              <Heart className="text-red-500 h-5 w-5 mr-2 animate-pulse" />
              <p className="text-sm text-gray-700">
                Love our tools? <span className="font-medium">Support our work</span> and help us build more amazing features!
              </p>
            </div>
            <div className="flex items-center">
              <Link 
                to="/support" 
                className="text-sm text-white bg-gradient-to-r from-red-500 to-red-600 px-4 py-1 rounded-full mr-3 hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105"
              >
                Support Us
              </Link>
              <button
                onClick={closeBanner}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close banner"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SupportBanner;