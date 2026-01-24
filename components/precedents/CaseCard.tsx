import { Scale, Calendar, BookOpen, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Badge from '@/components/ui/Badge';

interface CaseCardProps {
  caseName: string;
  citation: string;
  court: string;
  year: number;
  relevance: string;
  holding: string;
  tags?: string[];
  onClick?: () => void;
  className?: string;
}

export default function CaseCard({
  caseName,
  citation,
  court,
  year,
  relevance,
  holding,
  tags,
  onClick,
  className,
}: CaseCardProps) {
  return (
    <div
      className={cn(
        'bg-white border border-ink-200 rounded-lg overflow-hidden',
        'hover:shadow-elevation-2 hover:border-ink-300 transition-all duration-200',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Header */}
      <div className="p-4 border-b border-ink-100">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-navy-100 rounded-lg">
            <Scale className="w-5 h-5 text-navy-700" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-serif font-semibold text-ink-900 leading-snug">
              {caseName}
            </h3>
            <code className="text-sm font-mono text-ink-500 mt-1 block">
              {citation}
            </code>
          </div>
          {onClick && (
            <ArrowUpRight className="w-4 h-4 text-ink-400 flex-shrink-0" />
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-ink-500 mb-3">
          <span className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            {court}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {year}
          </span>
        </div>

        {/* Relevance */}
        <div className="mb-3">
          <h4 className="text-xs font-semibold text-ink-500 uppercase tracking-wide mb-1">
            Relevance
          </h4>
          <p className="text-sm text-navy-700 font-medium">
            {relevance}
          </p>
        </div>

        {/* Holding */}
        <div>
          <h4 className="text-xs font-semibold text-ink-500 uppercase tracking-wide mb-1">
            Holding
          </h4>
          <p className="text-sm text-ink-600 line-clamp-3">
            {holding}
          </p>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mt-4 pt-3 border-t border-ink-100 flex flex-wrap gap-1.5">
            {tags.map((tag, idx) => (
              <Badge key={idx} variant="outline" size="sm">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

