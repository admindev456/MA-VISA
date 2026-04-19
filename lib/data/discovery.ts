// ============================================================
// DISCOVERY TARGETS REGISTER
// ============================================================
//
// Structured research — not legal advice. Organized to support
// discovery planning: custodians to depose, documents to request,
// subpoena subjects, and public data sources to pull.

// -----------------------------------------------------------
// CUSTODIANS — named individuals likely to hold relevant records
// -----------------------------------------------------------

export type CustodianOrg = 'visa' | 'mastercard' | 'iraqi-issuer' | 'government' | 'other';

export interface Custodian {
  id: string;
  name: string;
  title: string;
  organization: string;
  org: CustodianOrg;
  relevance: string;
  likelyCustodianOf: string[];
  depositionPriority: 'high' | 'medium' | 'low';
  publicStatements?: string;
  relatedEntityId?: string;
}

export const custodians: Custodian[] = [
  // === MASTERCARD ===
  {
    id: 'cust-miebach',
    name: 'Michael Miebach',
    title: 'Chief Executive Officer',
    organization: 'Mastercard Incorporated',
    org: 'mastercard',
    relevance:
      'Ultimate corporate authority over compliance posture during Gap Period. Has never publicly commented on Iraq / Yana / card blocking.',
    likelyCustodianOf: [
      'CEO communications regarding Iraq market',
      'Board materials re: Iraq or Iran-related risk',
      'Executive-level Treasury/NYFed engagement records',
      'Correspondence with general counsel re: Yana audit',
      'Earnings-call prep materials concerning MEA moderation',
    ],
    depositionPriority: 'high',
    publicStatements: 'None on record concerning Iraq.',
    relatedEntityId: 'miebach',
  },
  {
    id: 'cust-mehra',
    name: 'Sachin Mehra',
    title: 'Chief Financial Officer',
    organization: 'Mastercard Incorporated',
    org: 'mastercard',
    relevance:
      'CFO voicing the "moderation" and "enforcement of Mastercard rules" euphemisms on Q1/Q2 2025 earnings calls — the only public Mastercard statements on the blocking wave, both refusing to name Iraq.',
    likelyCustodianOf: [
      'Earnings-call prep decks (Q1/Q2 2025)',
      'Investor-relations talking points re: Iraq market',
      'Revenue and fee analyses from Iraqi cross-border transactions',
      'Disclosure-adequacy communications with external auditors',
    ],
    depositionPriority: 'high',
    publicStatements:
      '"Moderation in select markets in the Middle East and Africa" (Q1 2025, May 1); "Enforcement of Mastercard rules" (Q2 2025, July 31).',
    relatedEntityId: 'mehra',
  },
  {
    id: 'cust-bhalla',
    name: 'Ajay Bhalla',
    title: 'President, Cyber and Intelligence',
    organization: 'Mastercard Incorporated',
    org: 'mastercard',
    relevance:
      'Public face of Decision Intelligence Pro marketing (Feb 1, 2024 release) and repeated AI-fraud-detection claims during Gap Period. Every Bhalla quote is potentially usable as admission-against-interest.',
    likelyCustodianOf: [
      'Decision Intelligence Pro technical architecture documents',
      'Brighterion integration records',
      'AI/ML fraud-detection system logs and alert histories for Iraqi transactions',
      'Communications with compliance regarding Iraqi issuers',
    ],
    depositionPriority: 'high',
    publicStatements:
      '"With generative AI we are transforming the speed and accuracy of our anti-fraud solutions" (Feb 1, 2024 DIP release); 300% detection-speed claim (May 2024).',
    relatedEntityId: 'bhalla',
  },
  {
    id: 'cust-hall',
    name: 'Tiffany Hall',
    title: 'General Counsel',
    organization: 'Mastercard Incorporated',
    org: 'mastercard',
    relevance:
      'Signatory of Feb 11, 2026 Section 13(r) notice to SEC. Work-product privilege shields much of her correspondence, but non-privileged communications (e.g., with outside counsel re: public statements, SEC filings, disclosure-adequacy reviews) may be reachable.',
    likelyCustodianOf: [
      'Section 13(r) Iran-disclosure drafting files',
      'SEC disclosure-adequacy analyses',
      'Correspondence with Treasury OFAC licensing counsel',
      'Yana audit privilege determinations',
    ],
    depositionPriority: 'high',
    publicStatements: 'Feb 11, 2026 SEC filing signature.',
  },
  {
    id: 'cust-eisen',
    name: 'Seth Eisen',
    title: 'Senior Vice President, Communications',
    organization: 'Mastercard Incorporated',
    org: 'mastercard',
    relevance:
      'Sole Mastercard spokesperson on WSJ investigation; three on-record quotes in May 31, 2025 Cloud article. No follow-up in any major outlet through Apr 2026.',
    likelyCustodianOf: [
      'Press-response drafts and approval chains for WSJ',
      'Internal messaging guidance re: Iraq narrative',
      'Approved talking points distributed to earnings-call prep',
    ],
    depositionPriority: 'medium',
    publicStatements:
      'Three WSJ quotes (May 31, 2025): "action as appropriate," "we reserve the right to revisit," "actioned accordingly."',
    relatedEntityId: 'eisen',
  },
  {
    id: 'cust-kirkpatrick',
    name: 'Linda Kirkpatrick',
    title: 'President, Americas',
    organization: 'Mastercard Incorporated',
    org: 'mastercard',
    relevance:
      'Testified under oath before Senate Judiciary Nov 19, 2024 at Credit Card Competition Act hearing. Iraq/Iran not discussed, but under-oath testimony creates baseline.',
    likelyCustodianOf: [
      'Senate Judiciary preparation materials (Nov 2024)',
      'Americas-region compliance coordination with EEMEA',
    ],
    depositionPriority: 'medium',
    publicStatements: 'Senate Judiciary testimony (Nov 19, 2024) — no Iraq/Iran discussion.',
    relatedEntityId: 'kirkpatrick',
  },

  // === VISA ===
  {
    id: 'cust-mcinerney',
    name: 'Ryan McInerney',
    title: 'Chief Executive Officer',
    organization: 'Visa Inc.',
    org: 'visa',
    relevance:
      'Took over as CEO February 2023 — three months before NYFed/Treasury began questioning Visa. Never publicly commented on Iraq.',
    likelyCustodianOf: [
      'CEO-level correspondence with Treasury/NYFed re: Iraq',
      'Board materials concerning Iraqi exposure',
      'Q2 FY2025 call prep; Q4 FY2025 call prep (Scam Disruption section)',
      'Investor Day Feb 20, 2025 preparation records',
    ],
    depositionPriority: 'high',
    publicStatements: 'None on record concerning Iraq.',
    relatedEntityId: 'mcinerney',
  },
  {
    id: 'cust-kelly',
    name: 'Al Kelly',
    title: 'Former Chief Executive Officer (2016-Feb 2023)',
    organization: 'Visa Inc.',
    org: 'visa',
    relevance:
      'CEO during pre-surge period. October 25, 2022 Q4 FY2022 call touted Visa Iraq Islamic Bank and 400,000 Iraqi customers. The only pre-surge Visa CEO statement naming Iraq.',
    likelyCustodianOf: [
      'Q4 FY2022 earnings-call prep and Iraqi-market materials',
      'Visa Iraq Islamic Bank partnership documents',
      'Handover memoranda to McInerney regarding Iraqi market',
    ],
    depositionPriority: 'medium',
    publicStatements: 'Oct 25, 2022 earnings call Visa Iraq Islamic Bank remarks.',
    relatedEntityId: 'al-kelly',
  },
  {
    id: 'cust-fabara',
    name: 'Paul Fabara',
    title: 'Chief Risk Officer',
    organization: 'Visa Inc.',
    org: 'visa',
    relevance:
      'Owns VIRP (effective May 1, 2023 — same month NYFed/Treasury began pressing Visa on Iraq). VAAI Score spokesperson.',
    likelyCustodianOf: [
      'VIRP Tier 1/2/3 determinations for Iraqi issuers',
      'VAAI Score implementation records for Iraqi transactions',
      'Risk-committee materials on Iraqi cross-border volume',
      'Issuer/acquirer sanctions screening audit records',
    ],
    depositionPriority: 'high',
    publicStatements: 'VAAI Score launch (May 7, 2024); VIRP framework documentation.',
    relatedEntityId: 'fabara',
  },
  {
    id: 'cust-mirfin',
    name: 'James Mirfin',
    title: 'Global Head of Risk & Identity Solutions',
    organization: 'Visa Inc.',
    org: 'visa',
    relevance:
      'On-camera July 26, 2024 CNBC claim that Visa AI evaluates every single transaction — potentially usable as admission-against-interest given contemporaneous Iraqi scheme.',
    likelyCustodianOf: [
      'CNBC interview preparation materials (July 2024)',
      'Visa AI fraud-detection system architecture',
      'Alert-threshold and manual-override records for Iraqi transactions',
    ],
    depositionPriority: 'high',
    publicStatements:
      '"We do about 300 billion transactions a year. Every single one of those has been processed by AI" (CNBC, July 26, 2024).',
    relatedEntityId: 'mirfin',
  },
  {
    id: 'cust-cook',
    name: 'Fletcher Cook',
    title: 'Spokesperson / Communications',
    organization: 'Visa Inc.',
    org: 'visa',
    relevance:
      'Sole Visa public voice on the card scheme in WSJ reporting; single on-record statement.',
    likelyCustodianOf: [
      'Press-response drafts for WSJ inquiries',
      'Approved messaging re: Iraqi issuer relationships',
    ],
    depositionPriority: 'medium',
    publicStatements:
      'WSJ May 31, 2025: "Central to our operations is a commitment to ensuring that transactions on our network do not violate the law."',
    relatedEntityId: 'cook',
  },
  {
    id: 'cust-sheedy',
    name: 'Bill Sheedy',
    title: 'Senior Advisor to the CEO',
    organization: 'Visa Inc.',
    org: 'visa',
    relevance:
      'Testified under oath before Senate Judiciary Nov 19, 2024. Iraq/Iran not raised, but creates under-oath baseline.',
    likelyCustodianOf: [
      'Senate Judiciary preparation materials (Nov 2024)',
    ],
    depositionPriority: 'medium',
    publicStatements: 'Senate Judiciary testimony (Nov 19, 2024).',
    relatedEntityId: 'sheedy',
  },

  // === IRAQI PARTNER INSTITUTIONS ===
  {
    id: 'cust-bahaa-hadi',
    name: 'Bahaa Abdul Hadi',
    title: 'Founder / Chairman',
    organization: 'International Smart Card (Qi Card)',
    org: 'iraqi-issuer',
    relevance:
      'Founder of ISC; detained 2020 and reinstated; named in May 28, 2025 Wilson-Steube letter to Sec. Rubio for sanctions. Public statements defending ISC\'s compliance.',
    likelyCustodianOf: [
      'ISC partnership agreements with Mastercard and Visa',
      'PMF-cardholder onboarding and offboarding records',
      'Treasury/Federal Reserve engagement records',
      'Qi Card salary-disbursement protocols (pre-July 2025)',
    ],
    depositionPriority: 'high',
    publicStatements:
      'Claimed ISC "no longer provides any services to the Popular Mobilization Forces" (as of 2025).',
  },

  // === U.S. GOVERNMENT (subpoena rather than deposition) ===
  {
    id: 'cust-treasury-ofac',
    name: 'Treasury / OFAC (institutional)',
    title: 'Office of Foreign Assets Control + Office of Terrorism and Financial Intelligence',
    organization: 'U.S. Department of the Treasury',
    org: 'government',
    relevance:
      'Briefed Visa and Mastercard on militia card scheme beginning May 2023; engaged repeatedly through 2024-2025. Records of those engagements are central to establishing scienter.',
    likelyCustodianOf: [
      'Briefing materials provided to Visa/Mastercard Fall 2023',
      'Memoranda of conversations with network compliance officers',
      'Referrals to OFAC enforcement division',
      'Coordination records with NYFed and State Department',
    ],
    depositionPriority: 'low',
    publicStatements: 'Numerous OFAC press releases (sb0188, sb0233, sb0277, sb0458); jy2053 (Al-Huda).',
    relatedEntityId: 'treasury',
  },
  {
    id: 'cust-nyfed',
    name: 'Federal Reserve Bank of New York (institutional)',
    title: 'Wire transfer oversight + Iraqi bank correspondent relationships',
    organization: 'Federal Reserve Bank of New York',
    org: 'government',
    relevance:
      'First regulatory contact with Visa/MA in May 2023 re: Iraqi surge. Ongoing coordination through CBI and Treasury.',
    likelyCustodianOf: [
      'May 2023 inquiry records with Visa/Mastercard',
      'Iraqi correspondent-bank oversight files',
      '"Regular meetings" 2024 records re: Iraq market',
    ],
    depositionPriority: 'low',
    publicStatements: 'Limited; most engagement via Treasury press releases.',
    relatedEntityId: 'nyfed',
  },
  {
    id: 'cust-state-consular',
    name: 'State Department Consular Affairs',
    title: 'Iraq country desk + emergency citizens services',
    organization: 'U.S. Department of State',
    org: 'government',
    relevance:
      'U.S. Embassy Baghdad intervention records — critical for any plaintiff who was wrongfully imprisoned in Iraq by PMF-linked actors. Also Rewards-for-Justice records on al-Hamidawi bounty (Apr 14, 2026).',
    likelyCustodianOf: [
      'Consular assistance records for U.S. nationals detained in Iraq',
      'Diplomatic cables re: Iraqi banking sanctions coordination',
      'Rewards-for-Justice program files on al-Hamidawi',
      'FTO designation files (HHN, KSS, KIA, Ansar Awfiya)',
    ],
    depositionPriority: 'low',
  },
  {
    id: 'cust-fincen',
    name: 'FinCEN (institutional)',
    title: 'Financial Crimes Enforcement Network',
    organization: 'U.S. Department of the Treasury',
    org: 'government',
    relevance:
      'Al-Huda Bank Section 311 finding (Jan 29, 2024, jy2053) is a peer-level regulatory finding that the Iraqi banking system was actively conducting militia-linked financing during the Gap Period.',
    likelyCustodianOf: [
      'Al-Huda Section 311 findings supporting record',
      'SAR referrals from Visa/MA-issuing or -acquiring banks',
      'BSA compliance reviews of card operators',
    ],
    depositionPriority: 'low',
    publicStatements: 'jy2053 (Al-Huda Bank) and related SAR policy guidance.',
    relatedEntityId: 'gacki',
  },
];

