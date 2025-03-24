import { Metadata } from 'next';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { FiUser, FiMail, FiCalendar, FiMapPin, FiPhone, FiEdit2 } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'My Profile - EduLearn LMS',
  description: 'View and edit your profile information',
};

export default function StudentProfilePage() {
  // Mock data for user profile
  const profile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: '2023-01-15',
    location: 'New York, USA',
    phone: '+1 (555) 123-4567',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Passionate about learning new technologies and building web applications. Currently pursuing a career in full-stack development.',
    enrolledCourses: 3,
    completedCourses: 2,
    totalHours: 42,
    achievements: 5
  };

  return (
    <DashboardLayout userType="student">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
            <FiEdit2 className="mr-2" />
            Edit Profile
          </button>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Profile Header */}
          <div className="relative h-48 bg-gradient-to-r from-blue-500 to-blue-600">
            <div className="absolute -bottom-12 left-8">
              <div className="relative">
                <img 
                  src={profile.avatar} 
                  alt={profile.name}
                  className="w-24 h-24 rounded-full border-4 border-white"
                />
                <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full hover:bg-blue-700">
                  <FiEdit2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="pt-16 px-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Personal Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FiUser className="w-5 h-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="text-gray-800">{profile.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FiMail className="w-5 h-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-gray-800">{profile.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FiCalendar className="w-5 h-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Member Since</p>
                      <p className="text-gray-800">{new Date(profile.joinDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FiMapPin className="w-5 h-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="text-gray-800">{profile.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FiPhone className="w-5 h-5 text-gray-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-gray-800">{profile.phone}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Learning Statistics */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Learning Statistics</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Enrolled Courses</p>
                    <p className="text-2xl font-bold text-gray-800">{profile.enrolledCourses}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Completed Courses</p>
                    <p className="text-2xl font-bold text-gray-800">{profile.completedCourses}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Total Hours</p>
                    <p className="text-2xl font-bold text-gray-800">{profile.totalHours}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Achievements</p>
                    <p className="text-2xl font-bold text-gray-800">{profile.achievements}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">About Me</h2>
              <p className="text-gray-600">{profile.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 