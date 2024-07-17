// src/api/members.js
import axios from 'axios';

const API_URL = 'https://api.example.com/members';

export const getMembers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getMemberById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createMember = async (memberData) => {
  const response = await axios.post(API_URL, memberData);
  return response.data;
};

export const updateMember = async (id, memberData) => {
  const response = await axios.put(`${API_URL}/${id}`, memberData);
  return response.data;
};

export const deleteMember = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
