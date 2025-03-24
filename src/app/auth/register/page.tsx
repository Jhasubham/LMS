import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import RegisterForm from '@/components/auth/RegisterForm';

export const metadata: Metadata = {
  title: 'Register - EduLearn LMS',
  description: 'Create a new account on EduLearn LMS',
};

export default function RegisterPage() {
  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12">
        <RegisterForm />
      </div>
    </MainLayout>
  );
} 