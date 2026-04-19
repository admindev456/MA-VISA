import { cn } from '@/lib/utils';

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export default function Card({ 
  className, 
  children, 
  hover = false,
  padding = 'md' 
}: CardProps) {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'bg-white border border-ink-200 rounded-lg shadow-elevation-1',
        hover && 'hover:shadow-elevation-2 hover:border-ink-300 transition-all duration-200 cursor-pointer',
        paddingStyles[padding],
        className
      )}
    >
      {children}
    </div>
  );
}

// Card Header component
interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

export function CardHeader({ className, children }: CardHeaderProps) {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
}

// Card Title component
interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function CardTitle({ className, children, as: Component = 'h3' }: CardTitleProps) {
  return (
    <Component className={cn('font-serif font-semibold text-ink-900', className)}>
      {children}
    </Component>
  );
}

// Card Description component
interface CardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

export function CardDescription({ className, children }: CardDescriptionProps) {
  return (
    <p className={cn('text-sm text-ink-600 mt-1', className)}>
      {children}
    </p>
  );
}

// Card Content component
interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export function CardContent({ className, children }: CardContentProps) {
  return (
    <div className={cn('', className)}>
      {children}
    </div>
  );
}

// Card Footer component
interface CardFooterProps {
  className?: string;
  children: React.ReactNode;
}

export function CardFooter({ className, children }: CardFooterProps) {
  return (
    <div className={cn('mt-4 pt-4 border-t border-ink-100', className)}>
      {children}
    </div>
  );
}
