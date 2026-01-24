import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  subtext?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'highlight' | 'danger';
  className?: string;
}

export default function StatCard({
  label,
  value,
  subtext,
  trend,
  trendValue,
  icon,
  variant = 'default',
  className,
}: StatCardProps) {
  const variants = {
    default: 'bg-white border-ink-200',
    highlight: 'bg-amber-50 border-amber-200',
    danger: 'bg-red-50 border-red-200',
  };

  const trendConfig = {
    up: { icon: TrendingUp, color: 'text-green-600' },
    down: { icon: TrendingDown, color: 'text-red-600' },
    neutral: { icon: Minus, color: 'text-ink-400' },
  };

  const TrendIcon = trend ? trendConfig[trend].icon : null;

  return (
    <div className={cn(
      'p-6 rounded-lg border',
      variants[variant],
      className
    )}>
      {/* Header */}
      <div className="flex items-start justify-between">
        <span className="text-sm text-ink-500 font-medium">
          {label}
        </span>
        {icon && (
          <span className="text-ink-400">
            {icon}
          </span>
        )}
      </div>

      {/* Value */}
      <div className="mt-2">
        <span className={cn(
          'text-3xl font-serif font-bold',
          variant === 'danger' ? 'text-red-700' : 'text-ink-900'
        )}>
          {value}
        </span>
      </div>

      {/* Subtext and trend */}
      <div className="mt-2 flex items-center justify-between">
        {subtext && (
          <span className="text-sm text-ink-500">
            {subtext}
          </span>
        )}
        {trend && trendValue && TrendIcon && (
          <span className={cn(
            'flex items-center gap-1 text-sm font-medium',
            trendConfig[trend].color
          )}>
            <TrendIcon className="w-4 h-4" />
            {trendValue}
          </span>
        )}
      </div>
    </div>
  );
}

