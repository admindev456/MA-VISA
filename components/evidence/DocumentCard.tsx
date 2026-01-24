import { FileText, Calendar, ExternalLink, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';
import Badge from '@/components/ui/Badge';
import type { EvidenceCategory } from '@/lib/types';

interface DocumentCardProps {
  title: string;
  category: EvidenceCategory;
  date: string;
  source: string;
  description: string;
  keyFindings?: string[];
  onClick?: () => void;
  className?: string;
}

export default function DocumentCard({
  title,
  category,
  date,
  source,
  description,
  keyFindings,
  onClick,
  className,
}: DocumentCardProps) {
  const categoryConfig = {
    audit: { label: 'Audit', color: 'amber' as const },
    warning: { label: 'Warning', color: 'danger' as const },
    congressional: { label: 'Congressional', color: 'navy' as const },
    financial: { label: 'Financial', color: 'success' as const },
    media: { label: 'Media', color: 'gray' as const },
  };

  const config = categoryConfig[category];

  return (
    <div
      className={cn(
        'bg-white border border-ink-200 rounded-lg shadow-elevation-1 overflow-hidden',
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
          <div className="p-2 bg-ink-100 rounded-lg">
            <FileText className="w-5 h-5 text-ink-600" />
          </div>
          <div className="flex-1 min-w-0">
            <Badge variant={config.color} size="sm" className="mb-2">
              {config.label}
            </Badge>
            <h3 className="font-serif font-semibold text-ink-900 leading-snug truncate">
              {title}
            </h3>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        {/* Meta info */}
        <div className="flex items-center gap-4 text-xs text-ink-500 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <Tag className="w-3.5 h-3.5" />
            {source}
          </span>
        </div>

        <p className="text-sm text-ink-600 line-clamp-2">
          {description}
        </p>

        {/* Key findings preview */}
        {keyFindings && keyFindings.length > 0 && (
          <div className="mt-3 pt-3 border-t border-ink-100">
            <p className="text-xs font-semibold text-ink-500 uppercase tracking-wide mb-1">
              Key Findings
            </p>
            <p className="text-sm text-ink-700 line-clamp-1">
              {keyFindings[0]}
              {keyFindings.length > 1 && (
                <span className="text-ink-400"> +{keyFindings.length - 1} more</span>
              )}
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      {onClick && (
        <div className="px-4 py-3 bg-ink-50 border-t border-ink-100">
          <span className="text-sm text-navy-600 flex items-center gap-1">
            View Document <ExternalLink className="w-3.5 h-3.5" />
          </span>
        </div>
      )}
    </div>
  );
}

