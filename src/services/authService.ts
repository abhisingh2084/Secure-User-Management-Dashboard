// src/services/authService.ts
import axios from 'axios';

export const signIn = async (credentials: { email: string; password: string }) => {
  try {
    const response = await axios.post('https://reqres.in/api/login', credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

  
  export const signUp = async (userData: { email: string; password: string; /* additional properties */ }) => {
    try {
      const response = await axios.post('https://reqres.in/api/users', userData);
      return response.data;
    } catch (error) {
      throw error;
    }
};
