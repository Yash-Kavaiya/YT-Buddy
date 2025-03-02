import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const features = [
    {
      title: 'Video Content Analysis',
      description: 'Get transcripts, summaries, and blog posts from any YouTube video',
      icon: '📝',
      link: '/video-content',
    },
    {
      title: 'Video Statistics',
      description: 'Analyze performance metrics and engagement stats for any YouTube video',
      icon: '📊',
      link: '/video-stats',
    },
    {
      title: 'Content Generator',
      description: 'Generate professional titles, descriptions, and tags for your videos',
      icon: '✨',
      link: '/content-generator',
    },
    {
      title: 'Ideas Generator',
      description: 'Get content ideas inspired by trending YouTube videos',
      icon: '💡',
      link: '/ideas-generator',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-youtube-dark to-youtube-red">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Boost Your YouTube Success
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-200">
                YT-Buddy provides powerful tools to help content creators analyze, optimize, and
                generate engaging content for their YouTube channels.
              </p>
              <div className="mt-10 flex justify-center">
                <Link
                  to="/video-content"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-youtube-red bg-white hover:bg-gray-100 shadow-md"
                >
                  Try It Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Powerful Tools for Creators</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to analyze and optimize your YouTube content
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="pt-6">
                <div className="flow-root bg-white rounded-lg shadow-youtube px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-youtube-dark to-youtube-red rounded-md shadow-lg text-3xl">
                        {feature.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                    <div className="mt-6">
                      <Link
                        to={feature.link}
                        className="inline-flex items-center text-youtube-red hover:text-red-700"
                      >
                        Try Now →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Simple steps to leverage the power of YT-Buddy
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-youtube-red text-white mx-auto">
                  1
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Enter YouTube URL</h3>
                <p className="mt-2 text-base text-gray-500">
                  Simply paste the URL of any YouTube video you want to analyze
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-youtube-red text-white mx-auto">
                  2
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Select Your Tool</h3>
                <p className="mt-2 text-base text-gray-500">
                  Choose from transcripts, summaries, statistics, or content generation
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-youtube-red text-white mx-auto">
                  3
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Get Results Instantly</h3>
                <p className="mt-2 text-base text-gray-500">
                  View your results and download or copy them for your use
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;