'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  entities, 
  getEntitiesByType, 
  getTypeLabel, 
  getTypeColor,
  EntityType 
} from '@/lib/data/entities';
import {
  CreditCardIcon,
  BuildingLibraryIcon,
  ShieldExclamationIcon,
  UserIcon,
  BuildingOffice2Icon,
  FunnelIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  LinkIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

const typeIcons: Record<EntityType, React.ComponentType<{ className?: string }>> = {
  network: CreditCardIcon,
  bank: BuildingLibraryIcon,
  militia: ShieldExclamationIcon,
  government: BuildingOffice2Icon,
  individual: UserIcon,
};

const typeFilters: { value: EntityType | 'all'; label: string }[] = [
  { value: 'all', label: 'All Entities' },
  { value: 'network', label: 'Networks' },
  { value: 'bank', label: 'Banks' },
  { value: 'militia', label: 'Militias' },
  { value: 'government', label: 'Government' },
  { value: 'individual', label: 'Individuals' },
];

export default function EntitiesPage() {
  const [activeFilter, setActiveFilter] = useState<EntityType | 'all'>('all');
  const [selectedEntity, setSelectedEntity] = useState<string | null>(null);

  const filteredEntities = activeFilter === 'all' 
    ? entities 
    : getEntitiesByType(activeFilter);

  const selected = selectedEntity 
    ? entities.find(e => e.id === selectedEntity) 
    : null;

  const getTypeBadge = (type: EntityType) => {
    const styles: Record<EntityType, string> = {
      network: 'bg-blue-100 text-blue-800',
      bank: 'bg-emerald-100 text-emerald-800',
      militia: 'bg-red-100 text-red-800',
      government: 'bg-slate-100 text-slate-800',
      individual: 'bg-purple-100 text-purple-800',
    };
    return styles[type];
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <header className="mb-10">
        <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest mb-4">
          Actors & Organizations
        </p>
        <h1 className="text-4xl font-serif font-bold text-neutral-900 leading-tight mb-4">
          Key Entities
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl">
          A detailed profile of the {entities.length} principal actors in the Iraqi card 
          financing scheme, including payment networks, financial institutions, militia groups, 
          government bodies, and designated individuals.
        </p>
      </header>

      {/* Entity Type Overview */}
      <section className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
        {typeFilters.filter(f => f.value !== 'all').map((filter) => {
          const count = getEntitiesByType(filter.value as EntityType).length;
          const IconComponent = typeIcons[filter.value as EntityType];
          return (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`card p-4 text-center transition-all hover:shadow-md ${
                activeFilter === filter.value ? 'ring-2 ring-amber-400' : ''
              }`}
            >
              <IconComponent className={`w-6 h-6 mx-auto mb-2 ${
                activeFilter === filter.value ? 'text-amber-600' : 'text-neutral-400'
              }`} />
              <div className="text-2xl font-serif font-bold text-neutral-900">{count}</div>
              <div className="text-xs text-neutral-500 uppercase tracking-wide">{filter.label}</div>
            </button>
          );
        })}
      </section>

      {/* Filters */}
      <section className="mb-8 no-print">
        <div className="flex items-center gap-3 mb-4">
          <FunnelIcon className="w-5 h-5 text-neutral-400" />
          <h2 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider">
            Filter by Type
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {typeFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`filter-chip ${
                activeFilter === filter.value 
                  ? 'filter-chip-active' 
                  : 'filter-chip-inactive'
              }`}
            >
              {filter.label}
              {filter.value !== 'all' && (
                <span className="ml-1 opacity-75">
                  ({getEntitiesByType(filter.value as EntityType).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Entity Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEntities.map((entity) => {
          const IconComponent = typeIcons[entity.type];
          return (
            <div 
              key={entity.id} 
              className={`card p-5 flex flex-col ${
                entity.designation ? 'border-l-4 border-l-red-500' : ''
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getTypeBadge(entity.type)}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`badge text-2xs ${getTypeBadge(entity.type)}`}>
                      {getTypeLabel(entity.type)}
                    </span>
                  </div>
                </div>
                {entity.designation && (
                  <span className="badge badge-danger text-2xs">
                    Designated
                  </span>
                )}
              </div>

              {/* Content */}
              <h3 className="text-lg font-serif font-semibold text-neutral-900 mb-1">
                {entity.name}
              </h3>
              {entity.shortName && (
                <p className="text-sm text-neutral-500 mb-2">
                  Also known as: <strong>{entity.shortName}</strong>
                </p>
              )}
              {entity.designation && (
                <p className="text-sm text-danger font-medium mb-2">
                  {entity.designation}
                </p>
              )}
              <p className="text-sm text-neutral-600 leading-relaxed mb-4 flex-grow">
                {entity.role}
              </p>

              {/* Financial Exposure (for networks) */}
              {entity.financialExposure && (
                <div className="mb-4 p-3 bg-red-50 rounded-lg">
                  <div className="text-xs text-red-600 uppercase tracking-wider font-semibold mb-1">
                    Est. Financial Exposure
                  </div>
                  <div className="text-lg font-serif font-bold text-danger">
                    {entity.financialExposure}
                  </div>
                </div>
              )}

              {/* Key Facts Preview */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-2">
                  Key Facts
                </h4>
                <ul className="space-y-1">
                  {entity.keyFacts.slice(0, 3).map((fact, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                      <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="line-clamp-1">{fact}</span>
                    </li>
                  ))}
                  {entity.keyFacts.length > 3 && (
                    <li className="text-sm text-neutral-400">
                      +{entity.keyFacts.length - 3} more facts...
                    </li>
                  )}
                </ul>
              </div>

              {/* Relationships Count */}
              {entity.relationships.length > 0 && (
                <div className="flex items-center gap-2 text-sm text-neutral-500 mt-auto pt-4 border-t border-neutral-100">
                  <LinkIcon className="w-4 h-4" />
                  {entity.relationships.length} documented relationships
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Network Diagram Placeholder */}
      <section className="mt-12 card p-6">
        <h2 className="text-xl font-serif font-semibold text-neutral-900 mb-4">
          Understanding the Relationships
        </h2>
        <div className="prose-legal space-y-4">
          <p className="text-neutral-700 leading-relaxed">
            The entities documented above form a complex web of financial, operational, and 
            command relationships that enabled the militia financing scheme. At the center 
            are <strong>Visa and Mastercard</strong>, who provided the global payment 
            infrastructure. Their Iraqi banking partners—<strong>Yana, ISC (Qi Card), and 
            First Iraqi Bank</strong>—served as the local issuers and acquirers.
          </p>
          <p className="text-neutral-700 leading-relaxed">
            The <strong>Popular Mobilization Forces (PMF)</strong> served as the umbrella 
            organization through which Iran-backed militias—including <strong>Kata'ib 
            Hezbollah, Asa'ib Ahl al-Haq, and Badr Organization</strong>—received salary 
            cards. These groups maintain direct command relationships with the <strong>IRGC-QF</strong>, 
            the ultimate beneficiary of the dollar arbitrage scheme.
          </p>
        </div>
        
        {/* Simplified Relationship Diagram */}
        <div className="mt-6 p-6 bg-neutral-50 rounded-xl">
          <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-4 text-center">
            Financial Flow Structure
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="card p-4 bg-blue-50 border-blue-200">
              <CreditCardIcon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-neutral-900">Visa / MC</div>
              <div className="text-xs text-neutral-500">Payment Networks</div>
            </div>
            <div className="text-2xl text-neutral-300">→</div>
            <div className="card p-4 bg-emerald-50 border-emerald-200">
              <BuildingLibraryIcon className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <div className="font-semibold text-neutral-900">Iraqi Banks</div>
              <div className="text-xs text-neutral-500">Yana, ISC, FIB</div>
            </div>
            <div className="text-2xl text-neutral-300">→</div>
            <div className="card p-4 bg-red-50 border-red-200">
              <ShieldExclamationIcon className="w-8 h-8 text-red-600 mx-auto mb-2" />
              <div className="font-semibold text-neutral-900">PMF / Militias</div>
              <div className="text-xs text-neutral-500">200,000+ cardholders</div>
            </div>
            <div className="text-2xl text-neutral-300">→</div>
            <div className="card p-4 bg-rose-50 border-rose-200">
              <ExclamationTriangleIcon className="w-8 h-8 text-rose-600 mx-auto mb-2" />
              <div className="font-semibold text-neutral-900">IRGC-QF</div>
              <div className="text-xs text-neutral-500">Ultimate Beneficiary</div>
            </div>
          </div>
        </div>
      </section>

      {/* Designated Entities Warning */}
      <section className="mt-8 card-danger p-6">
        <div className="flex items-start gap-4">
          <ExclamationTriangleIcon className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-danger mb-2">
              Sanctions Implications
            </h3>
            <p className="text-sm text-neutral-700 mb-4">
              Several entities profiled above are designated under U.S. sanctions programs, 
              including OFAC's SDN List and the State Department's FTO designations. Engaging 
              in financial transactions with these entities—or their agents—constitutes a 
              potential violation of U.S. law.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-danger">Kata'ib Hezbollah (FTO)</span>
              <span className="badge badge-danger">IRGC-QF (FTO)</span>
              <span className="badge badge-danger">Ali Ghulam (OFAC)</span>
              <span className="badge badge-danger">Al Baidani (OFAC)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="flex justify-between mt-10 pt-8 border-t border-neutral-200 no-print">
        <Link href="/evidence" className="btn btn-ghost">
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Evidence
        </Link>
        <Link href="/financial" className="btn btn-secondary">
          Financial Analysis
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </Link>
      </nav>
    </div>
  );
}
