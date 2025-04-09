import React from 'react';
import Link from 'next/link';
import { BookOpen, Github, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-6">
            <BookOpen className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              Byte by Byte
            </span>
          </div>
          
          <nav className="flex flex-wrap justify-center -mx-5 -my-2 mb-8">
            <div className="px-5 py-2">
              <Link 
                href="/" 
                className="text-base text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors duration-200"
              >
                Beranda
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link 
                href="/courses/html" 
                className="text-base text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors duration-200"
              >
                Belajar HTML
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link 
                href="/courses/css" 
                className="text-base text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors duration-200"
              >
                Belajar CSS
              </Link>
            </div>
            <div className="px-5 py-2">
              <Link 
                href="/courses/javascript" 
                className="text-base text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors duration-200"
              >
                Belajar JavaScript
              </Link>
            </div>
          </nav>
          
          <div className="flex space-x-6 mb-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 transition-colors duration-200"
              aria-label="GitHub"
              tabIndex={0}
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 transition-colors duration-200"
              aria-label="Twitter"
              tabIndex={0}
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
          </div>
          
          <p className="text-center text-base text-slate-500 dark:text-slate-400">
            &copy; {currentYear} Byte by Byte. Semua Hak Cipta.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 