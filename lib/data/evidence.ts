// Evidence repository data

export type EvidenceCategory = 
  | 'audit' 
  | 'warning' 
  | 'congressional' 
  | 'financial' 
  | 'media'
  | 'litigation'
  | 'regulatory';

export type SourceTier = 'primary' | 'secondary' | 'tertiary';

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
  documentUrl?: string;
  exhibitNumber?: string;
  sourceTier?: SourceTier;
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
    title: 'Jan 28, 2025 Wilson-Steube-et-al. Letter on PMF Militias (Rubio + Waltz)',
    shortTitle: 'Jan 28 Wilson-Steube Letter',
    category: 'congressional',
    date: 'January 28, 2025',
    source: 'U.S. House of Representatives (Wilson, Steube, Baird, Dunn, Hamadeh, Weber, Smith)',
    description: 'Joint letter from seven House Republicans to Secretary of State Marco Rubio and National Security Adviser Michael Waltz urging FTO designation of Iran-backed Iraqi militias (including Sarayya al-Jihad and Kata\'ib al-Imam Ali), imposition of E.O. 13224 sanctions, and termination of U.S. security assistance to Iraq. Announced by Rep. Steube\'s February 7, 2025 press release. Note: this letter does NOT mention Visa, Mastercard, Qi Card, or Al-Rafidain Bank — those targets are named in the later May 28, 2025 follow-up letter (doc-013).',
    keyFindings: [
      'Signed by Wilson, Steube, Baird, Dunn, Hamadeh, Weber, and Smith',
      'Addressed to Sec. Rubio AND NSA Michael Waltz',
      'Cites 170+ attacks on U.S. forces over two years',
      'Cites $11.4B in U.S. assistance to Iraq',
      'Demands FTO designation and E.O. 13224 sanctions',
      'Does NOT reference the card scheme or payment networks'
    ],
    significance: 'Foundational congressional record on Iran-backed Iraqi militia threats that set the political stage for the May 28, 2025 payment-system-specific letter. Demonstrates sustained House Republican concern over multiple months.',
    citations: [
      'steube.house.gov press release Feb 7, 2025',
      'Letter PDF: steube.house.gov/wp-content/uploads/2025/01/Quill-Letter-L22400-Defund-Iranian-Backed-Terror-Organizations-in-Iraq-Version-2-01-28-2025-@-12-10-PM.pdf'
    ],
    documentUrl: 'https://steube.house.gov/wp-content/uploads/2025/01/Quill-Letter-L22400-Defund-Iranian-Backed-Terror-Organizations-in-Iraq-Version-2-01-28-2025-@-12-10-PM.pdf'
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
  },

  // 2025-2026 ADDITIONS

  {
    id: 'doc-013',
    title: 'Wilson-Steube Letter to Sec. Rubio (Qi Card + Rafidain)',
    shortTitle: 'Rubio Letter',
    category: 'congressional',
    date: 'May 28, 2025',
    source: 'U.S. House of Representatives',
    description: 'Second Wilson-Steube letter, addressed to Secretary of State Marco Rubio, explicitly demanding FTO designation of the Popular Mobilization Forces, the Muhandis General Company, and the Badr Organization, and specifically calling for sanctions on Al-Rafidain Bank and the Qi-Card e-payment system "which processes the payroll for the PMF militias."',
    keyFindings: [
      'Explicitly names Al-Rafidain Bank and Qi-Card as sanctions targets',
      'Demands FTO designation of PMF, Muhandis General Company, Badr Organization',
      'Names finance minister Taif Sami Mohammed and Bahaa Abdul Hadi as sanction targets',
      'Names Latif Jassim Hadi, Alu Muften Khafif, Ahmed Salih al-Janabi',
      'Invokes NSPM-2 "Maximum Pressure" framework (Feb 4, 2025)',
      'Demands annual independent audit of Iraqi state banks',
      'Threatens to halt Iraq\'s Federal Reserve dollar access'
    ],
    significance: 'Provides specific, public congressional notice to the executive branch that Qi Card and Rafidain are continuing to process PMF payroll. Strengthens the "reckless disregard" record for any subsequent ATA or OFAC action against the networks.',
    citations: [
      'Fox News static archive 5.28.25_iraq_sanctions_letter.pdf'
    ],
    documentUrl: 'https://static.foxnews.com/foxnews.com/content/uploads/2025/05/5.28.25_iraq_sanctions_letter.pdf'
  },
  {
    id: 'doc-014',
    title: 'OFAC Press Release: Muhandis General Co. / Baladna Designation',
    shortTitle: 'OFAC SB0277',
    category: 'regulatory',
    date: 'October 9, 2025',
    source: 'U.S. Department of the Treasury',
    description: 'Treasury press release announcing OFAC\'s designation of Muhandis General Company — the PMF\'s economic conglomerate — and its commercial front Baladna Agricultural Investments under E.O. 13224, as amended. Explicitly establishes control by Kata\'ib Hezbollah and IRGC-Qods Force.',
    keyFindings: [
      'Muhandis General Co. formally designated SDGT/IFSR',
      'Control by KH leader Abu Fadak (Abd al-Aziz al-Muhammadawi) confirmed',
      'Baladna Agricultural Investments designated as commercial front',
      'Weapons supply chain involvement documented',
      'Kata\'ib Hezbollah named as most significant PMF player',
      'Complements Sept 17, 2025 FTO upgrades'
    ],
    significance: 'Establishes in an official Treasury record that the PMF\'s economic arm is controlled by Kata\'ib Hezbollah and IRGC-QF. This is the SDN-level predicate that OFAC precedent (Payoneer, BitPay, Epsilon) relies on for sanctions cases against facilitating payment processors.',
    citations: [
      'Treasury Press Release sb0277'
    ],
    documentUrl: 'https://home.treasury.gov/news/press-releases/sb0277'
  },
  {
    id: 'doc-015',
    title: 'OFAC SDN List Update — 20251009',
    shortTitle: 'SDN Update Oct 2025',
    category: 'regulatory',
    date: 'October 9, 2025',
    source: 'U.S. Department of the Treasury / OFAC',
    description: 'Formal SDN List update adding Muhandis General Company (OFAC-55929), Baladna Agricultural Investments, and Ali Mohammed Ghulam Hussein Al Anssari as Specially Designated Nationals under the SDGT/IFSR programs.',
    keyFindings: [
      'Muhandis General Co. Entity ID: OFAC-55929',
      'Linked To: KATA\'IB HIZBALLAH',
      'Linked To: ISLAMIC REVOLUTIONARY GUARD CORPS (IRGC)-QODS FORCE',
      'Secondary sanctions risk: E.O. 13224 § 1(b)',
      'Baladna address: Baghdad, Iraq',
      'All three added under SDGT program code'
    ],
    significance: 'The formal SDN entries are the machine-readable evidentiary artifacts that any network transaction monitoring system is required to screen against. Failure to screen post-Oct 9, 2025 = per-violation OFAC liability.',
    citations: [
      'OFAC Recent Actions 20251009_33'
    ],
    documentUrl: 'https://ofac.treasury.gov/recent-actions/20251009_33'
  },
  {
    id: 'doc-016',
    title: 'State Dept FTO Designations: HHN, KSS, Ansar Awfiya, KIA',
    shortTitle: 'FTO Upgrades Sep 2025',
    category: 'regulatory',
    date: 'September 17, 2025',
    source: 'U.S. Department of State / OFAC',
    description: 'OFAC counter-terrorism designation update reflecting the Secretary of State\'s upgrade of four Iran-aligned Iraqi militias from Specially Designated Global Terrorist (SDGT) status to Foreign Terrorist Organization (FTO) status under the Immigration and Nationality Act.',
    keyFindings: [
      'Harakat Hezbollah al-Nujaba (HHN)',
      'Kata\'ib Sayyid al-Shuhada (KSS)',
      'Harakat Ansar Allah al-Awfiya (19th PMF Brigade)',
      'Kata\'ib al-Imam Ali (KIA)',
      'All four are PMF components',
      'All four are Islamic Resistance in Iraq members',
      'Part of NSPM-2 "Maximum Pressure" campaign'
    ],
    significance: 'FTO designation unlocks the statutory predicate for 18 U.S.C. § 2333(a) primary civil ATA liability and § 2339B criminal material-support prosecutions. Ashley v. Deutsche Bank\'s pleading-stage dismissal (2d Cir. July 21, 2025) partly turned on attribution uncertainty that these designations now resolve.',
    citations: [
      'OFAC Recent Actions 20250917'
    ],
    documentUrl: 'https://ofac.treasury.gov/recent-actions/20250917'
  },
  {
    id: 'doc-017',
    title: 'Mastercard FY2025 Form 10-K Iran Threat Reduction Act Notice',
    shortTitle: 'MA 2025 13(r) Notice',
    category: 'litigation',
    date: 'February 11, 2026',
    source: 'U.S. Securities and Exchange Commission (EDGAR)',
    description: 'Mastercard Incorporated\'s notice to the SEC, signed by General Counsel Tiffany Hall, disclosing pursuant to Section 219 of the Iran Threat Reduction and Syria Human Rights Act of 2012 and Section 13(r) of the Securities Exchange Act of 1934 that Mastercard\'s FY2025 Form 10-K contains Iran-related disclosures.',
    keyFindings: [
      'Filed February 11, 2026',
      'FY ended December 31, 2025',
      'Signed by Mastercard General Counsel Tiffany Hall',
      'Prior analog: same notice filed Feb 12, 2025 for FY2024',
      '2025 Form 10-K explicitly identifies Iran under comprehensive OFAC sanctions',
      'Identifies Iraq indirectly via OFAC-listed jurisdictions where activity must be screened'
    ],
    significance: 'A SEC-filed, contemporaneous admission by Mastercard that Iran is a jurisdiction its compliance systems must block. In discovery or mediation, this limits Mastercard\'s ability to argue that Iran-linked flows through its Iraqi partners were undetectable or unforeseeable.',
    citations: [
      'SEC EDGAR ma12312025-irannotice.htm',
      'Mastercard 2025 Form 10-K'
    ],
    documentUrl: 'https://www.sec.gov/Archives/edgar/data/1141391/000114139126000015/ma12312025-irannotice.htm'
  },
  {
    id: 'doc-018',
    title: 'Kreindler v. Islamic Republic of Iran (Tower 22) — Complaint',
    shortTitle: 'Tower 22 FSIA Suit',
    category: 'litigation',
    date: 'January 22, 2026',
    source: 'U.S. District Court for the District of Columbia',
    description: 'FSIA state-sponsored-terrorism complaint filed by Kreindler & Kreindler LLP on behalf of the families of the three U.S. soldiers killed at Tower 22 on January 28, 2024, seeking compensatory and punitive damages against the Islamic Republic of Iran under 28 U.S.C. § 1605A.',
    keyFindings: [
      'Plaintiffs: families of Sgt. William Rivers, Spc. Kennedy Sanders, Spc. Breonna Moffett',
      'Defendant: Islamic Republic of Iran',
      'Filed January 22, 2026',
      'Court: U.S. District Court for the District of Columbia',
      'Statute: 28 U.S.C. § 1605A (FSIA state-sponsor exception)',
      'Counsel: Kreindler & Kreindler LLP'
    ],
    significance: 'Establishes the Iran attribution judgment that a subsequent § 2333(a) ATA action against the networks can rely on. Analogous FSIA cases (Holladay, Fishbeck, Christie, Gration) have produced judgments in the $500M-$1.8B range per case — demonstrating the order-of-magnitude of the damages universe.',
    citations: [
      'Law360 (Jan 22, 2026) — Iran Sued For Alleged Role In Deadly Jordan Drone Attack'
    ],
    documentUrl: 'https://www.law360.com/articles/2433161/iran-sued-for-alleged-role-in-deadly-jordan-drone-attack'
  },
  {
    id: 'doc-019',
    title: 'FDD Long War Journal: Iraqi Militia Fundraising via Mastercard',
    shortTitle: 'LWJ Apr 2026 Report',
    category: 'media',
    date: 'April 11, 2026',
    source: 'Foundation for Defense of Democracies — Long War Journal',
    description: 'Investigative report by Ahmad Sharawi documenting that Iran-backed Iraqi militias, including Harakat Ansar Allah al-Awfiya (the 19th PMF Brigade terrorist-designated for Tower 22), are operating post-crackdown fundraising campaigns that explicitly instruct donors to send funds via Mastercard and Zain Cash to support Iran and Hezbollah.',
    keyFindings: [
      'Campaigns explicitly frame themselves as a "financial front" for Iran\'s war effort',
      'Instructions direct donors to specific Mastercard and Zain Cash channels',
      'Campaign materials include designated account and wallet numbers',
      'PMF 19th Brigade Deputy Commander personally endorses the "Affection and Loyalty Campaign"',
      'Campaign language: "turn money into a striking force"',
      'Published April 11, 2026 — well after March/April 2025 network blocking'
    ],
    significance: 'Direct evidence that the Visa/Mastercard ecosystem remains a knowing vector for Iran-backed militia terror financing AFTER the 2025 remediation. Undermines any "we already fixed it" defense and converts the case from historical compliance failure to ongoing willful conduct — materially increasing ATA, JASTA, OFAC, and BSA exposure.',
    citations: [
      'FDD Long War Journal (April 11, 2026)'
    ],
    documentUrl: 'https://www.longwarjournal.org/archives/2026/04/iraqi-fundraising-drives-linked-to-militias-channel-support-to-iran-and-hezbollah.php'
  },
  {
    id: 'doc-020',
    title: 'PMF Al-Muhandis Card Launch Announcement',
    shortTitle: 'Al-Muhandis Card',
    category: 'media',
    date: 'July 11, 2025',
    source: 'The New Region / Arab Weekly',
    description: 'Coverage of Iraq\'s Popular Mobilization Units (PMU/PMF) switching from Qi Card — which failed to disburse salaries citing "technical issues" — to a new in-house PMF payment card system in July 2025. Per MEMRI/Shafaq/964Media, the PMF\'s General Administrative and Financial Department announced on July 10, 2025 that it had completed printing new payment cards "after continuous efforts." Salaries transitioned from state-owned Rafidain Bank to state-owned Al-Nahrain Bank. Some research sources label the replacement card "Al-Muhandis Card" (after Abu Mahdi al-Muhandis, KH founder killed in Jan 2020 U.S. strike); that label is reported but not the official public name.',
    keyFindings: [
      'PMF announced July 10, 2025 that new cards printing was complete',
      'Salary disbursement transitioned: Rafidain Bank → Al-Nahrain Bank (not Qi Card)',
      'Qi Card cited "technical issues" but U.S. sanctions pressure was the real driver',
      'PMF denied sanctions pressure claim; stated "all salaries are fully secured"',
      'Abbas Combat Division commander Zaidi attributes Qi Card exit to U.S. Treasury sanctions threat',
      'Iraqi MP Alawi: "These pressures have even reached Visa card companies, affecting the payment process"',
      'Sources close to PM Sudani said U.S. officials directly instructed Qi Card to suspend payments'
    ],
    significance: 'Confirms that the card scheme did not end — it adapted. The PMF public record contains direct Iraqi-official statements that U.S. Treasury pressure on Qi Card/Rafidain was the proximate cause of the switch to Al-Nahrain Bank. Strengthens the "scheme persists" narrative and rebuts any "mere historical episode" framing.',
    citations: [
      'The New Region (July 9, 2025)',
      'Arab Weekly — US steps up efforts to block funding for Iraq\'s PMF',
      'Shafaq News (June 29, 2025)'
    ],
    documentUrl: 'https://thenewregion.com/posts/2681/-iraq-s-pmf-to-distribute-new-payment-cards-as-us-sanctions-delay-salaries'
  },

  // ============================================================
  // RESEARCH FILES INTEGRATION (Round 2) - doc-021 through doc-060
  // ============================================================

  // Compliance-claims artifacts (Research 1)
  {
    id: 'doc-021',
    title: 'Visa AML/ATF and Sanctions Policy',
    shortTitle: 'Visa AML Policy',
    category: 'regulatory',
    date: 'Public / 2020-present',
    source: 'usa.visa.com',
    description: 'Visa\'s formal Anti-Money Laundering, Anti-Terrorist Financing, and Sanctions Policy, posted publicly at usa.visa.com. Commits Visa to "Establish risk-based due diligence on issuers and acquirers that contract with Visa to access its payment system" and "Conduct sanctions screening on issuers and acquirers, as applicable, to ensure no prohibited services or transactions are provided to sanctioned entities."',
    keyFindings: [
      'Public policy at usa.visa.com since at least 2020',
      'Commits to "risk-based due diligence on issuers and acquirers"',
      'Commits to "sanctions screening on issuers and acquirers"',
      'Directly contradicted by failure to detect Iraqi 2,900% surge',
      'Usable as admission-against-interest in discovery'
    ],
    significance: 'Visa\'s own published policy commits to exactly the controls that the Yana Banking audit demonstrated were not being implemented. The claim-reality gap is self-authenticating.',
    citations: [
      'usa.visa.com AML/ATF policy page'
    ]
  },
  {
    id: 'doc-022',
    title: 'Visa Integrity Risk Program (VIRP) Framework',
    shortTitle: 'VIRP',
    category: 'regulatory',
    date: 'Effective May 1, 2023',
    source: 'Visa public documentation',
    description: 'Visa\'s Integrity Risk Program, effective May 1, 2023 — the same month the Federal Reserve Bank of New York and Treasury officials began pressing Visa about the Iraqi transaction surge. VIRP formally replaced the Global Brand Protection Program and is marketed as a tiered (Tier 1/2/3) framework to "deter, detect, and remediate illegal activity from entering the Visa payment system."',
    keyFindings: [
      'Effective May 1, 2023 — contemporaneous with Treasury/NYFed inquiry',
      'Replaced Global Brand Protection Program',
      'Tier 1/2/3 high-integrity-risk acquirer registration',
      'Marketed capability directly contradicted by Iraq surge',
      'Timing coincidence is a standalone probative fact'
    ],
    significance: 'The exact month Visa\'s flagship new risk-program framework took effect is the exact month Treasury began asking Visa about the Iraqi surge. Either VIRP was implemented and failed, or it was marketed but not meaningfully operational — both scenarios are actionable.',
    citations: [
      'Visa VIRP announcements / public documentation'
    ]
  },
  {
    id: 'doc-023',
    title: 'Mastercard Rules Chapter 1, § 1.2 ("Anti-Money Laundering and Sanctions Requirements")',
    shortTitle: 'MA Rules § 1.2',
    category: 'regulatory',
    date: 'Renamed 2019; active through 2026',
    source: 'Mastercard public rulebook',
    description: 'Mastercard\'s binding rulebook provision (Chapter 1, § 1.2) titled "Mastercard Anti-Money Laundering and Sanctions Requirements," renamed from the earlier "Anti-Money Laundering Program" in 2019. Requires issuers and acquirers to implement AML and sanctions programs "comprised of policies, procedures and internal controls, including the designation of a compliance officer."',
    keyFindings: [
      'Chapter 1, § 1.2 of Mastercard Rules',
      'Renamed 2019 — shows contemporary focus on AML/sanctions',
      'Binds issuers and acquirers to program requirements',
      'Requires compliance officer designation',
      'Explicitly requires sanctions screening'
    ],
    significance: 'Mastercard\'s own binding rules required Yana Banking Services to do precisely what the August 2023 audit found Yana was not doing. This creates a breach-of-rules claim independent of the ATA/OFAC theory.',
    citations: [
      'Mastercard public rulebook'
    ]
  },
  {
    id: 'doc-024',
    title: 'Mastercard BRAM / GRIP / SPME / MATCH Frameworks',
    shortTitle: 'MA Risk Frameworks',
    category: 'regulatory',
    date: 'Active 2020-present',
    source: 'Mastercard public documentation',
    description: 'Mastercard\'s Business Risk Assessment and Mitigation (BRAM) Program, Global Risk Investigation Program (GRIP), Security Rules and Procedures — Merchant Edition (SPME), and MATCH list. Together these are the principal risk-and-compliance frameworks Mastercard points to in its corporate disclosures as protecting its network.',
    keyFindings: [
      'BRAM — Business Risk Assessment and Mitigation',
      'GRIP — Global Risk Investigation Program',
      'SPME — Security Rules and Procedures, Merchant Edition',
      'MATCH — List of terminated merchants',
      '4,000 UAE merchants added to MATCH in March 2025 (after 22-month delay)'
    ],
    significance: 'The existence of these frameworks defeats any "we had no mechanism to identify bad merchants" defense. The merchants eventually added to MATCH in March 2025 show that identification was possible — they were just not identified for 22 months.',
    citations: [
      'Mastercard public documentation'
    ]
  },
  {
    id: 'doc-025',
    title: 'Mastercard Brighterion — KYC / AML / Sanctions Screening Product',
    shortTitle: 'Brighterion',
    category: 'regulatory',
    date: 'Brighterion acquired 2017; product page 2020-present',
    source: 'brighterion.com / Mastercard product materials',
    description: 'Mastercard subsidiary Brighterion\'s product page explicitly markets specialization in "Compliance (KYC, AML & Sanctions Screening)" — claims directly contradicted by the August 2023 Yana Banking audit finding that "No customer risk rating is performed," "ineffective suspicious activity monitoring and reporting," ineffective AML safeguards, and no evidence customers were being screened against U.S. sanctions lists.',
    keyFindings: [
      'Brighterion product page: "Compliance (KYC, AML & Sanctions Screening)"',
      'Acquired by Mastercard in 2017',
      'Part of the $10.7B in cybersecurity acquisitions Mastercard cites publicly',
      'Product capabilities directly contradicted by Yana audit',
      'Creates "we owned the tools and did not use them" narrative'
    ],
    significance: 'Mastercard-owned Brighterion markets the exact KYC/AML/sanctions-screening capabilities the Yana audit confirms were not deployed at a principal Mastercard Iraqi issuer. This is the sharpest single claim-vs-reality artifact in the entire Research 1 record.',
    citations: [
      'brighterion.com'
    ]
  },
  {
    id: 'doc-026',
    title: 'Mastercard Decision Intelligence Pro Press Release',
    shortTitle: 'Decision Intelligence Pro',
    category: 'regulatory',
    date: 'February 1, 2024',
    source: 'Mastercard press release',
    description: 'Mastercard press release (February 1, 2024 — issued in the middle of the militia-card scheme) announcing Decision Intelligence Pro. Contains the now-famous figure that generative AI enhancements boost fraud detection "on average by 20% and as high as 300% in some instances," while scanning "an unprecedented one trillion data points" in "less than 50 milliseconds" to score 143 billion annually-processed transactions. Ajay Bhalla quoted: "With generative AI we are transforming the speed and accuracy of our anti-fraud solutions."',
    keyFindings: [
      '"20% average, up to 300%" fraud detection uplift claim',
      '"One trillion data points in less than 50 milliseconds"',
      '143 billion transactions scored annually',
      'Issued February 1, 2024 — mid-scheme, pre-blocking',
      'Ajay Bhalla quoted'
    ],
    significance: 'Contemporaneous public claim of AI-powered fraud detection at unprecedented speed and accuracy, issued while the 2,900% Iraqi surge was undetected. The February 2024 date is inside the Gap Period, making this the purest admission-against-interest artifact Research 1 identifies.',
    citations: [
      'Mastercard Feb 1, 2024 press release'
    ]
  },
  {
    id: 'doc-027',
    title: 'Mastercard "$35B Fraud Prevented in 3 Years" Release',
    shortTitle: 'MA $35B Release',
    category: 'regulatory',
    date: 'July 2023',
    source: 'Mastercard press release',
    description: 'Mastercard press release issued in July 2023 — the same month the Federal Reserve Bank of New York began questioning Mastercard about the Iraqi surge — announcing that "Mastercard\'s AI-powered cybersecurity solutions have stopped over $35 billion in fraud losses in the last three years."',
    keyFindings: [
      'July 2023 — same month as NYFed questioning',
      '$35B fraud prevented (3-year cumulative claim)',
      '"AI-powered cybersecurity solutions"',
      'Issued as NYFed was asking Mastercard about Iraq',
      'Timing juxtaposition strengthens "should have caught it" narrative'
    ],
    significance: 'The coincidence of the July 2023 press release boasting of AI fraud prevention with the July 2023 NYFed inquiry about the Iraqi surge is self-authenticating evidence of the compliance gap.',
    citations: [
      'Mastercard July 2023 press release'
    ]
  },
  {
    id: 'doc-028',
    title: 'Mastercard "$70B Fraud Prevented / $10.7B Cybersecurity Acquisitions" Dubai Release',
    shortTitle: 'MA $70B Dubai Release',
    category: 'regulatory',
    date: 'February 2026',
    source: 'Mastercard press release',
    description: 'Mastercard press release marking a UAE Cyber Security Council MoU in February 2026. Claims "$70 billion in fraud prevented over ten years" and "$10.7 billion in cybersecurity acquisitions since 2018." Issued after the WSJ exposé, and in the UAE — the same jurisdiction where Mastercard delisted 4,000 merchants weeks earlier for their role in cashing out the Iraqi militia cards. Quotes describe Mastercard as "a trusted partner, technology provider and policy advisor to the UAE government."',
    keyFindings: [
      '$70B 10-year fraud prevention claim',
      '$10.7B cybersecurity acquisitions since 2018',
      'Issued in UAE — where 4,000 militia-cashout merchants were delisted',
      'Post-WSJ exposé',
      '"Trusted partner, technology provider and policy advisor to the UAE government"'
    ],
    significance: 'Post-exposé Mastercard continued aggressive AI/cybersecurity marketing in the exact jurisdiction where its network had been abused. The dissonance undermines any remediation-or-contrition narrative.',
    citations: [
      'Mastercard Feb 2026 Dubai press release'
    ]
  },
  {
    id: 'doc-029',
    title: 'Mastercard TRACE Launch',
    shortTitle: 'TRACE',
    category: 'regulatory',
    date: 'February 2025',
    source: 'Mastercard press release',
    description: 'February 2025 launch of TRACE, Mastercard\'s AI-powered AML service for Asia Pacific, marketed as capable of "tracing of financial crime across a payments network" at the "network level" — an architectural capability the Yana audit suggests was not applied to Iraq despite years of opportunity.',
    keyFindings: [
      'Launched February 2025 for Asia Pacific',
      '"Network-level" financial-crime tracing',
      'Architectural capability not previously applied to Iraq',
      'Announced weeks before March 2025 Iraqi card blocking',
      '"We could have done this all along" implication'
    ],
    significance: 'TRACE\'s existence as a "network-level" AML product demonstrates that Mastercard possessed the architectural capability to trace financial crime across its own payment network — the exact capability the Yana audit and 2,900% Iraqi surge exposed as missing. The capability gap is not a technology problem; it is an implementation choice.',
    citations: [
      'Mastercard February 2025 TRACE press release'
    ]
  },
  {
    id: 'doc-030',
    title: 'Visa Advanced Authorization Overview',
    shortTitle: 'VAA',
    category: 'regulatory',
    date: 'Cited 2020-present',
    source: 'visa.com / Visa Advanced Authorization release',
    description: 'Foundational Visa Advanced Authorization release, still cited on visa.com, claiming VAA "helped financial institutions prevent an estimated $25 billion in annual fraud" by using AI to analyze "100 percent of the transactions — each in about one millisecond," keeping Visa\'s global fraud rate "less than 0.1 percent."',
    keyFindings: [
      '$25B annual fraud prevention claim',
      '"100 percent of transactions" analyzed',
      '"About one millisecond" per transaction',
      'Global fraud rate "less than 0.1 percent"',
      'Directly contradicted by 2,900% Iraq surge going undetected'
    ],
    significance: 'Visa\'s own publicly cited marketing claim is that VAA analyzes "100 percent of transactions" in real-time. A 2,900% overnight surge is either the largest possible statistical anomaly (which VAA would obviously flag) or VAA was not meaningfully operating. Both are actionable.',
    citations: [
      'visa.com / Visa Advanced Authorization materials'
    ]
  },
  {
    id: 'doc-031',
    title: 'Visa Protect Launch',
    shortTitle: 'Visa Protect',
    category: 'regulatory',
    date: 'March 27, 2024',
    source: 'Visa press release',
    description: 'Visa Protect launch announcement: "Last year, Visa helped block $40 billion in fraudulent activity, nearly double from the year prior." Issued March 27, 2024 — in the middle of the Gap Period, while the Iraqi scheme continued at $400M-$1.1B/month.',
    keyFindings: [
      'Launched March 27, 2024',
      '$40B fraud blocked in 2023 claim',
      '"Nearly double from the year prior"',
      'Mid-Gap-Period announcement',
      'Contemporaneous with militia card scheme continuation'
    ],
    significance: 'Yet another Gap Period marketing claim that Visa\'s AI blocks tens of billions in fraud annually. The 2023 $40B claim would, by Visa\'s own math, include the Iraqi transactions — which Visa did not block until April 2025.',
    citations: [
      'Visa March 27, 2024 Protect press release'
    ]
  },
  {
    id: 'doc-032',
    title: 'VAAI Score Launch',
    shortTitle: 'VAAI Score',
    category: 'regulatory',
    date: 'May 7, 2024',
    source: 'Visa press release',
    description: 'May 7, 2024 announcement of VAAI Score, using 15 billion VisaNet transactions as training data, a 20-millisecond risk score, and an 85% reduction in false positives. Visa Chief Risk Officer Paul Fabara quoted: "issuers can make more informed decisions on when to block a transaction."',
    keyFindings: [
      'Announced May 7, 2024',
      '15B VisaNet transactions as training data',
      '20-millisecond risk score',
      '85% false-positive reduction',
      'Paul Fabara on-record quote'
    ],
    significance: 'Contemporaneous (mid-Gap-Period) marketing claim of sophisticated, fast, accurate AI risk scoring — capability that should have easily identified the anomaly in Iraqi cross-border volume.',
    citations: [
      'Visa May 7, 2024 VAAI Score press release'
    ]
  },
  {
    id: 'doc-033',
    title: 'Visa Acquisition of Featurespace ($1.4B)',
    shortTitle: 'Featurespace',
    category: 'regulatory',
    date: 'Closed December 19, 2024',
    source: 'Visa press release / Featurespace',
    description: 'Visa\'s $1.4 billion acquisition of Featurespace closed December 19, 2024, marketed explicitly as "real-time artificial intelligence (AI) payments protection technology that prevents and mitigates payments fraud and financial crime risks."',
    keyFindings: [
      'Closed December 19, 2024',
      '$1.4 billion purchase price',
      'Explicitly marketed for "financial crime risks"',
      'Closed during Gap Period (Iraq still active)',
      'Adds to Visa\'s fraud-tech portfolio claims'
    ],
    significance: '$1.4B spent on real-time payments-fraud AI while the Iraqi scheme was still running. The chronological sequence is: Visa acquires Featurespace December 2024 → Visa blocks 70,000 Iraqi cards April 2025. Five months between acquisition and action strengthens "tools we owned" argument.',
    citations: [
      'Visa December 19, 2024 Featurespace close release'
    ]
  },
  {
    id: 'doc-034',
    title: 'Visa James Mirfin CNBC Interview',
    shortTitle: 'Mirfin CNBC',
    category: 'media',
    date: 'July 26, 2024',
    source: 'CNBC',
    description: 'Visa\'s James Mirfin (Global Head of Risk & Identity Solutions) in a July 26, 2024 CNBC interview: "We do about 300 billion transactions a year. Every single one of those has been processed by AI. It\'s looking at a range of different attributes and we\'re evaluating every single transaction." Visa Perspectives blog put the dollar figure at "$14 billion in presumed fraud prevented in the U.S. alone just last year."',
    keyFindings: [
      'July 26, 2024 CNBC interview',
      '"300 billion transactions a year"',
      '"Every single one processed by AI"',
      '"Evaluating every single transaction"',
      '$14B U.S. fraud prevented (Visa Perspectives blog)'
    ],
    significance: 'On-camera, attributable statement by a Visa executive that "every single transaction" is AI-evaluated. If true, the Iraqi 2,900% surge was evaluated and ignored. If false, the statement itself is actionable.',
    citations: [
      'CNBC interview July 26, 2024'
    ]
  },
  {
    id: 'doc-035',
    title: 'Visa Emirates NBD Case Study ($105M Fraud Prevention)',
    shortTitle: 'Emirates NBD',
    category: 'regulatory',
    date: 'Publication date varies; cited through 2025',
    source: 'visa.com Middle East case studies',
    description: 'Visa case study celebrating Emirates NBD\'s "$105 million in fraud loss prevention" — in the UAE, the same region where militia-linked Iraqi cards were being cashed out through 4,000+ UAE merchants Mastercard later delisted and 5,000+ UAE vendors Visa blocked.',
    keyFindings: [
      'Emirates NBD UAE case study',
      '$105M fraud prevention claim',
      'UAE = the region where militia cards were cashed out',
      '4,000 UAE merchants later removed by Mastercard',
      '5,000 UAE vendors later blocked by Visa'
    ],
    significance: 'Visa\'s own Middle East success story celebrates UAE fraud prevention — while the UAE was simultaneously the primary cash-out venue for the Iraqi militia card scheme. The geographic overlap undermines any "foreign jurisdiction detection is hard" defense.',
    citations: [
      'visa.com Middle East case studies'
    ]
  },

  // Earnings-call contrast (Research 1)
  {
    id: 'doc-036',
    title: 'Western Union Q2 2023 Earnings Call (The Contrast Witness)',
    shortTitle: 'WU Q2 2023 Call',
    category: 'financial',
    date: 'July 26, 2023',
    source: 'Western Union Q2 2023 earnings call transcript',
    description: 'CEO Devin McGranahan and CFO Matt Cagwin devoted substantial prepared remarks and three Q&A exchanges to Iraq, naming the country explicitly in at least ten separate passages. Cagwin disclosed Iraq as a "10% benefit to adjusted revenue," raised full-year guidance because of Iraq, forecast "significantly lower going forward" volumes due to "recent U.S. government actions, which shut down a number of our agents in Iraq," and disclosed a 70% run-rate reduction in early July. When Goldman\'s Will Nance asked about policymaker engagement, Cagwin said "some of where the incremental revenue and profit we got from Iraq goes back into the compliance space over the last few months." McGranahan: "We have very strong risk and compliance. And so as the situation evolves, I know that we are at the ready and prepared to evolve with it." Western Union continued to name Iraq on every subsequent earnings call into 2025.',
    keyFindings: [
      'Iraq named 10+ times in prepared remarks + Q&A',
      'Iraq = 10% benefit to Q2 adjusted revenue',
      '70% run-rate reduction disclosed',
      '"Recent U.S. government actions, which shut down a number of our agents in Iraq"',
      'Analyst Will Nance (Goldman) probed the issue',
      'Cagwin: redirecting Iraq profit "back into the compliance space"'
    ],
    significance: 'The contrast witness. Western Union\'s explicit, named, detailed, analyst-responsive Iraq disclosure on July 26, 2023 establishes that the Iraq risk was disclosure-worthy under SEC standards. Visa and Mastercard\'s silence across 22 months of the same underlying regulatory environment becomes affirmative — not passive — omission. This is the single most important comparator for any Section 10(b)/Rule 10b-5 securities-disclosure theory.',
    citations: [
      'Western Union Q2 2023 earnings call transcript'
    ]
  },
  {
    id: 'doc-037',
    title: 'Mastercard Q1 2025 Earnings Call (Mehra Euphemism)',
    shortTitle: 'MA Q1 2025 Call',
    category: 'financial',
    date: 'May 1, 2025',
    source: 'Mastercard Q1 2025 earnings call transcript',
    description: 'Q1 2025 earnings call, six weeks after Mastercard blocked over 100,000 Iraqi-issued cards. CFO Sachin Mehra told analysts: "Cross-border travel growth broadly remained strong, but we are seeing some moderation in select markets in the Middle East and Africa as they come off recent periods of extremely high growth." This is Mastercard\'s first and closest public acknowledgment of the Iraqi blocking on any investor call.',
    keyFindings: [
      'May 1, 2025 (six weeks post-blocking)',
      'Mehra on cross-border travel growth',
      '"Moderation in select markets in the Middle East and Africa"',
      'Iraq never named',
      'Characterized as benign "tougher comps"'
    ],
    significance: 'Mastercard\'s closest public acknowledgment on an investor call — and the acknowledgment is a euphemism that frames the blocking as normalized demand coming off a peak, not as a compliance crisis. The stark contrast with WU Q2 2023 forthright disclosure is the SEC-disclosure-adequacy heart of Research 1.',
    citations: [
      'Mastercard Q1 2025 earnings call transcript'
    ]
  },
  {
    id: 'doc-038',
    title: 'Mastercard Q2 2025 Earnings Call ("Enforcement of Mastercard Rules")',
    shortTitle: 'MA Q2 2025 Call',
    category: 'financial',
    date: 'July 31, 2025',
    source: 'Mastercard Q2 2025 earnings call transcript',
    description: 'Q2 2025 earnings call. CFO Sachin Mehra, slightly more explicit than Q1: "We saw some moderation in select Middle East and Africa markets, primarily due to tougher comps, enforcement of Mastercard rules and a ratcheting up of geopolitical conflict late in the quarter." "Enforcement of Mastercard rules" is the closest Mastercard comes to naming the Iraq card-blocking action on any earnings call — and Iraq is still not named.',
    keyFindings: [
      'July 31, 2025',
      'Mehra: "enforcement of Mastercard rules"',
      '"Ratcheting up of geopolitical conflict late in the quarter"',
      'Iraq still never named',
      'Ashcan euphemism — the core of the Research 1 contrast'
    ],
    significance: 'The second euphemism. "Enforcement of Mastercard rules" is defensively vague — it deflects investor attention from the regulatory-driven blocking to a natural MA-internal rules application. A Rule 10b-5 claim would argue the euphemism makes the disclosure misleading.',
    citations: [
      'Mastercard Q2 2025 earnings call transcript'
    ]
  },
  {
    id: 'doc-039',
    title: 'Visa Q4 FY2022 Earnings Call (Al Kelly / Visa Iraq Islamic Bank)',
    shortTitle: 'Visa Q4 FY2022 Call',
    category: 'financial',
    date: 'October 25, 2022',
    source: 'Visa Q4 FY2022 earnings call transcript',
    description: 'Pre-surge earnings call. Then-CEO Al Kelly touted "the first digital bank in Iraq, Visa Iraq Islamic Bank, seeking to digitize payments and drive a cashless society through Visa credit, debit, and prepaid card issuance across their 400,000 customers." The last time a Visa CEO named Iraq positively — before the surge, before the Treasury warnings, before any public discussion of the scheme.',
    keyFindings: [
      'October 25, 2022 call',
      'CEO Al Kelly touted "Visa Iraq Islamic Bank"',
      '400,000 customers across credit, debit, prepaid',
      'Pre-surge enthusiasm for Iraqi growth',
      'Visa never named Iraq positively or negatively on any call thereafter'
    ],
    significance: 'Visa had a commercial narrative of Iraqi growth at exactly the moment the scheme was about to explode. Post-surge silence is thus not accidental — it followed a pattern of prior naming that abruptly ended.',
    citations: [
      'Visa Q4 FY2022 earnings call transcript'
    ]
  },

  // SEC risk-factor evolution (Research 1)
  {
    id: 'doc-040',
    title: 'Mastercard FY2025 10-K Novel Iran Sentence',
    shortTitle: 'MA FY2025 Iran Sentence',
    category: 'litigation',
    date: 'Filed February 11, 2026',
    source: 'SEC EDGAR / Mastercard FY2025 Form 10-K',
    description: 'Mastercard\'s FY2025 Form 10-K (filed February 11, 2026, nine months after the WSJ exposé) added one novel sentence whose timing is conspicuous: "We do not maintain operations, assets or licensed customers in Iran. While we currently have no operations in Syria, we are evaluating market entry in strict accordance with applicable laws and restrictions." This is the only material textual change to the compliance disclosure in six fiscal years other than sanctioned-country list edits. The filing still does not mention Iraq, does not disclose the Yana Banking compliance failure, and does not discuss the blocking of 100,000 Iraqi-issued cards in March 2025.',
    keyFindings: [
      'Filed Feb 11, 2026 (9 months post-WSJ)',
      'Novel sentence: "We do not maintain operations, assets or licensed customers in Iran"',
      'Iraq still not mentioned',
      'Yana audit still not disclosed',
      '100,000+ card blocking still not disclosed in risk factors',
      'Conspicuously new sentence in otherwise boilerplate text'
    ],
    significance: 'The novel Iran sentence is a post-exposure disclosure hedge that inadvertently concedes the risk category (Iran-linked operations) while refusing to name the specific fact pattern (Iraqi partners processing Iran-linked flows). Under SEC disclosure doctrine, new risk-factor language about a specific country after a press exposure is strong evidence of materiality. The continued omission of Iraq facts amounts to a material omission under Rule 10b-5.',
    citations: [
      'SEC EDGAR Mastercard 2025 Form 10-K'
    ],
    documentUrl: 'https://s25.q4cdn.com/479285134/files/doc_financials/2025/q4/MA-12-31-2025-10-K-as-filed-with-standard-exhibits.pdf'
  },
  {
    id: 'doc-041',
    title: 'Mastercard Section 13(r) Exhibit 99.1 Narrowing Chronology (2020-2025)',
    shortTitle: 'MA 13(r) Narrowing',
    category: 'litigation',
    date: '2020-2025 (chronological)',
    source: 'SEC EDGAR / Mastercard 10-K/10-Q exhibits',
    description: 'Mastercard\'s Section 13(r) Iran disclosures, filed as Exhibit 99.1 to each 10-K and 10-Q, followed a pattern of progressive contraction rather than expansion. Through 2022, the exhibit named "an Iranian airline" (Iran Air), embassy consular services in multiple regions, and "an Iranian merchant at an international exhibition who may have been acting on behalf of the Iranian government." By the FY2025 exhibit, the disclosure shrank to a single line: acquirers in Europe and EEMEA regions "acquired transactions over our network for consular services with an Iranian embassy... Both the number of transactions and our estimated net revenue and net profits for this period are de minimis." **At no point did the 13(r) exhibits disclose transactions with Iraqi card issuers that Treasury would later identify as conduits to Iran-backed militias.**',
    keyFindings: [
      'Progressive contraction 2020-2025',
      '2022: detailed disclosures (Iran Air, embassies, exhibition merchant)',
      '2025: single "de minimis" line',
      'NEVER disclosed Iraqi issuer transactions linked to Iran-backed militias',
      'Al Saqi, Yana, ISC never named in 13(r)'
    ],
    significance: 'The narrowing pattern itself is evidence of disclosure policy. A shrinking Iran-related disclosure footnote between 2020 and 2025 — during the exact period Treasury was privately alerting Mastercard to Iranian-militia exposure through Iraqi issuers — is exactly the kind of misalignment that supports a Rule 10b-5 material-omission claim.',
    citations: [
      'SEC EDGAR Mastercard 10-K Exhibit 99.1 filings 2020-2025'
    ]
  },
  {
    id: 'doc-042',
    title: 'Visa 10-K Risk-Factor Textual Stasis (2020-2025)',
    shortTitle: 'Visa 10-K Stasis',
    category: 'litigation',
    date: 'FY2020 - FY2025',
    source: 'SEC EDGAR / Visa 10-K filings',
    description: 'Visa\'s Item 1 "Government Regulation" paragraph is identical verbatim across six fiscal years save for the sanctioned-country roster (addition of Donetsk/Luhansk in 2023, removal of Syria in 2025, and a 2025 phrase shift from "continually enhance" to "continually adjust"). Iraq, Iraqi banks, and Middle-East-specific militia-financing risk are entirely absent from the risk-factor language across the entire period. Iraq is not on OFAC\'s comprehensive-sanctions list, so Visa\'s boilerplate never mentions it — yet Iraqi issuers operated under Visa licenses throughout the surge.',
    keyFindings: [
      'Identical boilerplate 2020-2025',
      'Only changes: sanctioned-country list edits',
      '2025 phrase shift "continually enhance" → "continually adjust"',
      'Iraq NEVER mentioned in any risk factor 2020-2025',
      'Iraqi issuers under Visa licenses during surge'
    ],
    significance: 'Visa\'s 10-K risk-factor language does not even register Iraq as a distinguishable market — while Visa Direct, 17 licensed Iraqi issuers, and $1.2B in 10-week Visa Direct flows were all happening in that market. The disclosure stasis is itself a potentially material omission.',
    citations: [
      'SEC EDGAR Visa FY2020-FY2025 10-K filings'
    ]
  },

  // Public-record statements (Research 1)
  {
    id: 'doc-043',
    title: 'WSJ Eisen / Cook On-Record Quotes (Primary Extract)',
    shortTitle: 'Eisen/Cook WSJ Quotes',
    category: 'media',
    date: 'May 31, 2025',
    source: 'Wall Street Journal (David S. Cloud)',
    description: 'The entire on-the-record corporate response from Visa and Mastercard to the Iraqi militia exposé consists of three short statements, all captured in David S. Cloud\'s May 31, 2025 WSJ investigation "Needing Dollars, Iran-Backed Militias Turn to Visa and Mastercard." No follow-up statements by Mastercard SVP Seth Eisen or Visa\'s Fletcher Cook have appeared in any major outlet through April 2026.',
    keyFindings: [
      'Seth Eisen on 22-month delay: "Ongoing government engagement is built into our programs so that we can quickly look into claims, identify the situation and take action as appropriate. That\'s exactly what we have done with the U.S. government on this matter from a very early stage."',
      'Seth Eisen on Yana 2023 compliance failures: "The goal is to ensure they avoid further violations of Mastercard standards or regulatory requirements. We reserve the right to revisit any allegation to ensure this compliance."',
      'Seth Eisen on March 2025 enforcement: "Information about Qi Card and International Smart Card that Mastercard received from government agencies was compiled with existing information and actioned accordingly."',
      'Fletcher Cook (Visa): "Central to our operations is a commitment to ensuring that transactions on our network do not violate the law... When we identify or are alerted to any suspicious or illegal activity, we take action."',
      'Visa and First Iraqi Bank did NOT respond on Visa Direct questions',
      'Michael Miebach and Ryan McInerney have never publicly commented'
    ],
    significance: 'The entire public corporate record. These four statements — and nothing more — are the official Visa/Mastercard posture on the most consequential compliance episode of the decade. Their narrowness is itself significant; "action as appropriate," "we reserve the right to revisit," and "actioned accordingly" are pre-lawyered deflections that will be parsed in any deposition.',
    citations: [
      'Wall Street Journal, David S. Cloud, May 31, 2025'
    ]
  },

  // OFAC / Treasury escalation (Research 2)
  {
    id: 'doc-044',
    title: 'OFAC sb0188 — Salim Ahmed Said Oil-Smuggling Network',
    shortTitle: 'OFAC sb0188',
    category: 'regulatory',
    date: 'July 3, 2025',
    source: 'U.S. Department of the Treasury',
    description: 'OFAC designation (press release sb0188) of Salim Ahmed Said, an Iraqi-British national whose network has sold Iranian oil as Iraqi oil since at least 2020, bribing Iraqi parliamentarians for forged origin vouchers. Associated entities: AISSOT and VS Tankers.',
    keyFindings: [
      'Designated July 3, 2025',
      'Iraqi-British dual national',
      'Sold Iranian oil as Iraqi since at least 2020',
      'Bribed Iraqi parliamentarians for forged vouchers',
      'AISSOT and VS Tankers affiliated'
    ],
    significance: 'Part of the 2025-2026 sanctions drumbeat targeting Iran\'s revenue generation in Iraq. Complementary to the banking/card-scheme track.',
    citations: [
      'Treasury press release sb0188'
    ]
  },
  {
    id: 'doc-045',
    title: 'OFAC sb0233 — Waleed al-Samarra\'i Shipping Network',
    shortTitle: 'OFAC sb0233',
    category: 'regulatory',
    date: 'September 2, 2025',
    source: 'U.S. Department of the Treasury',
    description: 'OFAC designation (press release sb0233) of Waleed Khaled Hameed al-Samarra\'i, UAE-based Iraqi-Kittitian businessman whose scheme generates an estimated $300 million annually. Fleet: nine Liberia-flagged tankers conducting ship-to-ship transfers using AIS spoofing. Five Marshall Islands shell companies. UAE fronts: Babylon Navigation DMCC, Galaxy Oil FZ-LLC.',
    keyFindings: [
      'Designated September 2, 2025',
      '~$300M/year scheme',
      '9 Liberia-flagged tankers (ADENA, LILIANA, CAMILLA, DELFINA, BIANCA, ROBERTA, ALEXANDRA, BELLAGIO, PAOLA)',
      '5 Marshall Islands shells',
      'Babylon Navigation DMCC + Galaxy Oil FZ-LLC in UAE'
    ],
    significance: 'Apex-level oil-smuggling designation in the 2025 sequence; demonstrates the scale and corporate sophistication of Iraq-hosted Iranian-proxy revenue networks.',
    citations: [
      'Treasury press release sb0233'
    ]
  },
  {
    id: 'doc-046',
    title: 'OFAC "Economic Fury Targets Iran-Backed Iraqi Militia Commanders" (sb0458)',
    shortTitle: 'OFAC sb0458 "Economic Fury"',
    category: 'regulatory',
    date: 'April 17, 2026',
    source: 'U.S. Department of the Treasury (press release sb0458)',
    description: 'Treasury/OFAC press release "Economic Fury Targets Iran-Backed Iraqi Militia Commanders" designating seven operational commanders of Iraq\'s four most lethal Iran-aligned militias (KH, AAH, KSS, HAN) pursuant to E.O. 13224. Each designee is identified by full passport number, DOB, gender, and any known aliases on the OFAC SDN List. Secretary Scott Bessent on record: "We will not allow Iraq\'s terrorist militias, backed by Iran, to threaten American lives or interests. Those who enable these militias\' violence will be held accountable." Follows 7 days after Kittleson\'s release, 3 days after the April 14 $10M State Dept bounty on KH Secretary-General al-Hamidawi, and comes in the same press-release cluster as Sudan Designations (sb0457).',
    keyFindings: [
      'Ammar Jasim Kadhim Al Rammahi (KH operational commander) — DOB 16 Aug 1976, Passport B29874786',
      'Radhwan Yousif Hameed Almohammed (senior KH official) — DOB 23 Nov 1970, aliases: Hajji Abdallah; Abu Abdallah Al-Tawil; Abu Ghadir; Abu Tahir; Passport A18208609',
      'Hasan Dheyab Hamzah Hamzah (senior KH official) — DOB 25 Feb 1977, Passport B10398022',
      'Safaa Adnan Jabbar Suwaed (AAH Salah ad-Din chief of operations) — DOB 01 May 1972, Passport A18386175',
      'Khalid Jameel Abed Albakhatra (KSS commander, a.k.a. Khaled Bakhatri) — DOB 01 Jan 1978, Passport A13438387',
      'Saeed Kadhim Mukhamis (senior KSS, a.k.a. Sameer Kadem Mghames; Said Kazim Mughamis) — DOB 01 May 1972',
      'Husham Hashim Jaythoom (HAN military trainer) — DOB 25 Aug 1969, Passport A21616600',
      'All [SDGT]; secondary sanctions risk under section 1(b) of E.O. 13224 as amended by E.O. 13886',
      'As of March 2026, AAH used Iranian drones to attack U.S./Coalition forces in northern Iraq (per Treasury)',
      'AAH has claimed responsibility for thousands of attacks against U.S. and Coalition Forces'
    ],
    significance: 'Contemporary Treasury designation with full biographical and passport detail on seven active Iran-aligned militia commanders. Establishes individual-level accountability layer on top of institutional-level (Muhandis General Company) and state-level (Ansar Awfiya FTO) designations. Represents a reversal of the 2024 "attack moratorium" posture — Treasury publicly cites continued AAH drone attacks on U.S. forces "as of March 2026". The Economic Fury sanctions are distinct from and named differently than the Feb 28, 2026 "Operation Epic Fury" U.S.-Israeli military operation, though they share the same strategic theater.',
    citations: [
      'Treasury press release: home.treasury.gov/news/press-releases/sb0458',
      'OFAC Recent Actions: ofac.treasury.gov/recent-actions/20260417'
    ],
    documentUrl: 'https://home.treasury.gov/news/press-releases/sb0458'
  },
  {
    id: 'doc-047',
    title: 'FinCEN jy2053 — Al-Huda Bank Primary Money-Laundering Concern',
    shortTitle: 'FinCEN Al-Huda',
    category: 'regulatory',
    date: 'January 29, 2024',
    source: 'U.S. FinCEN',
    description: 'FinCEN finding designating Al-Huda Bank, an Iraqi private bank, as a primary money-laundering concern for acting as a conduit for the IRGC-Quds Force, Kata\'ib Hezbollah, and Asa\'ib Ahl al-Haq. Prohibits U.S. financial institutions from opening or maintaining correspondent accounts for Al-Huda.',
    keyFindings: [
      'FinCEN Section 311 finding',
      'January 29, 2024',
      'IRGC-QF, KH, AAH named as beneficiaries',
      'U.S. correspondent account prohibition',
      'Peer-level regulatory evidence of Iraqi banking-system risk during Gap Period'
    ],
    significance: 'Independent FinCEN finding during the Gap Period that the Iraqi banking system was conducting militia-linked financing — directly reinforces the factual predicate for any ATA/OFAC action against Visa/MA whose Iraqi partners operated in that system.',
    citations: [
      'FinCEN press release jy2053'
    ],
    documentUrl: 'https://home.treasury.gov/news/press-releases/jy2053'
  },
  {
    id: 'doc-048',
    title: 'MENAFATF Iraq AML/CFT Mutual Evaluation',
    shortTitle: 'MENAFATF Iraq',
    category: 'regulatory',
    date: 'August 2023',
    source: 'MENAFATF (Middle East and North Africa Financial Action Task Force)',
    description: 'August 2023 FATF-style mutual evaluation of Iraq\'s AML/CFT regime by MENAFATF. Independent international assessment of Iraqi financial-system vulnerabilities contemporaneous with the Gap Period surge.',
    keyFindings: [
      'MENAFATF mutual evaluation',
      'August 2023 publication',
      'Independent FATF-style assessment',
      'Contemporaneous with transaction surge',
      'Documents Iraqi AML/CFT regime deficiencies'
    ],
    significance: 'International-level contemporaneous evidence that Iraq\'s AML/CFT regime was deficient during the Gap Period — compounds the case that Visa/MA\'s reliance on Iraqi partner compliance was objectively unreasonable.',
    citations: [
      'MENAFATF publication August 2023'
    ]
  },

  // Congressional supplementary (Research 5)
  {
    id: 'doc-049',
    title: 'H.R. 2658 "Free Iraq from Iran Act"',
    shortTitle: 'H.R. 2658',
    category: 'congressional',
    date: 'Introduced April 3, 2025',
    source: 'congress.gov / U.S. House of Representatives',
    description: 'Bill introduced by Rep. Joe Wilson, cosponsored by Rep. Jimmy Panetta (D-CA), with Rep. Abraham Hamadeh (R-AZ) added April 10. Mandates FTO designation within 90 days of ten named militias (Abu Fadl al-Abbas Brigades, Badr Corps, HAN, PMF, KIA, Kata\'ib Jund al-Imam, KSS, Sarraya al-Jihad, Sarraya al-Khorasani, IRI) plus any IRGC-owned entity. Sec. 7 mandates 180-day Treasury report naming Al-Rafidain, SOMO, Nouri al-Maliki, Hadi al-Ameri, Qais al-Araji, Abdul Rashid Yar Allah, Jassem Abboud. **Does NOT name Visa, Mastercard, Qi Card, or CBI.** Moribund as of April 2026. Provisions folded into FY2026 NDAA (House passage 312-112 on Dec 10, 2025).',
    keyFindings: [
      'Introduced April 3, 2025',
      'Wilson + Panetta + Hamadeh',
      'Mandates FTO designation of 10 militias',
      'Sec. 7: Treasury report on Iraqi financial facilitators',
      'Does NOT name Visa/MA/Qi Card/CBI',
      'Moribund — no markup, no hearing, no floor vote',
      'Provisions folded into FY2026 NDAA'
    ],
    significance: 'The bill most closely associated with the Iraq-Iran proxy issue — but its silence on payment networks is itself evidence that congressional oversight of the card-scheme dimension was underdeveloped at the time of introduction. The later folding into NDAA shows the substantive policy carried forward even as the dedicated bill stalled.',
    citations: [
      'congress.gov/bill/119th-congress/house-bill/2658/text',
      'joewilson.house.gov press release'
    ],
    documentUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/2658/text'
  },
  {
    id: 'doc-050',
    title: 'Wilson June 3, 2025 X Post on Visa/Mastercard',
    shortTitle: 'Wilson X Post',
    category: 'media',
    date: 'June 3, 2025',
    source: 'Rep. Joe Wilson (R-SC) X account',
    description: 'Post by Rep. Joe Wilson on X: "My letter last week to @SecRubio specifically cited Iraq\'s Qi card system laundering dollars for terrorists. Visa and Mastercard are funding Iran-backed Iraqi terrorists." The most pointed public statement by any Member of Congress tying U.S. card networks to Iranian proxy financing.',
    keyFindings: [
      'Posted June 3, 2025',
      '"Visa and Mastercard are funding Iran-backed Iraqi terrorists"',
      'Cites own May 28 letter to Sec. Rubio',
      'Most pointed public Member statement on the networks'
    ],
    significance: 'Contemporary Member of Congress explicitly attributing terror funding to Visa and Mastercard — a statement that, while not dispositive, adds political-record weight to the public-pressure leverage theory.',
    citations: [
      'x.com/RepJoeWilson/status/1929898265945808974'
    ]
  },
  {
    id: 'doc-051',
    title: 'GAO-13-326 (2013) — Elaf Islamic Bank Iraq Analog',
    shortTitle: 'GAO-13-326',
    category: 'regulatory',
    date: '2013',
    source: 'U.S. Government Accountability Office',
    description: 'GAO report "Iran: U.S. and International Sanctions Have Adversely Affected the Iranian Economy," which discusses FinCEN\'s 2012 action against Elaf Islamic Bank (Iraq) for facilitating transactions for designated Iranian banks — an early analogue to today\'s concerns but more than a decade old.',
    keyFindings: [
      'GAO report 2013',
      'Documents 2012 FinCEN action against Elaf Islamic Bank (Iraq)',
      'Elaf facilitated transactions for designated Iranian banks',
      'Early structural analog to Qi Card / Yana / ISC scheme',
      'Shows 10+ year pattern of Iraqi banking vulnerability'
    ],
    significance: 'Historical baseline showing that Iraqi banking-system exploitation for Iranian sanctions evasion was a well-documented pattern by 2013 — undermining any "we couldn\'t have foreseen this" defense in a 2024-2025 context.',
    citations: [
      'gao.gov/products/gao-13-326'
    ]
  },
  {
    id: 'doc-052',
    title: 'CRS IF10404 — Iraq (Blanchard, Sep 29, 2025)',
    shortTitle: 'CRS IF10404',
    category: 'congressional',
    date: 'Updated September 29, 2025',
    source: 'Congressional Research Service (Christopher M. Blanchard)',
    description: 'CRS background product on Iraq, updated through September 29, 2025 by Christopher M. Blanchard. Briefly flags H.R. 2574 (Iraqi gas imports from Iran) and H.R. 2658 (militia designations, conditioned aid) but does not analyze the card scheme itself.',
    keyFindings: [
      'CRS IF10404 (Blanchard) Sep 29, 2025 update',
      'Flags H.R. 2574 and H.R. 2658',
      'Does NOT analyze the card scheme',
      'Official congressional-research silence on a $1.5B/mo scheme'
    ],
    significance: 'The most authoritative congressional-research product on Iraq does not analyze the scheme — demonstrating the lack of formal congressional fact-finding on the card dimension and creating an opening for the lawfirm or an allied Member to commission a dedicated GAO/CRS study.',
    citations: [
      'congress.gov/crs_external_products/IF/PDF/IF10404/IF10404.51.pdf'
    ]
  },

  // Attack chronicle (Research 4) - primary records
  {
    id: 'doc-053',
    title: 'CENTCOM February 2, 2024 Retaliation Press Release',
    shortTitle: 'CENTCOM Feb 2, 2024',
    category: 'media',
    date: 'February 2, 2024',
    source: 'U.S. Central Command',
    description: 'CENTCOM press release announcing U.S. airstrikes on more than 85 targets at 7 facilities (3 in Iraq, 4 in Syria) using more than 125 precision-guided munitions against IRGC-QF and affiliated militia groups, in retaliation for the January 28, 2024 Tower 22 attack. B-1B Lancer long-range bombers flown from Dyess AFB, Texas.',
    keyFindings: [
      'Press release February 2, 2024',
      '85 targets at 7 facilities',
      '125+ precision munitions',
      'B-1B Lancers from Dyess AFB',
      'KH, Harakat al-Nujaba, IRGC-QF targeted',
      'Attribution context for Tower 22'
    ],
    significance: 'Official U.S. government attribution of Tower 22 to KH and affiliated groups, backed by kinetic response. This is the most authoritative U.S. attribution record available.',
    citations: [
      'CENTCOM press release Feb 2, 2024'
    ]
  },
  {
    id: 'doc-054',
    title: 'CENTCOM February 7, 2024 — Abu Baqir al-Saadi Strike Release',
    shortTitle: 'CENTCOM Feb 7, 2024',
    category: 'media',
    date: 'February 7, 2024',
    source: 'U.S. Central Command',
    description: 'CENTCOM press release: "At 9:30 p.m. (Baghdad Time) February 7, U.S. Central Command (CENTCOM) forces conducted a unilateral strike in Iraq in response to the attacks on U.S. service members, killing a Kata\'ib Hezbollah commander responsible for directly planning and participating in attacks on U.S. forces in the region." Hellfire from U.S. drone struck an SUV in Mashtal, eastern Baghdad, killing Wissam "Abu Baqir" al-Saadi and Arkan al-Alaywi.',
    keyFindings: [
      'Feb 7, 2024 press release',
      'Hellfire strike in Mashtal, Baghdad',
      'Killed Wissam "Abu Baqir" al-Saadi (KH drone-ops chief)',
      'Killed Arkan al-Alaywi (second KH commander)',
      'Iraqi government not notified; condemned strike'
    ],
    significance: 'U.S. government formally identifying al-Saadi as responsible for planning and participating in attacks on U.S. forces — a direct attribution that feeds into any § 2333(a) or § 1605A action.',
    citations: [
      'CENTCOM press release Feb 7, 2024'
    ]
  },
  {
    id: 'doc-055',
    title: 'DOJ December 2024 Tower 22 Indictment — Sadeghi / Abedininajafabadi',
    shortTitle: 'DOJ Tower 22 Indictment',
    category: 'litigation',
    date: 'December 2024',
    source: 'U.S. Department of Justice',
    description: 'DOJ indictment charging Mahdi Mohammad Sadeghi (arrested in Natick, Massachusetts; Analog Devices engineer) and Mohammad Abedininajafabadi (arrested in Italy) with conspiring to export Iranian navigation components used in the January 28, 2024 Tower 22 drone attack.',
    keyFindings: [
      'DOJ indictment December 2024',
      'Sadeghi arrested in Natick, MA',
      'Sadeghi employed at Analog Devices',
      'Abedininajafabadi arrested in Italy',
      'Charges: conspiracy to export Iranian drone nav components',
      'Direct link between Iranian state and Tower 22 drone'
    ],
    significance: 'The most authoritative factual record tying Tower 22 to Iranian-state drone technology exports. Critical for any Tower-22-predicated § 2333(a) complaint.',
    citations: [
      'DOJ indictment / Boston Globe Jan 14, 2025'
    ]
  },
  {
    id: 'doc-056',
    title: 'Washington Post Tower 22 Air-Defense Investigation',
    shortTitle: 'WaPo Tower 22',
    category: 'media',
    date: 'April 6, 2025',
    source: 'Washington Post',
    description: 'Washington Post investigation (April 6, 2025) into "glaring failures" in Tower 22 base air defense. Identifies that the hostile drone arrived approximately the same time a U.S. surveillance drone was returning to base, creating friend-or-foe confusion that delayed the air-defense response. Establishes that it was Tower 22\'s third drone attack in roughly six months.',
    keyFindings: [
      'Published April 6, 2025',
      '"Glaring failures" in base air defense',
      'Friend-or-foe confusion with returning U.S. surveillance drone',
      'Tower 22\'s third drone attack in six months',
      'Contextualizes Tower 22 as the culmination of a warning-ignored pattern'
    ],
    significance: 'Establishes that Tower 22 was not an isolated attack but the culmination of an observed, escalating threat — strengthening foreseeability arguments in any subsequent litigation.',
    citations: [
      'Washington Post, April 6, 2025'
    ]
  },
  {
    id: 'doc-057',
    title: 'State Dept June 17, 2024 Terrorist Designation of Ansar Allah al-Awfiya',
    shortTitle: 'State Dept June 2024 Ansar Awfiya',
    category: 'regulatory',
    date: 'June 17, 2024',
    source: 'U.S. Department of State',
    description: 'State Department designation of Harakat Ansar Allah al-Awfiya (19th PMF Brigade) as a terrorist organization, explicitly citing its role in the January 28, 2024 Tower 22 drone strike that killed three U.S. service members. This was the operational-attribution designation that later anchored the September 17, 2025 FTO upgrade.',
    keyFindings: [
      'Designated June 17, 2024',
      'Cited Tower 22 role expressly',
      'Designated 19th PMF Brigade',
      'Preceded Sept 17, 2025 FTO upgrade',
      'Central attribution predicate'
    ],
    significance: 'Explicit U.S. government designation tying Ansar Allah al-Awfiya to Tower 22 — the foundational attribution document for any § 2333(a) action predicated on Tower 22.',
    citations: [
      'U.S. Department of State designation'
    ]
  },

  // Precedent primary records (Research 3)
  {
    id: 'doc-058',
    title: 'Linde v. Arab Bank Second Circuit Opinion (882 F.3d 314)',
    shortTitle: 'Linde 2d Cir.',
    category: 'litigation',
    date: 'February 9, 2018',
    source: 'U.S. Court of Appeals for the Second Circuit',
    description: 'Judge Reena Raggi\'s opinion vacating the September 22, 2014 Brooklyn jury verdict against Arab Bank on the ground that the trial court\'s instruction erroneously equated a § 2339B material-support violation with the full § 2331(1) definition of "international terrorism." The foundational adverse precedent for primary-liability ATA theories against banks — and still the most important single opinion governing our case\'s primary-liability pathway.',
    keyFindings: [
      'Decided February 9, 2018',
      'Judge Raggi',
      'Vacated only ATA bank jury verdict in history',
      '§ 2331(1) bar established for primary liability',
      'Underlies Strauss, Weiss V, and Ashley',
      'Settlement terms confidential'
    ],
    significance: 'Our primary-liability theory must plead around the Linde bar. Understanding the exact reasoning is prerequisite to complaint drafting.',
    citations: [
      '882 F.3d 314 (2d Cir. 2018)'
    ]
  },
  {
    id: 'doc-059',
    title: 'Ashley v. Deutsche Bank Second Circuit Opinion',
    shortTitle: 'Ashley 2d Cir.',
    category: 'litigation',
    date: 'July 21, 2025',
    source: 'U.S. Court of Appeals for the Second Circuit',
    description: 'Second Circuit opinion affirming dismissal of JASTA aiding-and-abetting claims against Deutsche Bank, Standard Chartered Bank, and Danske Bank brought by U.S. service members injured in Afghanistan by IEDs made from fertilizer supplied by Pakistani companies banked by the defendants. Applying Taamneh, held flatly that "indifference is not enough." The controlling post-Taamneh template.',
    keyFindings: [
      'Decided July 21, 2025',
      'Second Circuit panel',
      'Facts: Afghanistan IED precursors from Pakistani companies',
      '"Indifference is not enough"',
      'Rejects "fungibility" theory',
      'Now controls every pending bank case in 2d Cir. post-Taamneh'
    ],
    significance: 'The defense will lead with this in any MTD against our case. Our complaint must explicitly distinguish Ashley on every major fact point (see prec-ashley distinguishingFactors).',
    citations: [
      'Ashley v. Deutsche Bank Aktiengesellschaft, 2d Cir. July 21, 2025'
    ]
  },
  {
    id: 'doc-060',
    title: 'Atchley v. AstraZeneca D.C. Cir. Jan 23, 2026 Second Reversal',
    shortTitle: 'Atchley Jan 23, 2026',
    category: 'litigation',
    date: 'January 23, 2026',
    source: 'U.S. Court of Appeals for the D.C. Circuit',
    description: 'D.C. Circuit\'s second reversal (after SCOTUS GVR in June 2024) of dismissal in Atchley v. AstraZeneca, finding that allegations of bribery to an Iran-controlled Iraqi Ministry of Health sufficed under Taamneh\'s "unusual way" carve-out. This is the principal surviving pathway for any commercial-actor JASTA case post-Taamneh — the template our case should mirror.',
    keyFindings: [
      'Decided January 23, 2026',
      'Second reversal post-SCOTUS GVR',
      '"Unusual" conduct cleared Taamneh bar',
      'Bribery of FTO-controlled ministry was the "unusual way"',
      'D.C. Circuit has more plaintiff-friendly post-Taamneh posture than 2d Circuit',
      'Counsel: Sparacino PLLC'
    ],
    significance: 'The doctrinal daylight for our case. Our complaint architecture should mirror Atchley: plead specific "unusual" affirmative misconduct (Yana reinstatement; continued processing post-warning; merchant-level abuse known to the network). Consider D.C. venue.',
    citations: [
      'D.C. Cir. Jan 23, 2026 opinion'
    ]
  },

  // ============================================================
  // VERIFIED APRIL 2026 CONTEXT (Kinetic + Diplomatic)
  // ============================================================

  {
    id: 'doc-061',
    title: 'Operation Epic Fury — Trump Announcement of U.S./Israeli Strikes on Iran',
    shortTitle: 'Operation Epic Fury',
    category: 'media',
    date: 'February 28, 2026',
    source: 'The Spectrum; Foreign Policy; Air Force Magazine',
    description: 'President Trump announces from Mar-a-Lago the start of "major combat operations" in Iran in coordination with Israel, which the U.S. military names "Operation Epic Fury." Stated objectives: destroy Iran\'s ballistic missiles, "annihilate its navy," and end proxy groups (Hezbollah, Hamas, PMF-aligned Iraqi militias) ability to destabilize the region. Trump cites failed nuclear negotiations, Iran\'s rejection of opportunities to renounce nuclear ambitions, the 1979 hostage crisis, 1983 Beirut barracks bombing, and decades of proxy attacks. Trump calls for Iranian regime change and for Iranian armed forces to surrender.',
    keyFindings: [
      'Announced February 28, 2026 from Mar-a-Lago',
      '"Operation Epic Fury" is the military operation name (distinct from April 17 OFAC "Economic Fury" sanctions)',
      'Coordinated U.S.-Israeli strikes',
      'Goals: destroy ballistic missile program, eliminate nuclear weapon threat, end proxy capabilities',
      'Trump called for Iranian regime change',
      'Contextualizes the April 2026 Treasury / State Dept escalation against PMF-aligned militias'
    ],
    significance: 'Establishes the macro-strategic backdrop for the April 17 Economic Fury commander designations. The kinetic operation against Iran and the financial pressure campaign against Iran\'s Iraqi proxies are coordinated elements of a broader maximum-pressure posture. For litigation purposes, this is the contemporaneous U.S.-government framing of Iran-backed Iraqi militias as active threats to U.S. forces as of 2026 — not as historical actors.',
    citations: [
      'The Spectrum: thespectrum.com/story/news/trump/2026/02/28/trump-announces-attack-on-iran-in-coordination-with-israel/',
      'Foreign Policy: foreignpolicy.com/2026/02/28/us-israel-strike-iran-trump-nuclear-program-missiles/',
      'Air Force Magazine: airforcemag.com/us-israel-attack-iran-trump-massive-ongoing-air-campaign/'
    ]
  },
  {
    id: 'doc-062',
    title: 'Shelly Kittleson Kidnapping by Kata\'ib Hezbollah (March 31 - April 7, 2026)',
    shortTitle: 'Kittleson KH Kidnapping',
    category: 'media',
    date: 'March 31 - April 7, 2026',
    source: 'PBS; ABC News; USA Today; Open the Magazine',
    description: 'American freelance journalist Shelly Kittleson, 49, was kidnapped on March 31, 2026 in central Baghdad on al-Saadoun Street by Kata\'ib Hezbollah. Security video showed a silver car approach her as several people grabbed her and forced her into the vehicle. U.S. officials had warned Kittleson multiple times about specific threats from Iran-backed paramilitaries, most recently the Monday night before her abduction; her name appeared on a KH kidnap/kill list targeting female journalists. Released April 7, 2026 with condition that she leave Iraq immediately, KH citing "appreciation of the patriotic stances" of outgoing PM Mohammed Shia al-Sudani. Militia officials indicated several detained KH members would be freed in exchange.',
    keyFindings: [
      'Kidnapped March 31, 2026 in central Baghdad',
      'Perpetrator: Kata\'ib Hezbollah (arrested suspect had direct KH ties)',
      'U.S. officials had warned her repeatedly — most recently the Monday before',
      'Her name appeared on a KH kidnap/kill list for female journalists',
      'Released April 7, 2026 after U.S.-FBI pressure',
      'Condition of release: immediate departure from Iraq',
      'KH cited outgoing PM Sudani\'s "patriotic stances"',
      'Age 49, Wisconsin origin, Rome-based; contributor to Al-Monitor, BBC World Service, Politico',
      'Directly cited by State Dept in April 14 $10M bounty announcement on al-Hamidawi'
    ],
    significance: 'Contemporary (April 2026) KH operational act against a U.S. national that directly triggered (a) the April 14 State Dept $10M Rewards for Justice bounty on al-Hamidawi and (b) arguably the April 17 OFAC "Economic Fury" commander designations. Establishes that Kata\'ib Hezbollah remains operationally capable of targeting U.S. persons two years after Tower 22 — which defeats any "historical episode" defense in litigation and reinforces the continuing-violation theory for any ATA predicate.',
    citations: [
      'PBS: pbs.org/newshour/world/kidnapped-american-journalist-shelly-kittleson-has-been-released-iraqi-official-says',
      'ABC News: abcnews.com/US/abducted-american-journalist-shelly-kittleson-freed-hezbollah-bregades/story',
      'USA Today: usatoday.com/story/news/world/2026/04/07/kidnapped-journalist-shelly-kittleson-released/'
    ]
  },
  {
    id: 'doc-063',
    title: 'State Dept Rewards for Justice — $10 Million Bounty on KH Secretary-General al-Hamidawi',
    shortTitle: '$10M al-Hamidawi Bounty',
    category: 'regulatory',
    date: 'April 14, 2026',
    source: 'U.S. State Department Rewards for Justice program',
    description: 'U.S. State Department Rewards for Justice program announces a $10 million reward for information on Ahmad al-Hamidawi, Secretary-General of Kata\'ib Hezbollah since 2020 (member of KH Shura Council; SDGT-designated Feb 26, 2020). Rewards for Justice cites al-Hamidawi\'s direction of KH attacks on U.S. diplomatic facilities, the December 2019 rocket attack on an Iraqi military base near Kirkuk that killed a U.S. civilian contractor, and the March 31, 2026 kidnapping of Shelly Kittleson. "Al-Hamidawi has played a central role in planning attacks against US and Iraqi government security forces since 2007." KH receives "extensive training, weapons and other support" from IRGC and Lebanese Hezbollah.',
    keyFindings: [
      '$10 million Rewards for Justice bounty announced April 14, 2026',
      'Target: Ahmad al-Hamidawi (DOB 1974; KH Secretary-General since 2020; SDGT Feb 26, 2020)',
      'Cites December 2019 Kirkuk rocket attack killing U.S. contractor',
      'Cites March 31, 2026 Kittleson kidnapping',
      'Cites decade-plus central role in planning attacks on U.S. and Iraqi forces',
      'Precursor to April 17 OFAC "Economic Fury" commander designations (sb0458)'
    ],
    significance: 'Direct U.S.-government attribution of Kata\'ib Hezbollah\'s operational hierarchy to its current Secretary-General, tying him to both a 2019 U.S.-contractor KIA and the 2026 Kittleson kidnapping. Creates unbroken attribution timeline for ATA § 2333(a) claims predicated on any KH-attributed attack post-2007 (including Tower 22 "planned, resourced, and facilitated" by KH per NSC Kirby Jan 2024).',
    citations: [
      'The National News: thenationalnews.com/news/us/2026/04/14/us-offers-10m-reward-for-information-kataib-hezbollah-chief/',
      'Alhurra: alhurra.com/en/18540',
      'Caliber: caliber.az/en/post/us-offers-10-million-reward-for-iraqi-militia-leader',
      'AP News: apnews.com/b29a7f8d9302d47eaab5fef268923865'
    ]
  }
];

