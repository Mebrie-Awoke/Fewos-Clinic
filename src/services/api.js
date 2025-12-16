import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}); 

export const submitAppointment = async (payload) => {
  try { 
    const response = await api.post('/posts', payload);
    return response.data;
  } catch (error) {
    return { error: true, message: error.message };
  }
};
