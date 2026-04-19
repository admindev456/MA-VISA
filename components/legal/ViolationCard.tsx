import { AlertTriangle, FileText, Scale } from 'lucide-react';
import { cn } from '@/lib/utils';
import Badge from '@/components/ui/Badge';
import type { LegalFramework } from '@/lib/types';

interface ViolationCardProps {
  title: string;
  framework: LegalFramework;
  statute: string;
  description: string;
  evidence?: string[];
  potentialPenalty?: string;
  className?: string;
}

export default function ViolationCard({
  title,
  framework,
  statute,
  description,
  evidence,
  potentialPenalty,
  className,
}: ViolationCardProps) {
  const frameworkConfig = {
    ata: { label: 'Anti-Terrorism Act', color: 'danger' as const },
    bsa: { label: 'Bank Secrecy Act', color: 'amber' as const },
    ofac: { label: 'OFAC Sanctions', color: 'navy' as const },
    ieepa: { label: 'IEEPA', color: 'navy' as const },
  };

  const config = frameworkConfig[framework];

  return (
    <div className={cn(
      'bg-white border border-ink-200 rounded-lg overflow-hidden',
      className
    )}>
      {/* Header */}
      <div className="p-4 border-b border-ink-100 bg-ink-50/50">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <Badge variant={config.color} className="mb-2">
                {config.label}
              </Badge>
              <h3 className="font-serif text-lg font-semibold text-ink-900">
                {title}
              </h3>
              <code className="text-sm font-mono text-ink-500 mt-1 block">
                {statute}
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <p className="text-sm text-ink-700 leading-relaxed">
          {description}
        </p>

        {/* Evidence list */}
        {evidence && evidence.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-ink-900 flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-ink-400" />
              Supporting Evidence
            </h4>
            <ul className="space-y-1">
              {evidence.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-ink-600">
                  <span className="text-ink-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Potential penalty */}
        {potentialPenalty && (
          <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-semibold text-amber-800">
                Potential Penalty:
              </span>
              <span className="text-sm text-amber-700">
                {potentialPenalty}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
