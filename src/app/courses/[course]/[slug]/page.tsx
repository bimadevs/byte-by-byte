import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPostsByType, type Course } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
import MainLayout from '@/components/layout/main-layout';
import Container from '@/components/layout/container';
import TableOfContents from '@/components/course/table-of-contents';
import { MDXComponents } from '@/components/shared/mdx-components';

interface CoursePostPageProps {
  params: {
    course: Course;
    slug: string;
  };
}

export async function generateMetadata({ params }: CoursePostPageProps) {
  const { course, slug } = params;

  // Dalam situasi nyata, ini akan mengambil posting dari file MDX
  // const post = await getPostBySlug(course, slug);
  
  // Saat ini kita menggunakan data dummy
  const post = {
    content: '',
    meta: {
      title: `${slug.charAt(0).toUpperCase() + slug.slice(1)} ${course.toUpperCase()}`,
      description: `Belajar tentang ${slug} di ${course}.`,
      date: '2023-06-01',
      tags: ['dasar', 'pemula'],
      difficulty: 'beginner' as const,
      order: 1,
      slug,
      course,
    },
  };

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.meta.title,
    description: post.meta.description,
  };
}

export async function generateStaticParams() {
  const courses: Course[] = ['html', 'css', 'javascript'];
  const paths = [];

  for (const course of courses) {
    // Menggunakan data sebenarnya dari file MDX
    const posts = getPostsByType(course);

    for (const post of posts) {
      paths.push({
        course,
        slug: post.slug,
      });
    }
  }

  return paths;
}

export default async function CoursePostPage({ params }: CoursePostPageProps) {
  const { course, slug } = params;

  // Menggunakan getPostBySlug untuk mengambil konten dari file MDX
  const post = await getPostBySlug(course, slug);

  if (!post) {
    notFound();
  }

  // Mengambil semua post untuk navigasi
  const allPosts = getPostsByType(course);
  
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  const difficultyClasses = {
    beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  };

  const difficultyLabels = {
    beginner: 'Pemula',
    intermediate: 'Menengah',
    advanced: 'Lanjutan',
  };

  return (
    <MainLayout>
      <Container className="py-16">
        <div className="pb-6 mb-6 border-b border-slate-200 dark:border-slate-800">
          <Link
            href={`/courses/${course}`}
            className="inline-flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke {course.toUpperCase()}
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {post.meta.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center text-slate-600 dark:text-slate-400">
              <Calendar className="h-4 w-4 mr-1" />
              {formatDate(post.meta.date)}
            </div>
            
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${difficultyClasses[post.meta.difficulty]}`}>
              {difficultyLabels[post.meta.difficulty]}
            </span>
            
            <div className="flex flex-wrap gap-2">
              {post.meta.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-700 dark:text-slate-300"
                >
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <article className="lg:flex-1 prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-20">
            {/* Menampilkan konten MDX yang sebenarnya */}
            {post.content}
          </article>
          
          <div className="lg:w-64">
            <TableOfContents />
            
            <div className="mt-8 sticky top-24">
              <h4 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">
                Navigasi
              </h4>
              <div className="space-y-4">
                {prevPost && (
                  <Link
                    href={`/courses/${course}/${prevPost.slug}`}
                    className="block p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-blue-200 dark:hover:border-blue-900 transition-colors duration-200"
                  >
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
                      Sebelumnya
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">
                      {prevPost.meta.title}
                    </span>
                  </Link>
                )}
                
                {nextPost && (
                  <Link
                    href={`/courses/${course}/${nextPost.slug}`}
                    className="block p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-blue-200 dark:hover:border-blue-900 transition-colors duration-200"
                  >
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mb-1">
                      Selanjutnya
                    </span>
                    <span className="font-medium text-slate-900 dark:text-white">
                      {nextPost.meta.title}
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
} 