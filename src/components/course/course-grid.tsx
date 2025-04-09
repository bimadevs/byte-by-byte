import React from 'react';
import { cn } from '@/lib/utils';
import CourseCard from '@/components/course/course-card';
import { Course } from '@/lib/mdx';

interface CourseItem {
  title: string;
  description: string;
  href: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  image?: string;
  course: Course;
}

interface CourseGridProps {
  courses: CourseItem[];
  className?: string;
  columns?: 1 | 2 | 3 | 4;
}

const CourseGrid: React.FC<CourseGridProps> = ({
  courses,
  className = '',
  columns = 3,
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  return (
    <div className={cn('grid gap-6', gridCols[columns], className)}>
      {courses.map((course, index) => (
        <CourseCard
          key={`${course.course}-${index}`}
          title={course.title}
          description={course.description}
          href={course.href}
          difficulty={course.difficulty}
          image={course.image}
        />
      ))}
    </div>
  );
};

export default CourseGrid; 