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
    date: 'January 28, 2025',
    dateSort: '2025-01-28',
    title: 'Wilson-Steube-et-al. Congressional Letter on PMF Militias',
    description: 'Representatives Joe Wilson, Greg Steube, James R. Baird, Neal P. Dunn, Abraham J. Hamadeh, Randy K. Weber Sr., and Christopher H. Smith send letter to Secretary of State Marco Rubio and National Security Adviser Michael Waltz urging FTO designation of Iran-backed Iraqi militias, E.O. 13224 sanctions on Sarayya al-Jihad and Kata\'ib al-Imam Ali, and termination of U.S. security assistance to Iraq until militias are removed from state forces. (Announced by Rep. Steube\'s Feb 7, 2025 press release; the letter itself does NOT mention Visa, Mastercard, Qi Card, or Al-Rafidain Bank — the payment-card-specific letter is the later May 28, 2025 letter to Sec. Rubio.)',
    category: 'regulatory',
    isKeyEvent: true,
    details: [
      'Signatories (7): Wilson, Steube, Baird, Dunn, Hamadeh, Weber, Smith',
      'Addressed to Secretary Rubio AND NSA Michael Waltz',
      'Cites 170+ attacks on U.S. forces over two years',
      'Cites $11.4B in U.S. assistance to Iraq',
      'Urges FTO designations and E.O. 13224 sanctions',
      'Does NOT mention Visa, Mastercard, Qi Card, or Al-Rafidain (those arrive in May 28 follow-up letter)'
    ],
    source: 'steube.house.gov press release (Feb 7, 2025) announcing Jan 28 letter'
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
  },
  {
    id: 'evt-024',
    date: 'May 28, 2025',
    dateSort: '2025-05-28',
    title: 'Wilson-Steube Letter to Sec. Rubio Names Qi Card & Rafidain',
    description: 'Representatives Joe Wilson and Greg Steube send second letter, this time to Secretary of State Marco Rubio, explicitly demanding sanctions on Al-Rafidain Bank and the Qi Card e-payment system for processing PMF militia payroll.',
    category: 'regulatory',
    isKeyEvent: true,
    details: [
      'Letter dated May 28, 2025, addressed to Sec. Rubio',
      'Targets Al-Rafidain Bank and Qi-Card by name',
      'Demands FTO designation of PMF, Muhandis General Company, Badr Organization',
      'Names finance minister Taif Sami Mohammed and Bahaa Abdul Hadi',
      'Cites NSPM-2 "Maximum Pressure" framework',
      'Demands annual audits by internationally reputable auditor'
    ],
    financialImpact: '$3B+/year PMF funding',
    source: 'Wilson-Steube Letter to Rubio (Fox News archive)'
  },
  {
    id: 'evt-025',
    date: 'Late June 2025',
    dateSort: '2025-06-29',
    title: 'Treasury Threatens Qi Card with Sanctions — PMF Salary Blockade',
    description: 'U.S. Treasury privately warns Qi Card operator and Al-Rafidain Bank that continued processing of PMF salaries will trigger U.S. sanctions. Salaries for 250,000+ PMF fighters are suspended abruptly.',
    category: 'regulatory',
    isKeyEvent: true,
    details: [
      'Abbas Combat Division commander Zaidi on record: "US Treasury warned the company responsible for PMF salaries to either withdraw or face sanctions"',
      'Iraqi parliament Security & Defense Chairman Alawi: "These pressures have even reached Visa card companies, affecting the payment process"',
      'PMF Finance Committee MP al-Tamimi confirms emergency MoF-banks meeting',
      'Qi Card informs Rafidain Bank and PMF of plan to exit the salary file',
      '250,000+ PMF members affected'
    ],
    source: 'Shafaq News / The New Region / Arab Weekly'
  },
  {
    id: 'evt-026',
    date: 'July 11, 2025',
    dateSort: '2025-07-11',
    title: 'PMF Launches Al-Muhandis Card to Replace Blocked Qi Cards',
    description: 'Popular Mobilization Forces begin distributing a new in-house payment card (the "Al-Muhandis Card", named after slain Kata\'ib Hezbollah founder Abu Mahdi al-Muhandis) across Iraqi provinces to bypass the U.S.-pressured Qi Card withdrawal.',
    category: 'action',
    details: [
      'Distribution began July 11, 2025 inside PMF brigades',
      'Members required to surrender old Qi Cards and national IDs',
      'Named after Abu Mahdi al-Muhandis (killed Jan 2020 with Soleimani)',
      'Evidence that scheme adapted rather than ended after network blocking',
      'PMF Financial & Administrative Director Ismail confirms rollout'
    ],
    source: 'The New Region / Arab Weekly'
  },
  {
    id: 'evt-027',
    date: 'September 17, 2025',
    dateSort: '2025-09-17',
    title: 'State Department Upgrades 4 PMF Militias to FTO',
    description: 'U.S. State Department upgrades four Iran-aligned Iraqi militias from SDGT to full Foreign Terrorist Organization status, unlocking the statutory predicate required for ATA civil actions under 18 U.S.C. § 2333.',
    category: 'regulatory',
    isKeyEvent: true,
    details: [
      'Harakat Hezbollah al-Nujaba (HHN) — directly tied to Tower 22 operational environment',
      'Kata\'ib Sayyid al-Shuhada (KSS)',
      'Harakat Ansar Allah al-Awfiya (19th PMF Brigade) — State terrorist-designated June 17, 2024 for Tower 22',
      'Kata\'ib al-Imam Ali (KIA)',
      'All four are PMF components and Islamic Resistance in Iraq members',
      'FTO designation is statutory predicate for 18 U.S.C. § 2333(a) civil liability'
    ],
    source: 'OFAC Recent Actions 20250917 / State Dept / FDD LWJ'
  },
  {
    id: 'evt-028',
    date: 'October 9, 2025',
    dateSort: '2025-10-09',
    title: 'OFAC Designates Muhandis General Company & Baladna — KH/IRGC-QF Control Confirmed',
    description: 'OFAC adds Muhandis General Company (a PMF-run state-owned enterprise) and its commercial front Baladna Agricultural Investments to the SDN List under SDGT/IFSR, explicitly "Linked To: KATA\'IB HIZBALLAH; Linked To: ISLAMIC REVOLUTIONARY GUARD CORPS (IRGC)-QODS FORCE".',
    category: 'regulatory',
    isKeyEvent: true,
    details: [
      'Muhandis General Company SDN entry OFAC-55929; SDGT/IFSR',
      'Controlled by Abu Fadak (Abd al-Aziz al-Muhammadawi, KH leader)',
      'Used sub-contracting to divert Iraqi government contracts',
      'Baladna Agricultural Investments designated as commercial front',
      'Ali Mohammed Ghulam Hussein Al Anssari also added to SDN List',
      'Treasury press release sb0277 establishes KH/IRGC-QF control of PMF economy'
    ],
    source: 'OFAC Recent Actions 20251009 / Treasury Press Release sb0277'
  },
  {
    id: 'evt-029',
    date: 'January 22, 2026',
    dateSort: '2026-01-22',
    title: 'Kreindler Files Tower 22 FSIA Suit Against Iran (D.D.C.)',
    description: 'Kreindler & Kreindler files federal lawsuit in the U.S. District Court for the District of Columbia on behalf of the families of the three U.S. soldiers killed at Tower 22, seeking compensatory and punitive damages against the Islamic Republic of Iran under the FSIA state-sponsored terrorism exception (28 U.S.C. § 1605A).',
    category: 'violation',
    isKeyEvent: true,
    details: [
      'Filed January 22, 2026 in D.D.C.',
      'Plaintiffs: Gold Star families of Sgt. William Rivers, Spc. Kennedy Sanders, Spc. Breonna Moffett',
      'Defendant: Islamic Republic of Iran',
      'Statutory basis: 28 U.S.C. § 1605A (FSIA state-sponsor exception)',
      'Counsel: Kreindler & Kreindler LLP',
      'Establishes predicate Iran-attribution judgment useful for downstream ATA claims against facilitators'
    ],
    source: 'Law360 (Jan 22, 2026)'
  },
  {
    id: 'evt-030',
    date: 'February 11, 2026',
    dateSort: '2026-02-11',
    title: 'Mastercard Files Iran Threat Reduction Act 10-K Disclosure (SEC)',
    description: 'Mastercard Incorporated files its FY2025 Section 13(r) / Iran Threat Reduction and Syria Human Rights Act of 2012 notice with the SEC, signed by General Counsel Tiffany Hall. The contemporaneous 10-K explicitly identifies Iran and Iraq risk factors under OFAC sanctions compliance.',
    category: 'regulatory',
    details: [
      'Filed February 11, 2026 in Mastercard 2025 Form 10-K',
      'Section 219 Iran Threat Reduction Act of 2012 disclosure',
      'Section 13(r) of Securities Exchange Act',
      '10-K identifies Iran among comprehensive OFAC-sanctioned countries',
      'Precedent: analogous notice filed Feb 12, 2025 (for FY2024)',
      'Concrete SEC-filed artifact usable as admission-against-interest in discovery'
    ],
    source: 'SEC EDGAR (ma12312025-irannotice.htm)'
  },
  {
    id: 'evt-031',
    date: 'April 11, 2026',
    dateSort: '2026-04-11',
    title: 'LWJ: Iraqi Militias Direct Donors to Mastercard for Iran/Hezbollah Fundraising',
    description: 'FDD\'s Long War Journal reports that Iraqi PMF-aligned militia "humanitarian" fundraising campaigns are now explicitly instructing donors to route contributions via Mastercard and Zain Cash to a parallel financial pipeline supporting Iran and Hezbollah — evidence the scheme has persisted past the 2025 blocking wave.',
    category: 'violation',
    isKeyEvent: true,
    details: [
      'Report dated April 11, 2026',
      'Harakat Ansar Allah al-Awfiya campaigns explicitly name Mastercard as a donation channel',
      'Campaigns frame donations as "financial front" for Iran war effort',
      'Militia leadership (e.g., 19th Brigade Deputy Commander) personally endorses contributions',
      'Occurs after March-April 2025 network blocking, undermining remediation defense',
      'Demonstrates ongoing willful blindness by Mastercard compliance'
    ],
    source: 'FDD Long War Journal (April 11, 2026)'
  },

  // ============================================================
  // RESEARCH FILES INTEGRATION (Round 2) - evt-032 through evt-053
  // ============================================================

  // Pre-surge / base-rate context (Research 4)
  {
    id: 'evt-032',
    date: 'March 23, 2023',
    dateSort: '2023-03-23',
    title: 'Rmelan/Hasakah Drone Strike — First U.S. Contractor Killed',
    description: 'A one-way Iranian-origin drone strikes a coalition maintenance facility at Hasakah/Abu Hajar Airfield (Rmelan), Syria, killing one U.S. contractor and wounding five U.S. service members plus another contractor. Attribution: Liwa al-Ghaliboun, assessed as an IRGC/Kata\'ib Hezbollah facade group. Follow-on rocket attacks on March 24 at Al-Omar and Conoco bring the 48-hour total to 12 wounded including 6 TBIs.',
    category: 'attack',
    isKeyEvent: true,
    details: [
      '1 U.S. contractor killed',
      '5 U.S. service members + 1 contractor wounded',
      'Attribution: Liwa al-Ghaliboun (KH/IRGC front)',
      'U.S. F-15s retaliated March 23-24 against IRGC-linked facilities in eastern Syria',
      'Last U.S. retaliatory strike before October 2023',
      'Establishes second U.S. KIA predating our DB baseline'
    ],
    source: 'Washington Institute / CENTCOM / Pentagon 3/30/23'
  },
  {
    id: 'evt-033',
    date: 'August 15, 2023',
    dateSort: '2023-08-15',
    title: 'Al-Tanf KH Drone Corridor Established from Babil Province',
    description: 'Two KAS-04 (Iranian Sammad-family) drones launched from Jurf al-Sakhar, Babil province — a Kata\'ib Hezbollah stronghold — toward the U.S. Al-Tanf Garrison in Syria. CENTCOM later confirmed the Iraqi launch site in a post-incident graphic; the Washington Institute attributed the operation to KH. No U.S. casualties, but the attack established the operational drone corridor from Iraq to Syria that would define the post-October 2023 campaign.',
    category: 'attack',
    details: [
      'Two KAS-04 drones launched from Jurf al-Sakhar, Babil',
      'Targeted U.S. Al-Tanf Garrison, Syria',
      'CENTCOM confirmed Iraqi launch site',
      'Attribution: Kata\'ib Hezbollah (Washington Institute)',
      'No U.S. casualties',
      'Established KH drone corridor Iraq→Syria'
    ],
    source: 'Washington Institute Militia Spotlight / CENTCOM'
  },

  // Post-Oct 7 campaign (Research 4)
  {
    id: 'evt-034',
    date: 'October 17-18, 2023',
    dateSort: '2023-10-17',
    title: 'Post-October 7 Campaign Begins — 1 Contractor Dies, 21 Wounded',
    description: 'Iran-backed Iraqi militia attacks resume at near-daily tempo following Hamas\'s Oct 7 attack on Israel. Al-Asad (Iraq) and Al-Tanf (Syria) are struck. One U.S. contractor dies of cardiac arrest during a false-alarm alert at Al-Asad; ~21 U.S. personnel are wounded including 15 confirmed TBI. Islamic Resistance in Iraq (IRI) claims the attacks.',
    category: 'attack',
    isKeyEvent: true,
    details: [
      '1 U.S. contractor dies of cardiac arrest during false alarm',
      '~21 U.S. wounded across Al-Asad and Al-Tanf',
      '15 confirmed TBI from Al-Tanf strike',
      'IRI claims attacks; Tashkil al-Waritheen facade branding',
      'Opens 168-attack, 16-week campaign window'
    ],
    source: 'USIP Iran Primer / Lead IG Q4 2023 OIR / CENTCOM'
  },
  {
    id: 'evt-035',
    date: 'November 20, 2023',
    dateSort: '2023-11-20',
    title: 'Al-Asad Close-Range Ballistic Missile — 8 U.S. Wounded',
    description: 'First ballistic-missile attack of the campaign hits Al-Asad Airbase, Iraq. Pentagon/Ryder confirms 8 U.S. and coalition service members wounded (TBI/minor), with minor infrastructure damage. Same-day U.S. AC-130 gunship counter-strike on a KH vehicle/operations center near Jurf al-Sakhar/Abu Ghraib kills 8 KH militants.',
    category: 'attack',
    details: [
      'First ballistic missile of the campaign',
      '8 U.S. + coalition service members wounded',
      'Same-day AC-130 counter-strike kills 8 KH militants',
      'Minor infrastructure damage at Al-Asad',
      'Most serious injury incident to that point'
    ],
    source: 'CENTCOM / Pentagon Ryder / Times of Israel 11/22/23'
  },
  {
    id: 'evt-036',
    date: 'December 25, 2023',
    dateSort: '2023-12-25',
    title: 'Erbil Air Base KH Drone — 3 U.S. Wounded, 1 Critically',
    description: 'Explosive one-way drone penetrates Erbil Air Base air defenses on Christmas Day. Defense Secretary Austin directly attributes the attack to Kata\'ib Hezbollah. Three U.S. service members wounded (one critically). President Biden orders same-night U.S. strikes on three KH-affiliated facilities near Al-Qa\'im and Jurf al-Sakhar.',
    category: 'attack',
    isKeyEvent: true,
    details: [
      '3 U.S. service members wounded (1 critically)',
      'Austin directly attributed attack to KH',
      'Drone penetrated base air defenses',
      'Biden ordered same-night counter-strikes on 3 KH facilities',
      'Lead IG Q4 2023 OIR report confirms attribution'
    ],
    source: 'CENTCOM / Lead IG Q4 2023 OIR / White House'
  },
  {
    id: 'evt-037',
    date: 'January 20, 2024',
    dateSort: '2024-01-20',
    title: 'Al-Asad 15-Missile Barrage — Precursor to Tower 22',
    description: 'IRI fires roughly 15 ballistic missiles and rockets at Al-Asad Airbase; 13 intercepted, 2 impact. Multiple U.S. personnel evaluated for TBI. U.S. Jan 23 retaliation hits PMF 45th, 46th, and 47th brigades — commanded by Kata\'ib Hezbollah — at Al-Qa\'im (Anbar) and Jurf al-Sakhar (Babil).',
    category: 'attack',
    details: [
      '15 ballistic missiles and rockets fired',
      '13 intercepted, 2 impacts',
      'Multiple U.S. TBI evaluations',
      'Jan 23 retaliation hits KH-commanded PMF 45th/46th/47th brigades',
      'Iraqi government condemned U.S. strikes; Austin defended them'
    ],
    source: 'CENTCOM / CNN / CBS'
  },
  {
    id: 'evt-038',
    date: 'February 2, 2024',
    dateSort: '2024-02-02',
    title: 'CENTCOM Retaliation — 85 Targets, B-1B Bombers From Dyess AFB',
    description: 'U.S. CENTCOM forces conduct airstrikes on 85 targets across 7 facilities (3 in Iraq, 4 in Syria) using more than 125 precision-guided munitions. B-1B Lancer long-range bombers fly from Dyess AFB, Texas; strike lasts ~30 minutes. Targets: IRGC-QF and KH/Harakat al-Nujaba command and control, intelligence centers, rockets, missiles, UAV storage, and logistics facilities. Dignified Transfer of the three Tower 22 KIA at Dover AFB same day.',
    category: 'action',
    isKeyEvent: true,
    details: [
      '85 targets at 7 facilities (3 Iraq, 4 Syria)',
      '125+ precision-guided munitions',
      'B-1B Lancers from Dyess AFB, Texas',
      'Dignified Transfer of Tower 22 KIA at Dover AFB',
      'Biden, Jill Biden, Austin, CJCS Brown attended'
    ],
    source: 'CENTCOM press release Feb 2, 2024 / White House'
  },
  {
    id: 'evt-039',
    date: 'February 7, 2024',
    dateSort: '2024-02-07',
    title: 'Hellfire Strike Kills KH Drone-Operations Chief Abu Baqir al-Saadi',
    description: 'A Hellfire missile fired from a U.S. drone strikes an SUV in the Mashtal neighborhood of eastern Baghdad, killing Wissam Mohammed "Abu Baqir" al-Saadi (senior KH commander running drone operations in Syria; former bodyguard to KH founder Abu Mahdi al-Muhandis) and a second KH commander, Arkan al-Alaywi/Aliawi. The Iraqi government was not notified in advance and condemned the strike. Iraqi militia attacks on U.S. forces effectively cease after February 9, 2024.',
    category: 'action',
    isKeyEvent: true,
    details: [
      'Killed Wissam "Abu Baqir" al-Saadi (KH drone-ops chief)',
      'Also killed Arkan al-Alaywi (second KH commander)',
      'Al-Saadi was former bodyguard to Abu Mahdi al-Muhandis',
      'Struck SUV in Mashtal, eastern Baghdad',
      'Iraqi government not notified; condemned strike',
      'Attacks on U.S. forces effectively cease after Feb 9'
    ],
    source: 'CENTCOM press release Feb 7, 2024'
  },
  {
    id: 'evt-040',
    date: 'June 17, 2024',
    dateSort: '2024-06-17',
    title: 'State Department Designates Ansar Allah al-Awfiya (19th PMF Brigade) as Terrorist Organization',
    description: 'The U.S. Department of State designates Harakat Ansar Allah al-Awfiya — the 19th PMF Brigade — as a terrorist organization, explicitly for its role in the January 28, 2024 Tower 22 drone strike that killed three U.S. service members. This is the operational-attribution designation that will later anchor any ATA § 2333(a) action predicated on Tower 22.',
    category: 'regulatory',
    isKeyEvent: true,
    details: [
      'Designates 19th PMF Brigade (Ansar Allah al-Awfiya)',
      'Cites Tower 22 role explicitly',
      'Precedes Sept 17, 2025 FTO upgrade',
      'Core attribution predicate for Tower 22 ATA claims'
    ],
    source: 'U.S. Department of State'
  },
  {
    id: 'evt-041',
    date: 'August 5, 2024',
    dateSort: '2024-08-05',
    title: 'Al-Asad Rocket Attack — 7 U.S. Wounded',
    description: 'Two 122mm Katyusha rockets fired from a truck launcher strike Al-Asad Airbase, Iraq. Seven U.S. personnel wounded: five service members and two contractors; two evacuated (including to Germany); one with serious injuries; four diagnosed with TBI. DoD calls it a "dangerous escalation." Washington Institute counts this as the 189th attack on U.S. forces in Iraq/Syria/Jordan since October 2023.',
    category: 'attack',
    details: [
      '7 U.S. wounded (5 troops + 2 contractors)',
      '1 serious injury, 4 TBI diagnoses',
      'Two 122mm Katyushas from truck launcher',
      '2 evacuated including to Germany',
      '189th attack per Washington Institute count'
    ],
    source: 'CNN / Air & Space Forces Magazine / Washington Institute Militia Spotlight'
  },
  {
    id: 'evt-042',
    date: 'August 9, 2024',
    dateSort: '2024-08-09',
    title: 'Rumalyn LZ Drone Strike — 8 U.S. Wounded',
    description: 'One-way attack drone strikes Rumalyn Landing Zone, Syria around 5 PM ET; a second drone is shot down. Fire and facility damage reported. Eight U.S. service members wounded (TBI and smoke inhalation). Pentagon attributes to Iran-backed militias.',
    category: 'attack',
    details: [
      '8 U.S. service members wounded',
      'TBI + smoke inhalation',
      'Fire and facility damage',
      'Second drone shot down'
    ],
    source: 'DoD/Ryder / CBS / ABC / Stars and Stripes'
  },
  {
    id: 'evt-043',
    date: 'December 2024',
    dateSort: '2024-12-15',
    title: 'DOJ Indicts Sadeghi and Abedininajafabadi for Tower 22 Drone Components',
    description: 'DOJ unseals an indictment charging Mahdi Mohammad Sadeghi and Mohammad Abedininajafabadi with conspiring to export Iranian navigation components used in the January 28, 2024 Tower 22 drone attack. Abedininajafabadi arrested in Italy; Sadeghi arrested in Natick, Massachusetts where he worked as an engineer at Analog Devices. Same month: Iraqi militia-government agreement to cease attacks on U.S. forces; Assad regime falls December 8.',
    category: 'regulatory',
    isKeyEvent: true,
    details: [
      'Two defendants charged with export-control evasion',
      'Iranian navigation components used in Tower 22 drone',
      'Sadeghi arrested in Natick, MA (Analog Devices engineer)',
      'Abedininajafabadi arrested in Italy',
      'Concurrent: Iraqi militia-government ceasefire agreement',
      'Concurrent: Dec 8 fall of Assad closes Iran\'s "land bridge"'
    ],
    source: 'DOJ / Boston Globe 1/14/25'
  },

  // Oil smuggling and banker designations (Research 2)
  {
    id: 'evt-044',
    date: 'July 3, 2025',
    dateSort: '2025-07-03',
    title: 'OFAC sb0188: Salim Ahmed Said Oil-Smuggling Network',
    description: 'Treasury/OFAC designates Salim Ahmed Said, an Iraqi-British national whose network has sold Iranian oil fraudulently as Iraqi oil since at least 2020, bribing Iraqi parliamentarians for forged origin vouchers. Associated entities include AISSOT and VS Tankers.',
    category: 'regulatory',
    details: [
      'SDN designation pursuant to E.O. 13224',
      'Oil sold as Iraqi since at least 2020',
      'Bribed Iraqi parliamentarians for forged vouchers',
      'Entities: AISSOT, VS Tankers',
      'Part of maximum-pressure oil-revenue strangulation'
    ],
    source: 'Treasury press release sb0188'
  },
  {
    id: 'evt-045',
    date: 'September 2, 2025',
    dateSort: '2025-09-02',
    title: 'OFAC sb0233: Waleed al-Samarra\'i Shipping Network',
    description: 'Treasury/OFAC designates Waleed Khaled Hameed al-Samarra\'i, a UAE-based Iraqi-Kittitian businessman whose scheme generates an estimated $300 million annually. Fleet: nine Liberia-flagged tankers (ADENA, LILIANA, CAMILLA, DELFINA, BIANCA, ROBERTA, ALEXANDRA, BELLAGIO, PAOLA) conducting ship-to-ship transfers in the Arabian Gulf, blending Iranian and Iraqi crude using AIS spoofing. Shell companies: Tryfo Navigation, Keely Shiptrade, Odiar Management, Panarea Marine, Topsail Shipholding (Marshall Islands). UAE logistics: Babylon Navigation DMCC. UAE marketing: Galaxy Oil FZ-LLC.',
    category: 'regulatory',
    isKeyEvent: true,
    financialImpact: '$300M/yr',
    details: [
      '9 Liberia-flagged tankers designated',
      'Marshall Islands shell companies for ownership obfuscation',
      'Ship-to-ship transfers + AIS spoofing',
      'Babylon Navigation DMCC (UAE logistics)',
      'Galaxy Oil FZ-LLC (UAE marketing front)',
      'Samarra\'i is Iraqi-Kittitian dual national, UAE-based'
    ],
    source: 'Treasury press release sb0233'
  },

  // Congressional / legislative (Research 5)
  {
    id: 'evt-046',
    date: 'April 3, 2025',
    dateSort: '2025-04-03',
    title: 'H.R. 2658 "Free Iraq from Iran Act" Introduced',
    description: 'Rep. Joe Wilson introduces H.R. 2658 with Rep. Jimmy Panetta (D-CA) as original cosponsor; Rep. Abraham Hamadeh (R-AZ) added April 10. Referred to Foreign Affairs, Judiciary, and HPSCI. Mandates FTO designation within 90 days of ten named militias (Abu Fadl al-Abbas Brigades, Badr Corps, HAN, PMF, KIA, Kata\'ib Jund al-Imam, KSS, Sarraya al-Jihad, Sarraya al-Khorasani, IRI). Sec. 7 mandates 180-day Treasury report on Al-Rafidain Bank, SOMO, and named Iraqi officials. **Bill does NOT name Visa, Mastercard, Qi Card, or CBI**. Moribund as of April 2026 (GovTrack 8% enactment probability). Related provisions folded into FY2026 NDAA (Dec 10, 2025 House passage 312-112).',
    category: 'regulatory',
    details: [
      'Original cosponsor: Jimmy Panetta (D-CA-19)',
      'Mandates FTO designation of 10 militias + IRGC subsidiaries',
      'Sec. 7: 180-day Treasury report; names Al-Rafidain, SOMO, Maliki, Ameri, Yar Allah, Abboud',
      'Does NOT name Visa/MA/Qi Card/CBI',
      'No markup, no hearing, no floor vote as of April 2026',
      'Related provisions folded into FY2026 NDAA (Dec 10, 2025)'
    ],
    source: 'congress.gov / joewilson.house.gov / GovTrack'
  },
  {
    id: 'evt-047',
    date: 'November 19, 2024',
    dateSort: '2024-11-19',
    title: 'Senate Judiciary Hearing — Visa/Mastercard Testify; Iraq/Iran NOT Discussed',
    description: 'Senate Judiciary Committee holds hearing "Breaking the Visa-Mastercard Duopoly." Visa\'s Bill Sheedy (Senior Advisor to CEO) and Mastercard\'s Linda Kirkpatrick (President, Americas) testify under oath. Hearing focuses entirely on domestic interchange fees and the Credit Card Competition Act. **Iraq, Iran, the card scheme, OFAC compliance, and militia financing are not discussed.** The closest congressional event to direct oversight of the networks during the Gap Period — and Iraq is not mentioned once.',
    category: 'regulatory',
    details: [
      'Chair Durbin; Visa\'s Sheedy and Mastercard\'s Kirkpatrick testify',
      'Focus: interchange fees, Credit Card Competition Act',
      'NO Iraq/Iran/card-scheme discussion',
      'Mid-Gap-Period opportunity for oversight, missed',
      'Known analysts on quarterly calls also asked no Iraq questions'
    ],
    source: 'judiciary.senate.gov'
  },
  {
    id: 'evt-048',
    date: 'December 10, 2025',
    dateSort: '2025-12-10',
    title: 'House Passes FY2026 NDAA 312-112 With Iraq Militia Provisions',
    description: 'House of Representatives passes the FY2026 National Defense Authorization Act 312-112, folding in provisions on conditioning Iraq security aid and prohibiting funding to Badr Corps / Iran-backed militias that had originated in H.R. 2658. Per Rep. Wilson, this becomes the principal legislative vehicle for the Iraq/Iran-proxy aid conditioning after H.R. 2658 stalled.',
    category: 'regulatory',
    details: [
      'House vote 312-112',
      'Folds in H.R. 2658-style provisions',
      'Conditions Iraq security aid',
      'Prohibits funding to Badr Corps / Iran-backed militias',
      'Wilson-led legislative vehicle'
    ],
    source: 'congress.gov / Wilson office'
  },

  // Private-sector and regulatory (Research 1 + 2)
  {
    id: 'evt-049',
    date: 'May 1, 2023',
    dateSort: '2023-05-01',
    title: 'Visa Integrity Risk Program (VIRP) Launches — Same Month as Treasury Inquiry',
    description: 'Visa\'s Integrity Risk Program (VIRP) takes effect, formally replacing the Global Brand Protection Program. VIRP is marketed as a tiered (Tier 1/2/3) framework to "deter, detect, and remediate illegal activity from entering the Visa payment system." The program becomes effective the same month the Federal Reserve Bank of New York and Treasury begin pressing the networks on the Iraqi surge — a coincidence of timing that strengthens any "gross negligence" framing.',
    category: 'regulatory',
    details: [
      'Effective May 1, 2023',
      'Replaces Global Brand Protection Program',
      'Tier 1/2/3 high-integrity-risk acquirer registration',
      'Launched same month NYFed/Treasury began Iraq inquiry',
      'Public compliance framework Visa claimed to operate'
    ],
    source: 'Visa public documentation (VIRP framework)'
  },
  {
    id: 'evt-050',
    date: 'July 26, 2023',
    dateSort: '2023-07-26',
    title: 'Western Union Q2 2023 Call — The Contrast Witness Names Iraq 10+ Times',
    description: 'Western Union Q2 2023 earnings call. CEO Devin McGranahan and CFO Matt Cagwin devote substantial prepared remarks and three Q&A exchanges to Iraq, naming the country 10+ times. Cagwin discloses Iraq as a "10% benefit to adjusted revenue," that WU raised full-year guidance due to Iraq, and forecasts a "significantly lower going forward" volume "due to recent U.S. government actions, which shut down a number of our agents in Iraq, potential regulatory changes." He discloses a 70% run-rate reduction in early July and acknowledges that "some of where the incremental revenue and profit we got from Iraq goes back into the compliance space over the last few months." Visa and Mastercard never made comparable disclosures on any call during the 22-month Gap Period.',
    category: 'warning',
    isKeyEvent: true,
    details: [
      'Iraq named 10+ times in prepared remarks and Q&A',
      'Iraq = 10% benefit to adjusted revenue in Q2',
      '70% run-rate reduction disclosed in early July',
      'U.S. government actions and sanctions disclosed',
      'Analyst Will Nance (Goldman) probed the issue',
      'Visa/MA never disclosed Iraq on any call during Gap Period'
    ],
    source: 'Western Union Q2 2023 earnings call transcript'
  },
  {
    id: 'evt-051',
    date: 'January 29, 2024',
    dateSort: '2024-01-29',
    title: 'FinCEN Designates Al-Huda Bank as Primary Money-Laundering Concern',
    description: 'FinCEN issues a finding (press release jy2053) designating Al-Huda Bank, an Iraqi private bank, as a primary money-laundering concern for acting as a conduit for the IRGC-Quds Force, Kata\'ib Hezbollah, and Asa\'ib Ahl al-Haq. The finding prohibits U.S. financial institutions from opening or maintaining correspondent accounts for Al-Huda and constitutes a direct regulatory peer-level indicator that the Iraqi banking system was actively conducting militia-linked financing during the Gap Period.',
    category: 'regulatory',
    details: [
      'FinCEN 311 finding (primary money-laundering concern)',
      'IRGC-QF, KH, AAH named as beneficiaries',
      'Prohibits U.S. correspondent accounts',
      'Peer-level regulatory indicator during Gap Period',
      'Press release: home.treasury.gov/news/press-releases/jy2053'
    ],
    source: 'FinCEN press release jy2053'
  },
  {
    id: 'evt-052',
    date: 'June 1, 2025',
    dateSort: '2025-06-01',
    title: 'Central Bank of Iraq Suspends Mastercard for International Transactions',
    description: 'The Central Bank of Iraq orders local banks to suspend Mastercard for all international transactions effective June 1, 2025, redirecting foreign payments exclusively through the U.S.-issued "Switch" card system for tighter oversight. This follows the March-April 2025 card blockings and the May 28 Wilson-Steube letter to Sec. Rubio; it effectively removes Mastercard as an international rail in Iraq.',
    category: 'action',
    isKeyEvent: true,
    details: [
      'CBI order; effective June 1, 2025',
      'Mastercard suspended for Iraqi international transactions',
      'Redirected to U.S.-issued "Switch" card',
      'Follows May 28 Wilson-Steube letter and MA/Visa blockings',
      'Effective removal of MA as international rail in Iraq'
    ],
    source: 'Central Bank of Iraq / Research 2 reporting'
  },

  // Expanded April 2026 escalation (Research 2)
  {
    id: 'evt-053',
    date: 'April 17, 2026',
    dateSort: '2026-04-17',
    title: 'OFAC "Economic Fury" (sb0458): Seven Iraqi Militia Commanders Designated',
    description: 'U.S. Treasury/OFAC issues press release "Economic Fury Targets Iran-Backed Iraqi Militia Commanders" (sb0458), designating seven operational commanders of Iraq\'s four most lethal Iran-aligned militias (KH, AAH, KSS, HAN) pursuant to E.O. 13224. Secretary Scott Bessent: "We will not allow Iraq\'s terrorist militias, backed by Iran, to threaten American lives or interests. Those who enable these militias\' violence will be held accountable." Action comes 17 days after KH kidnapped U.S. journalist Shelly Kittleson in Baghdad (March 31), 3 days after the April 14, 2026 State Dept $10M bounty on KH Secretary-General al-Hamidawi, and follows the February 28, 2026 U.S.-Israeli "Operation Epic Fury" combat operations against Iran. Each commander designated with full passport details verified on OFAC SDN List.',
    category: 'regulatory',
    isKeyEvent: true,
    details: [
      'KH operational commanders: Ammar Jasim Kadhim Al Rammahi (DOB 16 Aug 1976, Passport B29874786); Radhwan Yousif Hameed Almohammed (DOB 23 Nov 1970; aliases Hajji Abdallah, Abu Abdallah Al-Tawil, Abu Ghadir, Abu Tahir; Passport A18208609); Hasan Dheyab Hamzah Hamzah (DOB 25 Feb 1977, Passport B10398022)',
      'AAH Salah ad-Din chief of operations: Safaa Adnan Jabbar Suwaed (DOB 01 May 1972, Passport A18386175)',
      'KSS commanders: Khalid Jameel Abed Albakhatra a.k.a. Khaled Bakhatri (DOB 01 Jan 1978, Passport A13438387); Saeed Kadhim Mukhamis a.k.a. Sameer Kadem Mghames, Said Kazim Mughamis (DOB 01 May 1972)',
      'HAN military trainer: Husham Hashim Jaythoom (DOB 25 Aug 1969, Passport A21616600)',
      'All designated pursuant to E.O. 13224 as SDGT; secondary sanctions risk section 1(b) E.O. 13886',
      'OFAC press release verified at home.treasury.gov/news/press-releases/sb0458',
      'SDN List entries verified at ofac.treasury.gov/recent-actions/20260417'
    ],
    source: 'Treasury press release sb0458 (verified home.treasury.gov)'
  },

  // ============================================================
  // VERIFIED APRIL 2026 KINETIC + DIPLOMATIC CONTEXT
  // ============================================================

  {
    id: 'evt-054',
    date: 'February 28, 2026',
    dateSort: '2026-02-28',
    title: 'Operation Epic Fury — U.S./Israeli Major Combat Operations Against Iran',
    description: 'President Trump announces the start of "major combat operations" against Iran in coordination with Israel, named "Operation Epic Fury" by the U.S. military. Announced early Saturday morning from Mar-a-Lago. Stated objectives: eliminate Iran\'s ballistic missile program, prevent Iran from obtaining a nuclear weapon, and ensure Iran\'s proxy groups (Hezbollah, Hamas, PMF-aligned Iraqi militias) can no longer destabilize the region. Trump called on the Iranian people to overthrow their government and on Iranian armed forces to surrender.',
    category: 'attack',
    isKeyEvent: true,
    details: [
      'Announced February 28, 2026 from Mar-a-Lago',
      'Operation name: "Operation Epic Fury" (distinct from April 17 OFAC "Economic Fury" action)',
      'Coordinated U.S.-Israeli strikes',
      'Stated goal: destroy Iran ballistic missiles, annihilate navy, end proxy capabilities',
      'Trump called for Iranian regime change',
      'Context for the April 17 OFAC sanctions and April 14 $10M al-Hamidawi bounty'
    ],
    source: 'The Spectrum; Foreign Policy; Air Force Magazine'
  },
  {
    id: 'evt-055',
    date: 'March 31, 2026',
    dateSort: '2026-03-31',
    title: 'Kata\'ib Hezbollah Kidnaps U.S. Journalist Shelly Kittleson in Baghdad',
    description: 'American freelance journalist Shelly Kittleson, 49, is kidnapped on Baghdad\'s al-Saadoun Street by Kata\'ib Hezbollah. Security video showed a silver car approach her as several people grabbed her and forced her into the vehicle. U.S. officials had warned Kittleson multiple times about specific threats from Iran-backed paramilitaries, most recently the Monday night before her abduction. Her name appeared on a KH kidnap/kill list targeting female journalists. Based in Rome; originally from Wisconsin; covered conflicts in Afghanistan, Iraq, and Syria; contributor to Al-Monitor, BBC World Service, Politico; 2017 Premio Caravella awardee.',
    category: 'attack',
    isKeyEvent: true,
    details: [
      'Kidnapped Baghdad, March 31, 2026',
      'Perpetrator: Kata\'ib Hezbollah (Iraqi security arrested suspect with KH ties)',
      'U.S. officials had repeatedly warned her (most recent: the Monday before)',
      'Kittleson\'s name on KH kidnap/kill list for female journalists',
      'Age 49; Wisconsin origin; Rome-based',
      'Triggered U.S.-FBI diplomatic coordination for release'
    ],
    source: 'PBS; ABC News; USA Today; Open the Magazine'
  },
  {
    id: 'evt-056',
    date: 'April 7, 2026',
    dateSort: '2026-04-07',
    title: 'Kittleson Released — "Leave the Country Immediately" Condition',
    description: 'Kata\'ib Hezbollah announces release of Shelly Kittleson with condition that "she leaves the country immediately." Group cites "appreciation of the patriotic stances" of Iraq\'s outgoing Prime Minister Mohammed Shia al-Sudani. Two militia officials indicate that in exchange for her release, several detained KH members would be freed. Release follows intense U.S.-FBI diplomatic pressure.',
    category: 'action',
    details: [
      'Released April 7, 2026 after 7 days',
      'Condition: immediate departure from Iraq',
      'KH cites outgoing PM Sudani\'s "patriotic stances"',
      'Militia officials indicated KH-member release as exchange',
      'U.S.-FBI pressure and State Dept engagement secured release'
    ],
    source: 'PBS; ABC News; USA Today'
  },
  {
    id: 'evt-057',
    date: 'April 14, 2026',
    dateSort: '2026-04-14',
    title: 'State Department $10M Rewards-for-Justice Bounty on KH Secretary-General al-Hamidawi',
    description: 'U.S. State Department\'s Rewards for Justice program announces a $10 million reward for information on Ahmad al-Hamidawi, Secretary-General of Kata\'ib Hezbollah. Al-Hamidawi, born 1974, has led KH since 2020 and was designated SDGT on February 26, 2020. Rewards for Justice cites his role in directing KH attacks on U.S. diplomatic facilities, including the December 2019 rocket attack near Kirkuk that killed a U.S. civilian contractor, and the March 31, 2026 kidnapping of Shelly Kittleson. "Al-Hamidawi has played a central role in planning attacks against US and Iraqi government security forces since 2007."',
    category: 'regulatory',
    isKeyEvent: true,
    details: [
      '$10 million Rewards for Justice bounty',
      'Target: Ahmad al-Hamidawi (KH Secretary-General since 2020; SDGT since Feb 26, 2020)',
      'Announced mid-April 2026 (~April 14)',
      'Explicitly cites Dec 2019 Kirkuk contractor killing + March 2026 Kittleson kidnapping',
      '"Played a central role in planning attacks against US and Iraqi government security forces since 2007"',
      'Precursor to April 17 "Economic Fury" OFAC action against KH operational commanders'
    ],
    source: 'State Dept Rewards for Justice; The National News; Alhurra; Caliber; AP'
  }
];

// Helper functions
export const getEventsByCategory = (category: TimelineCategory): TimelineEvent[] => {
  return timelineEvents.filter(e => e.category === category);
};

export const getKeyEvents = (): TimelineEvent[] => {
  return timelineEvents.filter(e => e.isKeyEvent);
};

export const getTimelineCategoryLabel = (category: TimelineCategory): string => {
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
