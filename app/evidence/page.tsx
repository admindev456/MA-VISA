'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  evidenceDocuments, 
  getEvidenceByCategory, 
  getCategoryLabel, 
  getCategoryColor,
  EvidenceCategory 
} from '@/lib/data/evidence';
import {
  FolderOpenIcon,
  FunnelIcon,
  DocumentTextIcon,
  ExclamationTriangleIcon,
  BuildingLibraryIcon,
  ChartBarIcon,
  NewspaperIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  XMarkIcon,
  EyeIcon,
} from '@heroicons/react/24/outline';

const categoryIcons: Record<EvidenceCategory, React.ComponentType<{ className?: string }>> = {
  audit: DocumentTextIcon,
  warning: ExclamationTriangleIcon,
  congressional: BuildingLibraryIcon,
  financial: ChartBarIcon,
  media: NewspaperIcon,
};

const categoryFilters: { value: EvidenceCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All Documents' },
  { value: 'audit', label: 'Audits' },
  { value: 'warning', label: 'Warnings' },
  { value: 'congressional', label: 'Congressional' },
  { value: 'financial', label: 'Financial' },
  { value: 'media', label: 'Media' },
];

export default function EvidencePage() {
  const [activeFilter, setActiveFilter] = useState<EvidenceCategory | 'all'>('all');
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  const filteredDocs = activeFilter === 'all' 
    ? evidenceDocuments 
    : getEvidenceByCategory(activeFilter);

  const selectedDocument = selectedDoc 
    ? evidenceDocuments.find(d => d.id === selectedDoc) 
    : null;

  const getCategoryBadge = (category: EvidenceCategory) => {
    const styles: Record<EvidenceCategory, string> = {
      audit: 'bg-blue-100 text-blue-800',
      warning: 'bg-amber-100 text-amber-800',
      congressional: 'bg-emerald-100 text-emerald-800',
      financial: 'bg-purple-100 text-purple-800',
      media: 'bg-slate-100 text-slate-800',
    };
    return styles[category];
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <header className="mb-10">
        <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest mb-4">
          Primary Source Material
        </p>
        <h1 className="text-4xl font-serif font-bold text-neutral-900 leading-tight mb-4">
          Evidence Repository
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl">
          A comprehensive collection of {evidenceDocuments.length} primary documents forming the 
          evidentiary basis for potential liability claims, including internal audits, regulatory 
          warnings, congressional correspondence, and financial analyses.
        </p>
      </header>

      {/* Overview Cards */}
      <section className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
        {categoryFilters.filter(f => f.value !== 'all').map((filter) => {
          const count = getEvidenceByCategory(filter.value as EvidenceCategory).length;
          const IconComponent = categoryIcons[filter.value as EvidenceCategory];
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
            Filter by Category
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {categoryFilters.map((filter) => (
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
                  ({filter.value === 'all' 
                    ? evidenceDocuments.length 
                    : getEvidenceByCategory(filter.value as EvidenceCategory).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Document Grid */}
      <section className="grid md:grid-cols-2 gap-6">
        {filteredDocs.map((doc) => {
          const IconComponent = categoryIcons[doc.category];
          return (
            <div key={doc.id} className="card-hover p-6 flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getCategoryBadge(doc.category)}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`badge text-2xs ${getCategoryBadge(doc.category)}`}>
                      {getCategoryLabel(doc.category)}
                    </span>
                  </div>
                </div>
                <span className="text-sm text-neutral-500">{doc.date}</span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-serif font-semibold text-neutral-900 mb-2">
                {doc.title}
              </h3>
              <p className="text-sm text-neutral-500 mb-3">
                Source: <span className="font-medium">{doc.source}</span>
              </p>
              <p className="text-sm text-neutral-700 leading-relaxed mb-4 flex-grow">
                {doc.description}
              </p>

              {/* Key Findings Preview */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-2">
                  Key Findings ({doc.keyFindings.length})
                </h4>
                <ul className="space-y-1">
                  {doc.keyFindings.slice(0, 3).map((finding, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{finding}</span>
                    </li>
                  ))}
                  {doc.keyFindings.length > 3 && (
                    <li className="text-sm text-neutral-400">
                      +{doc.keyFindings.length - 3} more findings...
                    </li>
                  )}
                </ul>
              </div>

              {/* Actions */}
              <button
                onClick={() => setSelectedDoc(doc.id)}
                className="btn btn-secondary w-full mt-auto"
              >
                <EyeIcon className="w-4 h-4" />
                More Details
              </button>
            </div>
          );
        })}
      </section>

      {/* Document Modal */}
      {selectedDocument && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 no-print">
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 border-b border-neutral-200">
              <div>
                <span className={`badge text-2xs ${getCategoryBadge(selectedDocument.category)}`}>
                  {getCategoryLabel(selectedDocument.category)}
                </span>
                <h2 className="text-2xl font-serif font-bold text-neutral-900 mt-2">
                  {selectedDocument.title}
                </h2>
                <p className="text-sm text-neutral-500 mt-1">
                  {selectedDocument.date} · {selectedDocument.source}
                </p>
              </div>
              <button
                onClick={() => setSelectedDoc(null)}
                className="p-2 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <p className="text-neutral-700 leading-relaxed mb-6">
                {selectedDocument.description}
              </p>

              {/* Key Findings */}
              <div className="mb-6">
                <h3 className="text-lg font-serif font-semibold text-neutral-900 mb-4">
                  Key Findings
                </h3>
                <ul className="space-y-3">
                  {selectedDocument.keyFindings.map((finding, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 bg-neutral-50 rounded-lg">
                      <CheckCircleIcon className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Significance */}
              <div className="card-warning p-5 mb-6">
                <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider mb-2">
                  Legal Significance
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {selectedDocument.significance}
                </p>
              </div>

              {/* Citations */}
              {selectedDocument.citations && selectedDocument.citations.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-3">
                    Source Citations
                  </h3>
                  <div className="space-y-2">
                    {selectedDocument.citations.map((citation, i) => (
                      <p key={i} className="legal-citation">
                        {citation}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 p-6 border-t border-neutral-200 bg-neutral-50">
              <button
                onClick={() => setSelectedDoc(null)}
                className="btn btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Evidence Chain Explanation */}
      <section className="mt-12 card p-6">
        <h2 className="text-xl font-serif font-semibold text-neutral-900 mb-4">
          Establishing the Evidentiary Chain
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="prose-legal text-sm">
            <h3 className="font-semibold text-neutral-900 mb-2">Knowledge</h3>
            <p className="text-neutral-700">
              The <strong>Treasury Warnings</strong> and <strong>Yana Audit</strong> establish 
              that the networks had actual knowledge of the militia financing scheme and the 
              compliance failures at their Iraqi partners.
            </p>
          </div>
          <div className="prose-legal text-sm">
            <h3 className="font-semibold text-neutral-900 mb-2">Inaction</h3>
            <p className="text-neutral-700">
              The <strong>Timeline Events</strong> and <strong>Financial Data</strong> demonstrate 
              that despite this knowledge, the networks continued processing billions in 
              transactions for 22+ months.
            </p>
          </div>
          <div className="prose-legal text-sm">
            <h3 className="font-semibold text-neutral-900 mb-2">Harm</h3>
            <p className="text-neutral-700">
              The <strong>Tower 22 Attack</strong> and <strong>Congressional Record</strong> connect 
              the financing to lethal terrorist operations, establishing the proximate cause 
              required for ATA liability.
            </p>
          </div>
        </div>
      </section>

      {/* Comprehensive Treasury Warnings Report */}
      <section className="section-block mt-8">
        <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">U.S. Treasury Warnings to Visa and Mastercard Regarding Iraq PMF Scheme</h2>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          U.S. Treasury and Federal Reserve warnings to Visa and Mastercard regarding the Iraq militia payment card scheme occurred in <strong>multiple phases from May 2023 through early 2025</strong>, escalating from initial inquiries to specific intelligence briefings about militia involvement. The most critical warning came in <strong>fall 2023</strong> (approximately September-November 2023) when <strong>Treasury officials explicitly informed the card companies</strong> that Iraqi militias—including designated terrorist groups Kata'ib Hezbollah, Badr Brigade, and Asa'ib Ahl al-Haq—<strong>had acquired huge quantities of Mastercards and Visas, transported them to UAE and neighboring countries, and were withdrawing funds</strong> for sanctions evasion and terrorist financing.
        </p>
        
        <div className="p-4 bg-red-50 border-l-4 border-red-400 mb-6">
          <p className="text-red-900 leading-relaxed mb-3">
            Despite these explicit warnings detailing the scheme mechanics, both networks <strong>took months to significantly rein in transactions</strong>, which continued at <strong>$400 million to $1.1 billion monthly</strong> until March-April 2025—a delay of <strong>16-18 months</strong> after receiving specific intelligence about militia involvement.
          </p>
          <p className="text-red-900 leading-relaxed">
            In "recent days" before the May 31, 2025 Wall Street Journal publication, <strong>Treasury formally asked Iraq's Central Bank to block more than 200,000 cards used by militia members</strong> due to fraud concerns.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-6">Phase 1: Initial Regulatory Inquiries (May 2023)</h2>
        
        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Timeline: May 2023 (One Month After 2,900% Surge)</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>April 2023 Context</strong>: Cross-border Iraqi transactions surged from ~$50 million/month to <strong>$1.5 billion/month</strong>—a 2,900% increase "almost overnight"
        </p>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">May 2023 Warning:</p>
          <blockquote className="text-neutral-700 italic border-l-4 border-neutral-300 pl-4">
            "Federal Reserve Bank of New York and Treasury officials began asking Visa and Mastercard to explain the rising transactions"
          </blockquote>
        </div>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Content of Initial Inquiry</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The initial May 2023 contact represented <strong>regulatory questions</strong> rather than formal warnings, focused on understanding the dramatic volume increase:
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-2"><strong>Key Questions Posed:</strong></p>
        <ol className="list-decimal list-inside space-y-2 text-neutral-700 mb-6 ml-4">
          <li><strong>Volume explanation</strong>: Why did Iraqi cross-border transactions increase 2,900% in one month?</li>
          <li><strong>Due diligence</strong>: What issuing banks are driving the surge?</li>
          <li><strong>Customer profiles</strong>: Who are the cardholders conducting these transactions?</li>
          <li><strong>Geographic patterns</strong>: Where are transactions occurring (merchant locations)?</li>
          <li><strong>Risk assessment</strong>: What fraud detection systems flagged this surge?</li>
        </ol>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Regulatory Authority</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The <strong>Federal Reserve Bank of New York</strong> has unique jurisdiction over this issue because:
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6 ml-4">
          <li><strong>Iraq's dollar reserves</strong> (approximately $120 billion from oil sales) are held at the New York Fed</li>
          <li>Under a system created during the 2003 U.S. invasion, <strong>crates of hard currency are airlifted from New York to Iraq monthly</strong></li>
          <li>The <strong>Development Fund for Iraq (DFI)</strong>, transferred from NY Fed to Central Bank of Iraq in 2014, processes oil proceeds</li>
          <li>NY Fed operates the <strong>"dollar auction" platform</strong> through which Iraqi banks purchase dollars</li>
        </ul>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          <strong>Treasury Department's Role</strong>: Office of Foreign Assets Control (OFAC) enforces sanctions prohibiting transactions with designated terrorist groups including Kata'ib Hezbollah, Badr Organization, and Asa'ib Ahl al-Haq.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Network Response to Initial Inquiry</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-2"><strong>Evidence suggests networks provided explanations but took no enforcement action:</strong></p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6 ml-4">
          <li>Transactions remained elevated throughout summer and fall 2023</li>
          <li>No public statements or disclosures of unusual activity</li>
          <li>Continued partnering with Iraqi issuing banks despite warning</li>
        </ul>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Comparative Context: Western Union Public Disclosure</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>July 2023</strong>: Western Union publicly disclosed in Q2 2023 earnings call that it was having <strong>"regular discussions with policymakers in both the U.S. and Iraq about the elevated remittance volumes flowing through its network in Iraq"</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li>Western Union's Iraq volumes had surged to <strong>$1.7 billion in June 2023</strong></li>
          <li>The company cited elevated Iraq volumes as "primarily" driving upward revenue forecast revision</li>
          <li><strong>Public disclosure</strong> put industry on notice that Iraqi transactions were under regulatory scrutiny</li>
        </ul>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-amber-50 border-l-4 border-amber-400">
          <strong>Analysis:</strong> Western Union's transparency contrasts sharply with Visa and Mastercard's silence. While Western Union acknowledged the issue in public earnings statements, the card networks made no disclosures until the Wall Street Journal investigation 23 months later.
        </p>

        <h2 className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-6">Phase 2: Background Context - Electronic Transfer Platform Tightening (2022-2023)</h2>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">November 2022: Wire Transfer Crackdown</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          To understand why militias shifted to payment cards, the Treasury/Fed warnings occurred against backdrop of earlier enforcement:
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          <strong>November 2022</strong>: U.S. Treasury and Federal Reserve Bank of New York <strong>implemented stringent controls on Iraqi bank wire transfers</strong> through creation of electronic monitoring platform
        </p>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">Platform Mechanics:</p>
          <ul className="list-disc list-inside space-y-1 text-neutral-700">
            <li>Iraqi banks submit dollar transfer requests to Central Bank of Iraq</li>
            <li>CBI forwards requests to <strong>electronic platform</strong> managed by NY Fed</li>
            <li>Platform requires <strong>beneficiary disclosure</strong> (customer requesting transfer, final recipient, correspondent banks)</li>
            <li>NY Fed tracks funds <strong>"until they reach their end destination"</strong></li>
            <li><strong>U.S. Federal Reserve reviews and can reject suspicious transfers</strong></li>
          </ul>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>Rejection Rate</strong>: In first months of operation, <strong>NY Fed rejected 80% of transfer requests</strong> due to "doubts about the final recipient"
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>Impact</strong>: This platform <strong>"shut down a gaping loophole being used for fraud"</strong> by Iraqi banks that "lacked money-laundering safeguards"
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          <strong>Militia Response</strong>: With wire transfers blocked, militias <strong>shifted to payment cards</strong> as alternative dollar access method in early 2023, directly causing the April 2023 surge
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">July-August 2023: Bank Sanctions</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>July 19, 2023</strong>: U.S. Treasury and NY Fed <strong>banned 14 additional Iraqi banks from conducting dollar transactions</strong> (beyond 4 banned in September 2022 and November 2022)
        </p>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">Banned Banks Included:</p>
          <ul className="list-disc list-inside space-y-1 text-neutral-700">
            <li>Mustashar Islamic Bank</li>
            <li>Erbil Bank for Investment</li>
            <li>World Islamic Bank</li>
            <li>Al-Ansari Islamic Bank</li>
            <li>Iraqi Middle East Investment Bank</li>
            <li>Others (14 total)</li>
          </ul>
        </div>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">Treasury Official Quote:</p>
          <blockquote className="text-neutral-700 italic border-l-4 border-neutral-300 pl-4">
            "We have strong reason to suspect that at least some of these laundered funds could end up going to benefit either designated individuals or individuals who could be designated. [T]he primary sanctions risk...relates to Iran."
          </blockquote>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>Impact</strong>: This action <strong>blacklisted nearly a third of Iraq's 72 banks</strong>, leaving 22 of 72 banks unable to access dollars
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          <strong>Significance for Payment Cards</strong>: These wire transfer sanctions increased pressure on militias to use payment cards, further accelerating the scheme Visa and Mastercard were being questioned about.
        </p>

        <h2 className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-6">Phase 3: Specific Intelligence Briefing on Militia Involvement (Fall 2023)</h2>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Timeline: Fall 2023 (Approximately September-November 2023)</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          This represents the <strong>most critical and explicit warning</strong> provided to the networks.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Content of Fall 2023 Treasury Briefing</h3>
        
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-6">
          <p className="font-semibold text-red-900 mb-2">Wall Street Journal Direct Quote:</p>
          <blockquote className="text-red-800 italic border-l-4 border-red-300 pl-4">
            "The Iraqi militias acquired huge quantities of Mastercards and Visas loaded with funds, transported the cards to the United Arab Emirates and other neighboring countries and withdrew the money, Treasury officials informed the card companies last fall."
          </blockquote>
        </div>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Specific Intelligence Provided</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          Based on the reporting, Treasury officials provided <strong>detailed operational intelligence</strong> about:
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">1. Militia Identity</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-2"><strong>Named Organizations:</strong> Treasury specifically identified Iran-backed militia groups exploiting the scheme:</p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li><strong>Kata'ib Hezbollah</strong> (designated SDGT 2009, killed 3 U.S. service members January 2024)</li>
          <li><strong>Badr Brigade/Organization</strong> (Iran-backed militia)</li>
          <li><strong>Asa'ib Ahl al-Haq</strong> (designated SDGT)</li>
        </ul>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          <strong>Context Provided:</strong> These groups form part of what Treasury Secretary Scott Bessent called (in April 2025) a <strong>"clandestine network of financial facilitators"</strong> helping Iran evade sanctions
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">2. Scheme Mechanics - Card Acquisition</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-2"><strong>How Militias Obtained Cards:</strong></p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li><strong>Popular Mobilization Forces (PMF) salaries</strong>: More than 200,000 militia members receiving government salaries via Qi Cards by early 2025</li>
          <li><strong>Commander seizure</strong>: "Militia commanders took possession of rank and file members' cards"</li>
          <li><strong>Ghost employees</strong>: Commanders "padded the rolls with nonexistent or no-show troops to obtain more cards"</li>
          <li><strong>Card issuers with militia ties</strong>: Treasury identified specific Iraqi card issuers suspected of militia connections</li>
        </ul>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          <strong>Volume:</strong> Treasury conveyed that militias had acquired <strong>"huge quantities"</strong> of cards—later revealed to be <strong>more than 200,000 cards</strong> used by militia members
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">3. Smuggling Operations</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-2"><strong>Geographic Smuggling Routes:</strong> Treasury provided intelligence about card transportation:</p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">Primary Destination:</p>
            <p className="text-neutral-700"><strong>United Arab Emirates</strong> (particularly Dubai)</p>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">Secondary Destinations:</p>
            <ul className="list-disc list-inside text-neutral-700">
              <li>Turkey</li>
              <li>Jordan</li>
              <li>Other neighboring countries</li>
            </ul>
          </div>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-2"><strong>Smuggling Methods Documented:</strong></p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6 ml-4">
          <li><strong>Airport seizures</strong>: "Authorities arrested dozens of Iraqis carrying thousands of cards worth millions at airports and border crossings"</li>
          <li><strong>Cigarette pack concealment</strong>: "A traveler in Najaf was found with 300 cards hidden in cigarette packs"</li>
          <li><strong>Bulk smuggling</strong>: "More than two dozen Iraqis carrying a total of around 1,200 cash cards loaded with more than $5 million were arrested at Iraqi airports and border crossings"</li>
          <li><strong>Cross-border smuggling to Iran</strong>: "Multiple Iranians and Iraqis were caught by border guards while attempting to smuggle Mastercards to Iran"</li>
        </ul>

        {/* Visual: Logistics of Laundering - The Smuggling Vector */}
        <div className="my-8">
          <img 
            src="/visual.png" 
            alt="Logistics of Laundering: The Smuggling Vector - showing card acquisition, transport via smuggling, and repatriation through hawala networks" 
            className="w-full rounded-lg shadow-md border border-neutral-200"
          />
          <p className="text-sm text-neutral-500 text-center mt-2 italic">
            Documented smuggling methods: 300 cards concealed in cigarette packs (Najaf Arrest)
          </p>
        </div>

        {/* Visual: Regional Smuggling Routes Map */}
        <div className="my-8">
          <img 
            src="/map.png" 
            alt="Regional smuggling routes from Baghdad, Iraq to Dubai UAE (Primary Hub), with secondary routes to Istanbul, Turkey and Amman, Jordan" 
            className="w-full max-w-2xl mx-auto rounded-lg shadow-md border border-neutral-200"
          />
          <p className="text-sm text-neutral-500 text-center mt-2 italic">
            Card smuggling routes: Baghdad → Dubai (Primary), with secondary routes to Turkey and Jordan
          </p>
        </div>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">4. Withdrawal Patterns</h4>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">ATM Observations:</p>
          <blockquote className="text-neutral-700 italic border-l-4 border-neutral-300 pl-4">
            "Witnesses described Iraqis lining up day and night at ATMs in Dubai with stacks of prepaid cash cards, withdrawing money nonstop"
          </blockquote>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-2"><strong>Evidence Shared:</strong> Treasury likely provided:</p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li><strong>UAE financial intelligence</strong> showing Iraqi cardholders conducting high-volume ATM withdrawals</li>
          <li><strong>Transaction data</strong> showing same cards used repeatedly at multiple ATMs</li>
          <li><strong>Geographic clustering</strong> of withdrawals in UAE free trade zones and commercial districts</li>
        </ul>
        
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-4">
          <p className="font-semibold text-red-900 mb-2">Transaction Data Statistics:</p>
          <blockquote className="text-red-800 italic border-l-4 border-red-300 pl-4">
            "One in five transactions by foreign cardholders in the UAE in 2024 involved an Iraqi debit or cash card, even though only one in 250 travelers were from Iraq"
          </blockquote>
          <p className="text-red-700 mt-2 text-sm">
            <strong>Analysis:</strong> This 20% transaction share vs. 0.4% traveler share represents a <strong>50x overrepresentation</strong>, demonstrating statistically impossible legitimate usage patterns.
          </p>
        </div>

        {/* Visual: UAE Statistical Anomaly */}
        <div className="my-8">
          <img 
            src="/UAE.png" 
            alt="Statistical anomaly visualization: 20% (1 in 5) of ALL foreign transactions in UAE were Iraqi cards, but only 0.4% (1 in 250) of travelers were Iraqi - a 50x overrepresentation" 
            className="w-full max-w-3xl mx-auto rounded-lg shadow-md border border-neutral-200"
          />
          <p className="text-sm text-neutral-500 text-center mt-2 italic">
            The 50x overrepresentation: Statistical impossibility demonstrating systematic abuse
          </p>
        </div>

        {/* Visual: UAE Transaction Hotspot Map */}
        <div className="my-8">
          <img 
            src="/UAEmap.png" 
            alt="Map of Dubai showing transaction concentration in DIFC, Free Trade Zones, and Commercial Districts with data anomaly callout" 
            className="w-full max-w-3xl mx-auto rounded-lg shadow-md border border-neutral-200"
          />
          <p className="text-sm text-neutral-500 text-center mt-2 italic">
            Geographic concentration of Iraqi card transactions in Dubai free trade zones and commercial districts
          </p>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-amber-50 border-l-4 border-amber-400">
          <strong>Merchant Categories:</strong> "Many payments went to businesses in free trade zones or high-end jewelers rather than the usual tourist spots"—indicating <strong>value concentration</strong> (jewelry as portable wealth) and <strong>low-scrutiny environments</strong> (free trade zones have relaxed controls), both money laundering red flags.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">5. Currency Arbitrage Scheme</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-2"><strong>Mechanism Explained:</strong> Treasury described the profit model exploiting Iraq's dual exchange rates:</p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900">Official Rate:</p>
            <p className="text-neutral-700">~1,320 dinars per dollar (government-controlled)</p>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900">Unofficial/Black Market Rate:</p>
            <p className="text-neutral-700">~1,600 dinars per dollar at peak in 2023, ~1,400 in 2024</p>
          </div>
        </div>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">Arbitrage Process:</p>
          <ol className="list-decimal list-inside space-y-1 text-neutral-700">
            <li>Buy Iraqi prepaid card using dinars at unofficial rate (~1,600:1)</li>
            <li>Card loaded with dollars at official rate (1,320:1)</li>
            <li>Smuggle card to UAE</li>
            <li>Withdraw dollars from ATM</li>
            <li>Return cash to Iraq via <strong>hawala</strong> networks or electronic transfer</li>
            <li>Convert dollars back to dinars at unofficial rate (1,600:1)</li>
            <li><strong>Profit: Up to 21% on each cycle</strong></li>
          </ol>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          <strong>Scale:</strong> Iraqi cardholders engaging in scheme made <strong>approximately $450 million in profit in 2023 alone</strong>
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">6. Merchant Collusion Networks</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-3"><strong>Fake Transaction Processing:</strong> Treasury informed networks about sophisticated merchant fraud:</p>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">UAE Merchant Scenario:</p>
          <blockquote className="text-neutral-700 italic border-l-4 border-neutral-300 pl-4">
            "Bankers described a scenario in which a luxury goods shop in the UAE would charge a Visa or Mastercard $5,000 even though no sale occurred. For a 5% fee, the shop would hand over the cash or the equivalent in UAE dirhams."
          </blockquote>
        </div>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">Process:</p>
          <ol className="list-decimal list-inside space-y-1 text-neutral-700">
            <li>Iraqi cardholder enters UAE merchant</li>
            <li>Merchant charges $5,000 to card (no actual purchase)</li>
            <li>Merchant dispenses $4,750 cash (keeping 5% commission = $250)</li>
            <li>Card company debits at official Iraqi rate</li>
            <li>Funds transferred back to Iraq for currency conversion</li>
          </ol>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>Scale:</strong> Mastercard eventually removed <strong>4,000 UAE merchants</strong> in March 2025—suggesting Treasury identified thousands of colluding businesses.
        </p>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-6">
          <p className="font-semibold text-neutral-900 mb-2">POS Farms:</p>
          <blockquote className="text-neutral-700 italic border-l-4 border-neutral-300 pl-4">
            "Eventually, scammers acquired point-of-sale (POS) machines commonly used by restaurants and shops... At so-called POS farms, they processed fake transactions on dozens of devices, often using virtual private networks (VPNs) to hide their locations"
          </blockquote>
          <p className="text-neutral-600 mt-2 text-sm">
            <strong>Technology:</strong> Use of <strong>VPNs</strong> to mask geographic location meant transactions appeared to originate in legitimate jurisdictions, defeating basic geographic screening.
          </p>
        </div>

        {/* Visual: POS Farms Illustration */}
        <div className="my-8">
          <img 
            src="/phones.png" 
            alt="POS Farm illustration showing clustered terminals with VPN routers for obfuscation, processing fake transactions continuously" 
            className="w-full rounded-lg shadow-md border border-neutral-200"
          />
          <p className="text-sm text-neutral-500 text-center mt-2 italic">
            "Witnesses described Iraqis lining up day and night... inserting one card after another."
          </p>
        </div>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">7. Funds Usage - Terrorism Financing</h4>
        
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-4">
          <p className="font-semibold text-red-900 mb-2">Treasury Assessment:</p>
          <blockquote className="text-red-800 italic border-l-4 border-red-300 pl-4">
            "The Treasury told WSJ that the militias likely used the financial graft to buy weapons and finance terror operations. The cash was also likely distributed among the cardholders for their personal use."
          </blockquote>
        </div>
        
        <div className="callout-danger mb-4">
          <p className="font-medium text-red-900 mb-1">Specific Threat:</p>
          <p className="text-red-800">Kata'ib Hezbollah, one of the identified militia groups exploiting cards, <strong>killed three U.S. service members</strong> in January 2024 drone attack at Tower 22 in Jordan—<strong>during the period cards were being processed</strong>.</p>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-2"><strong>Operational Impact:</strong> The funds facilitated:</p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6 ml-4">
          <li><strong>Weapons procurement</strong></li>
          <li><strong>Terror operations</strong> (including attacks on U.S. forces)</li>
          <li><strong>Salaries</strong> for militia members</li>
          <li><strong>Personal enrichment</strong> of commanders</li>
        </ul>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">8. Qi Card Concern</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>Specific Card System Flagged:</strong> Treasury specifically highlighted <strong>Qi Card</strong> (Iraq's dominant payment card issued by International Smart Card) as particularly concerning:
        </p>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">Usage Surge:</p>
          <ul className="list-disc list-inside space-y-1 text-neutral-700">
            <li><strong>Early 2023</strong>: ~$10 million/month</li>
            <li><strong>Early 2025</strong>: &gt;$500 million/month</li>
            <li><strong>5,000% increase over 2 years</strong></li>
          </ul>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-2"><strong>PMF Integration:</strong></p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li>Qi Card issued to <strong>200,000+ PMF militia members</strong> receiving government salaries</li>
          <li>PMF members' cards gave militias "significant leverage over the illicit card trade"</li>
          <li>Some commanders "seized rank and file members' cards" to centralize control</li>
        </ul>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          <strong>Issuer:</strong> International Smart Card (ISC), whose founder <strong>Bahaa Abdul Hadi was arrested September 2020</strong> on corruption and money laundering charges
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Network Fees - Financial Motive</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          Treasury likely also informed networks of their <strong>direct financial benefit</strong> from the scheme:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">Fee Structure:</p>
            <p className="text-neutral-700">Visa and Mastercard charge <strong>1% to 1.4% on cross-border transactions</strong> (or more in high-risk markets)</p>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">2023 Revenue Estimate:</p>
            <ul className="list-disc list-inside text-neutral-700">
              <li>Transaction volume: ~$9-12 billion</li>
              <li>Network fees: <strong>~$120 million combined</strong> ($60M each)</li>
            </ul>
          </div>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-amber-50 border-l-4 border-amber-400">
          <strong>Implication:</strong> Treasury could argue networks had <strong>financial incentive to continue processing</strong> despite warnings—monthly fees of $5-10 million per network created motive to delay enforcement.
        </p>

        <h2 className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-6">Phase 4: Regular Meetings Throughout 2024</h2>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Timeline: January 2024 - March 2025</h3>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">Meeting Structure:</p>
          <blockquote className="text-neutral-700 italic border-l-4 border-neutral-300 pl-4">
            "They [Treasury and NY Fed] held regular meetings about the Iraqi market that also included Iraqi central bank officials in 2024 and early this year."
          </blockquote>
        </div>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Participants</h3>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">U.S. Government:</p>
            <ul className="list-disc list-inside text-neutral-700 text-sm">
              <li>Treasury Department officials (likely OFAC and Terrorist Financing unit)</li>
              <li>Federal Reserve Bank of New York officials</li>
            </ul>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">Payment Networks:</p>
            <ul className="list-disc list-inside text-neutral-700 text-sm">
              <li>Visa representatives (compliance, risk, regional management)</li>
              <li>Mastercard representatives (compliance, risk, regional management)</li>
            </ul>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">Iraqi Government:</p>
            <ul className="list-disc list-inside text-neutral-700 text-sm">
              <li>Central Bank of Iraq officials</li>
            </ul>
          </div>
        </div>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Meeting Content (Inferred)</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-2">While specific agendas are not public, the meetings likely covered:</p>
        <ol className="list-decimal list-inside space-y-2 text-neutral-700 mb-6 ml-4">
          <li><strong>Transaction volume monitoring</strong>: Monthly updates on Iraqi cross-border card payments</li>
          <li><strong>Enforcement progress</strong>: Network reports on steps taken to address militia involvement</li>
          <li><strong>Iraqi regulatory measures</strong>: CBI updates on domestic controls (withdrawal limits, card caps)</li>
          <li><strong>Intelligence sharing</strong>: Updated information on arrested smugglers, seized cards, identified merchants</li>
          <li><strong>Coordination</strong>: Alignment between U.S. regulators, networks, and Iraqi authorities</li>
        </ol>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Significance of "Regular Meetings"</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>Frequency:</strong> "Regular" suggests <strong>monthly or quarterly</strong> meetings throughout 2024—potentially 8-12 meetings total
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-2"><strong>Accountability:</strong> The structured meeting cadence demonstrates:</p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6 ml-4">
          <li>Networks were <strong>repeatedly reminded</strong> of the issue</li>
          <li>Treasury/Fed were <strong>actively monitoring</strong> network response</li>
          <li>Networks had <strong>multiple opportunities</strong> to report progress</li>
          <li>Delays were <strong>deliberate choices</strong>, not lack of awareness</li>
        </ul>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Continued High Transaction Volumes</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">Despite "regular meetings" throughout 2024:</p>
        
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-4">
          <blockquote className="text-red-800 italic border-l-4 border-red-300 pl-4">
            "Yet after being informed by Treasury of the armed groups' involvement, the card companies took months to significantly rein in the transactions—which came down from their peak but still ranged from around $400 million to $1.1 billion a month until earlier this year."
          </blockquote>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-amber-50 border-l-4 border-amber-400">
          <strong>2024 Growth:</strong> Iraqi cross-border card transactions were <strong>up approximately 60% compared to 2023</strong>. During year of "regular meetings," transaction volumes <strong>increased</strong> rather than decreased—networks' fee revenue grew from ~$120M (2023) to ~$192M (2024).
        </p>

        <h2 className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-6">Phase 5: Product-Specific Interventions (Early 2024)</h2>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Visa Direct Suspension (After 10 Weeks)</h3>
        
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900">Product:</p>
            <p className="text-neutral-700">Visa Direct instant money transfer service</p>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900">Iraqi Partner:</p>
            <p className="text-neutral-700">First Iraqi Bank</p>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900">Launch:</p>
            <p className="text-neutral-700">Early 2024</p>
          </div>
        </div>
        
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-4">
          <p className="font-semibold text-red-900 mb-2">Abuse Pattern Detected:</p>
          <blockquote className="text-red-800 italic border-l-4 border-red-300 pl-4">
            "Over just two months, First Iraqi Bank Visa cardholders sent $1.2 billion to Dubai, Turkey and other places... One single cardholder repeatedly transferred more than $5 million per day to 11 accounts in Indonesia"
          </blockquote>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-2">
          <strong>Treasury/Fed Response:</strong> "Raised concerns about the huge transfers"
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          <strong>Visa Action:</strong> "Halted the bank's use of the service after 10 weeks"
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-amber-50 border-l-4 border-amber-400">
          <strong>Analysis:</strong> <strong>$5 million+ daily</strong> transfers to <strong>11 Indonesian accounts</strong> from <strong>one cardholder</strong> represents obvious money laundering. <strong>10-week delay</strong> before suspension (allowing <strong>~$1.2 billion</strong> to transfer) demonstrates inadequate real-time monitoring. Basic transaction monitoring should flag $5M daily transfers <strong>immediately</strong>, not after 70 days.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Yana Banking Services Audit (August 2023)</h3>
        
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900">Conducted By:</p>
            <p className="text-neutral-700">Mastercard Global Compliance Team</p>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900">Target:</p>
            <p className="text-neutral-700">Yana Banking Services (Erbil-based Iraqi card issuer)</p>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900">Method:</p>
            <p className="text-neutral-700">Virtual review</p>
          </div>
        </div>
        
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-4">
          <p className="font-semibold text-red-900 mb-2">Findings (from internal audit report):</p>
          <ul className="space-y-2 text-red-800">
            <li className="italic border-l-4 border-red-300 pl-4">"No customer risk rating is performed, and no risk ratings were reflected on eight cardholder and three merchant files tested during the review process"</li>
            <li className="italic border-l-4 border-red-300 pl-4">"Ineffective suspicious activity monitoring and reporting" aimed at preventing fraud</li>
            <li className="italic border-l-4 border-red-300 pl-4">"No evidence that customers were being screened to ensure they weren't under U.S. sanctions"—described as "a requirement under its licensing agreement with Mastercard"</li>
            <li className="italic border-l-4 border-red-300 pl-4">"Ineffective anti-money-laundering safeguards"</li>
          </ul>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-2">
          <strong>Classification:</strong> Violations classified as <strong>"high priority"</strong>
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-2">
          <strong>Enforcement:</strong> Yana <strong>"banned from issuing new Mastercard-branded cards until it corrected"</strong> violations
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          <strong>Resolution:</strong> <strong>"The suspension was later lifted after the problems were addressed"</strong>
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-amber-50 border-l-4 border-amber-400">
          <strong>Significance:</strong> This internal audit demonstrates: Mastercard <strong>knew</strong> its Iraqi partners had <strong>zero sanctions screening</strong>; Violations were <strong>"high priority"</strong> (most serious classification); Mastercard <strong>reinstated</strong> the partner after purported fixes rather than permanent termination; Decision to reinstate prioritized business continuity over compliance risk.
        </p>

        <h2 className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-6">Phase 6: Formal Treasury Request (Late May 2025)</h2>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Timeline: "Recent Days" Before May 31, 2025</h3>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">Wall Street Journal Quote:</p>
          <blockquote className="text-neutral-700 italic border-l-4 border-neutral-300 pl-4">
            "In recent days, Treasury formally asked the Iraqi central bank to block the more than 200,000 cards used by militia members due to fraud concerns."
          </blockquote>
        </div>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Request Content</h3>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">Request Details:</p>
            <ul className="list-disc list-inside space-y-1 text-neutral-700">
              <li><strong>Recipient:</strong> Central Bank of Iraq (Governor Ali al-Allaq)</li>
              <li><strong>Formal Request:</strong> Block <strong>200,000+ cards</strong> identified as used by militia members</li>
              <li><strong>Rationale:</strong> <strong>"Fraud concerns"</strong>—diplomatic phrasing for sanctions evasion and terrorism financing</li>
              <li><strong>Card System Targeted:</strong> Request likely focused on <strong>Qi Cards</strong> issued to Popular Mobilization Forces members</li>
            </ul>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">Legal Authority:</p>
            <ul className="list-disc list-inside space-y-1 text-neutral-700">
              <li><strong>International Emergency Economic Powers Act (IEEPA)</strong> - Treasury authority to block transactions involving sanctioned persons</li>
              <li><strong>Executive Orders</strong> designating Iraqi militias as SDGTs (Specially Designated Global Terrorists)</li>
              <li><strong>Bilateral agreements</strong> between U.S. and Iraq regarding dollar access</li>
            </ul>
          </div>
        </div>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Iraqi Response</h3>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">Qi Card Statement:</p>
          <blockquote className="text-neutral-700 italic border-l-4 border-neutral-300 pl-4">
            International Smart Card claimed: "No longer provides any services to the Popular Mobilization Forces (PMF)"
          </blockquote>
        </div>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">Bahaa Abdul Hadi (ISC Founder) Response:</p>
          <ul className="space-y-2 text-neutral-700">
            <li className="italic border-l-4 border-neutral-300 pl-4">Company "had taken steps to reassure the Treasury and the Federal Reserve that no cardholders were under US sanctions and that no militia members had Qi Cards usable outside Iraq"</li>
            <li className="italic border-l-4 border-neutral-300 pl-4">"The only service provided to PMF cardholders was the transfer of outbound salaries from their employer"</li>
          </ul>
        </div>
        
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg mb-6">
          <p className="font-semibold text-amber-900 mb-2">U.S./Iraqi Official Rebuttal:</p>
          <blockquote className="text-amber-800 italic border-l-4 border-amber-400 pl-4">
            "U.S. and Iraqi officials said funds could easily be transferred to other cards that work internationally"
          </blockquote>
          <p className="text-amber-700 mt-2 text-sm">
            <strong>Analysis:</strong> ISC's defense—that PMF cards only work domestically—is undermined by ease of transferring balances to international cards.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-6">Network Public Statements in Response to Warnings</h2>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Mastercard: Seth Eisen (Spokesman)</h3>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">Statement on Response Timeline:</p>
          <blockquote className="text-neutral-700 italic border-l-4 border-neutral-300 pl-4">
            "Ongoing government engagement is built into our programs so that we can quickly look into claims, identify the situation, and take action as appropriate. That's exactly what we have done with the US government on this matter from a very early stage."
          </blockquote>
          <p className="text-neutral-600 mt-2 text-sm">
            <strong>Analysis:</strong> Claim of "quickly" acting "from a very early stage" is contradicted by: <strong>May 2023</strong>: Initial warnings; <strong>Fall 2023</strong>: Explicit militia intelligence; <strong>Throughout 2024</strong>: Regular meetings, continued high volumes; <strong>March 2025</strong>: First large-scale blocking (22 months after initial warning)
          </p>
        </div>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">Statement on Qi Card Blocking:</p>
          <blockquote className="text-neutral-700 italic border-l-4 border-neutral-300 pl-4">
            "Information about Qi Card and International Smart Card that Mastercard received from government agencies was compiled with existing information and actioned accordingly."
          </blockquote>
          <p className="text-neutral-600 mt-2 text-sm">
            <strong>Analysis:</strong> Passive phrasing suggests Mastercard required "information from government agencies" rather than detecting fraud independently.
          </p>
        </div>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-6">
          <p className="font-semibold text-neutral-900 mb-2">Statement on Yana Reinstatement:</p>
          <blockquote className="text-neutral-700 italic border-l-4 border-neutral-300 pl-4">
            "The goal is to ensure they avoid further violations of Mastercard standards or regulatory requirements. We reserve the right to revisit any allegation to ensure this compliance."
          </blockquote>
          <p className="text-neutral-600 mt-2 text-sm">
            <strong>Analysis:</strong> Framing as "ensuring future compliance" rather than addressing systemic control failures.
          </p>
        </div>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Visa: Fletcher Cook (Spokeswoman)</h3>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">Statement on Compliance Commitment:</p>
          <blockquote className="text-neutral-700 italic border-l-4 border-neutral-300 pl-4">
            "Central to our operations is a commitment to ensuring that transactions on our network do not violate the law. When we identify or are alerted to any suspicious or illegal activity, we take action."
          </blockquote>
          <p className="text-neutral-600 mt-2 text-sm">
            <strong>Analysis:</strong> Phrase "when we identify <strong>or are alerted to</strong>" [emphasis added] concedes Visa did not independently identify the 2,900% surge—they required external alerts.
          </p>
        </div>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-6">
          <p className="font-semibold text-neutral-900 mb-2">General Treasury Statement:</p>
          <blockquote className="text-neutral-700 italic border-l-4 border-neutral-300 pl-4">
            "In line with administration priorities and to preserve the strength of the U.S. dollar, Treasury will continue to be vigilant about threats to the U.S. financial system, including by Iran-aligned actors."
          </blockquote>
        </div>

        <h2 className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-6">What Treasury Warnings Did NOT Contain</h2>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Absence of Formal Enforcement Action (Until October 2025)</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          Treasury warnings from May 2023 through May 2025 were <strong>advisory</strong> rather than <strong>enforcement actions</strong>:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">What Did NOT Happen:</p>
            <ul className="list-disc list-inside space-y-1 text-neutral-700">
              <li><strong>No Subpoenas Issued:</strong> No formal document requests or testimony demands to networks</li>
              <li><strong>No Civil Penalty Notices:</strong> OFAC did not issue pre-penalty notices or findings of violation</li>
              <li><strong>No Consent Orders:</strong> No settlements or deferred prosecution agreements during warning period</li>
              <li><strong>No Public Designations of Networks:</strong> Visa and Mastercard were not publicly named as targets</li>
            </ul>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">Iraqi Entities Sanctioned (October 2025):</p>
            <ul className="list-disc list-inside space-y-1 text-neutral-700">
              <li><strong>October 8, 2025:</strong> OFAC designated three Iraqi banking executives (Ali Ghulam, Ali and Aqeel Meften)</li>
              <li><strong>October 8, 2025:</strong> OFAC designated Muhandis General Company and Baladna Agricultural Investments (PMF fronts)</li>
            </ul>
          </div>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>Visa/Mastercard Partners Blacklisted:</strong> Treasury blacklisted <strong>three Iraqi card issuers</strong> (all Visa/Mastercard partners):
        </p>
        <ol className="list-decimal list-inside space-y-2 text-neutral-700 mb-6 ml-4">
          <li><strong>Al Saqi Electronic Payment Company</strong> (affiliated with Holy Shrine of Al Abbas in Karbala)</li>
          <li>Two others (not publicly named in available sources)</li>
        </ol>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-amber-50 border-l-4 border-amber-400">
          <strong>Significance:</strong> Treasury targeted <strong>networks' Iraqi partners</strong> but not the networks themselves—a strategic choice to pressure compliance without destabilizing payment systems.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Limited Specificity on Individual Transactions</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>Aggregate Intelligence:</strong> Treasury provided <strong>scheme-level intelligence</strong> (how militias operate, smuggling routes, merchant collusion) but likely did <strong>not</strong> provide:
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li><strong>Card-by-card lists</strong> of specific militia members</li>
          <li><strong>Transaction-level data</strong> showing specific prohibited purchases</li>
          <li><strong>Real-time alerts</strong> on individual suspicious transactions as they occurred</li>
        </ul>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          <strong>Reason:</strong> U.S. intelligence agencies protecting <strong>sources and methods</strong>—detailed transaction data would reveal: UAE/Jordan/Turkey intelligence cooperation; Surveillance capabilities; Informants within militia networks.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">No Legal Determination Letters</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          Treasury did <strong>not</strong> issue formal legal opinions stating:
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li>"Processing Iraqi militia cards violates IEEPA"</li>
          <li>"Visa and Mastercard are in violation of sanctions"</li>
          <li>"Networks must immediately cease all Iraqi operations"</li>
        </ul>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-amber-50 border-l-4 border-amber-400">
          <strong>Strategic Rationale:</strong> Treasury preferred <strong>cooperative approach</strong>—working with networks to implement blocking rather than forcing blanket termination of Iraq market, which would: Harm legitimate Iraqi businesses and individuals; Create diplomatic crisis with Iraqi government; Drive transactions to unregulated channels.
        </p>

        <h2 className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-6">Timeline Comparison: Treasury Actions vs. Network Responses</h2>
        
        <div className="overflow-x-auto mb-6">
          <table className="data-table w-full">
            <thead>
              <tr>
                <th className="text-left">Date</th>
                <th className="text-left">Treasury/Fed Action</th>
                <th className="text-left">Visa/Mastercard Response</th>
                <th className="text-left">Transaction Volume</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>April 2023</strong></td>
                <td>2,900% surge occurs</td>
                <td>None documented</td>
                <td><strong>$1.5B/month</strong></td>
              </tr>
              <tr className="bg-amber-50">
                <td><strong>May 2023</strong></td>
                <td><strong>Begin questioning networks</strong></td>
                <td>Unknown</td>
                <td>$400M-$1.1B/month</td>
              </tr>
              <tr>
                <td><strong>July 2023</strong></td>
                <td>Ban 14 Iraqi banks from USD transactions</td>
                <td>Western Union discloses publicly; Visa/MC silent</td>
                <td>$400M-$1.1B/month</td>
              </tr>
              <tr>
                <td><strong>August 2023</strong></td>
                <td>N/A</td>
                <td><strong>Mastercard audits Yana, finds zero screening</strong></td>
                <td>$400M-$1.1B/month</td>
              </tr>
              <tr className="bg-amber-50">
                <td><strong>Fall 2023</strong></td>
                <td><strong>Explicit briefing on militia involvement, card smuggling</strong></td>
                <td>Unknown</td>
                <td>$400M-$1.1B/month</td>
              </tr>
              <tr>
                <td><strong>Throughout 2024</strong></td>
                <td><strong>Regular meetings with networks + CBI</strong></td>
                <td>First Iraqi Bank Visa Direct abuse ($1.2B over 10 weeks)</td>
                <td><strong>Up 60% vs. 2023</strong> (~$1.2B/month avg)</td>
              </tr>
              <tr className="bg-emerald-50">
                <td><strong>March 2025</strong></td>
                <td>N/A</td>
                <td><strong>Mastercard blocks 100K+ cards, 4K merchants</strong></td>
                <td>Declining</td>
              </tr>
              <tr className="bg-emerald-50">
                <td><strong>April 2025</strong></td>
                <td>N/A</td>
                <td><strong>Visa blocks 70K cards, 5K vendors</strong></td>
                <td>Declining</td>
              </tr>
              <tr>
                <td><strong>Late May 2025</strong></td>
                <td><strong>Formal request to CBI: block 200K militia cards</strong></td>
                <td>N/A</td>
                <td>Reduced to $300M cap</td>
              </tr>
              <tr>
                <td><strong>October 2025</strong></td>
                <td><strong>OFAC sanctions 3 Iraqi bankers, 2 PMF companies</strong></td>
                <td>N/A</td>
                <td>Under controls</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-6">Legal Significance of Warning Content</h2>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Actual Knowledge Established</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The specificity of Treasury warnings establishes <strong>actual knowledge</strong> rather than constructive knowledge:
        </p>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-6">
          <p className="font-semibold text-neutral-900 mb-2">Elements Conveyed:</p>
          <ol className="list-decimal list-inside space-y-1 text-neutral-700">
            <li><strong>Identity of bad actors:</strong> Kata'ib Hezbollah, Badr Brigade, Asa'ib Ahl al-Haq (all designated)</li>
            <li><strong>Mechanism of fraud:</strong> Card smuggling, ATM withdrawals, merchant collusion, currency arbitrage</li>
            <li><strong>Geographic scope:</strong> UAE, Turkey, Jordan as primary destinations</li>
            <li><strong>Scale:</strong> Hundreds of millions monthly, 200,000+ cards, 4,000+ colluding merchants</li>
            <li><strong>End use:</strong> Weapons procurement, terrorism financing, personal enrichment</li>
            <li><strong>Specific products:</strong> Qi Card, Visa Direct flagged by name</li>
          </ol>
        </div>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Failure to Act = Reckless Disregard</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          OFAC and BSA enforcement standards define <strong>"willful" violations</strong> to include <strong>reckless disregard</strong>:
        </p>
        
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-6">
          <p className="font-semibold text-red-900 mb-2">Elements of Reckless Disregard:</p>
          <ol className="list-decimal list-inside space-y-1 text-red-800">
            <li>✓ <strong>High probability of violation:</strong> Treasury explicitly stated militias (designated SDGTs) were using cards</li>
            <li>✓ <strong>Deliberate avoidance:</strong> 22-month delay despite "regular meetings" demonstrates choice not to act urgently</li>
            <li>✓ <strong>Financial motive:</strong> $102-143M per network in fees during delay period</li>
            <li>✓ <strong>Inadequate response:</strong> Reinstating Yana after finding zero screening; 10-week delay on $5M+ daily Visa Direct transfers</li>
          </ol>
        </div>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Aggravating Factors Under OFAC Guidelines</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-2"><strong>OFAC Penalty Matrix Aggravating Factors:</strong></p>
        <ol className="list-decimal list-inside space-y-2 text-neutral-700 mb-6 ml-4">
          <li><strong>✓ Willful or reckless violation:</strong> Explicit warnings + 22-month delay = reckless</li>
          <li><strong>✓ Awareness of conduct at issue:</strong> Regular meetings throughout 2024</li>
          <li><strong>✓ Harm to sanctions program objectives:</strong> Enabled $1.5B scheme funding designated terrorists</li>
          <li><strong>✓ Individual characteristics:</strong> Sophisticated multi-billion dollar corporations with extensive compliance resources</li>
          <li><strong>✓ Pattern of conduct:</strong> Multiple products (Qi Card, Visa Direct), multiple issuers, repeated warnings</li>
          <li><strong>✓ Concealment/obfuscation:</strong> No public disclosure until WSJ investigation; passive responses to inquiries</li>
        </ol>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Comparison to Settled Cases</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4"><strong>Cases Where Defendants Received Warnings Before Violations:</strong></p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">Epsilon Electronics ($4.07M upheld on appeal):</p>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 text-sm">
              <li>Received <strong>cautionary letter from OFAC</strong></li>
              <li><strong>Continued prohibited shipments</strong> after warning</li>
              <li>Court: <strong>"Reckless disregard toward sanctions program"</strong></li>
              <li>Aggravating factor: <strong>"Continued shipments despite a cautionary letter"</strong></li>
            </ul>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">Visa/Mastercard Parallel:</p>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 text-sm">
              <li>Received <strong>explicit intelligence briefing</strong> (fall 2023)</li>
              <li><strong>Continued processing</strong> $400M-$1.1B/month for 16+ months</li>
              <li>Pattern: <strong>Reckless disregard toward sanctions program</strong></li>
              <li>Aggravating factor: <strong>Continued processing despite explicit warnings and regular meetings</strong></li>
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">HSBC ($1.92B settlement):</p>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 text-sm">
              <li><strong>Years of regulatory warnings</strong> about money laundering</li>
              <li><strong>Ignored warnings</strong> while processing billions in cartel funds</li>
              <li>Result: <strong>Criminal DPA</strong> + $1.92B forfeiture</li>
            </ul>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">Visa/Mastercard Parallel:</p>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 text-sm">
              <li><strong>22 months of warnings and meetings</strong></li>
              <li><strong>Ignored warnings</strong> while processing ~$10-15B in militia-linked transactions</li>
              <li>Potential: <strong>Similar DPA structure</strong> + forfeiture in $500M-$1.5B range per network</li>
            </ul>
          </div>
        </div>

        <h2 className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-6">Conclusion: Comprehensive Warning Record</h2>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The evidentiary record establishes that Visa and Mastercard received <strong>comprehensive, explicit, and repeated warnings</strong> about militia exploitation of their payment networks:
        </p>
        
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6 ml-4">
          <li><strong>May 2023:</strong> Initial inquiry about 2,900% transaction surge</li>
          <li><strong>Fall 2023:</strong> Explicit intelligence on militia involvement, smuggling operations, terrorism financing</li>
          <li><strong>Throughout 2024:</strong> Regular meetings with sustained high transaction volumes</li>
          <li><strong>Late May 2025:</strong> Formal request to block 200,000+ militia cards</li>
        </ul>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The <strong>specificity of warnings</strong>—naming militia groups, describing smuggling methods, quantifying volumes, identifying end uses—eliminates any defense based on ambiguity or lack of knowledge. Treasury provided operational intelligence normally reserved for law enforcement, including:
        </p>
        
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6 ml-4">
          <li>Arrest records from airport seizures</li>
          <li>UAE financial intelligence on ATM withdrawal patterns</li>
          <li>Statistical evidence of impossible legitimate usage (20% of UAE transactions from 0.4% of travelers)</li>
          <li>Merchant identification (4,000+ colluding businesses)</li>
          <li>Product-specific concerns (Qi Card, Visa Direct)</li>
        </ul>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The <strong>22-month delay</strong> between initial warnings (May 2023) and substantial enforcement action (March-April 2025)—during which networks earned an estimated <strong>$102-143 million each</strong> in transaction fees—establishes a pattern of <strong>prioritizing revenue over compliance</strong> that satisfies the "reckless disregard" standard under OFAC and BSA enforcement precedent.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          Most significantly, the <strong>reinstatement of Yana Banking Services</strong> after Mastercard's own audit found <strong>zero sanctions screening</strong> demonstrates a <strong>deliberate choice</strong> to maintain business relationships with non-compliant Iraqi issuers despite documented control failures.
        </p>
        
        <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-lg">
          <p className="text-neutral-800 leading-relaxed mb-4">
            This comprehensive warning record positions both networks for <strong>substantial civil penalties</strong> in the range of comparable cases (HSBC $1.92B, BNP Paribas $8.97B), with likely settlement amounts of <strong>$750 million to $1.1 billion per network</strong> plus <strong>disgorgement of fees</strong>, <strong>compliance monitors</strong>, and <strong>enhanced screening requirements</strong>.
          </p>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="my-12 flex items-center gap-4">
        <div className="flex-1 h-px bg-neutral-300"></div>
        <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Research Report II</span>
        <div className="flex-1 h-px bg-neutral-300"></div>
      </div>

      {/* Mastercard Yana Banking Analysis */}
      <section className="section-block">
        <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">Mastercard Audit of Yana Banking (August 2023)</h2>
        
        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Forensic Analysis of Yana Banking Services Audit Findings and Applicability of 31 CFR § 1010.610 Violations</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          In August 2023, Mastercard's Global Compliance Team executed a virtual review of <strong>Yana Banking Services (YBS)</strong>, an Erbil-based issuer and acquirer. This audit was precipitated by a 2,900% surge in cross-border transaction volumes originating from Iraq, which U.S. Treasury officials had flagged as a vector for money laundering and terror financing by Iranian-backed militias.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The audit revealed a systemic collapse of Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) controls. Specifically, the auditors found <strong>"no evidence that customers were being screened"</strong> against U.S. sanctions lists and that <strong>"no customer risk rating is performed"</strong>. Despite these "High Priority" violations, YBS was only temporarily suspended and subsequently reinstated.
        </p>
        
        <div className="p-4 bg-red-50 border-l-4 border-red-400 mb-6">
          <p className="text-red-900 leading-relaxed">
            This report argues that the reinstatement of a partner that demonstrated a <strong>total absence</strong> of foundational compliance architecture constitutes a potential violation of the "Due Diligence Programs" mandated under <strong>31 CFR § 1010.610</strong>, as it evidences a failure to maintain controls "reasonably designed" to detect money laundering.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-6">II. Forensic Deconstruction of Audit Findings</h2>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The Mastercard audit did not merely identify gaps in compliance; it identified the <strong>non-existence</strong> of a compliance program at Yana Banking Services during a period of peak illicit activity ($1.5 billion/month transaction surge).
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">A. Finding 1: Total Absence of Sanctions Screening</h3>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">The Finding:</p>
          <p className="text-neutral-700">The audit found <strong>"no evidence that customers were being screened to ensure they weren't under U.S. sanctions"</strong>.</p>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-2"><strong>Forensic Implication:</strong></p>
        <p className="text-neutral-700 leading-relaxed mb-4">
          This indicates that YBS lacked the technical infrastructure (interdiction software) or the operational workflow to check names against the <strong>OFAC Specially Designated Nationals (SDN) List</strong>.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-2"><strong>Operational Consequence:</strong></p>
        <p className="text-neutral-700 leading-relaxed mb-6">
          Without screening, YBS effectively operated as an open conduit for sanctioned entities. Any individual—including designated terrorists from Kata'ib Hezbollah or IRGC proxies—could obtain a Mastercard-branded card or merchant account without triggering an alert. This aligns with reports of militia members acquiring "huge quantities" of cards for cross-border arbitrage.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">B. Finding 2: Non-Existence of Risk Ratings</h3>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">The Finding:</p>
          <p className="text-neutral-700">The review determined that <strong>"no customer risk rating is performed."</strong> Testing of eight cardholder files and three merchant files revealed <strong>zero</strong> risk ratings.</p>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-2"><strong>Forensic Implication:</strong></p>
        <p className="text-neutral-700 leading-relaxed mb-4">
          Risk rating is the engine of the <strong>Risk-Based Approach (RBA)</strong> required by global banking standards. It categorizes customers (e.g., Low, Medium, High) to determine the level of monitoring required.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-2"><strong>Operational Consequence:</strong></p>
        <p className="text-neutral-700 leading-relaxed mb-6">
          By treating all customers as "zero risk" (the default in the absence of a rating), YBS blinded itself to high-risk indicators. A merchant in a UAE free trade zone processing $5 million in monthly transactions was treated with the same scrutiny as a domestic student. This facilitated the "POS farms" scheme where fake transactions were processed continuously without detection.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">C. Finding 3: Ineffective Monitoring</h3>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">The Finding:</p>
          <p className="text-neutral-700">The review cited <strong>"ineffective suspicious activity monitoring and reporting"</strong>.</p>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-2"><strong>Forensic Implication:</strong></p>
        <p className="text-neutral-700 leading-relaxed mb-6">
          This confirms that even if data was collected, it was not analyzed. The 50-fold increase in transaction volume described by U.S. officials was not flagged because the monitoring systems (if any) were not calibrated to detect velocity or volume anomalies.
        </p>

        <h2 className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-6">III. Legal Analysis: Violation of 31 CFR § 1010.610</h2>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          Under the Bank Secrecy Act (BSA), U.S. financial institutions (including operators of credit card systems) must maintain due diligence programs for foreign financial institutions. The reinstatement of YBS raises significant liability questions under <strong>31 CFR § 1010.610</strong>.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">A. The Regulatory Standard: "Reasonably Designed" Controls</h3>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">31 CFR § 1010.610(a) Mandate:</p>
          <p className="text-neutral-700">
            A covered financial institution must maintain a due diligence program that includes "policies, procedures, and controls that are <strong>reasonably designed</strong> to enable the covered financial institution to <strong>detect and report</strong>, on an ongoing basis, any known or suspected money laundering activity" conducted through a correspondent account.
          </p>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-2"><strong>Applicability:</strong></p>
        <p className="text-neutral-700 leading-relaxed mb-4">
          As a Principal Member of the Mastercard network, YBS maintains a correspondent relationship with Mastercard for the settlement of dollar-denominated transactions.
        </p>
        
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-6">
          <p className="font-semibold text-red-900 mb-2">The Violation:</p>
          <p className="text-red-800">
            A program that reinstates a partner found to have <strong>zero</strong> sanctions screening cannot be described as "reasonably designed" to detect money laundering. The audit proved that YBS was structurally incapable of detecting illicit activity. By maintaining (or rapidly restoring) the connection, Mastercard accepted the risk of processing prohibited transactions, potentially violating the requirement to guard against the foreign institution's use for money laundering.
          </p>
        </div>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">B. Failure of Risk Assessment (§ 1010.610(a)(2))</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The regulation requires the U.S. institution to assess the money laundering risk presented by the correspondent account, based on factors including:
        </p>
        
        <ol className="list-decimal list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li><strong>The nature of the foreign financial institution's business:</strong> YBS was operating in a high-risk jurisdiction (Iraq) with high-risk products (prepaid cards).</li>
          <li><strong>The supervisory regime:</strong> The audit proved the internal supervisory regime of YBS was non-existent.</li>
          <li><strong>Information known about the institution's AML record:</strong> The audit <em>created</em> a record of total non-compliance.</li>
        </ol>
        
        <div className="p-4 bg-amber-50 border-l-4 border-amber-400 mb-6">
          <p className="font-semibold text-amber-900 mb-2">Legal Argument:</p>
          <p className="text-amber-800">
            Under <strong>31 CFR § 1010.610(a)(2)(v)</strong>, the institution must consider information regarding the foreign bank's AML record. When that record consists of a confirmed failure to screen for sanctions, the risk profile becomes "High." Reinstating such an entity implies a failure to properly weigh the "information known or reasonably available" regarding the partner's inability to comply with U.S. law.
          </p>
        </div>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">C. The "Shell Bank" Proxy and 31 CFR § 1010.630</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          While not a shell bank by definition, YBS exhibited the functional characteristics of a shell entity regarding compliance—it had the license but lacked the controls.
        </p>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">31 CFR § 1010.630:</p>
          <p className="text-neutral-700">Prohibits correspondent accounts for foreign shell banks.</p>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-2"><strong>Analogy:</strong></p>
        <p className="text-neutral-700 leading-relaxed mb-6">
          Reinstating a bank with no risk ratings and no screening is functionally equivalent to servicing an entity with no physical mind. It allows the partner to serve as a blind pass-through for third-party money launderers (the militias), violating the spirit of the prohibition against indirect provision of services to unregulated actors.
        </p>

        <h2 className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-6">IV. Conclusion: Liability for Reinstatement</h2>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The decision to reinstate Yana Banking Services, rather than permanently de-platforming it, exposes Mastercard to legal jeopardy under the theory of <strong>"Willful Blindness"</strong> or <strong>"Deliberate Indifference"</strong> (see <em>Weiss v. National Westminster Bank PLC</em>).
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">1. Constructive Knowledge</p>
            <p className="text-neutral-700 text-sm">The August 2023 audit provided Mastercard with actual knowledge that YBS had <strong>no</strong> capacity to screen for terrorists.</p>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">2. Inadequacy of Remediation</p>
            <p className="text-neutral-700 text-sm">Developing a functional, "reasonably designed" AML program typically takes 12–24 months of historical data remediation, software implementation, and staff training. YBS was reportedly reinstated shortly after the suspension was lifted. It is technically improbable that YBS moved from "no risk ratings" to a fully compliant, validated system in such a short window.</p>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">3. Regulatory Breach</p>
            <p className="text-neutral-700 text-sm">Therefore, the continued processing of transactions for YBS likely constituted a violation of <strong>31 CFR § 1010.610(b)(1)</strong> (Enhanced Due Diligence), which requires "enhanced scrutiny" to guard against money laundering. If the partner cannot screen its own customers, the U.S. institution cannot possibly perform effective enhanced scrutiny without reviewing <em>every single transaction</em> manually—an impossibility at the volumes recorded ($1.5 billion/month).</p>
          </div>
        </div>
        
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
          <p className="font-semibold text-red-900 text-lg mb-2">Final Determination:</p>
          <p className="text-red-800 leading-relaxed">
            The reinstatement of YBS suggests that Mastercard prioritized network coverage and revenue over the mandatory due diligence requirements of the Bank Secrecy Act, permitting a partner with proven, systemic deficiencies to continue accessing the U.S. financial system.
          </p>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="my-12 flex items-center gap-4">
        <div className="flex-1 h-px bg-neutral-300"></div>
        <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Research Report III</span>
        <div className="flex-1 h-px bg-neutral-300"></div>
      </div>

      {/* Visa's Compliance Failure */}
      <section className="section-block">
        <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">First Iraqi Bank and Visa's Compliance Failure</h2>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          In early 2024, the launch of the "Visa Direct" product by First Iraqi Bank (FIB) became the epicenter of a historic compliance failure, facilitating a <strong>$1.2 billion transfer spike in a span of only ten weeks</strong>. This volume, characterized by individual account holders moving sums as high as <strong>$5 million per day</strong> to high-risk jurisdictions like Indonesia and Turkey, signifies a systemic collapse of real-time transaction monitoring and the violation of fundamental anti-money laundering (AML) protocols.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The following report reconstructs this failure, examining the institutional incentives that prioritized market expansion over regulatory duty, the specific geographic and banking endpoints involved, and the legal framework under which these actions constitute willful blindness and unjust enrichment.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">The Geopolitical and Economic Landscape of Iraqi Digital Banking</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          To understand the scale and speed of the First Iraqi Bank (FIB) compliance failure, one must first examine the broader context of Iraq's transition from a cash-dominant economy to an emerging digital payment frontier. Historically, the Iraqi financial system was defined by its isolation from global markets and a heavy reliance on the physical "dollar auction" system managed by the Central Bank of Iraq (CBI) and the Federal Reserve Bank of New York. However, by 2023, a significant shift toward card-based transactions occurred, as Iraqi terrorist militia groups, including Kataib Hezbollah and the Badr Brigade, sought alternative methods to extract illicit funds and circumvent US sanctions on Iran.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The growth in this sector was explosive. At the beginning of 2023, cross-border Visa and Mastercard transactions in Iraq generated approximately <strong>$50 million monthly</strong>; by April 2023, this figure had soared to <strong>$1.5 billion</strong>. This surge was not merely a result of organic consumer adoption but was actively fueled by international payment giants who signed up Iraqi partners and offered them financial incentives to boost transaction levels. This environment of hyper-growth set the stage for the launch of Visa Direct at First Iraqi Bank in early 2024, a product that promised real-time global money movement to billions of endpoints.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">First Iraqi Bank: The Architect of the Digital Loophole</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          First Iraqi Bank positioned itself as Iraq's first completely mobile bank, utilizing a digital onboarding process that allowed users to open accounts in under five minutes through biometric identification and mobile-based document scanning. While marketed as a tool for financial inclusion, the bank's product suite appeared specifically engineered for high-volume transactions. Its "Visa Signature for Business" tier offered "exceptionally high ceilings" for payment limitations, while its "Visa Business Classic" cards provided monthly limits of $100,000. For corporate clients, the bank allowed daily purchase limits of up to 70 million IQD and monthly limits of 400 million IQD.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">Card Tiers and Compliance Risk Profiles</h4>
        
        <div className="overflow-x-auto mb-6">
          <table className="data-table w-full">
            <thead>
              <tr>
                <th className="text-left">Card Tier</th>
                <th className="text-left">Intended User</th>
                <th className="text-left">Key Limit Metrics</th>
                <th className="text-left">Compliance Risk Profile</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Visa Signature for Business</td>
                <td>Large Corporations</td>
                <td>"Exceptionally High Ceiling"</td>
                <td><span className="text-red-700 font-medium">High:</span> Capacity for massive capital flight</td>
              </tr>
              <tr>
                <td>Visa Business Classic</td>
                <td>Small/Medium Merchants</td>
                <td>$100,000 Monthly</td>
                <td><span className="text-amber-700 font-medium">Medium-High:</span> Layering potential</td>
              </tr>
              <tr>
                <td>Visa Platinum</td>
                <td>Personal Use</td>
                <td>"Higher Spending Limits"</td>
                <td><span className="text-red-700 font-medium">High:</span> Use in personal-account "smurfing"</td>
              </tr>
              <tr>
                <td>Virtual Card</td>
                <td>Online Shoppers</td>
                <td>"Instant and Immediate"</td>
                <td><span className="text-red-700 font-medium">High:</span> Minimal physical verification</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The convergence of these high-limit products with the Visa Direct "push payment" technology created a friction-less conduit for capital flight. Unlike traditional wire transfers that may undergo manual review, Visa Direct facilitates near-instant money movement across accounts linked to card credentials. This speed, when applied in a jurisdiction listed in the highest category of the Banking Industry Country Risk Assessment (Group 10), necessitates a level of real-time monitoring that was demonstrably absent.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Reconstruction of the $1.2 Billion Transfer Spike</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The ten-week window in early 2024 during which FIB's Visa Direct service moved $1.2 billion overseas represents a textbook example of "velocity fraud" and a failure of automated risk controls.
        </p>
        
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-6">
          <p className="font-semibold text-red-900 mb-2">Critical Anomaly Identified:</p>
          <p className="text-red-800">
            The most critical anomaly identified by US and Iraqi officials involved a <strong>single account holder transferring more than $5 million per day to eleven accounts in Indonesia</strong>. In the context of a personal or small-business account in a high-risk region, such a figure is not merely a red flag but a <strong>"strict liability" indicator of illicit activity</strong>.
          </p>
        </div>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">The Failure of Real-Time Transaction Monitoring</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The core of the compliance failure lies in the bank's and the network's inability—or unwillingness—to auto-block transactions that exceeded all reasonable economic thresholds. Real-time transaction monitoring is intended to identify patterns of "structuring" or "velocity" that deviate from a user's established profile. The movement of $5 million daily from Iraq to Indonesia is mathematically inconsistent with any legitimate personal remittance or standard small-business operation.
        </p>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">Suspicious Activity Reporting Requirement (31 CFR § 1028.320):</p>
          <p className="text-neutral-700">
            Financial institutions must report any transaction that is "conducted or attempted by, at, or through" the institution and involves at least $5,000, if the institution knows or suspects the transaction involves funds derived from illegal activity.
          </p>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-amber-50 border-l-4 border-amber-400">
          <strong>Willful Blindness:</strong> The failure to freeze the FIB accounts for 10 weeks, despite these glaring anomalies and warnings from the US Treasury and the Federal Reserve, suggests a condition of "willful blindness." This legal doctrine applies when an institution intentionally fails to investigate a high probability of illegal conduct, effectively treating the lack of "actual knowledge" as a defense against complicity.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">The "Risk Waiver" and Incentive-Driven Negligence</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          A primary question in this reconstruction is whether Visa granted First Iraqi Bank a "risk waiver" or "launch exception" that bypassed standard velocity limits during the rollout phase. While a formal written waiver has not been publicly produced, the operational evidence points to a functional equivalent. The US payment giants reportedly offered their Iraqi partners financial incentives to boost transaction levels. When institutional revenue is tied directly to transaction volume, there is an inherent pressure to calibrate monitoring systems with wider "tolerance bands" to avoid "false positives" that could interrupt the flow of profitable transfers.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          This incentive structure created an environment where warnings about suspicious activity from both US and Iraqi officials went unheeded for months. Even after the Treasury notified companies of these exchanges in the fall of 2024, it took months for them to take control of the transactions. The persistence of these flows—which continued at levels between $400 million and $1.1 billion a month into early 2025—indicates that the compliance "brakes" were effectively disabled during the initial launch phase to capture market share in a burgeoning digital economy.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Identification of Receiving Corridors: Indonesia and Turkey</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The destination endpoints for the $1.2 billion spike are as significant as the origin. The selection of Indonesia and Turkey as primary corridors for these transfers reveals a strategic use of jurisdictions that balance high-volume digital remittance infrastructure with specific regional banking ties.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">The Indonesian Endpoint: 11 Accounts and the Fintech Loophole</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The movement of funds to eleven specific accounts in Indonesia highlights a sophisticated "layering" technique. Indonesia is a global leader in digital remittance adoption, with the World Bank estimating global flows reached $905 billion in 2024. The Indonesian fintech ecosystem, characterized by platforms like Stripe scaling aggressively and traditional providers like Western Union partnering with local telcos, provides a high-density environment where large transfers can be fragmented and obscured.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The fact that $5 million per day was directed to a small number of accounts suggests these were likely "mule accounts" or endpoints for further distribution into the Asian or Middle Eastern shadow financial systems. The real-time nature of Visa Direct ensured that once the funds reached Indonesia, they were immediately available for withdrawal or further transfer, outstripping the ability of international authorities to issue "freeze and seize" orders.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">The Turkish Corridor: Strategic Banking Overlap</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          Turkey represents a second high-risk endpoint, serving as a critical bridge for Iraqi capital flight. Multiple Turkish banks, including Ziraat Bank and VakifBank, maintain branches within the Kurdistan region of Iraq. These institutions provide a direct pipeline for funds to move from the Iraqi digital ecosystem into the Turkish banking sector and, by extension, the broader Mediterranean and European markets.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          Furthermore, the Burgan Bank Group, which majority-owns subsidiaries in the MENAT region, including Burgan Bank Turkey and the Bank of Baghdad, represents a significant institutional link. These cross-border banking relationships facilitate the movement of dollars between Iraq and Turkey, often bypassing the more stringent oversight of the US-monitored dollar auction. The US Treasury has warned that such channels have been exploited to benefit Iran's Revolutionary Guard and other sanctioned entities, leading to the 2025 ban on five Iraqi banks from conducting dollar transactions.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">Key Entities in Receiving Corridors</h4>
        
        <div className="overflow-x-auto mb-6">
          <table className="data-table w-full">
            <thead>
              <tr>
                <th className="text-left">Bank / Entity</th>
                <th className="text-left">Role in Regional Corridor</th>
                <th className="text-left">Risk Factor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First Iraqi Bank (FIB)</td>
                <td>Originator (Iraq)</td>
                <td>Mobile-first "compliance-lite" onboarding</td>
              </tr>
              <tr>
                <td>Ziraat Bank</td>
                <td>Receiver/Bridge (Turkey)</td>
                <td>Established branches in Kurdistan region</td>
              </tr>
              <tr>
                <td>VakifBank</td>
                <td>Receiver/Bridge (Turkey)</td>
                <td>Established branches in Kurdistan region</td>
              </tr>
              <tr>
                <td>Burgan Bank Turkey</td>
                <td>Institutional Intermediary</td>
                <td>Link to Bank of Baghdad and wider MENAT network</td>
              </tr>
              <tr>
                <td>Indonesian Accounts (11)</td>
                <td>Final Endpoints (APAC)</td>
                <td>Targeted for $5M/day high-velocity "smurfing"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Financial Forensics: Establishing Unjust Enrichment</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          A critical element of the task is establishing the "Unjust Enrichment" realized by the payment network from the compliance failure. In legal terms, unjust enrichment occurs when a party benefits at the expense of another in a manner that the law considers unfair or illegal, often due to a failure to fulfill a regulatory duty.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">Calculation of Network Fees on $1.2 Billion Volume</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          Visa earns revenue through a complex structure of interchange, service, and assessment fees. For international, cross-border transactions, these fees are significantly higher than domestic ones. Based on standard Visa and Mastercard interchange rates effective through 2024 and 2025, the following fee components can be identified:
        </p>
        
        <ol className="list-decimal list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li><strong>Visa International Cross-Border Fee:</strong> Approximately 0.80%</li>
          <li><strong>Visa International Acquirer Service Fee:</strong> Approximately 0.45%</li>
          <li><strong>Currency Conversion/FX Margins:</strong> While difficult to pinpoint without internal data, typical FX margins on cross-border payments can range from 1% to 1.4%, and as high as 5% for certain bank-facilitated transfers</li>
        </ol>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">Conservative Base Calculation for Unjust Enrichment:</p>
          <div className="font-mono text-sm text-neutral-700 space-y-1">
            <p>Total Volume = $1,200,000,000</p>
            <p>Combined Network Fee Percentage (0.80% + 0.45%) = 1.25%</p>
            <p className="font-bold">Estimated Total Network Revenue = $1,200,000,000 × 0.0125 = <span className="text-red-700">$15,000,000</span></p>
          </div>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-red-50 border-l-4 border-red-400">
          This <strong>$15 million in revenue</strong> was generated during a ten-week period characterized by an acknowledged failure of real-time monitoring and the ignoring of specific Treasury warnings. Because this revenue was the direct result of permitting transactions that violated 31 CFR § 1028.320, it constitutes the <strong>"proceeds of a compliance failure."</strong>
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">Impact of Commissions and Revenue Loss</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The financial incentives for the participating banks were even more significant. Before the Central Bank of Iraq's 2025 regulatory crackdown, commissions for foreign currency transactions were a primary driver of bank earnings. FIB itself projects that its net fee income will decline by approximately <strong>70% year-on-year in 2025</strong> due to new caps on these commissions. This indicates that during the 2024 spike, the bank was operating in a "high-commission, low-oversight" environment that prioritized the maximization of volume over the detection of terror financing.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">The Regulatory Crackdown and Institutional Fallout</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The intervention by the US Treasury and the Federal Reserve in late 2024 and early 2025 led to a fundamental restructuring of the Iraqi digital banking landscape. The failure to rein in the $1.2 billion spike eventually forced the hand of both US and Iraqi authorities, leading to unprecedented restrictions.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">The 2025 Bank Bans and Dollar Restrictions</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          In February 2025, the United States banned five Iraqi banks from conducting transactions in US dollars. While the US did not publicly detail every specific violation, the move was described as a significant escalation in efforts to curb money laundering and sanctions violations involving Iran. These banks were accused of facilitating transactions that ultimately benefited the IRGC and other sanctioned proxies.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          For international businesses, this ban injected a new layer of complexity, as engaging with blacklisted banks now carries a high risk of "secondary sanctions". For the Iraqi economy, it signaled that the period of unregulated digital expansion had come to a definitive end.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">Suspension of FIB International Services</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          Following the $1.2 billion spike and the subsequent scrutiny, First Iraqi Bank was forced to suspend its international card usage mechanism. In an official update, the bank's Managing Director informed customers that the "current mechanism for settling international card transactions has been suspended," affecting all international usage. This suspension was a direct result of the 10-week failure of the Visa Direct product and the subsequent intervention by the US Treasury.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          Furthermore, the CBI imposed new monthly limits on remittances and forced international money-transferring companies to close accounts at multiple Iraqi banks. These enforcement actions were successful in reducing cross-border flows from $1.5 billion a month to approximately $110 million by October 2024. However, the damage—both in terms of illicit funds successfully moved and the reputation of the Iraqi digital sector—was already done.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">The Technical Mechanism of Failure: Push Payments vs. Regulatory Duty</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The Visa Direct platform utilizes "Push Payment" technology (specifically Original Credit Transactions or OCTs and Account Funding Transactions or AFTs) to move money. In a standard transaction, the sender's bank initiates an AFT to pull funds from the sender's card, and the recipient's bank receives an OCT to push funds to the recipient's account.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-2">The compliance failure at FIB occurred at both ends of this process:</p>
        <ol className="list-decimal list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li><strong>Originating Bank (FIB):</strong> Failed to flag the AFTs when individual account holders were pulling $5 million daily from their balances to fund global transfers.</li>
          <li><strong>Network (Visa):</strong> Failed to flag the anomalous aggregate volume of OCTs flowing from a high-risk jurisdiction (Iraq) to specific high-risk corridors (Indonesia/Turkey).</li>
        </ol>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-amber-50 border-l-4 border-amber-400">
          The speed of the Visa Direct network—promising fund availability in "one minute or less"—was used as a defense for the failure to monitor. However, <strong>real-time settlement does not exempt a network from real-time monitoring</strong>. In fact, the higher the velocity of the network, the more robust the automated risk-scoring engines must be. The $5 million/day anomaly suggests that either the risk-scoring thresholds were set so high as to be meaningless, or that a specific "launch exception" was granted to allow FIB to scale without friction.
        </p>

        <h2 className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-6">Conclusion: The Costs of Willful Blindness</h2>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The Reconstruction of the First Iraqi Bank / Visa Direct compliance failure reveals a systemic breakdown where the drive for market share in an emerging economy overrode the fundamental legal requirements of the Bank Secrecy Act and global AML standards. The $1.2 billion spike was not a technical glitch; it was the predictable result of deploying a high-velocity "push payment" product in a jurisdiction dominated by sanctioned militias, without the necessary real-time safeguards.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The <strong>$15 million in network fees</strong> earned by Visa and the massive commissions earned by FIB during this period represent <strong>"Unjust Enrichment"</strong> derived from the failure to report and block obvious suspicious activity under 31 CFR § 1028.320. The 10-week delay in suspending the service, despite repeated warnings from the US Treasury, establishes a clear case of <strong>"willful blindness."</strong>
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          Ultimately, the FIB incident serves as a definitive case study in the risks of digital financial transformation in conflict zones. It highlights the necessity for payment networks to prioritize regulatory duty over financial incentives and for governments to maintain a "maximum pressure" doctrine on the intermediaries that facilitate the flow of illicit capital. The transition to a digital economy in Iraq remains a critical goal for financial inclusion, but as the FIB case demonstrates, speed without oversight is merely a new rail for old threats.
        </p>
        
        <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-lg">
          <p className="text-neutral-800 leading-relaxed">
            The current landscape for First Iraqi Bank is one of contraction, with a projected <strong>80% decline in net income</strong> and the suspension of its core international services. For the broader industry, the lesson is clear: <strong>in the era of real-time payments, compliance must also operate in real-time</strong>, or the networks themselves become complicit in the very activities they are legally mandated to prevent.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <nav className="flex justify-between mt-10 pt-8 border-t border-neutral-200 no-print">
        <Link href="/legal-analysis" className="btn btn-ghost">
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Legal Analysis
        </Link>
        <Link href="/entities" className="btn btn-secondary">
          Key Entities
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </Link>
      </nav>
    </div>
  );
}
