// src/services/dataService.ts
import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users?page=2');
    return response.data;
  } catch (error) {
    throw error;
  }
};
