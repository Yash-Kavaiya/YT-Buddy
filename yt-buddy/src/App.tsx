import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import VideoContentPage from './pages/VideoContentPage';
import VideoStatsPage from './pages/VideoStatsPage';
import ContentGeneratorPage from './pages/ContentGeneratorPage';
import IdeasGeneratorPage from './pages/IdeasGeneratorPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/video-content" element={<VideoContentPage />} />
            <Route path="/video-stats" element={<VideoStatsPage />} />
            <Route path="/content-generator" element={<ContentGeneratorPage />} />
            <Route path="/ideas-generator" element={<IdeasGeneratorPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;