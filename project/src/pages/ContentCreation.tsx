import React, { useState } from 'react';
import { PenTool, Image, FileText, Tag, Loader } from 'lucide-react';

interface ContentData {
  titles: string[];
  description: string;
  tags: string[];
  thumbnailIdeas: string[];
}

const ContentCreation: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [contentData, setContentData] = useState<ContentData | null>(null);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('titles');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!topic) {
      setError('Please enter a topic or keyword');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // This would be replaced with an actual API call
      // const response = await axios.post('/api/content-creation', { topic });
      // setContentData(response.data);
      
      // Simulating API response for demo
      setTimeout(() => {
        setContentData({
          titles: [
            "10 Proven Strategies to Grow Your YouTube Channel in 2025",
            "How I Gained 100K Subscribers in Just 6 Months (Real Strategy)",
            "YouTube Algorithm Secrets: What's Working in 2025",
            "The Ultimate Guide to YouTube Growth for Beginners",
            "5 YouTube Growth Hacks That Actually Work in 2025",
            "From 0 to 10K Subscribers: My YouTube Journey and Lessons",
            "YouTube Success Blueprint: The Complete Growth Strategy",
            "Why Your YouTube Channel Isn't Growing (And How to Fix It)",
            "YouTube Growth Strategy That Works for ANY Niche in 2025",
            "How to Make YouTube Videos That ACTUALLY Get Views"
          ],
          description: "In this video, I'm sharing my complete YouTube growth strategy that helped me grow from 0 to 100,000 subscribers in just one year. You'll learn the exact methods I used to optimize my videos for the algorithm, create engaging content that keeps viewers watching, and build a loyal community around my channel.\n\nI'll break down:\n- How to research trending topics in your niche\n- The perfect video structure for maximum retention\n- My thumbnail creation process that doubled my CTR\n- How to use analytics to continuously improve your content\n- The best times to post for maximum visibility\n- How to create a content strategy that scales\n\nWhether you're just starting out or looking to take your channel to the next level, these proven strategies will help you grow faster and build a sustainable YouTube presence. Make sure to watch until the end for a special resource I've created to help you implement everything you learn!\n\n#YouTubeGrowth #ContentCreation #GrowYourChannel",
          tags: [
            "youtube growth",
            "grow youtube channel",
            "youtube algorithm",
            "youtube strategy",
            "youtube for beginners",
            "youtube tips",
            "youtube success",
            "content creation",
            "youtube 2025",
            "get more subscribers",
            "youtube seo",
            "youtube marketing",
            "increase youtube views"
          ],
          thumbnailIdeas: [
            "Close-up of your face with a shocked expression + text '0 to 100K'",
            "Split screen before/after of your channel growth + arrow pointing up",
            "You pointing at a growth chart with large text '2025 STRATEGY'",
            "Laptop with YouTube open + text overlay 'SECRET METHOD'",
            "You holding a trophy or award with text 'YOUTUBE SUCCESS'"
          ]
        });
        setLoading(false);
      }, 2000);
    } catch (err) {
      setError('Failed to generate content. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">YouTube Content Creation Tools</h1>
      
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Generate Content Ideas</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
              Enter Your Video Topic or Keywords
            </label>
            <input
              type="text"
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., YouTube growth strategies, cooking tutorials, travel vlog"
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
                Generating...
              </>
            ) : (
              'Generate Content'
            )}
          </button>
        </form>
      </div>
      
      {contentData && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex border-b mb-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('titles')}
              className={`flex items-center px-4 py-2 border-b-2 font-medium whitespace-nowrap ${
                activeTab === 'titles' ? 'border-red-500 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <PenTool className="h-5 w-5 mr-2" />
              Title Ideas
            </button>
            <button
              onClick={() => setActiveTab('description')}
              className={`flex items-center px-4 py-2 border-b-2 font-medium whitespace-nowrap ${
                activeTab === 'description' ? 'border-red-500 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <FileText className="h-5 w-5 mr-2" />
              Description
            </button>
            <button
              onClick={() => setActiveTab('tags')}
              className={`flex items-center px-4 py-2 border-b-2 font-medium whitespace-nowrap ${
                activeTab === 'tags' ? 'border-red-500 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Tag className="h-5 w-5 mr-2" />
              Tags
            </button>
            <button
              onClick={() => setActiveTab('thumbnails')}
              className={`flex items-center px-4 py-2 border-b-2 font-medium whitespace-nowrap ${
                activeTab === 'thumbnails' ? 'border-red-500 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Image className="h-5 w-5 mr-2" />
              Thumbnail Ideas
            </button>
          </div>
          
          <div>
            {activeTab === 'titles' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Title Suggestions</h3>
                <div className="space-y-3">
                  {contentData.titles.map((title, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg flex items-center">
                      <span className="text-red-600 font-bold mr-3">{index + 1}.</span>
                      <p>{title}</p>
                      <button className="ml-auto text-gray-500 hover:text-gray-700">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'description' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Video Description</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="whitespace-pre-line">{contentData.description}</p>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors">
                    Copy Description
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'tags' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Suggested Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {contentData.tags.map((tag, index) => (
                    <div key={index} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Tags as Text (Copy for YouTube)</h4>
                  <p className="text-gray-700 text-sm">{contentData.tags.join(', ')}</p>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors">
                    Copy All Tags
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'thumbnails' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Thumbnail Design Ideas</h3>
                <div className="space-y-4">
                  {contentData.thumbnailIdeas.map((idea, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start">
                        <div className="bg-red-100 text-red-800 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-gray-800">{idea}</p>
                          <div className="mt-2 flex space-x-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              Eye-catching
                            </span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              High CTR
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-medium text-yellow-800 mb-2">Thumbnail Best Practices</h4>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    <li>• Use high contrast colors to stand out</li>
                    <li>• Include close-up faces with emotions</li>
                    <li>• Keep text large and limited (3-5 words max)</li>
                    <li>• Ensure text is readable on mobile devices</li>
                    <li>• Use 1280×720 pixels resolution (16:9 ratio)</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentCreation;