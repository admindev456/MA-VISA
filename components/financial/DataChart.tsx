'use client';

import { cn } from '@/lib/utils';

interface DataPoint {
  label: string;
  value: number;
  displayValue?: string;
}

interface DataChartProps {
  data: DataPoint[];
  maxValue?: number;
  title?: string;
  className?: string;
}

export default function DataChart({ 
  data, 
  maxValue,
  title,
  className 
}: DataChartProps) {
  const max = maxValue || Math.max(...data.map(d => d.value));

  return (
    <div className={cn('', className)}>
      {title && (
        <h4 className="text-sm font-semibold text-ink-700 mb-4">{title}</h4>
      )}
      <div className="space-y-3">
        {data.map((point, idx) => {
          const percentage = (point.value / max) * 100;
          
          return (
            <div key={idx}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-ink-600">{point.label}</span>
                <span className="text-sm font-mono font-medium text-ink-900">
                  {point.displayValue || point.value.toLocaleString()}
                </span>
              </div>
              <div className="h-2 bg-ink-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-ink-600 to-ink-800 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Placeholder for more complex chart types
interface ChartPlaceholderProps {
  type: 'line' | 'bar' | 'pie' | 'area';
  title?: string;
  description?: string;
  className?: string;
}

export function ChartPlaceholder({ type, title, description, className }: ChartPlaceholderProps) {
  return (
    <div className={cn(
      'flex flex-col items-center justify-center p-8 bg-ink-50 border-2 border-dashed border-ink-200 rounded-lg',
      className
    )}>
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-ink-200 rounded-lg flex items-center justify-center">
          <span className="text-2xl text-ink-400">📊</span>
        </div>
        {title && (
          <h4 className="font-serif font-semibold text-ink-700">{title}</h4>
        )}
        <p className="mt-1 text-sm text-ink-500">
          {description || `${type.charAt(0).toUpperCase() + type.slice(1)} chart placeholder`}
        </p>
      </div>
    </div>
  );
}

