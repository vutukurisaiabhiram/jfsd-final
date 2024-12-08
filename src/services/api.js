import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getJobPostings = async () => {
  const response = await api.get('/job-postings');
  return response.data;
};

export const createApplication = async (applicationData) => {
  const response = await api.post('/applications', applicationData);
  return response.data;
};

export const login = async (userData) => {
  const response = await api.post('/login', userData);
  return response.data;
};

export const register = async (userData) => {
  const response = await api.post('/register', userData);
  return response.data;
};


