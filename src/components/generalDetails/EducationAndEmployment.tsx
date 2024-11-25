import React from 'react';
import './generalDetails.scss';
import { EducationAndEmploymentProps } from '@/utils/types';

const EducationAndEmployment: React.FC<EducationAndEmploymentProps> = ({ educationAndEmployment }) => (
  <div className="info">
    <h3>Education & Employment</h3>
    <ul>
        <li>
            <span className="title">level of education</span>
            <span className="info">{educationAndEmployment.levelOfEducation}</span>
        </li>
        <li>
            <span className="title">employment status</span>
            <span className="info">{educationAndEmployment.employmentStatus}</span>
        </li>
        <li>
            <span className="title">sector of employment</span>
            <span className="info">{educationAndEmployment.sectorOfEmployment}</span>
        </li>
        <li>
            <span className="title">duration of employment</span>
            <span className="info">{educationAndEmployment.durationOfEmployment}</span>
        </li>
        <li>
            <span className="title">office email</span>
            <span className="info">{educationAndEmployment.officeEmail}</span>
        </li>
        <li>
            <span className="title">monthly income</span>
            <span className="info">{educationAndEmployment.monthlyIncome}</span>
        </li>
        <li>
            <span className="title">loan repayment</span>
            <span className="info">{educationAndEmployment.loanRepayment}</span>
        </li>
    </ul>
    <hr />
  </div>
);

export default EducationAndEmployment;
