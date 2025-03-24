import { Metadata } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';

export const metadata: Metadata = {
  title: 'Forgot Password - EduLearn LMS',
  description: 'Reset your EduLearn LMS account password',
};

export default function ForgotPasswordPage() {
  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center py-12">
        <ForgotPasswordForm />
      </div>
    </MainLayout>
  );
} 