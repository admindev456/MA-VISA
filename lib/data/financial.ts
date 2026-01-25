// Financial analysis data

export interface KeyMetric {
  id: string;
  label: string;
  value: string;
  description: string;
  source: string;
  context?: string;
  trend?: 'up' | 'down' | 'neutral';
}

export interface TransactionData {
  period: string;
  volume: number;
  label: string;
}

export interface FeeCalculation {
  category: string;
  lowEstimate: number;
  highEstimate: number;
  methodology: string;
}

export interface DamageComponent {
  type: string;
  amount: string;
  basis: string;
  statute?: string;
}

// Key financial metrics from the investigation
export const keyMetrics: KeyMetric[] = [
  {
    id: 'peak-volume',
    label: 'Peak Monthly Volume',
    value: '$1.5B',
    description: 'Highest monthly cross-border transaction volume reached in April 2023',
    source: 'WSJ Investigation',
    context: 'This represents a 2,900% increase from the $50M baseline just months earlier.',
    trend: 'up'
  },
  {
    id: 'surge-percent',
    label: 'Transaction Surge',
    value: '2,900%',
    description: 'Percentage increase in Iraqi card transactions occurring "almost overnight"',
    source: 'WSJ / Treasury',
    context: 'Statistical anomaly that should have triggered immediate compliance review.',
    trend: 'up'
  },
  {
    id: 'militia-profits',
    label: 'Militia Profits (2023)',
    value: '$450M',
    description: 'Estimated profits extracted by Iran-backed militias through currency arbitrage',
    source: 'MPC Report / WSJ',
    context: 'Based on 21% arbitrage margin on transaction volumes.',
    trend: 'up'
  },
  {
    id: 'network-fees',
    label: 'Network Fees (Est.)',
    value: '$120M',
    description: 'Combined estimated fees earned by Visa and Mastercard during the scheme',
    source: 'Analysis',
    context: 'Based on standard interchange and cross-border fee structures.',
    trend: 'up'
  },
  {
    id: 'gap-period',
    label: 'Gap Period Duration',
    value: '22 months',
    description: 'Time between first Treasury warnings (May 2023) and large-scale blocking (March 2025)',
    source: 'Timeline Analysis',
    context: 'Period during which networks continued processing despite regulatory warnings.',
    trend: 'neutral'
  },
  {
    id: 'cards-blocked',
    label: 'Cards Blocked',
    value: '170,000+',
    description: 'Combined Iraqi cards blocked by Visa (70,000) and Mastercard (100,000+)',
    source: 'WSJ / Network Statements',
    context: 'Action taken only after 22 months of warnings.',
    trend: 'down'
  },
  {
    id: 'uae-merchants',
    label: 'UAE Merchants Removed',
    value: '9,000+',
    description: 'Merchants blocked: Mastercard (4,000) + Visa (5,000)',
    source: 'Network Statements',
    context: 'Merchants conducting near-100% Iraqi card business.',
    trend: 'down'
  },
  {
    id: 'pmf-cards',
    label: 'PMF Cardholder Count',
    value: '200,000+',
    description: 'Number of PMF militia members receiving Qi Card salary cards',
    source: 'Treasury / Wilson-Steube',
    context: 'Cards distributed through PMF payroll system.',
    trend: 'neutral'
  }
];

// Transaction volume timeline
export const transactionTimeline: TransactionData[] = [
  { period: 'Jan 2023', volume: 50, label: 'Baseline' },
  { period: 'Feb 2023', volume: 100, label: 'Rising' },
  { period: 'Mar 2023', volume: 400, label: 'Accelerating' },
  { period: 'Apr 2023', volume: 1500, label: 'Peak' },
  { period: 'May 2023', volume: 1200, label: 'Treasury Inquiry' },
  { period: 'Jun 2023', volume: 1100, label: 'Elevated' },
  { period: 'Jul 2023', volume: 1000, label: 'WU Disclosure' },
  { period: 'Aug 2023', volume: 900, label: 'Yana Audit' },
  { period: 'Fall 2023', volume: 800, label: 'Militia Briefing' },
  { period: 'Late 2023', volume: 700, label: 'Sustained' },
  { period: 'Early 2024', volume: 600, label: 'FIB Visa Direct' },
  { period: 'Mid 2024', volume: 550, label: 'Ongoing' },
  { period: 'Late 2024', volume: 500, label: 'Pre-Action' },
  { period: 'Q1 2025', volume: 400, label: 'Blocking Begins' },
  { period: 'Apr 2025', volume: 200, label: 'Post-Block' }
];

// Fee calculation methodology
export const feeCalculations: FeeCalculation[] = [
  {
    category: 'Cross-Border Assessment Fee',
    lowEstimate: 0.4,
    highEstimate: 0.6,
    methodology: 'Standard cross-border assessment of 0.4-0.6% on international transactions'
  },
  {
    category: 'Interchange Fee (Network Share)',
    lowEstimate: 0.1,
    highEstimate: 0.15,
    methodology: 'Network share of interchange typically 0.1-0.15% of transaction value'
  },
  {
    category: 'Processing Fees',
    lowEstimate: 0.05,
    highEstimate: 0.1,
    methodology: 'Transaction authorization and processing fees'
  },
  {
    category: 'Currency Conversion',
    lowEstimate: 0.5,
    highEstimate: 1.0,
    methodology: 'FX margin on currency conversion (varies by card type)'
  }
];

