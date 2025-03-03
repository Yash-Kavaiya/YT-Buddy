import React, { useState } from 'react';
import { Youtube } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import VideoAnalysis from '../components/toolkit/VideoAnalysis';
import Analytics from '../components/toolkit/Analytics';
import ContentCreator from '../components/toolkit/ContentCreator';
import IdeaGenerator from '../components/toolkit/IdeaGenerator';
import About from '../components/toolkit/About';
import Contact from '../components/toolkit/Contact';

const YouTubeToolkit = () => {
  const [activeTab, setActiveTab] = useState('video-analysis');

  const renderContent = () => {
    switch (activeTab) {
      case 'video-analysis':
        return <VideoAnalysis />;
      case 'analytics':
        return <Analytics />;
      case 'content-creator':
        return <ContentCreator />;
      case 'idea-generator':
        return <IdeaGenerator />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <VideoAnalysis />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg py-4">
        <div className="container mx-auto px-4 flex items-center">
          <Youtube size={32} className="mr-2" />
          <h1 className="text-2xl font-bold">YouTube Creator Toolkit</h1>
        </div>
      </header>

      {/* Main content area */}
      <div className="flex flex-1 container mx-auto mt-8 px-4">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1">
          {renderContent()}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Youtube size={24} className="mr-2" />
              <p className="font-bold">YouTube Creator Toolkit</p>
            </div>
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} YouTube Creator Toolkit. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default YouTubeToolkit;
