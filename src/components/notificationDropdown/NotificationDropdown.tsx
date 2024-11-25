'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import './notificationDropdown.scss';


const NotificationDropdown: React.FC = () => {
  const rowDropdownRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={rowDropdownRef} className={`notificationDropdownMenu open`}>
      <ul>
        <li>
          <Link href={`/dashboard/users`} className='' tabIndex={-1}>
            <button className='menuBtn'>
              <span>All messages</span>
            </button>
          </Link>
        </li>
        <hr />
        <li>
          <button className='menuBtn'>
            <span>121 Unread messages</span>
          </button>
        </li>
        <hr />
        <li>
          <button className='menuBtn'>
            <span>14 Archived messages</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NotificationDropdown;
