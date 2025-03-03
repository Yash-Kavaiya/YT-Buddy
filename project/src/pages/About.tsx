import React from 'react';
import { Users, Award, Target, Zap, Youtube, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About YTubeTools</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          We're on a mission to empower YouTube creators with powerful tools that simplify content creation, 
          enhance video performance, and help grow their channels.
        </p>
      </section>
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            YTubeTools was founded in 2023 by a team of passionate content creators who were frustrated with the 
            fragmented tools available for YouTube channel management. We experienced firsthand the challenges of 
            creating engaging content, understanding analytics, and growing a channel from scratch.
          </p>
          <p className="text-gray-700 mb-4">
            After years of building internal tools for our own channels, we decided to combine our expertise in 
            content creation, data analysis, and software development to build a comprehensive platform that addresses 
            the real needs of creators at every stage of their journey.
          </p>
          <p className="text-gray-700">
            Today, YTubeTools serves thousands of creators worldwide, from beginners just starting their YouTube 
            journey to established channels with millions of subscribers. Our tools have helped process over 500,000 
            videos and generated countless ideas that have turned into successful content.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-red-500 to-red-700 text-white rounded-xl shadow-lg p-8 flex flex-col justify-center">
          <div className="flex justify-center mb-6">
            <Youtube className="h-16 w-16" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-center">Our Mission</h2>
          <p className="text-center mb-4">
            To democratize content creation by providing accessible, powerful tools that help creators of all sizes 
            produce better content, understand their audience, and grow their channels.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-center">Our Vision</h2>
          <p className="text-center">
            A world where every creator has access to professional-grade tools and insights, enabling them to focus 
            on what they do best: creating amazing content that inspires, educates, and entertains.
          </p>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="bg-red-100 p-4 rounded-full inline-flex mb-4">
              <Heart className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Creator First</h3>
            <p className="text-gray-700">
              Every feature we build starts with the creator's needs. We prioritize tools that save time, reduce 
              friction, and solve real problems.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="bg-blue-100 p-4 rounded-full inline-flex mb-4">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Data-Driven</h3>
            <p className="text-gray-700">
              We believe in the power of analytics to inform better content decisions. Our tools transform complex 
              data into actionable insights.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="bg-green-100 p-4 rounded-full inline-flex mb-4">
              <Zap className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Continuous Innovation</h3>
            <p className="text-gray-700">
              The creator landscape is always evolving, and so are we. We're committed to staying ahead of platform 
              changes and industry trends.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-lg font-bold">Alex Johnson</h3>
            <p className="text-gray-600 mb-2">Founder & CEO</p>
            <p className="text-gray-700 text-sm">
              Former YouTube creator with 2M+ subscribers. Passionate about helping creators thrive.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-lg font-bold">Sophia Chen</h3>
            <p className="text-gray-600 mb-2">CTO</p>
            <p className="text-gray-700 text-sm">
              AI specialist with a background in natural language processing and video analytics.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-lg font-bold">Marcus Williams</h3>
            <p className="text-gray-600 mb-2">Head of Product</p>
            <p className="text-gray-700 text-sm">
              10+ years in product management for creator tools and content platforms.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Team Member" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-lg font-bold">Olivia Rodriguez</h3>
            <p className="text-gray-600 mb-2">Creator Success</p>
            <p className="text-gray-700 text-sm">
              YouTube certified expert who has consulted for 100+ successful channels.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">50,000+</div>
            <p className="text-gray-700">Active Creators</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">1.2M+</div>
            <p className="text-gray-700">Videos Analyzed</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">35%</div>
            <p className="text-gray-700">Average Growth Rate</p>
          </div>
        </div>
      </section>
      
      <section className="bg-white rounded-xl shadow-lg p-8 text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
        <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
          Connect with fellow creators, share insights, and get early access to new features by joining our community.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105">
            Join Discord
          </a>
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105">
            Follow on Twitter
          </a>
          <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105">
            Subscribe to Newsletter
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;