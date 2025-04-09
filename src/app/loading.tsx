import React from 'react';
import { BookOpen } from 'lucide-react';
import MainLayout from '@/components/layout/main-layout';
import Container from '@/components/layout/container';

export default function Loading() {
  return (
    <MainLayout>
      <Container className="py-20 lg:py-32">
        <div className="flex flex-col items-center justify-center text-center min-h-[50vh]">
          <div className="relative animate-pulse mb-6">
            <BookOpen className="h-16 w-16 text-blue-600 dark:text-blue-400" />
            <div className="absolute inset-0 animate-spin border-t-2 border-blue-600 dark:border-blue-400 rounded-full opacity-25" style={{ animationDuration: '1.5s' }} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Memuat Konten...
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Mohon tunggu sebentar
          </p>
        </div>
      </Container>
    </MainLayout>
  );
} 