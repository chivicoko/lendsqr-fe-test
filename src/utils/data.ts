
export const sidebarMenu = [
    { 
        id: 1,
        title: 'customers',
        menu: [
           { id: 1, path: '/dashboard/users', title: 'users', icon: '/images/user-friends 1.svg' },
           { id: 2, path: '/dashboard/guarantors', title: 'guarantors', icon: '/images/users 1.svg' },
           { id: 3, path: '/dashboard/loans', title: 'loans', icon: '/images/sack 1.svg' },
           { id: 4, path: '/dashboard/decision-models', title: 'decision models', icon: '/images/handshake-regular 1.svg' },
           { id: 5, path: '/dashboard/savings', title: 'savings', icon: '/images/piggy-bank 1.svg' },
           { id: 6, path: '/dashboard/loan-requests', title: 'loan requests', icon: '/images/Group 104.svg' },
           { id: 7, path: '/dashboard/whitelist', title: 'whitelist', icon: '/images/user-check 1.svg' },
           { id: 8, path: '/dashboard/karma', title: 'karma', icon: '/images/user-times 1.svg' },
        ]
    },
    { 
        id: 2,
        title: 'businesses',
        menu: [
           { id: 1, path: '/dashboard/organization', title: 'organization', icon: '/images/briefcase 1 (1).svg' },
           { id: 2, path: '/dashboard/loan-products', title: 'loan products', icon: '/images/Group 104.svg' },
           { id: 3, path: '/dashboard/saving-products', title: 'saving products', icon: '/images/np_bank_148501_000000 1.svg' },
           { id: 4, path: '/dashboard/fees-and-charges', title: 'fees and charges', icon: '/images/coins-solid 1.svg' },
           { id: 5, path: '/dashboard/transactions', title: 'transactions', icon: '/images/icon (4).svg' },
           { id: 6, path: '/dashboard/services', title: 'services', icon: '/images/galaxy 1.svg' },
           { id: 7, path: '/dashboard/service-account', title: 'service account', icon: '/images/user-cog 1.svg' },
           { id: 8, path: '/dashboard/settlements', title: 'settlements', icon: '/images/scroll 1.svg' },
           { id: 9, path: '/dashboard/report', title: 'report', icon: '/images/chart-bar 2.svg' },
        ]
    },
    { 
        id: 2,
        title: 'settings',
        menu: [
           { id: 1, path: '/dashboard/preferences', title: 'preferences', icon: '/images/sliders-h 1.svg' },
           { id: 2, path: '/dashboard/fees-and-pricing', title: 'fees and pricing', icon: '/images/badge-percent 1.svg' },
           { id: 3, path: '/dashboard/audit-logs', title: 'audit logs', icon: '/images/clipboard-list 1.svg' },
           { id: 4, path: '/dashboard/systems-messages', title: 'systems messages', icon: '/images/tire 1.svg' },
        ]
    },
]

export const generalDetails = [
    { 
        id: 1,
        title: 'personal information',
        info: [
           { id: 1, title: 'full name', info: 'Grace Effiom' },
           { id: 2, title: 'phone number', info: '08028845693' },
           { id: 3, title: 'email address', info: 'grace@gmail.com' },
           { id: 4, title: 'bvn', info: '33387364891' },
           { id: 5, title: 'gender', info: 'Female' },
           { id: 6, title: 'marital status', info: 'Single' },
           { id: 7, title: 'children', info: 'None' },
           { id: 8, title: 'type of residence', info: "Parent's Apartment" },
        ]
    },
    { 
        id: 2,
        title: 'education and employment',
        info: [
           { id: 1, title: 'level of education', info: 'B.Sc' },
           { id: 2, title: 'employement status', info: 'Employed' },
           { id: 3, title: 'sector of employment', info: 'FinTech' },
           { id: 4, title: 'duration of employment', info: '2 years' },
           { id: 5, title: 'office email', info: 'grace@lendsqr.com' },
           { id: 6, title: 'monthly income', info: '₦200,000.00 - ₦400,000.00' },
           { id: 7, title: 'loan repayment', info: '40,000' },
        ]
    },
    { 
        id: 3,
        title: 'socials',
        info: [
           { id: 1, title: 'twitter', info: '@grace_effiom' },
           { id: 2, title: 'facebook', info: 'Grace Effiom' },
           { id: 3, title: 'instagram', info: '@grace_effiom' },
        ]
    },
    { 
        id: 4,
        title: 'guarantor',
        info: [
           { id: 1, title: 'full name', info: 'Debby Ogana' },
           { id: 2, title: 'phone number', info: '08028845693' },
           { id: 3, title: 'email address', info: 'debby@gmail.com' },
           { id: 4, title: 'relationship', info: 'Sister' },
        ]
    },
    { 
        id: 5,
        title: ' ',
        info: [
            { id: 1, title: 'full name', info: 'Mark Mgbede' },
            { id: 2, title: 'phone number', info: '08028845693' },
            { id: 3, title: 'email address', info: 'mark@gmail.com' },
            { id: 4, title: 'relationship', info: 'Brother' },
        ]
    },
]

