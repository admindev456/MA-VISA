import { cn } from '@/lib/utils';

interface BadgeProps {
  variant?: 'gray' | 'amber' | 'navy' | 'danger' | 'success' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
  children: React.ReactNode;
}

export default function Badge({ 
  variant = 'gray', 
  size = 'sm',
  className, 
  children 
}: BadgeProps) {
  const variants = {
    gray: 'bg-ink-100 text-ink-700',
    amber: 'bg-amber-100 text-amber-800',
    navy: 'bg-navy-100 text-navy-800',
    danger: 'bg-red-100 text-red-800',
    success: 'bg-green-100 text-green-800',
    outline: 'bg-transparent border border-ink-300 text-ink-600',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}

// Badge with dot indicator
interface DotBadgeProps extends BadgeProps {
  dotColor?: string;
}

export function DotBadge({ 
  variant = 'gray', 
  dotColor,
  className, 
  children 
}: DotBadgeProps) {
  const dotColors = {
    gray: 'bg-ink-400',
    amber: 'bg-amber-500',
    navy: 'bg-navy-500',
    danger: 'bg-red-500',
    success: 'bg-green-500',
    outline: 'bg-ink-400',
  };

  return (
    <Badge variant={variant} className={cn('gap-1.5', className)}>
      <span className={cn('w-1.5 h-1.5 rounded-full', dotColor || dotColors[variant])} />
      {children}
    </Badge>
  );
}

