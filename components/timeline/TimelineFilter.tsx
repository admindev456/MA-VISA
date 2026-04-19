'use client';

import FilterToggle from '@/components/ui/FilterToggle';
import type { TimelineCategory } from '@/lib/types';

interface TimelineFilterProps {
  selected: TimelineCategory[];
  onChange: (categories: TimelineCategory[]) => void;
}

const filterOptions = [
  { id: 'warning', label: 'Warnings', count: 0 },
  { id: 'action', label: 'Actions', count: 0 },
  { id: 'violation', label: 'Violations', count: 0 },
  { id: 'attack', label: 'Attacks', count: 0 },
  { id: 'regulatory', label: 'Regulatory', count: 0 },
];

export default function TimelineFilter({ selected, onChange }: TimelineFilterProps) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-ink-700 mb-2">
        Filter by category
      </label>
      <FilterToggle
        options={filterOptions}
        selected={selected}
        onChange={(ids) => onChange(ids as TimelineCategory[])}
        multiple
      />
    </div>
  );
}
