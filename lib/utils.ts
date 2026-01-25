import { clsx, type ClassValue } from 'clsx';

/**
 * Utility function to merge Tailwind classes
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format a date string for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Format a date string for short display
 */
export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });
}

/**
 * Format currency values
 */
export function formatCurrency(value: number): string {
  if (value >= 1_000_000_000) {
    return `$${(value / 1_000_000_000).toFixed(1)}B`;
  }
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(0)}M`;
  }
  if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(0)}K`;
  }
  return `$${value}`;
}

/**
 * Get badge variant based on timeline category
 */
export function getCategoryBadgeVariant(category: string): 'gray' | 'amber' | 'navy' | 'danger' | 'success' {
  switch (category) {
    case 'warning':
      return 'amber';
    case 'violation':
      return 'danger';
    case 'action':
      return 'success';
    case 'attack':
      return 'danger';
    case 'regulatory':
      return 'navy';
    default:
      return 'gray';
  }
}

/**
 * Get entity type color
 */
export function getEntityTypeColor(type: string): string {
  switch (type) {
    case 'network':
      return 'text-navy-700 bg-navy-50';
    case 'bank':
      return 'text-amber-700 bg-amber-50';
    case 'militia':
      return 'text-red-700 bg-red-50';
    case 'individual':
      return 'text-ink-700 bg-ink-50';
    case 'government':
      return 'text-green-700 bg-green-50';
    default:
      return 'text-ink-700 bg-ink-50';
  }
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Generate a unique ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

/**
 * Debounce function for search/filter inputs
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Group array items by a key
 */
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((groups, item) => {
    const value = String(item[key]);
    return {
      ...groups,
      [value]: [...(groups[value] || []), item],
    };
  }, {} as Record<string, T[]>);
}