// -----------------------------------------------------------
// DOCUMENT REQUEST CATEGORIES
// -----------------------------------------------------------

export interface DocumentCategory {
  id: string;
  title: string;
  description: string;
  specificExamples: string[];
  targetCustodians: string[];
  priority: 'p0-critical' | 'p1-high' | 'p2-medium';
  privilegeRisk: 'low' | 'medium' | 'high';
}

export const documentCategories: DocumentCategory[] = [
  {
    id: 'doc-cat-internal-audits',
    title: 'Internal Compliance Audits of Iraqi Issuers',
    description:
      'Every Mastercard Global Compliance and Visa VIRP-triggered audit of Iraqi card issuers from Jan 2023 through Apr 2025. The August 2023 Yana Banking audit is the template — others almost certainly exist for ISC, Al Saqi, FIB, Yana Banking and the other 13+ Iraqi issuers.',
    specificExamples: [
      'Mastercard Global Compliance Team review of Yana Banking Services (August 2023)',
      'Any audits of International Smart Card / Qi Card',
      'Any audits of Al Saqi Electronic Payment Company',
      'Any audits of First Iraqi Bank (particularly after Visa Direct $1.2B 10-week surge)',
      'Visa VIRP Tier 1/2/3 determinations and risk re-tierings',
      'Any compliance audits triggered by Treasury/NYFed inquiry',
    ],
    targetCustodians: ['cust-hall', 'cust-bhalla', 'cust-fabara'],
    priority: 'p0-critical',
    privilegeRisk: 'medium',
  },
  {
    id: 'doc-cat-10k-prep',
    title: 'SEC Disclosure Workpapers (10-K, 10-Q, 13(r) Exhibits)',
    description:
      'Internal drafting and disclosure-adequacy analysis for Visa and Mastercard SEC filings from FY2020 through FY2025, with particular focus on Iran/Iraq-risk-factor treatment, Section 13(r) Iran exhibit narrowing, and the Feb 2026 Mastercard novel-Iran-sentence.',
    specificExamples: [
      'Workpapers for Mastercard FY2025 10-K Iran-operations disclosure (the novel Feb 11, 2026 sentence)',
      'Drafts and redlines of Mastercard Section 13(r) Exhibit 99.1 for 2020-2025',
      'Disclosure Committee minutes re: Iraq/Iran exposure 2023-2025',
      'Auditor (E&Y / PwC) queries and responses on Iraq-risk treatment',
      'Legal memoranda evaluating 13(r) scope and de minimis thresholds',
    ],
    targetCustodians: ['cust-hall', 'cust-mehra', 'cust-miebach', 'cust-mcinerney'],
    priority: 'p0-critical',
    privilegeRisk: 'high',
  },
  {
    id: 'doc-cat-earnings-prep',
    title: 'Earnings-Call Preparation Materials',
    description:
      'All Visa and Mastercard quarterly earnings-call preparation materials referencing Iraq, Iran, Middle East cross-border volume, or sanctions compliance from Q1 2023 through Q4 2025.',
    specificExamples: [
      'Mastercard Q1 2025 call prep deck (May 1, 2025 — Mehra "moderation in select markets" euphemism)',
      'Mastercard Q2 2025 call prep deck (July 31, 2025 — "enforcement of Mastercard rules")',
      'Visa Q2 FY2025 call prep (April 29, 2025 — April 2025 card blockings)',
      'Investor Relations Q&A documents re: anticipated analyst Iraq questions',
      'Anticipated-question briefs re: Western Union Iraq disclosure parity',
    ],
    targetCustodians: ['cust-mehra', 'cust-mcinerney', 'cust-miebach'],
    priority: 'p1-high',
    privilegeRisk: 'medium',
  },
  {
    id: 'doc-cat-treasury-comms',
    title: 'Treasury / NYFed Communications 2023-2025',
    description:
      'All written communications (emails, letters, meeting minutes, call notes, memoranda of conversations) between Visa/Mastercard and Treasury/OFAC/NYFed/FinCEN from May 2023 through April 2025 concerning Iraq, Iranian proxies, or Iraqi card issuers.',
    specificExamples: [
      'May 2023 initial NYFed/Treasury inquiry correspondence',
      'Fall 2023 briefing materials (Treasury → networks) naming militia groups (KH, Badr, AAH)',
      '"Regular meetings" records throughout 2024 — calendar entries, agendas, minutes, follow-ups',
      'March-April 2025 pre-blocking coordination with Treasury',
      'Coordination re: Central Bank of Iraq $300M monthly cap imposition',
      'Coordination re: K2 Integrity retention as CBI monitor',
    ],
    targetCustodians: ['cust-miebach', 'cust-mcinerney', 'cust-fabara', 'cust-bhalla'],
    priority: 'p0-critical',
    privilegeRisk: 'low',
  },
  {
    id: 'doc-cat-merchant-onboarding',
    title: 'UAE Merchant Onboarding + MATCH / High-Integrity-Risk Files',
    description:
      'Onboarding, risk-tiering, and transaction-monitoring files for the 4,000+ UAE merchants Mastercard added to MATCH in March 2025 and the 5,000+ UAE vendors Visa blocked in April 2025. Particularly those handling near-100% Iraqi cross-border volume.',
    specificExamples: [
      'Merchant Category Code (MCC) assignments for UAE jewelers, electronics retailers, free-zone shops',
      'Business Risk Assessment and Mitigation (BRAM) reviews for blocked merchants',
      'Global Risk Investigation Program (GRIP) files on Iraq-corridor abuse',
      'MATCH list entries and reasons for termination (March 2025)',
      'Acquirer oversight files for UAE-domiciled acquiring banks handling blocked merchants',
      'Transaction-velocity alerts for merchants with >70% Iraqi card volume',
    ],
    targetCustodians: ['cust-bhalla', 'cust-fabara'],
    priority: 'p0-critical',
    privilegeRisk: 'low',
  },
  {
    id: 'doc-cat-ai-alerts',
    title: 'AI Fraud-Detection System Alerts and Overrides (Iraq Corridor)',
    description:
      'All alerts, flagged transactions, manual overrides, and alert-clearance logs from Decision Intelligence Pro, VAA, VAAI Score, Featurespace, Brighterion, and TRACE concerning Iraqi cross-border transactions from Jan 2023 through Apr 2025.',
    specificExamples: [
      'DIP alert logs for Iraq-origin transactions (Feb 2024 onward)',
      'VAAI Score outputs for Iraqi transactions (May 2024 onward)',
      'VIRP Tier-change events for Iraqi issuers',
      'Manual override / alert-clearance audit trails',
      'Anomaly reports referencing the April 2023 2,900% surge',
      'FIB Visa Direct system alerts for single-cardholder $5M/day pattern',
    ],
    targetCustodians: ['cust-bhalla', 'cust-fabara', 'cust-mirfin'],
    priority: 'p0-critical',
    privilegeRisk: 'low',
  },
  {
    id: 'doc-cat-fee-revenue',
    title: 'Fee Revenue Analyses — Iraqi Cross-Border Volume',
    description:
      'Internal revenue and fee analyses quantifying Visa and Mastercard fee revenue from Iraqi cross-border transactions from Jan 2023 through Apr 2025. Supports the $120M combined fee estimate and any disgorgement analysis.',
    specificExamples: [
      'Monthly fee revenue by country (Iraq) from CEMEA/EEMEA regional finance',
      'Cross-border interchange and assessment fee reports',
      'FX-conversion revenue from Iraqi-originated transactions',
      'Budget/forecast reports reflecting Iraq contribution to cross-border growth',
      'Variance analyses explaining the April 2023 surge in revenue terms',
    ],
    targetCustodians: ['cust-mehra'],
    priority: 'p1-high',
    privilegeRisk: 'low',
  },
  {
    id: 'doc-cat-board',
    title: 'Board of Directors Materials — Iraq / Iran Risk',
    description:
      'Board meeting minutes, board committee (Audit; Risk; Compliance) minutes, and board-materials packets referencing Iraq, Iran, PMF, IRGC, Iraqi card issuers, or the cross-border surge from 2023 through 2025.',
    specificExamples: [
      'Audit Committee minutes on Yana audit escalation',
      'Risk Committee presentations on Iraqi cross-border growth',
      'Full board quarterly updates re: emerging-market compliance',
      'Board-level Treasury/NYFed engagement summaries',
      'Director email correspondence on WSJ investigation preparation',
    ],
    targetCustodians: ['cust-miebach', 'cust-mcinerney'],
    priority: 'p1-high',
    privilegeRisk: 'medium',
  },
  {
    id: 'doc-cat-issuer-agreements',
    title: 'Iraqi Issuer/Acquirer License Agreements + Termination Records',
    description:
      'Full license agreements, risk-tier determinations, onboarding diligence, and any termination/suspension records for all 17 Iraqi-licensed card issuers operating 2023-2025.',
    specificExamples: [
      'Yana Banking Services license agreement + reinstatement records (post-August 2023 audit)',
      'International Smart Card license agreements (with Mastercard primarily)',
      'Al Saqi Electronic Payment Company license (Visa relationship through 2025)',
      'First Iraqi Bank Visa Direct partnership agreement',
      'Termination/suspension records for the ~8 Iraqi issuers delisted by mid-2025',
      'Sanctions-screening obligations imposed on issuers',
    ],
    targetCustodians: ['cust-fabara', 'cust-bhalla', 'cust-bahaa-hadi'],
    priority: 'p0-critical',
    privilegeRisk: 'low',
  },
  {
    id: 'doc-cat-press-response',
    title: 'Press-Response Approval Chains',
    description:
      'Internal approval chains for all public statements on Iraq — particularly the May 31, 2025 WSJ response statements from Eisen and Cook, the Feb 2026 MA Dubai press release, and any press inquiries from Reuters, FT, Bloomberg, NYT, ProPublica through April 2026.',
    specificExamples: [
      'WSJ response drafts and legal review (Eisen three quotes + Cook quote)',
      'Press responses declined or not issued (what was NOT said publicly)',
      'Approval chain for FY2025 10-K novel Iran sentence (Feb 2026)',
      'Any Congressional inquiry response drafts (Wilson/Steube letters)',
    ],
    targetCustodians: ['cust-eisen', 'cust-cook', 'cust-hall'],
    priority: 'p2-medium',
    privilegeRisk: 'medium',
  },
];

