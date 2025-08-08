import axios from 'axios';
import { Job } from '../types/Job';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const jobService = {
  getAllJobs: async (): Promise<Job[]> => {
    const response = await api.get('/jobs');
    return response.data;
  },

  getJobById: async (id: number): Promise<Job> => {
    const response = await api.get(`/jobs/${id}`);
    return response.data;
  },

  createJob: async (job: Job): Promise<Job> => {
    const response = await api.post('/jobs', job);
    return response.data;
  },

  updateJob: async (id: number, job: Job): Promise<Job> => {
    const response = await api.put(`/jobs/${id}`, job);
    return response.data;
  },

  deleteJob: async (id: number): Promise<void> => {
    await api.delete(`/jobs/${id}`);
  },
};