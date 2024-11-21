'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { userTable, userTableHead } from '@/utils/data';
import './userTable.scss';
import Loading from '@/app/loading';
import RowDropdown from '@/components/rowDropdown/RowDropdown';
import HeaderDropdown from '@/components/headerDropdown/HeaderDropdown';
import BasicPagination from '../pagination/Pagination';
import { fetchUsers } from '@/lib/api';
import { FilterValues, User } from '@/utils/types';

const UserTable: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [openHeaderDropdownId, setOpenHeaderDropdownId] = useState<number | null>(null);
  const [clickedBtns, setClickedBtns] = useState<{ [key: number]: boolean }>({});

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [usersPerPage, setUsersPerPage] = useState<number>(10);
  const [totalUsers, setTotalUsers] = useState<number>(0);

  useEffect(() => {
    const fetchAllUsers = async () => {
      setLoading(true);
      try {
        const data = await fetchUsers();
        setUsers(data);
        setTotalUsers(data.length);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Failed to fetch users.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllUsers();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) return <Loading />;

  const handleHeaderDropdownToggle = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();

    setClickedBtns((prev) => {
      const newClickedBtns = { ...prev };

      Object.keys(newClickedBtns).forEach((key) => {
        newClickedBtns[parseInt(key)] = false;
      });

      newClickedBtns[id] = !prev[id];

      return newClickedBtns;
    });

    setOpenHeaderDropdownId((prevId) => (prevId === id ? null : id));
  };

  const handleMenuToggle = (id: string) => {
    setOpenMenuId((prevId) => (prevId === id ? null : id));
  };

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUsersPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleFilter = (filters: FilterValues) => {
    const { organization = '', username = '', email = '', date = '', status = '' } = filters;
    let filteredUsers = users;

    if (organization) {
      filteredUsers = filteredUsers.filter((user) => user.organization === organization);
    }
    if (username) {
      filteredUsers = filteredUsers.filter((user) => user.username.includes(username));
    }
    if (email) {
      filteredUsers = filteredUsers.filter((user) => user.email.includes(email));
    }
    if (date) {
      filteredUsers = filteredUsers.filter((user) => user.dateJoined.startsWith(date));
    }
    if (status) {
      filteredUsers = filteredUsers.filter((user) => user.status === status);
    }

    setUsers(filteredUsers);
  };

  return (
    <>
      {error ? (
        <p className='text-red-500'>{error}</p>
      ) : userTable && userTable.length > 0 ? (
        <div className='userTableContainer'>
          <div className='userTable custom-scrollbar'>
            <table className='table'>
              <thead className='thead'>
                <tr className='tr'>
                  {userTableHead.map((column) => (
                    <th key={column.id} className='th'>
                      <div className="headCol">
                        <span>{column.column}</span>
                        <button
                          className={`${clickedBtns[column.id] ? 'clicked' : ''}`}
                          onClick={(e) => handleHeaderDropdownToggle(column.id, e)}
                        >
                          <div className={`${clickedBtns[column.id] ? 'clicked' : 'unclicked'} columnHeadIcon`}>
                            <Image
                              src={column.icon}
                              alt={`${column.column} icon`}
                              fill
                              className="object-cover rounded-full"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                        </button>
                      </div>

                      {openHeaderDropdownId === column.id && (
                        <HeaderDropdown
                          onFilter={handleFilter}
                          isOpen={openHeaderDropdownId === column.id}
                          onClose={() => setOpenHeaderDropdownId(null)}
                        />
                      )}
                    </th>
                  ))}
                  <th className='th'></th>
                </tr>
              </thead>

              <tbody>
                {currentUsers.map((user) => (
                  <tr key={user.id} className='tr'>
                    <td>{user.organization}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.dateJoined}</td>
                    <td>
                      <p className={user.status}>{user.status}</p>
                    </td>
                    <td>
                      <button
                        onClick={() => handleMenuToggle(user.id)}
                        className="menuBtnIcon"
                      >
                        <div className='menuIcon'>
                          <Image
                            src="/images/ic-more-vert-18px.svg"
                            alt="Menu icon"
                            fill
                            className="object-cover rounded-full"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </button>
                      {openMenuId === user.id && (
                        <RowDropdown
                          user={user}
                          isOpen={openMenuId === user.id}
                          onClose={() => setOpenMenuId(null)}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='pagination'>
            <div className='pages'>
              <span>Showing</span>

              <div className="select-container">
                <select
                  value={usersPerPage}
                  onChange={handleRowsPerPageChange}
                  className="span"
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>

              <span>out of {totalUsers}</span>
            </div>
            <BasicPagination count={totalPages} onPageChange={paginate} currentPage={currentPage} />
          </div>
        </div>
      ) : (
        <div className=''>No Users found</div>
      )}
    </>
  );
};

export default UserTable;