// -----------------------------------------------------------
// THIRD-PARTY SUBPOENA TARGETS
// -----------------------------------------------------------

export interface SubpoenaTarget {
  id: string;
  name: string;
  jurisdiction: string;
  relevance: string;
  specificRequests: string[];
  priority: 'p0-critical' | 'p1-high' | 'p2-medium';
}

export const subpoenaTargets: SubpoenaTarget[] = [
  {
    id: 'subp-k2',
    name: 'K2 Integrity',
    jurisdiction: 'New York, NY',
    relevance:
      'U.S. financial-crimes consulting firm retained by Central Bank of Iraq as independent monitor of Iraqi card issuers post-April 2025. Almost certainly the most consolidated third-party view of Iraqi issuer compliance failures.',
    specificRequests: [
      'Monitoring reports produced for CBI on Iraqi card issuers',
      'Compliance deficiency findings on Yana, ISC, FIB, Al Saqi',
      'Transaction-monitoring implementation records',
      'Communications with U.S. Treasury re: Iraqi issuer findings',
    ],
    priority: 'p0-critical',
  },
  {
    id: 'subp-wsj',
    name: 'The Wall Street Journal (Ian Talley + David S. Cloud)',
    jurisdiction: 'Dow Jones & Company, New York',
    relevance:
      'Source materials for the May 31, 2025 "Needing Dollars, Iran-Backed Militias Turn to Visa and Mastercard" investigation. Likely shielded by reporter\'s privilege but non-privileged underlying documents may be reachable (Treasury briefings, government records).',
    specificRequests: [
      'Non-privileged source documents cited in May 31, 2025 investigation',
      'Yana Banking audit document (the copy "reviewed by the Journal")',
      'Any Visa/Mastercard internal documents shared with WSJ by sources',
    ],
    priority: 'p2-medium',
  },
  {
    id: 'subp-cbi',
    name: 'Central Bank of Iraq',
    jurisdiction: 'Baghdad, Iraq (via Hague Convention / diplomatic channels)',
    relevance:
      'Licensed all 17 Iraqi card issuers; imposed $300M/month cap and $5,000/cardholder limit; coordinated with Treasury on June 1, 2025 Mastercard suspension.',
    specificRequests: [
      'Iraqi card issuer license files (Yana, ISC, FIB, Al Saqi, and others)',
      'Communications with Treasury/NYFed 2023-2025 re: card issuers',
      '$300M/month cap imposition records',
      'Switch card program administration',
    ],
    priority: 'p1-high',
  },
  {
    id: 'subp-western-union',
    name: 'Western Union',
    jurisdiction: 'Denver, CO',
    relevance:
      'The comparator witness. Q2 2023 earnings call transcript + source materials establishing that Iraq-risk disclosure was feasible, market-survivable, and expected by the analyst community.',
    specificRequests: [
      'Q2 2023 earnings call preparation materials (July 26, 2023)',
      'Internal analysis of Iraqi market risk leading to 70% run-rate reduction',
      'Treasury/NYFed communications re: Iraqi agent network',
      'Any communications with Visa/Mastercard or their counsel re: Iraq market',
    ],
    priority: 'p1-high',
  },
  {
    id: 'subp-uae-acquirers',
    name: 'UAE Acquiring Banks (Emirates NBD; Abu Dhabi Commercial Bank; Mashreq; others)',
    jurisdiction: 'United Arab Emirates (via Hague or diplomatic)',
    relevance:
      'Acquiring relationships with the ~4,000-5,000 UAE merchants blocked by MA/Visa in March-April 2025. Onboarding records + transaction monitoring on their end is critical to the "unusual way" pleading.',
    specificRequests: [
      'Merchant onboarding files for blocked UAE vendors',
      'Transaction monitoring and alert records for Iraqi-card-dependent merchants',
      'Correspondence with Visa/Mastercard re: suspicious merchant activity',
    ],
    priority: 'p1-high',
  },
  {
    id: 'subp-featurespace',
    name: 'Featurespace (Visa subsidiary post-Dec 19, 2024)',
    jurisdiction: 'Cambridge, UK / Visa Inc.',
    relevance:
      'Real-time AI payments-fraud prevention technology acquired by Visa for $1.4B. Implementation and alert records post-acquisition are directly responsive to the "AI that caught every transaction" marketing claim.',
    specificRequests: [
      'Pre-acquisition Iraqi-market risk assessments by Featurespace',
      'Post-acquisition integration plans with VAA/VAAI Score',
      'Alert and override logs for Iraqi transactions Dec 2024 - Apr 2025',
    ],
    priority: 'p2-medium',
  },
  {
    id: 'subp-brighterion',
    name: 'Brighterion (Mastercard subsidiary since 2017)',
    jurisdiction: 'San Francisco, CA / Mastercard Inc.',
    relevance:
      'Mastercard\'s publicly marketed KYC/AML/Sanctions Screening subsidiary. Why its capabilities were apparently not deployed at Yana is directly at issue.',
    specificRequests: [
      'Product-deployment records for Brighterion at Iraqi issuers',
      'Technical-integration records with Yana, ISC, other Iraqi partners',
      'Sanctions-screening alert logs',
    ],
    priority: 'p1-high',
  },
];

