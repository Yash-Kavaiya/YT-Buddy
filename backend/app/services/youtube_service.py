import asyncio
from typing import Dict, Any, Optional
from googleapiclient.discovery import build
from app.config import settings

async def get_video_info(video_id: str) -> Dict[str, Any]:
    """
    Get basic information about a YouTube video
    """
    # Run blocking API calls in a separate thread
    loop = asyncio.get_event_loop()
    return await loop.run_in_executor(None, _get_video_info_sync, video_id)

def _get_video_info_sync(video_id: str) -> Dict[str, Any]:
    """
    Synchronous version of get_video_info for running in executor
    """
    youtube = build('youtube', 'v3', developerKey=settings.YOUTUBE_API_KEY)
    
    # Get video details
    video_response = youtube.videos().list(
        part='snippet,contentDetails',
        id=video_id
    ).execute()
    
    if not video_response.get('items'):
        raise ValueError(f"Video with ID {video_id} not found")
    
    video_data = video_response['items'][0]
    snippet = video_data['snippet']
    
    return {
        "video_id": video_id,
        "title": snippet['title'],
        "channel": snippet['channelTitle'],
        "thumbnail": snippet['thumbnails']['high']['url'],
        "published_at": snippet['publishedAt']
    }

async def get_video_statistics(video_id: str) -> Dict[str, Any]:
    """
    Get statistical information about a YouTube video
    """
    # Run blocking API calls in a separate thread
    loop = asyncio.get_event_loop()
    return await loop.run_in_executor(None, _get_video_statistics_sync, video_id)

def _get_video_statistics_sync(video_id: str) -> Dict[str, Any]:
    """
    Synchronous version of get_video_statistics for running in executor
    """
    youtube = build('youtube', 'v3', developerKey=settings.YOUTUBE_API_KEY)
    
    # Get video statistics
    video_response = youtube.videos().list(
        part='statistics',
        id=video_id
    ).execute()
    
    if not video_response.get('items'):
        raise ValueError(f"Video with ID {video_id} not found")
    
    video_data = video_response['items'][0]
    stats = video_data['statistics']
    
    # Get channel info to retrieve subscriber count
    channel_id = youtube.videos().list(
        part='snippet',
        id=video_id
    ).execute()['items'][0]['snippet']['channelId']
    
    channel_response = youtube.channels().list(
        part='statistics',
        id=channel_id
    ).execute()
    
    if not channel_response.get('items'):
        raise ValueError(f"Channel with ID {channel_id} not found")
    
    channel_stats = channel_response['items'][0]['statistics']
    
    view_count = int(stats.get('viewCount', 0))
    like_count = int(stats.get('likeCount', 0))
    comment_count = int(stats.get('commentCount', 0))
    subscriber_count = int(channel_stats.get('subscriberCount', 0))
    
    # Calculate engagement rate: (likes + comments) / views * 100
    engagement_rate = 0
    if view_count > 0:
        engagement_rate = round(((like_count + comment_count) / view_count) * 100, 2)
    
    return {
        "views": view_count,
        "likes": like_count,
        "comments": comment_count,
        "subscribers": subscriber_count,
        "engagement_rate": engagement_rate
    }