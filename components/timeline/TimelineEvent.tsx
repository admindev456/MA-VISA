'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import Badge from '@/components/ui/Badge';
import type { TimelineCategory } from '@/lib/types';

interface TimelineEventProps {
  date: string;
  title: string;
  description: string;
  category: TimelineCategory;
  sources?: string[];
  financialImpact?: string;
  expandedContent?: React.ReactNode;
}

export default function TimelineEvent({
  date,
  title,
  description,
  category,
  sources,
  financialImpact,
  expandedContent,
}: TimelineEventProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const categoryConfig = {
    warning: { color: 'bg-amber-500', badge: 'amber' as const, label: 'Warning' },
    action: { color: 'bg-green-500', badge: 'success' as const, label: 'Action' },
    violation: { color: 'bg-red-500', badge: 'danger' as const, label: 'Violation' },
    attack: { color: 'bg-red-600', badge: 'danger' as const, label: 'Attack' },
    regulatory: { color: 'bg-navy-500', badge: 'navy' as const, label: 'Regulatory' },
  };

  const config = categoryConfig[category];

  return (
    <div className="relative pl-10 pb-8 last:pb-0">
      {/* Timeline dot */}
      <div
        className={cn(
          'absolute left-2 top-1 w-4 h-4 rounded-full border-2 border-white ring-2 z-10',
          config.color,
          category === 'attack' && 'ring-red-200',
          category === 'warning' && 'ring-amber-200',
          category === 'action' && 'ring-green-200',
          category === 'violation' && 'ring-red-200',
          category === 'regulatory' && 'ring-navy-200'
        )}
      />

      {/* Content card */}
      <div className="bg-white border border-ink-200 rounded-lg shadow-elevation-1 overflow-hidden">
        {/* Header */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div className="flex items-center gap-3">
              <time className="text-sm font-mono text-ink-500">{date}</time>
              <Badge variant={config.badge}>{config.label}</Badge>
            </div>
            {financialImpact && (
              <span className="text-sm font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                {financialImpact}
              </span>
            )}
          </div>

          <h3 className="font-serif text-lg font-semibold text-ink-900 leading-snug">
            {title}
          </h3>

          <p className="mt-2 text-sm text-ink-600 leading-relaxed">
            {description}
          </p>

          {/* Sources */}
          {sources && sources.length > 0 && (
            <div className="mt-3 flex items-center gap-2 flex-wrap">
              <span className="text-xs text-ink-400">Sources:</span>
              {sources.map((source, idx) => (
                <a
                  key={idx}
                  href={source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-navy-600 hover:text-navy-800"
                >
                  <ExternalLink className="w-3 h-3" />
                  [{idx + 1}]
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Expandable content */}
        {expandedContent && (
          <>
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full px-4 py-2 border-t border-ink-100 bg-ink-50 flex items-center justify-center gap-2 text-sm text-ink-600 hover:bg-ink-100 transition-colors"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Show less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Show more details
                </>
              )}
            </button>

            {isExpanded && (
              <div className="p-4 border-t border-ink-100 bg-ink-50/50 animate-slide-down">
                {expandedContent}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