// Estimated fee revenue by network
export const networkFeeEstimates = {
  visa: {
    low: 51000000,  // $51M
    mid: 72000000,  // $72M
    high: 102000000, // $102M
    methodology: 'Based on estimated 40-45% market share of Iraqi cross-border volume'
  },
  mastercard: {
    low: 51000000,  // $51M
    mid: 72000000,  // $72M
    high: 102000000, // $102M
    methodology: 'Based on estimated 40-45% market share of Iraqi cross-border volume'
  },
  combined: {
    low: 102000000,  // $102M
    mid: 143000000,  // $143M
    high: 204000000  // $204M
  }
};

// Damages framework
export const damageComponents: DamageComponent[] = [
  {
    type: 'Base ATA Damages',
    amount: '$100M – $500M',
    basis: 'Compensatory damages for victims of attacks funded by militia profits',
    statute: '18 U.S.C. § 2333(a)'
  },
  {
    type: 'Treble Damages',
    amount: '3x Base',
    basis: 'ATA provides for automatic trebling of damages',
    statute: '18 U.S.C. § 2333(a)'
  },
  {
    type: 'BSA Civil Money Penalties',
    amount: '$250K – $1M per day',
    basis: 'Per-day penalties for willful BSA violations during Gap Period',
    statute: '31 U.S.C. § 5321'
  },
  {
    type: 'OFAC Penalties',
    amount: 'Greater of $250K or 2x transaction',
    basis: 'Per-violation penalty for processing prohibited transactions',
    statute: '50 U.S.C. § 1705'
  },
  {
    type: 'Disgorgement',
    amount: '$102M – $204M',
    basis: 'Return of ill-gotten fees earned during scheme',
    statute: 'Equitable remedy'
  },
  {
    type: 'Attorneys\' Fees',
    amount: 'Reasonable costs',
    basis: 'ATA provides for recovery of attorneys\' fees',
    statute: '18 U.S.C. § 2333(a)'
  }
];

// Comparative enforcement actions
export interface EnforcementPrecedent {
  case: string;
  year: number;
  amount: string;
  violation: string;
  comparability: string;
}

export const enforcementPrecedents: EnforcementPrecedent[] = [
  {
    case: 'BNP Paribas',
    year: 2014,
    amount: '$8.97B',
    violation: 'Sanctions evasion (Sudan, Iran, Cuba)',
    comparability: 'Deliberate conduct; years of violations; large transaction volumes'
  },
  {
    case: 'HSBC',
    year: 2012,
    amount: '$1.92B',
    violation: 'AML failures enabling cartels/sanctions evasion',
    comparability: 'Years of warnings ignored; pattern of conduct; systemic failures'
  },
  {
    case: 'TD Bank',
    year: 2024,
    amount: '$3.0B',
    violation: 'AML failures; failure to file SARs',
    comparability: 'Recent precedent; failure to detect anomalies; growth restrictions added'
  },
  {
    case: 'Standard Chartered',
    year: 2019,
    amount: '$1.1B',
    violation: 'Sanctions/AML (Iran, UAE)',
    comparability: 'Iran sanctions nexus; UAE transaction focus; repeat violations'
  },
  {
    case: 'Deutsche Bank',
    year: 2017,
    amount: '$425M',
    violation: 'Russian mirror trading scheme',
    comparability: 'Failure to detect obvious laundering pattern; statistical anomalies'
  },
  {
    case: 'Epsilon Electronics',
    year: 2016,
    amount: '$4.07M',
    violation: 'Continued shipments after OFAC warning',
    comparability: 'Direct analog: continued conduct after specific warning'
  }
];

// Arbitrage calculation
export const arbitrageAnalysis = {
  officialRate: 1320,  // IQD per USD
  marketRate: 1600,    // IQD per USD (approx)
  spreadPercent: 21.2, // (1600-1320)/1320 * 100
  methodology: `
    At official rate: 1 USD = 1,320 IQD
    At market rate: 1 USD = ~1,600 IQD
    
    Example: Load $100,000 on card at official rate (132,000,000 IQD cost)
    Withdraw/spend abroad: $100,000 USD
    Sell $100,000 at market rate: 160,000,000 IQD
    Profit: 28,000,000 IQD (~$17,500 or 17.5%)
    
    After network fees (~2-3%): Net profit ~14-15%
    
    At $1.5B monthly peak: ~$225M monthly militia profit potential
    At sustained $500M/month: ~$75M monthly militia profit
  `
};

// Helper functions
export const formatCurrency = (value: number): string => {
  if (value >= 1000000000) {
    return `$${(value / 1000000000).toFixed(1)}B`;
  } else if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(0)}M`;
  } else if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`;
  }
  return `$${value}`;
};

export const getTotalFeeEstimate = (): { low: string; mid: string; high: string } => {
  return {
    low: formatCurrency(networkFeeEstimates.combined.low),
    mid: formatCurrency(networkFeeEstimates.combined.mid),
    high: formatCurrency(networkFeeEstimates.combined.high)
  };
};

export const getMetricById = (id: string): KeyMetric | undefined => {
  return keyMetrics.find(m => m.id === id);
};

