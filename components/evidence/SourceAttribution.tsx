import { ExternalLink, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SourceAttributionProps {
  sources: Array<{
    name: string;
    url?: string;
    date?: string;
  }>;
  className?: string;
}

export default function SourceAttribution({ sources, className }: SourceAttributionProps) {
  return (
    <div className={cn('mt-6 pt-4 border-t border-ink-200', className)}>
      <div className="flex items-start gap-2 text-xs text-ink-500">
        <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold">Sources: </span>
          {sources.map((source, idx) => (
            <span key={idx}>
              {source.url ? (
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-600 hover:underline inline-flex items-center gap-0.5"
                >
                  {source.name}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span>{source.name}</span>
              )}
              {source.date && <span className="text-ink-400"> ({source.date})</span>}
              {idx < sources.length - 1 && <span className="text-ink-300">, </span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

