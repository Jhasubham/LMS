import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FiBookOpen, 
  FiUser, 
  FiAward, 
  FiLayers, 
  FiCheckCircle,
  FiMonitor,
  FiMessageCircle,
  FiFileText
} from 'react-icons/fi';

export default function Home() {
  // Featured courses
  const featuredCourses = [
    {
      id: 1,
      title: 'Web Development Bootcamp',
      description: 'Learn HTML, CSS, JavaScript, React, Node.js and more to become a full-stack web developer.',
      instructor: 'John Smith',
      rating: 4.8,
      students: 1250,
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      description: 'Master the essentials of data science, including Python, statistics, machine learning, and data visualization.',
      instructor: 'Sarah Johnson',
      rating: 4.9,
      students: 980,
      price: 94.99,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      description: 'Learn the principles of user interface and user experience design to create beautiful, functional products.',
      instructor: 'Michael Brown',
      rating: 4.7,
      students: 765,
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVpJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
  ];

  return (
    <MainLayout>
      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Learn Skills for Today's and Tomorrow's Jobs
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Our online learning platform offers courses in programming, data science, business and more. 
                Start your journey to a better future today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/auth/register" 
                  className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
                >
                  Get Started
                </Link>
                <Link 
                  href="/courses" 
                  className="bg-transparent hover:bg-blue-800 border-2 border-white font-bold py-3 px-8 rounded-lg transition duration-300"
                >
                  Browse Courses
                </Link>
              </div>
              <div className="mt-10 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-white overflow-hidden">
                      <Image 
                        src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i + 10}.jpg`} 
                        alt={`User ${i}`} 
                        width={40} 
                        height={40}
                      />
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <div className="text-xl font-bold">10,000+</div>
                  <div className="text-blue-100">Satisfied students</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full opacity-20 filter blur-3xl"></div>
                <div className="absolute bottom-0 right-4 w-72 h-72 bg-blue-600 rounded-full opacity-20 filter blur-3xl"></div>
                <div className="relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhcm5pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" 
                    alt="Learning" 
                    width={600} 
                    height={400} 
                    className="rounded-lg shadow-2xl" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Learning Platform</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive learning experience with features designed to help you succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <FiBookOpen className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from industry experts who have hands-on experience in their fields.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <FiLayers className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Diverse Courses</h3>
              <p className="text-gray-600">
                Access a wide range of courses covering in-demand skills and technologies.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <FiMonitor className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Interactive Learning</h3>
              <p className="text-gray-600">
                Engage with interactive content, quizzes, and hands-on projects.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <FiAward className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Certificates</h3>
              <p className="text-gray-600">
                Earn recognized certificates to showcase your achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured courses section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">Featured Courses</h2>
            <Link
              href="/courses"
              className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
            >
              View All Courses
              <svg
                className="ml-2 w-5 h-5"
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
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                    width={400}
                    height={200}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                      <FiUser className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{course.instructor}</p>
                      <p className="text-sm text-gray-500">Instructor</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="text-gray-700">{course.rating}</span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-600">{course.students} students</span>
                    </div>
                    <span className="text-xl font-bold text-gray-800">${course.price}</span>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <Link
                    href={`/course/${course.id}`}
                    className="block w-full py-2 text-center bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-300"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Students Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our students who have transformed their careers with our courses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className="mr-1">★</span>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">5.0</span>
              </div>
              <p className="text-gray-600 mb-6">
                "The web development bootcamp was exactly what I needed to transition careers. The instructor was excellent and the projects really helped me build a portfolio."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <Image 
                    src="https://randomuser.me/api/portraits/women/32.jpg" 
                    alt="Emily Johnson" 
                    width={48} 
                    height={48} 
                  />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-bold text-gray-800">Emily Johnson</p>
                  <p className="text-sm text-gray-600">Web Developer</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className="mr-1">★</span>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">5.0</span>
              </div>
              <p className="text-gray-600 mb-6">
                "The data science course was comprehensive and well-structured. I went from knowing nothing about data science to landing a job as a junior data analyst."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <Image 
                    src="https://randomuser.me/api/portraits/men/22.jpg" 
                    alt="David Martinez" 
                    width={48} 
                    height={48} 
                  />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-bold text-gray-800">David Martinez</p>
                  <p className="text-sm text-gray-600">Data Analyst</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className="mr-1">★</span>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">4.9</span>
              </div>
              <p className="text-gray-600 mb-6">
                "I loved the UI/UX design course! The principles I learned helped me improve my design skills significantly, and I now work as a freelance designer."
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <Image 
                    src="https://randomuser.me/api/portraits/women/45.jpg" 
                    alt="Sophia Chen" 
                    width={48} 
                    height={48} 
                  />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-bold text-gray-800">Sophia Chen</p>
                  <p className="text-sm text-gray-600">UI/UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join thousands of students already learning on our platform. Get access to top-quality courses and start your learning journey today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/auth/register" 
              className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
            >
              Sign Up Now
            </Link>
            <Link 
              href="/courses" 
              className="bg-transparent hover:bg-blue-800 border-2 border-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
