import axios from 'axios';

const BASE_URL = 'https://pw-backend-livid.vercel.app/api/v1';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  phoneNumber: number;
}

export async function signUp(userData: User) {
  const response = await axios.post(`${BASE_URL}/auth/signup`, userData);
  return response.data;
}

export async function login(email: string, password: string) {
  const response = await axios.post(`${BASE_URL}/auth/login`, { email, password });
  return response.data;
}

export async function getUsers() {
  const response = await axios.get(`${BASE_URL}/auth/getUsers`);
  return response.data;
}

export async function updateUserDetails(userId: string, updateData: Partial<User>) {
  const response = await axios.put(`${BASE_URL}/auth/updateUserDetails/${userId}`, updateData);
  return response.data;
}

