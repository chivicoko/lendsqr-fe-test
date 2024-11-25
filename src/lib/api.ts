
import { User } from '@/utils/types';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.json-generator.com/templates/-EvRhZ2-ARcr/data',
  headers: {
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
  },
});

export const fetchUsers = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const fetchUserById = async (id: string) => {
  try {
    const users = await fetchUsers();
    const user = users.find((user: User) => user.id === id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw error;
  }
};
