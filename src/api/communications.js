// src/api/communications.js
import axios from 'axios';

const API_URL = 'https://api.example.com/communications';

export const sendEmail = async (emailData) => {
  const response = await axios.post(`${API_URL}/email`, emailData);
  return response.data;
};

export const sendSMS = async (smsData) => {
  const response = await axios.post(`${API_URL}/sms`, smsData);
  return response.data;
};
