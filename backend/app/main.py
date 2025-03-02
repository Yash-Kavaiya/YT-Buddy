from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import youtube

app = FastAPI(
    title="YT-Buddy API",
    description="API for YouTube productivity tools",
    version="0.1.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For production, replace with specific frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(youtube.router, prefix="/api/youtube", tags=["YouTube"])

@app.get("/")
async def root():
    return {"message": "Welcome to YT-Buddy API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)