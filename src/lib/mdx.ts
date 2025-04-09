import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import { MDXComponents } from '@/components/shared/mdx-components';

export type Course = 'html' | 'css' | 'javascript';

export interface PostMeta {
  title: string;
  description: string;
  date: string;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  order: number;
  slug: string;
  course: Course;
}

export interface Post {
  meta: PostMeta;
  content: string;
  slug: string;
}

// Path ke direktori content
const contentDirectory = path.join(process.cwd(), 'src/content');

// Mendapatkan semua file dari jenis kursus tertentu (html, css, javascript)
export const getPostsByType = (course: Course): Post[] => {
  const courseDirectory = path.join(contentDirectory, course);
  const files = fs.readdirSync(courseDirectory);
  
  const posts = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const filePath = path.join(courseDirectory, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      const slug = file.replace(/\.mdx$/, '');
      
      return {
        meta: {
          ...(data as Omit<PostMeta, 'slug' | 'course'>),
          slug,
          course,
        },
        content,
        slug,
      };
    })
    .sort((a, b) => a.meta.order - b.meta.order);
  
  return posts;
};

// Mendapatkan post berdasarkan slug dan jenis kursus
export const getPostBySlug = async (course: Course, slug: string) => {
  const posts = getPostsByType(course);
  const post = posts.find(post => post.slug === slug);
  
  if (!post) {
    return null;
  }
  
  const { content, meta } = post;
  
  const { content: compiledContent } = await compileMDX({
    source: content,
    components: MDXComponents as any,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          rehypeHighlight,
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        ],
        remarkPlugins: [remarkGfm, remarkToc],
      },
    },
  });
  
  return {
    content: compiledContent,
    meta,
  };
};

// Mendapatkan semua post dari semua jenis kursus
export const getAllPosts = (): Post[] => {
  const courses: Course[] = ['html', 'css', 'javascript'];
  return courses.flatMap(course => getPostsByType(course));
}; 