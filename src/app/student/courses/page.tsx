"use client";

import { Metadata } from 'next';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { FiBookOpen, FiClock, FiUsers, FiStar } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'My Courses - EduLearn LMS',
  description: 'Browse and manage your enrolled courses',
};

export default function StudentCoursesPage() {
  // Mock data for courses
  const courses = [
    {
      id: 1,
      title: 'Introduction to Web Development',
      description: 'Learn the fundamentals of web development with HTML, CSS, and JavaScript',
      instructor: 'John Smith',
      duration: '8 weeks',
      students: 156,
      rating: 4.8,
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      progress: 75,
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'Python Programming Fundamentals',
      description: 'Master Python programming from basics to advanced concepts',
      instructor: 'Sarah Johnson',
      duration: '10 weeks',
      students: 143,
      rating: 4.9,
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1526379879527-8559ecfcb0c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHB5dGhvbiUyMHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      progress: 40,
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Data Science Essentials',
      description: 'Learn data analysis and visualization techniques',
      instructor: 'Michael Brown',
      duration: '12 weeks',
      students: 98,
      rating: 4.7,
      price: 69.99,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      progress: 10,
      status: 'In Progress'
    }
  ];

  return (
    <DashboardLayout userType="student">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">My Courses</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Browse More Courses
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded-full text-sm">
                  {course.status}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <FiUsers className="mr-2" />
                  <span>{course.students} students</span>
                  <span className="mx-2">•</span>
                  <FiClock className="mr-2" />
                  <span>{course.duration}</span>
                </div>

                <div className="flex items-center mb-4">
                  <FiStar className="text-yellow-400 mr-1" />
                  <span className="text-sm text-gray-600">{course.rating}</span>
                </div>

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

                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-800">${course.price}</span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Continue Learning
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
} 