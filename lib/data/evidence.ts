// Evidence repository data

export type EvidenceCategory = 
  | 'audit' 
  | 'warning' 
  | 'congressional' 
  | 'financial' 
  | 'media';

export interface Evidence {
  id: string;
  title: string;
  shortTitle: string;
  category: EvidenceCategory;
  date: string;
  source: string;
  description: string;
  keyFindings: string[];
  significance: string;
  citations?: string[];
}

export const evidenceDocuments: Evidence[] = [
  {
    id: 'doc-001',
    title: 'Yana Banking Services Compliance Audit',
    shortTitle: 'Yana Audit',
    category: 'audit',
    date: 'August 2023',
    source: 'Mastercard Global Compliance',
    description: 'Internal Mastercard audit of Erbil-based Yana Banking Services revealing systematic absence of sanctions screening, customer risk ratings, and anti-money laundering controls.',
    keyFindings: [
      'No evidence of OFAC SDN list screening',
      '0 of 11 files tested had risk ratings',
      '"Ineffective" suspicious activity monitoring',
      '"Ineffective" AML safeguards',
      'Violations classified as "High Priority"'
    ],
    significance: 'Provides forensic proof that Mastercard knew its Iraqi partners lacked fundamental compliance controls during the peak of the militia financing scheme. The subsequent reinstatement of Yana demonstrates prioritization of revenue over compliance.',
    citations: [
      'WSJ Investigation, May 31, 2025',
      'IFMAT Report'
    ]
  },
  {
    id: 'doc-002',
    title: 'U.S. Treasury Fall 2023 Intelligence Briefing',
    shortTitle: 'Treasury Warning',
    category: 'warning',
    date: 'Fall 2023',
    source: 'U.S. Department of the Treasury',
    description: 'Formal briefing to Visa and Mastercard executives explicitly identifying Iraqi militia groups as the primary actors behind the transaction surge, detailing smuggling operations and POS farm schemes.',
    keyFindings: [
      'Named militia groups: KH, Badr, AAH',
      'Detailed card smuggling routes to UAE/Turkey',
      'Explained POS farm operations',
      'Described VPN masking techniques',
      'Connected scheme to terror financing'
    ],
    significance: 'Establishes actual knowledge of militia involvement, satisfying the deliberate indifference standard under Weiss v. NatWest. The 18+ month delay after this briefing constitutes reckless disregard.',
    citations: [
      'WSJ: "Treasury officials informed the card companies last fall"',
      'MPC Report'
    ]
  },
  {
    id: 'doc-003',
    title: 'May 2023 Federal Reserve / Treasury Inquiry',
    shortTitle: 'Initial Inquiry',
    category: 'warning',
    date: 'May 2023',
    source: 'Federal Reserve Bank of New York / Treasury',
    description: 'First documented regulatory contact with Visa and Mastercard regarding the 2,900% transaction surge, just one month after volumes peaked at $1.5 billion.',
    keyFindings: [
      'Both networks placed on formal notice',
      'Occurred one month after surge peaked',
      'Specifically questioned volume increase',
      'No significant enforcement action followed',
      'Warnings went "mostly unheeded for months"'
    ],
    significance: 'Marks the beginning of the 22-month "Gap Period" during which networks continued processing despite regulatory scrutiny. Establishes constructive knowledge of suspicious activity.',
    citations: [
      'IFMAT Report',
      'WSJ Investigation'
    ]
  },
  {
    id: 'doc-004',
    title: 'Wall Street Journal Investigation Report',
    shortTitle: 'WSJ Investigation',
    category: 'media',
    date: 'May 31, 2025',
    source: 'Wall Street Journal',
    description: 'Comprehensive investigative report exposing the full scope of the militia payment card scheme, based on internal documents, official sources, and financial data analysis.',
    keyFindings: [
      '$1.5B peak monthly volume documented',
      '2,900% "almost overnight" surge',
      '$450M militia profits in 2023',
      '$120M network fees collected',
      '22-month delay after Treasury warnings'
    ],
    significance: 'Provides the most comprehensive public documentation of the scheme, triggering congressional scrutiny and confirming details that establish liability under ATA, BSA, and OFAC.',
    citations: [
      'WSJ World Section, May 31, 2025'
    ]
  },
  {
    id: 'doc-005',
    title: 'Wilson-Steube Congressional Letter',
    shortTitle: 'Congressional Letter',
    category: 'congressional',
    date: 'February 7, 2025',
    source: 'U.S. House of Representatives',
    description: 'Letter from Representatives Joe Wilson (R-SC) and Greg Steube (R-FL) to Secretary of State calling for immediate sanctions against 18 Iraqi financial institutions and 9 individuals.',
    keyFindings: [
      'Targets Qi Card / International Smart Card',
      'Identifies Al-Rafidain Bank PMF ties',
      'Names 18 institutions for sanctions',
      'Lists 9 individuals including executives',
      'Cites "Maximum Pressure" policy'
    ],
    significance: 'Demonstrates congressional awareness and bipartisan concern. Creates pressure for executive branch action and establishes political record of the scheme\'s national security implications.',
    citations: [
      'Fox News Static Document Archive'
    ]
  },
  {
    id: 'doc-006',
    title: 'Statistical Analysis: UAE Transaction Anomaly',
    shortTitle: 'UAE Statistics',
    category: 'financial',
    date: '2024',
    source: 'Financial Intelligence Analysis',
    description: 'Statistical analysis showing Iraqi cards represented 20% of all foreign cardholder transactions in UAE despite Iraqis comprising only 0.4% of visitors—a 50x overrepresentation indicating systemic fraud.',
    keyFindings: [
      '20% of UAE foreign transactions = Iraqi cards',
      'Only 0.4% of UAE visitors are Iraqi',
      '50x statistical overrepresentation',
      'Concentrated in jewelers and free trade zones',
      'Merchants conducting 100% Iraqi card business'
    ],
    significance: 'Provides mathematical proof that the transaction volumes were statistically impossible for legitimate travel, constituting per se evidence of money laundering that internal controls should have detected.',
    citations: [
      'WSJ Investigation',
      'Treasury Analysis'
    ]
  },
  {
    id: 'doc-007',
    title: 'First Iraqi Bank / Visa Direct Abuse Analysis',
    shortTitle: 'Visa Direct Abuse',
    category: 'audit',
    date: 'Early 2024',
    source: 'Financial Intelligence',
    description: 'Documentation of the $1.2 billion transfer spike through First Iraqi Bank\'s Visa Direct service over just 10 weeks, including a single account transferring $5M+ daily to Indonesian accounts.',
    keyFindings: [
      '$1.2B transferred in 10 weeks',
      'Single account: $5M+ daily transfers',
      '11 Indonesian accounts targeted',
      '10-week delay before suspension',
      'Obvious money laundering pattern ignored'
    ],
    significance: 'Demonstrates catastrophic failure of real-time transaction monitoring. A $5M/day transfer pattern should trigger immediate suspension, not 10-week delay. Establishes Visa\'s direct knowledge of product abuse.',
    citations: [
      'WSJ Investigation',
      'IFMAT Report'
    ]
  },
  {
    id: 'doc-008',
    title: 'POS Farm Intelligence Brief',
    shortTitle: 'POS Farms',
    category: 'warning',
    date: 'Fall 2023',
    source: 'U.S. Treasury / Intelligence Sources',
    description: 'Intelligence documenting the "Point-of-Sale Farm" operations where scammers used dozens of POS devices with VPN masking to process fake transactions for Iraqi cards.',
    keyFindings: [
      'Fake $5,000 transactions processed',
      'Merchants received 5% kickback',
      '"Dozens of devices" in single locations',
      'VPNs used to mask geolocation',
      'Industrial-scale operation'
    ],
    significance: 'Details the specific typology used to extract cash, which networks\' fraud detection systems should have identified. The systematic nature demonstrates organized exploitation, not isolated incidents.',
    citations: [
      'WSJ Investigation',
      'Treasury briefings'
    ]
  },
  {
    id: 'doc-009',
    title: 'Card Smuggling Seizure Records',
    shortTitle: 'Smuggling Records',
    category: 'warning',
    date: '2023-2024',
    source: 'Iraqi Airport Security / Border Guards',
    description: 'Arrest records documenting the seizure of thousands of cards at Iraqi airports and border crossings, including 300 cards hidden in cigarette packs and smuggling attempts to Iran.',
    keyFindings: [
      '300 cards found in cigarette packs (Najaf)',
      '1,200+ cards seized from 24 individuals',
      '$5M+ in loaded value seized',
      'Iranian nationals caught smuggling Mastercards',
      'Physical card transportation documented'
    ],
    significance: 'Provides physical evidence of the smuggling operation that Treasury briefed to the networks. The systematic nature and Iranian involvement directly implicates sanctioned entities.',
    citations: [
      'WSJ Investigation',
      'IFMAT Report'
    ]
  },
  {
    id: 'doc-010',
    title: 'Qi Card / International Smart Card Analysis',
    shortTitle: 'Qi Card Report',
    category: 'financial',
    date: 'January 2025',
    source: 'Treasury / Congressional Analysis',
    description: 'Analysis of the Qi Card payment system showing 5,000% growth in transaction volumes and distribution of 200,000+ cards to PMF militia members receiving government salaries.',
    keyFindings: [
      'Growth: $10M/month → $500M/month (5,000%)',
      '200,000+ PMF members received cards',
      'Founder Bahaa Abdul Hadi arrested (2020)',
      'Commanders seized subordinates\' cards',
      '"Ghost employees" padded rolls'
    ],
    significance: 'Documents the primary vehicle for militia financing and demonstrates the scale of designated-group penetration into the card system. ISC\'s corporate connections raise questions about network due diligence.',
    citations: [
      'Wilson-Steube Letter',
      'WSJ Investigation',
      'Amwaj Media'
    ]
  },
  {
    id: 'doc-011',
    title: 'OFAC Designation Announcements (October 2025)',
    shortTitle: 'OFAC Designations',
    category: 'congressional',
    date: 'October 2025',
    source: 'U.S. Department of the Treasury',
    description: 'Treasury press releases announcing OFAC designation of three Iraqi banking executives and two PMF-controlled companies for laundering money for IRGC-QF and militias.',
    keyFindings: [
      'Ali Ghulam designated',
      'Ali Meften Al Baidani designated',
      'Aqeel Meften Al Baidani designated',
      'Muhandis General Company designated',
      'Baladna Agricultural Investments designated'
    ],
    significance: 'Post-facto validation that Treasury\'s concerns were justified. Designations confirm the sanctions nexus that networks were warned about 22 months earlier.',
    citations: [
      'Treasury Press Release sb0277',
      'Shafaq News'
    ]
  },
  {
    id: 'doc-012',
    title: 'First Iraqi Bank Service Suspension Notice',
    shortTitle: 'FIB Suspension',
    category: 'financial',
    date: 'May 2025',
    source: 'First Iraqi Bank',
    description: 'Official bank notice announcing suspension of international card transaction settlement mechanism, ending the Visa Direct channel that facilitated $1.2 billion in transfers.',
    keyFindings: [
      'International settlement suspended',
      'Domestic services remain operational',
      'Direct result of regulatory pressure',
      'Official PDF notice issued'
    ],
    significance: 'Documents the closure of a major laundering channel, but only after $1.2 billion had already been transferred and Treasury intervened.',
    citations: [
      'FIB Official Website',
      'The New Region (X/Twitter)'
    ]
  }
];

// Helper functions
export const getEvidenceByCategory = (category: EvidenceCategory): Evidence[] => {
  return evidenceDocuments.filter(e => e.category === category);
};

export const getCategoryLabel = (category: EvidenceCategory): string => {
  const labels: Record<EvidenceCategory, string> = {
    audit: 'Audit',
    warning: 'Warning',
    congressional: 'Congressional',
    financial: 'Financial Data',
    media: 'Media'
  };
  return labels[category];
};

export const getCategoryColor = (category: EvidenceCategory): string => {
  const colors: Record<EvidenceCategory, string> = {
    audit: 'blue',
    warning: 'amber',
    congressional: 'emerald',
    financial: 'purple',
    media: 'slate'
  };
  return colors[category];
};

export const getEvidenceCount = (): Record<EvidenceCategory, number> => {
  return {
    audit: evidenceDocuments.filter(e => e.category === 'audit').length,
    warning: evidenceDocuments.filter(e => e.category === 'warning').length,
    congressional: evidenceDocuments.filter(e => e.category === 'congressional').length,
    financial: evidenceDocuments.filter(e => e.category === 'financial').length,
    media: evidenceDocuments.filter(e => e.category === 'media').length
  };
};

