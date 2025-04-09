import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { getPostsByType, type Course, type Post } from '@/lib/mdx';
import MainLayout from '@/components/layout/main-layout';
import Container from '@/components/layout/container';

interface CoursePageProps {
  params: {
    course: Course;
  };
}

const courseInfo = {
  html: {
    title: 'Belajar HTML',
    description: 'HTML (HyperText Markup Language) adalah bahasa markup standar untuk membuat halaman web. Pelajari dasar-dasar HTML dan cara membuat struktur konten web.',
    color: 'from-orange-500 to-red-500',
    emoji: '🔖',
  },
  css: {
    title: 'Belajar CSS',
    description: 'CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk mendesain dan mempercantik tampilan halaman web. Pelajari cara styling website dengan CSS.',
    color: 'from-blue-500 to-cyan-500',
    emoji: '🎨',
  },
  javascript: {
    title: 'Belajar JavaScript',
    description: 'JavaScript adalah bahasa pemrograman yang membuat halaman web interaktif. Pelajari dasar-dasar JavaScript untuk membuat website yang dinamis.',
    color: 'from-yellow-400 to-yellow-600',
    emoji: '⚡',
  },
};

export function generateStaticParams() {
  return [
    { course: 'html' },
    { course: 'css' },
    { course: 'javascript' },
  ];
}

export default function CoursePage({ params }: CoursePageProps) {
  const { course } = params;
  const info = courseInfo[course];
  
  // Menggunakan data sebenarnya dari file MDX
  const posts = getPostsByType(course);

  return (
    <MainLayout>
      <div className={`bg-gradient-to-r ${info.color} py-20 lg:py-32 text-white`}>
        <Container>
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl mb-6">{info.emoji}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{info.title}</h1>
            <p className="text-lg max-w-3xl opacity-90 mb-8">{info.description}</p>
          </div>
        </Container>
      </div>

      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Materi Pembelajaran
          </h2>
          
          <div className="space-y-6">
            {posts.map((post) => (
              <Link 
                key={post.slug}
                href={`/courses/${course}/${post.slug}`}
                className="block group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium 
                        ${post.meta.difficulty === 'beginner' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                          : post.meta.difficulty === 'intermediate'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                        }`}
                      >
                        {post.meta.difficulty === 'beginner' 
                          ? 'Pemula' 
                          : post.meta.difficulty === 'intermediate'
                            ? 'Menengah'
                            : 'Lanjutan'
                        }
                      </span>
                      <span className="ml-3 text-sm text-slate-500 dark:text-slate-400">
                        {formatDate(post.meta.date)}
                      </span>
                    </div>
                    <div className="text-sm text-blue-600 dark:text-blue-400 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Baca Selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {post.meta.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300">
                    {post.meta.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </MainLayout>
  );
} 