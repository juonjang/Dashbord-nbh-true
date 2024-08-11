"use client"; 

import Link from 'next/link';
import {  UserIcon, HomeIcon, CalendarIcon, ChartBarIcon, CogIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  return (
    <nav className="bg-hospital-white custom-green w-64 min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-prompt text-hospital-green font-bold">NB-Hospital Dashboard</h2>
      </div>
      <ul>
        <SidebarItem href="/" icon={HomeIcon} text="Dashboard" />
        <SidebarItem href="/patients" icon={UserIcon} text="Patients" />
        <SidebarItem href="/appointments" icon={CalendarIcon} text="Appointments" />
        <SidebarItem href="/analytics" icon={ChartBarIcon} text="Analytics" />
        <SidebarItem href="/settings" icon={CogIcon} text="Settings" />
      </ul>
    </nav>
  );
}

interface SidebarItemProps {
  href: string;
  icon: React.ElementType;
  text: string;
}

function SidebarItem({ href, icon: Icon, text }: SidebarItemProps) {
  return (
    <li className="mb-2">
      <Link href={href} className="flex items-center p-2 text-gray-700 hover:bg-blue-100 rounded">
        <Icon className="h-6 w-6 mr-3" />
        {text}
      </Link>
    </li>
  );
}
