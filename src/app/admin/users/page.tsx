import { Metadata } from 'next';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { FiUsers, FiUserPlus, FiEdit, FiTrash2, FiMail, FiEye } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Manage Users - EduLearn LMS',
  description: 'View and manage all users in the system',
};

export default function AdminUsersPage() {
  // Mock data for users
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Student',
      joinDate: '2023-03-10',
      coursesEnrolled: 3,
      lastActive: '2023-06-01',
      status: 'Active',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'Student',
      joinDate: '2023-03-15',
      coursesEnrolled: 2,
      lastActive: '2023-06-02',
      status: 'Active',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'Robert Johnson',
      email: 'robert.johnson@example.com',
      role: 'Instructor',
      joinDate: '2023-02-20',
      coursesEnrolled: 0,
      lastActive: '2023-06-03',
      status: 'Active',
      avatar: 'https://randomuser.me/api/portraits/men/46.jpg'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah.williams@example.com',
      role: 'Student',
      joinDate: '2023-04-05',
      coursesEnrolled: 1,
      lastActive: '2023-05-20',
      status: 'Inactive',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
      id: 5,
      name: 'Michael Brown',
      email: 'michael.brown@example.com',
      role: 'Instructor',
      joinDate: '2023-01-15',
      coursesEnrolled: 0,
      lastActive: '2023-06-01',
      status: 'Active',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
    }
  ];

  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Manage Users</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
            <FiUserPlus className="mr-2" />
            Add New User
          </button>
        </div>

        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Roles</option>
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search users..."
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Join Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Courses
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Active
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={user.avatar} alt={user.name} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.role}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.joinDate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.coursesEnrolled}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.lastActive}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <FiEye className="inline" /> View
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                      <FiEdit className="inline" /> Edit
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <FiTrash2 className="inline" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">5</span> results
            </p>
          </div>
          <div>
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
        </div>
      </div>
    </DashboardLayout>
  );
} 