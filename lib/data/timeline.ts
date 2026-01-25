// Comprehensive timeline data based on investigative sources

export type TimelineCategory = 
  | 'warning' 
  | 'violation' 
  | 'action' 
  | 'regulatory' 
  | 'attack';

export interface TimelineEvent {
  id: string;
  date: string;
  dateSort: string; // ISO date for sorting
  title: string;
  description: string;
  category: TimelineCategory;
  financialImpact?: string;
  source?: string;
  details?: string[];
  isKeyEvent?: boolean;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'evt-001',
    date: 'November 2022',
    dateSort: '2022-11-01',
    title: 'Treasury/Fed Shut Down Wire Transfer Loophole',
    description: 'U.S. Treasury and Federal Reserve Bank of New York implement electronic monitoring platform for Iraqi bank wire transfers, effectively closing a major channel for illicit dollar flows.',
    category: 'regulatory',
    details: [
      'New system requires beneficiary disclosure for all transfers',
      'NY Fed tracks funds "until they reach their end destination"',
      '80% of transfer requests initially rejected',
      'Forces militias to seek alternative dollar access methods'
    ],
    source: 'WSJ Investigation'
  },
  {
    id: 'evt-002',
    date: 'January 2023',
    dateSort: '2023-01-15',
    title: 'Baseline Transaction Volume Established',
    description: 'Cross-border Visa and Mastercard transactions in Iraq average approximately $50 million per month, representing normal operational baseline.',
    category: 'regulatory',
    financialImpact: '$50M/month',
    source: 'Treasury Data'
  },
  {
    id: 'evt-003',
    date: 'Early 2023',
    dateSort: '2023-02-01',
    title: 'CBI Permits Cards at Official Rate',
    description: 'Central Bank of Iraq permits cross-border card payments at official exchange rate (1,320 IQD/USD), creating 21% arbitrage opportunity vs. market rate.',
    category: 'regulatory',
    details: [
      'Official rate: 1,320 IQD per dollar',
      'Market rate: ~1,600 IQD per dollar',
      'Creates 21% profit margin for arbitrage',
      'Networks offer financial incentives to boost Iraqi transactions'
    ],
    source: 'CBI Policy Documents'
  },
  {
    id: 'evt-004',
    date: 'April 2023',
    dateSort: '2023-04-01',
    title: 'Transaction Volume Surges 2,900%',
    description: 'Iraqi cross-border card transactions explode from $50M to $1.5 billion monthly "almost overnight" — a statistical anomaly that should have triggered immediate compliance intervention.',
    category: 'violation',
    financialImpact: '$1.5B/month',
    isKeyEvent: true,
    details: [
      '2,900% increase in single month',
      'Anomaly described as occurring "almost overnight"',
      'Should have triggered automated fraud detection',
      'Networks had offered incentives to boost transaction levels'
    ],
    source: 'WSJ Investigation'
  },
  {
    id: 'evt-005',
    date: 'May 2023',
    dateSort: '2023-05-15',
    title: 'Treasury & Fed Begin Questioning Networks',
    description: 'Federal Reserve Bank of New York and U.S. Treasury officials explicitly ask Visa and Mastercard to explain the massive spike in Iraqi transactions.',
    category: 'warning',
    isKeyEvent: true,
    details: [
      'First documented regulatory warning',
      'Occurred just one month after peak surge',
      'Both networks placed on formal notice',
      'Officials specifically questioned volume increase'
    ],
    source: 'IFMAT Report'
  },
  {
    id: 'evt-006',
    date: 'July 2023',
    dateSort: '2023-07-15',
    title: 'Western Union Publicly Discloses Iraq Concerns',
    description: 'Western Union announces in earnings call that it is having "regular discussions with policymakers" about elevated Iraqi remittance volumes, putting entire industry on notice.',
    category: 'regulatory',
    financialImpact: '$1.7B/month (WU)',
    details: [
      'WU Iraq volumes reached $1.7B in June 2023',
      'Public disclosure to shareholders',
      'Put payment industry on notice',
      'Visa/MC made no similar disclosure'
    ],
    source: 'Western Union Q2 2023 Earnings'
  },
  {
    id: 'evt-007',
    date: 'July 2023',
    dateSort: '2023-07-19',
    title: 'Treasury Bans 14 Iraqi Banks from USD',
    description: 'U.S. Treasury and NY Fed ban 14 additional Iraqi banks from conducting dollar transactions, citing money laundering concerns linked to Iran.',
    category: 'regulatory',
    details: [
      'Brings total banned banks to ~22 of 72',
      'Treasury: "Strong reason to suspect... Iran"',
      'Forces more traffic to card networks',
      'Increases pressure on remaining channels'
    ],
    source: 'Reuters / Treasury'
  },
  {
    id: 'evt-008',
    date: 'August 2023',
    dateSort: '2023-08-15',
    title: 'Mastercard Audits Yana — Finds Zero Controls',
    description: 'Mastercard Global Compliance Team conducts virtual audit of Yana Banking Services, discovering complete absence of sanctions screening and customer risk ratings.',
    category: 'violation',
    isKeyEvent: true,
    details: [
      '"No customer risk rating is performed"',
      '0 of 11 tested files had risk ratings',
      '"No evidence" of sanctions screening',
      '"Ineffective" AML safeguards',
      'Violations classified as "High Priority"'
    ],
    source: 'Mastercard Internal Audit'
  },
  {
    id: 'evt-009',
    date: 'Fall 2023',
    dateSort: '2023-10-01',
    title: 'Treasury Provides Specific Militia Intelligence',
    description: 'Treasury officials formally brief Visa and Mastercard that Iraqi militias including Kata\'ib Hezbollah are exploiting card networks, detailing smuggling routes and POS farm operations.',
    category: 'warning',
    isKeyEvent: true,
    details: [
      'Named militia groups: KH, Badr, AAH',
      'Detailed smuggling routes: UAE, Turkey, Jordan',
      'Described POS farm operations',
      'Explained VPN masking of transactions',
      'Connected scheme to terrorism financing'
    ],
    source: 'WSJ / Treasury Sources'
  },
  {
    id: 'evt-010',
    date: 'Late 2023',
    dateSort: '2023-12-01',
    title: 'Yana Reinstated After "Remediation"',
    description: 'Despite finding zero compliance controls, Mastercard reinstates Yana Banking Services after alleged remediation rather than permanent termination.',
    category: 'violation',
    details: [
      'Temporary ban on new cards lifted',
      'No evidence of permanent de-risking',
      'Revenue stream maintained',
      'Decision prioritized business continuity'
    ],
    source: 'Mastercard Statement'
  },
  {
    id: 'evt-011',
    date: 'January 2024',
    dateSort: '2024-01-28',
    title: 'Tower 22 Attack — 3 U.S. Troops Killed',
    description: 'Drone attack by Iran-backed Iraqi militia kills three U.S. service members at Tower 22 in Jordan. The responsible group, Kata\'ib Hezbollah, was benefiting from card scheme.',
    category: 'attack',
    isKeyEvent: true,
    details: [
      '3 U.S. service members killed',
      'Attack attributed to Kata\'ib Hezbollah',
      'KH was beneficiary of card scheme',
      'Attack occurred during "Gap Period"',
      'Establishes direct link to U.S. casualties'
    ],
    source: 'DOD / Critical Threats'
  },
  {
    id: 'evt-012',
    date: 'Early 2024',
    dateSort: '2024-02-01',
    title: 'First Iraqi Bank Launches Visa Direct',
    description: 'Baghdad\'s First Iraqi Bank launches Visa Direct instant transfer service, which is immediately exploited for massive capital flight.',
    category: 'action',
    source: 'First Iraqi Bank'
  },
  {
    id: 'evt-013',
    date: 'Early 2024',
    dateSort: '2024-03-01',
    title: '$1.2 Billion Moved via Visa Direct in 10 Weeks',
    description: 'FIB Visa cardholders transfer $1.2 billion overseas in just 10 weeks. One account transfers $5M+ daily to 11 Indonesian accounts.',
    category: 'violation',
    financialImpact: '$1.2B in 10 weeks',
    isKeyEvent: true,
    details: [
      '$1.2B transferred in ~70 days',
      'Single account: $5M+ daily',
      '11 Indonesian accounts targeted',
      'Obvious money laundering pattern',
      '10-week delay before suspension'
    ],
    source: 'WSJ Investigation'
  },
  {
    id: 'evt-014',
    date: 'Throughout 2024',
    dateSort: '2024-06-01',
    title: '"Regular Meetings" Continue — No Major Action',
    description: 'Treasury, Fed, Visa, Mastercard, and CBI hold "regular meetings" throughout 2024 about the Iraqi market. Despite ongoing discussions, volumes remain at $400M-$1.1B monthly.',
    category: 'warning',
    financialImpact: '$400M-$1.1B/month',
    details: [
      'Meetings described as "regular"',
      'Likely monthly or quarterly',
      'Volumes increased 60% YoY',
      'No significant enforcement action',
      'Networks continued collecting fees'
    ],
    source: 'IFMAT Report'
  },
  {
    id: 'evt-015',
    date: 'July 2024',
    dateSort: '2024-07-01',
    title: 'Western Union/MoneyGram Limits Imposed',
    description: 'U.S. and Iraq impose strict limits on Western Union and MoneyGram transfers, driving monthly outflows down to $110M by October.',
    category: 'regulatory',
    details: [
      'WU/MG limited to $110M/month by October',
      'Similar controls NOT imposed on card networks',
      'Raises question of differential treatment',
      'Card networks continued processing billions'
    ],
    source: 'IFMAT Report'
  },
  {
    id: 'evt-016',
    date: 'February 2025',
    dateSort: '2025-02-07',
    title: 'Wilson-Steube Congressional Letter',
    description: 'Representatives Joe Wilson and Greg Steube send letter to State Department calling for immediate sanctions against 18 Iraqi financial institutions and 9 individuals.',
    category: 'regulatory',
    isKeyEvent: true,
    details: [
      'Targets Qi Card and Al-Rafidain Bank',
      'Names 18 Iraqi institutions',
      'Identifies 9 individuals for sanctions',
      'Cites PMF payment card distribution',
      'Calls for "Maximum Pressure" enforcement'
    ],
    source: 'Congressional Correspondence'
  },
  {
    id: 'evt-017',
    date: 'March 2025',
    dateSort: '2025-03-15',
    title: 'Mastercard Blocks 100,000+ Cards',
    description: 'Mastercard finally implements large-scale blocking, removing over 100,000 Iraqi-issued cards and 4,000 UAE merchants from its network.',
    category: 'action',
    isKeyEvent: true,
    details: [
      '100,000+ cards blocked',
      '4,000 UAE merchants removed',
      '50,000+ cards from Qi Card alone',
      '22 months after initial warnings',
      'Spokesperson: "Actioned accordingly"'
    ],
    source: 'Mastercard Statement / WSJ'
  },
  {
    id: 'evt-018',
    date: 'April 2025',
    dateSort: '2025-04-15',
    title: 'Visa Blocks 70,000 Cards',
    description: 'Visa follows Mastercard by flagging 70,000 Iraqi cards for potential fraud and blocking approximately 5,000 UAE vendors.',
    category: 'action',
    details: [
      '70,000 cards flagged',
      '5,000 UAE vendors blocked',
      'Some cards later reactivated',
      '23 months after initial warnings'
    ],
    source: 'Visa Statement / IFMAT'
  },
  {
    id: 'evt-019',
    date: 'May 2025',
    dateSort: '2025-05-20',
    title: 'First Iraqi Bank Suspends International Services',
    description: 'First Iraqi Bank officially announces suspension of international card transaction settlement mechanism, ending the Visa Direct channel.',
    category: 'action',
    details: [
      'International settlement suspended',
      'Domestic services continue',
      'Direct result of Treasury pressure',
      'Official PDF notice published'
    ],
    source: 'First Iraqi Bank Notice'
  },
  {
    id: 'evt-020',
    date: 'Late May 2025',
    dateSort: '2025-05-28',
    title: 'Treasury Requests 200,000+ Card Blocking',
    description: 'U.S. Treasury formally requests Iraqi Central Bank to block more than 200,000 cards identified as used by militia members due to fraud concerns.',
    category: 'regulatory',
    isKeyEvent: true,
    details: [
      '200,000+ cards identified',
      'Request targets PMF-issued cards',
      'Cites "fraud concerns"',
      'Diplomatic phrasing for sanctions evasion'
    ],
    source: 'WSJ / Treasury'
  },
  {
    id: 'evt-021',
    date: 'May 31, 2025',
    dateSort: '2025-05-31',
    title: 'Wall Street Journal Publishes Investigation',
    description: 'WSJ publishes comprehensive investigative report exposing the full scope of the militia card scheme, based on documents and official sources.',
    category: 'regulatory',
    isKeyEvent: true,
    details: [
      'Based on internal documents',
      'Cites U.S. and Iraqi officials',
      'Triggers congressional scrutiny',
      'Networks\' delay publicly exposed'
    ],
    source: 'Wall Street Journal'
  },
  {
    id: 'evt-022',
    date: 'October 2025',
    dateSort: '2025-10-08',
    title: 'OFAC Designates Iraqi Banking Executives',
    description: 'OFAC designates three Iraqi banking executives and two PMF-linked companies for laundering money for IRGC-QF and militias.',
    category: 'regulatory',
    details: [
      'Ali Ghulam designated',
      'Ali Meften Al Baidani designated',
      'Aqeel Meften Al Baidani designated',
      'Muhandis General Company designated',
      'Baladna Agricultural Investments designated'
    ],
    source: 'Treasury Press Release'
  },
  {
    id: 'evt-023',
    date: 'October 2025',
    dateSort: '2025-10-14',
    title: 'Al-Rafidain Bank Shuts PMF Branch',
    description: 'Al-Rafidain Bank closes PMF branch office following OFAC sanctions, severing banking access for militia headquarters.',
    category: 'action',
    details: [
      'PMF branch office closed',
      'Direct result of OFAC designations',
      'Signals Iraqi government compliance'
    ],
    source: 'Shafaq News'
  }
];

// Helper functions
export const getEventsByCategory = (category: TimelineCategory): TimelineEvent[] => {
  return timelineEvents.filter(e => e.category === category);
};

export const getKeyEvents = (): TimelineEvent[] => {
  return timelineEvents.filter(e => e.isKeyEvent);
};

export const getCategoryLabel = (category: TimelineCategory): string => {
  const labels: Record<TimelineCategory, string> = {
    warning: 'Warning',
    violation: 'Violation',
    action: 'Action',
    regulatory: 'Regulatory',
    attack: 'Attack'
  };
  return labels[category];
};

export const getTimelineCategoryColor = (category: TimelineCategory): string => {
  const colors: Record<TimelineCategory, string> = {
    warning: 'amber',
    violation: 'red',
    action: 'emerald',
    regulatory: 'slate',
    attack: 'rose'
  };
  return colors[category];
};

