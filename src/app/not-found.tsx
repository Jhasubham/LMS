import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { FiAlertCircle } from 'react-icons/fi';

export default function NotFound() {
  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="flex justify-center mb-6">
            <FiAlertCircle className="h-24 w-24 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Return Home
            </Link>
            <Link 
              href="/courses" 
              className="border border-gray-300 hover:border-blue-600 text-gray-800 hover:text-blue-600 font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 