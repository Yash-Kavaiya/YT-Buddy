import React, { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setError('');
    
    try {
      // This would be replaced with an actual API call
      // await axios.post('/api/contact', formData);
      
      // Simulating API call
      setTimeout(() => {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 1000);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <MessageSquare className="h-6 w-6 text-red-600 mr-2" />
            Get in Touch
          </h2>
          
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <svg className="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-medium text-green-800 mb-2">Message Sent Successfully!</h3>
              <p className="text-green-700">
                Thank you for reaching out. We'll get back to you as soon as possible.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-4 bg-white text-green-700 border border-green-300 font-medium py-2 px-4 rounded-lg hover:bg-green-50 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                ></textarea>
              </div>
              
              {error && (
                <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition-colors flex items-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          )}
        </div>
        
        <div>
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <Mail className="h-6 w-6 text-red-600 mr-2" />
              Contact Information
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">support@ytubetools.com</p>
                  <p className="text-gray-600">info@ytubetools.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    123 Creator Avenue<br />
                    San Francisco, CA 94103<br />
                    United States
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900 mb-1">How quickly will I receive a response?</h3>
                <p className="text-gray-600">We typically respond to all inquiries within 24-48 business hours.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Do you offer custom solutions for larger channels?</h3>
                <p className="text-gray-600">Yes, we provide tailored solutions for channels with over 100K subscribers. Please contact us for details.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Is there a limit to how many videos I can analyze?</h3>
                <p className="text-gray-600">Free accounts can analyze up to 5 videos per month. Premium plans offer unlimited analysis.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-1">How accurate are the analytics and transcriptions?</h3>
                <p className="text-gray-600">Our transcription accuracy is over 95% for clear audio. Analytics are based on YouTube's API data combined with our proprietary algorithms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;