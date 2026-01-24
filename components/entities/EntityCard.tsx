import { Building, Users, User, Landmark, CreditCard, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import Badge from '@/components/ui/Badge';
import type { EntityType } from '@/lib/types';

interface EntityCardProps {
  name: string;
  type: EntityType;
  description: string;
  designation?: string;
  aliases?: string[];
  onClick?: () => void;
  className?: string;
}

export default function EntityCard({
  name,
  type,
  description,
  designation,
  aliases,
  onClick,
  className,
}: EntityCardProps) {
  const typeConfig = {
    network: { 
      icon: CreditCard, 
      label: 'Payment Network', 
      color: 'bg-navy-100 text-navy-700',
      badge: 'navy' as const
    },
    bank: { 
      icon: Building, 
      label: 'Financial Institution', 
      color: 'bg-amber-100 text-amber-700',
      badge: 'amber' as const
    },
    militia: { 
      icon: AlertTriangle, 
      label: 'Armed Group', 
      color: 'bg-red-100 text-red-700',
      badge: 'danger' as const
    },
    individual: { 
      icon: User, 
      label: 'Individual', 
      color: 'bg-ink-100 text-ink-700',
      badge: 'gray' as const
    },
    government: { 
      icon: Landmark, 
      label: 'Government Entity', 
      color: 'bg-green-100 text-green-700',
      badge: 'success' as const
    },
  };

  const config = typeConfig[type];
  const Icon = config.icon;

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
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start gap-3 mb-3">
          <div className={cn('p-2 rounded-lg', config.color)}>
            <Icon className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant={config.badge} size="sm">
                {config.label}
              </Badge>
              {designation && (
                <Badge variant="danger" size="sm">
                  {designation}
                </Badge>
              )}
            </div>
            <h3 className="mt-1 font-serif font-semibold text-ink-900 leading-snug">
              {name}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-ink-600 line-clamp-2">
          {description}
        </p>

        {/* Aliases */}
        {aliases && aliases.length > 0 && (
          <div className="mt-3 pt-3 border-t border-ink-100">
            <p className="text-xs text-ink-500">
              <span className="font-semibold">Also known as: </span>
              {aliases.join(', ')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

