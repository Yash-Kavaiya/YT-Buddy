import os
from pydantic import BaseSettings
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file

class Settings(BaseSettings):
    # API Keys
    YOUTUBE_API_KEY: str = os.getenv("YOUTUBE_API_KEY", "")
    OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY", "")
    
    # Service configurations
    MAX_TRANSCRIPT_LENGTH: int = 10000
    MAX_SUMMARY_LENGTH: int = 3000
    
    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"

settings = Settings()