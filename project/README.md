# YouTube Productivity Tools

A comprehensive platform for YouTube creators to analyze, optimize, and elevate their content. This application provides tools for video processing, analytics, content creation, and idea generation.

## Features

1. **Video Processing Tools**
   - Transcript extraction from YouTube videos
   - Video summarization
   - Blog post generation from video content

2. **Video Analytics**
   - View count, likes, comments statistics
   - Audience demographics
   - Engagement metrics
   - Performance insights and recommendations

3. **Content Creation Tools**
   - Title generation
   - Description writing
   - Tag suggestions
   - Thumbnail design ideas

4. **Idea Generator**
   - Video ideas based on existing content
   - Trending topics in your niche
   - Content series suggestions

5. **Contact & About Pages**
   - Get in touch with the team
   - Learn about the platform and its mission

## Tech Stack

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Axios for API requests
- Lucide React for icons

### Backend
- Python FastAPI
- Pydantic for data validation

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)

### Installation

1. Clone the repository
```
git clone https://github.com/yourusername/youtube-productivity-tools.git
cd youtube-productivity-tools
```

2. Install frontend dependencies
```
npm install
```

3. Install backend dependencies
```
cd backend
pip install -r requirements.txt
```

### Running the Application

1. Start the frontend development server
```
npm run dev
```

2. Start the backend server
```
cd backend
python main.py
```

3. Open your browser and navigate to `http://localhost:5173`

## API Endpoints

- `/video-tools` - Process YouTube videos for transcripts, summaries, and blog posts
- `/video-analytics` - Get analytics data for YouTube videos
- `/content-creation` - Generate content ideas based on topics
- `/idea-generator` - Generate video ideas based on existing content
- `/contact` - Submit contact form

## Future Enhancements

- User authentication and saved preferences
- Integration with YouTube API for direct channel management
- AI-powered thumbnail generation
- Competitive analysis tools
- Batch processing for multiple videos