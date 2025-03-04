from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any, Optional
import uvicorn
import os
from dotenv import load_dotenv

# Import Gemini service
from services.gemini_service import (
    generate_transcript,
    generate_summary,
    generate_blog_post,
    extract_video_metadata
)

# Load environment variables
load_dotenv()

app = FastAPI(title="YouTube Productivity Tools API")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class VideoURL(BaseModel):
    url: str

class Topic(BaseModel):
    topic: str

class ContactForm(BaseModel):
    name: str
    email: str
    subject: Optional[str] = None
    message: str

# Video Tools Endpoints
@app.post("/video-tools")
async def process_video(video_data: VideoURL):
    """
    Process a YouTube video to extract transcript, generate summary, and create a blog post using Gemini AI.
    """
    try:
        # Extract video metadata (mock function for now)
        metadata = await extract_video_metadata(video_data.url)
        
        # In a real implementation, you might obtain an initial transcript via YouTube's API
        # or a third-party service, then enhance it with Gemini
        mock_video_content = f"Video title: {metadata['title']}\nChannel: {metadata['channel']}\nDescription: {metadata['description']}"
        
        # Generate transcript using Gemini
        transcript = await generate_transcript(mock_video_content)
        
        # Generate summary using Gemini
        summary = await generate_summary(transcript)
        
        # Generate blog post using Gemini
        blogpost = await generate_blog_post(transcript, metadata["title"])
        
        return {
            "transcript": transcript,
            "summary": summary,
            "blogpost": blogpost
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing video: {str(e)}")

# Video Analytics Endpoints
@app.post("/video-analytics")
async def get_video_analytics(video_data: VideoURL):
    """
    Analyze a YouTube video and return performance statistics.
    """
    try:
        # In a real implementation, this would call services to analyze the video
        # For demo purposes, we're returning mock data
        return {
            "title": "How to Grow Your YouTube Channel in 2025",
            "views": 45872,
            "likes": 3254,
            "comments": 487,
            "watchTime": "2,345 hours",
            "retention": 64,
            "demographics": {
                "age": [
                    {"label": "18-24", "value": 35},
                    {"label": "25-34", "value": 42},
                    {"label": "35-44", "value": 15},
                    {"label": "45+", "value": 8}
                ],
                "gender": [
                    {"label": "Male", "value": 68},
                    {"label": "Female", "value": 30},
                    {"label": "Other", "value": 2}
                ],
                "location": [
                    {"label": "United States", "value": 45},
                    {"label": "United Kingdom", "value": 12},
                    {"label": "Canada", "value": 8},
                    {"label": "Australia", "value": 7},
                    {"label": "Other", "value": 28}
                ]
            },
            "engagement": [
                {"date": "Jan 1", "views": 1200, "likes": 120, "comments": 24},
                {"date": "Jan 2", "views": 1500, "likes": 145, "comments": 32},
                {"date": "Jan 3", "views": 2000, "likes": 210, "comments": 45},
                {"date": "Jan 4", "views": 1800, "likes": 190, "comments": 38},
                {"date": "Jan 5", "views": 2200, "likes": 245, "comments": 52},
                {"date": "Jan 6", "views": 2500, "likes": 280, "comments": 60},
                {"date": "Jan 7", "views": 3000, "likes": 320, "comments": 68}
            ]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error analyzing video: {str(e)}")

# Content Creation Endpoints
@app.post("/content-creation")
async def generate_content(topic_data: Topic):
    """
    Generate content ideas based on a topic or keyword.
    """
    try:
        # In a real implementation, this would call services to generate content
        # For demo purposes, we're returning mock data
        return {
            "titles": [
                "10 Proven Strategies to Grow Your YouTube Channel in 2025",
                "How I Gained 100K Subscribers in Just 6 Months (Real Strategy)",
                "YouTube Algorithm Secrets: What's Working in 2025",
                "The Ultimate Guide to YouTube Growth for Beginners",
                "5 YouTube Growth Hacks That Actually Work in 2025"
            ],
            "description": "In this video, I'm sharing my complete YouTube growth strategy...",
            "tags": [
                "youtube growth",
                "grow youtube channel",
                "youtube algorithm",
                "youtube strategy",
                "youtube for beginners"
            ],
            "thumbnailIdeas": [
                "Close-up of your face with a shocked expression + text '0 to 100K'",
                "Split screen before/after of your channel growth + arrow pointing up",
                "You pointing at a growth chart with large text '2025 STRATEGY'"
            ]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating content: {str(e)}")

# Idea Generator Endpoints
@app.post("/idea-generator")
async def generate_ideas(video_data: VideoURL):
    """
    Generate content ideas based on a YouTube video.
    """
    try:
        # In a real implementation, this would call services to generate ideas
        # For demo purposes, we're returning mock data
        return {
            "videoIdeas": [
                {
                    "title": "I Tested the Top 5 YouTube Growth Strategies So You Don't Have To",
                    "description": "An experiment-based video where you test different growth strategies...",
                    "category": "Experiment"
                },
                {
                    "title": "YouTube Studio Features You Didn't Know Existed (2025 Edition)",
                    "description": "A tutorial showcasing hidden or underutilized features in YouTube Studio...",
                    "category": "Tutorial"
                }
            ],
            "trendingTopics": [
                "AI tools for content creators",
                "Short-form vs. long-form content strategy",
                "YouTube monetization alternatives"
            ],
            "contentSeries": [
                {
                    "title": "YouTube Growth Masterclass",
                    "episodes": [
                        "Part 1: Finding Your Niche and Target Audience",
                        "Part 2: Content Strategy and Planning",
                        "Part 3: Thumbnail and Title Optimization"
                    ]
                }
            ]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating ideas: {str(e)}")

# Contact Form Endpoint
@app.post("/contact")
async def submit_contact_form(form_data: ContactForm):
    """
    Process contact form submissions.
    """
    try:
        # In a real implementation, this would send an email or store the contact form data
        # For demo purposes, we're just returning a success message
        return {"status": "success", "message": "Your message has been received. We'll get back to you soon!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error submitting form: {str(e)}")

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)