"use client";

import { Metadata } from 'next';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { FiClock, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Quizzes - EduLearn LMS',
  description: 'Take quizzes and assessments for your courses',
};

export default function StudentQuizPage() {
  // Mock data for quizzes
  const quizzes = [
    {
      id: 1,
      title: 'HTML Basics Quiz',
      course: 'Introduction to Web Development',
      dueDate: '2023-06-15',
      duration: '30 minutes',
      questions: 20,
      status: 'pending',
      score: null
    },
    {
      id: 2,
      title: 'Python Functions Assessment',
      course: 'Python Programming Fundamentals',
      dueDate: '2023-06-18',
      duration: '45 minutes',
      questions: 25,
      status: 'completed',
      score: 85
    },
    {
      id: 3,
      title: 'Data Analysis Quiz',
      course: 'Data Science Essentials',
      dueDate: '2023-06-20',
      duration: '60 minutes',
      questions: 30,
      status: 'pending',
      score: null
    }
  ];

  return (
    <DashboardLayout userType="student">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">My Quizzes</h1>

        <div className="grid grid-cols-1 gap-6">
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{quiz.title}</h3>
                    <p className="text-gray-600 mb-4">{quiz.course}</p>
                  </div>
                  <div className="flex items-center">
                    {quiz.status === 'completed' ? (
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        Completed
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                        Pending
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <FiClock className="mr-2" />
                    <span>{quiz.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span>{quiz.questions} questions</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span>Due: {new Date(quiz.dueDate).toLocaleDateString()}</span>
                  </div>
                </div>

                {quiz.status === 'completed' ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FiCheckCircle className="text-green-500 mr-2" />
                      <span className="text-gray-600">Score: {quiz.score}%</span>
                    </div>
                    <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
                      Review Quiz
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FiAlertCircle className="text-yellow-500 mr-2" />
                      <span className="text-gray-600">Not started</span>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Start Quiz
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
} 