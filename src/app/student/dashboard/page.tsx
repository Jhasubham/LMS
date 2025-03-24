import { Metadata } from 'next';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { FiBookOpen, FiCheckCircle, FiClock, FiCalendar, FiTrendingUp } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Student Dashboard - EduLearn LMS',
  description: 'View your learning progress and enrolled courses',
};

export default function StudentDashboardPage() {
  // Mock data for demonstration
  const courseProgress = [
    {
      id: 1,
      title: 'Introduction to Web Development',
      progress: 75,
      totalLessons: 12,
      completedLessons: 9,
      nextLesson: 'CSS Flexbox Layout',
      dueDate: '2023-06-15',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      title: 'Python Programming Fundamentals',
      progress: 40,
      totalLessons: 10,
      completedLessons: 4,
      nextLesson: 'Working with Functions',
      dueDate: '2023-06-20',
      image: 'https://images.unsplash.com/photo-1526379879527-8559ecfcb0c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHB5dGhvbiUyMHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 3,
      title: 'Data Science Essentials',
      progress: 10,
      totalLessons: 15,
      completedLessons: 2,
      nextLesson: 'Introduction to Pandas',
      dueDate: '2023-07-01',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
  ];

  const upcomingAssignments = [
    {
      id: 1,
      title: 'Create a Responsive Website',
      course: 'Introduction to Web Development',
      dueDate: '2023-06-12',
      status: 'pending',
    },
    {
      id: 2,
      title: 'Python Functions Exercise',
      course: 'Python Programming Fundamentals',
      dueDate: '2023-06-18',
      status: 'pending',
    },
    {
      id: 3,
      title: 'Exploratory Data Analysis',
      course: 'Data Science Essentials',
      dueDate: '2023-06-25',
      status: 'pending',
    },
  ];

  const achievements = [
    {
      id: 1,
      title: 'HTML Master',
      description: 'Completed all HTML lessons with 100% score',
      earnedDate: '2023-05-20',
    },
    {
      id: 2,
      title: 'Quick Learner',
      description: 'Completed 5 lessons in a single day',
      earnedDate: '2023-05-25',
    },
  ];

  return (
    <DashboardLayout userType="student">
      <div className="space-y-6">
        {/* Stats overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <FiBookOpen className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Enrolled Courses</p>
                  <h3 className="text-xl font-bold text-gray-800">3</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 text-green-600">
                  <FiCheckCircle className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Completed Lessons</p>
                  <h3 className="text-xl font-bold text-gray-800">15</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                  <FiClock className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Hours Studied</p>
                  <h3 className="text-xl font-bold text-gray-800">42</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                  <FiTrendingUp className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Overall Progress</p>
                  <h3 className="text-xl font-bold text-gray-800">45%</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course progress */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">My Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {courseProgress.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{course.title}</h3>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    <p>Completed {course.completedLessons} of {course.totalLessons} lessons</p>
                    <p className="mt-1">Next: {course.nextLesson}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500">
                      <FiCalendar className="mr-1" />
                      <span>Due: {new Date(course.dueDate).toLocaleDateString()}</span>
                    </div>
                    <a
                      href={`/student/course/${course.id}`}
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Continue
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <a
              href="/student/courses"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              View all courses
              <svg
                className="ml-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Two columns layout for assignments and achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming assignments */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Assignments</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {upcomingAssignments.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {upcomingAssignments.map((assignment) => (
                    <div key={assignment.id} className="p-6 hover:bg-gray-50">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">{assignment.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{assignment.course}</p>
                        </div>
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Due {new Date(assignment.dueDate).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <a
                          href={`/student/quiz/${assignment.id}`}
                          className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Start Assignment
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center text-gray-500">
                  <p>No upcoming assignments!</p>
                </div>
              )}
            </div>
          </div>

          {/* Recent achievements */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Achievements</h2>
            <div className="bg-white rounded-lg shadow">
              {achievements.length > 0 ? (
                <div className="divide-y divide-gray-200">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className="p-6">
                      <div className="flex items-center">
                        <div className="bg-yellow-100 p-3 rounded-full">
                          <svg
                            className="h-6 w-6 text-yellow-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            ></path>
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-gray-800">{achievement.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            Earned on {new Date(achievement.earnedDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center text-gray-500">
                  <p>No achievements yet. Keep learning!</p>
                </div>
              )}
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <a
                  href="/student/achievements"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  View all achievements
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
} 