// ============================================================
// EXHIBIT NUMBERING + SOURCE TIERING (litigation-ready metadata)
// ============================================================

// Exhibit numbers are auto-generated as PLTF-EX-#### from sequential doc-id position.
// Source tier is auto-derived from source type, with explicit overrides for edge cases.

const EVIDENCE_SOURCE_TIER_OVERRIDES: Record<string, SourceTier> = {
  // PRIMARY: Treasury/OFAC/SEC/State Dept/DOJ/CENTCOM/Court filings
  'doc-001': 'primary',   // Mastercard Global Compliance internal audit
  'doc-002': 'primary',   // Treasury Fall 2023 briefing
  'doc-003': 'primary',   // NY Fed / Treasury inquiry
  'doc-005': 'primary',   // Jan 28, 2025 Wilson-Steube letter (official House document)
  'doc-008': 'primary',   // Treasury POS farm intel
  'doc-011': 'primary',   // OFAC Oct 2025 designations
  'doc-013': 'primary',   // May 28, 2025 Wilson-Steube to Rubio
  'doc-014': 'primary',   // OFAC press release sb0277
  'doc-015': 'primary',   // OFAC SDN List update 20251009
  'doc-016': 'primary',   // OFAC Recent Actions 20250917
  'doc-017': 'primary',   // Mastercard FY2025 Section 13(r) notice
  'doc-018': 'primary',   // Kreindler Tower 22 FSIA complaint
  'doc-021': 'primary',   // Visa AML/ATF policy (corporate)
  'doc-022': 'primary',   // Visa VIRP framework (corporate)
  'doc-023': 'primary',   // Mastercard Rules Ch. 1 § 1.2 (corporate)
  'doc-024': 'primary',   // Mastercard BRAM/GRIP/SPME/MATCH (corporate)
  'doc-025': 'primary',   // Mastercard Brighterion product page (corporate)
  'doc-026': 'primary',   // Mastercard DIP press release (corporate)
  'doc-027': 'primary',   // Mastercard July 2023 release (corporate)
  'doc-028': 'primary',   // Mastercard Feb 2026 Dubai release (corporate)
  'doc-029': 'primary',   // Mastercard TRACE release (corporate)
  'doc-030': 'primary',   // Visa VAA overview (corporate)
  'doc-031': 'primary',   // Visa Protect release (corporate)
  'doc-032': 'primary',   // VAAI Score release (corporate)
  'doc-033': 'primary',   // Featurespace acquisition release (corporate)
  'doc-035': 'primary',   // Emirates NBD Visa case study (corporate)
  'doc-036': 'primary',   // Western Union Q2 2023 transcript (corporate)
  'doc-037': 'primary',   // Mastercard Q1 2025 transcript (corporate)
  'doc-038': 'primary',   // Mastercard Q2 2025 transcript (corporate)
  'doc-039': 'primary',   // Visa Q4 FY2022 transcript (corporate)
  'doc-040': 'primary',   // Mastercard FY2025 10-K
  'doc-041': 'primary',   // Mastercard 13(r) chronology
  'doc-042': 'primary',   // Visa 10-K textual stasis
  'doc-043': 'primary',   // Eisen/Cook quotes (Mastercard/Visa corporate statements)
  'doc-044': 'primary',   // OFAC sb0188 (Said)
  'doc-045': 'primary',   // OFAC sb0233 (Samarra'i)
  'doc-046': 'primary',   // OFAC sb0458 (Economic Fury)
  'doc-047': 'primary',   // FinCEN jy2053 (Al-Huda)
  'doc-048': 'primary',   // MENAFATF Iraq evaluation
  'doc-049': 'primary',   // H.R. 2658
  'doc-051': 'primary',   // GAO-13-326
  'doc-052': 'primary',   // CRS IF10404
  'doc-053': 'primary',   // CENTCOM Feb 2, 2024
  'doc-054': 'primary',   // CENTCOM Feb 7, 2024
  'doc-055': 'primary',   // DOJ Tower 22 indictment
  'doc-057': 'primary',   // State Dept designation of Ansar Awfiya
  'doc-058': 'primary',   // Linde 2d Cir. opinion
  'doc-059': 'primary',   // Ashley 2d Cir. opinion
  'doc-060': 'primary',   // Atchley Jan 23, 2026 opinion
  'doc-063': 'primary',   // State Dept $10M bounty on al-Hamidawi

  // SECONDARY: Reputable investigative journalism
  'doc-004': 'secondary', // WSJ Cloud investigation
  'doc-006': 'secondary', // UAE statistical analysis
  'doc-007': 'secondary', // FIB Visa Direct analysis
  'doc-009': 'secondary', // Iraqi airport security seizures
  'doc-010': 'secondary', // Qi Card / ISC analysis
  'doc-012': 'secondary', // FIB service suspension notice
  'doc-020': 'secondary', // Al-Muhandis Card coverage (The New Region, Arab Weekly, Shafaq, 964Media, MEMRI)
  'doc-034': 'secondary', // CNBC Mirfin interview
  'doc-050': 'secondary', // Wilson X post (public official statement in media channel)
  'doc-056': 'secondary', // WaPo Tower 22 investigation
  'doc-061': 'secondary', // Operation Epic Fury (Foreign Policy, Air Force Magazine, The Spectrum)
  'doc-062': 'secondary', // Kittleson coverage (PBS, ABC, USA Today)

  // TERTIARY: Research/analyst/industry sources
  'doc-019': 'tertiary',  // FDD Long War Journal
};

