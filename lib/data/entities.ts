// Entity data for key players

export type EntityType = 
  | 'network' 
  | 'bank' 
  | 'militia' 
  | 'government' 
  | 'individual';

export interface EntityRelationship {
  targetId: string;
  type: string;
  description: string;
}

export interface Entity {
  id: string;
  name: string;
  shortName?: string;
  type: EntityType;
  designation?: string;
  description: string;
  role: string;
  keyFacts: string[];
  relationships: EntityRelationship[];
  financialExposure?: string;
  source?: string;
}

export const entities: Entity[] = [
  // Payment Networks
  {
    id: 'visa',
    name: 'Visa Inc.',
    type: 'network',
    description: 'Global payment technology company headquartered in San Francisco, California. Operates one of the world\'s largest payment processing networks.',
    role: 'Principal payment network that processed billions in Iraqi cross-border transactions despite Treasury warnings about militia exploitation.',
    keyFacts: [
      'Received Treasury warnings starting May 2023',
      'Launched Visa Direct in Iraq via FIB',
      'Blocked 70,000 Iraqi cards in April 2025',
      'Blocked 5,000 UAE merchants',
      '$102-143M estimated fees during "Gap Period"'
    ],
    relationships: [
      { targetId: 'treasury', type: 'regulated_by', description: 'Subject to Treasury/OFAC jurisdiction' },
      { targetId: 'fib', type: 'partnership', description: 'Visa Direct partner through First Iraqi Bank' },
      { targetId: 'yana', type: 'network', description: 'Iraqi issuing partner' }
    ],
    financialExposure: '$750M – $2.8B (per network)',
    source: 'WSJ Investigation'
  },
  {
    id: 'mastercard',
    name: 'Mastercard Incorporated',
    type: 'network',
    description: 'Global payment technology company headquartered in Purchase, New York. Second-largest payment processor globally.',
    role: 'Payment network that processed billions in Iraqi transactions despite conducting audit revealing zero compliance controls at partner banks.',
    keyFacts: [
      'Audited Yana in August 2023: found zero controls',
      'Reinstated Yana after "remediation"',
      'Blocked 100,000+ cards in March 2025',
      'Blocked 4,000 UAE merchants',
      '50,000+ Qi Cards blocked'
    ],
    relationships: [
      { targetId: 'treasury', type: 'regulated_by', description: 'Subject to Treasury/OFAC jurisdiction' },
      { targetId: 'yana', type: 'partnership', description: 'Iraqi acquiring/issuing partner' },
      { targetId: 'isc', type: 'network', description: 'Qi Card processing partner' }
    ],
    financialExposure: '$750M – $2.8B (per network)',
    source: 'WSJ Investigation'
  },

  // Iraqi Banks
  {
    id: 'yana',
    name: 'Yana Banking Services',
    type: 'bank',
    description: 'Erbil-based financial institution serving as Mastercard issuer and acquirer in Iraq. Subject of August 2023 compliance audit.',
    role: 'Mastercard partner bank with documented absence of sanctions screening and AML controls, enabling militia financing.',
    keyFacts: [
      'Zero customer risk ratings performed',
      'No evidence of sanctions screening',
      '"Ineffective" AML safeguards',
      'High Priority violations identified',
      'Reinstated after alleged remediation'
    ],
    relationships: [
      { targetId: 'mastercard', type: 'partnership', description: 'Mastercard issuer/acquirer partner' },
      { targetId: 'cbi', type: 'regulated_by', description: 'Regulated by Central Bank of Iraq' }
    ],
    source: 'Mastercard Audit'
  },
  {
    id: 'isc',
    name: 'International Smart Card (Qi Card)',
    shortName: 'Qi Card',
    type: 'bank',
    description: 'Iraqi payment card company managing government salary payments including for PMF militia members. Over 200,000 cards issued to militia forces.',
    role: 'Primary vehicle for militia salary card distribution, enabling organized exploitation of currency arbitrage.',
    keyFacts: [
      '5,000% transaction volume growth',
      '200,000+ cards to PMF members',
      'Founder Bahaa Abdul Hadi arrested 2020',
      'Targeted for sanctions in Wilson-Steube letter',
      '50,000+ cards blocked by Mastercard'
    ],
    relationships: [
      { targetId: 'mastercard', type: 'network', description: 'Mastercard-branded cards' },
      { targetId: 'pmf', type: 'services', description: 'Distributes salary cards to PMF members' },
      { targetId: 'cbi', type: 'regulated_by', description: 'Licensed by Central Bank of Iraq' }
    ],
    source: 'Wilson-Steube Letter'
  },
  {
    id: 'fib',
    name: 'First Iraqi Bank',
    shortName: 'FIB',
    type: 'bank',
    description: 'Baghdad-based bank that launched Visa Direct services in early 2024, which was immediately exploited for capital flight.',
    role: 'Visa Direct partner enabling $1.2 billion in transfers over 10 weeks before suspension.',
    keyFacts: [
      '$1.2B transferred in 10 weeks',
      'Single account: $5M/day transfers',
      'Suspended international services May 2025',
      'Visa Direct instant transfers exploited'
    ],
    relationships: [
      { targetId: 'visa', type: 'partnership', description: 'Visa Direct issuing partner' },
      { targetId: 'cbi', type: 'regulated_by', description: 'Regulated by Central Bank of Iraq' }
    ],
    source: 'WSJ Investigation'
  },
  {
    id: 'rafidain',
    name: 'Al-Rafidain Bank',
    type: 'bank',
    description: 'State-owned Iraqi bank with branch office inside PMF headquarters. Targeted for sanctions in Wilson-Steube letter.',
    role: 'Government bank providing direct banking access to PMF headquarters, closed October 2025 after OFAC designations.',
    keyFacts: [
      'Branch inside PMF headquarters',
      'State-owned institution',
      'Targeted in Wilson-Steube letter',
      'PMF branch closed October 2025'
    ],
    relationships: [
      { targetId: 'pmf', type: 'services', description: 'Branch office in PMF HQ' },
      { targetId: 'cbi', type: 'regulated_by', description: 'State-owned, CBI oversight' }
    ],
    source: 'Wilson-Steube Letter'
  },

  // Militias
  {
    id: 'pmf',
    name: 'Popular Mobilization Forces',
    shortName: 'PMF / Hashd al-Shaabi',
    type: 'militia',
    designation: 'Components include FTO-designated groups',
    description: 'Iraqi state-sanctioned umbrella organization of predominantly Shi\'ite militias. Components include U.S.-designated Foreign Terrorist Organizations.',
    role: 'Umbrella organization through which militia members received salary cards enabling currency arbitrage scheme.',
    keyFacts: [
      '200,000+ members with salary cards',
      'Includes FTO-designated groups (KH, AAH)',
      'Commanders seized subordinates\' cards',
      '"Ghost employee" padding documented',
      'Received CBI official rate access'
    ],
    relationships: [
      { targetId: 'kh', type: 'umbrella', description: 'KH operates under PMF umbrella' },
      { targetId: 'aah', type: 'umbrella', description: 'AAH operates under PMF umbrella' },
      { targetId: 'isc', type: 'services', description: 'Receives Qi Cards for salaries' },
      { targetId: 'irgc', type: 'support', description: 'Receives support from IRGC-QF' }
    ],
    source: 'Treasury / Wilson-Steube Letter'
  },
  {
    id: 'kh',
    name: 'Kata\'ib Hezbollah',
    shortName: 'KH',
    type: 'militia',
    designation: 'FTO (July 2009) / SDGT',
    description: 'Iran-backed Iraqi militia designated as Foreign Terrorist Organization since July 2009. Responsible for Tower 22 attack killing 3 U.S. service members.',
    role: 'Primary beneficiary of card scheme and perpetrator of Tower 22 attack during the "Gap Period."',
    keyFacts: [
      'FTO designated since July 2009',
      'Responsible for Tower 22 attack',
      '3 U.S. service members killed',
      'Explicitly named in Treasury briefings',
      'Benefited from $450M militia profits'
    ],
    relationships: [
      { targetId: 'pmf', type: 'member', description: 'Operates under PMF umbrella' },
      { targetId: 'irgc', type: 'support', description: 'Funded and directed by IRGC-QF' }
    ],
    source: 'Treasury / State Department'
  },
  {
    id: 'aah',
    name: 'Asa\'ib Ahl al-Haq',
    shortName: 'AAH',
    type: 'militia',
    designation: 'Sanctioned entity',
    description: 'Major Iran-backed Iraqi militia and political party with documented involvement in attacks against U.S. forces.',
    role: 'Key militia group benefiting from card scheme, explicitly named in Treasury briefings to networks.',
    keyFacts: [
      'Named in Fall 2023 Treasury briefing',
      'Major PMF component',
      'Political party representation',
      'IRGC-QF supported'
    ],
    relationships: [
      { targetId: 'pmf', type: 'member', description: 'Operates under PMF umbrella' },
      { targetId: 'irgc', type: 'support', description: 'Receives IRGC-QF support' }
    ],
    source: 'Treasury briefings'
  },
  {
    id: 'badr',
    name: 'Badr Organization',
    type: 'militia',
    designation: 'Iran-aligned militia/political party',
    description: 'One of the oldest and largest Iran-backed militias in Iraq, with significant political representation and economic interests.',
    role: 'Militia group explicitly named in Treasury briefings as exploiting card networks.',
    keyFacts: [
      'Named in Fall 2023 briefing',
      'Significant political power',
      'Economic interests in Iraq',
      'Long IRGC relationship'
    ],
    relationships: [
      { targetId: 'pmf', type: 'member', description: 'PMF component' },
      { targetId: 'irgc', type: 'support', description: 'Historical IRGC ties' }
    ],
    source: 'Treasury briefings'
  },

  // Government Entities
  {
    id: 'treasury',
    name: 'U.S. Department of the Treasury',
    type: 'government',
    description: 'U.S. government department responsible for financial sanctions enforcement, anti-money laundering policy, and regulation of payment systems.',
    role: 'Primary regulator that warned networks about militia financing and ultimately forced blocking action.',
    keyFacts: [
      'Issued warnings starting May 2023',
      'Fall 2023: specific militia briefing',
      '"Regular meetings" throughout 2024',
      'Requested 200,000+ card blocking May 2025',
      'October 2025 OFAC designations'
    ],
    relationships: [
      { targetId: 'visa', type: 'regulates', description: 'BSA/AML authority over payment networks' },
      { targetId: 'mastercard', type: 'regulates', description: 'BSA/AML authority over payment networks' },
      { targetId: 'nyfed', type: 'coordination', description: 'Coordinates on Iraqi financial policy' }
    ],
    source: 'WSJ Investigation'
  },
  {
    id: 'nyfed',
    name: 'Federal Reserve Bank of New York',
    type: 'government',
    description: 'Federal Reserve Bank that conducts dollar wire transfer oversight for Iraqi banks and coordinated early inquiries to payment networks.',
    role: 'Regulator that first questioned networks about transaction surge in May 2023.',
    keyFacts: [
      'Implemented wire transfer monitoring (Nov 2022)',
      'Rejected 80% of transfer requests initially',
      'Questioned networks May 2023',
      'Tracks Iraqi dollar flows'
    ],
    relationships: [
      { targetId: 'treasury', type: 'coordination', description: 'Coordinates Iraqi financial policy' },
      { targetId: 'cbi', type: 'oversight', description: 'Oversees dollar access for Iraqi banks' }
    ],
    source: 'WSJ / IFMAT'
  },
  {
    id: 'cbi',
    name: 'Central Bank of Iraq',
    type: 'government',
    description: 'Iraq\'s central bank that set official exchange rate policy enabling arbitrage and licensed Iraqi card issuers.',
    role: 'Enabled arbitrage by permitting card payments at official rate while licensing non-compliant banks.',
    keyFacts: [
      'Set 1,320 IQD/USD official rate',
      'Market rate ~1,600 IQD/USD',
      '21% arbitrage margin created',
      'Licensed Yana, ISC, FIB',
      'Held "regular meetings" on card issue'
    ],
    relationships: [
      { targetId: 'yana', type: 'regulates', description: 'Licensed Iraqi issuer' },
      { targetId: 'isc', type: 'regulates', description: 'Licensed payment provider' },
      { targetId: 'treasury', type: 'coordination', description: 'Coordinates with U.S. Treasury' }
    ],
    source: 'CBI Policy / WSJ'
  },
  {
    id: 'irgc',
    name: 'Islamic Revolutionary Guard Corps - Quds Force',
    shortName: 'IRGC-QF',
    type: 'militia',
    designation: 'FTO (April 2019) / SDGT',
    description: 'Iranian military organization designated as FTO since April 2019. Directs and funds Iraqi militia proxies including KH, AAH, and Badr.',
    role: 'Ultimate beneficiary of card scheme through proxy militia funding and access to dollars.',
    keyFacts: [
      'FTO designated April 2019',
      'Directs Iraqi militia proxies',
      'Benefits from dollar access',
      'October 2025 OFAC: "laundering money for IRGC-QF"'
    ],
    relationships: [
      { targetId: 'kh', type: 'directs', description: 'Funds and directs KH' },
      { targetId: 'aah', type: 'directs', description: 'Supports AAH' },
      { targetId: 'badr', type: 'supports', description: 'Historical relationship' }
    ],
    source: 'Treasury / State Department'
  },

  // Designated Individuals
  {
    id: 'ghulam',
    name: 'Ali Ghulam',
    type: 'individual',
    designation: 'OFAC Designated (October 2025)',
    description: 'Iraqi banking executive designated by OFAC for laundering money for IRGC-QF and Kata\'ib Hezbollah.',
    role: 'Key individual facilitating financial flows between Iraqi banking system and sanctioned entities.',
    keyFacts: [
      'Designated October 8, 2025',
      'Laundered money for IRGC-QF',
      'Facilitated KH financing'
    ],
    relationships: [
      { targetId: 'irgc', type: 'facilitates', description: 'Laundered money for IRGC-QF' },
      { targetId: 'kh', type: 'facilitates', description: 'Facilitated KH financing' }
    ],
    source: 'Treasury Press Release'
  },
  {
    id: 'ali-baidani',
    name: 'Ali Meften Al Baidani',
    type: 'individual',
    designation: 'OFAC Designated (October 2025)',
    description: 'Iraqi individual designated by OFAC for role in laundering money for militias and IRGC-QF.',
    role: 'Designated facilitator of militia financial operations.',
    keyFacts: [
      'Designated October 8, 2025',
      'Part of Baidani network',
      'Militia financing role'
    ],
    relationships: [
      { targetId: 'irgc', type: 'facilitates', description: 'Facilitated IRGC-QF' }
    ],
    source: 'Treasury Press Release'
  },

  // 2025-2026 ADDITIONS

  // PMF-run conglomerate and commercial fronts
  {
    id: 'muhandis-co',
    name: 'Muhandis General Company for Construction, Engineering, Mechanical, Agricultural, and Industrial Contracting',
    shortName: 'Muhandis General Co.',
    type: 'militia',
    designation: 'OFAC SDN (October 9, 2025) — SDGT/IFSR',
    description: 'Iraqi state-owned enterprise established February 26, 2023 and designated by OFAC as the economic arm of the Popular Mobilization Forces. Explicitly designated as "Linked To: KATA\'IB HIZBALLAH; Linked To: ISLAMIC REVOLUTIONARY GUARD CORPS (IRGC)-QODS FORCE".',
    role: 'Primary vehicle through which Kata\'ib Hezbollah diverts Iraqi government contracts to PMF/IRGC-QF. Controlled by Abu Fadak (Abd al-Aziz al-Muhammadawi), the PMF Chief of Staff and U.S.-designated KH leader.',
    keyFacts: [
      'SDN Entity ID: OFAC-55929',
      'Designated October 9, 2025 pursuant to E.O. 13224 (as amended)',
      'Established Feb 26, 2023 as holding company',
      'Controlled by Abu Fadak / KH leadership',
      'Uses sub-contracting to divert government contracts',
      'Named in May 28, 2025 Wilson-Steube letter to Sec. Rubio for FTO designation'
    ],
    relationships: [
      { targetId: 'kh', type: 'controlled_by', description: 'Under operational control of Kata\'ib Hizballah' },
      { targetId: 'irgc', type: 'facilitates', description: 'Materially supports IRGC-QF weapons supply' },
      { targetId: 'pmf', type: 'subsidiary', description: 'Economic arm of the PMF' },
      { targetId: 'baladna', type: 'partner', description: 'Baladna is commercial front for Muhandis' }
    ],
    financialExposure: 'SDN blocked; secondary sanctions risk',
    source: 'OFAC SDN List / Treasury press release sb0277'
  },
  {
    id: 'baladna',
    name: 'Baladna Agricultural Investments',
    shortName: 'Baladna',
    type: 'militia',
    designation: 'OFAC SDN (October 9, 2025) — SDGT',
    description: 'Iraqi agricultural company established April 25, 2022, designated by OFAC as a commercial front for Muhandis General Company and, through it, for Kata\'ib Hezbollah and the IRGC-Qods Force weapons supply network.',
    role: 'Provides agricultural-business cover for weapons smuggling and fund-diversion activities conducted on behalf of Muhandis General Company and its KH/IRGC-QF principals.',
    keyFacts: [
      'Designated October 9, 2025',
      'Established April 25, 2022',
      'Operates as commercial front for Muhandis General Co.',
      'Involved in Iranian weapons supply chain per Treasury',
      'Address: Baghdad, Iraq'
    ],
    relationships: [
      { targetId: 'muhandis-co', type: 'subsidiary', description: 'Commercial front for Muhandis General Co.' },
      { targetId: 'irgc', type: 'facilitates', description: 'Facilitates IRGC-QF weapons logistics' },
      { targetId: 'kh', type: 'facilitates', description: 'Indirect support to KH' }
    ],
    source: 'OFAC SDN List / Treasury press release sb0277'
  },

  // Elevated from mention: ISC parent corporate entity
  {
    id: 'isc-parent',
    name: 'International Smart Card Ltd. (ISC)',
    shortName: 'ISC',
    type: 'bank',
    description: 'Iraqi fintech holding company that operates the Qi Card payment system. Founded in 2007 as a public-private partnership between state-owned Rafidain/Rasheed banks and private investors. Handles approximately $500 million in daily payments across 1.3 million daily transactions for 7+ million cardholders.',
    role: 'Operator of the Qi Card system that processed PMF militia payroll and became the principal vehicle for militia currency-arbitrage cash-out. Parent corporate entity distinct from the Qi Card product itself.',
    keyFacts: [
      '~$500M/day payments volume',
      '1.3M+ transactions/day',
      '7M+ cardholders',
      'Founder/Chairman Bahaa Abdul Hadi (detained 2020, reinstated)',
      'Explicitly named in May 28, 2025 Wilson-Steube letter to Rubio',
      'Claims it "no longer provides any services to PMF" as of 2025',
      'Partner to Mastercard (primary) under prior arrangement'
    ],
    relationships: [
      { targetId: 'isc', type: 'subsidiary', description: 'Operator of the Qi Card product' },
      { targetId: 'mastercard', type: 'partner', description: 'Primary network partner; 50,000+ cards blocked Mar 2025' },
      { targetId: 'rafidain', type: 'partner', description: 'Co-founding state bank shareholder' },
      { targetId: 'pmf', type: 'services', description: 'Historically distributed PMF salary cards' }
    ],
    source: 'IBTimes / WSJ / Wilson-Steube Letter'
  },

  // Visa partner issuer with Shrine-of-Al-Abbas ties
  {
    id: 'al-saqi',
    name: 'Al Saqi Electronic Payment Company',
    shortName: 'Al Saqi',
    type: 'bank',
    designation: 'U.S. Treasury blacklisted (2025)',
    description: 'Iraqi card issuer partnered with Visa, affiliated with the Holy Shrine of Al Abbas in Karbala — a primary destination for Iranian pilgrims. Treasury blacklisted Al Saqi as one of three Iraqi card issuers suspected of militia ties.',
    role: 'Visa-partner issuer that Treasury identified as carrying militia-linked transactional flows. Visa stopped processing Al Saqi cards in 2025; however, Al Saqi\'s public website reportedly continued displaying Visa logos post-blocking.',
    keyFacts: [
      'Visa-partner issuer',
      'Affiliated with Holy Shrine of Al Abbas, Karbala',
      'Treasury-blacklisted among three Iraqi card issuers (2025)',
      'Visa reportedly stopped processing Al Saqi cards',
      'Al Saqi website still featured Visa logos as of mid-2025',
      'Did not respond to WSJ inquiries'
    ],
    relationships: [
      { targetId: 'visa', type: 'partner', description: 'Former Visa-branded issuer (stopped processing 2025)' },
      { targetId: 'cbi', type: 'regulated_by', description: 'Licensed Iraqi card issuer' }
    ],
    source: 'WSJ / Jerusalem Post'
  },

  // FTO-upgraded PMF militias (September 17, 2025)
  {
    id: 'hhn',
    name: 'Harakat Hezbollah al-Nujaba',
    shortName: 'HHN',
    type: 'militia',
    designation: 'FTO (September 17, 2025) / SDGT (2019)',
    description: 'Iran-backed Iraqi militia founded in 2013, led by Akram al-Kaabi. Upgraded from SDGT to full Foreign Terrorist Organization status by the U.S. State Department on September 17, 2025.',
    role: 'PMF component and member of the Islamic Resistance in Iraq umbrella that has conducted attacks on U.S. forces in Iraq and Syria. FTO status satisfies the statutory predicate under 18 U.S.C. § 2333 for civil ATA claims.',
    keyFacts: [
      'FTO designation upgraded Sep 17, 2025 (previously SDGT since 2019)',
      'Founded 2013; led by Akram al-Kaabi',
      'PMF component and IRI umbrella member',
      'Operational in Iraq and Syria',
      'Previously linked to operations in the Tower 22 period'
    ],
    relationships: [
      { targetId: 'pmf', type: 'subsidiary', description: 'PMF brigade under the umbrella' },
      { targetId: 'irgc', type: 'controlled_by', description: 'Iran-backed and IRGC-QF supported' },
      { targetId: 'kh', type: 'affiliate', description: 'IRI co-belligerent' }
    ],
    source: 'OFAC Recent Actions 20250917 / FDD LWJ'
  },
  {
    id: 'ansar-awfiya',
    name: 'Harakat Ansar Allah al-Awfiya (19th PMF Brigade)',
    shortName: 'Ansar Allah al-Awfiya',
    type: 'militia',
    designation: 'FTO (Sep 17, 2025) / State Terrorist Designation (Jun 17, 2024) for Tower 22',
    description: 'PMF 19th Brigade designated by the U.S. State Department on June 17, 2024 as a terrorist organization for its involvement in the January 28, 2024 Tower 22 drone attack. Upgraded to FTO on September 17, 2025.',
    role: 'Direct operational nexus to the Tower 22 attack that killed three U.S. service members during the Gap Period. Its 2024 terrorist designation eliminates attribution disputes for any §2333 ATA action citing Tower 22 as the predicate act.',
    keyFacts: [
      'State Dept terrorist designation June 17, 2024 for Tower 22 involvement',
      'FTO upgrade Sep 17, 2025',
      'PMF 19th Brigade',
      'Member of the Islamic Resistance in Iraq',
      'April 2026 LWJ: explicitly directs donors to Mastercard-routed fundraising',
      'Tower 22 attack killed Sgt. Rivers, Spc. Sanders, Spc. Moffett'
    ],
    relationships: [
      { targetId: 'pmf', type: 'subsidiary', description: 'PMF 19th Brigade' },
      { targetId: 'irgc', type: 'controlled_by', description: 'Iran-backed, IRGC-QF supported' },
      { targetId: 'mastercard', type: 'affiliate', description: 'April 2026: explicitly funneled donor contributions via Mastercard' }
    ],
    source: 'State Dept / OFAC 20250917 / FDD LWJ'
  },
  {
    id: 'ksas',
    name: 'Kata\'ib Sayyid al-Shuhada',
    shortName: 'KSS',
    type: 'militia',
    designation: 'FTO (September 17, 2025) / SDGT',
    description: 'Iran-backed Iraqi militia established May 2013, upgraded from SDGT to full Foreign Terrorist Organization status on September 17, 2025.',
    role: 'PMF and IRI component that has conducted operations against U.S. and Israeli interests. FTO status enables 18 U.S.C. § 2333 civil actions predicated on its attacks.',
    keyFacts: [
      'FTO designation Sep 17, 2025',
      'Established May 2013',
      'Iraq- and Syria-based',
      'PMF component and IRI umbrella member'
    ],
    relationships: [
      { targetId: 'pmf', type: 'subsidiary', description: 'PMF component' },
      { targetId: 'irgc', type: 'controlled_by', description: 'Iran-backed' }
    ],
    source: 'OFAC Recent Actions 20250917'
  },
  {
    id: 'kia-militia',
    name: 'Kata\'ib al-Imam Ali',
    shortName: 'KIA (militia)',
    type: 'militia',
    designation: 'FTO (September 17, 2025) / SDGT (June 2025)',
    description: 'Iran-backed Iraqi militia (Imam Ali Brigades) established June 2014; secretary general Shibl al-Zaydi designated SDGT 2018 for acting on behalf of IRGC-QF. Upgraded to FTO on September 17, 2025.',
    role: 'PMF and IRI component trained by Iran and Hezbollah; engaged in attacks on U.S. personnel and smuggling of Iranian oil.',
    keyFacts: [
      'FTO designation Sep 17, 2025',
      'Leader Shibl al-Zaydi SDGT since 2018',
      'Zaydi served as IRGC-QF/sectarian-group financial coordinator',
      'Established June 2014',
      'Trained by Iran and Hezbollah'
    ],
    relationships: [
      { targetId: 'pmf', type: 'subsidiary', description: 'PMF component' },
      { targetId: 'irgc', type: 'controlled_by', description: 'Iran-backed' }
    ],
    source: 'OFAC Recent Actions 20250917 / FDD LWJ'
  },

  // Independent monitor & alt payment rail
  {
    id: 'k2-intel',
    name: 'K2 Integrity',
    shortName: 'K2',
    type: 'government',
    description: 'New York-based financial-crimes consulting firm retained by the Central Bank of Iraq to monitor Iraqi card issuers and payment flows following the scheme\'s exposure.',
    role: 'Independent monitor embedded at the CBI to enforce the $300M/month cross-border cap and $5,000/cardholder limit. Potential fact-witness on what the networks knew and when.',
    keyFacts: [
      'Retained by Central Bank of Iraq',
      'Monitors Iraqi card issuer compliance',
      'Enforces CBI cross-border controls',
      'Potential fact-witness in any subsequent civil action',
      'Sister organization to broader K2 Integrity financial-crimes practice'
    ],
    relationships: [
      { targetId: 'cbi', type: 'partner', description: 'Engaged as independent monitor' },
      { targetId: 'treasury', type: 'partner', description: 'Coordinates with U.S. Treasury guidance' }
    ],
    source: 'WSJ / Jerusalem Post'
  },
  {
    id: 'zain-cash',
    name: 'Zain Cash',
    shortName: 'Zain Cash',
    type: 'bank',
    description: 'Iraqi mobile-wallet/e-payment service. Per the April 11, 2026 FDD Long War Journal report, Zain Cash appears alongside Mastercard in PMF-aligned militia fundraising instructions directing funds to Iran and Hezbollah.',
    role: 'Alternative/parallel payment rail used by post-blocking militia fundraising campaigns. Demonstrates that the Visa/MA ecosystem remains one of the preferred rails even as alternatives emerge.',
    keyFacts: [
      'Iraqi e-wallet / mobile payment service',
      'Listed alongside Mastercard in April 2026 militia donation instructions',
      'Used in "Affection and Loyalty Campaign" by PMF 19th Brigade',
      'Post-2025 adaptation of the scheme'
    ],
    relationships: [
      { targetId: 'ansar-awfiya', type: 'services', description: 'Accepts militia fundraising contributions' },
      { targetId: 'mastercard', type: 'affiliate', description: 'Co-listed donation channel in militia campaigns' }
    ],
    source: 'FDD Long War Journal (Apr 11, 2026)'
  },

  // ============================================================
  // RESEARCH FILES INTEGRATION (Round 2) - expanded individuals,
  // militia leaders, oil/shipping, comparators, officials, facades
  // ============================================================

  // Visa / Mastercard senior leadership - Research 1
  {
    id: 'miebach',
    name: 'Michael Miebach',
    type: 'individual',
    designation: 'Mastercard CEO (2021-present)',
    description: 'Chief Executive Officer of Mastercard Incorporated since January 2021, previously President. Under his tenure Mastercard marketed extensive AI/AML compliance capabilities while (per Yana audit) failing to detect a 2,900% Iraqi surge and then delaying enforcement for 22 months.',
    role: 'Top-of-house corporate responsibility for Mastercard\'s compliance posture during the entire Gap Period; has never publicly commented on Iraq, the Yana audit, or the 100,000+ card blocking.',
    keyFacts: [
      'CEO since January 2021',
      'Never publicly commented on Iraq / Yana / card blocking',
      'Keynoted November 13, 2024 Investment Community Meeting',
      'Ultimately accountable for Section 13(r) disclosure decisions',
      'Target of congressional pressure (Wilson X posts)'
    ],
    relationships: [
      { targetId: 'mastercard', type: 'leads', description: 'CEO' }
    ],
    source: 'Mastercard corporate / WSJ'
  },
  {
    id: 'mcinerney',
    name: 'Ryan McInerney',
    type: 'individual',
    designation: 'Visa CEO (2023-present)',
    description: 'Chief Executive Officer of Visa Inc. since February 2023 — literally three months before the Federal Reserve Bank of New York and Treasury began questioning Visa about the Iraqi transaction surge. Has never publicly commented on Iraq.',
    role: 'Took over as CEO at the precise moment the Iraq surge was peaking; responsible for executive-level response during the entire 22-month Gap Period. On October 28, 2025 Q4 FY2025 call celebrated Visa Scam Disruption without mentioning Iraq.',
    keyFacts: [
      'CEO since February 2023 (mid-surge)',
      'Never publicly commented on Iraq',
      'Hosted Feb 20, 2025 Investor Day — Iraq not discussed',
      'Q4 FY2025 call (Oct 28, 2025): Scam Disruption celebrated, Iraq unmentioned',
      'Target of Wilson June 3, 2025 "funding Iran-backed Iraqi terrorists" X post'
    ],
    relationships: [
      { targetId: 'visa', type: 'leads', description: 'CEO' }
    ],
    source: 'Visa corporate / WSJ'
  },
  {
    id: 'mehra',
    name: 'Sachin Mehra',
    type: 'individual',
    designation: 'Mastercard Chief Financial Officer',
    description: 'CFO of Mastercard. On May 1, 2025 Q1 earnings call (six weeks after Mastercard blocked 100,000+ Iraqi cards) told analysts that "cross-border travel growth broadly remained strong, but we are seeing some moderation in select markets in the Middle East and Africa as they come off recent periods of extremely high growth." On July 31, 2025 Q2 call described "enforcement of Mastercard rules" as a driver of the same moderation — the closest Mastercard has come to acknowledging the blocking action on any investor call.',
    role: 'Source of the "euphemistic disclosures" that Research 1 contrasts with Western Union\'s forthright Q2 2023 naming of Iraq.',
    keyFacts: [
      'Q1 2025 call: "moderation in select Middle East and Africa markets"',
      'Q2 2025 call: "enforcement of Mastercard rules"',
      'Never named Iraq directly',
      'Euphemism contrast with WU\'s 10+ Iraq mentions July 2023',
      'Potential SEC disclosure-adequacy issue'
    ],
    relationships: [
      { targetId: 'mastercard', type: 'leads', description: 'CFO' }
    ],
    source: 'Mastercard Q1/Q2 2025 earnings call transcripts'
  },
  {
    id: 'bhalla',
    name: 'Ajay Bhalla',
    type: 'individual',
    designation: 'Mastercard President, Cyber and Intelligence',
    description: 'Mastercard President of Cyber and Intelligence. Principal spokesperson for the February 1, 2024 Decision Intelligence Pro press release — issued mid-scheme — claiming generative-AI enhancements boost fraud detection "on average by 20% and as high as 300% in some instances" while scanning "an unprecedented one trillion data points" in "less than 50 milliseconds."',
    role: 'Corporate face of the AI/compliance marketing claims that the Yana audit directly contradicts. Every marketing statement attributable to Bhalla during 2024-2025 becomes potentially usable as admission-against-interest evidence.',
    keyFacts: [
      'Quoted Feb 1, 2024 Decision Intelligence Pro release: "transforming the speed and accuracy of our anti-fraud solutions"',
      'May 2024: claim of 300% speed-up in compromised-merchant identification',
      'Public face of Mastercard\'s AI fraud-prevention narrative during scheme',
      'Statements potentially usable as party admission'
    ],
    relationships: [
      { targetId: 'mastercard', type: 'leads', description: 'President Cyber and Intelligence' }
    ],
    source: 'Mastercard press releases Feb 1 and May 2024'
  },
  {
    id: 'fabara',
    name: 'Paul Fabara',
    type: 'individual',
    designation: 'Visa Chief Risk Officer',
    description: 'Visa Chief Risk Officer. Principal spokesperson for the May 7, 2024 VAAI Score launch, quoted as saying issuers can make "more informed decisions on when to block a transaction" using 15 billion VisaNet transactions as training data, a 20-millisecond risk score, and an 85% false-positive reduction.',
    role: 'Visa\'s top risk executive during the Gap Period. Public AI/risk-scoring claims attributable to him compound the compliance-gap narrative. Responsible for VIRP (launched May 1, 2023, same month as Treasury inquiry).',
    keyFacts: [
      'Chief Risk Officer',
      'VAAI Score launch spokesperson (May 7, 2024)',
      'Owns the Visa Integrity Risk Program (VIRP) that launched May 1, 2023',
      'Oversees risk function during 22-month Gap Period'
    ],
    relationships: [
      { targetId: 'visa', type: 'leads', description: 'Chief Risk Officer' }
    ],
    source: 'Visa press releases / visa.com'
  },
  {
    id: 'eisen',
    name: 'Seth Eisen',
    type: 'individual',
    designation: 'Mastercard SVP Communications',
    description: 'Senior Vice President of Communications at Mastercard. Source of the entire on-record Mastercard response to the WSJ investigation (May 31, 2025): three statements addressing the 22-month delay, Yana Banking Services failures, and the March 2025 enforcement wave. No follow-up statements have appeared in any major outlet through April 2026.',
    role: 'Corporate communications signatory-of-record for Mastercard\'s public stance on the militia card scheme.',
    keyFacts: [
      'Three on-record quotes in May 31, 2025 WSJ article',
      '"Ongoing government engagement is built into our programs..."',
      '"We reserve the right to revisit any allegation to ensure this compliance."',
      '"Information about Qi Card and International Smart Card... was compiled with existing information and actioned accordingly"',
      'No follow-up statements through April 2026'
    ],
    relationships: [
      { targetId: 'mastercard', type: 'leads', description: 'SVP Communications' }
    ],
    source: 'WSJ May 31, 2025 David S. Cloud investigation'
  },
  {
    id: 'cook',
    name: 'Fletcher Cook',
    type: 'individual',
    designation: 'Visa Spokesperson',
    description: 'Visa spokesperson (identified as such in the WSJ; referred to as "spokeswoman" in syndicated Jerusalem Post/Yahoo versions, indicating possible gender-identity editorial variation). Offered the single on-record Visa statement in response to the WSJ investigation.',
    role: 'Sole Visa public voice on the militia card scheme.',
    keyFacts: [
      'Single on-record Visa quote in May 31, 2025 WSJ article',
      '"Central to our operations is a commitment to ensuring that transactions on our network do not violate the law..."',
      '"When we identify or are alerted to any suspicious or illegal activity, we take action"',
      'Neither Visa nor First Iraqi Bank responded to WSJ on Visa Direct questions'
    ],
    relationships: [
      { targetId: 'visa', type: 'leads', description: 'Spokesperson' }
    ],
    source: 'WSJ May 31, 2025'
  },
  {
    id: 'kirkpatrick',
    name: 'Linda Kirkpatrick',
    type: 'individual',
    designation: 'Mastercard President, Americas',
    description: 'Mastercard President of the Americas. Testified under oath before the Senate Judiciary Committee on November 19, 2024 (Chair Durbin) at the Credit Card Competition Act hearing; Iraq, Iran, and the card scheme were NOT discussed at that hearing.',
    role: 'Only Mastercard senior executive to have testified under oath in Congress during the Gap Period. Creates a discovery point about what was and was not asked.',
    keyFacts: [
      'Testified Senate Judiciary Nov 19, 2024',
      'Iraq/Iran NOT discussed at hearing',
      'Under-oath testimony creates record',
      'President Americas since 2020'
    ],
    relationships: [
      { targetId: 'mastercard', type: 'leads', description: 'President Americas' }
    ],
    source: 'judiciary.senate.gov hearing record'
  },
  {
    id: 'sheedy',
    name: 'Bill Sheedy',
    type: 'individual',
    designation: 'Visa Senior Advisor to the CEO',
    description: 'Senior Advisor to the CEO of Visa Inc. Testified under oath before the Senate Judiciary Committee on November 19, 2024 alongside Linda Kirkpatrick. Iraq/Iran was not discussed.',
    role: 'Only Visa senior executive to have testified under oath in Congress during the Gap Period.',
    keyFacts: [
      'Testified Senate Judiciary Nov 19, 2024',
      'Iraq/Iran NOT discussed at hearing',
      'Under-oath testimony creates record'
    ],
    relationships: [
      { targetId: 'visa', type: 'leads', description: 'Senior Advisor to CEO' }
    ],
    source: 'judiciary.senate.gov hearing record'
  },
  {
    id: 'mirfin',
    name: 'James Mirfin',
    type: 'individual',
    designation: 'Visa (Global Head of Risk & Identity Solutions)',
    description: 'Visa executive who in a July 26, 2024 CNBC interview claimed "We do about 300 billion transactions a year. Every single one of those has been processed by AI. It\'s looking at a range of different attributes and we\'re evaluating every single transaction."',
    role: 'On-camera attributable claim that Visa\'s AI evaluates every transaction — directly usable as admission-against-interest evidence that the 2,900% Iraqi surge should have been detected.',
    keyFacts: [
      'CNBC interview July 26, 2024',
      '"Every single transaction processed by AI"',
      '300 billion transactions/year',
      'Public claim directly contradicted by Iraq surge going undetected'
    ],
    relationships: [
      { targetId: 'visa', type: 'leads', description: 'Global Head of Risk & Identity Solutions' }
    ],
    source: 'CNBC interview July 26, 2024'
  },
  {
    id: 'al-kelly',
    name: 'Al Kelly',
    type: 'individual',
    designation: 'Visa CEO (2016-2023) — former',
    description: 'Former CEO of Visa Inc. On the October 25, 2022 Q4 FY2022 earnings call — months before the Iraqi scheme exploded — touted "the first digital bank in Iraq, Visa Iraq Islamic Bank, seeking to digitize payments and drive a cashless society through Visa credit, debit, and prepaid card issuance across their 400,000 customers." A pre-surge artifact that demonstrates Visa\'s commercial embrace of the Iraqi market.',
    role: 'Pre-surge Visa CEO whose Oct 2022 public celebration of Iraq banking expansion sits in ironic contrast to the subsequent scheme.',
    keyFacts: [
      'Visa CEO 2016 - Feb 2023',
      'Q4 FY2022 call (Oct 25, 2022): touted "Visa Iraq Islamic Bank"',
      'First Iraqi digital bank on Visa rails',
      'Pre-surge record of Iraqi growth ambition'
    ],
    relationships: [
      { targetId: 'visa', type: 'leads', description: 'CEO 2016-2023' }
    ],
    source: 'Visa Q4 FY2022 earnings call transcript'
  },

  // Militia leadership - Research 4
  {
    id: 'abu-fadak',
    name: 'Abu Fadak / Abd al-Aziz al-Muhammadawi',
    shortName: 'Abu Fadak',
    type: 'individual',
    designation: 'U.S.-designated; PMF Chief of Staff + KH leader',
    description: 'Kata\'ib Hezbollah leader who simultaneously serves as Chief of Staff of the state-funded Popular Mobilization Commission. Per October 2025 OFAC designation, controls Muhandis General Company — the PMF-run commercial conglomerate laundering Iraqi government contracts for KH and IRGC-QF.',
    role: 'Dual-hatted state/proxy commander; the institutional fusion of KH with the Iraqi security apparatus that makes the PMF\'s $2.5B annual budget a potential conduit to designated terror groups.',
    keyFacts: [
      'KH leader since Abu Mahdi al-Muhandis\'s Jan 2020 U.S. killing',
      'PMF Chief of Staff (state position)',
      'Controls Muhandis General Company (Oct 9, 2025 SDN)',
      'U.S.-designated individual',
      'PMF has $2.5B annual state budget'
    ],
    relationships: [
      { targetId: 'kh', type: 'leads', description: 'KH leader' },
      { targetId: 'pmf', type: 'leads', description: 'PMF Chief of Staff' },
      { targetId: 'muhandis-co', type: 'controls', description: 'Controls PMF commercial conglomerate' },
      { targetId: 'irgc', type: 'controlled_by', description: 'Iran-aligned' }
    ],
    source: 'Treasury press release sb0277 (Oct 9, 2025)'
  },
  {
    id: 'al-hamidawi',
    name: 'Ahmad Mohsen Faraj al-Hamidawi (Abu Hussein)',
    shortName: 'al-Hamidawi',
    type: 'individual',
    designation: 'KH Secretary-General',
    description: 'Kata\'ib Hezbollah Secretary-General. On January 30, 2024 — two days after the Tower 22 attack — announced via KH\'s "Kaf" Telegram channel the suspension of KH military operations against U.S. forces to "prevent embarrassment to the Iraqi government." Publicly distanced KH from Tehran.',
    role: 'Political face of KH; his January 30, 2024 suspension announcement is the single most explicit contemporaneous attribution of Tower 22 to KH by KH itself.',
    keyFacts: [
      'KH Secretary-General (public title)',
      'Kunya: Abu Hussein',
      'Jan 30, 2024 public suspension announcement',
      '"Prevent embarrassment to the Iraqi government"',
      'Publicly distanced KH from Iran'
    ],
    relationships: [
      { targetId: 'kh', type: 'leads', description: 'KH Secretary-General' }
    ],
    source: 'Washington Institute Militia Spotlight / KH Telegram "Kaf" channel'
  },
  {
    id: 'askari',
    name: 'Abu Ali al-Askari',
    shortName: 'al-Askari',
    type: 'individual',
    designation: 'KH Security Chief',
    description: 'Kata\'ib Hezbollah security chief. On April 1, 2024 — post-Tower 22 — threatened to arm a "Jordanian Islamic Resistance" with 12,000 fighters, signaling continued operational posture despite al-Hamidawi\'s suspension announcement.',
    role: 'Operational-security counterpart to al-Hamidawi; represents KH\'s internal hawkish faction.',
    keyFacts: [
      'KH security chief',
      'April 1, 2024 "Jordanian Islamic Resistance" threat',
      'Represents continued operational posture post-suspension'
    ],
    relationships: [
      { targetId: 'kh', type: 'leads', description: 'KH security chief' }
    ],
    source: 'Washington Institute Militia Spotlight'
  },
  {
    id: 'abu-baqir',
    name: 'Wissam Mohammed al-Saadi (Abu Baqir)',
    shortName: 'Abu Baqir al-Saadi',
    type: 'individual',
    designation: 'KIA Feb 7, 2024 — KH drone-operations chief',
    description: 'Senior Kata\'ib Hezbollah commander who ran KH drone operations in Syria and had been a former bodyguard to KH founder Abu Mahdi al-Muhandis (killed alongside Soleimani in January 2020). Killed February 7, 2024 in a Hellfire strike on an SUV in the Mashtal neighborhood of eastern Baghdad, one week after Tower 22, alongside second KH commander Arkan al-Alaywi. The strike functionally ended the February 2024 operational tempo.',
    role: 'Principal KH drone-operations commander during the October 2023 - February 2024 campaign; his killing is the single most prominent U.S. retaliation for Tower 22.',
    keyFacts: [
      'KH drone-operations chief for Syria theater',
      'Former bodyguard to Abu Mahdi al-Muhandis',
      'KIA Feb 7, 2024 — Hellfire from U.S. drone',
      'Struck in SUV, Mashtal, eastern Baghdad',
      'Second KH commander Arkan al-Alaywi killed same strike',
      'Iraqi government condemned strike (not notified in advance)'
    ],
    relationships: [
      { targetId: 'kh', type: 'leads', description: 'KH drone-ops chief' }
    ],
    source: 'CENTCOM press release Feb 7, 2024 / Washington Institute'
  },

  // April 17, 2026 OFAC commander designations (sb0458) - Research 2
  {
    id: 'rammahi',
    name: 'Ammar Jasim Kadhim Al Rammahi',
    type: 'individual',
    designation: 'OFAC SDN (April 17, 2026) — KH operational commander',
    description: 'Kata\'ib Hezbollah operational commander designated by OFAC April 17, 2026 (sb0458) as directing attack planning and generating targeting data for strikes on U.S. personnel and facilities.',
    role: 'Tip-of-spear operational commander; represents the 2026 U.S. pivot from institutional-layer sanctions to individual trigger-pullers.',
    keyFacts: [
      'SDN designated April 17, 2026',
      'E.O. 13224 authority',
      'KH operational commander',
      'Directs attack planning on U.S. forces'
    ],
    relationships: [
      { targetId: 'kh', type: 'leads', description: 'KH operational commander' }
    ],
    source: 'Treasury press release sb0458'
  },
  {
    id: 'almohammed',
    name: 'Radhwan Yousif Hameed Almohammed',
    type: 'individual',
    designation: 'OFAC SDN (April 17, 2026) — KH operational commander',
    description: 'Kata\'ib Hezbollah operational commander designated by OFAC April 17, 2026.',
    role: 'KH attack-planning commander.',
    keyFacts: [
      'SDN designated April 17, 2026',
      'KH operational commander'
    ],
    relationships: [
      { targetId: 'kh', type: 'leads', description: 'KH operational commander' }
    ],
    source: 'Treasury press release sb0458'
  },
  {
    id: 'hamzah',
    name: 'Hasan Dheyab Hamzah Hamzah',
    type: 'individual',
    designation: 'OFAC SDN (April 17, 2026) — KH operational commander',
    description: 'Kata\'ib Hezbollah operational commander designated by OFAC April 17, 2026.',
    role: 'KH attack-planning commander.',
    keyFacts: [
      'SDN designated April 17, 2026',
      'KH operational commander'
    ],
    relationships: [
      { targetId: 'kh', type: 'leads', description: 'KH operational commander' }
    ],
    source: 'Treasury press release sb0458'
  },
  {
    id: 'suwaed',
    name: 'Safaa Adnan Jabbar Suwaed',
    type: 'individual',
    designation: 'OFAC SDN (April 17, 2026) — AAH Chief of Operations, Salah ad-Din',
    description: 'Asa\'ib Ahl al-Haqq Chief of Operations for Salah ad-Din Province. Per Treasury, AAH used Iranian drones to attack U.S. and Coalition forces in northern Iraq as of March 2026.',
    role: 'Current-operations AAH commander; 2026 designation ties the group to fresh attack activity.',
    keyFacts: [
      'SDN designated April 17, 2026',
      'AAH Chief of Operations, Salah ad-Din',
      'Iranian drones used to attack U.S. forces March 2026'
    ],
    relationships: [
      { targetId: 'aah', type: 'leads', description: 'AAH Chief of Operations, Salah ad-Din' }
    ],
    source: 'Treasury press release sb0458'
  },
  {
    id: 'albakhatra',
    name: 'Khalid Jameel Abed Albakhatra',
    type: 'individual',
    designation: 'OFAC SDN (April 17, 2026) — KSS commander',
    description: 'Kata\'ib Sayyid al-Shuhada commander designated by OFAC April 17, 2026.',
    role: 'KSS operational leader.',
    keyFacts: [
      'SDN designated April 17, 2026',
      'KSS commander'
    ],
    relationships: [
      { targetId: 'ksas', type: 'leads', description: 'KSS commander' }
    ],
    source: 'Treasury press release sb0458'
  },
  {
    id: 'mukhamis',
    name: 'Saeed Kadhim Mukhamis',
    type: 'individual',
    designation: 'OFAC SDN (April 17, 2026) — KSS commander',
    description: 'Kata\'ib Sayyid al-Shuhada commander designated by OFAC April 17, 2026.',
    role: 'KSS operational leader.',
    keyFacts: [
      'SDN designated April 17, 2026',
      'KSS commander'
    ],
    relationships: [
      { targetId: 'ksas', type: 'leads', description: 'KSS commander' }
    ],
    source: 'Treasury press release sb0458'
  },
  {
    id: 'jaythoom',
    name: 'Husham Hashim Jaythoom',
    type: 'individual',
    designation: 'OFAC SDN (April 17, 2026) — HAN military trainer',
    description: 'Harakat al-Nujaba military trainer designated by OFAC April 17, 2026.',
    role: 'HAN training-cadre; shapes operational quality of HAN fighters who have repeatedly attacked U.S. positions.',
    keyFacts: [
      'SDN designated April 17, 2026',
      'HAN military trainer'
    ],
    relationships: [
      { targetId: 'hhn', type: 'leads', description: 'HAN military trainer' }
    ],
    source: 'Treasury press release sb0458'
  },

  // Oil / shipping networks - Research 2
  {
    id: 'said-network',
    name: 'Salim Ahmed Said Oil Network',
    shortName: 'Said Network',
    type: 'bank',
    designation: 'OFAC SDN (July 3, 2025) — sb0188',
    description: 'Iraqi-British national Salim Ahmed Said covertly controls UAE-based VS Tankers FZE (formerly Al-Iraqia Shipping Services & Oil Trading FZE / "AISSOT") and an oil-smuggling network that has sold Iranian oil disguised as or blended with Iraqi oil since at least 2020, generating billions in revenue. Scheme involves blending Iranian crude at storage facilities in Khor al-Zubayr, Iraq and exporting it under Iraqi cover using forged documentation. Bribes Iraqi parliamentarians and officials for forged origin certificates. Proceeds partly funded the IRGC-Quds Force.',
    role: 'Early-2025 oil-smuggling leg of the Iran-through-Iraq maximum-pressure enforcement drumbeat. Sister network to Samarra\'i; together they constitute the apex of the Iran-through-Iraq oil-laundering architecture Treasury has dismantled since July 2025.',
    keyFacts: [
      'Designated July 3, 2025 (OFAC press release sb0188)',
      'Iraqi-British dual national',
      'Covertly controls VS Tankers FZE (formerly AISSOT)',
      'Additional sanctioned entities: VS Oil Terminal FZE, VS Petroleum DMCC, Rhine Shipping DMCC, UK-based companies',
      'Marshall Islands-flagged tanker DIJILAH sanctioned',
      'Blends Iranian crude at Khor al-Zubayr, Iraq',
      'Bribes Iraqi parliamentarians for forged origin certificates',
      'Greek shipping partners (Lentoudis/Evalend Shipping, Perogiannakis/Petrochem General Management) chartered vessels for nearly a decade',
      'Proceeds partly funded IRGC-QF'
    ],
    relationships: [
      { targetId: 'irgc', type: 'facilitates', description: 'Proceeds partly fund IRGC-QF' }
    ],
    financialExposure: 'Billions in oil revenue (per Treasury)',
    source: 'Treasury press release sb0188; Reuters; Iraq Business News; ot.gr'
  },
  {
    id: 'samarrai-network',
    name: 'Waleed al-Samarra\'i Shipping Network',
    shortName: 'Samarra\'i Network',
    type: 'bank',
    designation: 'OFAC SDN (September 2, 2025) — sb0233',
    description: 'UAE-based Iraqi-Kittitian businessman Waleed Khaled Hameed al-Samarra\'i and his shipping network; estimated $300M/year in Iranian oil laundered as Iraqi. Fleet of nine Liberia-flagged tankers using ship-to-ship transfers and AIS spoofing. Five Marshall Islands shell companies obscure ownership.',
    role: 'Larger successor/peer to the Said network; the apex-level oil-smuggling designation in the 2025 sequence.',
    financialExposure: '$300M annual revenue',
    keyFacts: [
      'Designated September 2, 2025',
      'UAE-based, Iraqi-Kittitian',
      '~$300M/year revenue',
      '9 Liberia-flagged tankers (ADENA, LILIANA, CAMILLA, DELFINA, BIANCA, ROBERTA, ALEXANDRA, BELLAGIO, PAOLA)',
      'Marshall Islands shells: Tryfo, Keely, Odiar, Panarea, Topsail',
      'Ship-to-ship transfers + AIS spoofing',
      'Babylon Navigation DMCC + Galaxy Oil FZ-LLC as UAE fronts'
    ],
    relationships: [
      { targetId: 'irgc', type: 'facilitates', description: 'Iranian oil revenue channel' },
      { targetId: 'babylon-nav', type: 'partner', description: 'UAE logistics arm' },
      { targetId: 'galaxy-oil', type: 'partner', description: 'UAE marketing front' }
    ],
    source: 'Treasury press release sb0233'
  },
  {
    id: 'babylon-nav',
    name: 'Babylon Navigation DMCC',
    shortName: 'Babylon Navigation',
    type: 'bank',
    designation: 'OFAC SDN (September 2, 2025)',
    description: 'UAE-based logistics arm of the Samarra\'i shipping network. Handled tanker logistics for Iranian-origin oil blended and resold as Iraqi.',
    role: 'Dubai corporate front for Iranian oil laundering.',
    keyFacts: [
      'UAE-based (DMCC free zone)',
      'Designated Sep 2, 2025',
      'Logistics arm of Samarra\'i network'
    ],
    relationships: [
      { targetId: 'samarrai-network', type: 'subsidiary', description: 'Samarra\'i logistics arm' }
    ],
    source: 'Treasury press release sb0233'
  },
  {
    id: 'galaxy-oil',
    name: 'Galaxy Oil FZ-LLC',
    shortName: 'Galaxy Oil',
    type: 'bank',
    designation: 'OFAC SDN (September 2, 2025)',
    description: 'UAE free-zone company that marketed the blended Iranian/Iraqi crude produced by the Samarra\'i shipping network.',
    role: 'Dubai marketing front for Iranian oil laundering.',
    keyFacts: [
      'UAE free-zone entity',
      'Designated Sep 2, 2025',
      'Marketing front for Samarra\'i network'
    ],
    relationships: [
      { targetId: 'samarrai-network', type: 'subsidiary', description: 'Samarra\'i marketing front' }
    ],
    source: 'Treasury press release sb0233'
  },

  // Banker network - Research 2
  {
    id: 'aqeel-baidani',
    name: 'Aqeel Meften Khafeef Al Baidani',
    shortName: 'Aqeel Al Baidani',
    type: 'individual',
    designation: 'OFAC SDN (October 2025)',
    description: 'Iraqi banking executive designated by OFAC October 2025. Co-owns an IRGC-QF-tied bank with his brother Ali Al Baidani. Simultaneously served as President of Iraq\'s National Olympic Committee, a position he allegedly leveraged for corruption.',
    role: 'Institutional bridge between Iraqi state bodies (NOC) and IRGC-QF-tied banking — a personal-network example of the state/proxy fusion.',
    keyFacts: [
      'Designated October 2025',
      'Co-owner of IRGC-QF-tied bank (with brother Ali)',
      'President of Iraq National Olympic Committee',
      'Allegedly leveraged NOC post for corruption'
    ],
    relationships: [
      { targetId: 'ali-baidani', type: 'partner', description: 'Brother; co-owner of designated bank' },
      { targetId: 'irgc', type: 'facilitates', description: 'Facilitated IRGC-QF' }
    ],
    source: 'Treasury press release sb0277'
  },
  {
    id: 'sa-idi-cell',
    name: 'Sa\'idi KH-IRGC Intelligence Cell',
    shortName: 'Sa\'idi Cell',
    type: 'militia',
    designation: 'OFAC SDN (October 2025)',
    description: 'Kata\'ib Hezbollah - IRGC intelligence cell led by Baghdad-based KH leader Hasan Qahtan Al-Sa\'idi, operating a source network that gathers targeting information on U.S. forces and presence in Iraq on behalf of the IRGC. Includes Hasan\'s son Muhammad Qahtan Al-Sa\'idi and Haytham Sabih Sa\'id, both reported PMF members. Works closely with designated IRGC affiliate Mahmud Baghlani.',
    role: 'Illustrates the intelligence-gathering layer of KH/IRGC coordination targeting U.S. personnel — directly relevant to any Tower-22-type attack attribution.',
    keyFacts: [
      'Designated October 2025',
      'Led by Hasan Qahtan Al-Sa\'idi (KH leader)',
      'Includes Muhammad Qahtan Al-Sa\'idi (son)',
      'Includes Haytham Sabih Sa\'id',
      'Reports through IRGC affiliate Mahmud Baghlani',
      'Gathers targeting data on U.S. forces in Iraq'
    ],
    relationships: [
      { targetId: 'kh', type: 'subsidiary', description: 'KH intelligence cell' },
      { targetId: 'irgc', type: 'controlled_by', description: 'Reports to IRGC' }
    ],
    source: 'Treasury press release sb0277'
  },
  {
    id: 'ishtar-gate',
    name: 'Ishtar Gate Electronic Payments',
    shortName: 'Ishtar Gate',
    type: 'bank',
    description: 'Iraqi electronic payments company linked in independent reporting to Ali Mohammed Ghulam Hussein Al Anssari, alongside a $42M London mansion. Represents a corporate vehicle adjacent to — but distinct from — the Qi Card ecosystem that the Ghulam banking network used.',
    role: 'Adjacent electronic-payments company in the Ghulam network; supplementary KYC-evasion infrastructure.',
    keyFacts: [
      'Iraqi electronic payments company',
      'Linked to Ali Ghulam (SDN October 2025)',
      'Adjacent to Qi Card ecosystem'
    ],
    relationships: [
      { targetId: 'ghulam', type: 'controlled_by', description: 'Linked to Ali Ghulam per independent reporting' }
    ],
    source: 'Independent press reporting / Research 2'
  },
  {
    id: 'al-huda-bank',
    name: 'Al-Huda Bank',
    type: 'bank',
    designation: 'FinCEN Section 311 primary money-laundering concern (Jan 29, 2024)',
    description: 'Iraqi private bank designated by FinCEN (press release jy2053) on January 29, 2024 as a primary money-laundering concern for acting as a conduit for the IRGC-Quds Force, Kata\'ib Hezbollah, and Asa\'ib Ahl al-Haq. The designation prohibits U.S. financial institutions from opening or maintaining correspondent accounts for Al-Huda.',
    role: 'Peer-level regulatory evidence that the Iraqi banking system was actively conducting militia-linked financing during the Gap Period — an independent FinCEN finding that reinforces the ATA/OFAC evidentiary record.',
    keyFacts: [
      'FinCEN Section 311 designation Jan 29, 2024',
      'IRGC-QF, KH, AAH conduit',
      'U.S. correspondent accounts prohibited',
      'Parallel to Qi Card/Yana/ISC scheme',
      'Press release: jy2053'
    ],
    relationships: [
      { targetId: 'irgc', type: 'facilitates', description: 'Conduit for IRGC-QF' },
      { targetId: 'kh', type: 'facilitates', description: 'Conduit for KH' },
      { targetId: 'aah', type: 'facilitates', description: 'Conduit for AAH' }
    ],
    source: 'FinCEN press release jy2053'
  },

  // Comparator / contrast witnesses - Research 1
  {
    id: 'western-union',
    name: 'Western Union',
    type: 'network',
    description: 'U.S. money-transfer company and the comparator witness in the contrast narrative: on July 26, 2023, CEO Devin McGranahan and CFO Matt Cagwin explicitly and repeatedly disclosed Iraq-related regulatory and business risks on their Q2 2023 earnings call — more than 10 separate mentions. They forecast a 70% volume reduction, disclosed U.S. government actions, and acknowledged redirecting "incremental revenue and profit from Iraq" into the compliance function. The contrast with Visa/Mastercard silence through 22 months is the backbone of Research 1\'s securities-disclosure theory.',
    role: 'Competitor benchmark demonstrating that forthright Iraq disclosure was possible, available, and commercially survivable. Existence of the WU disclosure makes Visa/Mastercard\'s silence affirmative rather than passive.',
    keyFacts: [
      'Q2 2023 call (July 26, 2023): Iraq named 10+ times',
      'Iraq = 10% benefit to adjusted Q2 revenue',
      '70% run-rate reduction disclosed',
      '"Recent U.S. government actions, which shut down a number of our agents in Iraq"',
      'Continued naming Iraq on every subsequent 2023-2025 call',
      'By October 2024, WU/MG limited to $110M/month by imposed caps'
    ],
    relationships: [
      { targetId: 'visa', type: 'affiliate', description: 'Comparator witness' },
      { targetId: 'mastercard', type: 'affiliate', description: 'Comparator witness' },
      { targetId: 'cbi', type: 'regulated_by', description: 'Subject to CBI' }
    ],
    source: 'Western Union Q2 2023 earnings call transcript'
  },
  {
    id: 'moneygram',
    name: 'MoneyGram',
    type: 'network',
    description: 'U.S. money-transfer company subject to the same July 2024 U.S./Iraq limits as Western Union that drove monthly outflows to $110M by October 2024. Declined to comment to WSJ.',
    role: 'Peer money-transfer entity; demonstrates that regulatory limits were applied sector-wide except, conspicuously, to Visa/Mastercard card rails during the Gap Period.',
    keyFacts: [
      'Subject to Jul 2024 U.S./Iraq limits with WU',
      'Monthly outflows capped at ~$110M by October 2024',
      'Limits NOT imposed on card networks during same period',
      'Declined to respond to WSJ requests'
    ],
    relationships: [
      { targetId: 'western-union', type: 'partner', description: 'Sector peer' },
      { targetId: 'treasury', type: 'regulated_by', description: 'Subject to Treasury/FinCEN' }
    ],
    source: 'IFMAT Report / WSJ'
  },
  {
    id: 'brighterion',
    name: 'Brighterion (Mastercard subsidiary)',
    type: 'bank',
    description: 'Mastercard subsidiary openly marketed as specializing in "Compliance (KYC, AML & Sanctions Screening)." Its product marketing directly implicates the Yana audit\'s contrary findings that no customer risk ratings, no sanctions screening, and ineffective AML controls were in place at a Mastercard principal issuer.',
    role: 'Corporate entity whose own marketed capabilities are the clearest claim-vs-reality contradiction in the Research 1 record.',
    keyFacts: [
      'Mastercard subsidiary',
      'Marketed as "Compliance (KYC, AML & Sanctions Screening)" specialist',
      'Product directly contradicted by August 2023 Yana audit findings',
      'Part of Mastercard\'s $10.7B cybersecurity-acquisitions tally (per Feb 2026 Dubai release)'
    ],
    relationships: [
      { targetId: 'mastercard', type: 'subsidiary', description: 'Mastercard-owned compliance tech' }
    ],
    source: 'Brighterion product page / Mastercard press releases'
  },

  // U.S. officials - Research 2 + 5
  {
    id: 'bessent',
    name: 'Scott Bessent',
    type: 'individual',
    designation: 'U.S. Treasury Secretary',
    description: 'Secretary of the Treasury. Public face of the 2025-2026 maximum-pressure sanctions drumbeat against Iran\'s Iraqi ecosystem. On April 17, 2026 sb0458 commander designations: "We will not allow Iraq\'s terrorist militias, backed by Iran, to threaten American lives or interests."',
    role: 'Executive-branch architect of the post-NSPM-2 sanctions cadence.',
    keyFacts: [
      'Treasury Secretary',
      'Public statement April 17, 2026',
      'Executes NSPM-2 maximum pressure campaign'
    ],
    relationships: [
      { targetId: 'treasury', type: 'leads', description: 'Secretary of the Treasury' }
    ],
    source: 'Treasury press releases 2025-2026'
  },
  {
    id: 'rubio',
    name: 'Marco Rubio',
    type: 'individual',
    designation: 'U.S. Secretary of State',
    description: 'Secretary of State. Recipient of the January 28, 2025 and May 28, 2025 Wilson-Steube letters naming Iraqi banks and the Qi Card e-payment system. On September 17, 2025 elevated four Iran-aligned PMF militias (HAN, KSS, HAAA, KIA) from SDGT to FTO status.',
    role: 'State Department lead on the FTO designation track of the maximum-pressure campaign.',
    keyFacts: [
      'Secretary of State',
      'Recipient of Wilson-Steube Jan 28 and May 28, 2025 letters',
      'Elevated 4 PMF militias to FTO Sep 17, 2025',
      'Target of Wilson-Steube Qi Card sanctions demand'
    ],
    relationships: [
      { targetId: 'treasury', type: 'partner', description: 'Coordinates maximum pressure' }
    ],
    source: 'State Department / steube.house.gov'
  },
  {
    id: 'waltz',
    name: 'Michael Waltz',
    type: 'individual',
    designation: 'National Security Adviser',
    description: 'National Security Adviser to President Trump. Co-recipient of the January 28, 2025 Wilson-Steube-Baird-Dunn-Hamadeh-Weber-Smith letter on Iranian-backed Iraqi militias.',
    role: 'White House principal on the NSPM-2 maximum-pressure framework (signed Feb 4, 2025).',
    keyFacts: [
      'National Security Adviser',
      'Co-recipient of Jan 28, 2025 Wilson-Steube letter',
      'NSPM-2 principal (signed Feb 4, 2025)'
    ],
    relationships: [
      { targetId: 'treasury', type: 'partner', description: 'NSPM-2 coordination' }
    ],
    source: 'White House / steube.house.gov'
  },
  {
    id: 'gacki',
    name: 'Andrea Gacki',
    type: 'individual',
    designation: 'FinCEN Director',
    description: 'Director of the Financial Crimes Enforcement Network (FinCEN). Testified before the House Financial Services Subcommittee on National Security, Illicit Finance, and International Financial Institutions (April-June 2025), referencing Treasury\'s maximum-pressure work on Iran\'s "shadow banking" evasion networks generally, but did not discuss the Iraqi card scheme by name. Led the Jan 29, 2024 Al-Huda Bank Section 311 finding (jy2053).',
    role: 'FinCEN lead during the Gap Period and post-WSJ disclosure period; her public testimony is the relevant executive-branch benchmark for what was being said publicly.',
    keyFacts: [
      'FinCEN Director',
      'April-June 2025 HFSC testimony',
      'Referenced "shadow banking" but not card scheme by name',
      'Led Al-Huda Bank Section 311 finding (jy2053, Jan 29, 2024)'
    ],
    relationships: [
      { targetId: 'treasury', type: 'subsidiary', description: 'FinCEN is bureau of Treasury' }
    ],
    source: 'Congressional testimony / Treasury'
  },

  // Plaintiff-bar counsel - Research 3
  {
    id: 'sparacino',
    name: 'Sparacino PLLC',
    type: 'individual',
    designation: 'Plaintiff-bar ATA specialist firm',
    description: 'ATA/JASTA plaintiffs\' firm that represents more than 4,000 Americans, including more than 1,000 Gold Star families. Lead counsel in Miller/Pam v. Arab Bank, Averbach v. Cairo Amman Bank, Atchley v. AstraZeneca, Fraenkel v. Standard Chartered, Moses v. BNP Paribas, Troell v. Binance, King v. Habib Bank, and related matters.',
    role: 'The plaintiffs\' firm with the deepest current book of ATA cases against financial institutions and the closest domain expertise to the Visa/MA theory.',
    keyFacts: [
      '~4,000 American clients',
      '~1,000 Gold Star family clients',
      'Lead counsel on Miller/Pam, Averbach, Atchley, Fraenkel, Moses, Troell, King',
      'Builds JASTA template for post-Taamneh bank cases'
    ],
    relationships: [
      { targetId: 'kreindler', type: 'partner', description: 'Adjacent plaintiff-bar firm' }
    ],
    source: 'sparacinopllc.com / Research 3'
  },
  {
    id: 'osen',
    name: 'Osen LLC',
    type: 'individual',
    designation: 'Plaintiff-bar ATA specialist firm',
    description: 'ATA/JASTA plaintiffs\' specialist firm. One of the few firms working to exploit the September 28, 2026 JASTA 10-year statute-of-limitations deadline for pre-2016 injuries.',
    role: 'Complementary plaintiff-bar firm building the JASTA docket.',
    keyFacts: [
      'ATA/JASTA specialist',
      'Working JASTA 10-year SOL cases',
      'Mentioned in Research 3 alongside Sparacino and Willkie'
    ],
    relationships: [
      { targetId: 'sparacino', type: 'partner', description: 'Peer plaintiff-bar firm' }
    ],
    source: 'Research 3'
  },
  {
    id: 'willkie-farr',
    name: 'Willkie Farr & Gallagher',
    type: 'individual',
    designation: 'Plaintiff-bar counsel (Balva v. Binance)',
    description: 'Big Law firm serving as lead counsel in Balva v. Binance (D.N.D., filed Nov. 24, 2025), the ~$3 billion trebled JASTA complaint that currently represents the plaintiffs\' bar\'s most aggressive post-Taamneh damages theory against a payment-adjacent defendant.',
    role: 'Big Law entrant into the post-Taamneh plaintiffs\' bar; Balva is the case to watch for damages-theory development applicable to Visa/MA.',
    keyFacts: [
      'Lead counsel Balva v. Binance',
      'Filed Nov 24, 2025 in D.N.D.',
      '~$3B trebled JASTA demand',
      'Big Law plaintiffs\' bar entrant'
    ],
    relationships: [],
    source: 'Research 3'
  },
  {
    id: 'kreindler',
    name: 'Kreindler & Kreindler LLP',
    type: 'individual',
    designation: 'Plaintiff counsel (Tower 22 FSIA)',
    description: 'Plaintiffs\' firm representing the Gold Star families of Sgt. William Rivers, Spc. Kennedy Sanders, and Spc. Breonna Moffett in the January 22, 2026 FSIA § 1605A suit against the Islamic Republic of Iran in the U.S. District Court for the District of Columbia (see doc-018).',
    role: 'Attack-attribution-case counsel whose FSIA judgment will anchor any downstream § 2333(a) action.',
    keyFacts: [
      'Filed Tower 22 FSIA suit Jan 22, 2026 in D.D.C.',
      'Represents families of Rivers, Sanders, Moffett',
      'Historical plaintiffs\' firm; 9/11 terrorism litigation experience'
    ],
    relationships: [
      { targetId: 'sparacino', type: 'partner', description: 'Adjacent plaintiff-bar firm' }
    ],
    source: 'Law360 / Kreindler filing'
  },

  // Facade brands - Research 4
  {
    id: 'liwa-al-ghaliboun',
    name: 'Liwa al-Ghaliboun',
    type: 'militia',
    designation: 'KH/IRGC facade group',
    description: 'Small facade group assessed to be an IRGC / Kata\'ib Hezbollah front. Claimed responsibility for the March 23, 2023 kamikaze drone strike on Hasakah/Abu Hajar Airfield (Rmelan) that killed one U.S. contractor and wounded five service members.',
    role: 'Plausible-deniability facade used to claim attacks while obscuring direct KH/IRGC attribution.',
    keyFacts: [
      'Claimed Rmelan Mar 23, 2023 attack',
      'Assessed as IRGC/KH facade group',
      'Pattern representative of wider facade-branding system'
    ],
    relationships: [
      { targetId: 'kh', type: 'subsidiary', description: 'KH facade group' },
      { targetId: 'irgc', type: 'controlled_by', description: 'IRGC front' }
    ],
    source: 'Pentagon / Washington Institute'
  },
  {
    id: 'iri-facades',
    name: 'IRI Facade Brands',
    shortName: 'Tashkil al-Waritheen, Ashab al-Kahf, Al-Dhafireen, al-Thawriyun',
    type: 'militia',
    designation: 'Islamic Resistance in Iraq plausible-deniability brands',
    description: 'Collective of Islamic Resistance in Iraq (IRI) facade brands used for plausible-deniability claims of attacks on U.S. forces: Tashkil al-Waritheen, Ashab al-Kahf, Al-Dhafireen, and al-Thawriyun ("Revolutionaries"). These brands claim attacks via Telegram without direct attribution to KH, AAH, HAN, or KSS.',
    role: 'Attribution-obfuscation architecture for the post-October 2023 attack campaign; claimed 90%+ of attacks under umbrella IRI branding.',
    keyFacts: [
      'Active during October 2023 - present campaign',
      'Tashkil al-Waritheen, Ashab al-Kahf, Al-Dhafireen, al-Thawriyun',
      'Claim attacks via Telegram',
      'Obscure KH/AAH/HAN/KSS direct attribution',
      '90%+ of attacks claimed under IRI umbrella'
    ],
    relationships: [
      { targetId: 'kh', type: 'subsidiary', description: 'Operated by KH' },
      { targetId: 'irgc', type: 'controlled_by', description: 'IRGC-directed' }
    ],
    source: 'Washington Institute / Research 4'
  },

  // Tower 22 unit and DOJ defendants - Research 4
  {
    id: '718-engineer-co',
    name: '718th Engineer Company (U.S. Army Reserve)',
    shortName: '718th EC',
    type: 'government',
    description: 'U.S. Army Reserve unit of the 926th Engineer Battalion, 926th Engineer Brigade, 412th Theater Engineer Command, based at Fort Moore (formerly Fort Benning), Georgia. The unit from which the three soldiers killed at Tower 22 — Sgt. William Rivers, Spc. Kennedy Sanders, and Spc. Breonna Moffett — were deployed in support of Operation Inherent Resolve. All three posthumously promoted; all from Georgia.',
    role: 'The institutional home of the Tower 22 KIA. Establishes the precise chain-of-command and unit-identification for any subsequent ATA or FSIA action brought by the KIA families.',
    keyFacts: [
      'Fort Moore, Georgia (formerly Fort Benning)',
      '926th Engineer Battalion / 926th Engineer Brigade / 412th TEC',
      'All three Tower 22 KIA assigned',
      'Supporting Operation Inherent Resolve',
      'All three posthumously promoted one grade'
    ],
    relationships: [
      { targetId: 'treasury', type: 'partner', description: 'U.S. government unit' }
    ],
    source: 'DoD / Army / Research 4'
  },
  {
    id: '101-essb',
    name: '101st Expeditionary Signal Battalion (NY Army National Guard)',
    shortName: '101st ESSB',
    type: 'government',
    description: 'New York Army National Guard signal battalion; 10 of its soldiers received Purple Hearts in May 2025 for injuries sustained at Tower 22 on January 28, 2024.',
    role: 'Second identified Tower 22 unit; expands the named-plaintiff universe for any subsequent ATA action predicated on the Jordan drone strike.',
    keyFacts: [
      'New York Army National Guard',
      '10 Purple Hearts awarded May 2025',
      'Injuries at Tower 22 Jan 28, 2024'
    ],
    relationships: [],
    source: 'Military Times / Research 4'
  },
  {
    id: 'sadeghi',
    name: 'Mahdi Mohammad Sadeghi',
    type: 'individual',
    designation: 'DOJ indicted (Dec 2024) — Tower 22 drone components',
    description: 'DOJ indictee (December 2024) charged with conspiring to export Iranian drone navigation components used in the January 28, 2024 Tower 22 drone attack. Arrested in Natick, Massachusetts where he worked as an engineer at Analog Devices.',
    role: 'U.S.-based defendant tying the Tower 22 drone to an identifiable U.S.-arrest chain-of-custody. Direct evidence for attribution and a primary-source record the plaintiffs\' bar can use.',
    keyFacts: [
      'Arrested in Natick, MA',
      'Analog Devices engineer',
      'Indicted December 2024',
      'Charges: conspiracy to export Iranian drone nav components'
    ],
    relationships: [
      { targetId: 'abedini', type: 'partner', description: 'Co-defendant' }
    ],
    source: 'DOJ indictment / Boston Globe Jan 14, 2025'
  },
  {
    id: 'abedini',
    name: 'Mohammad Abedininajafabadi',
    type: 'individual',
    designation: 'DOJ indicted (Dec 2024) — Tower 22 drone components',
    description: 'DOJ co-indictee (December 2024) charged with conspiring to export Iranian drone navigation components used in the Tower 22 drone attack. Arrested in Italy.',
    role: 'Foreign-arrest leg of the DOJ Tower 22 indictment.',
    keyFacts: [
      'Arrested in Italy',
      'Indicted December 2024',
      'Charges: conspiracy to export Iranian drone nav components'
    ],
    relationships: [
      { targetId: 'sadeghi', type: 'partner', description: 'Co-defendant' }
    ],
    source: 'DOJ indictment'
  }
];

// Helper functions
export const getEntitiesByType = (type: EntityType): Entity[] => {
  return entities.filter(e => e.type === type);
};

export const getEntityById = (id: string): Entity | undefined => {
  return entities.find(e => e.id === id);
};

export const getTypeLabel = (type: EntityType): string => {
  const labels: Record<EntityType, string> = {
    network: 'Payment Network',
    bank: 'Financial Institution',
    militia: 'Militia/State Actor',
    government: 'Government',
    individual: 'Individual'
  };
  return labels[type];
};

export const getTypeColor = (type: EntityType): string => {
  const colors: Record<EntityType, string> = {
    network: 'blue',
    bank: 'emerald',
    militia: 'red',
    government: 'slate',
    individual: 'purple'
  };
  return colors[type];
};

export const getDesignatedEntities = (): Entity[] => {
  return entities.filter(e => e.designation);
};
