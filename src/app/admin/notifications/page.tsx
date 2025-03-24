import { Metadata } from 'next';
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { 
  FiBell, 
  FiAlertCircle, 
  FiUserPlus, 
  FiDollarSign, 
  FiBookOpen, 
  FiServer, 
  FiShield, 
  FiMessageSquare 
} from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Admin Notifications - EduLearn LMS',
  description: 'View system notifications and alerts for administrators',
};

type Notification = {
  id: number;
  type: string;
  title: string;
  message: string;
  date: string;
  isRead: boolean;
  priority: 'high' | 'medium' | 'low';
  icon: React.ReactNode;
  color: string;
};

export default function AdminNotificationsPage() {
  // Mock data for admin notifications
  const notifications: Notification[] = [
    {
      id: 1,
      type: 'system-alert',
      title: 'System Performance Issue',
      message: 'Database response time has increased over the last hour. Consider investigating potential issues.',
      date: '2023-06-12T14:30:00',
      isRead: false,
      priority: 'high',
      icon: <FiAlertCircle />,
      color: 'red'
    },
    {
      id: 2,
      type: 'user-registration',
      title: 'New Instructor Registration',
      message: 'Professor Sarah Williams has registered as an instructor and is awaiting approval.',
      date: '2023-06-12T10:15:00',
      isRead: false,
      priority: 'medium',
      icon: <FiUserPlus />,
      color: 'blue'
    },
    {
      id: 3,
      type: 'payment',
      title: 'Large Transaction Alert',
      message: 'A payment of $499.99 for the "Data Science Bootcamp" requires review.',
      date: '2023-06-11T16:45:00',
      isRead: false,
      priority: 'medium',
      icon: <FiDollarSign />,
      color: 'green'
    },
    {
      id: 4,
      type: 'course-report',
      title: 'Course Content Flagged',
      message: '"Advanced JavaScript" course has been flagged for inappropriate content by 3 students.',
      date: '2023-06-11T09:20:00',
      isRead: true,
      priority: 'high',
      icon: <FiBookOpen />,
      color: 'orange'
    },
    {
      id: 5,
      type: 'system-update',
      title: 'System Update Scheduled',
      message: 'System maintenance update scheduled for June 15, 2023, from 2:00 AM to 4:00 AM UTC.',
      date: '2023-06-10T11:00:00',
      isRead: true,
      priority: 'low',
      icon: <FiServer />,
      color: 'purple'
    },
    {
      id: 6,
      type: 'security-alert',
      title: 'Multiple Failed Login Attempts',
      message: 'Multiple failed login attempts detected for admin account "system_admin". IP: 203.45.123.45',
      date: '2023-06-09T22:10:00',
      isRead: true,
      priority: 'high',
      icon: <FiShield />,
      color: 'red'
    },
    {
      id: 7,
      type: 'support-ticket',
      title: 'Unresolved Support Tickets',
      message: 'There are 5 support tickets that have been unresolved for more than 48 hours.',
      date: '2023-06-08T15:30:00',
      isRead: true,
      priority: 'medium',
      icon: <FiMessageSquare />,
      color: 'yellow'
    }
  ];

  // Helper function to format date
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      return `Today at ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  // Helper function to render priority badge
  const getPriorityBadge = (priority: 'high' | 'medium' | 'low') => {
    switch (priority) {
      case 'high':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">High</span>;
      case 'medium':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">Medium</span>;
      case 'low':
        return <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Low</span>;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">System Notifications</h1>
          <div className="flex items-center space-x-4">
            <button className="text-sm text-blue-600 hover:text-blue-800">
              Mark all as read
            </button>
            <button className="text-sm text-blue-600 hover:text-blue-800">
              Clear all
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
            All
          </button>
          <button className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">
            System Alerts
          </button>
          <button className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">
            User Activity
          </button>
          <button className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">
            Payments
          </button>
          <button className="px-3 py-1 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">
            Security
          </button>
        </div>

        {/* Notifications List */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`p-4 hover:bg-gray-50 ${!notification.isRead ? 'bg-blue-50' : ''}`}
              >
                <div className="flex items-start">
                  <div className={`flex-shrink-0 p-2 rounded-full bg-${notification.color}-100 text-${notification.color}-600`}>
                    {notification.icon}
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <p className={`text-sm font-medium ${!notification.isRead ? 'text-gray-900' : 'text-gray-600'} mr-2`}>
                            {notification.title}
                          </p>
                          {getPriorityBadge(notification.priority)}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {notification.message}
                        </p>
                      </div>
                      <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                        {formatDate(notification.date)}
                      </span>
                    </div>
                    <div className="flex justify-end mt-2">
                      <button className="text-xs text-blue-600 hover:text-blue-800 mr-4">
                        Mark as {notification.isRead ? 'unread' : 'read'}
                      </button>
                      <button className="text-xs text-red-600 hover:text-red-800">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">7</span> of <span className="font-medium">7</span> notifications
          </p>
          <nav className="flex items-center">
            <button className="px-3 py-1 rounded-md mr-2 border border-gray-300 bg-white text-gray-500">
              Previous
            </button>
            <button className="px-3 py-1 rounded-md bg-blue-600 text-white mr-2">
              1
            </button>
            <button className="px-3 py-1 rounded-md ml-2 border border-gray-300 bg-white text-gray-500">
              Next
            </button>
          </nav>
        </div>

        {/* Notification Settings */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-800">Notification Settings</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-800">Email Alerts</p>
                <p className="text-xs text-gray-500 mt-1">Receive critical alerts via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={true} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-800">Security Alerts</p>
                <p className="text-xs text-gray-500 mt-1">Receive alerts for security-related events</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={true} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-800">Payment Notifications</p>
                <p className="text-xs text-gray-500 mt-1">Receive alerts for payment events</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={true} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-800">User Registration Alerts</p>
                <p className="text-xs text-gray-500 mt-1">Receive alerts for new user registrations</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={false} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-800">System Updates</p>
                <p className="text-xs text-gray-500 mt-1">Receive notifications about system updates</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={true} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 