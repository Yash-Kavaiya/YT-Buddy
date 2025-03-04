import os
import re
from typing import Dict, Any, Optional, Tuple
import httpx
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Optional: Configure YouTube API key
YOUTUBE_API_KEY = os.getenv("YOUTUBE_API_KEY")

class YouTubeService:
    """Service for interacting with YouTube data"""
    
    @staticmethod
    def extract_video_id(url: str) -> Optional[str]:
        """
        Extract the video ID from various YouTube URL formats.
        
        Args:
            url: YouTube URL
            
        Returns:
            Video ID or None if not found
        """
        patterns = [
            r'(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/e\/|youtube\.com\/user\/\S+\/\S+\/|youtube\.com\/\S+\/\S+\/\S+|youtube\.com\/watch\?(?:\S+&)*v=|youtube\.com\/\S+\/\S+|youtu\.be\/)([^"&?\/\s]{11})',
            r'youtube\.com\/shorts\/([^"&?\/\s]{11})'
        ]
        
        for pattern in patterns:
            match = re.search(pattern, url)
            if match:
                return match.group(1)
        
        return None
    
    @staticmethod
    async def get_video_metadata(video_id: str) -> Dict[str, Any]:
        """
        Get video metadata from YouTube API.
        
        Args:
            video_id: YouTube video ID
            
        Returns:
            Dictionary containing video metadata
        """
        if not YOUTUBE_API_KEY:
            # Fallback to mock data if no API key is available
            return {
                "title": f"Video {video_id}",
                "channel": "Unknown Creator",
                "published_at": "Unknown Date",
                "description": "No description available without YouTube API key.",
            }
        
        # YouTube API v3 endpoint for video details
        url = f"https://www.googleapis.com/youtube/v3/videos?id={video_id}&key={YOUTUBE_API_KEY}&part=snippet,contentDetails,statistics"
        
        async with httpx.AsyncClient() as client:
            response = await client.get(url)
            data = response.json()
            
            if 'items' not in data or not data['items']:
                raise ValueError(f"No video found with ID: {video_id}")
            
            video_data = data['items'][0]
            snippet = video_data.get('snippet', {})
            statistics = video_data.get('statistics', {})
            
            return {
                "title": snippet.get('title', 'Unknown Title'),
                "channel": snippet.get('channelTitle', 'Unknown Channel'),
                "published_at": snippet.get('publishedAt', 'Unknown Date'),
                "description": snippet.get('description', ''),
                "views": statistics.get('viewCount', 0),
                "likes": statistics.get('likeCount', 0),
                "comments": statistics.get('commentCount', 0),
                "thumbnail_url": snippet.get('thumbnails', {}).get('high', {}).get('url', ''),
                "tags": snippet.get('tags', []),
                "duration": video_data.get('contentDetails', {}).get('duration', ''),
            }
    
    @staticmethod
    async def get_video_captions(video_id: str) -> Optional[str]:
        """
        Get video captions/transcript.
        In a production environment, you would use YouTube's captions API,
        or a third-party service like youtube-transcript-api.
        
        Args:
            video_id: YouTube video ID
            
        Returns:
            Transcript text or None if not available
        """
        # This is a placeholder. In a real implementation, you would:
        # 1. Use YouTube API or a third-party library to get captions
        # 2. Process and format the captions
        
        # For now, we'll return a mock response
        return f"This is a simulated transcript for video {video_id}."
    
    @staticmethod
    async def process_video_url(url: str) -> Tuple[Dict[str, Any], Optional[str]]:
        """
        Process a YouTube URL to extract metadata and transcript.
        
        Args:
            url: YouTube video URL
            
        Returns:
            Tuple of (metadata dict, transcript text)
        """
        video_id = YouTubeService.extract_video_id(url)
        if not video_id:
            raise ValueError(f"Could not extract video ID from URL: {url}")
        
        # Get video metadata
        metadata = await YouTubeService.get_video_metadata(video_id)
        
        # Get video transcript
        transcript = await YouTubeService.get_video_captions(video_id)
        
        return metadata, transcript