// -----------------------------------------------------------
// PUBLIC DATA SOURCES (no subpoena needed)
// -----------------------------------------------------------

export interface PublicDataSource {
  id: string;
  title: string;
  source: string;
  url?: string;
  description: string;
  whatToPull: string[];
}

export const publicDataSources: PublicDataSource[] = [
  {
    id: 'src-sec-edgar',
    title: 'SEC EDGAR — Visa and Mastercard Filings',
    source: 'U.S. Securities and Exchange Commission',
    url: 'https://www.sec.gov/cgi-bin/browse-edgar',
    description:
      'Direct access to every Visa and Mastercard 10-K, 10-Q, 8-K, proxy statement, and Section 13(r) exhibit filed since 2008.',
    whatToPull: [
      'Mastercard Incorporated (CIK 0001141391): all 10-K + 13(r) exhibits 2020-2025',
      'Visa Inc. (CIK 0001403161): all 10-K + 10-Q risk-factor language 2020-2025',
      'Insider trading forms (Form 4) for named executives',
      'Proxy statements (DEF 14A) — executive compensation structure',
      'Exhibit 21 (subsidiaries) — corporate structure',
    ],
  },
  {
    id: 'src-ofac-sdn',
    title: 'OFAC SDN List',
    source: 'U.S. Department of the Treasury, Office of Foreign Assets Control',
    url: 'https://sanctionssearch.ofac.treas.gov/',
    description:
      'Specially Designated Nationals list with full biographical detail on designated persons, including the April 17, 2026 "Economic Fury" seven commanders and all prior Iraqi militia / KH / IRGC-QF designations.',
    whatToPull: [
      'Muhandis General Company full entry (Entity ID OFAC-55929)',
      'Baladna Agricultural Investments',
      'All seven April 17, 2026 commanders (Rammahi, Almohammed, Hamzah, Suwaed, Albakhatra, Mukhamis, Jaythoom)',
      'KH leadership entries (Abu Fadak, al-Hamidawi, al-Askari)',
      'Ali Ghulam Al Anssari + Baidani brothers',
    ],
  },
  {
    id: 'src-ofac-recent',
    title: 'OFAC Recent Actions',
    source: 'Treasury / OFAC',
    url: 'https://ofac.treasury.gov/recent-actions',
    description:
      'Press releases and SDN List updates by date. Includes sb0188 (Said), sb0233 (Samarra\'i), sb0277 (Muhandis), sb0458 (Economic Fury), and sb0457 (Sudan, bundled with sb0458).',
    whatToPull: [
      '20250703 (sb0188)',
      '20250902 (sb0233)',
      '20251009_33 (sb0277)',
      '20260417 (sb0458)',
      '20250917 (FTO upgrades)',
    ],
  },
  {
    id: 'src-state-fto',
    title: 'State Department Foreign Terrorist Organization List',
    source: 'U.S. Department of State, Bureau of Counterterrorism',
    url: 'https://www.state.gov/foreign-terrorist-organizations/',
    description:
      'Current list of FTO-designated organizations with effective dates. Includes KH (2009), AAH (2020), IRGC (2019), and the Sept 17, 2025 upgrades (HHN, KSS, Ansar Awfiya, KIA).',
    whatToPull: [
      'Designation effective dates for each KH/AAH/IRGC/HHN/KSS/KIA/Ansar Awfiya',
      'Original designation notices in Federal Register',
      'Any annulments, reviews, or redesignations',
    ],
  },
  {
    id: 'src-pacer',
    title: 'PACER — Parallel ATA/JASTA Dockets',
    source: 'U.S. Federal Courts',
    url: 'https://pacer.uscourts.gov/',
    description:
      'All active ATA/JASTA dockets against financial institutions. Filings, motions to dismiss, orders — critical for tracking how courts are currently ruling on post-Taamneh pleading.',
    whatToPull: [
      'Moses v. BNP Paribas, 1:24-cv-04938 (S.D.N.Y.) — Dkt. 40 (MTD Opinion & Order)',
      'Freeman II v. HSBC, 1:18-cv-07359 (E.D.N.Y.) — Third Amended Complaint + pending MTD briefing',
      'Bartlett v. SGBL, 1:19-cv-00007 (E.D.N.Y.) — discovery orders',
      'Atchley v. AstraZeneca, D.C. Cir. No. 20-7077 — January 23, 2026 opinion',
      'Raanan v. Binance, S.D.N.Y. — 2025 WL 605594 MTD opinion',
      'Miller/Pam v. Arab Bank, 1:18-cv-02192 / 18-cv-04670 (E.D.N.Y.)',
      'Averbach v. Cairo Amman Bank, 1:19-cv-00004 (S.D.N.Y.)',
      'Zobay v. MTN Group, 1:21-cv-03503 (E.D.N.Y.)',
      'Balva v. Binance, D.N.D. (filed Nov 24, 2025)',
      'Kreindler Tower 22 FSIA suit, D.D.C. (filed Jan 22, 2026)',
    ],
  },
  {
    id: 'src-fincen',
    title: 'FinCEN Enforcement Actions + Press Releases',
    source: 'FinCEN',
    url: 'https://www.fincen.gov/news/news-releases',
    description:
      'Section 311 findings, CMP orders, SAR guidance, and enforcement actions. jy2053 (Al-Huda Bank) is the critical Gap-Period finding.',
    whatToPull: [
      'jy2053 (Al-Huda Bank, Jan 29, 2024) full finding + supporting record',
      'Card-system-operator CMP history (if any)',
      'Section 311 findings involving Iraqi banking ecosystem',
    ],
  },
  {
    id: 'src-treasury-pr',
    title: 'Treasury Press Releases',
    source: 'home.treasury.gov/news/press-releases',
    url: 'https://home.treasury.gov/news/press-releases',
    description:
      'All Treasury-level statements; broader than OFAC. Captures Secretary Bessent / Yellen / Mnuchin statements and Treasury policy announcements.',
    whatToPull: [
      'sb0188, sb0233, sb0277, sb0458 full text + factual assertions',
      'Secretary-level statements on Iraq-Iran financial architecture',
      'NSPM-2 implementation press releases (Feb 4, 2025 onward)',
    ],
  },
  {
    id: 'src-state-pr',
    title: 'State Department Press Releases + Rewards for Justice',
    source: 'state.gov',
    url: 'https://www.state.gov/press-releases/',
    description:
      'State-level statements; Rewards for Justice program announcements; FTO designation press releases.',
    whatToPull: [
      'June 17, 2024 Ansar Allah al-Awfiya terrorist designation',
      'Sept 17, 2025 FTO upgrades (HHN, KSS, Ansar Awfiya, KIA)',
      'April 14, 2026 $10M al-Hamidawi bounty',
    ],
  },
  {
    id: 'src-centcom',
    title: 'CENTCOM Press Releases',
    source: 'U.S. Central Command',
    url: 'https://www.centcom.mil/MEDIA/PRESS-RELEASES/',
    description:
      'Official operational attribution records for attacks on U.S. forces. February 2, 2024 retaliation release and February 7, 2024 al-Saadi strike release are foundational.',
    whatToPull: [
      'CENTCOM Feb 2, 2024 retaliation press release (Tower 22 response)',
      'CENTCOM Feb 7, 2024 Hellfire strike on Abu Baqir al-Saadi',
      'Any CENTCOM press releases attributing specific attacks to KH, AAH, HHN, KSS, Ansar Awfiya',
    ],
  },
  {
    id: 'src-doj',
    title: 'DOJ Press Releases + Unsealed Indictments',
    source: 'justice.gov',
    url: 'https://www.justice.gov/news',
    description:
      'Tower 22 component-export indictment (Sadeghi/Abedininajafabadi, Dec 2024) and any subsequent DOJ actions on Iraq-Iran financial/attack facilitation.',
    whatToPull: [
      'Sadeghi/Abedininajafabadi indictment (Dec 2024, D. Mass.)',
      'Any subsequent Tower 22-related indictments',
      'Criminal enforcement actions re: Iraqi card-scheme facilitators',
    ],
  },
  {
    id: 'src-mastercard-ir',
    title: 'Mastercard Investor Relations Site',
    source: 'investor.mastercard.com',
    url: 'https://investor.mastercard.com/',
    description:
      'Quarterly earnings transcripts, presentations, investor-day materials, and SEC filings.',
    whatToPull: [
      'All earnings call transcripts Q1 2020 - Q4 2025',
      'Investment Community Meeting Nov 13, 2024 presentation + Q&A',
      'Annual 10-K and proxy filings',
      'Press releases re: product launches (Decision Intelligence Pro, TRACE, etc.)',
    ],
  },
  {
    id: 'src-visa-ir',
    title: 'Visa Investor Relations Site',
    source: 'investor.visa.com',
    url: 'https://investor.visa.com/',
    description:
      'Quarterly earnings transcripts, presentations, investor-day materials (Feb 2020 and Feb 20, 2025), and SEC filings.',
    whatToPull: [
      'All earnings call transcripts FY2020 - FY2025',
      'February 20, 2025 Investor Day deck + transcript',
      'Annual 10-K and proxy filings',
      'Product launch materials (VAA, Visa Protect, VAAI Score, Featurespace)',
    ],
  },
  {
    id: 'src-congress',
    title: 'Congressional Records + Committee Materials',
    source: 'congress.gov + committee websites',
    url: 'https://www.congress.gov/',
    description:
      'H.R. 2658 text, Wilson-Steube correspondence, FY2026 NDAA relevant sections, House Financial Services and House Foreign Affairs hearing records, Senate Judiciary Nov 2024 hearing.',
    whatToPull: [
      'H.R. 2658 full text + legislative history',
      'January 28, 2025 Wilson-Steube-Baird-Dunn-Hamadeh-Weber-Smith letter to Rubio + Waltz',
      'May 28, 2025 Wilson-Steube letter to Rubio',
      'Senate Judiciary Nov 19, 2024 hearing transcript (Sheedy + Kirkpatrick testimony)',
      'House Financial Services Oct 25-26, 2023 hearings on Iran sanctions evasion',
      'FY2026 NDAA (H.R. XXXX) relevant Iraq provisions',
    ],
  },
];

// -----------------------------------------------------------
// Helpers
// -----------------------------------------------------------

export function getCustodiansByOrg(org: CustodianOrg): Custodian[] {
  return custodians.filter(c => c.org === org);
}

export const CUSTODIAN_ORG_LABEL: Record<CustodianOrg, string> = {
  visa: 'Visa Inc.',
  mastercard: 'Mastercard Incorporated',
  'iraqi-issuer': 'Iraqi Issuers / Acquirers',
  government: 'U.S. Government',
  other: 'Other Third Parties',
};

export const PRIORITY_LABEL: Record<'p0-critical' | 'p1-high' | 'p2-medium', string> = {
  'p0-critical': 'P0 — Critical',
  'p1-high': 'P1 — High Priority',
  'p2-medium': 'P2 — Medium Priority',
};
