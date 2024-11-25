import UserStats from '@/components/userStats/UserStats'
import React from 'react'
import './dashboard.scss';

const Dashboard = () => {
  return (
    <section className='dashboard'>
      <div className="headArea">
        <div className='title'>
          <h1>Users</h1>
        </div>
      </div>

      <UserStats />

    </section>
  )
}

export default Dashboard