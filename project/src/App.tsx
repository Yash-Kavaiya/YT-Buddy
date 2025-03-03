import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VideoTools from './pages/VideoTools';
import VideoAnalytics from './pages/VideoAnalytics';
import ContentCreation from './pages/ContentCreation';
import IdeaGenerator from './pages/IdeaGenerator';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-red-50 to-gray-100">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video-tools" element={<VideoTools />} />
            <Route path="/video-analytics" element={<VideoAnalytics />} />
            <Route path="/content-creation" element={<ContentCreation />} />
            <Route path="/idea-generator" element={<IdeaGenerator />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;