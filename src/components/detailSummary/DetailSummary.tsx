"use client";

import React from 'react';
import './detailSummary.scss';
import { userDetailsTabs } from '@/utils/data';
import Image from 'next/image';
import { DetailSummaryProps } from '@/utils/types';


const DetailSummary: React.FC<DetailSummaryProps> = ({ user, activeTab, setActiveTab }) => {
  const filledStars = user.ratings || 0;
  const unfilledStars = 5 - filledStars;

  const userRatings = [
    ...Array(Math.max(filledStars, 0)).fill('/images/np_star_1208084_000000 1.svg'),
    ...Array(Math.max(unfilledStars, 0)).fill('/images/np_star_1171151_000000 2.svg'),
  ];

  return (
    <div className="userDashboardInfo">
      <div className="userData">
        <div className="user">
          <div className="userImg">
            <Image
              src="/images/avatar.svg"
              alt="User Avatar"
              fill
              className="img"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="userNameNID">
            <span className="name">{user.username}</span>
            <span className="id">{user.customerId}</span>
          </div>
        </div>

        <div className="rating">
          <span className="tier">User&apos;s Tier</span>
          <div className="stars">
            {userRatings.map((star, index) => (
              <div key={index} className="star">
                <Image
                  src={star}
                  alt="Star Rating"
                  fill
                  className="img"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="userBank">
          <span className="amount">{user.amount}</span>
          <span className="bank">{user.accountNumber}/Providus Bank</span>
        </div>
      </div>

      <div className="tabs">
        <ul>
          {userDetailsTabs.map((tab, index) => (
            <li key={index} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>
              <button className={activeTab === tab ? 'active' : ''}>{tab}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailSummary;
