import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Quiz from './quiz';

const CustomLink = ({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return <Link href={href} {...props} />;
  }

  if (isAnchorLink) {
    return <a href={href} {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...props} />;
};

const CustomImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <div className="my-6 overflow-hidden rounded-xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="mx-auto rounded-xl" alt={props.alt} {...props} />
    </div>
  );
};

const Callout = ({
  children,
  type = 'info',
}: {
  children: React.ReactNode;
  type?: 'info' | 'warning' | 'success' | 'error';
}) => {
  const bgColors = {
    info: 'bg-blue-50 dark:bg-slate-800/60 border-blue-200 dark:border-blue-900',
    warning: 'bg-yellow-50 dark:bg-slate-800/60 border-yellow-200 dark:border-yellow-900',
    success: 'bg-green-50 dark:bg-slate-800/60 border-green-200 dark:border-green-900',
    error: 'bg-red-50 dark:bg-slate-800/60 border-red-200 dark:border-red-900',
  };

  const textColors = {
    info: 'text-blue-800 dark:text-blue-300',
    warning: 'text-yellow-800 dark:text-yellow-300',
    success: 'text-green-800 dark:text-green-300',
    error: 'text-red-800 dark:text-red-300',
  };

  return (
    <div className={cn('my-6 rounded-lg border p-4', bgColors[type])}>
      <div className={cn('text-sm', textColors[type])}>{children}</div>
    </div>
  );
};

const CodeBlock = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      <pre className={cn("p-4 text-sm overflow-x-auto", className)}>{children}</pre>
    </div>
  );
};

const Table = ({ ...props }) => (
  <div className="my-6 w-full overflow-y-auto">
    <table className="w-full" {...props} />
  </div>
);

const THead = ({ ...props }) => (
  <thead className="border-b border-slate-200 dark:border-slate-800" {...props} />
);

const TRow = ({ ...props }) => (
  <tr
    className="border-b border-slate-200 dark:border-slate-800 m-0 p-0 even:bg-slate-50 dark:even:bg-slate-800/20"
    {...props}
  />
);

const TData = ({ ...props }) => (
  <td
    className="p-2 m-0 text-left"
    {...props}
  />
);

export const MDXComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "mt-8 mb-4 text-3xl font-bold text-slate-900 dark:text-white",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-10 mb-4 text-2xl font-bold text-slate-900 dark:text-white",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "mt-8 mb-4 text-xl font-bold text-slate-900 dark:text-white",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "mt-8 mb-4 text-lg font-bold text-slate-900 dark:text-white",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn("mb-4 text-slate-700 dark:text-slate-300", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn("my-4 ml-6 list-disc text-slate-700 dark:text-slate-300", className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn("my-4 ml-6 list-decimal text-slate-700 dark:text-slate-300", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li
      className={cn("mt-2 text-slate-700 dark:text-slate-300", className)}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn(
        "mt-6 border-l-4 border-slate-200 pl-4 text-slate-600 dark:border-slate-700 dark:text-slate-400",
        className
      )}
      {...props}
    />
  ),
  a: CustomLink,
  img: CustomImage,
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "inline-block rounded bg-slate-100 px-1 py-0.5 font-mono text-sm text-slate-800 dark:bg-slate-800 dark:text-slate-300",
        className
      )}
      {...props}
    />
  ),
  pre: CodeBlock,
  table: Table,
  thead: THead,
  tr: TRow,
  td: TData,
  th: TData,
  Callout,
  Quiz,
}; 