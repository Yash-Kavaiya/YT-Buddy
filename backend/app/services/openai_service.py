import asyncio
import openai
from typing import Dict, Any, Optional
from app.config import settings

# Configure OpenAI API
openai.api_key = settings.OPENAI_API_KEY

async def generate_summary(transcript: Optional[str], video_info: Dict[str, Any]) -> Optional[str]:
    """
    Generate a summary of the video transcript using OpenAI
    """
    if not transcript:
        return None
        
    # Run blocking API calls in a separate thread
    loop = asyncio.get_event_loop()
    return await loop.run_in_executor(None, _generate_summary_sync, transcript, video_info)

def _generate_summary_sync(transcript: str, video_info: Dict[str, Any]) -> str:
    """
    Synchronous version of generate_summary for running in executor
    """
    try:
        prompt = f"""
        This is a transcript from a YouTube video titled "{video_info['title']}" by {video_info['channel']}.
        
        Transcript:
        {transcript[:4000]}  # Limit transcript length for API
        
        Please provide a concise summary of this video content in 3-5 paragraphs.
        Focus on the main points, key insights, and valuable information.
        """
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant that creates concise video summaries."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=settings.MAX_SUMMARY_LENGTH,
            temperature=0.7,
        )
        
        return response.choices[0].message.content.strip()
    
    except Exception as e:
        print(f"Error generating summary: {str(e)}")
        return "Error generating summary. Please try again later."

async def generate_blog_post(transcript: Optional[str], video_info: Dict[str, Any]) -> Optional[str]:
    """
    Generate a blog post based on the video transcript using OpenAI
    """
    if not transcript:
        return None
        
    # Run blocking API calls in a separate thread
    loop = asyncio.get_event_loop()
    return await loop.run_in_executor(None, _generate_blog_post_sync, transcript, video_info)

def _generate_blog_post_sync(transcript: str, video_info: Dict[str, Any]) -> str:
    """
    Synchronous version of generate_blog_post for running in executor
    """
    try:
        prompt = f"""
        This is a transcript from a YouTube video titled "{video_info['title']}" by {video_info['channel']}.
        
        Transcript:
        {transcript[:4000]}  # Limit transcript length for API
        
        Please create a well-structured blog post based on this video content.
        Include:
        - An engaging title
        - Introduction
        - 3-5 main sections with subheadings
        - A conclusion
        - Format using Markdown
        
        Make it informative, engaging, and around 800-1200 words.
        """
        
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a skilled content writer who creates engaging blog posts from video content."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=2500,  # Allow longer content for blog posts
            temperature=0.7,
        )
        
        return response.choices[0].message.content.strip()
    
    except Exception as e:
        print(f"Error generating blog post: {str(e)}")
        return "Error generating blog post. Please try again later."

async def generate_youtube_content(video_id: str, content_type: str) -> Dict[str, Any]:
    """
    Generate YouTube content (titles, descriptions, tags) based on video content
    """
    # Implementation to be completed
    return {"message": "Content generation coming soon"}

async def generate_content_ideas(video_id: str) -> Dict[str, Any]:
    """
    Generate content ideas based on a YouTube video
    """
    # Implementation to be completed
    return {"message": "Ideas generation coming soon"}