const SOURCE_TIER_LABEL: Record<SourceTier, string> = {
  primary: 'Primary Source',
  secondary: 'Secondary Source',
  tertiary: 'Tertiary / Analyst'
};

const SOURCE_TIER_COLOR: Record<SourceTier, string> = {
  primary: 'emerald',
  secondary: 'navy',
  tertiary: 'amber'
};

/** Derive exhibit number from doc id: doc-001 -> PLTF-EX-0001 */
export function getExhibitNumber(id: string): string {
  const match = id.match(/doc-(\d+)/);
  if (!match) return '';
  const n = parseInt(match[1], 10);
  return `PLTF-EX-${String(n).padStart(4, '0')}`;
}

/** Get source tier for a doc id, defaulting to 'secondary' */
export function getSourceTier(id: string): SourceTier {
  return EVIDENCE_SOURCE_TIER_OVERRIDES[id] ?? 'secondary';
}

export function getSourceTierLabel(tier: SourceTier): string {
  return SOURCE_TIER_LABEL[tier];
}

export function getSourceTierColor(tier: SourceTier): string {
  return SOURCE_TIER_COLOR[tier];
}

/** Enriched evidence view with exhibit number + tier */
export function getEvidenceWithExhibit(doc: Evidence): Evidence & {
  exhibitNumber: string;
  sourceTier: SourceTier;
} {
  return {
    ...doc,
    exhibitNumber: doc.exhibitNumber ?? getExhibitNumber(doc.id),
    sourceTier: doc.sourceTier ?? getSourceTier(doc.id),
  };
}

