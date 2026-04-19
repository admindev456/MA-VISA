'use client';

import { cn } from '@/lib/utils';

interface TimelineContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function TimelineContainer({ className, children }: TimelineContainerProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Vertical line */}
      <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-ink-200 via-ink-300 to-ink-200" />
      
      {/* Events */}
      <div className="space-y-0">
        {children}
      </div>
    </div>
  );
}
