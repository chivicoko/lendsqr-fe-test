import React from 'react';
import './generalDetails.scss';
import { SocialsProps } from '@/utils/types';

const Socials: React.FC<SocialsProps> = ({ socials }) => (
  <div className="info">
    <h3>Social Media</h3>
    <ul>
        <li>
            <span className="title">twitter</span>
            <span className="info">{socials.twitter}</span>
        </li>
        <li>
            <span className="title">facebook</span>
            <span className="info">{socials.facebook}</span>
        </li>
        <li>
            <span className="title">instagram</span>
            <span className="info">{socials.instagram}</span>
        </li>
    </ul>
    <hr />
  </div>
);

export default Socials;
