'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Code, BookOpen, Users, Globe, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import MainLayout from '@/components/layout/main-layout';
import Container from '@/components/layout/container';
import CourseGrid from '@/components/course/course-grid';
import { Course } from '@/lib/mdx';

const courses = [
  {
    title: 'HTML Dasar',
    description: 'Pelajari dasar-dasar HTML untuk memulai perjalanan web development Anda. Pahami struktur, tag, dan elemen dasar HTML.',
    href: '/courses/html',
    difficulty: 'beginner' as const,
    course: 'html' as Course,
  },
  {
    title: 'CSS Dasar',
    description: 'Pelajari cara mendesain dan mempercantik website dengan CSS. Pahami selectors, properties, dan styling dasar.',
    href: '/courses/css',
    difficulty: 'beginner' as const,
    course: 'css' as Course,
  },
  {
    title: 'JavaScript Dasar',
    description: 'Pelajari dasar-dasar JavaScript untuk membuat website yang interaktif dan dinamis. Pahami variabel, fungsi, dan konsep dasar pemrograman.',
    href: '/courses/javascript',
    difficulty: 'beginner' as const,
    course: 'javascript' as Course,
  },
];

const features = [
  {
    icon: BookOpen,
    title: 'Materi Lengkap',
    description: 'Kumpulan materi lengkap untuk belajar HTML, CSS, dan JavaScript dari dasar hingga tingkat lanjut.',
  },
  {
    icon: Code,
    title: 'Contoh Kode',
    description: 'Banyak contoh kode yang bisa langsung dipraktikkan untuk memperkuat pemahaman dan keterampilan.',
  },
  {
    icon: CheckCircle,
    title: 'Langkah demi Langkah',
    description: 'Panduan belajar yang disusun secara bertahap dan sistematis sehingga mudah diikuti dan dipahami.',
  },
  {
    icon: Users,
    title: 'Komunitas',
    description: 'Bergabunglah dengan komunitas pembelajar untuk berdiskusi dan berbagi pengalaman belajar.',
  },
];

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 py-20 lg:py-32">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              className="lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                Belajar Coding <span className="text-blue-600 dark:text-blue-400">Lebih Mudah</span> dan Menyenangkan
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Pelajari HTML, CSS, dan JavaScript dengan kurikulum yang terstruktur dan mudah dipahami untuk para pemula.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="px-8 py-3 text-base" as={Link} href="/courses/html">
                  Mulai Belajar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 text-base" as={Link} href="#courses">
                  Jelajahi Kursus
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-500" />
                <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                </div>
                <div className="p-6 font-mono text-sm">
                  <p className="text-slate-800 dark:text-slate-300">
                    <span className="text-pink-600 dark:text-pink-400">const</span>{' '}
                    <span className="text-blue-600 dark:text-blue-400">greeting</span> = <span className="text-green-600 dark:text-green-400">'Hello, World!'</span>;
                  </p>
                  <p className="text-slate-800 dark:text-slate-300 mt-2">
                    <span className="text-pink-600 dark:text-pink-400">function</span>{' '}
                    <span className="text-yellow-600 dark:text-yellow-400">displayMessage</span>() {'{'}
                  </p>
                  <p className="text-slate-800 dark:text-slate-300 ml-4">
                    <span className="text-pink-600 dark:text-pink-400">const</span>{' '}
                    <span className="text-blue-600 dark:text-blue-400">element</span> = document.<span className="text-yellow-600 dark:text-yellow-400">getElementById</span>(<span className="text-green-600 dark:text-green-400">'message'</span>);
                  </p>
                  <p className="text-slate-800 dark:text-slate-300 ml-4">
                    <span className="text-blue-600 dark:text-blue-400">element</span>.<span className="text-yellow-600 dark:text-yellow-400">textContent</span> = <span className="text-blue-600 dark:text-blue-400">greeting</span>;
                  </p>
                  <p className="text-slate-800 dark:text-slate-300">{'}'}</p>
                  <p className="text-slate-800 dark:text-slate-300 mt-2">
                    <span className="text-yellow-600 dark:text-yellow-400">displayMessage</span>();
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Mengapa Belajar Bersama Kami?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Platform belajar coding yang dirancang khusus untuk pemula dengan pendekatan yang mudah dipahami dan praktis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg inline-block mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-900/50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Kursus Kami
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Mulai perjalanan belajar coding Anda dengan kursus-kursus berkualitas dari dasar hingga tingkat lanjutan.
            </p>
          </div>
          
          <CourseGrid courses={courses} />
          
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="px-8 py-3 text-base" as={Link} href="/courses">
              Lihat Semua Kursus
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Memulai Perjalanan Coding Anda?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Belajar coding tidak pernah semudah ini. Mulai perjalanan Anda sekarang dan kembangkan keterampilan yang berharga untuk masa depan.
            </p>
            <Button 
              size="lg" 
              className="px-10 py-3 text-base bg-white text-blue-700 hover:bg-blue-50"
              as={Link} 
              href="/courses/html"
            >
              Mulai Belajar Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
