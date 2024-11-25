"use client";

import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import { ReactNode, useState } from 'react';
import './dashboard.scss';

export default function Layout({ children }: { children: ReactNode }) {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const handleSidebarToggle = () => {
    setOpenSidebar((prev) => !prev);
  };

  return (    
    <div>
      <Navbar onSidebarToggle={handleSidebarToggle} />
      
      <div className="pageContainer">
        <Sidebar isOpen={openSidebar} />

        {children}
      </div>
    </div>
  );
}
