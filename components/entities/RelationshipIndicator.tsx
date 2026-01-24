import { ArrowRight, Link2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type RelationshipType = 'partner' | 'subsidiary' | 'affiliate' | 'financed_by' | 'controlled_by';

interface RelationshipIndicatorProps {
  type: RelationshipType;
  fromEntity: string;
  toEntity: string;
  description?: string;
  className?: string;
}

export default function RelationshipIndicator({
  type,
  fromEntity,
  toEntity,
  description,
  className,
}: RelationshipIndicatorProps) {
  const typeConfig = {
    partner: { label: 'Partner', color: 'text-navy-600 bg-navy-50 border-navy-200' },
    subsidiary: { label: 'Subsidiary', color: 'text-amber-600 bg-amber-50 border-amber-200' },
    affiliate: { label: 'Affiliate', color: 'text-ink-600 bg-ink-50 border-ink-200' },
    financed_by: { label: 'Financed By', color: 'text-red-600 bg-red-50 border-red-200' },
    controlled_by: { label: 'Controlled By', color: 'text-red-700 bg-red-50 border-red-200' },
  };

  const config = typeConfig[type];

  return (
    <div className={cn(
      'flex items-center gap-2 p-3 rounded-lg border',
      config.color,
      className
    )}>
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <span className="font-medium text-sm truncate">{fromEntity}</span>
        <ArrowRight className="w-4 h-4 flex-shrink-0 opacity-50" />
        <span className="font-medium text-sm truncate">{toEntity}</span>
      </div>
      <span className={cn(
        'px-2 py-0.5 rounded text-xs font-medium bg-white/50',
      )}>
        {config.label}
      </span>
    </div>
  );
}

// Simple relationship badge for compact views
interface RelationshipBadgeProps {
  type: RelationshipType;
  className?: string;
}

export function RelationshipBadge({ type, className }: RelationshipBadgeProps) {
  const labels = {
    partner: 'Partner',
    subsidiary: 'Subsidiary',
    affiliate: 'Affiliate',
    financed_by: 'Financed',
    controlled_by: 'Controlled',
  };

  return (
    <span className={cn(
      'inline-flex items-center gap-1 text-xs text-ink-500',
      className
    )}>
      <Link2 className="w-3 h-3" />
      {labels[type]}
    </span>
  );
}

