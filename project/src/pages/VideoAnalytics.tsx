import React, { useState } from 'react';
import { BarChart, PieChart, TrendingUp, Users, Clock, ThumbsUp, MessageSquare, Eye, Loader } from 'lucide-react';

interface VideoStats {
  title: string;
  views: number;
  likes: number;
  comments: number;
  watchTime: string;
  retention: number;
  demographics: {
    age: { label: string; value: number }[];
    gender: { label: string; value: number }[];
    location: { label: string; value: number }[];
  };
  engagement: {
    date: string;
    views: number;
    likes: number;
    comments: number;
  }[];
}

const VideoAnalytics: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoStats, setVideoStats] = useState<VideoStats | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      setError('Please enter a YouTube URL');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // This would be replaced with an actual API call
      // const response = await axios.post('/api/video-analytics', { url });
      // setVideoStats(response.data);
      
      // Simulating API response for demo
      setTimeout(() => {
        setVideoStats({
          title: "How to Grow Your YouTube Channel in 2025",
          views: 45872,
          likes: 3254,
          comments: 487,
          watchTime: "2,345 hours",
          retention: 64,
          demographics: {
            age: [
              { label: "18-24", value: 35 },
              { label: "25-34", value: 42 },
              { label: "35-44", value: 15 },
              { label: "45+", value: 8 }
            ],
            gender: [
              { label: "Male", value: 68 },
              { label: "Female", value: 30 },
              { label: "Other", value: 2 }
            ],
            location: [
              { label: "United States", value: 45 },
              { label: "United Kingdom", value: 12 },
              { label: "Canada", value: 8 },
              { label: "Australia", value: 7 },
              { label: "Other", value: 28 }
            ]
          },
          engagement: [
            { date: "Jan 1", views: 1200, likes: 120, comments: 24 },
            { date: "Jan 2", views: 1500, likes: 145, comments: 32 },
            { date: "Jan 3", views: 2000, likes: 210, comments: 45 },
            { date: "Jan 4", views: 1800, likes: 190, comments: 38 },
            { date: "Jan 5", views: 2200, likes: 245, comments: 52 },
            { date: "Jan 6", views: 2500, likes: 280, comments: 60 },
            { date: "Jan 7", views: 3000, likes: 320, comments: 68 }
          ]
        });
        setLoading(false);
      }, 2000);
    } catch (err) {
      setError('Failed to fetch video analytics. Please check the URL and try again.');
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">YouTube Video Analytics</h1>
      
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Enter YouTube Video URL</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors w-full flex items-center justify-center"
          >
            {loading ? (
              <>
                <Loader className="animate-spin h-5 w-5 mr-2" />
                Analyzing...
              </>
            ) : (
              'Analyze Video'
            )}
          </button>
        </form>
      </div>
      
      {videoStats && (
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{videoStats.title}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-red-50 p-4 rounded-lg flex items-center">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Eye className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Views</p>
                  <p className="text-xl font-bold">{videoStats.views.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <ThumbsUp className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Likes</p>
                  <p className="text-xl font-bold">{videoStats.likes.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg flex items-center">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Comments</p>
                  <p className="text-xl font-bold">{videoStats.comments.toLocaleString()}</p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg flex items-center">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Watch Time</p>
                  <p className="text-xl font-bold">{videoStats.watchTime}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-6 w-6 text-red-600 mr-2" />
                <h3 className="text-xl font-semibold">Engagement Over Time</h3>
              </div>
              <div className="h-64 bg-gray-50 rounded-lg p-4 flex items-center justify-center">
                <p className="text-gray-500">
                  [Engagement Chart - In a real implementation, this would be a line chart showing views, likes, and comments over time]
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-red-600 mr-2" />
                <h3 className="text-xl font-semibold">Audience Demographics</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Age</h4>
                  <div className="bg-gray-50 rounded-lg p-3 h-32 flex items-center justify-center">
                    <p className="text-gray-500 text-sm">
                      [Age Chart - In a real implementation, this would be a pie chart showing age distribution]
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Gender</h4>
                  <div className="bg-gray-50 rounded-lg p-3 h-32 flex items-center justify-center">
                    <p className="text-gray-500 text-sm">
                      [Gender Chart - In a real implementation, this would be a pie chart showing gender distribution]
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Location</h4>
                  <div className="bg-gray-50 rounded-lg p-3 h-32 flex items-center justify-center">
                    <p className="text-gray-500 text-sm">
                      [Location Chart - In a real implementation, this would be a pie chart showing location distribution]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Performance Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-700 mb-2">Audience Retention</h4>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-4 mr-4">
                    <div 
                      className="bg-red-600 h-4 rounded-full" 
                      style={{ width: `${videoStats.retention}%` }}
                    ></div>
                  </div>
                  <span className="text-lg font-bold">{videoStats.retention}%</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Your video has above-average retention compared to similar videos.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-700 mb-2">Engagement Rate</h4>
                <p className="text-2xl font-bold text-red-600">7.1%</p>
                <p className="text-sm text-gray-600">
                  This is calculated based on likes, comments, and shares relative to views.
                </p>
                <p className="text-sm font-medium text-green-600 mt-2">
                  +2.3% higher than your channel average
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <span className="font-medium">Optimize your title:</span> Adding keywords like "2025 Guide" or "Step-by-Step" could improve searchability.
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <span className="font-medium">Audience engagement:</span> Your 25-34 demographic is most engaged. Consider creating more content targeted at this age group.
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                  <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <span className="font-medium">Content length:</span> Videos between 10-15 minutes perform best for your channel. This video's length is optimal.
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoAnalytics;