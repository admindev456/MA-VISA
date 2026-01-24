'use client';

import { cn } from '@/lib/utils';

interface DocumentGridProps {
  view: 'grid' | 'list';
  className?: string;
  children: React.ReactNode;
}

export default function DocumentGrid({ view, className, children }: DocumentGridProps) {
  return (
    <div
      className={cn(
        view === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' 
          : 'space-y-4',
        className
      )}
    >
      {children}
    </div>
  );
}

