import { Metadata } from 'next';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { FiTrendingUp, FiUsers, FiDollarSign, FiBarChart2, FiPieChart, FiCalendar } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Analytics - EduLearn LMS',
  description: 'View analytics and reports for your learning platform',
};

export default function AdminAnalyticsPage() {
  // Mock data for analytics
  const monthlyRevenue = [
    { month: 'Jan', amount: 4200 },
    { month: 'Feb', amount: 4800 },
    { month: 'Mar', amount: 5100 },
    { month: 'Apr', amount: 6300 },
    { month: 'May', amount: 7500 },
    { month: 'Jun', amount: 8200 },
  ];

  const userGrowth = [
    { month: 'Jan', count: 120 },
    { month: 'Feb', count: 142 },
    { month: 'Mar', count: 163 },
    { month: 'Apr', count: 195 },
    { month: 'May', count: 220 },
    { month: 'Jun', count: 256 },
  ];

  const courseCategories = [
    { name: 'Development', count: 24, percentage: 40 },
    { name: 'Business', count: 18, percentage: 30 },
    { name: 'Design', count: 12, percentage: 20 },
    { name: 'Marketing', count: 6, percentage: 10 },
  ];

  const userActivity = [
    { day: 'Mon', count: 320 },
    { day: 'Tue', count: 380 },
    { day: 'Wed', count: 420 },
    { day: 'Thu', count: 410 },
    { day: 'Fri', count: 350 },
    { day: 'Sat', count: 280 },
    { day: 'Sun', count: 250 },
  ];

  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Analytics & Reports</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-gray-500 text-sm font-medium">Total Revenue</h2>
              <FiDollarSign className="text-blue-500" />
            </div>
            <div className="flex items-baseline">
              <p className="text-2xl font-semibold text-gray-800">$36,100</p>
              <p className="ml-2 text-sm text-green-600">+12.5%</p>
            </div>
            <p className="text-xs text-gray-500 mt-1">Compared to previous period</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-gray-500 text-sm font-medium">Total Users</h2>
              <FiUsers className="text-blue-500" />
            </div>
            <div className="flex items-baseline">
              <p className="text-2xl font-semibold text-gray-800">1,096</p>
              <p className="ml-2 text-sm text-green-600">+8.2%</p>
            </div>
            <p className="text-xs text-gray-500 mt-1">Compared to previous period</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-gray-500 text-sm font-medium">Course Enrollments</h2>
              <FiBarChart2 className="text-blue-500" />
            </div>
            <div className="flex items-baseline">
              <p className="text-2xl font-semibold text-gray-800">3,540</p>
              <p className="ml-2 text-sm text-green-600">+18.3%</p>
            </div>
            <p className="text-xs text-gray-500 mt-1">Compared to previous period</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-gray-500 text-sm font-medium">Avg. Completion Rate</h2>
              <FiPieChart className="text-blue-500" />
            </div>
            <div className="flex items-baseline">
              <p className="text-2xl font-semibold text-gray-800">68%</p>
              <p className="ml-2 text-sm text-green-600">+5.1%</p>
            </div>
            <p className="text-xs text-gray-500 mt-1">Compared to previous period</p>
          </div>
        </div>

        {/* Revenue and User Growth Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-gray-800 text-lg font-medium">Revenue Growth</h2>
              <div className="flex items-center">
                <FiCalendar className="text-gray-500 mr-2" />
                <span className="text-sm text-gray-500">Last 6 months</span>
              </div>
            </div>
            <div className="h-64 flex items-end space-x-2">
              {monthlyRevenue.map((item) => (
                <div key={item.month} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-blue-500 rounded-t-md" 
                    style={{ height: `${(item.amount / 10000) * 100}%` }}
                  ></div>
                  <div className="text-xs mt-2 text-gray-600">{item.month}</div>
                  <div className="text-xs font-medium">${item.amount}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-gray-800 text-lg font-medium">User Growth</h2>
              <div className="flex items-center">
                <FiCalendar className="text-gray-500 mr-2" />
                <span className="text-sm text-gray-500">Last 6 months</span>
              </div>
            </div>
            <div className="h-64 flex items-end space-x-2">
              {userGrowth.map((item) => (
                <div key={item.month} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-green-500 rounded-t-md" 
                    style={{ height: `${(item.count / 300) * 100}%` }}
                  ></div>
                  <div className="text-xs mt-2 text-gray-600">{item.month}</div>
                  <div className="text-xs font-medium">{item.count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Course Categories and User Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-gray-800 text-lg font-medium mb-6">Course Categories</h2>
            <div className="space-y-4">
              {courseCategories.map((category) => (
                <div key={category.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{category.name}</span>
                    <span className="text-gray-900 font-medium">{category.count} courses</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-gray-800 text-lg font-medium mb-6">Daily User Activity</h2>
            <div className="h-64 flex items-end space-x-2">
              {userActivity.map((item) => (
                <div key={item.day} className="flex-1 flex flex-col items-center">
                  <div 
                    className="w-full bg-indigo-500 rounded-t-md" 
                    style={{ height: `${(item.count / 500) * 100}%` }}
                  ></div>
                  <div className="text-xs mt-2 text-gray-600">{item.day}</div>
                  <div className="text-xs font-medium">{item.count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Export Options */}
        <div className="flex justify-end space-x-4">
          <button className="px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded-md hover:bg-gray-50">
            Export as CSV
          </button>
          <button className="px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded-md hover:bg-gray-50">
            Export as PDF
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
} 