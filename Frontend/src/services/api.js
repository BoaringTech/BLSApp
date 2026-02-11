import axios from 'axios';

// Create axios instance with base URL
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5125', // Base URL for API requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;