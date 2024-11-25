"use client";

import './users.scss';
import UserTable from '@/components/userTable/table/UserTable';
import UserStats from '@/components/userStats/UserStats';

const Users = () => {

  return (
    <section className='userDetails'>
      <div className='usersWrapper'>
        <div className="headArea">
          <div className='title'>
            <h1>Users</h1>
          </div>
        </div>

        <UserStats />

        <UserTable />
      </div>
    </section>
  )
}

export default Users