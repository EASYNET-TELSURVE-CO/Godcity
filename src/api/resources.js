// src/api/resources.js
import axios from 'axios';

const API_URL = 'https://api.example.com/resources';

export const getResources = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const uploadResource = async (resourceData) => {
  const response = await axios.post(API_URL, resourceData);
  return response.data;
};

export const deleteResource = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
