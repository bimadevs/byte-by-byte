import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getAllCourseCategories } from '@/lib/mdx';
import MainLayout from '@/components/layout/main-layout';
import Container from '@/components/layout/container';
import CourseCard from '@/components/course/course-card';

const courseInfo = {
  html: {
    title: 'Belajar HTML',
    description: 'HTML (HyperText Markup Language) adalah bahasa markup standar untuk membuat halaman web. Pelajari dasar-dasar HTML dan cara membuat struktur konten web.',
    color: 'from-orange-500 to-red-500',
    emoji: '🔖',
    difficulty: 'beginner' as const,
  },
  css: {
    title: 'Belajar CSS',
    description: 'CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk mendesain dan mempercantik tampilan halaman web. Pelajari cara styling website dengan CSS.',
    color: 'from-blue-500 to-cyan-500',
    emoji: '🎨',
    difficulty: 'beginner' as const,
  },
  javascript: {
    title: 'Belajar JavaScript',
    description: 'JavaScript adalah bahasa pemrograman yang membuat halaman web interaktif. Pelajari dasar-dasar JavaScript untuk membuat website yang dinamis.',
    color: 'from-yellow-400 to-yellow-600',
    emoji: '⚡',
    difficulty: 'beginner' as const,
  },
  php: {
    title: 'Belajar PHP',
    description: 'PHP adalah bahasa pemrograman server-side yang populer untuk pengembangan web. Pelajari dasar-dasar PHP untuk membuat aplikasi web dinamis.',
    color: 'from-indigo-500 to-purple-500',
    emoji: '🐘',
    difficulty: 'intermediate' as const,
  },
  // Tambahkan kursus baru di sini dengan format yang sama
};

// Fungsi untuk mendapatkan informasi kursus berdasarkan kategori
const getCourseInfo = (course: string) => {
  // @ts-ignore - kita akan menangani kursus yang tidak ada dalam courseInfo
  const info = courseInfo[course];
  
  if (!info) {
    return {
      title: `Belajar ${course.toUpperCase()}`,
      description: `Pelajari dasar-dasar ${course.toUpperCase()} dalam kursus ini.`,
      color: 'from-gray-500 to-gray-700',
      emoji: '📚',
      difficulty: 'beginner' as const,
    };
  }
  
  return info;
};

export default function CoursesPage() {
  // Mendapatkan semua kategori kursus secara dinamis
  const courseCategories = getAllCourseCategories();
  
  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 lg:py-32 text-white">
        <Container>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Semua Kursus</h1>
            <p className="text-lg max-w-3xl opacity-90 mb-8">
              Jelajahi berbagai kursus yang tersedia untuk membantu Anda mempelajari keterampilan pemrograman dan pengembangan web.
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseCategories.map((course) => {
            const info = getCourseInfo(course);
            return (
              <CourseCard
                key={course}
                title={info.title}
                description={info.description}
                href={`/courses/${course}`}
                difficulty={info.difficulty}
                customGradient={info.color}
                emoji={info.emoji}
              />
            );
          })}
        </div>
      </Container>
    </MainLayout>
  );
} 