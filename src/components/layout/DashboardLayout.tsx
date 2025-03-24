"use client";

import React, { ReactNode, useState } from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FiHome, 
  FiBook, 
  FiFileText, 
  FiAward, 
  FiUser, 
  FiBell, 
  FiLogOut, 
  FiMenu, 
  FiX,
  FiUsers,
  FiPlusCircle,
  FiUploadCloud,
  FiCheckSquare,
  FiBarChart2,
  FiSettings
} from 'react-icons/fi';

const inter = Inter({ subsets: ['latin'] });

type DashboardLayoutProps = {
  children: ReactNode;
  userType: 'student' | 'admin';
};

const DashboardLayout = ({ children, userType }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const studentNavItems = [
    { name: 'Dashboard', href: '/student/dashboard', icon: FiHome },
    { name: 'My Courses', href: '/student/courses', icon: FiBook },
    { name: 'Assignments & Quizzes', href: '/student/quiz', icon: FiFileText },
    { name: 'Certificates', href: '/student/certificates', icon: FiAward },
    { name: 'Profile', href: '/student/profile', icon: FiUser },
    { name: 'Notifications', href: '/student/notifications', icon: FiBell },
  ];

  const adminNavItems = [
    { name: 'Dashboard', href: '/admin/admin-dashboard', icon: FiHome },
    { name: 'Manage Users', href: '/admin/users', icon: FiUsers },
    { name: 'Manage Courses', href: '/admin/courses', icon: FiBook },
    { name: 'Analytics', href: '/admin/analytics', icon: FiBarChart2 },
    { name: 'Settings', href: '/admin/settings', icon: FiSettings },
    { name: 'Notifications', href: '/admin/notifications', icon: FiBell },
  ];

  const navItems = userType === 'student' ? studentNavItems : adminNavItems;

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className={`min-h-screen bg-gray-100 ${inter.className}`}>
      {/* Mobile sidebar */}
      <div className={`lg:hidden fixed inset-0 z-40 flex ${sidebarOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity duration-300 ease-linear ${sidebarOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={() => setSidebarOpen(false)}
        />
        
        <div className={`relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white transition duration-300 ease-in-out transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <FiX className="h-6 w-6 text-white" />
            </button>
          </div>
          
          <div className="flex-shrink-0 flex items-center px-4">
            <div className="text-xl font-bold text-blue-600">EduLearn LMS</div>
          </div>
          
          <div className="mt-5 flex-1 h-0 overflow-y-auto">
            <nav className="px-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                    isActive(item.href)
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon
                    className={`mr-4 h-6 w-6 ${
                      isActive(item.href) ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                  />
                  {item.name}
                </Link>
              ))}
              <Link
                href="/auth/login"
                className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <FiLogOut className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                Sign Out
              </Link>
            </nav>
          </div>
        </div>
        
        <div className="flex-shrink-0 w-14">
          {/* Dummy element to force sidebar to shrink to fit close icon */}
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <div className="text-xl font-bold text-blue-600">EduLearn LMS</div>
              </div>
              
              <div className="mt-8">
                <nav className="flex-1 px-4 space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                        isActive(item.href)
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <item.icon
                        className={`mr-3 flex-shrink-0 h-6 w-6 ${
                          isActive(item.href) 
                            ? 'text-blue-600' 
                            : 'text-gray-400 group-hover:text-gray-500'
                        }`}
                      />
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-6">
                    <Link
                      href="/auth/login"
                      className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    >
                      <FiLogOut className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                      Sign Out
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
          <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <FiMenu className="h-6 w-6" />
          </button>
          <div className="flex-1 px-4 flex justify-between">
            <div className="flex-1 flex items-center">
              <h1 className="text-xl font-semibold text-gray-800">
                {userType === 'student' ? 'Student Dashboard' : 'Admin Dashboard'}
              </h1>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                <span className="sr-only">View notifications</span>
                <FiBell className="h-6 w-6" />
              </button>

              <div className="ml-3 relative">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-medium">
                    {userType === 'student' ? 'S' : 'A'}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    {userType === 'student' ? 'John Doe' : 'Admin User'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6 px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout; 