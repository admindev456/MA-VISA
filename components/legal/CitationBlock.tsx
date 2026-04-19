import { cn } from '@/lib/utils';
import { BookOpen } from 'lucide-react';

interface CitationBlockProps {
  statute: string;
  title?: string;
  text: string;
  className?: string;
}

export default function CitationBlock({ 
  statute, 
  title, 
  text, 
  className 
}: CitationBlockProps) {
  return (
    <blockquote className={cn(
      'relative pl-4 py-3 bg-ink-50 border-l-4 border-amber-500 rounded-r-lg',
      className
    )}>
      <div className="flex items-start gap-3">
        <BookOpen className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <div className="flex items-center gap-2 mb-1">
            <code className="font-mono text-sm font-semibold text-ink-900">
              {statute}
            </code>
            {title && (
              <span className="text-sm text-ink-600">— {title}</span>
            )}
          </div>
          <p className="text-sm text-ink-700 italic leading-relaxed">
            "{text}"
          </p>
        </div>
      </div>
    </blockquote>
  );
}

// Inline citation component
interface InlineCitationProps {
  citation: string;
  className?: string;
}

export function InlineCitation({ citation, className }: InlineCitationProps) {
  return (
    <code className={cn(
      'font-mono text-sm bg-ink-100 px-1.5 py-0.5 rounded text-ink-700',
      className
    )}>
      {citation}
    </code>
  );
}
