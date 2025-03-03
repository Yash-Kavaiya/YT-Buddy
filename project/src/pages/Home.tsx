import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, BarChart2, PenTool, Lightbulb } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
          Supercharge Your YouTube Content
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          All-in-one platform for YouTube creators to analyze, optimize, and elevate their content
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/video-tools" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105">
            Get Started
          </Link>
          <Link to="/about" className="bg-white hover:bg-gray-100 text-red-600 font-bold py-3 px-6 rounded-lg shadow-lg border border-red-200 transition-all transform hover:scale-105">
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Tools for Creators</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link to="/video-tools" className="bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl hover:transform hover:-translate-y-1">
            <div className="bg-red-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <FileText className="text-red-600 h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-2">Video Processing</h3>
            <p className="text-gray-600">Get transcripts, summaries, and blog posts from any YouTube video.</p>
          </Link>
          
          <Link to="/video-analytics" className="bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl hover:transform hover:-translate-y-1">
            <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <BarChart2 className="text-blue-600 h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-2">Video Analytics</h3>
            <p className="text-gray-600">Analyze video performance and get detailed statistics.</p>
          </Link>
          
          <Link to="/content-creation" className="bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl hover:transform hover:-translate-y-1">
            <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <PenTool className="text-green-600 h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-2">Content Creation</h3>
            <p className="text-gray-600">Generate titles, descriptions, thumbnails, and tags for your videos.</p>
          </Link>
          
          <Link to="/idea-generator" className="bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl hover:transform hover:-translate-y-1">
            <div className="bg-purple-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Lightbulb className="text-purple-600 h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-2">Idea Generator</h3>
            <p className="text-gray-600">Get inspired with new content ideas based on trending videos.</p>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50 rounded-2xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Creators Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center mb-4">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Tech Reviewer</p>
                </div>
              </div>
              <p className="text-gray-700">"This platform has completely transformed my content strategy. The transcript and summary tools save me hours of work!"</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center mb-4">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-gray-600 text-sm">Gaming Creator</p>
                </div>
              </div>
              <p className="text-gray-700">"The analytics tools helped me understand what my audience really wants. My engagement has increased by 45% since I started using YTubeTools."</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center mb-4">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold">Emma Rodriguez</h4>
                  <p className="text-gray-600 text-sm">Lifestyle Vlogger</p>
                </div>
              </div>
              <p className="text-gray-700">"The title and thumbnail generator gives me so many creative ideas. It's like having a professional marketing team at my fingertips."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your YouTube Channel?</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Join thousands of creators who are using our tools to grow their audience and improve their content.
        </p>
        <Link to="/video-tools" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105">
          Start Now — It's Free
        </Link>
      </section>
    </div>
  );
};

export default Home;