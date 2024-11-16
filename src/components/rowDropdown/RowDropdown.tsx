'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './rowDropdown.scss';
import { User } from '@/utils/types';
import { toast } from 'react-toastify';


interface RowDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
}

const RowDropdown: React.FC<RowDropdownProps> = ({ user, isOpen }) => {
  const rowDropdownRef = useRef<HTMLDivElement | null>(null);

  if (!isOpen) return null;

  const handleActivateUser = () => {
    toast.success('This user has been activated!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const handleBlacklistUser = () => {
    toast.error('This user has been blacklisted!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };


  return (
    <div ref={rowDropdownRef} className={`dataDropDownMenu open`}>
      <ul>
        <li>
          <Link href={`/dashboard/users/${user.id}`} className='' tabIndex={-1}>
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
              <span>View details</span>
            </button>
          </Link>
        </li>
        <li>
          <button className='menuBtn' onClick={handleBlacklistUser}>
            <div className='menuIcon'>
              <Image
                src="/images/np_delete-friend_3248001_000000 1.svg"
                alt="Blacklist user"
                fill
                className="object-cover rounded-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <span>Blacklist user</span>
          </button>
        </li>
        <li>
          <button className='menuBtn' onClick={handleActivateUser}>
            <div className='menuIcon'>
              <Image
                src="/images/np_user_2995993_000000 1.svg"
                alt="Activate user"
                fill
                className="object-cover rounded-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <span>Activate user</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default RowDropdown;
