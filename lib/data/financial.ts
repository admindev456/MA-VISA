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
  },
  {
    case: 'OFAC / Muhandis General Company',
    year: 2025,
    amount: 'SDN (Oct 9, 2025)',
    violation: 'PMF economic arm linked to KH and IRGC-QF',
    comparability: 'Evidentiary backbone — NOT a penalty comparator. Establishes the SDN-level nexus any subsequent facilitation case relies on.'
  }
];

// 2025-2026 — Parallel ATA / JASTA dockets against financial-institution defendants
// that establish the model for a Visa/Mastercard action.
export interface PendingLitigation {
  caseName: string;
  docket: string;
  court: string;
  filed: string;
  defendantCategory: 'correspondent-bank' | 'payment-infrastructure' | 'commercial-actor' | 'sovereign' | 'crypto-exchange';
  theory: string;
  counsel: string;
  relevanceToVisaMastercard: string;
}

export const pendingLitigation: PendingLitigation[] = [
  {
    caseName: 'Fraenkel v. Standard Chartered Bank',
    docket: '1:24-cv-04484',
    court: 'S.D.N.Y.',
    filed: 'June 11, 2024',
    defendantCategory: 'correspondent-bank',
    theory: 'JASTA aiding-and-abetting — multi-decade scheme to provide banking services to IRGC, Hezbollah, and Iraqi militia proxies',
    counsel: 'Sparacino PLLC',
    relevanceToVisaMastercard: 'Contemporary JASTA template; identical proxy-chain IRGC → KH/AAH/Badr attribution structure. Sparacino represents 4,000+ Americans and 1,000+ Gold Star families.'
  },
  {
    caseName: 'Moses v. BNP Paribas S.A. (MTD DENIED Sept 30, 2025)',
    docket: '1:24-cv-04938',
    court: 'S.D.N.Y. (Judge Jessica G. L. Clarke)',
    filed: 'June 11, 2024',
    defendantCategory: 'correspondent-bank',
    theory: 'JASTA — BNP Paribas knowingly provided illicit banking services to IRGC-controlled Iranian oil/gas front companies enabling Iran-backed attacks on Americans despite repeated warnings; leverages BNP 2014 $8.97B DOJ guilty plea as admission',
    counsel: 'Sparacino PLLC',
    relevanceToVisaMastercard: 'HISTORIC POST-ASHLEY PLAINTIFFS\' WIN — Judge Clarke DENIED BNP\'s motion to dismiss on Sept 30, 2025 (Dkt. 40); first time an ATA claim has been allowed to proceed against a European bank for conducting business in Iran. Now in discovery. BNP filed reconsideration + interlocutory appeal motion Oct 14, 2025 (pending). Judge Clarke\'s order is the pleading-stage template a Visa/MA complaint should mirror.'
  },
  {
    caseName: 'Troell v. Binance Holdings Ltd.',
    docket: '1:24-cv-07136',
    court: 'S.D.N.Y.',
    filed: '2024',
    defendantCategory: 'payment-infrastructure',
    theory: 'JASTA — knowing facilitation of hundreds of millions in crypto transfers to Hamas, Hezbollah, al-Qaeda',
    counsel: 'Sparacino PLLC',
    relevanceToVisaMastercard: 'Closest structural analog: payment infrastructure + admitted AML/sanctions failures + terror financing. Names former CEO Changpeng Zhao individually — individual-liability precedent.'
  },
  {
    caseName: 'King v. Habib Bank Ltd.',
    docket: '1:20-cv-04322',
    court: 'S.D.N.Y.',
    filed: '2020',
    defendantCategory: 'correspondent-bank',
    theory: 'ATA/JASTA — HBL operated as financial arm of Pakistani intelligence supporting Taliban, al-Qaeda, Lashkar-e-Taiba',
    counsel: 'Sparacino PLLC',
    relevanceToVisaMastercard: 'Longest-running contemporary JASTA-vs-bank docket. Establishes "state-backed proxy" factual theory applicable to Iran → PMF → Visa/MA chain.'
  },
  {
    caseName: 'Hughes v. Zarrab & Halkbank',
    docket: '1:23-cv-06481',
    court: 'S.D.N.Y.',
    filed: '2023',
    defendantCategory: 'correspondent-bank',
    theory: 'ATA — laundering of Iranian oil proceeds with high-net-worth intermediary',
    counsel: 'Sparacino PLLC / co-counsel',
    relevanceToVisaMastercard: 'Iran sanctions-evasion proceeds case — same body of evidence OFAC is building against Iraqi banking networks.'
  },
  {
    caseName: 'Atchley v. AstraZeneca UK Ltd.',
    docket: '1:17-cv-02136',
    court: 'D.D.C.',
    filed: '2017',
    defendantCategory: 'commercial-actor',
    theory: 'ATA — bribes paid to Iraqi Ministry of Health constituted material support to Jaysh al-Mahdi (Iran/Hezbollah-trained militants)',
    counsel: 'Sparacino PLLC',
    relevanceToVisaMastercard: 'Iraq-theater ATA template directly relevant to Tower 22 predicate. Commercial-actor liability for providing economic inputs — "we just paid for access" defense can fail against U.S.-forces-Iraq backdrop.'
  },
  {
    caseName: 'Families of Tower 22 Soldiers v. Islamic Republic of Iran',
    docket: 'D.D.C. (pending)',
    court: 'D.D.C.',
    filed: 'January 22, 2026',
    defendantCategory: 'sovereign',
    theory: 'FSIA state-sponsored-terrorism exception (28 U.S.C. § 1605A)',
    counsel: 'Kreindler & Kreindler LLP',
    relevanceToVisaMastercard: 'Direct Tower 22 attribution case. Any Iran judgment here strengthens a downstream § 2333(a) action against facilitators. Analogous FSIA cases (Holladay, Fishbeck, Christie, Gration) produced $500M-$1.8B per-case judgments.'
  }
];

