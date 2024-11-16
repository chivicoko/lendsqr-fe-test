'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './headerDropdown.scss';
import { statuses } from '@/utils/data';
import { fetchUsers } from '@/lib/api';
import { FilterValues, User } from '@/utils/types';

interface HeaderDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onFilter: (filters: FilterValues) => void; // Add onFilter prop for applying filters
}

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ isOpen, onFilter }) => {
  const headerDropdownRef = useRef<HTMLDivElement | null>(null);
  const [organizations, setOrganizations] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  const [filterValues, setFilterValues] = useState<FilterValues>({
    organization: '',
    username: '',
    email: '',
    date: '',
    status: ''
  });

  useEffect(() => {
    const loadOrganizations = async () => {
      try {
        const users = await fetchUsers();
        const uniqueOrganizations = [...new Set(users.map((user: User) => user.organization as string))];
        setOrganizations(uniqueOrganizations as string[]);
      } catch (error) {
        console.error('Error fetching organizations:', error);
      } finally {
        setLoading(false);
      }
    };
    
    if (isOpen) {
      loadOrganizations();
    }
  }, [isOpen]);


  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilterValues({
      ...filterValues,
      [e.target.name]: e.target.value
    });
  };

  const handleFilter = () => {
    onFilter(filterValues);
  };

  const handleReset = () => {
    setFilterValues({
      organization: '',
      username: '',
      email: '',
      date: '',
      status: ''
    });
    onFilter({ organization: '', username: '', email: '', date: '', status: '' });
  };

  return (
    <div ref={headerDropdownRef} className={`headerDropdown open`}>
      <section className='formWrapper'>
        <div className="formArea">
          <form>
            <div className="organizationWrapper">
              <label htmlFor="organization">Organization</label>
              <select
                name="organization"
                id="organization"
                className='organization'
                value={filterValues.organization}
                onChange={handleInputChange}
              >
                <option disabled value="">Select</option>
                {loading ? (
                  <option>Loading...</option>
                ) : (
                  organizations.map((organization, index) => (
                    <option key={index} value={organization}>{organization}</option>
                  ))
                )}
              </select>
            </div>

            <div className="usernameWrapper">
              <label htmlFor="username">Username</label>
              <input
                className='username'
                id='username'
                name='username'
                type="text"
                placeholder='Username'
                value={filterValues.username}
                onChange={handleInputChange}
              />
            </div>

            <div className="emailWrapper">
              <label htmlFor="email">Email</label>
              <input
                className='email'
                id='email'
                name='email'
                type="text"
                placeholder='Email'
                value={filterValues.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="dateWrapper">
              <label htmlFor="date">Date</label>
              <div className='date'>
                <input
                  type='datetime'
                  // type='datetime-local'
                  id='date'
                  name='date'
                  value={filterValues.date}
                  onChange={handleInputChange}
                  placeholder='Date'
                />
                <button type="button">
                  <div className='columnHeadIcon'>
                    <Image
                      src="/images/np_calendar_2080577_000000 1.svg"
                      alt="Calendar icon"
                      fill
                      className="object-cover rounded-full"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </button>
              </div>
            </div>

            <div className="statusWrapper">
              <label htmlFor="status">Status</label>
              <select
                name="status"
                id="status"
                className='status'
                value={filterValues.status}
                onChange={handleInputChange}
              >
                <option disabled value="">Select Status</option>
                {statuses.map((status, index) => (
                  <option key={index} value={status}>{status}</option>
                ))}
              </select>
            </div>

            <div className="btns">
              <button type="button" className='resetBtn' onClick={handleReset}>Reset</button>
              <button type="button" className='filterBtn' onClick={handleFilter}>Filter</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HeaderDropdown;
