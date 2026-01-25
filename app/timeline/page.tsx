'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  timelineEvents, 
  getEventsByCategory, 
  getTimelineCategoryLabel,
  TimelineCategory 
} from '@/lib/data/timeline';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';

const categoryFilters: { value: TimelineCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'warning', label: 'Warnings' },
  { value: 'violation', label: 'Violations' },
  { value: 'action', label: 'Actions' },
  { value: 'regulatory', label: 'Regulatory' },
  { value: 'attack', label: 'Attacks' },
];

export default function TimelinePage() {
  const [activeFilter, setActiveFilter] = useState<TimelineCategory | 'all'>('all');
  const [expandedEvents, setExpandedEvents] = useState<Set<string>>(new Set());

  const filteredEvents = activeFilter === 'all' 
    ? timelineEvents 
    : getEventsByCategory(activeFilter);

  const toggleExpand = (eventId: string) => {
    const newExpanded = new Set(expandedEvents);
    if (newExpanded.has(eventId)) {
      newExpanded.delete(eventId);
    } else {
      newExpanded.add(eventId);
    }
    setExpandedEvents(newExpanded);
  };

  const getDotColor = (category: TimelineCategory) => {
    const colors: Record<TimelineCategory, string> = {
      warning: 'bg-amber-400',
      violation: 'bg-red-400',
      action: 'bg-emerald-400',
      regulatory: 'bg-neutral-400',
      attack: 'bg-rose-500',
    };
    return colors[category];
  };

  return (
    <article className="max-w-prose-wide mx-auto">
      {/* Header */}
      <header className="mb-8">
        <p className="kicker">Chronological Documentation</p>
        <h1>Timeline of Events</h1>
        <p className="lead mt-3">
          {timelineEvents.length} documented events from November 2022 to October 2025.
        </p>
      </header>

      {/* Stats */}
      <div className="metric-grid mb-8">
        <div className="metric-item">
          <div className="stat-inline">{timelineEvents.length}</div>
          <div className="stat-label">Events</div>
        </div>
        <div className="metric-item">
          <div className="stat-inline text-amber-600">{getEventsByCategory('warning').length}</div>
          <div className="stat-label">Warnings</div>
        </div>
        <div className="metric-item">
          <div className="stat-inline text-red-600">{getEventsByCategory('violation').length}</div>
          <div className="stat-label">Violations</div>
        </div>
        <div className="metric-item">
          <div className="stat-inline text-emerald-600">{getEventsByCategory('action').length}</div>
          <div className="stat-label">Actions</div>
        </div>
      </div>

      {/* Timeline Visual */}
      <div className="mb-8">
        <img 
          src="https://mcrtnvfubthcnkolvjcp.supabase.co/storage/v1/object/public/Image%20urls/Timeline2.png" 
          alt="Timeline visualization of events from November 2022 to October 2025"
          className="w-full rounded-lg"
        />
      </div>

      {/* Filters */}
      <section className="mb-6 no-print">
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
                <span className="ml-1 opacity-60">
                  {getEventsByCategory(filter.value as TimelineCategory).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="relative pl-5 border-l-2 border-neutral-200">
        {filteredEvents.map((event) => {
          const isExpanded = expandedEvents.has(event.id);
          const hasDetails = event.details && event.details.length > 0;

          return (
            <div key={event.id} className="relative mb-5 last:mb-0">
              {/* Dot */}
              <div 
                className={`absolute -left-[21px] w-2.5 h-2.5 rounded-full ring-3 ring-white ${getDotColor(event.category)}`}
                style={{ top: '6px' }}
              />
              
              <div className="pl-4 pb-2">
                {/* Date and Category */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-neutral-500">{event.date}</span>
                  <span className={`badge badge-${event.category}-cat`}>
                    {getTimelineCategoryLabel(event.category)}
                  </span>
                  {event.isKeyEvent && (
                    <span className="badge badge-neutral">Key</span>
                  )}
                </div>
                
                {/* Title */}
                <h3 className="text-sm font-medium text-neutral-900 mb-1 mt-0">
                  {event.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-neutral-600 leading-relaxed mb-1">
                  {event.description}
                </p>

                {/* Financial Impact */}
                {event.financialImpact && (
                  <p className="text-sm text-neutral-500 mb-1">
                    Impact: <span className="font-medium text-neutral-700">{event.financialImpact}</span>
                  </p>
                )}
                
                {/* Source */}
                {event.source && (
                  <p className="text-2xs text-neutral-400 mb-1">
                    Source: {event.source}
                  </p>
                )}

                {/* Expandable Details */}
                {hasDetails && (
                  <>
                    <button
                      onClick={() => toggleExpand(event.id)}
                      className="flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-700 transition-colors mt-1"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUpIcon className="w-3 h-3" />
                          Hide
                        </>
                      ) : (
                        <>
                          <ChevronDownIcon className="w-3 h-3" />
                          {event.details?.length} details
                        </>
                      )}
                    </button>

                    {isExpanded && (
                      <ul className="mt-2 space-y-1 text-sm text-neutral-600">
                        {event.details?.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-neutral-400 rounded-full mt-2 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </section>

      <div className="section-divider"></div>

      {/* Key Takeaways */}
      <section className="mb-8">
        <h2>Key Takeaways</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-neutral-800 mb-1 mt-0">Pattern of Delay</h3>
            <p className="text-sm text-neutral-600 mb-0">
              Warnings received but not acted upon for extended periods. The 22-month gap 
              represents "deliberate indifference."
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-neutral-800 mb-1 mt-0">Revenue Incentive</h3>
            <p className="text-sm text-neutral-600 mb-0">
              Networks collected $102-143M each in fees during the gap. 
              Compliance competed with revenue.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-neutral-800 mb-1 mt-0">Escalating Warnings</h3>
            <p className="text-sm text-neutral-600 mb-0">
              General inquiry (May 2023) → militia IDs (Fall 2023) → 
              blocking requests (May 2025).
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-neutral-800 mb-1 mt-0">Post-Facto Validation</h3>
            <p className="text-sm text-neutral-600 mb-0">
              October 2025 OFAC designations for "laundering money for IRGC-QF" validated 
              earlier warnings.
            </p>
          </div>
        </div>
      </section>

      {/* Knowledge vs. Action Timeline Visual */}
      <div className="my-8">
        <img 
          src="/list.png" 
          alt="The Knowledge vs. Action Timeline: Chronology of Regulatory Warnings vs. Network Enforcement from Jan 2023 to Mar 2025" 
          className="w-full rounded-lg shadow-md border border-neutral-200"
        />
        <p className="text-sm text-neutral-500 text-center mt-2 italic">
          Knowledge vs. Action: Chronology of regulatory warnings vs. network enforcement
        </p>
      </div>

      {/* Full Timeline Analysis */}
      <section className="section-block">
        <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">Timeline: Internal Communications and Treasury Warnings</h2>
        
        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Warnings without Action</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          Extensive analysis and investigation efforts have revealed specific details regarding U.S. Treasury and Federal Reserve warnings to Visa and Mastercard about Iraq militia involvement in payment card fraud. Federal Reserve Bank of New York and Treasury officials <strong>began questioning Visa and Mastercard about rising Iraqi transactions in May 2023</strong>—just one month after the 2,900% transaction surge.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-neutral-50 border-l-4 border-neutral-400">
          Despite these early warnings, the card networks <strong>did not take significant enforcement action until March 2025</strong> - nearly <strong>22 months later</strong>. During this delay period, monthly transaction volumes ranged from $400 million to $1.1 billion, generating an estimated <strong>$120 million in fees for the networks in 2023 alone</strong>, with revenues growing approximately <strong>60% in 2024</strong>.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-4">This timeline establishes a clear pattern of willful blindness:</p>
        
        <ol className="list-decimal list-inside space-y-2 text-neutral-700 mb-6 ml-4">
          <li>Both payment networks received explicit warnings about militia involvement when transactions were at their peak.</li>
          <li>Both payment networks held "regular meetings" with Treasury, Federal Reserve, and Iraqi Central Bank officials throughout 2024 and early 2025.</li>
          <li>Both payment networks continued processing hundreds of millions monthly during this entire period.</li>
          <li>Both payment networks only implemented large-scale blocking after nearly <strong>two years of warnings.</strong> Additionally, internal Mastercard compliance audits identified specific Iraqi issuers with <strong>no sanctions screening, ineffective anti-money laundering controls, and zero customer risk ratings</strong>—yet these issuers were temporarily suspended and then <strong>reinstated to continue operations</strong>.</li>
        </ol>

        <h2 className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-6">Timeline of Treasury/Federal Reserve Warnings and Network Response</h2>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Phase 1: Transaction Surge (January-April 2023)</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>January-March 2023</strong>: Iraqi cross-border Visa and Mastercard transactions baseline at <strong>~$50 million/month</strong>
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>April 2023</strong>: Transactions surge to <strong>$1.5 billion/month</strong>—a <strong>2,900% increase "almost overnight"</strong>
        </p>
        
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li>This surge occurred after Treasury and Federal Reserve shut down wire transfer loopholes in late 2022, forcing militias to shift to payment cards.</li>
          <li>Central Bank of Iraq policy change in early 2023 permitted cards to be used outside Iraq at official exchange rate, enabling currency arbitrage.</li>
          <li>Networks had offered "financial incentives" to Iraqi partners to "boost transaction levels," effectively fueling the boom.</li>
        </ul>
        
        <div className="callout-danger mb-6">
          <p className="font-medium text-red-900 mb-1">Critical Failure</p>
          <p className="text-red-800">A 2,900% overnight surge should have triggered automated fraud detection systems immediately. The fact that it did not—or that alerts were ignored—establishes systemic control failure.</p>
        </div>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Phase 2: Initial Treasury Inquiries (May-December 2023)</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>May 2023</strong>: <strong>Federal Reserve Bank of New York and U.S. Treasury officials began asking Visa and Mastercard to explain the rising transactions</strong>
        </p>
        
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li>This represents the <strong>first documented regulatory warning</strong>—occurring just <strong>one month</strong> after the surge peaked</li>
          <li>Officials specifically questioned the transaction volume increase</li>
          <li>Both networks were on notice that regulators viewed the Iraq market as suspicious</li>
        </ul>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>July 2023</strong>: Western Union publicly disclosed in Q2 2023 earnings that it was having "regular discussions with policymakers in both the U.S. and Iraq about the elevated remittance volumes flowing through its network in Iraq"
        </p>
        
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6 ml-4">
          <li>This public disclosure put entire financial services industry on notice that Iraqi transactions were under scrutiny</li>
          <li>Western Union noted elevated Iraq volumes were "primarily" driving upward revenue forecast revision</li>
          <li>Visa and Mastercard executives monitoring competitor earnings would have been aware</li>
        </ul>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">August 2023: Mastercard Global Compliance Team conducted virtual review of Yana Banking Services (Erbil-based Iraqi card issuer)</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-2"><strong>Key Findings:</strong></p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li><strong>"No customer risk rating is performed, and no risk ratings were reflected on eight cardholder and three merchant files tested during the review process"</strong></li>
          <li><strong>"Ineffective suspicious activity monitoring and reporting"</strong> aimed at preventing fraud</li>
          <li><strong>No evidence that customers were being screened to ensure they weren't under U.S. sanctions</strong>—a requirement under Mastercard licensing agreement</li>
        </ul>
        
        <p className="text-neutral-700 leading-relaxed mb-2">
          <strong>Mastercard Action:</strong> Yana was <strong>temporarily banned from issuing new Mastercard-branded cards</strong> until it corrected "high priority violations"
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-2">
          <strong>Mastercard Reinstatement:</strong> The suspension was <strong>later lifted after the problems were addressed</strong>, according to a person familiar with the matter
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-amber-50 border-l-4 border-amber-400">
          <strong>Analysis:</strong> This audit represents <strong>direct internal knowledge</strong> by Mastercard that its Iraqi issuing partners were operating without sanctions screening or AML controls. The decision to <strong>reinstate Yana</strong> after purported remediation—rather than permanently terminate the relationship—demonstrates prioritization of business continuity over compliance risk.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>Fall 2023</strong>: <strong>Treasury officials informed the card companies</strong> that militias had acquired huge quantities of Mastercards and Visas, transported them to UAE and neighboring countries, and withdrew funds
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li>This represents an <strong>escalation</strong> from general inquiries to <strong>specific intelligence</strong> about militia involvement</li>
          <li>Treasury explicitly connected the transaction surge to sanctioned militia groups</li>
          <li>Treasury described the scheme mechanics in detail: card smuggling, ATM withdrawals, currency arbitrage</li>
        </ul>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>September-December 2023</strong>: Transactions remain elevated at <strong>$400M-$1.1B/month</strong> range
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-6 ml-4">
          <li>Despite May warnings and fall briefings, no significant enforcement action taken</li>
          <li>Networks continue earning 1-1.4% transaction fees on these volumes</li>
        </ul>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Phase 3: Regular Meetings and Continued Inaction (2024)</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>Throughout 2024</strong>: <strong>Visa, Mastercard, Treasury, Federal Reserve Bank of New York, and Iraqi Central Bank officials held "regular meetings" about the Iraqi market</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li>Frequency of meetings not specified but described as ongoing throughout the year</li>
          <li>Meetings included all key stakeholders: both networks, both federal regulators, and Iraq's central bank</li>
          <li>Despite "regular meetings," transaction volumes continued at elevated levels</li>
        </ul>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>Early 2024</strong>: <strong>First Iraqi Bank launched Visa Direct instant money transfer service</strong>
        </p>
        
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-4">
          <p className="font-semibold text-red-900 mb-2">Visa Direct Abuse:</p>
          <ul className="list-disc list-inside space-y-2 text-red-800 ml-2">
            <li>Over just <strong>two months</strong>, First Iraqi Bank Visa cardholders sent <strong>$1.2 billion to Dubai, Turkey and other places</strong></li>
            <li><strong>One single cardholder</strong> repeatedly transferred <strong>more than $5 million per day to 11 accounts in Indonesia</strong></li>
            <li>This represents an obvious red flag: $5M+ daily transfers to 11 Indonesian accounts from one Iraqi cardholder</li>
          </ul>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-2">
          <strong>Treasury and Federal Reserve Response:</strong> Raised concerns about the huge transfers
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-2">
          <strong>Visa Action:</strong> <strong>Suspended First Iraqi Bank's use of Visa Direct service after 10 weeks</strong>
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-amber-50 border-l-4 border-amber-400">
          <strong>Analysis:</strong> The 10-week delay before suspension—even for a single account transferring $5M+ daily to 11 Indonesian accounts—demonstrates inadequate real-time monitoring. Basic transaction monitoring should flag $5 million daily transfers instantly, not after 10 weeks and $1.2 billion in cumulative transfers.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>Mid-2024</strong>: Iraqi cross-border card transaction volumes remain elevated
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li>Transactions estimated to be <strong>up approximately 60% compared to 2023</strong></li>
          <li>This means networks' fee revenue also grew ~60% year-over-year</li>
          <li>Estimated 2024 network earnings: <strong>~$192 million combined</strong> ($120M × 1.6)</li>
        </ul>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>July 2024</strong>: U.S. and Iraq impose limits on Western Union and MoneyGram transfers, driving monthly outflows down to $110 million by October 2024
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li>Demonstrates regulators were successfully enforcing controls on money transfer operators</li>
          <li>Raises question: why were similar aggressive controls not imposed on card networks until 2025?</li>
        </ul>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          <strong>October 2024</strong>: Transactions remain in $400M-$1.1B/month range
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Phase 4: Delayed Enforcement (Early 2025)</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>"Early 2025"</strong>: Card companies "began taking significant action"
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>March 2025</strong>: <strong>Mastercard finally implements large-scale blocking</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li>Blocked <strong>more than 100,000 Iraqi-issued cards</strong></li>
          <li>Removed <strong>4,000 merchants in UAE</strong> from payment network</li>
          <li><strong>Half of the blocked cards</strong> (50,000+) came from <strong>International Smart Card (Qi Card)</strong></li>
        </ul>
        
        <p className="text-neutral-700 leading-relaxed mb-2">
          <strong>Mastercard Statement:</strong> Seth Eisen (Mastercard spokesman): "Information about Qi Card and International Smart Card that Mastercard received from government agencies was compiled with existing information and actioned accordingly"
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li>Phrasing suggests Mastercard required "information from government agencies" before acting</li>
          <li>Implies Mastercard's own detection systems had not independently identified the fraud</li>
          <li>Timing indicates this "information from government agencies" was received shortly before March 2025 action</li>
        </ul>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>April 2025</strong>: <strong>Visa implements blocking measures</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li>Sent alerts about potential fraud for <strong>70,000 Iraqi cards</strong></li>
          <li>Barred approximately <strong>5,000 UAE vendors</strong>, temporarily blocking their use</li>
          <li>Some cards <strong>later reactivated</strong> after Mastercard and Visa concluded charges were legitimate</li>
        </ul>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>May 2025</strong>: <strong>First Iraqi Bank announces suspension of international card transaction settlement mechanism</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li>Official statement: "the current mechanism for settling international card transactions has been suspended"</li>
          <li>Services remain "fully operational for local usage"</li>
          <li>Timing suggests coordinated enforcement across multiple Iraqi issuers</li>
        </ul>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          <strong>"Recent Days" (Late May 2025)</strong>: <strong>Treasury formally asked Iraqi Central Bank to block more than 200,000 cards used by militia members</strong> due to fraud concerns
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Phase 5: Regulatory Aftermath (Mid-2025 to Present)</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>May 28, 2025</strong>: Representatives Joe Wilson (R-SC) and Greg Steube (R-FL) send letter to Secretary of State Marco Rubio recommending sanctions against 18 Iraqi financial institutions and 9 individuals, including Qi Card and specific executives
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>May 31, 2025</strong>: <strong>Wall Street Journal publishes investigative report</strong> exposing full scope of scheme
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li>Report based on "documents reviewed by The Wall Street Journal"—suggesting WSJ obtained internal documents</li>
          <li>Report cites "U.S. and Iraqi officials" confirming warnings "went mostly unheeded for months"</li>
        </ul>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>June 2025</strong>: Congressional and media scrutiny intensifies
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li>Rep. Joe Wilson tweets: "Visa and Mastercard are funding Iran-backed Iraqi terrorists"</li>
          <li>Multiple news outlets republish WSJ findings</li>
        </ul>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>October 8, 2025</strong>: <strong>OFAC designates three Iraqi banking executives</strong> (Ali Ghulam, Ali Meften Al Baidani, Aqeel Meften Al Baidani) for laundering money for IRGC-QF and militias
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-3">
          <strong>October 2025</strong>: <strong>OFAC designates Muhandis General Company and Baladna Agricultural Investments</strong> (controlled by PMF Chief of Staff Abu Fadak) for diverting Iraqi government revenues to Kata'ib Hezbollah
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          <strong>October 14, 2025</strong>: Al-Rafidain Bank shuts PMF branch office following OFAC sanctions
        </p>

        <h2 className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-6">Key Internal Communications and Leaks</h2>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Mastercard Yana Banking Services Audit (August 2023)</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The Wall Street Journal obtained and reviewed <strong>Mastercard Global Compliance Team's findings</strong> from the August 2023 virtual review of Yana Banking Services. Key excerpts from the audit:
        </p>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">Sanctions Screening Failure:</p>
          <blockquote className="text-neutral-700 italic border-l-4 border-neutral-300 pl-4">
            "No customer risk rating is performed, and no risk ratings were reflected on eight cardholder and three merchant files tested during the review process"
          </blockquote>
          <p className="text-neutral-600 mt-2 text-sm">
            <strong>Interpretation:</strong> Out of 11 files reviewed (8 cardholder + 3 merchant), <strong>zero had risk ratings</strong>. This indicates systematic absence of KYC/AML procedures, not isolated errors.
          </p>
        </div>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">Suspicious Activity Monitoring Failure:</p>
          <blockquote className="text-neutral-700 italic border-l-4 border-neutral-300 pl-4 mb-2">
            "Ineffective suspicious activity monitoring and reporting" aimed at preventing fraud
          </blockquote>
          <blockquote className="text-neutral-700 italic border-l-4 border-neutral-300 pl-4">
            "Ineffective anti-money-laundering safeguards"
          </blockquote>
        </div>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">Sanctions Compliance Failure:</p>
          <blockquote className="text-neutral-700 italic border-l-4 border-neutral-300 pl-4">
            "No evidence that customers were being screened to ensure they weren't under U.S. sanctions"—described as <strong>"a requirement under its licensing agreement with Mastercard"</strong>
          </blockquote>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-2">
          <strong>Audit Classification:</strong> Violations were classified as <strong>"high priority"</strong>
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-2">
          <strong>Enforcement Action:</strong> Yana was <strong>"banned from issuing new Mastercard-branded cards until it corrected"</strong> the violations
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          <strong>Post-Remediation:</strong> <strong>"The suspension was later lifted after the problems were addressed"</strong>
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Mastercard Spokesman Seth Eisen Public Statements</h3>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">Statement on Government Engagement:</p>
          <blockquote className="text-neutral-700 italic border-l-4 border-neutral-300 pl-4">
            "Ongoing government engagement is built into our programs so that we can quickly look into claims, identify the situation, and take action as appropriate. That's exactly what we have done with the U.S. government on this matter from a very early stage."
          </blockquote>
          <p className="text-neutral-600 mt-2 text-sm">
            <strong>Analysis:</strong> Eisen's characterization that Mastercard acted "quickly" and "from a very early stage" is contradicted by the 22-month timeline (May 2023 warnings → March 2025 action). The phrase "ongoing government engagement is built into our programs" suggests Mastercard views compliance as reactive (responding to government requests) rather than proactive (detecting violations independently).
          </p>
        </div>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">Statement on Yana Reinstatement:</p>
          <blockquote className="text-neutral-700 italic border-l-4 border-neutral-300 pl-4">
            "The goal is to ensure they avoid further violations of Mastercard standards or regulatory requirements. We reserve the right to revisit any allegation to ensure this compliance."
          </blockquote>
          <p className="text-neutral-600 mt-2 text-sm">
            <strong>Analysis:</strong> The decision to reinstate Yana after "addressing violations" demonstrates Mastercard prioritized rehabilitation over termination. Given that Yana had <strong>zero risk ratings</strong> on all tested files and <strong>no sanctions screening</strong>, the speed of reinstatement raises questions about thoroughness of remediation verification.
          </p>
        </div>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">Statement on Qi Card Blocking:</p>
          <blockquote className="text-neutral-700 italic border-l-4 border-neutral-300 pl-4">
            "Information about Qi Card and International Smart Card that Mastercard received from government agencies was compiled with existing information and actioned accordingly."
          </blockquote>
          <p className="text-neutral-600 mt-2 text-sm">
            <strong>Analysis:</strong> This phrasing reveals Mastercard <strong>relied on "information from government agencies"</strong> rather than its own fraud detection systems to identify the scheme. The passive construction ("was compiled... and actioned") obscures who made the decision and when.
          </p>
        </div>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Visa Spokeswoman Fletcher Cook Public Statements</h3>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">Statement on Compliance Commitment:</p>
          <blockquote className="text-neutral-700 italic border-l-4 border-neutral-300 pl-4">
            "Central to our operations is a commitment to ensuring that transactions on our network do not violate the law. When we identify or are alerted to any suspicious or illegal activity, we take action."
          </blockquote>
          <p className="text-neutral-600 mt-2 text-sm">
            <strong>Analysis:</strong> The phrase "when we identify <strong>or are alerted to</strong>" [emphasis added] implicitly concedes Visa did not independently identify the Iraq fraud—they were "alerted to" it by Treasury. The 22-month delay between being "alerted" (May 2023) and "taking action" (April 2025) contradicts the implication of prompt response.
          </p>
        </div>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Documents Reviewed by Wall Street Journal</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The WSJ report cites "documents reviewed by The Wall Street Journal" throughout, indicating the journalists obtained:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-neutral-700 mb-4 ml-4">
          <li><strong>Mastercard internal audit reports</strong> (Yana Banking Services review)</li>
          <li><strong>Transaction volume data</strong> from Iraqi Central Bank or payment networks</li>
          <li><strong>Correspondence or meeting notes</strong> from Treasury/Fed/network discussions</li>
          <li><strong>Iraqi government documents</strong> describing the scheme mechanics</li>
        </ol>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The level of detail—specific dollar figures, exact dates of meetings, internal audit language—suggests either:
          <strong>Whistleblower(s)</strong> within Visa/Mastercard provided documents;
          <strong>Treasury/Federal Reserve officials</strong> leaked to pressure networks;
          <strong>Iraqi Central Bank officials</strong> provided documents; or
          <strong>Congressional investigators</strong> obtained documents through oversight authority and shared with press.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">First Iraqi Bank Internal Notice (May 2025)</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          First Iraqi Bank issued official notice titled "FIB Visa suspend" announcing "the current mechanism for settling international card transactions has been suspended". The bank's LinkedIn-announced statement confirmed services "remain fully operational for local usage" but international functionality was terminated.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-amber-50 border-l-4 border-amber-400">
          <strong>Analysis:</strong> The formal written notice and PDF distribution suggest legal/compliance teams drafted the statement carefully to avoid admitting wrongdoing while notifying customers. The passive voice ("has been suspended") obscures whether FIB voluntarily suspended or was forced by Visa.
        </p>

        <h2 className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-6">What the Timeline Reveals About Willful Blindness</h2>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">22-Month Delay Structure</h3>
        
        <div className="overflow-x-auto mb-6">
          <table className="data-table w-full">
            <thead>
              <tr>
                <th className="text-left">Date</th>
                <th className="text-left">Event</th>
                <th className="text-left">Months Since Initial Warning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>April 2023</td>
                <td>2,900% transaction surge to $1.5B/month</td>
                <td>Baseline</td>
              </tr>
              <tr className="bg-amber-50">
                <td><strong>May 2023</strong></td>
                <td><strong>Treasury/Fed begin questioning networks</strong></td>
                <td><strong>0 months</strong></td>
              </tr>
              <tr>
                <td>Aug 2023</td>
                <td>Mastercard audits Yana, finds zero sanctions screening</td>
                <td>3 months</td>
              </tr>
              <tr>
                <td>Fall 2023</td>
                <td>Treasury informs networks of militia involvement</td>
                <td>4-6 months</td>
              </tr>
              <tr>
                <td>2024</td>
                <td>Regular meetings held throughout year</td>
                <td>7-19 months</td>
              </tr>
              <tr>
                <td>Early 2024</td>
                <td>First Iraqi Bank Visa Direct: $1.2B in 2 months, one account transfers $5M+/day</td>
                <td>8-9 months</td>
              </tr>
              <tr className="bg-red-50">
                <td><strong>March 2025</strong></td>
                <td><strong>Mastercard blocks 100K+ cards</strong></td>
                <td><strong>22 months</strong></td>
              </tr>
              <tr>
                <td>April 2025</td>
                <td>Visa blocks 70K cards</td>
                <td>23 months</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Estimated Fee Revenue During Delay Period</h3>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">2023 Fees (May-Dec, 8 months at ~$750M/month avg):</p>
            <ul className="text-neutral-700 space-y-1">
              <li>Transaction volume: $750M/month × 8 months = $6B</li>
              <li>Network fees at 1-1.4% = <strong>$60-84M combined</strong></li>
              <li>Per network: <strong>$30-42M each</strong></li>
            </ul>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">2024 Fees (Full year at ~$1.2B/month avg):</p>
            <ul className="text-neutral-700 space-y-1">
              <li>Transaction volume: $1.2B/month × 12 months = $14.4B</li>
              <li>Network fees at 1-1.4% = <strong>$144-202M combined</strong></li>
              <li>Per network: <strong>$72-101M each</strong></li>
            </ul>
          </div>
        </div>
        
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-6">
          <p className="font-semibold text-red-900 mb-2">Total Delay Period Fee Revenue (May 2023 - Feb 2025, 22 months):</p>
          <ul className="text-red-800 space-y-1">
            <li><strong>Combined networks: $204-286 million</strong></li>
            <li><strong>Per network: $102-143 million</strong></li>
          </ul>
          <p className="text-red-700 mt-2 text-sm italic">This represents pure profit attributable to the delay in implementing blocking measures after receiving explicit warnings.</p>
        </div>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Pattern of Reactive Rather Than Proactive Compliance</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The timeline demonstrates networks responded to specific regulatory pressure points but did not proactively detect or interdict fraud:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="font-semibold text-red-900 mb-2">Reactive Response Pattern (What Happened):</p>
            <ol className="list-decimal list-inside text-red-800 space-y-1 text-sm">
              <li><strong>May 2023:</strong> Treasury questions → Networks begin monitoring but no enforcement</li>
              <li><strong>Aug 2023:</strong> Mastercard audits Yana → Finds no sanctions screening → Temporary suspension then reinstatement</li>
              <li><strong>Fall 2023:</strong> Treasury provides militia intelligence → Networks continue processing</li>
              <li><strong>Early 2024:</strong> $5M+ daily transfers → Takes 10 weeks to suspend</li>
              <li><strong>March-April 2025:</strong> Only after nearly 2 years → Large-scale blocking</li>
            </ol>
          </div>
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <p className="font-semibold text-emerald-900 mb-2">Proactive Compliance (What Should Have Happened):</p>
            <ol className="list-decimal list-inside text-emerald-800 space-y-1 text-sm">
              <li><strong>April 2023:</strong> 2,900% surge → Automatic alert → Immediate blocking pending investigation</li>
              <li><strong>May 2023:</strong> Treasury inquiry → Emergency audit → Suspension within weeks</li>
              <li><strong>Aug 2023:</strong> Yana audit finds zero screening → Immediate permanent termination</li>
              <li><strong>Early 2024:</strong> $5M+ daily transfers → Real-time blocking on first transaction</li>
              <li><strong>Ongoing:</strong> Continuous monitoring with monthly reviews and automatic velocity checks</li>
            </ol>
          </div>
        </div>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Comparison to Money Transfer Operators</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          Western Union and MoneyGram faced similar scrutiny over Iraqi transaction surges:
        </p>
        
        <div className="overflow-x-auto mb-4">
          <table className="data-table w-full">
            <thead>
              <tr>
                <th className="text-left">Metric</th>
                <th className="text-left">Western Union/MoneyGram</th>
                <th className="text-left">Visa/Mastercard</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Peak monthly volume</td>
                <td>$1.7B (June 2023)</td>
                <td>$1.5B (April 2023)</td>
              </tr>
              <tr>
                <td>Public disclosure</td>
                <td>Q2 2023 earnings call (July 2023)</td>
                <td>None until WSJ report (May 2025)</td>
              </tr>
              <tr>
                <td>Regulatory response</td>
                <td>Limits imposed mid-2024</td>
                <td>Limits imposed early 2025</td>
              </tr>
              <tr>
                <td>Volume reduction</td>
                <td>To $110M by Oct 2024</td>
                <td>To $300M cap by mid-2025</td>
              </tr>
              <tr>
                <td>Time to compliance</td>
                <td>~12 months</td>
                <td>~24 months</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-amber-50 border-l-4 border-amber-400">
          <strong>Analysis:</strong> Regulators moved faster and more aggressively against money transfer operators than against payment card networks, despite comparable transaction volumes and fraud patterns. This suggests either: (1) Card networks' political influence delayed enforcement; (2) Regulatory agencies viewed card transactions as lower priority than wire transfers; or (3) Technical complexity of card network enforcement created delays. None of these explanations exculpate the networks—all three suggest inadequate urgency given the terrorism financing nexus.
        </p>

        <h2 className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-6">Legal Implications of the Timeline</h2>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Actual Knowledge vs. Constructive Knowledge</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">The detailed timeline eliminates any defense based on lack of knowledge:</p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="font-semibold text-red-900 mb-2">Actual Knowledge (Highest Liability):</p>
            <ul className="list-disc list-inside text-red-800 space-y-1 text-sm">
              <li><strong>May 2023:</strong> Treasury/Fed explicitly questioned rising transactions</li>
              <li><strong>Fall 2023:</strong> Treasury explicitly informed networks of militia involvement</li>
              <li><strong>Aug 2023:</strong> Mastercard's own audit found zero sanctions screening at Yana</li>
              <li><strong>2024:</strong> "Regular meetings" with Treasury, Fed, and Iraqi Central Bank</li>
              <li><strong>Early 2024:</strong> First Iraqi Bank account transferred $5M+ daily for 10 weeks before suspension</li>
            </ul>
          </div>
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="font-semibold text-amber-900 mb-2">Constructive Knowledge (Still Sufficient for Liability):</p>
            <ul className="list-disc list-inside text-amber-800 space-y-1 text-sm">
              <li><strong>April 2023:</strong> 2,900% overnight surge should have triggered alerts</li>
              <li><strong>July 2023:</strong> Western Union publicly disclosed elevated Iraq volumes under regulatory scrutiny</li>
              <li><strong>Throughout 2023-2024:</strong> Industry-wide awareness of Iraqi sanctions evasion schemes</li>
            </ul>
          </div>
        </div>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Reckless Disregard Standard</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">The timeline satisfies every element of "reckless disregard" under OFAC and BSA enforcement standards:</p>
        
        <ol className="list-decimal list-inside space-y-2 text-neutral-700 mb-6 ml-4">
          <li><strong>High probability of violation:</strong> 2,900% overnight surge + Treasury warnings = high probability militia involvement</li>
          <li><strong>Deliberate avoidance:</strong> 22-month delay despite regular meetings = deliberate choice to continue processing</li>
          <li><strong>Financial motive:</strong> $102-143M per network in fee revenue during delay period = motive to avoid enforcement</li>
          <li><strong>Inadequate controls:</strong> Yana audit showing zero screening + Visa Direct $5M+ daily transfers = systematic control failures</li>
        </ol>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Comparison to Settled Cases</h3>
        
        <div className="overflow-x-auto mb-4">
          <table className="data-table w-full">
            <thead>
              <tr>
                <th className="text-left">Case</th>
                <th className="text-left">Warning Timeline</th>
                <th className="text-left">Response Time</th>
                <th className="text-left">Penalty</th>
                <th className="text-left">Iraq Scheme</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Payoneer</strong></td>
                <td>No specific warning documented</td>
                <td>N/A</td>
                <td>$1.4M</td>
                <td>22 months from warning to action</td>
              </tr>
              <tr>
                <td><strong>BitPay</strong></td>
                <td>No specific warning documented</td>
                <td>N/A</td>
                <td>$507K</td>
                <td>22 months</td>
              </tr>
              <tr>
                <td><strong>Epsilon</strong></td>
                <td>Received cautionary letter, continued shipments</td>
                <td>Months</td>
                <td>$4.07M upheld</td>
                <td>22 months</td>
              </tr>
              <tr>
                <td><strong>HSBC</strong></td>
                <td>Years of regulatory warnings</td>
                <td>Years</td>
                <td>$1.92B</td>
                <td>22 months</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-amber-50 border-l-4 border-amber-400">
          <strong>Analysis:</strong> Visa and Mastercard's 22-month delay <strong>after explicit warnings</strong> is most analogous to Epsilon Electronics (which received a cautionary letter then continued prohibited shipments) and HSBC (which ignored years of warnings about money laundering). The court in Epsilon <strong>specifically upheld</strong> the penalty based on continued violations after receiving warning, calling it "reckless disregard."
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Aggravating Factors for Penalty Calculation</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">OFAC penalty matrix considers aggravating factors:</p>
        
        <ol className="list-decimal list-inside space-y-2 text-neutral-700 mb-6 ml-4">
          <li><strong>✓ Willful or reckless violation:</strong> 22-month delay after explicit warnings</li>
          <li><strong>✓ Awareness of conduct:</strong> Regular meetings with Treasury throughout 2024</li>
          <li><strong>✓ Harm to sanctions program objectives:</strong> Enabled $1.5B scheme funding Iranian proxies</li>
          <li><strong>✓ Pattern of conduct:</strong> Multiple Iraqi issuers, continued reinstatements (Yana), repeated warnings</li>
          <li><strong>✓ Sophisticated parties:</strong> Multi-billion dollar payment networks with extensive compliance resources</li>
          <li><strong>✓ Concealment:</strong> No public disclosure until WSJ investigation</li>
        </ol>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Mitigating Factors (Weak)</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">Potential mitigating factors carry little weight given the timeline:</p>
        
        <ol className="list-decimal list-inside space-y-2 text-neutral-700 mb-6 ml-4">
          <li><strong>Voluntary self-disclosure:</strong> No evidence networks self-disclosed; Treasury discovered and warned them</li>
          <li><strong>Cooperation:</strong> "Regular meetings" suggest engagement, but 22-month delay undercuts cooperation credit</li>
          <li><strong>Remediation:</strong> Eventual blocking in March-April 2025, but only after nearly 2 years</li>
          <li><strong>No prior violations:</strong> Both networks lack recent OFAC enforcement history (genuine mitigation)</li>
          <li><strong>Compliance investment:</strong> Both networks have extensive compliance programs, but programs failed to detect 2,900% surge</li>
        </ol>

        <h2 className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-6">Conclusion</h2>
        
        <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-lg mb-6">
          <p className="text-lg leading-relaxed mb-4 text-neutral-800">
            The documented timeline of Treasury warnings and network responses establishes a clear case of willful blindness under OFAC and BSA standards.
          </p>
          <p className="text-lg leading-relaxed mb-4 text-neutral-800">
            Federal Reserve and Treasury officials explicitly questioned the networks about suspicious transaction growth in <strong>May 2023</strong>—just one month after the peak surge—yet Visa and Mastercard did not implement large-scale blocking measures until <strong>March-April 2025</strong>, a delay of <strong>22 months</strong>.
          </p>
          <p className="text-lg leading-relaxed text-neutral-800">
            During this delay period, the networks earned an estimated <strong>$102-143 million each</strong> in transaction fees while processing <strong>$400 million to $1.1 billion monthly</strong> in militia-linked transactions.
          </p>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          Most damaging is the Mastercard internal audit of Yana Banking Services in August 2023, which documented <strong>zero customer risk ratings, no sanctions screening, and ineffective AML controls</strong>—yet Mastercard <strong>reinstated Yana after temporary suspension</strong> rather than permanently terminating the relationship. This decision to restore a non-compliant issuer to active status demonstrates prioritization of business revenue over sanctions compliance.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The networks' public statements claiming they acted "quickly" and "from a very early stage" are directly contradicted by the 22-month timeline. The repeated characterization that networks took action "when we identify or are alerted to" suspicious activity implicitly concedes their fraud detection systems <strong>did not independently identify</strong> the 2,900% overnight surge—they required explicit Treasury warnings and nearly two years of pressure before acting.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          Comparing this timeline to settled OFAC cases, Visa and Mastercard's exposure is most analogous to <strong>Epsilon Electronics</strong> (which continued prohibited shipments after receiving OFAC cautionary letter, leading to $4.07M penalty upheld on appeal) and <strong>HSBC</strong> (which ignored years of warnings about money laundering, leading to $1.92B settlement). The key distinction is scale: where Epsilon and HSBC processed millions or hundreds of millions, Visa and Mastercard facilitated <strong>$1.5 billion</strong> in militia-linked transactions over multiple years after receiving explicit warnings.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The internal communications and audit findings—particularly the Yana review showing zero sanctions screening—will be central exhibits in any enforcement proceeding.
        </p>
        
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-900 font-semibold text-lg mb-2">Key Conclusions:</p>
          <p className="text-red-800 leading-relaxed mb-3">
            These documents establish that the networks possessed actual knowledge of control failures at Iraqi issuing partners yet chose to reinstate those partners and continue operations.
          </p>
          <p className="text-red-800 leading-relaxed">
            This pattern of conduct satisfies the "reckless disregard" standard and supports penalties in the <strong>multi-hundred million to billion-dollar range</strong> per network based on precedent and statutory guidelines.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <nav className="flex justify-between pt-6 border-t border-neutral-200 no-print">
        <Link href="/" className="btn btn-ghost">
          <ArrowLeftIcon className="w-4 h-4" />
          Summary
        </Link>
        <Link href="/legal-analysis" className="btn btn-secondary">
          Legal Analysis
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </nav>
    </article>
  );
}
