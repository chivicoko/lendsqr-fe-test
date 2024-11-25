"use client";
import React, { useState } from 'react';
import './navbar.scss';
import Image from 'next/image';
import Searchbar from './searchbar/Searchbar';
import Link from 'next/link';
import UserDropdown from '../userDropdown/UserDropdown';
import NotificationDropdown from '../notificationDropdown/NotificationDropdown';

interface NavbarProps {
  onSidebarToggle: () => void;
}

const Navbar = ({ onSidebarToggle }: NavbarProps) => {
  const [openUserMenu, setOpenUserMenu] = useState<boolean>(false);
  const [openNotificationMenu, setOpenNotificationMenu] = useState<boolean>(false);

  const handleUserMenuToggle = () => {
    setOpenNotificationMenu(false);
    setOpenUserMenu((prev) => !prev);
  };

  const handleNotificationMenuToggle = () => {
    setOpenUserMenu(false);
    setOpenNotificationMenu((prev) => !prev);
  };

  return (
    <nav>
      <div className='navBar'>
        <div className="left">
          <div className="mobileLogo">
            <button className="breadcrumb" onClick={onSidebarToggle}>
              <div className="loginLogo">
                <Image
                  src="/images/breadcrumb.png"
                  alt="breadcrumb"
                  fill
                  className="img"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </button>

            <Link href='/' className="logoImg">
              <div className="loginLogo">
                  <Image
                      src="/images/Union.svg"
                      alt="Lendsqr's Logo"
                      fill
                      className="img"
                      sizes="(max-width: 768px) 100vw, 50vw"
                  />
              </div>
            </Link>
          </div>

          <Link href='/' className="logo">
            <div className="loginLogo">
              <Image
                src="/images/logo.svg"
                alt="Lendsqr's Logo"
                fill
                className="img"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Link>
        </div>

        <div className="searchNUserArea">
          <Searchbar />

          <div className="userArea">
            <Link href='/' className='docsLink'>Docs</Link>

            <button className="bellIcon" onClick={handleNotificationMenuToggle}>
              <Image
                src="/images/np_notification_2425223_000000 1.svg"
                alt="Lendsqr's Logo"
                fill
                className="img"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* <span></span> */}
              {/* <span>99+</span> */}
            </button>
            {openNotificationMenu && <NotificationDropdown />}

            <button className="userIcon" onClick={handleUserMenuToggle}>
              <div className="userImg">
                <Image
                  src="/images/avatar (1).svg"
                  alt="Lendsqr's Logo"
                  fill
                  className="img"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className='userName'>Adedeji</p>
              <div className="userDropdownIcon">
                <Image
                  src="/images/np_dropdown_615120_000000 1.svg"
                  alt="dropdown icon"
                  fill
                  className="img"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </button>
            {openUserMenu && <UserDropdown />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
