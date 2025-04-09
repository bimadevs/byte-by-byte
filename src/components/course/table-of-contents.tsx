'use client';
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ className = '' }) => {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h2, h3, h4')).map(
      (element) => ({
        id: element.id,
        text: element.textContent || '',
        level: Number(element.tagName.substring(1)),
      })
    );

    setHeadings(elements);

    const handleScroll = () => {
      const headingElements = Array.from(document.querySelectorAll('h2, h3, h4'));
      const visibleHeadings = headingElements.filter((element) => {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight * 0.5;
      });

      if (visibleHeadings.length > 0) {
        setActiveId(visibleHeadings[0].id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className={cn('hidden lg:block sticky top-24 self-start', className)}>
      <h4 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">
        Daftar Isi
      </h4>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li key={heading.id} className={cn('transition-colors duration-200', {
            'pl-4': heading.level === 3,
            'pl-8': heading.level === 4,
          })}>
            <a
              href={`#${heading.id}`}
              className={cn(
                'inline-block py-1 text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400',
                {
                  'font-medium text-blue-600 dark:text-blue-400': heading.id === activeId,
                }
              )}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${heading.id}`)?.scrollIntoView({
                  behavior: 'smooth',
                });
                setActiveId(heading.id);
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents; 