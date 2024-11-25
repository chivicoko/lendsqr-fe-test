'use client';

import React, { useEffect, useState } from 'react';
import { fetchUsers } from '@/lib/api';
import { User } from '@/utils/types';

const SidebarSwitchOrganization: React.FC = () => {
  const [organizations, setOrganizations] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedOrganization, setSelectedOrganization] = useState<string>('');

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

    loadOrganizations();
  }, []);

  const handleOrganizationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOrganization(e.target.value);
  };

  return (
    <div className="switchOrganization">
        <select
            name="organization"
            id="organization"
            className='organizationDropdown'
            value={selectedOrganization}
            onChange={handleOrganizationChange}
        >
            <option disabled value="">Switch Organization</option>
            {loading ? (
                <option>Loading...</option>
                ) : (
                organizations.map((organization, index) => (
                    <option key={index} value={organization}>{organization}</option>
                ))
            )}
        </select>
    </div>
  );
};

export default SidebarSwitchOrganization;