export const userDetailsTabs = ['General Details', 'Documents', 'Bank Details', 'Loans', 'Savings', 'App and System']

export const stars = ['/images/np_star_1208084_000000 1.svg', '/images/np_star_1171151_000000 2.svg', '/images/np_star_1171151_000000 2.svg']

export const userStats = [
    { id: 1, text: 'users', img: "/images/icon.svg", number: '2,453', },
    { id: 2, text: 'active users', img: "/images/icon (1).svg", number: '353', },
    { id: 3, text: 'users with loans', img: "/images/icon (2).svg", number: '153', },
    { id: 4, text: 'users with savings', img: "/images/icon (3).svg", number: '453', },
]

export const userTableHead = [
    { id: 1, column: 'organization', icon: '/images/filter-results-button.svg', },
    { id: 2, column: 'username', icon: '/images/filter-results-button.svg', },
    { id: 3, column: 'email', icon: '/images/filter-results-button.svg', },
    { id: 4, column: 'phone number', icon: '/images/filter-results-button.svg', },
    { id: 5, column: 'date joined', icon: '/images/filter-results-button.svg', },
    { id: 6, column: 'status', icon: '/images/filter-results-button.svg', },
]

export const userTable = [
    { id: 1, organization: 'Lendsqr', username: 'Grace Effiom', email: 'grace@lendsqr.com', phoneNumber: '07038474444', dateJoined: 'Jan 1, 2020 11:30 AM', status: 'active' },
    { id: 2, organization: 'Irorun', username: 'Adedeji Joy', email: 'joy@lendsqr.com', phoneNumber: '07094833345', dateJoined: 'May 20, 2021 09:35 AM', status: 'inactive' },
    { id: 3, organization: 'Relith', username: 'Debby Ogana', email: 'debby@relith.com', phoneNumber: '07003957771', dateJoined: 'Apr 15, 2020 10:00 AM', status: 'active' },
    { id: 4, organization: 'McCkiney', username: 'Ada Imoke', email: 'ada@mcckiney.com', phoneNumber: '07038474444', dateJoined: 'Sept 22, 2022 01:00 PM', status: 'blacklisted' },
    { id: 5, organization: 'Flektr', username: 'Emma Vin', email: 'emma@flektr.com', phoneNumber: '07003957771', dateJoined: 'Jan 1, 2020 11:30 AM', status: 'active' },
    { id: 6, organization: 'Lendstar', username: 'Zara Grace', email: 'zara@lendstar.com', phoneNumber: '07094833345', dateJoined: 'May 20, 2021 09:35 AM', status: 'pending' },
    { id: 7, organization: 'Amliss', username: 'Excel Adindu', email: 'excel@amliss.com', phoneNumber: '07038474444', dateJoined: 'Apr 15, 2020 10:00 AM', status: 'active' },
    { id: 8, organization: 'Hexasphere', username: 'Ify Okoye', email: 'ify@hexasphere.com', phoneNumber: '07003957771', dateJoined: 'Jan 1, 2020 11:30 AM', status: 'blacklisted' },
    { id: 10, organization: 'Agubas', username: 'Max Bonny', email: 'max@agubas.com', phoneNumber: '07038474444', dateJoined: 'Sept 22, 2022 01:00 PM', status: 'inactive' },
    { id: 9, organization: 'Innova', username: 'Tosin Mark', email: 'tosin@innova.com', phoneNumber: '07094833345', dateJoined: 'Apr 15, 2020 10:00 AM', status: 'pending' },
]

export const organizations = ['Lendsqr', 'Irorun', 'Relith', 'McCkiney', 'Flektr', 'Lendstar', 'Innova', 'Agubas', 'Hexasphere', 'Amliss']

export const statuses = ['Active', 'Inactive', 'Pending', 'Blacklisted']
