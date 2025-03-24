import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import LoginForm from '@/components/auth/LoginForm';

export const metadata: Metadata = {
  title: 'Login - EduLearn LMS',
  description: 'Sign in to access your EduLearn LMS account',
};

export default function LoginPage() {
  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12">
        <LoginForm />
      </div>
    </MainLayout>
  );
} 