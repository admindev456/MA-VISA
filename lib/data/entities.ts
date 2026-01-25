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

