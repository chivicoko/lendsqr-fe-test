"use client";

import React, { useEffect, useState } from 'react'
import './userStats.scss';
import Image from 'next/image';
import { userStats } from '@/utils/data';
import { User } from '@/utils/types';
import { fetchUsers } from '@/lib/api';
import Loading from '@/app/loading';
import Error from '@/app/error';

const UserStats = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [activeUsers, setActiveUsers] = useState<number>(0);
  const [usersWithLoans, setUsersWithLoans] = useState<number>(0);
  const [usersWithSavings, setUsersWithSavings] = useState<number>(0);
  
  useEffect(() => {
    const fetchAllUsers = async () => {
      setLoading(true);
      try {
        const data = await fetchUsers();
        setUsers(data);
        setTotalUsers(data.length);
        setActiveUsers(data.filter((user: User) => user.status === 'active').length);
        setUsersWithLoans(data.filter((user: User) => user.loanAmount !== '₦0.00').length);
        setUsersWithSavings(data.filter((user: User) => user.savingsAmount !== '₦0.00').length);
        // console.log(activeUsers, usersWithLoans, usersWithSavings);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Failed to fetch users.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllUsers();
  }, []);

  if (loading) <Loading />;
  if (error) <Error />;
  console.log(users);
  
  
  return (
    <section className="stats">
        <ul>
            {
            userStats.map((stat) => {
                return(
                <li key={stat.id}>
                  <div className="userImg">
                    <Image
                        src={stat.img}
                        alt="Lendsqr's Logo"
                        fill
                        className="img"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    </div>
                    <p className="text">{stat.text}</p>
                    <p className="number">
                      {stat.text === 'users' ?
                      totalUsers : stat.text === 'active users' ?
                      activeUsers : stat.text === 'users with loans' ?
                      usersWithLoans : usersWithSavings}
                    </p>
                </li>
                )
            })
            }
        </ul>
    </section>
  )
}

export default UserStats