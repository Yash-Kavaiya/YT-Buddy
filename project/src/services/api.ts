import axios from 'axios';

// This would be replaced with your actual API URL
const API_URL = 'http://localhost:8000';

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Video processing endpoints
export const processVideo = async (url: string) => {
  try {
    const response = await api.post('/video-tools', { url });
    return response.data;
  } catch (error) {
    console.error('Error processing video:', error);
    throw error;
  }
};

// Video analytics endpoints
export const getVideoAnalytics = async (url: string) => {
  try {
    const response = await api.post('/video-analytics', { url });
    return response.data;
  } catch (error) {
    console.error('Error fetching video analytics:', error);
    throw error;
  }
};

// Content creation endpoints
export const generateContent = async (topic: string) => {
  try {
    const response = await api.post('/content-creation', { topic });
    return response.data;
  } catch (error) {
    console.error('Error generating content:', error);
    throw error;
  }
};

// Idea generation endpoints
export const generateIdeas = async (url: string) => {
  try {
    const response = await api.post('/idea-generator', { url });
    return response.data;
  } catch (error) {
    console.error('Error generating ideas:', error);
    throw error;
  }
};

// Contact form endpoint
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const response = await api.post('/contact', formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

export default api;