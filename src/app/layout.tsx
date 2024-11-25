import { ReactNode } from 'react';
import './globals.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Work_Sans } from 'next/font/google';

// Load Google Fonts with next/font
const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-workSans',
  display: 'swap',
});

export const metadata = {
  title: {
    default: "Lendsqr Dashboard | Securely borrow / Lend as much as you want.",
    template: "%s | Lendsqr Dashboard",
  },
  description: "Lendsqr Dashboard is the admin area of Lendsqr",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${workSans.variable}`}>
      <body className=''>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <link rel="icon" type="image/png" href="/images/favicon_io/favicon.ico" />
      </body>
    </html>
  );
}
