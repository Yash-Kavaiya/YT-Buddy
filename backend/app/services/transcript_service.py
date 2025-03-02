import asyncio
from typing import Optional
from youtube_transcript_api import YouTubeTranscriptApi, TranscriptsDisabled, NoTranscriptFound
from app.config import settings

async def get_video_transcript(video_id: str) -> Optional[str]:
    """
    Get the transcript of a YouTube video
    """
    # Run blocking API calls in a separate thread
    loop = asyncio.get_event_loop()
    return await loop.run_in_executor(None, _get_video_transcript_sync, video_id)

def _get_video_transcript_sync(video_id: str) -> Optional[str]:
    """
    Synchronous version of get_video_transcript for running in executor
    """
    try:
        transcript_list = YouTubeTranscriptApi.list_transcripts(video_id)
        
        # Try to get English transcript first
        try:
            transcript = transcript_list.find_transcript(['en'])
        except NoTranscriptFound:
            # If no English transcript, get the first available and translate it
            transcript = transcript_list.find_transcript(['en-US', 'en-GB'])
        
        transcript_data = transcript.fetch()
        
        # Combine all transcript parts into a single string
        full_transcript = ' '.join([part['text'] for part in transcript_data])
        
        # Limit transcript length if needed
        if len(full_transcript) > settings.MAX_TRANSCRIPT_LENGTH:
            full_transcript = full_transcript[:settings.MAX_TRANSCRIPT_LENGTH] + "..."
            
        return full_transcript
        
    except (TranscriptsDisabled, NoTranscriptFound) as e:
        print(f"Error getting transcript for video {video_id}: {str(e)}")
        return None
    except Exception as e:
        print(f"Unexpected error getting transcript for video {video_id}: {str(e)}")
        return None