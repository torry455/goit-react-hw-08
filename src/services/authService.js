import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};