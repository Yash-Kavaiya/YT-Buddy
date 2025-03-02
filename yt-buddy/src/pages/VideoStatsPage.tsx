import React, { useState } from 'react';
import axios from 'axios';

interface VideoContent {
  video_id: string;
  title: string;
  channel: string;
  thumbnail: string;
  published_at: string;
  transcript: string | null;
  summary: string | null;
  blog_post: string | null;
}

const VideoContentPage: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [videoContent, setVideoContent] = useState<VideoContent | null>(null);
  const [activeTab, setActiveTab] = useState<'transcript' | 'summary' | 'blog'>('transcript');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      setError('Please enter a YouTube URL');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.post('http://localhost:8000/api/youtube/content', {
        url: url
      });
      
      setVideoContent(response.data);
    } catch (err) {
      console.error('Error fetching video content:', err);
      setError('Failed to fetch video content. Please check the URL and try again.');
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
          Video Content Analysis
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Get transcript, summary, and blog post from any YouTube video
        </p>
      </div>
      
      <div className="mt-10 max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-700">
              YouTube Video URL
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="text"
                name="videoUrl"
                id="videoUrl"
                className="focus:ring-youtube-red focus:border-youtube-red flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                placeholder="https://www.youtube.com/watch?v=..."
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
              {loading ? 'Processing...' : 'Analyze Video'}
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
      
      {videoContent && (
        <div className="mt-10">
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex flex-col md:flex-row md:items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-32 w-auto rounded-lg"
                  src={videoContent.thumbnail}
                  alt={videoContent.title}
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <h2 className="text-xl font-bold text-gray-900">{videoContent.title}</h2>
                <p className="mt-1 text-sm text-gray-500">
                  {videoContent.channel} • Published on {formatDate(videoContent.published_at)}
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-200">
              <div className="px-4 py-5 sm:p-0">
                <dl>
                  <div className="border-b border-gray-200">
                    <nav className="flex -mb-px">
                      <button
                        onClick={() => setActiveTab('transcript')}
                        className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                          activeTab === 'transcript'
                            ? 'border-youtube-red text-youtube-red'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        Transcript
                      </button>
                      <button
                        onClick={() => setActiveTab('summary')}
                        className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                          activeTab === 'summary'
                            ? 'border-youtube-red text-youtube-red'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        Summary
                      </button>
                      <button
                        onClick={() => setActiveTab('blog')}
                        className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                          activeTab === 'blog'
                            ? 'border-youtube-red text-youtube-red'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        Blog Post
                      </button>
                    </nav>
                  </div>
                  
                  <div className="py-4 px-6">
                    {activeTab === 'transcript' && (
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-medium text-gray-900">Transcript</h3>
                          {videoContent.transcript && (
                            <button
                              onClick={() => copyToClipboard(videoContent.transcript!)}
                              className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded text-youtube-red bg-red-50 hover:bg-red-100"
                            >
                              Copy
                            </button>
                          )}
                        </div>
                        {videoContent.transcript ? (
                          <div className="bg-gray-50 p-4 rounded-md h-96 overflow-y-auto">
                            <p className="text-gray-600 whitespace-pre-line">
                              {videoContent.transcript}
                            </p>
                          </div>
                        ) : (
                          <p className="text-gray-500 italic">No transcript available for this video.</p>
                        )}
                      </div>
                    )}
                    
                    {activeTab === 'summary' && (
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-medium text-gray-900">Summary</h3>
                          {videoContent.summary && (
                            <button
                              onClick={() => copyToClipboard(videoContent.summary!)}
                              className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded text-youtube-red bg-red-50 hover:bg-red-100"
                            >
                              Copy
                            </button>
                          )}
                        </div>
                        {videoContent.summary ? (
                          <div className="bg-gray-50 p-4 rounded-md h-96 overflow-y-auto">
                            <p className="text-gray-600 whitespace-pre-line">
                              {videoContent.summary}
                            </p>
                          </div>
                        ) : (
                          <p className="text-gray-500 italic">No summary available for this video.</p>
                        )}
                      </div>
                    )}
                    
                    {activeTab === 'blog' && (
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-medium text-gray-900">Blog Post</h3>
                          {videoContent.blog_post && (
                            <button
                              onClick={() => copyToClipboard(videoContent.blog_post!)}
                              className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded text-youtube-red bg-red-50 hover:bg-red-100"
                            >
                              Copy
                            </button>
                          )}
                        </div>
                        {videoContent.blog_post ? (
                          <div className="bg-gray-50 p-4 rounded-md h-96 overflow-y-auto">
                            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: videoContent.blog_post.replace(/\n/g, '<br>') }} />
                          </div>
                        ) : (
                          <p className="text-gray-500 italic">No blog post available for this video.</p>
                        )}
                      </div>
                    )}
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoContentPage;