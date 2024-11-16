import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { User } from '@/utils/types';

// Axios instance for the API
const api = axios.create({
  baseURL: 'https://api.json-generator.com/templates/-EvRhZ2-ARcr/data',
  headers: {
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
  },
});

// GET request
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const usersResponse = await api.get('/');
    const users: User[] = usersResponse.data;

    const user = users.find((user: User) => user.id === id);

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error('Error fetching user:', error);

    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
