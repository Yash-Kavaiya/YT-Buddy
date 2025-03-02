from fastapi import APIRouter, HTTPException, Query
from pydantic import BaseModel, HttpUrl
from typing import List, Optional, Dict, Any
from app.services.youtube_service import get_video_info, get_video_statistics
from app.services.transcript_service import get_video_transcript
from app.services.openai_service import generate_summary, generate_blog_post

router = APIRouter()

class VideoUrl(BaseModel):
    url: HttpUrl

class VideoResponse(BaseModel):
    video_id: str
    title: str
    channel: str
    thumbnail: str
    published_at: str
    
class VideoContentResponse(VideoResponse):
    transcript: Optional[str] = None
    summary: Optional[str] = None
    blog_post: Optional[str] = None

class VideoStatisticsResponse(VideoResponse):
    views: int
    likes: int
    comments: int
    subscribers: int
    engagement_rate: float

@router.post("/content", response_model=VideoContentResponse)
async def process_video_content(video: VideoUrl):
    try:
        video_id = extract_video_id(str(video.url))
        if not video_id:
            raise HTTPException(status_code=400, detail="Invalid YouTube URL")
        
        # Get basic video info
        video_info = await get_video_info(video_id)
        
        # Get transcript
        transcript = await get_video_transcript(video_id)
        
        # Generate summary and blog post
        summary = await generate_summary(transcript, video_info)
        blog_post = await generate_blog_post(transcript, video_info)
        
        return {
            **video_info,
            "transcript": transcript,
            "summary": summary,
            "blog_post": blog_post
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/statistics", response_model=VideoStatisticsResponse)
async def get_video_stats(video: VideoUrl):
    try:
        video_id = extract_video_id(str(video.url))
        if not video_id:
            raise HTTPException(status_code=400, detail="Invalid YouTube URL")
        
        # Get basic video info
        video_info = await get_video_info(video_id)
        
        # Get statistics
        stats = await get_video_statistics(video_id)
        
        return {
            **video_info,
            **stats
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/generate/content")
async def generate_youtube_content(video: VideoUrl):
    try:
        video_id = extract_video_id(str(video.url))
        if not video_id:
            raise HTTPException(status_code=400, detail="Invalid YouTube URL")
        
        # Implementation for generating titles, descriptions, etc.
        # To be completed
        
        return {"message": "Content generation endpoint (to be implemented)"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/generate/ideas")
async def generate_content_ideas(video: VideoUrl):
    try:
        video_id = extract_video_id(str(video.url))
        if not video_id:
            raise HTTPException(status_code=400, detail="Invalid YouTube URL")
        
        # Implementation for generating content ideas
        # To be completed
        
        return {"message": "Ideas generation endpoint (to be implemented)"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

def extract_video_id(url: str) -> Optional[str]:
    """Extract YouTube video ID from various URL formats"""
    import re
    
    # Check for youtu.be format
    youtu_be_match = re.search(r'youtu\.be\/([a-zA-Z0-9_-]{11})', url)
    if youtu_be_match:
        return youtu_be_match.group(1)
    
    # Check for youtube.com format
    youtube_com_match = re.search(r'youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})', url)
    if youtube_com_match:
        return youtube_com_match.group(1)
    
    # Check for embedded format
    embedded_match = re.search(r'youtube\.com\/embed\/([a-zA-Z0-9_-]{11})', url)
    if embedded_match:
        return embedded_match.group(1)
    
    return None