// src/api/finances.js
import axios from 'axios';

const API_URL = 'https://api.example.com/finances';

export const getDonations = async () => {
  const response = await axios.get(`${API_URL}/donations`);
  return response.data;
};

export const createDonation = async (donationData) => {
  const response = await axios.post(`${API_URL}/donations`, donationData);
  return response.data;
};

export const getExpenses = async () => {
  const response = await axios.get(`${API_URL}/expenses`);
  return response.data;
};

export const createExpense = async (expenseData) => {
  const response = await axios.post(`${API_URL}/expenses`, expenseData);
  return response.data;
};
