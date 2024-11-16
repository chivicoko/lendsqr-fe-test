"use client";
import React, { useState } from 'react';
import './sidebar.scss';
import Image from 'next/image';
import { sidebarMenu } from '@/utils/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UserDropdown from '../userDropdown/UserDropdown';
import NotificationDropdown from '../notificationDropdown/NotificationDropdown';
import SidebarSwitchOrganization from './SidebarSwitchOrganization';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const pathName = usePathname();
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

  const isActivePath = (route: string | null) => {
    if (!route) return false;
    return route === '/dashboard' ? pathName === route : pathName.startsWith(route);
  };

  return (
    <nav className={`sideBarNav custom-scrollbar ${isOpen ? 'open' : ''}`}>
      <div className="userArea">
        <Link href='/' className='docsLink'>Docs</Link>

        <button className="bellIcon" onClick={handleNotificationMenuToggle}>
          <Image
            src="/images/np_notification_2425223_000000 1.svg"
            alt="Notifications"
            fill
            className="img"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <span>99+</span>
        </button>
        {openNotificationMenu && <NotificationDropdown />}

        <button className="userIcon" onClick={handleUserMenuToggle}>
          <div className="userImg">
            <Image
              src="/images/avatar (1).svg"
              alt="User Avatar"
              fill
              className="img"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <p className='userName'>Adedeji</p>
          <div className="userDropdownIcon">
            <Image
              src="/images/np_dropdown_615120_000000 1.svg"
              alt="Dropdown Icon"
              fill
              className="img"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </button>
        {openUserMenu && <UserDropdown />}
      </div>

      <button className="organization">
        <div className="organizationIcon">
          <Image
            src="/images/briefcase 1.svg"
            alt="Organization Icon"
            fill
            className="img"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      
        <SidebarSwitchOrganization/>
      </button>

      <div className='dashboard'>
        <Link href='/dashboard' className={`${isActivePath('/dashboard') ? 'active' : ''}`}>
          <div className="dashboardIcon">
            <Image
              src="/images/home 1.svg"
              alt="Dashboard Icon"
              fill
              className="img"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <p className='name'>Dashboard</p>
        </Link>
      </div>

      {sidebarMenu.map((menuItem) => (
        <div key={menuItem.id}>
          <button className="title">{menuItem.title}</button>
          <ul>
            <li>
              {menuItem.menu.map((item) => (
                <Link
                  href={`${item.path}`}
                  key={item.id}
                  className={`menuItem ${isActivePath(item.path) ? 'active' : ''}`}
                >
                  <div className="menuItemIcon">
                    <Image src={item.icon} alt={item.title} fill className="img" />
                  </div>
                  <p className='name'>{item.title}</p>
                </Link>
              ))}
            </li>
          </ul>
        </div>
      ))}

      <hr className='hr' />

      <div className="logout">
        <Link href='/'>
          <div className="logoutIcon">
            <Image src="/images/sign-out 1.svg" alt="Logout Icon" fill className="img" />
          </div>
          <p className='name'>Logout</p>
        </Link>
      </div>

      <div className='version'>
        <p>v1.2.0</p>
      </div>
    </nav>
  );
};

export default Sidebar;
