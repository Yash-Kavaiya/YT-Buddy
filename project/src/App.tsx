import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VideoTools from './pages/VideoTools';
import VideoAnalytics from './pages/VideoAnalytics';
import ContentCreation from './pages/ContentCreation';
import IdeaGenerator from './pages/IdeaGenerator';
import Contact from './pages/Contact';
import About from './pages/About';
import { Youtube } from 'lucide-react';

// Animation variants for page transitions
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

// Animated routes component
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="flex-grow"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/video-tools" element={<VideoTools />} />
          <Route path="/video-analytics" element={<VideoAnalytics />} />
          <Route path="/content-creation" element={<ContentCreation />} />
          <Route path="/idea-generator" element={<IdeaGenerator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

// Loading animation component
const LoadingAnimation = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <div className="flex flex-col items-center">
      <div className="relative h-16 w-16 mb-4">
        <Youtube size={64} className="text-red-600 animate-pulse" />
      </div>
      <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-red-500 to-red-700"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </div>
    </div>
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <Router>
          <div className="min-h-screen flex flex-col relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500 opacity-10 rounded-full blur-3xl" />
            <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-600 opacity-10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl" />
            
            {/* Main content */}
            <div className="flex flex-col min-h-screen bg-gradient-to-br from-white via-gray-50 to-red-50 z-10">
              <Navbar />
              <main className="flex-grow container mx-auto px-4 py-8 relative">
                <AnimatedRoutes />
              </main>
              <Footer />
            </div>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;