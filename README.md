# EduLearn LMS - Learning Management System

A comprehensive Learning Management System built with Next.js, TypeScript, and TailwindCSS.

## Overview

EduLearn LMS is a modern learning platform designed for educational institutions, trainers, and organizations that want to deliver online courses. The platform features dual login functionality for students and administrators, with customized dashboards and experiences for each user type.

## Features

### User Management
- Dual login system (Student/Admin)
- User registration and authentication
- Password reset functionality
- User profiles

### Student Features
- Dashboard with course progress overview
- Course catalog and enrollment
- Course content viewing
- Quiz/assignment submissions
- Certificate generation
- Progress tracking

### Admin Features
- Admin dashboard with analytics
- User management
- Course creation and management
- Content upload (videos, PDFs, etc.)
- Quiz and assignment creation
- Performance reporting
- Instructor management

## Tech Stack

- **Frontend**: Next.js, TypeScript, TailwindCSS, React Icons
- **State Management**: Zustand
- **Form Handling**: React Hook Form
- **Authentication**: NextAuth.js
- **Styling**: TailwindCSS

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/edulearn-lms.git
cd edulearn-lms
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                 # Next.js app router
│   ├── (auth)/          # Authentication routes
│   ├── (student)/       # Student routes
│   ├── (admin)/         # Admin routes
│   └── ...
├── components/          # Reusable React components
│   ├── auth/            # Authentication components
│   ├── admin/           # Admin components
│   ├── common/          # Shared components
│   ├── layout/          # Layout components
│   └── student/         # Student components
└── ...
```

## Customization

The LMS can be customized to fit specific branding and requirements:
- Update the logo and color scheme in the TailwindCSS config
- Modify the course structure to fit your educational content
- Add or remove features based on your needs

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- This project was bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
- UI components inspired by [Tailwind UI](https://tailwindui.com/) and [Tailwind Components](https://tailwindcomponents.com/)
