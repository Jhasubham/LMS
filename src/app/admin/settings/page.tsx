import { Metadata } from 'next';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { FiSettings, FiMail, FiUsers, FiDollarSign, FiGlobe, FiServer, FiLock, FiBell } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Settings - EduLearn LMS',
  description: 'Manage system settings for your learning platform',
};

export default function AdminSettingsPage() {
  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">System Settings</h1>

        <div className="flex overflow-x-auto space-x-4 pb-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 whitespace-nowrap">
            General
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-50 whitespace-nowrap">
            Email
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-50 whitespace-nowrap">
            User Management
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-50 whitespace-nowrap">
            Payment
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-50 whitespace-nowrap">
            Localization
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-50 whitespace-nowrap">
            Integrations
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-50 whitespace-nowrap">
            Security
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-md hover:bg-gray-50 whitespace-nowrap">
            Notifications
          </button>
        </div>

        {/* General Settings Section */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center">
              <FiSettings className="text-gray-500 mr-2" />
              <h2 className="text-lg font-medium text-gray-800">General Settings</h2>
            </div>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Platform Name</label>
              <input
                type="text"
                defaultValue="EduLearn LMS"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Platform Logo</label>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gray-200 rounded-md mr-4 flex items-center justify-center text-gray-500">
                  Logo
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Upload New Logo
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
              <input
                type="email"
                defaultValue="support@edulearn.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Phone</label>
              <input
                type="text"
                defaultValue="+1 (555) 123-4567"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Footer Text</label>
              <textarea
                defaultValue="© 2023 EduLearn LMS. All rights reserved."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              ></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="UTC">UTC</option>
                <option value="EST" selected>Eastern Time (EST)</option>
                <option value="CST">Central Time (CST)</option>
                <option value="MST">Mountain Time (MST)</option>
                <option value="PST">Pacific Time (PST)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Quick Settings Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FiMail className="text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-800">Email Settings</h3>
            </div>
            <p className="text-gray-600 mb-4">Configure SMTP settings, email templates, and notifications.</p>
            <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center justify-center">
              Configure
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <FiUsers className="text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-800">User Roles</h3>
            </div>
            <p className="text-gray-600 mb-4">Manage user roles, permissions, and access controls.</p>
            <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center justify-center">
              Configure
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <FiDollarSign className="text-purple-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-800">Payment Gateway</h3>
            </div>
            <p className="text-gray-600 mb-4">Set up payment methods, currencies, and transaction fees.</p>
            <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center justify-center">
              Configure
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <FiGlobe className="text-yellow-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-800">Language Settings</h3>
            </div>
            <p className="text-gray-600 mb-4">Manage available languages and translation preferences.</p>
            <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center justify-center">
              Configure
            </button>
          </div>
        </div>

        {/* System Maintenance */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center">
              <FiServer className="text-gray-500 mr-2" />
              <h2 className="text-lg font-medium text-gray-800">System Maintenance</h2>
            </div>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-base font-medium text-gray-800">Database Backup</h3>
                <p className="text-sm text-gray-600">Last backup: June 10, 2023, 10:30 AM</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Run Backup Now
              </button>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-base font-medium text-gray-800">Cache Clearing</h3>
                <p className="text-sm text-gray-600">Last cleared: June 12, 2023, 09:15 AM</p>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Clear Cache
              </button>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-base font-medium text-gray-800">System Updates</h3>
                <p className="text-sm text-gray-600">Current version: v2.5.1</p>
              </div>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Check for Updates
              </button>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
} 