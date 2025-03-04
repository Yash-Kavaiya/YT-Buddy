import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Github, Coffee, Gift, CreditCard, DollarSign, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Support: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <section className="text-center mb-16">
        <motion.h1 
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Support YTubeTools
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Help us continue building powerful tools for YouTube creators. Your support makes a difference!
        </motion.p>
      </section>
      
      {/* Gradient background card with support methods */}
      <motion.div 
        className="bg-gradient-to-br from-white via-red-50 to-red-100 rounded-2xl shadow-xl p-8 mb-16 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-400 opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -left-20 w-64 h-64 bg-red-300 opacity-10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
            {/* UPI Payment */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:shadow-xl hover:scale-105"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <CreditCard className="text-orange-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">UPI Payment</h3>
              <p className="text-gray-600 mb-4 text-center">Support us directly with UPI payment</p>
              <div className="border border-orange-200 bg-orange-50 rounded-lg p-3 mb-4 text-center">
                <p className="font-mono text-lg text-orange-800">9586551131@ybl</p>
              </div>
              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium py-2 px-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-colors flex items-center justify-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Copy UPI ID
              </button>
            </motion.div>
            
            {/* GitHub Sponsor */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:shadow-xl hover:scale-105"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Github className="text-purple-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">GitHub Sponsor</h3>
              <p className="text-gray-600 mb-4 text-center">Become a GitHub sponsor and support our open source work</p>
              <div className="border border-purple-200 bg-purple-50 rounded-lg p-3 mb-4 text-center">
                <p className="font-medium text-purple-800">Yash-Kavaiya (Yash Kavaiya)</p>
              </div>
              <a 
                href="https://github.com/sponsors/Yash-Kavaiya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium py-2 px-4 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-colors flex items-center justify-center"
              >
                <Heart className="h-5 w-5 mr-2" />
                Sponsor on GitHub
              </a>
            </motion.div>
            
            {/* Ko-fi */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:shadow-xl hover:scale-105"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Coffee className="text-blue-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Ko-fi</h3>
              <p className="text-gray-600 mb-4 text-center">Buy us a coffee and fuel our development</p>
              <div className="border border-blue-200 bg-blue-50 rounded-lg p-3 mb-4 text-center flex items-center justify-center">
                <Coffee className="h-5 w-5 text-blue-600 mr-2" />
                <p className="font-medium text-blue-800">yashkavaiya</p>
              </div>
              <a 
                href="https://ko-fi.com/yashkavaiya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-colors flex items-center justify-center"
              >
                <Coffee className="h-5 w-5 mr-2" />
                Support on Ko-fi
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Why Support Us */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Why Support Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="bg-red-100 p-4 rounded-full inline-flex mb-4">
              <Sparkles className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Continuous Innovation</h3>
            <p className="text-gray-700">
              Your support enables us to keep developing new features and tools for YouTube creators.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="bg-green-100 p-4 rounded-full inline-flex mb-4">
              <Gift className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Premium Features</h3>
            <p className="text-gray-700">
              Supporters get early access to new features and premium tools before they're released publicly.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="bg-blue-100 p-4 rounded-full inline-flex mb-4">
              <Heart className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Community Growth</h3>
            <p className="text-gray-700">
              Help us build a stronger community of creators supporting each other's growth and success.
            </p>
          </div>
        </div>
      </motion.section>
      
      {/* Testimonials from supporters */}
      <motion.section 
        className="mb-16 bg-gray-50 rounded-2xl p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">From Our Supporters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center mb-4">
              <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="User" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-bold">David Chen</h4>
                <p className="text-gray-600 text-sm">Tech Creator</p>
              </div>
            </div>
            <p className="text-gray-700">"Supporting YTubeTools was one of the best decisions I made for my channel. The premium features have saved me hours of work each week!"</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center mb-4">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="User" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-bold">Sophia Martinez</h4>
                <p className="text-gray-600 text-sm">Content Creator</p>
              </div>
            </div>
            <p className="text-gray-700">"As a small creator, having affordable tools that help me compete with bigger channels is invaluable. Happy to support this amazing platform!"</p>
          </div>
        </div>
      </motion.section>
      
      {/* Final CTA */}
      <motion.section 
        className="text-center py-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl text-white mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Support Innovation?</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Join our community of supporters and help us build the future of YouTube creator tools.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://github.com/sponsors/Yash-Kavaiya" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-red-600 font-bold py-3 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            Become a Sponsor
          </a>
          <a 
            href="https://ko-fi.com/yashkavaiya" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg border border-red-400 transition-all transform hover:scale-105"
          >
            Buy us a Coffee
          </a>
        </div>
      </motion.section>
      
      {/* FAQ Section */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
          <div>
            <h3 className="font-bold text-lg text-red-600 mb-2">How is my support used?</h3>
            <p className="text-gray-700">
              Your support directly funds the development of new features, server costs, and helps us maintain the platform. We're committed to transparency and regularly share updates on how funds are used.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-red-600 mb-2">Do I get any benefits for supporting?</h3>
            <p className="text-gray-700">
              Yes! Supporters get early access to new features, priority support, and exclusive tools depending on your support tier. We also acknowledge our sponsors on our GitHub page.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-red-600 mb-2">Can I support on a monthly basis?</h3>
            <p className="text-gray-700">
              Absolutely! Both GitHub Sponsors and Ko-fi offer options for one-time or recurring monthly support. Choose the option that works best for you.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-red-600 mb-2">Is my payment information secure?</h3>
            <p className="text-gray-700">
              Yes! We never directly handle your payment information. All transactions are processed through secure platforms like GitHub Sponsors, Ko-fi, or your UPI app of choice.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Support;