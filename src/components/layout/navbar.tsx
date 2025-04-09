'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Code, BookOpen, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const routes = [
  {
    label: 'Beranda',
    href: '/',
    icon: Home,
  },
  {
    label: 'HTML',
    href: '/courses/html',
    icon: Code,
  },
  {
    label: 'CSS',
    href: '/courses/css',
    icon: Code,
  },
  {
    label: 'JavaScript',
    href: '/courses/javascript',
    icon: Code,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-slate-200 dark:bg-slate-900 dark:border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <BookOpen className="h-8 w-8 text-blue-600" />
                <span className="font-bold text-xl text-slate-900 dark:text-white">Byte by Byte</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:text-slate-900 hover:border-slate-300 dark:text-slate-400 dark:hover:text-white dark:hover:border-slate-700 transition-colors duration-200"
                >
                  <route.icon className="h-4 w-4 mr-2" />
                  {route.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
              aria-label="Toggle menu"
              tabIndex={0}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={cn("sm:hidden", isOpen ? "block" : "hidden")}>
        <div className="pt-2 pb-3 space-y-1">
          {routes.map((route) => (
            <Link 
              key={route.href} 
              href={route.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center px-3 py-2 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 rounded-md transition-colors duration-200"
            >
              <route.icon className="h-5 w-5 mr-3" />
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 