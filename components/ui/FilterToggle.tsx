'use client';

import { cn } from '@/lib/utils';

interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

interface FilterToggleProps {
  options: FilterOption[];
  selected: string[];
  onChange: (selected: string[]) => void;
  multiple?: boolean;
  className?: string;
}

export default function FilterToggle({
  options,
  selected,
  onChange,
  multiple = true,
  className,
}: FilterToggleProps) {
  const handleClick = (optionId: string) => {
    if (multiple) {
      if (selected.includes(optionId)) {
        onChange(selected.filter((id) => id !== optionId));
      } else {
        onChange([...selected, optionId]);
      }
    } else {
      onChange([optionId]);
    }
  };

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {options.map((option) => {
        const isActive = selected.includes(option.id);
        
        return (
          <button
            key={option.id}
            type="button"
            onClick={() => handleClick(option.id)}
            className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full',
              'border transition-all duration-150',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-500 focus-visible:ring-offset-2',
              isActive
                ? 'border-ink-900 bg-ink-900 text-white'
                : 'border-ink-200 text-ink-600 hover:border-ink-400 hover:bg-ink-50'
            )}
          >
            {option.label}
            {option.count !== undefined && (
              <span
                className={cn(
                  'text-xs px-1.5 py-0.5 rounded-full',
                  isActive ? 'bg-white/20 text-white' : 'bg-ink-100 text-ink-500'
                )}
              >
                {option.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

// View toggle for list/grid views
interface ViewToggleProps {
  view: 'grid' | 'list';
  onChange: (view: 'grid' | 'list') => void;
  className?: string;
}

export function ViewToggle({ view, onChange, className }: ViewToggleProps) {
  return (
    <div className={cn('inline-flex rounded-lg border border-ink-200 p-1', className)}>
      <button
        type="button"
        onClick={() => onChange('grid')}
        className={cn(
          'px-3 py-1.5 text-sm rounded-md transition-colors',
          view === 'grid'
            ? 'bg-ink-900 text-white'
            : 'text-ink-600 hover:bg-ink-50'
        )}
      >
        Grid
      </button>
      <button
        type="button"
        onClick={() => onChange('list')}
        className={cn(
          'px-3 py-1.5 text-sm rounded-md transition-colors',
          view === 'list'
            ? 'bg-ink-900 text-white'
            : 'text-ink-600 hover:bg-ink-50'
        )}
      >
        List
      </button>
    </div>
  );
}

