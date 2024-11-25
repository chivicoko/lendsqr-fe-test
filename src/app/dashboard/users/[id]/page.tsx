"use client";

import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import './userdetails.scss';
import GeneralDetails from '@/components/generalDetails/GeneralDetails';
import { fetchUserById } from '@/lib/api';
import Loading from '@/app/loading';
import DetailSummary from '@/components/detailSummary/DetailSummary';
import { UserDetail } from '@/utils/types';
import { toast } from 'react-toastify';

const UserDetails = () => {
  const [user, setUser] = useState<UserDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState('General Details');
  const router = useRouter();
  const params = useParams();
  const userId = params.id;

  useEffect(() => {
    const fetchAndStoreUser = async () => {
      if (!userId) return;

      const storedUser = localStorage.getItem(`user_${userId}`);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setLoading(false);
      } else {
        try {
          const userDetails = await fetchUserById(userId as string);
          setUser(userDetails);

          // local storage
          localStorage.setItem(`user_${userId}`, JSON.stringify(userDetails));
        } catch (error) {
          console.error('Error fetching user details:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchAndStoreUser();
  }, [userId]);

  if (loading) return <Loading />;
  if (!user) return <p>User not found</p>;


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
    <section className='userDetails'>
      <button onClick={() => router.back()} className="backBtn">
        <div className="userleftArrowIcon">
          <Image
            src="/images/Vector-1.svg"
            alt="dropdown icon"
            fill
            className="img"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <p>Back to Users</p>
      </button>

      <div className="headArea">
        <div className='title'>
          <h1>User Details</h1>
        </div>
        <div className="btns">
          <button className="blacklistBtn" onClick={handleBlacklistUser}>blacklist user</button>
          <button className="activateBtn" onClick={handleActivateUser}>activate user</button>
        </div>
      </div>
      
      <DetailSummary user={user} activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Tabs */}
      {activeTab === 'General Details' && <GeneralDetails user={user} />}
      {activeTab === 'Documents' && <div className="generalDetails">Documents Component</div>}
      {activeTab === 'Bank Details' && <div className="generalDetails">Bank Details Component</div>}
      {activeTab === 'Loans' && <div className="generalDetails">Loans Amount: {user.loanAmount}</div>}
      {activeTab === 'Savings' && <div className="generalDetails">Savings Amount: {user.savingsAmount}</div>}
      {activeTab === 'App and System' && <div className="generalDetails">App and System Component</div>}
    </section>
  );
}

export default UserDetails;
