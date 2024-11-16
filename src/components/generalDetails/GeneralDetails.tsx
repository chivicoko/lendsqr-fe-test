import React from 'react';
import './generalDetails.scss';
import EducationAndEmployment from './EducationAndEmployment';
import Socials from './Socials';
import Guarantor from './Guarantor';
import { UserDetail } from '@/utils/types';

interface GeneralDetailsProps {
  user: UserDetail | null;
}

const GeneralDetails: React.FC<GeneralDetailsProps> = ({ user }) => {
  if (!user) return null;

  return (
    <div className="generalDetails">
      <div className="info">
        <h3>Personal Information</h3>
        <ul>
          <li>
            <span className="title">Full Name</span>
            <span className="info">{user.username}</span>
          </li>
          <li>
            <span className="title">Phone Number</span>
            <span className="info">{user.phoneNumber}</span>
          </li>
          <li>
            <span className="title">Email Address</span>
            <span className="info">{user.email}</span>
          </li>
          <li>
            <span className="title">BVN</span>
            <span className="info">{user?.profile?.bvn}</span>
          </li>
          <li>
            <span className="title">Gender</span>
            <span className="info">{user.profile.gender}</span>
          </li>
          <li>
            <span className="title">Marital Status</span>
            <span className="info">{user.profile.maritalStatus}</span>
          </li>
          <li>
            <span className="title">Children</span>
            <span className="info">{user.profile.children}</span>
          </li>
          <li>
            <span className="title">Type of Residence</span>
            <span className="info">{user.profile.typeOfResidence}</span>
          </li>
        </ul>
        <hr />
      </div>
      <EducationAndEmployment educationAndEmployment={user.educationAndEmployment} />
      <Socials socials={user.socials} />
      <Guarantor guarantor={user.guarantor} />
    </div>
  );
};

export default GeneralDetails;
