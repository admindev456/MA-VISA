'use client';

import { useState } from 'react';
import Link from 'next/link';
import { legalPrecedents } from '@/lib/data/legal';
import {
  BookOpenIcon,
  ScaleIcon,
  FunnelIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const tagFilters = [
  'All',
  'Proximate Cause',
  'Material Support',
  'Deliberate Indifference',
  'OFAC',
  'AML',
  'Aiding & Abetting',
  'SCOTUS',
];

export default function PrecedentsPage() {
  const [activeTag, setActiveTag] = useState('All');
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const filteredPrecedents = activeTag === 'All'
    ? legalPrecedents
    : legalPrecedents.filter(p => p.tags.includes(activeTag));

  const selected = selectedCase
    ? legalPrecedents.find(p => p.id === selectedCase)
    : null;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <header className="mb-10">
        <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest mb-4">
          Judicial & Enforcement Precedents
        </p>
        <h1 className="text-4xl font-serif font-bold text-ink-900 leading-tight mb-4">
          Legal Precedents
        </h1>
        <p className="text-xl text-ink-600 leading-relaxed max-w-3xl">
          A collection of {legalPrecedents.length} landmark cases and enforcement actions 
          that establish the legal standards applicable to claims against Visa and Mastercard 
          for terrorist financing facilitation.
        </p>
      </header>

      {/* Introduction */}
      <section className="card p-6 mb-10">
        <h2 className="text-lg font-serif font-semibold text-ink-900 mb-4">
          How These Precedents Apply
        </h2>
        <div className="prose-legal text-sm space-y-4">
          <p className="text-ink-700">
            The cases documented here define critical legal concepts that would govern any 
            litigation against the payment networks. These include the <strong>deliberate 
            indifference standard</strong> (Weiss), the <strong>fungibility doctrine</strong> for 
            financial support (Boim III), and the <strong>threshold for aiding and abetting</strong> 
            under the Justice Against Sponsors of Terrorism Act (Twitter v. Taamneh).
          </p>
          <p className="text-ink-700">
            The enforcement precedents—particularly HSBC, BNP Paribas, and TD Bank—demonstrate 
            that multi-billion dollar penalties are achievable when financial institutions 
            ignore regulatory warnings and allow illicit flows to continue for extended periods.
          </p>
        </div>
      </section>

      {/* Tag Filters */}
      <section className="mb-8 no-print">
        <div className="flex items-center gap-3 mb-4">
          <FunnelIcon className="w-5 h-5 text-ink-400" />
          <h2 className="text-sm font-semibold text-ink-700 uppercase tracking-wider">
            Filter by Topic
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {tagFilters.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`filter-chip ${
                activeTag === tag 
                  ? 'filter-chip-active' 
                  : 'filter-chip-inactive'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Precedents Grid */}
      <section className="grid md:grid-cols-2 gap-6">
        {filteredPrecedents.map((precedent) => (
          <div 
            key={precedent.id} 
            className="card-hover p-6 flex flex-col cursor-pointer"
            onClick={() => setSelectedCase(precedent.id)}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  {precedent.court.includes('Supreme') ? (
                    <ScaleIcon className="w-5 h-5 text-amber-700" />
                  ) : (
                    <BookOpenIcon className="w-5 h-5 text-amber-700" />
                  )}
                </div>
                <div>
                  <span className="text-sm text-ink-500">{precedent.court}</span>
                </div>
              </div>
              <span className="badge badge-slate">{precedent.year}</span>
            </div>

            {/* Content */}
            <h3 className="text-lg font-serif font-semibold text-ink-900 mb-2">
              {precedent.name}
            </h3>
            <p className="statute-ref mb-3">
              {precedent.citation}
            </p>
            <p className="text-sm text-ink-700 leading-relaxed mb-4 flex-grow">
              {precedent.summary}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-ink-100">
              {precedent.tags.map((tag, i) => (
                <span key={i} className="badge badge-gray">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Case Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 no-print">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 border-b border-ink-200">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="badge badge-slate">{selected.year}</span>
                  <span className="text-sm text-ink-500">{selected.court}</span>
                </div>
                <h2 className="text-2xl font-serif font-bold text-ink-900">
                  {selected.name}
                </h2>
                <p className="statute-ref mt-2">
                  {selected.citation}
                </p>
              </div>
              <button
                onClick={() => setSelectedCase(null)}
                className="p-2 text-ink-500 hover:text-ink-700 hover:bg-ink-100 rounded-lg transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              {/* Summary */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-ink-700 uppercase tracking-wider mb-3">
                  Summary
                </h3>
                <p className="text-ink-700 leading-relaxed">
                  {selected.summary}
                </p>
              </div>

              {/* Holding */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-ink-700 uppercase tracking-wider mb-3">
                  Key Holding
                </h3>
                <div className="card-warning p-4">
                  <p className="text-ink-700 leading-relaxed">
                    {selected.holding}
                  </p>
                </div>
              </div>

              {/* Relevance */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-ink-700 uppercase tracking-wider mb-3">
                  Relevance to Current Case
                </h3>
                <ul className="space-y-2">
                  {selected.relevance.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 bg-ink-50 rounded-lg">
                      <CheckCircleIcon className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-ink-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-sm font-semibold text-ink-700 uppercase tracking-wider mb-3">
                  Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selected.tags.map((tag, i) => (
                    <span key={i} className="badge badge-amber">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 p-6 border-t border-ink-200 bg-ink-50">
              <button
                onClick={() => setSelectedCase(null)}
                className="btn btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Key Takeaways */}
      <section className="mt-12 card p-6">
        <h2 className="text-xl font-serif font-semibold text-ink-900 mb-6">
          Key Legal Standards
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="prose-legal text-sm">
            <h3 className="font-semibold text-ink-900 mb-2">Deliberate Indifference (Weiss)</h3>
            <p className="text-ink-700">
              A financial institution acts with deliberate indifference when it "knows there 
              is a substantial probability that the organization engages in terrorism but... 
              does not care." This standard is met when networks continue processing 
              transactions after explicit regulatory warnings.
            </p>
          </div>
          <div className="prose-legal text-sm">
            <h3 className="font-semibold text-ink-900 mb-2">Fungibility Doctrine (Boim III)</h3>
            <p className="text-ink-700">
              Money given to any part of a terrorist organization is fungible—it frees up 
              other resources for violence. Networks need not trace specific dollars to 
              specific attacks; providing financial infrastructure that benefits FTOs 
              suffices for material support liability.
            </p>
          </div>
          <div className="prose-legal text-sm">
            <h3 className="font-semibold text-ink-900 mb-2">Culpable Participation (Taamneh)</h3>
            <p className="text-ink-700">
              While passive platform services may not constitute aiding and abetting, 
              <em>active</em> financial facilitation with knowledge crosses the threshold. 
              Reinstating non-compliant partners and offering incentives to boost 
              transaction volumes are affirmative acts beyond passive indifference.
            </p>
          </div>
          <div className="prose-legal text-sm">
            <h3 className="font-semibold text-ink-900 mb-2">Reckless Disregard (Epsilon)</h3>
            <p className="text-ink-700">
              Continued prohibited conduct after receiving a regulatory warning constitutes 
              "reckless disregard" for the sanctions program, triggering enhanced OFAC 
              penalties. The 22-month delay after Treasury warnings directly parallels 
              the Epsilon Electronics precedent.
            </p>
          </div>
        </div>
      </section>

      {/* Enforcement History Summary */}
      <section className="mt-8 card p-6 bg-ink-900 text-white">
        <h2 className="text-xl font-serif font-semibold mb-4">
          Enforcement Track Record
        </h2>
        <p className="text-sm opacity-90 mb-6">
          The enforcement precedents demonstrate that U.S. authorities have successfully 
          obtained multi-billion dollar penalties from financial institutions that ignored 
          warnings and allowed illicit flows to continue:
        </p>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-serif font-bold text-amber-400">$8.97B</div>
            <div className="text-sm opacity-75">BNP Paribas (2014)</div>
          </div>
          <div>
            <div className="text-2xl font-serif font-bold text-amber-400">$3.0B</div>
            <div className="text-sm opacity-75">TD Bank (2024)</div>
          </div>
          <div>
            <div className="text-2xl font-serif font-bold text-amber-400">$1.92B</div>
            <div className="text-sm opacity-75">HSBC (2012)</div>
          </div>
          <div>
            <div className="text-2xl font-serif font-bold text-amber-400">$1.1B</div>
            <div className="text-sm opacity-75">Standard Chartered (2019)</div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="flex justify-between mt-10 pt-8 border-t border-ink-200 no-print">
        <Link href="/financial" className="btn btn-ghost">
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Financial Analysis
        </Link>
        <Link href="/" className="btn btn-secondary">
          Back to Summary
          <ArrowLeftIcon className="w-4 h-4 ml-2 rotate-180" />
        </Link>
      </nav>
    </div>
  );
}