// 2026 pressure vectors that materially strengthen the settlement posture
// above and beyond the pre-October 2025 record.
export interface SettlementDriver2026 {
  id: string;
  title: string;
  description: string;
  mechanism: string;
  sourceEvidenceIds: string[];
}

export const settlementDrivers2026: SettlementDriver2026[] = [
  {
    id: 'driver-fto-predicate',
    title: 'Sept 2025 FTO Upgrades Unlock § 2333(a) Primary Liability',
    description: 'The State Department\'s Sept 17, 2025 upgrade of four PMF-aligned militias (HHN, KSS, Ansar Allah al-Awfiya, KIA) from SDGT to full FTO status removes the statutory-predicate gap that caused earlier bank-aiding cases (e.g. Ashley v. Deutsche Bank, 2d Cir. 2025) to stall at the pleading stage.',
    mechanism: '18 U.S.C. § 2339B now directly criminalizes material support to these four groups; § 2333(a) now cleanly supports primary civil liability.',
    sourceEvidenceIds: ['doc-016']
  },
  {
    id: 'driver-sec-disclosure',
    title: 'Mastercard\'s Feb 2026 SEC Iran Disclosure (Admission Against Interest)',
    description: 'Mastercard\'s February 11, 2026 Section 13(r) notice and accompanying FY2025 10-K explicitly acknowledge Iran as a comprehensive-OFAC-sanctions jurisdiction requiring real-time SDN screening — eliminating any defense that Iran-linked flows through Iraqi partners were unforeseeable.',
    mechanism: 'Sworn SEC disclosure usable as party admission in discovery; forecloses "did not know" defense under FRE 801(d)(2).',
    sourceEvidenceIds: ['doc-017']
  },
  {
    id: 'driver-kreindler-attribution',
    title: 'Kreindler Tower 22 FSIA Suit Provides Iran-Attribution Foundation',
    description: 'The January 22, 2026 Kreindler & Kreindler filing in D.D.C. will produce a formal federal judgment attributing Tower 22 to Iran. That finding strengthens any downstream § 2333(a) action against the networks by foreclosing Iran-attribution disputes.',
    mechanism: 'Public record findings from a §1605A judgment have routinely operated as persuasive authority in follow-on ATA litigation (Holladay, Fishbeck, Christie).',
    sourceEvidenceIds: ['doc-018']
  },
  {
    id: 'driver-ongoing-abuse',
    title: 'April 2026 LWJ Report: Mastercard Still Named in Militia Fundraising',
    description: 'FDD\'s April 11, 2026 Long War Journal report documents that PMF-aligned militia "humanitarian" campaigns — including the Tower-22-tied 19th PMF Brigade — are explicitly instructing donors to use Mastercard and Zain Cash to fund Iran and Hezbollah.',
    mechanism: 'Converts the case from historical compliance failure to ongoing willful conduct; undermines "we fixed it" remediation defense; supports continuing-violation tolling.',
    sourceEvidenceIds: ['doc-019']
  },
  {
    id: 'driver-parallel-dockets',
    title: 'Parallel SDNY ATA Dockets Build Bank-Liability Playbook',
    description: 'Five parallel JASTA/ATA actions in SDNY (Fraenkel, Moses, Troell, King, Atchley) — three of them led by Sparacino PLLC — are actively developing the Halberstam/Taamneh standard of review for financial-institution defendants, creating a favorable pleading-and-discovery ecosystem.',
    mechanism: 'Joint-defense coordination among plaintiffs\' firms; shared expert witnesses; consistent Halberstam factor framing across cases shapes judicial receptivity.',
    sourceEvidenceIds: ['doc-014', 'doc-015']
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

// ============================================================
// RESEARCH FILES INTEGRATION (Round 2)
// ============================================================

// Expanded pending-litigation universe based on Research 3
export const pendingLitigationExpanded: PendingLitigation[] = [
  {
    caseName: 'Freeman II v. HSBC Holdings PLC (The Closest Analog)',
    docket: '1:18-cv-07359',
    court: 'E.D.N.Y. (Judge Pamela Chen)',
    filed: '2018; Third Amended Complaint Sep 2023',
    defendantCategory: 'correspondent-bank',
    theory: 'JASTA aiding-and-abetting - ~300 Gold Star families; HSBC+StanChart+Barclays+CS+Commerzbank+RBS/ABN+Bank Saderat; Iraq EFP attacks by KH/AAH/IRGC-QF; sanctions-stripping for Iranian state banks',
    counsel: 'Multiple plaintiff-bar firms',
    relevanceToVisaMastercard: 'CLOSEST doctrinal analog. Same plaintiff structure (~300 Gold Star families), same theater (Iraq), same FTOs (KH/AAH/IRGC-QF), same theory (financial institutions enabling Iran-proxy attacks). MTD pending April 2026 on Third Amended Complaint - outcome will directly shape Visa/MA complaint viability.'
  },
  {
    caseName: 'Bartlett v. Société Générale de Banque au Liban',
    docket: '1:19-cv-00007',
    court: 'E.D.N.Y. (Judge Carol Amon)',
    filed: '2019',
    defendantCategory: 'correspondent-bank',
    theory: 'JASTA - thirteen Lebanese banks for correspondent services to Hezbollah-linked customers',
    counsel: 'Plaintiff-bar coalition',
    relevanceToVisaMastercard: 'Post-Taamneh MTD survivor (denied 2020, 2022). Demonstrates that "concrete Hezbollah-affiliate customer list" pleading clears the bar - template for our "named PMF cardholder cohort" allegation. Currently in discovery.'
  },
  {
    caseName: 'Miller / Pam v. Arab Bank',
    docket: '1:18-cv-02192 / 18-cv-04670',
    court: 'E.D.N.Y. (Judge Cogan)',
    filed: '2018',
    defendantCategory: 'correspondent-bank',
    theory: 'JASTA - Hamas-front accounts and martyr payments through Arab Bank NY correspondent',
    counsel: 'Sparacino PLLC',
    relevanceToVisaMastercard: 'Post-Linde redeployment of bank-specific factual record. MTD largely denied 2019. Shows that pre-existing compliance-evidence foundation beats Taamneh at pleading stage - our Yana audit serves the equivalent function.'
  },
  {
    caseName: 'Averbach v. Cairo Amman Bank',
    docket: '1:19-cv-00004',
    court: 'S.D.N.Y.',
    filed: '2019',
    defendantCategory: 'correspondent-bank',
    theory: 'JASTA - Hamas-linked charity accounts',
    counsel: 'Sparacino PLLC',
    relevanceToVisaMastercard: 'Additional Sparacino JASTA docket; aiding/abetting claim proceeds; in discovery.'
  },
  {
    caseName: 'Kaplan v. Lebanese Canadian Bank',
    docket: '999 F.3d 842 (2d Cir. 2021)',
    court: '2d Cir. / S.D.N.Y.',
    filed: 'Revived 2021',
    defendantCategory: 'correspondent-bank',
    theory: 'JASTA - Hezbollah-affiliate customers / LCB',
    counsel: 'Plaintiff-bar coalition',
    relevanceToVisaMastercard: 'Plaintiffs\' "high-water mark" - read Linde\'s "general awareness" test loosely to permit indirect-intermediary aiding. Doctrine arguably undermined by Taamneh but not explicitly overruled.'
  },
  {
    caseName: 'Raanan v. Binance Holdings Ltd.',
    docket: '2025 WL 605594',
    court: 'S.D.N.Y.',
    filed: 'Feb 2025',
    defendantCategory: 'crypto-exchange',
    theory: 'JASTA - Binance\'s admitted $4.3B 2023 AML failures + Hamas-attack victims',
    counsel: 'Plaintiff-bar',
    relevanceToVisaMastercard: 'CRITICAL FAVORABLE POST-ASHLEY RULING. MTD DENIED on aiding/abetting. Establishes that admitted systemic AML failures survive Taamneh at MTD. Yana audit serves equivalent role for us.'
  },
  {
    caseName: 'Balva v. Binance',
    docket: 'D.N.D. filed Nov 24, 2025',
    court: 'D.N.D.',
    filed: 'Nov 24, 2025',
    defendantCategory: 'crypto-exchange',
    theory: 'JASTA aiding-and-abetting - ~$3B trebled damages demand',
    counsel: 'Willkie Farr & Gallagher',
    relevanceToVisaMastercard: '$3B trebled damages demand - scale benchmark for our case. Big Law plaintiffs\'-bar entry. N.D. venue choice suggests forum-shopping for post-Taamneh daylight.'
  },
  {
    caseName: 'Zobay v. MTN Group Ltd.',
    docket: '1:21-cv-03503',
    court: 'E.D.N.Y.',
    filed: '2021',
    defendantCategory: 'payment-infrastructure',
    theory: 'JASTA - telecom/infrastructure provider + IRGC joint venture',
    counsel: 'Sparacino PLLC',
    relevanceToVisaMastercard: 'Direct analog for "payment infrastructure as defendant" theory. MTD denied September 2023. Key fact: joint venture with IRGC front. Our "Al Saqi Electronic Payment Co." specific-merchant pleading serves equivalent bespoke-counterparty role.'
  }
];

// The four compounding hurdles for an ATA case against Visa/Mastercard
// per Research 3's honest doctrinal assessment, with distinguishing-factor rebuttals.
export interface ATAHurdle {
  id: string;
  name: string;
  doctrine: string;
  source: string;
  description: string;
  plaintiffCounter: string;
  severity: 'structural-bar' | 'pleading-hurdle' | 'proximate-cause' | 'attribution';
}

export const ataHurdles: ATAHurdle[] = [
  {
    id: 'hurdle-1-fto-timing',
    name: 'FTO-Designation Timing (§ 2333(d)(2))',
    doctrine: 'JASTA aiding-and-abetting liability only reaches attacks committed by organizations that were designated FTOs at the time of the attack.',
    source: '18 U.S.C. § 2333(d)(2); JASTA § 2(a)(5)',
    description: 'Claims premised on pre-designation conduct fail at the threshold. KH = FTO since July 2, 2009. AAH = FTO since January 3, 2020. HAN (full FTO) = September 17, 2025. IRGC = FTO since April 15, 2019.',
    plaintiffCounter: 'Tower 22 (Jan 28, 2024) is post all relevant FTO dates (KH, AAH, IRGC). The four September 2025 FTO upgrades (HHN, KSS, Ansar Awfiya, KIA) now cover the remaining PMF militias that conducted the 2023-2024 attack campaign.',
    severity: 'structural-bar'
  },
  {
    id: 'hurdle-2-routine-service',
    name: 'Taamneh Routine-Service-Provider Defense',
    doctrine: 'Taamneh warned that sweeping liability for routine service providers would encompass "all internet or cell service providers" - and explicitly analogized payment providers.',
    source: 'Twitter v. Taamneh, 598 U.S. 471 (2023); Ashley v. Deutsche Bank (2d Cir. 2025)',
    description: 'A Visa/Mastercard complaint must plead "special treatment" - an individualized, knowing relationship with a specific militia-controlled merchant, not generalized processing of billions of transactions. Ashley held that even sanctioned-country banking with known diverters of IED precursors does not suffice absent atypical conduct.',
    plaintiffCounter: 'Ours is not "routine." Treasury and NY Fed warned specifically; networks continued 22 months; Yana reinstatement after zero-controls audit is an affirmative act. Atchley (D.C. Cir. Jan 23, 2026 reversal) confirms that "unusual way" conduct survives Taamneh.',
    severity: 'pleading-hurdle'
  },
  {
    id: 'hurdle-3-nexus',
    name: 'Taamneh Specific-Attack Nexus Requirement',
    doctrine: 'Assistance to the FTO generally is not enough; plaintiff must tie the defendant\'s conduct to the SPECIFIC ACT that injured the plaintiff.',
    source: 'Twitter v. Taamneh, 598 U.S. 471 (2023); Troell v. Binance dismissal March 2025',
    description: 'Card networks\' position deep in a multi-tier acquiring-issuing hierarchy makes this pleading burden severe. Troell was dismissed despite Binance\'s admitted $4.3B AML failures because plaintiffs could not link specific transactions to specific attacks.',
    plaintiffCounter: 'Our nexus theory: $450M/yr militia profits → direct weapons/operations funding per Treasury statement → identifiable Tower 22 / Al-Asad BM / Erbil drone attack → named plaintiffs. The Apr 2026 LWJ post-crackdown evidence links Mastercard to ongoing Iran/Hezbollah funding.',
    severity: 'proximate-cause'
  },
  {
    id: 'hurdle-4-linde-bar',
    name: 'Linde § 2331(1) Primary-Liability Bar',
    doctrine: 'Even if § 2339B material-support is satisfied, primary § 2333(a) liability requires the defendant\'s OWN conduct to satisfy § 2331(1)\'s "violent or life-endangering" and "appear intended to intimidate or coerce" elements.',
    source: 'Linde v. Arab Bank, 882 F.3d 314 (2d Cir. 2018); Strauss, 379 F. Supp. 3d 148 (2019); Weiss V, 993 F.3d 144 (2d Cir. 2021)',
    description: 'Routine authorization and settlement activity by a card network cannot plausibly satisfy § 2331(1). Has effectively foreclosed primary liability against all bank defendants since 2018.',
    plaintiffCounter: 'Plead around this via Atchley-style "unusual" conduct + JASTA aiding-and-abetting (which does not require defendant\'s own conduct to be violent). Bring § 2333(d)(2) aiding claims rather than § 2333(a) primary claims.',
    severity: 'structural-bar'
  }
];

// Compliance claims vs. Yana audit reality - side-by-side for the /compliance-gap page
export interface ComplianceGapEntry {
  id: string;
  claim: string;
  claimSource: string;
  claimDate: string;
  reality: string;
  realitySource: string;
  realityDate: string;
  significance: string;
}

export const complianceClaimsVsReality: ComplianceGapEntry[] = [
  {
    id: 'gap-1',
    claim: 'Mastercard "obligate[s] issuers and acquirers to comply with their local sanctions obligations and the U.S. sanctions programs, including requiring the screening of account holders and merchants... against OFAC sanctions lists."',
    claimSource: 'Mastercard 10-K (FY2020-FY2024 boilerplate)',
    claimDate: '2020-2024',
    reality: 'August 2023 Mastercard Global Compliance Team review of Yana Banking Services found "No customer risk rating is performed," "ineffective suspicious activity monitoring and reporting," ineffective AML safeguards, and no evidence customers were being screened against U.S. sanctions lists.',
    realitySource: 'Mastercard Global Compliance audit (doc-001)',
    realityDate: 'August 2023',
    significance: 'Mastercard\'s own internal audit confirms that Yana did precisely none of what the 10-K boilerplate attested. Self-authenticating admission-against-interest.'
  },
  {
    id: 'gap-2',
    claim: 'Mastercard Decision Intelligence Pro: generative AI enhancements boost fraud detection "on average by 20% and as high as 300% in some instances," scanning "one trillion data points" in "less than 50 milliseconds."',
    claimSource: 'Mastercard Feb 1, 2024 press release (doc-026)',
    claimDate: 'February 1, 2024',
    reality: '2,900% overnight surge in Iraqi cross-border transactions from $50M to $1.5B per month went undetected by Mastercard for 22 months until Treasury intervention forced action in March 2025.',
    realitySource: 'WSJ Investigation; Treasury Timeline',
    realityDate: 'April 2023 - March 2025',
    significance: 'A 2,900% anomaly is precisely what an AI system boasting "300% improvement" should catch. The failure to detect is either (a) systems weren\'t deployed, (b) systems were deployed and overridden, or (c) alerts were ignored. Each establishes liability.'
  },
  {
    id: 'gap-3',
    claim: 'Visa Advanced Authorization: "100 percent of the transactions - each in about one millisecond," global fraud rate "less than 0.1 percent."',
    claimSource: 'visa.com Visa Advanced Authorization',
    claimDate: 'Continuous',
    reality: 'Visa Direct through First Iraqi Bank processed $1.2 billion to Dubai, Turkey, and Indonesian recipients over 10 weeks in early 2024, including a single cardholder pushing $5 million per day to 11 Indonesian accounts. Not suspended until 10 weeks after anomalous pattern began.',
    realitySource: 'WSJ Investigation (doc-004); FIB records',
    realityDate: 'Early 2024',
    significance: 'A $5M/day single-cardholder pattern is a first-order fraud-detection anomaly. VAA\'s "100% / 1ms" claim is empirically falsified by the 10-week delay to action.'
  },
  {
    id: 'gap-4',
    claim: 'Visa: "We do about 300 billion transactions a year. Every single one of those has been processed by AI. It\'s looking at a range of different attributes and we\'re evaluating every single transaction." - James Mirfin, July 26, 2024 CNBC',
    claimSource: 'CNBC James Mirfin interview (doc-034)',
    claimDate: 'July 26, 2024',
    reality: 'Mid-Gap-Period Iraqi card transactions at $400M-$1.1B monthly continued on Visa rails with no disclosed action until April 2025 - nine months after Mirfin\'s claim.',
    realitySource: 'IFMAT Report; Visa statements',
    realityDate: 'May 2023 - April 2025',
    significance: 'If "every single transaction" was AI-evaluated as Mirfin claimed, then Iraqi militia-linked transactions were evaluated, flagged, and allowed. Either the claim is false, or the evaluations were overridden. On-camera executive statement creates discovery-favorable record.'
  },
  {
    id: 'gap-5',
    claim: 'Western Union Q2 2023 call (July 26, 2023): CEO and CFO named Iraq 10+ times, disclosed 70% volume reduction, attributed it to "recent U.S. government actions, which shut down a number of our agents in Iraq."',
    claimSource: 'Western Union Q2 2023 earnings transcript (doc-036)',
    claimDate: 'July 26, 2023',
    reality: 'Visa and Mastercard made NO substantive disclosures of Iraq-related compliance concerns on any earnings call from Q1 2020 through Q4 2025. The closest acknowledgments are Mehra\'s "moderation in select markets in the Middle East and Africa" (May 1, 2025) and "enforcement of Mastercard rules" (July 31, 2025) - neither names Iraq.',
    realitySource: 'All Visa and Mastercard earnings-call transcripts 2020-2025',
    realityDate: '2020-2025',
    significance: 'The contrast witness. If Iraq-risk disclosure was obligatory for WU (which made it), the same facts applied to Visa/Mastercard whose Iraqi exposure was orders of magnitude larger. Silence in presence of material risk is actionable under Rule 10b-5.'
  },
  {
    id: 'gap-6',
    claim: 'Mastercard Brighterion subsidiary markets "Compliance (KYC, AML & Sanctions Screening)" capabilities. Part of Mastercard\'s $10.7B cybersecurity-acquisitions portfolio since 2018.',
    claimSource: 'brighterion.com / Mastercard press releases (doc-025, doc-028)',
    claimDate: 'Continuous',
    reality: 'Mastercard-owned Brighterion\'s capabilities were not deployed at Yana Banking Services - a principal Mastercard Iraqi issuer - which had zero risk ratings, zero sanctions screening, ineffective AML per Mastercard\'s own audit.',
    realitySource: 'Mastercard Global Compliance audit (doc-001)',
    realityDate: 'August 2023',
    significance: 'Mastercard owns the KYC/AML/sanctions-screening compliance-tech company. The capability gap at Yana is not a technology failure; it is an implementation choice.'
  },
  {
    id: 'gap-7',
    claim: 'Visa Integrity Risk Program (VIRP) launched May 1, 2023 as a tiered (Tier 1/2/3) framework to "deter, detect, and remediate illegal activity from entering the Visa payment system."',
    claimSource: 'Visa VIRP framework (doc-022)',
    claimDate: 'May 1, 2023',
    reality: 'Same month Federal Reserve Bank of New York and Treasury began pressing Visa about the Iraqi transaction surge. No documented VIRP-triggered action on Iraqi issuers for 23 months until April 2025 blocking.',
    realitySource: 'IFMAT Report; Visa timeline',
    realityDate: 'May 2023 - April 2025',
    significance: 'Either VIRP was launched and failed to trigger on the largest possible anomaly in its first 23 months of operation, or VIRP was launched as a compliance-optics tool rather than an operational capability. Both scenarios are actionable.'
  },
  {
    id: 'gap-8',
    claim: 'Mastercard FY2025 10-K novel sentence (Feb 11, 2026): "We do not maintain operations, assets or licensed customers in Iran."',
    claimSource: 'Mastercard FY2025 10-K (doc-040)',
    claimDate: 'February 11, 2026',
    reality: 'The same FY2025 10-K still does NOT mention Iraq, does NOT disclose the Yana Banking compliance failure, and does NOT discuss the blocking of 100,000 Iraqi-issued cards in March 2025.',
    realitySource: 'Mastercard FY2025 10-K (doc-040)',
    realityDate: 'February 11, 2026',
    significance: 'The novel Iran sentence is a hedge that concedes Iran-risk materiality while refusing to disclose the specific Iraqi-conduit fact pattern. Under SEC material-omission doctrine, such selective disclosure in response to a public exposure is materially misleading.'
  }
];

// Structured casualty ledger tied to specific attacks (Research 4)
export interface AttackCasualtyEntry {
  date: string;
  location: string;
  attackType: string;
  killedInAction: number;
  wounded: number;
  details: string;
  attribution: string;
  relatedEventId?: string;
}

export const attackCasualtyLedger: AttackCasualtyEntry[] = [
  {
    date: '2023-03-23',
    location: 'Rmelan / Abu Hajar Airfield, Hasakah, Syria',
    attackType: 'One-way drone (kamikaze)',
    killedInAction: 1,
    wounded: 6,
    details: '1 U.S. contractor killed; 5 service members + 1 contractor wounded. Follow-on Mar 24 rockets at Al-Omar and Conoco wounded more (12 total including 6 TBIs).',
    attribution: 'Liwa al-Ghaliboun (KH/IRGC front)',
    relatedEventId: 'evt-032'
  },
  {
    date: '2023-10-17',
    location: 'Al-Asad Airbase, Iraq + Al-Tanf Garrison, Syria',
    attackType: 'Drones + rockets',
    killedInAction: 1,
    wounded: 21,
    details: '1 U.S. contractor died of cardiac arrest during Al-Asad false alarm; ~21 U.S. wounded across Al-Asad and Al-Tanf (15 confirmed TBI from Al-Tanf strike).',
    attribution: 'IRI / Tashkil al-Waritheen',
    relatedEventId: 'evt-034'
  },
  {
    date: '2023-11-20',
    location: 'Al-Asad Airbase, Iraq',
    attackType: 'Close-range ballistic missile',
    killedInAction: 0,
    wounded: 8,
    details: 'First ballistic missile of the campaign; minor infrastructure damage. Same-day AC-130 counter-strike killed 8 KH militants.',
    attribution: 'IRI',
    relatedEventId: 'evt-035'
  },
  {
    date: '2023-12-25',
    location: 'Erbil Air Base, Iraq',
    attackType: 'Explosive one-way drone',
    killedInAction: 0,
    wounded: 3,
    details: 'Drone penetrated air defenses; 3 U.S. service members wounded (1 critically). Biden ordered same-night counter-strikes on 3 KH facilities.',
    attribution: 'Kata\'ib Hezbollah (directly attributed by SecDef Austin)',
    relatedEventId: 'evt-036'
  },
  {
    date: '2024-01-28',
    location: 'Tower 22, Rukban area, Jordan',
    attackType: 'One-way Shahed-style drone',
    killedInAction: 3,
    wounded: 47,
    details: 'Sgt. William Rivers (46, Carrollton, GA; posthumous SSG), Spc. Kennedy Sanders (24, Waycross, GA; posthumous SGT), Spc. Breonna Moffett (23, Savannah, GA; posthumous SGT; died of wounds Jan 29). All from 718th Engineer Company, 926th EB, 412th TEC, Fort Moore. 47 wounded grew from initial 25 count. 8 medevaced to BDSC Baghdad; 3 to Landstuhl, Germany. 10 NY ARNG soldiers received Purple Hearts May 2025.',
    attribution: 'Ansar Allah al-Awfiya (19th PMF Brigade; State Dept-designated Jun 17, 2024; FTO Sep 17, 2025); KH "planned, resourced, and facilitated" (NSC Kirby)',
    relatedEventId: 'evt-011'
  },
  {
    date: '2024-08-05',
    location: 'Al-Asad Airbase, Iraq',
    attackType: 'Katyusha rockets (2x 122mm from truck launcher)',
    killedInAction: 0,
    wounded: 7,
    details: '5 U.S. service members + 2 contractors wounded; 1 serious injury; 4 TBI; 2 medevaced. 189th attack per Washington Institute count.',
    attribution: 'IRI',
    relatedEventId: 'evt-041'
  },
  {
    date: '2024-08-09',
    location: 'Rumalyn Landing Zone, Syria',
    attackType: 'One-way drone',
    killedInAction: 0,
    wounded: 8,
    details: 'Drone struck base around 5 PM ET; second drone shot down. TBI + smoke inhalation.',
    attribution: 'IRI (no group claim)',
    relatedEventId: 'evt-042'
  }
];

// Structured oil-smuggling network (Research 2) for regulatoryLeverageTheory reinforcement
export interface OilSmugglingActor {
  id: string;
  name: string;
  type: 'individual' | 'vessel' | 'shell-company' | 'logistics' | 'marketing';
  designation?: string;
  description: string;
  network: 'said' | 'samarrai';
}

export const oilSmugglingNetwork: OilSmugglingActor[] = [
  {
    id: 'said',
    name: 'Salim Ahmed Said',
    type: 'individual',
    designation: 'OFAC SDN (Jul 3, 2025) sb0188',
    description: 'Iraqi-British national; sold Iranian oil as Iraqi since at least 2020; bribed Iraqi parliamentarians for forged origin vouchers',
    network: 'said'
  },
  {
    id: 'aissot',
    name: 'AISSOT',
    type: 'logistics',
    designation: 'Associated with sb0188',
    description: 'Affiliated entity in Salim Ahmed Said network',
    network: 'said'
  },
  {
    id: 'vs-tankers',
    name: 'VS Tankers',
    type: 'logistics',
    designation: 'Associated with sb0188',
    description: 'Affiliated entity in Salim Ahmed Said network',
    network: 'said'
  },
  {
    id: 'samarrai',
    name: 'Waleed al-Samarra\'i',
    type: 'individual',
    designation: 'OFAC SDN (Sep 2, 2025) sb0233',
    description: 'UAE-based Iraqi-Kittitian; ~$300M/year oil-laundering scheme',
    network: 'samarrai'
  },
  { id: 'adena', name: 'ADENA', type: 'vessel', description: 'Liberia-flagged tanker', network: 'samarrai' },
  { id: 'liliana', name: 'LILIANA', type: 'vessel', description: 'Liberia-flagged tanker', network: 'samarrai' },
  { id: 'camilla', name: 'CAMILLA', type: 'vessel', description: 'Liberia-flagged tanker', network: 'samarrai' },
  { id: 'delfina', name: 'DELFINA', type: 'vessel', description: 'Liberia-flagged tanker', network: 'samarrai' },
  { id: 'bianca', name: 'BIANCA', type: 'vessel', description: 'Liberia-flagged tanker', network: 'samarrai' },
  { id: 'roberta', name: 'ROBERTA', type: 'vessel', description: 'Liberia-flagged tanker', network: 'samarrai' },
  { id: 'alexandra', name: 'ALEXANDRA', type: 'vessel', description: 'Liberia-flagged tanker', network: 'samarrai' },
  { id: 'bellagio', name: 'BELLAGIO', type: 'vessel', description: 'Liberia-flagged tanker', network: 'samarrai' },
  { id: 'paola', name: 'PAOLA', type: 'vessel', description: 'Liberia-flagged tanker', network: 'samarrai' },
  { id: 'tryfo', name: 'Tryfo Navigation', type: 'shell-company', description: 'Marshall Islands shell', network: 'samarrai' },
  { id: 'keely', name: 'Keely Shiptrade', type: 'shell-company', description: 'Marshall Islands shell', network: 'samarrai' },
  { id: 'odiar', name: 'Odiar Management', type: 'shell-company', description: 'Marshall Islands shell', network: 'samarrai' },
  { id: 'panarea', name: 'Panarea Marine', type: 'shell-company', description: 'Marshall Islands shell', network: 'samarrai' },
  { id: 'topsail', name: 'Topsail Shipholding', type: 'shell-company', description: 'Marshall Islands shell', network: 'samarrai' },
  { id: 'babylon-nav-oil', name: 'Babylon Navigation DMCC', type: 'logistics', designation: 'OFAC SDN', description: 'UAE logistics arm', network: 'samarrai' },
  { id: 'galaxy-oil-oil', name: 'Galaxy Oil FZ-LLC', type: 'marketing', designation: 'OFAC SDN', description: 'UAE marketing front', network: 'samarrai' }
];

// JASTA 10-year statute-of-limitations tracking (Research 3)
export const atasol = {
  rule: '18 U.S.C. § 2333(d) ATA/JASTA 10-year statute of limitations from date of injury',
  criticalDate: 'September 28, 2026',
  significance: 'Deadline for filing pre-September 28, 2016 injury claims. Plaintiff firms (Sparacino PLLC, Osen LLC, Willkie Farr) are racing to exploit the narrowing window.',
  relevanceToVisaMastercard: 'Tower 22 (Jan 28, 2024) and the Al-Asad/Erbil/Rumalyn attacks (2023-2024) are all well within SOL - no timing pressure on these predicates. However, if any plaintiff wishes to cite pre-Sep 2016 Iran-proxy injuries (e.g. 2005-2014 EFP attacks a la Freeman II), the September 28, 2026 deadline applies.',
  practitionerFirms: [
    'Sparacino PLLC (Miller/Pam, Averbach, Atchley, Fraenkel, Moses, Troell, King)',
    'Osen LLC (ATA specialist)',
    'Willkie Farr & Gallagher (Balva v. Binance lead)',
    'Kreindler & Kreindler (Tower 22 FSIA lead)'
  ]
} as const;

// The three-pillar settlement leverage theory - Research 1+3 synthesis
export interface SettlementLeveragePillar {
  id: string;
  name: string;
  mechanism: string;
  regulators: string[];
  evidenceAnchors: string[];
  estimatedLeverage: string;
}

export const regulatoryLeverageTheory: SettlementLeveragePillar[] = [
  {
    id: 'pillar-ofac',
    name: 'OFAC / FinCEN Enforcement Risk',
    mechanism: 'IEEPA civil penalties at "greater of $250K or 2x transaction per violation"; applied at ~$1.5B peak monthly volume scales to multi-billion statutory maxima. Payoneer ($1.4M), BitPay ($507K), Epsilon ($4.07M) precedents scale by 1,000x+ for our transaction volume.',
    regulators: ['OFAC', 'FinCEN', 'Treasury Office of Terrorism and Financial Intelligence'],
    evidenceAnchors: [
      'Yana audit (doc-001)',
      'Treasury Fall 2023 intelligence briefing (doc-002)',
      'Oct 9, 2025 Muhandis SDN (doc-014)',
      'Al-Huda Bank FinCEN 311 (doc-047)',
      '22-month delay',
      '$120M network fee revenue'
    ],
    estimatedLeverage: '$600M - $2.8B per network in settlement range (already captured in damageScenarios)'
  },
  {
    id: 'pillar-sec',
    name: 'SEC Securities-Disclosure Liability',
    mechanism: 'Rule 10b-5 material-omission / misleading-disclosure theory. Mastercard\'s Feb 11, 2026 novel Iran sentence + Section 13(r) narrowing + 22-month earnings-call silence vs. Western Union Q2 2023 disclosure = actionable misalignment. Investor class-action or SEC enforcement action.',
    regulators: ['SEC Division of Enforcement', 'SEC Corp Fin'],
    evidenceAnchors: [
      'MA FY2025 novel Iran sentence (doc-040)',
      'MA 13(r) narrowing chronology (doc-041)',
      'Visa 10-K textual stasis (doc-042)',
      'WU Q2 2023 contrast transcript (doc-036)',
      'MA Q1/Q2 2025 euphemisms (doc-037, doc-038)',
      'Mirfin CNBC on-camera claim (doc-034)'
    ],
    estimatedLeverage: 'Class-action damages scale with stock-price reaction; SEC civil-penalty framework would add $50M-$500M per network'
  },
  {
    id: 'pillar-public',
    name: 'Public-Pressure + Congressional Amplification + Gold Star Sympathy',
    mechanism: 'Direct consequence-mapping: Tower 22 Gold Star families → Iran → PMF militias → Qi Card → Mastercard rails. Kreindler Jan 22, 2026 FSIA suit makes the first three links. Wilson-Steube May 28, 2025 letter makes the Qi Card link. Only the network-liability link remains public. Combined public, congressional, and juror-pool pressure will favor settlement rather than litigation.',
    regulators: ['Congress (HFSC, HFA, SFRC)', 'White House (NSPM-2 framework)', 'Media (WSJ, FDD LWJ)'],
    evidenceAnchors: [
      'Tower 22 KIA families (doc-018 Kreindler filing)',
      'Jan 28, 2025 Wilson-Steube 7-signatory letter (doc-005 corrected)',
      'May 28, 2025 Wilson-Steube Rubio letter (doc-013)',
      'Wilson Jun 3, 2025 X post (doc-050)',
      'LWJ April 2026 ongoing-abuse report (doc-019)',
      'H.R. 2658 / FY2026 NDAA legislative momentum (doc-049)'
    ],
    estimatedLeverage: 'Settlement multiplier effect: aggressive public-narrative posture is what moves $600M cases to $2B+ ranges. HSBC-style DPA resolution is the archetype.'
  }
];

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