/** Master exhibit index in PLTF-EX order */
export function getMasterExhibitIndex(): Array<Evidence & {
  exhibitNumber: string;
  sourceTier: SourceTier;
}> {
  return evidenceDocuments
    .map(getEvidenceWithExhibit)
    .sort((a, b) => a.exhibitNumber.localeCompare(b.exhibitNumber));
}

// ============================================================
// Helper functions
// ============================================================

export const getEvidenceByCategory = (category: EvidenceCategory): Evidence[] => {
  return evidenceDocuments.filter(e => e.category === category);
};

export const getCategoryLabel = (category: EvidenceCategory): string => {
  const labels: Record<EvidenceCategory, string> = {
    audit: 'Audit',
    warning: 'Warning',
    congressional: 'Congressional',
    financial: 'Financial Data',
    media: 'Media',
    litigation: 'Litigation',
    regulatory: 'Regulatory'
  };
  return labels[category];
};

export const getCategoryColor = (category: EvidenceCategory): string => {
  const colors: Record<EvidenceCategory, string> = {
    audit: 'blue',
    warning: 'amber',
    congressional: 'emerald',
    financial: 'purple',
    media: 'slate',
    litigation: 'rose',
    regulatory: 'indigo'
  };
  return colors[category];
};

export const getEvidenceCount = (): Record<EvidenceCategory, number> => {
  return {
    audit: evidenceDocuments.filter(e => e.category === 'audit').length,
    warning: evidenceDocuments.filter(e => e.category === 'warning').length,
    congressional: evidenceDocuments.filter(e => e.category === 'congressional').length,
    financial: evidenceDocuments.filter(e => e.category === 'financial').length,
    media: evidenceDocuments.filter(e => e.category === 'media').length,
    litigation: evidenceDocuments.filter(e => e.category === 'litigation').length,
    regulatory: evidenceDocuments.filter(e => e.category === 'regulatory').length
  };
};
