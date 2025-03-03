// Video Tools Types
export interface VideoData {
  transcript: string;
  summary: string;
  blogpost: string;
}

// Video Analytics Types
export interface VideoStats {
  title: string;
  views: number;
  likes: number;
  comments: number;
  watchTime: string;
  retention: number;
  demographics: {
    age: { label: string; value: number }[];
    gender: { label: string; value: number }[];
    location: { label: string; value: number }[];
  };
  engagement: {
    date: string;
    views: number;
    likes: number;
    comments: number;
  }[];
}

// Content Creation Types
export interface ContentData {
  titles: string[];
  description: string;
  tags: string[];
  thumbnailIdeas: string[];
}

// Idea Generator Types
export interface IdeaData {
  videoIdeas: {
    title: string;
    description: string;
    category: string;
  }[];
  trendingTopics: string[];
  contentSeries: {
    title: string;
    episodes: string[];
  }[];
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}