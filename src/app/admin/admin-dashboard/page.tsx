import { Metadata } from 'next';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { 
  FiUsers, 
  FiBookOpen, 
  FiDollarSign, 
  FiActivity,
  FiUserPlus,
  FiBookmark,
  FiFileText
} from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Admin Dashboard - EduLearn LMS',
  description: 'Admin dashboard for EduLearn Learning Management System',
};

export default function AdminDashboardPage() {
  // Mock data for demonstration
  const systemStats = {
    totalStudents: 256,
    totalCourses: 24,
    totalRevenue: 12580,
    activeUsers: 143,
    completionRate: 68,
  };

  const recentUsers = [
    {
      id: 1,
      name: 'Jane Cooper',
      email: 'jane.cooper@example.com',
      joinDate: '2023-06-01',
      courses: 3,
      status: 'active',
      avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
    },
    {
      id: 2,
      name: 'Robert Fox',
      email: 'robert.fox@example.com',
      joinDate: '2023-05-28',
      courses: 1,
      status: 'active',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      id: 3,
      name: 'Esther Howard',
      email: 'esther.howard@example.com',
      joinDate: '2023-05-25',
      courses: 2,
      status: 'inactive',
      avatar: 'https://randomuser.me/api/portraits/women/7.jpg',
    },
    {
      id: 4,
      name: 'Cameron Williamson',
      email: 'cameron.williamson@example.com',
      joinDate: '2023-05-23',
      courses: 5,
      status: 'active',
      avatar: 'https://randomuser.me/api/portraits/men/14.jpg',
    },
  ];

  const popularCourses = [
    {
      id: 1,
      title: 'Web Development Bootcamp',
      students: 78,
      rating: 4.8,
      revenue: 3890,
      instructor: 'John Smith',
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      students: 64,
      rating: 4.9,
      revenue: 3200,
      instructor: 'Sarah Johnson',
    },
    {
      id: 3,
      title: 'UI/UX Design Principles',
      students: 52,
      rating: 4.7,
      revenue: 2600,
      instructor: 'Michael Brown',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'user_registration',
      user: 'Jane Cooper',
      details: 'New user registered',
      time: '2 hours ago',
    },
    {
      id: 2,
      type: 'course_creation',
      user: 'Admin',
      details: 'New course added: Advanced JavaScript',
      time: '5 hours ago',
    },
    {
      id: 3,
      type: 'course_enrollment',
      user: 'Robert Fox',
      details: 'Enrolled in Web Development Bootcamp',
      time: '1 day ago',
    },
    {
      id: 4,
      type: 'certificate_issued',
      user: 'Cameron Williamson',
      details: 'Completed Python Programming Course',
      time: '2 days ago',
    },
    {
      id: 5,
      type: 'payment_received',
      user: 'Esther Howard',
      details: 'Payment received for Machine Learning Fundamentals',
      time: '3 days ago',
    },
  ];

  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        {/* Stats overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">System Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <FiUsers className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Total Students</p>
                  <h3 className="text-xl font-bold text-gray-800">{systemStats.totalStudents}</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 text-green-600">
                  <FiBookOpen className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Total Courses</p>
                  <h3 className="text-xl font-bold text-gray-800">{systemStats.totalCourses}</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                  <FiDollarSign className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Total Revenue</p>
                  <h3 className="text-xl font-bold text-gray-800">${systemStats.totalRevenue}</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                  <FiActivity className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Active Users</p>
                  <h3 className="text-xl font-bold text-gray-800">{systemStats.activeUsers}</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-red-100 text-red-600">
                  <FiBookmark className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Completion Rate</p>
                  <h3 className="text-xl font-bold text-gray-800">{systemStats.completionRate}%</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recent activities */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activities</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="divide-y divide-gray-200">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="p-4 hover:bg-gray-50">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        {activity.type === 'user_registration' && (
                          <div className="p-2 rounded-full bg-green-100 text-green-600">
                            <FiUserPlus className="h-5 w-5" />
                          </div>
                        )}
                        {activity.type === 'course_creation' && (
                          <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                            <FiBookOpen className="h-5 w-5" />
                          </div>
                        )}
                        {activity.type === 'course_enrollment' && (
                          <div className="p-2 rounded-full bg-purple-100 text-purple-600">
                            <FiBookmark className="h-5 w-5" />
                          </div>
                        )}
                        {activity.type === 'certificate_issued' && (
                          <div className="p-2 rounded-full bg-yellow-100 text-yellow-600">
                            <FiFileText className="h-5 w-5" />
                          </div>
                        )}
                        {activity.type === 'payment_received' && (
                          <div className="p-2 rounded-full bg-green-100 text-green-600">
                            <FiDollarSign className="h-5 w-5" />
                          </div>
                        )}
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                        <p className="text-sm text-gray-500">{activity.details}</p>
                        <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 px-4 py-3 text-center">
                <a href="/admin/activities" className="text-sm font-medium text-blue-600 hover:text-blue-800">
                  View all activities
                </a>
              </div>
            </div>
          </div>

          {/* Popular courses */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Courses</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Students
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rating
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Revenue
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {popularCourses.map((course) => (
                    <tr key={course.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{course.title}</div>
                            <div className="text-sm text-gray-500">{course.instructor}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{course.students}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm text-gray-900">{course.rating}</span>
                          <svg className="w-4 h-4 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        ${course.revenue}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="bg-gray-50 px-6 py-3 text-center">
                <a href="/admin/manage-courses" className="text-sm font-medium text-blue-600 hover:text-blue-800">
                  View all courses
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Recent students */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Recent Students</h2>
            <a 
              href="/admin/manage-users" 
              className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View All Users
            </a>
          </div>
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Join Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Courses
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img 
                            className="h-10 w-10 rounded-full" 
                            src={user.avatar} 
                            alt={user.name} 
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(user.joinDate).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.courses}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        user.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                      <a 
                        href={`/admin/users/${user.id}`} 
                        className="text-blue-600 hover:text-blue-900"
                      >
                        View
                      </a>
                      <span className="px-2 text-gray-400">|</span>
                      <a 
                        href={`/admin/users/edit/${user.id}`} 
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 