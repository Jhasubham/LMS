import { Metadata } from 'next';
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { FiBell, FiClock, FiBook, FiAward, FiDollarSign, FiUser, FiCheckCircle, FiInfo } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Notifications - EduLearn LMS',
  description: 'View your recent notifications and updates',
};

type Notification = {
  id: number;
  type: string;
  title: string;
  message: string;
  date: string;
  isRead: boolean;
  icon: React.ReactNode;
  color: string;
};

export default function StudentNotificationsPage() {
  // Mock data for notifications
  const notifications: Notification[] = [
    {
      id: 1,
      type: 'course-update',
      title: 'New material available',
      message: 'New lesson "Advanced CSS Techniques" has been added to your "Web Development" course.',
      date: '2023-06-12T09:15:00',
      isRead: false,
      icon: <FiBook />,
      color: 'blue'
    },
    {
      id: 2,
      type: 'quiz-reminder',
      title: 'Quiz due soon',
      message: 'Reminder: You have a quiz "Python Fundamentals" due in 2 days. Don\'t forget to complete it before the deadline.',
      date: '2023-06-11T14:30:00',
      isRead: false,
      icon: <FiClock />,
      color: 'yellow'
    },
    {
      id: 3,
      type: 'certificate',
      title: 'Certificate issued',
      message: 'Congratulations! Your certificate for completing "Data Science Essentials" has been issued.',
      date: '2023-06-10T11:45:00',
      isRead: true,
      icon: <FiAward />,
      color: 'green'
    },
    {
      id: 4,
      type: 'payment',
      title: 'Payment confirmed',
      message: 'Your payment of $59.99 for "Python Programming Fundamentals" has been confirmed. You now have full access to the course.',
      date: '2023-06-08T16:20:00',
      isRead: true,
      icon: <FiDollarSign />,
      color: 'green'
    },
    {
      id: 5,
      type: 'instructor-message',
      title: 'Message from instructor',
      message: 'You have a new message from John Smith, instructor of "Web Development". Check your inbox to view the message.',
      date: '2023-06-07T10:05:00',
      isRead: true,
      icon: <FiUser />,
      color: 'purple'
    },
    {
      id: 6,
      type: 'course-completion',
      title: 'Course completed',
      message: 'Congratulations! You have successfully completed "Introduction to Web Development" with a score of 92%.',
      date: '2023-06-05T15:30:00',
      isRead: true,
      icon: <FiCheckCircle />,
      color: 'green'
    },
    {
      id: 7,
      type: 'system',
      title: 'System maintenance',
      message: 'The system will be undergoing maintenance on June 15, 2023, from 2:00 AM to 4:00 AM UTC. Some features may be temporarily unavailable.',
      date: '2023-06-01T09:00:00',
      isRead: true,
      icon: <FiInfo />,
      color: 'gray'
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

  return (
    <DashboardLayout userType="student">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
          <div className="flex items-center">
            <button className="mr-4 text-sm text-blue-600 hover:text-blue-800">
              Mark all as read
            </button>
            <button className="text-sm text-blue-600 hover:text-blue-800">
              Clear all
            </button>
          </div>
        </div>

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
                      <div>
                        <p className={`text-sm font-medium ${!notification.isRead ? 'text-gray-900' : 'text-gray-600'}`}>
                          {notification.title}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {notification.message}
                        </p>
                      </div>
                      <span className="text-xs text-gray-500">
                        {formatDate(notification.date)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            Load more
          </button>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-800">Notification Settings</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-800">Email Notifications</p>
                <p className="text-xs text-gray-500 mt-1">Receive notifications via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={true} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-800">Course Updates</p>
                <p className="text-xs text-gray-500 mt-1">New lessons, materials, and announcements</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={true} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-800">Assignment Reminders</p>
                <p className="text-xs text-gray-500 mt-1">Reminders for upcoming deadlines</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={true} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-800">System Announcements</p>
                <p className="text-xs text-gray-500 mt-1">Maintenance updates and system changes</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={false} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 