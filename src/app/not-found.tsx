import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MainLayout from '@/components/layout/main-layout';
import Container from '@/components/layout/container';

export default function NotFound() {
  return (
    <MainLayout>
      <Container className="py-20 lg:py-32">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-8xl font-bold text-blue-600 dark:text-blue-400 mb-6">404</div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg mb-8">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Halaman mungkin telah dipindahkan atau dihapus.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              as={Link} 
              href="/"
              className="flex items-center"
            >
              <Home className="mr-2 h-4 w-4" />
              Kembali ke Beranda
            </Button>
            
            <Button 
              variant="outline" 
              as={Link} 
              href="/courses/html"
              className="flex items-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Jelajahi Kursus
            </Button>
          </div>
          
          <div className="mt-12 w-full max-w-md p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
              Mungkin Anda mencari:
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/courses/html"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Belajar HTML
                </Link>
              </li>
              <li>
                <Link 
                  href="/courses/css"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Belajar CSS
                </Link>
              </li>
              <li>
                <Link 
                  href="/courses/javascript"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Belajar JavaScript
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
} 