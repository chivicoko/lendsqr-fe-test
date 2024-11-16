'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './userDropdown.scss';


const UserDropdown: React.FC = () => {
  const rowDropdownRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={rowDropdownRef} className={`userDropDownMenu open`}>
      <h4>Freddie Mano</h4>
      <hr />
      <ul>
        <li>
          <Link href='/dashboard' className='' tabIndex={-1}>
            <button className='menuBtn'>
              <div className='menuIcon'>
                <Image
                  src="/images/home 1.svg"
                  alt="View details"
                  fill
                  className="object-cover rounded-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <span>Dashboard</span>
            </button>
          </Link>
        </li>
        <li>
          <Link href='/' className='' tabIndex={-1}>
            <button className='menuBtn'>
              <div className='menuIcon'>
                <Image
                  src="/images/np_view_1214519_000000 1.svg"
                  alt="View details"
                  fill
                  className="object-cover rounded-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <span>View profile</span>
            </button>
          </Link>
        </li>
        <hr />
        <li>
          <Link href={`/`} className='' tabIndex={-1}>
            <button className='menuBtn'>
              <div className='menuIcon'>
                <Image
                  src="/images/sign-out 1.svg"
                  alt="sign out"
                  fill
                  className="object-cover rounded-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <span>Sign out</span>
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
