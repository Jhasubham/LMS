import { Metadata } from 'next';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { FiAward, FiDownload, FiCalendar } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'My Certificates - EduLearn LMS',
  description: 'View and download your course certificates',
};

export default function StudentCertificatesPage() {
  // Mock data for certificates
  const certificates = [
    {
      id: 1,
      title: 'Web Development Fundamentals',
      course: 'Introduction to Web Development',
      issueDate: '2023-05-15',
      certificateId: 'WD-2023-001',
      instructor: 'John Smith',
      status: 'issued',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      title: 'Python Programming',
      course: 'Python Programming Fundamentals',
      issueDate: '2023-05-20',
      certificateId: 'PY-2023-002',
      instructor: 'Sarah Johnson',
      status: 'issued',
      image: 'https://images.unsplash.com/photo-1526379879527-8559ecfcb0c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHB5dGhvbiUyMHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      title: 'Data Analysis',
      course: 'Data Science Essentials',
      issueDate: '2023-06-01',
      certificateId: 'DA-2023-003',
      instructor: 'Michael Brown',
      status: 'pending',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    }
  ];

  return (
    <DashboardLayout userType="student">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">My Certificates</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={certificate.image} 
                  alt={certificate.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  {certificate.status === 'issued' ? (
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Issued
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                      Pending
                    </span>
                  )}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FiAward className="text-yellow-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">{certificate.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{certificate.course}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <FiCalendar className="mr-2" />
                    <span>Issued: {new Date(certificate.issueDate).toLocaleDateString()}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <span>Certificate ID: {certificate.certificateId}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <span>Instructor: {certificate.instructor}</span>
                  </div>
                </div>

                {certificate.status === 'issued' && (
                  <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    <FiDownload className="mr-2" />
                    Download Certificate
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
} 