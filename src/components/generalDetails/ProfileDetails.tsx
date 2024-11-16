import { ProfileDetailsProps } from '@/utils/types';
import React from 'react';


const ProfileDetails: React.FC<ProfileDetailsProps> = ({ profile }) => (
  <div className="generalDetails">
    <h3>Profile Information</h3>
    <ul>
      <li><strong>BVN:</strong> {profile.bvn}</li>
      <li><strong>Gender:</strong> {profile.gender}</li>
      <li><strong>Marital Status:</strong> {profile.maritalStatus}</li>
      <li><strong>Children:</strong> {profile.children}</li>
      <li><strong>Type of Residence:</strong> {profile.typeOfResidence}</li>
    </ul>
    <hr />
  </div>
);

export default ProfileDetails;
