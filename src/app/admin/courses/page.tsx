import { Metadata } from 'next';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { FiBookOpen, FiUsers, FiDollarSign, FiEdit, FiTrash2, FiPlus } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Manage Courses - EduLearn LMS',
  description: 'View and manage all courses in the system',
};

export default function AdminCoursesPage() {
  // Mock data for courses
  const courses = [
    {
      id: 1,
      title: 'Introduction to Web Development',
      instructor: 'John Smith',
      students: 156,
      rating: 4.8,
      price: 49.99,
      status: 'Published',
      createdAt: '2023-03-15',
      category: 'Development',
      revenue: 7798.44
    },
    {
      id: 2,
      title: 'Python Programming Fundamentals',
      instructor: 'Sarah Johnson',
      students: 143,
      rating: 4.9,
      price: 59.99,
      status: 'Published',
      createdAt: '2023-04-02',
      category: 'Programming',
      revenue: 8578.57
    },
    {
      id: 3,
      title: 'Data Science Essentials',
      instructor: 'Michael Brown',
      students: 98,
      rating: 4.7,
      price: 69.99,
      status: 'Published',
      createdAt: '2023-04-10',
      category: 'Data Science',
      revenue: 6859.02
    },
    {
      id: 4,
      title: 'UX/UI Design Masterclass',
      instructor: 'Emily Davis',
      students: 72,
      rating: 4.5,
      price: 79.99,
      status: 'Draft',
      createdAt: '2023-05-05',
      category: 'Design',
      revenue: 0
    },
    {
      id: 5,
      title: 'Mobile App Development with React Native',
      instructor: 'Robert Wilson',
      students: 0,
      rating: 0,
      price: 89.99,
      status: 'Pending Review',
      createdAt: '2023-05-20',
      category: 'Development',
      revenue: 0
    }
  ];

  return (
    <DashboardLayout userType="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Manage Courses</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
            <FiPlus className="mr-2" />
            Add New Course
          </button>
        </div>

        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <div>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Categories</option>
                <option value="development">Development</option>
                <option value="programming">Programming</option>
                <option value="data-science">Data Science</option>
                <option value="design">Design</option>
              </select>
            </div>
            <div>
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">All Statuses</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="pending">Pending Review</option>
              </select>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search courses..."
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Instructor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Students
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
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
              {courses.map((course) => (
                <tr key={course.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{course.title}</div>
                    <div className="text-sm text-gray-500">Created: {course.createdAt}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.instructor}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.students}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.rating > 0 ? course.rating : 'N/A'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${course.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${course.revenue.toFixed(2)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      course.status === 'Published' 
                        ? 'bg-green-100 text-green-800' 
                        : course.status === 'Draft'
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {course.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">
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