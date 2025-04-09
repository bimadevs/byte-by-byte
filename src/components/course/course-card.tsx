import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { cn, getRandomGradient } from '@/lib/utils';

interface CourseCardProps {
  title: string;
  description: string;
  href: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  image?: string;
  className?: string;
}

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

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  href,
  difficulty = 'beginner',
  image,
  className = '',
}) => {
  const gradient = getRandomGradient();

  return (
    <Link 
      href={href}
      className={cn(
        'block group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900',
        className
      )}
    >
      <div className="relative">
        {image ? (
          <div className="relative h-48 w-full overflow-hidden">
            <Image 
              src={image} 
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className={cn("h-48 w-full bg-gradient-to-r", gradient)} />
        )}
      </div>
      
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            {title}
          </h3>
          <span className={cn(
            'ml-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
            difficultyClasses[difficulty]
          )}>
            {difficultyLabels[difficulty]}
          </span>
        </div>
        
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
          {description}
        </p>
        
        <div className="flex items-center justify-end text-blue-600 dark:text-blue-400">
          <span className="text-sm font-medium">Pelajari</span>
          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default CourseCard; 