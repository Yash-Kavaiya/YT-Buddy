import React, { useState } from 'react';
import { FileText, FileDigit, FileEdit, Loader } from 'lucide-react';

interface VideoData {
  transcript: string;
  summary: string;
  blogpost: string;
}

const VideoTools: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('transcript');
  const [videoData, setVideoData] = useState<VideoData | null>(null);
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
      // const response = await axios.post('/api/video-tools', { url });
      // setVideoData(response.data);
      
      // Simulating API response for demo
      setTimeout(() => {
        setVideoData({
          transcript: "This is a simulated transcript of the YouTube video. In a real implementation, this would contain the actual transcript extracted from the video at the provided URL. The transcript would include all spoken content from the video, properly formatted with timestamps and speaker identification where applicable.",
          summary: "This is a simulated summary of the YouTube video. In a real implementation, this would contain an AI-generated summary that captures the key points and main ideas from the video content. The summary would be concise yet comprehensive, highlighting the most important information from the video.",
          blogpost: "# Video Title: How to Grow Your YouTube Channel\n\n## Introduction\nGrowing a YouTube channel requires strategy, consistency, and understanding your audience. In this blog post, we'll explore the key insights from the video about effective growth strategies.\n\n## Key Points\n\n### 1. Content Strategy\nDeveloping a consistent content strategy is crucial for channel growth. This includes:\n- Identifying your niche\n- Creating a content calendar\n- Maintaining a regular posting schedule\n\n### 2. Audience Engagement\nEngaging with your audience builds community and loyalty:\n- Respond to comments\n- Ask questions in your videos\n- Create content based on audience feedback\n\n### 3. Optimization Techniques\nOptimizing your videos for discovery:\n- Keyword research for titles and descriptions\n- Creating compelling thumbnails\n- Using appropriate tags\n\n## Conclusion\nConsistency and audience understanding are the foundations of YouTube success. Apply these strategies consistently to see gradual but significant growth in your channel.\n\n*This blog post was automatically generated from a YouTube video using YTubeTools.*"
        });
        setLoading(false);
      }, 2000);
    } catch (err) {
      setError('Failed to process video. Please check the URL and try again.');
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">YouTube Video Processing Tools</h1>
      
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
                Processing...
              </>
            ) : (
              'Process Video'
            )}
          </button>
        </form>
      </div>
      
      {videoData && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex border-b mb-6">
            <button
              onClick={() => setActiveTab('transcript')}
              className={`flex items-center px-4 py-2 border-b-2 font-medium ${
                activeTab === 'transcript' ? 'border-red-500 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <FileText className="h-5 w-5 mr-2" />
              Transcript
            </button>
            <button
              onClick={() => setActiveTab('summary')}
              className={`flex items-center px-4 py-2 border-b-2 font-medium ${
                activeTab === 'summary' ? 'border-red-500 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <FileDigit className="h-5 w-5 mr-2" />
              Summary
            </button>
            <button
              onClick={() => setActiveTab('blogpost')}
              className={`flex items-center px-4 py-2 border-b-2 font-medium ${
                activeTab === 'blogpost' ? 'border-red-500 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <FileEdit className="h-5 w-5 mr-2" />
              Blog Post
            </button>
          </div>
          
          <div className="prose max-w-none">
            {activeTab === 'transcript' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Video Transcript</h3>
                <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
                  <p className="whitespace-pre-line">{videoData.transcript}</p>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors">
                    Download Transcript
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'summary' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Video Summary</h3>
                <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
                  <p>{videoData.summary}</p>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors">
                    Download Summary
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'blogpost' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Generated Blog Post</h3>
                <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
                  <div dangerouslySetInnerHTML={{ __html: videoData.blogpost.replace(/\n/g, '<br>') }} />
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors">
                    Download Blog Post
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoTools;