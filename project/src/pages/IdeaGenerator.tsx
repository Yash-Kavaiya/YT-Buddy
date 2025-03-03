import React, { useState } from 'react';
import { Lightbulb, Loader, TrendingUp, Target, Zap } from 'lucide-react';

interface IdeaData {
  videoIdeas: {
    title: string;
    description: string;
    category: string;
  }[];
  trendingTopics: string[];
  contentSeries: {
    title: string;
    episodes: string[];
  }[];
}

const IdeaGenerator: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [ideaData, setIdeaData] = useState<IdeaData | null>(null);
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
      // const response = await axios.post('/api/idea-generator', { url });
      // setIdeaData(response.data);
      
      // Simulating API response for demo
      setTimeout(() => {
        setIdeaData({
          videoIdeas: [
            {
              title: "I Tested the Top 5 YouTube Growth Strategies So You Don't Have To",
              description: "An experiment-based video where you test different growth strategies and share the results with data and analytics.",
              category: "Experiment"
            },
            {
              title: "YouTube Studio Features You Didn't Know Existed (2025 Edition)",
              description: "A tutorial showcasing hidden or underutilized features in YouTube Studio that can help creators optimize their workflow.",
              category: "Tutorial"
            },
            {
              title: "How Small Channels Can Compete with Big YouTubers in 2025",
              description: "Strategic advice for smaller channels to find their niche and compete effectively despite having fewer resources.",
              category: "Strategy"
            },
            {
              title: "The Psychology Behind Viral YouTube Videos (With Examples)",
              description: "Analysis of psychological triggers that make videos go viral, with case studies of recent viral content.",
              category: "Analysis"
            },
            {
              title: "Day in the Life of a Full-Time YouTuber: Behind the Scenes",
              description: "A vlog-style video showing your complete workflow from idea generation to publishing and promotion.",
              category: "Behind-the-Scenes"
            },
            {
              title: "How I Turned My YouTube Channel Into a 6-Figure Business",
              description: "A breakdown of different revenue streams and how you monetized your channel beyond just AdSense.",
              category: "Business"
            }
          ],
          trendingTopics: [
            "AI tools for content creators",
            "Short-form vs. long-form content strategy",
            "YouTube monetization alternatives",
            "Sustainable content creation (avoiding burnout)",
            "Building a community beyond subscribers",
            "Cross-platform content strategy (YouTube, TikTok, Instagram)"
          ],
          contentSeries: [
            {
              title: "YouTube Growth Masterclass",
              episodes: [
                "Part 1: Finding Your Niche and Target Audience",
                "Part 2: Content Strategy and Planning",
                "Part 3: Thumbnail and Title Optimization",
                "Part 4: Filming and Editing Techniques",
                "Part 5: Promotion and Community Building"
              ]
            },
            {
              title: "Creator Case Studies",
              episodes: [
                "How Channel X Went from 0 to 1M Subscribers",
                "Behind the Success of Channel Y's Viral Series",
                "How Channel Z Recovered from Algorithm Changes",
                "Channel A's Successful Pivot Strategy",
                "Channel B's Unique Monetization Approach"
              ]
            }
          ]
        });
        setLoading(false);
      }, 2000);
    } catch (err) {
      setError('Failed to generate ideas. Please check the URL and try again.');
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">YouTube Content Idea Generator</h1>
      
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Enter YouTube Video URL for Inspiration</h2>
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
                Generating Ideas...
              </>
            ) : (
              'Generate Ideas'
            )}
          </button>
        </form>
      </div>
      
      {ideaData && (
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <Lightbulb className="h-6 w-6 text-yellow-500 mr-2" />
              <h2 className="text-xl font-semibold">Video Ideas Based on Your Content</h2>
            </div>
            
            <div className="space-y-4">
              {ideaData.videoIdeas.map((idea, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start">
                    <span className="bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded-full mr-2">
                      {idea.category}
                    </span>
                    <h3 className="font-bold text-lg">{idea.title}</h3>
                  </div>
                  <p className="text-gray-700 mt-2">{idea.description}</p>
                  <div className="mt-3 flex justify-end">
                    <button className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center">
                      <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                      Save Idea
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-6 w-6 text-blue-500 mr-2" />
                <h2 className="text-xl font-semibold">Trending Topics</h2>
              </div>
              
              <ul className="space-y-3">
                {ideaData.trendingTopics.map((topic, index) => (
                  <li key={index} className="flex items-center">
                    <div className="bg-blue-100 p-1 rounded-full mr-3">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <span className="text-gray-800">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-6">
                <Target className="h-6 w-6 text-purple-500 mr-2" />
                <h2 className="text-xl font-semibold">Content Series Ideas</h2>
              </div>
              
              <div className="space-y-6">
                {ideaData.contentSeries.map((series, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-lg mb-2 flex items-center">
                      <Zap className="h-5 w-5 text-purple-500 mr-2" />
                      {series.title}
                    </h3>
                    <ul className="space-y-2 pl-7 list-disc text-gray-700">
                      {series.episodes.map((episode, epIndex) => (
                        <li key={epIndex}>{episode}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-xl p-6 border border-yellow-200">
            <h3 className="text-lg font-semibold mb-3">Pro Tips for Content Planning</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="bg-yellow-100 p-1 rounded-full mr-3 mt-1">
                  <svg className="h-4 w-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-800">
                  <span className="font-medium">Batch similar content:</span> Create multiple videos on related topics in one session to improve efficiency.
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-yellow-100 p-1 rounded-full mr-3 mt-1">
                  <svg className="h-4 w-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-800">
                  <span className="font-medium">Create content pillars:</span> Develop 3-5 main themes for your channel and ensure each video fits within these pillars.
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-yellow-100 p-1 rounded-full mr-3 mt-1">
                  <svg className="h-4 w-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-800">
                  <span className="font-medium">Plan for repurposing:</span> Consider how each video can be repurposed into shorts, blog posts, or social media content.
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default IdeaGenerator;