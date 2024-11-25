export type User = {
  id: string;
  customerId: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  accountNumber: string;
  dateJoined: string;
  status: string;
  ratings: number;
  amount: string;
  loanAmount: string;
  savingsAmount: string;
};


export type UserDetail = {
  id: string;
  customerId: string;
  organization: string;
  username: string;
  email: string;
  phoneNumber: string;
  accountNumber: string;
  dateJoined: string;
  status: string;
  ratings: number;
  amount: string;
  loanAmount: string;
  savingsAmount: string;
  profile: {
    bvn: string;
    gender: string;
    maritalStatus: string;
    children: string;
    typeOfResidence: string;
  };
  educationAndEmployment: {
    levelOfEducation: string;
    employmentStatus: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
  };
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  };
};


export type EducationAndEmploymentProps = {
  educationAndEmployment: {
    levelOfEducation: string;
    employmentStatus: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
  };
};


export type GuarantorProps = {
  guarantor: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  };
};


export type SocialsProps = {
  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
};



export interface FilterValues {
  organization?: string;
  username?: string;
  email?: string;
  date?: string;
  status?: string;
}

export type ProfileDetailsProps = {
  profile: {
    bvn: string;
    gender: string;
    maritalStatus: string;
    children: string;
    typeOfResidence: string;
  };
};

export interface DetailSummaryProps {
  user: User;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export interface UserProfile {
  bvn?: string;
  gender: string;
  maritalStatus: string;
  children: number;
  typeOfResidence: string;
}
