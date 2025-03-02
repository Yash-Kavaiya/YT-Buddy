import React, { useState } from 'react';

interface VideoInfo {
  video_id: string;
  title: string;
  channel: string;
  thumbnail: string;
  published_at: string;
}

interface GeneratedContent {
  titles: string[];
  description: string;
  tags: string[];
}

const ContentGeneratorPage: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      setError('Please enter a YouTube URL');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      // This is a placeholder - in a real implementation, it would call the backend API
      // Since this functionality is marked as "to be implemented" in the backend, we'll simulate it
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate API response
      setVideoInfo({
        video_id: 'sample_id',
        title: 'How to Create Amazing YouTube Content',
        channel: 'Content Creator Pro',
        thumbnail: 'https://via.placeholder.com/480x360',
        published_at: new Date().toISOString()
      });
      
      setGeneratedContent({
        titles: [
          '10 Proven Strategies to Create Viral YouTube Videos',
          'The Ultimate Guide to YouTube Success in 2025',
          'How I Grew My Channel from 0 to 100K Subscribers',
          'YouTube Algorithm Secrets Revealed: Get More Views Now',
          'Content Creation Masterclass: From Beginner to Pro'
        ],
        description: `In this video, I share my top strategies for creating high-quality YouTube content that engages viewers and grows your channel.

Learn how to:
✅ Research trending topics in your niche
✅ Create eye-catching thumbnails
✅ Write compelling video titles
✅ Structure your content for maximum engagement
✅ Optimize your videos for the YouTube algorithm

If you found this video helpful, please give it a like and subscribe to the channel for more content creation tips!

#YouTubeTips #ContentCreation #VideoMarketing`,
        tags: [
          'youtube tips',
          'content creation',
          'video marketing',
          'youtube growth',
          'youtube algorithm',
          'youtube seo',
          'video editing',
          'youtube channel growth',
          'social media marketing',
          'digital marketing'
        ]
      });
      
    } catch (err) {
      console.error('Error generating content:', err);
      setError('Failed to generate content. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          YouTube Content Generator
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Create professional titles, descriptions, and tags for your videos
        </p>
      </div>
      
      <div className="mt-10 max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-700">
              YouTube Video URL (for inspiration) or Topic
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                name="videoUrl"
                id="videoUrl"
                className="focus:ring-youtube-red focus:border-youtube-red flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                placeholder="https://www.youtube.com/watch?v=... or 'content creation tips'"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-youtube-dark to-youtube-red hover:from-youtube-dark hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-youtube-red ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Generating...' : 'Generate Content'}
            </button>
          </div>
        </form>
        
        {error && (
          <div className="mt-4 bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {videoInfo && generatedContent && (
        <div className="mt-10">
          <div className="bg-white shadow overflow-hidden rounded-lg">
            {videoInfo.thumbnail && (
              <div className="px-4 py-5 sm:px-6 flex flex-col md:flex-row md:items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-32 w-auto rounded-lg"
                    src={videoInfo.thumbnail}
                    alt={videoInfo.title}
                  />
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <h2 className="text-xl font-bold text-gray-900">{videoInfo.title}</h2>
                  <p className="mt-1 text-sm text-gray-500">
                    {videoInfo.channel} • Published on {formatDate(videoInfo.published_at)}
                  </p>
                </div>
              </div>
            )}
            
            <div className="border-t border-gray-200">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Generated Titles</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <ul className="space-y-2">
                    {generatedContent.titles.map((title, index) => (
                      <li key={index} className="flex justify-between items-center">
                        <span className="text-gray-800">{title}</span>
                        <button
                          onClick={() => copyToClipboard(title)}
                          className="ml-2 inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-youtube-red bg-red-50 hover:bg-red-100"
                        >
                          Copy
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <h3 className="text-lg font-medium text-gray-900 mt-8 mb-4">Generated Description</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-grow">
                      <pre className="text-sm text-gray-800 whitespace-pre-wrap font-sans">
                        {generatedContent.description}
                      </pre>
                    </div>
                    <button
                      onClick={() => copyToClipboard(generatedContent.description)}
                      className="ml-2 inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-youtube-red bg-red-50 hover:bg-red-100"
                    >
                      Copy
                    </button>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium text-gray-900 mt-8 mb-4">Generated Tags</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {generatedContent.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(generatedContent.tags.join(', '))}
                      className="ml-2 inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-youtube-red bg-red-50 hover:bg-red-100"
                    >
                      Copy All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentGeneratorPage;