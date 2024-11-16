import React from 'react';
import './generalDetails.scss';
import { GuarantorProps } from '@/utils/types';

const Guarantor: React.FC<GuarantorProps> = ({ guarantor }) => (
  <div className="info">
    <h3>Guarantor Information</h3>
    <ul>
        <li>
            <span className="title">full name</span>
            <span className="info">{guarantor.fullName}</span>
        </li>
        <li>
            <span className="title">phone number</span>
            <span className="info">{guarantor.phoneNumber}</span>
        </li>
        <li>
            <span className="title">email</span>
            <span className="info">{guarantor.email}</span>
        </li>
        <li>
            <span className="title">relationship</span>
            <span className="info">{guarantor.relationship}</span>
        </li>
    </ul>
  </div>
);

export default Guarantor;
