import React from 'react';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children,
  className = '',
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className={cn('flex-grow', className)}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 