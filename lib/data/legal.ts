// Comprehensive legal analysis data

export interface LegalViolation {
  id: string;
  name: string;
  statute: string;
  description: string;
  elements: string[];
  evidence: string[];
  maxPenalty?: string;
}

export interface LegalFramework {
  id: string;
  name: string;
  shortName: string;
  description: string;
  overview: string;
  keyStatutes: string[];
  violations: LegalViolation[];
  icon: string;
}

export const legalFrameworks: LegalFramework[] = [
  {
    id: 'ata',
    name: 'Anti-Terrorism Act',
    shortName: 'ATA',
    description: 'Civil liability for providing material support to terrorist organizations',
    icon: '⚖️',
    overview: `The Anti-Terrorism Act (18 U.S.C. § 2333) provides a civil cause of action for U.S. nationals injured by acts of international terrorism. Under JASTA amendments, liability extends to those who "aid and abet" terrorism by knowingly providing substantial assistance.

The ATA's treble damages provision makes this the most significant financial exposure for Visa and Mastercard, as damages can be tripled and attorneys' fees recovered.`,
    keyStatutes: [
      '18 U.S.C. § 2333 — Civil Remedies',
      '18 U.S.C. § 2339A — Material Support (General)',
      '18 U.S.C. § 2339B — Material Support to FTOs',
      '18 U.S.C. § 2333(d)(2) — Aiding & Abetting'
    ],
    violations: [
      {
        id: 'ata-1',
        name: 'Material Support to Foreign Terrorist Organizations',
        statute: '18 U.S.C. § 2339B',
        description: 'Providing "financial services" — a specifically enumerated form of material support — to designated Foreign Terrorist Organizations including Kata\'ib Hezbollah, IRGC, and Asa\'ib Ahl al-Haq.',
        elements: [
          'Defendant knowingly provided material support or resources',
          'Support went to a designated FTO',
          '"Financial services" is specifically enumerated as material support',
          'No requirement to prove specific intent to further terrorism'
        ],
        evidence: [
          'Kata\'ib Hezbollah designated FTO since July 2009',
          'IRGC designated FTO since April 2019',
          'Networks processed billions for PMF members (200,000+ cardholders)',
          'Fall 2023 Treasury briefing explicitly named militia groups',
          'August 2023 Yana audit confirmed zero sanctions screening'
        ],
        maxPenalty: 'Treble damages + attorneys\' fees'
      },
      {
        id: 'ata-2',
        name: 'Aiding and Abetting International Terrorism',
        statute: '18 U.S.C. § 2333(d)(2)',
        description: 'Consciously, voluntarily, and culpably participating in acts of international terrorism by providing the financial infrastructure that enabled militia operations.',
        elements: [
          'Party is generally aware of terrorist activity',
          'Knowingly and substantially assisted the principal violation',
          'Assistance was "conscious, voluntary, and culpable"',
          'Per Twitter v. Taamneh: requires more than passive indifference'
        ],
        evidence: [
          'Fall 2023 Treasury warning specifically named militia groups',
          '"Regular meetings" throughout 2024 confirmed ongoing awareness',
          '22-month delay after warnings demonstrates conscious choice',
          '$120M+ in fees collected during "Gap Period"',
          'Reinstatement of Yana after finding zero compliance'
        ],
        maxPenalty: 'Treble damages + attorneys\' fees'
      },
      {
        id: 'ata-3',
        name: 'Deliberate Indifference Standard (Weiss)',
        statute: 'Weiss v. NatWest, 768 F.3d 202 (2d Cir. 2014)',
        description: 'Acting with deliberate indifference — knowing there is a substantial probability of terrorism but not caring — establishes the scienter required for ATA liability.',
        elements: [
          'Defendant knew of substantial probability of terrorism',
          'Defendant proceeded without caring about the consequences',
          'Foreign regulatory approval is no defense',
          'Actual knowledge not required if probability was high'
        ],
        evidence: [
          'Treasury provided "concrete documentation" of militia involvement',
          'Volumes remained $400M-$1.1B/month after Fall 2023 warning',
          'Networks collected $102-143M each during delay period',
          'Yana reinstated despite zero sanctions screening finding',
          'Visa Direct $5M/day transfers took 10 weeks to suspend'
        ],
        maxPenalty: 'Treble damages + attorneys\' fees'
      }
    ]
  },
  {
    id: 'bsa',
    name: 'Bank Secrecy Act',
    shortName: 'BSA',
    description: 'Anti-money laundering compliance requirements for financial institutions',
    icon: '🏦',
    overview: `The Bank Secrecy Act (31 U.S.C. § 5311 et seq.) and its implementing regulations (31 CFR Chapter X) require financial institutions, including "operators of credit card systems," to maintain AML programs "reasonably designed" to prevent money laundering and terrorist financing.

Under 31 CFR § 1028.210, Visa and Mastercard have affirmative duties to vet issuing and acquiring institutions and implement internal controls capable of detecting anomalies.`,
    keyStatutes: [
      '31 U.S.C. § 5318(g) — SAR Requirements',
      '31 CFR § 1028.210 — Card System AML Programs',
      '31 CFR § 1028.320 — SAR Filing Requirements',
      '31 CFR § 1010.610 — Due Diligence Requirements'
    ],
    violations: [
      {
        id: 'bsa-1',
        name: 'Failure of Internal Controls',
        statute: '31 CFR § 1028.210(b)(1)',
        description: 'The 2,900% overnight surge in transaction volumes should have triggered automated compliance alerts. The failure to detect or act on this anomaly demonstrates that internal controls were not "reasonably designed" to prevent money laundering.',
        elements: [
          'AML program must be "reasonably designed"',
          'Internal controls must "guard against" illicit issuing/acquiring',
          'Risk assessment must account for high-risk jurisdictions',
          'Controls must be capable of detecting anomalies'
        ],
        evidence: [
          '$50M → $1.5B surge (2,900%) went undetected',
          'Volumes remained elevated for 22 months',
          'No automated suspension triggered',
          'Required Treasury intervention to force action',
          '1-in-5 UAE transactions from 0.4% of visitors (statistical impossibility)'
        ],
        maxPenalty: '$250,000+ per day of violation'
      },
      {
        id: 'bsa-2',
        name: 'Failure to File Suspicious Activity Reports',
        statute: '31 CFR § 1028.320',
        description: 'Financial institutions must file SARs within 30 days for transactions involving $5,000+ that the institution "knows, suspects, or has reason to suspect" involve illegal funds. The POS farms and statistical anomalies should have triggered mandatory SAR filings.',
        elements: [
          'Transaction involves $5,000 or more',
          'Institution knows, suspects, or has reason to suspect illegal activity',
          'SAR must be filed within 30 days of detection',
          'Must describe suspicious activity and parties involved'
        ],
        evidence: [
          'POS farms processing fake $5,000 transactions',
          '$5M/day transfers from single FIB account',
          'High-end jewelers conducting 100% Iraqi card business',
          'UAE free trade zone merchant concentration',
          'VPN masking of transaction locations'
        ],
        maxPenalty: '$1,000,000 per day + criminal referral'
      },
      {
        id: 'bsa-3',
        name: 'Due Diligence Violations — Issuing Institutions',
        statute: '31 CFR § 1010.610',
        description: 'Failure to conduct adequate due diligence on foreign financial institution partners, evidenced by reinstating Yana Banking Services after audit revealed zero compliance controls.',
        elements: [
          'Enhanced due diligence required for high-risk jurisdictions',
          'Must verify correspondent has adequate AML program',
          'Must understand nature and purpose of relationship',
          'Ongoing monitoring required'
        ],
        evidence: [
          'Yana audit: "No customer risk rating is performed"',
          'Yana: "No evidence" of sanctions screening',
          'Yana reinstated after alleged "remediation"',
          'Networks offered financial incentives to boost volume',
          'Partners processed billions without screening SDN list'
        ],
        maxPenalty: '$250,000 per violation + program remediation'
      },
      {
        id: 'bsa-4',
        name: 'Failure to Guard Against High-Risk Acquiring',
        statute: '31 CFR § 1028.210(b)(1)(ii)',
        description: 'Operators must guard against merchants using the card system to facilitate money laundering. The 4,000+ UAE merchants conducting near-100% Iraqi card business represented obvious front companies.',
        elements: [
          'Must screen acquiring institutions/merchants',
          'Must identify high-risk merchant categories',
          'Must monitor for anomalous merchant behavior',
          'Must take "appropriate steps" when risk identified'
        ],
        evidence: [
          '4,000 UAE merchants eventually removed by Mastercard',
          '5,000 UAE vendors blocked by Visa',
          'Merchants conducting 100% Iraqi card volume',
          '"High-end jewelers" and free trade zone businesses',
          '"POS farms" processing fake transactions'
        ],
        maxPenalty: '$250,000 per violation'
      }
    ]
  },
  {
    id: 'ofac',
    name: 'OFAC & Sanctions',
    shortName: 'OFAC/IEEPA',
    description: 'Economic sanctions violations under IEEPA and OFAC regulations',
    icon: '🚫',
    overview: `The International Emergency Economic Powers Act (IEEPA, 50 U.S.C. § 1705) and Executive Order 13224 prohibit U.S. persons from conducting transactions with Specially Designated Global Terrorists (SDGTs) and designated Foreign Terrorist Organizations.

OFAC enforces these sanctions with civil penalties up to the greater of $250,000 or twice the transaction amount per violation.`,
    keyStatutes: [
      '50 U.S.C. § 1705 — IEEPA Penalties',
      'E.O. 13224 — Blocking Terrorist Property',
      'E.O. 13438 — Iraq Destabilization',
      '31 CFR Part 594 — Global Terrorism Sanctions'
    ],
    violations: [
      {
        id: 'ofac-1',
        name: 'Facilitation of Prohibited Transactions',
        statute: '50 U.S.C. § 1705 / E.O. 13224',
        description: 'Processing transactions for Specially Designated Global Terrorists (SDGTs) including Kata\'ib Hezbollah members and IRGC beneficiaries, thereby facilitating prohibited economic activity.',
        elements: [
          'Transaction involves blocked property or designated person',
          'U.S. person facilitated the transaction',
          'Strict liability applies (no intent required for civil)',
          'Each transaction constitutes separate violation'
        ],
        evidence: [
          '200,000+ PMF members received salaries via Qi Cards',
          'Kata\'ib Hezbollah designated SDGT since 2009',
          'Treasury explicitly identified militia cardholders',
          'Networks processed cards for designated group members',
          'October 2025 OFAC designations confirm sanctions nexus'
        ],
        maxPenalty: 'Greater of $250,000 or 2x transaction per violation'
      },
      {
        id: 'ofac-2',
        name: 'Reckless Disregard After Warning',
        statute: 'OFAC Enforcement Guidelines',
        description: 'OFAC penalty matrix considers "willful or reckless conduct" as an aggravating factor. The 22-month delay after explicit Treasury warnings constitutes reckless disregard for the sanctions program.',
        elements: [
          'Subject received specific warning about sanctions risk',
          'Subject continued prohibited conduct after warning',
          'Delay was extended and substantial',
          'Financial benefit accrued during delay period'
        ],
        evidence: [
          'May 2023: Treasury began questioning networks',
          'Fall 2023: Explicit militia involvement briefing',
          'March/April 2025: First large-scale blocking (22 months later)',
          '$102-143M per network in fees during delay',
          'Epsilon Electronics precedent: $4.07M for continued conduct after warning'
        ],
        maxPenalty: 'Base penalty + aggravating factor enhancement'
      },
      {
        id: 'ofac-3',
        name: 'Violation of NSPM-2 Policy',
        statute: 'National Security Presidential Memorandum 2',
        description: 'The Trump administration\'s 2025 "Maximum Pressure" policy explicitly targeted Iranian access to the Iraqi financial system. Continued processing undermined U.S. foreign policy objectives.',
        elements: [
          'Policy targets Iranian sanctions evasion',
          'Specifically addresses Iraqi financial channels',
          'Requires cooperation from financial institutions',
          'Penalty enhancement for policy undermining'
        ],
        evidence: [
          'February 2025 Wilson-Steube letter cites policy',
          'Treasury described "clandestine network of facilitators"',
          '$450M militia profits enabled by card scheme',
          'IRGC benefited from currency arbitrage',
          'Scheme directly contradicted Maximum Pressure goals'
        ],
        maxPenalty: 'Enhanced penalties for policy violation'
      }
    ]
  }
];

// Key legal precedents
export interface CasePrecedent {
  id: string;
  name: string;
  citation: string;
  court: string;
  year: number;
  summary: string;
  holding: string;
  relevance: string[];
  tags: string[];
}

export const legalPrecedents: CasePrecedent[] = [
  {
    id: 'boim-iii',
    name: 'Boim v. Holy Land Foundation (Boim III)',
    citation: '549 F.3d 685 (7th Cir. 2008) (en banc)',
    court: '7th Circuit (en banc)',
    year: 2008,
    summary: 'Articulated the "fungibility of funds" doctrine for terrorism financing liability, establishing that financial support to a terrorist organization\'s "peaceful" activities frees up resources for terrorism.',
    holding: 'Giving money to an FTO\'s social wing is like "giving a loaded gun to a child" — it frees up other funds for terrorism. Proximate cause is established without direct tracing of funds to specific attacks.',
    relevance: [
      'Establishes fungibility doctrine for financial support',
      'Removes requirement to trace specific funds to attacks',
      'Network fees freed up militia resources',
      'Supports civil liability for indirect financing'
    ],
    tags: ['Proximate Cause', 'Fungibility', 'Material Support', '7th Circuit']
  },
  {
    id: 'linde',
    name: 'Linde v. Arab Bank, PLC',
    citation: '882 F.3d 314 (2d Cir. 2018)',
    court: '2nd Circuit',
    year: 2018,
    summary: 'Established that providing "routine banking services" can constitute material support under the ATA if the bank knows of the terrorist nature of the recipient.',
    holding: 'A bank that provides routine financial services to terrorists knowing they are terrorists provides material support. The "routine services" defense fails when actual or constructive knowledge exists.',
    relevance: [
      'Rejects "routine banking services" defense',
      'Knowledge transforms ordinary services into support',
      'Payment processing = financial services',
      'Precedent for network liability'
    ],
    tags: ['Routine Services', 'Material Support', 'Knowledge', '2nd Circuit']
  },
  {
    id: 'weiss',
    name: 'Weiss v. National Westminster Bank PLC',
    citation: '768 F.3d 202 (2d Cir. 2014)',
    court: '2nd Circuit',
    year: 2014,
    summary: 'Defined the "deliberate indifference" standard for ATA liability: knowing there is a substantial probability of terrorism but not caring.',
    holding: 'Deliberate indifference exists when defendant "knows there is a substantial probability that the organization engages in terrorism but... does not care." Foreign regulatory clearance is no defense when contrary evidence exists.',
    relevance: [
      'Defines deliberate indifference standard',
      'Substantial probability + not caring = scienter',
      'Foreign approval no defense to U.S. law',
      'Directly applicable to 22-month delay'
    ],
    tags: ['Deliberate Indifference', 'Scienter', 'Knowledge Standard', '2nd Circuit']
  },
  {
    id: 'strauss',
    name: 'Strauss v. Credit Lyonnais, S.A.',
    citation: '925 F. Supp. 2d 414 (E.D.N.Y. 2013)',
    court: 'E.D.N.Y.',
    year: 2013,
    summary: 'Reinforced that "deliberate indifference" to a customer\'s terrorist ties can establish scienter for ATA liability.',
    holding: 'A financial institution that deliberately ignores evidence of terrorist ties while continuing to provide services acts with the requisite scienter for liability.',
    relevance: [
      'Deliberate ignorance establishes scienter',
      'Continuing services after notice is actionable',
      'Applies to ongoing relationships'
    ],
    tags: ['Deliberate Indifference', 'Ongoing Relationship', 'E.D.N.Y.']
  },
  {
    id: 'taamneh',
    name: 'Twitter, Inc. v. Taamneh',
    citation: '598 U.S. 471 (2023)',
    court: 'Supreme Court',
    year: 2023,
    summary: 'Raised the bar for aiding and abetting liability under ATA § 2333(d), requiring "conscious, voluntary, and culpable participation" rather than mere passive indifference.',
    holding: 'Aiding and abetting requires knowing and substantial assistance that is "conscious, voluntary, and culpable." Passive algorithmic recommendations insufficient. But active financial facilitation with knowledge remains actionable.',
    relevance: [
      'Distinguishes passive platforms from active facilitators',
      'Financial services require more active participation',
      'Networks\' incentives and delay may show culpable participation',
      'Affirmative conduct (reinstating Yana) exceeds Taamneh threshold'
    ],
    tags: ['Aiding & Abetting', 'SCOTUS', 'Culpable Participation', 'Active vs Passive']
  },
  {
    id: 'epsilon',
    name: 'Epsilon Electronics v. OFAC',
    citation: '2016 WL 3647628 (D.D.C. 2016)',
    court: 'D.D.C.',
    year: 2016,
    summary: 'Upheld $4.07M OFAC penalty despite company\'s small size, based on "reckless disregard" for continuing prohibited shipments after receiving cautionary letter.',
    holding: '"Reckless disregard toward sanctions program" established by continued shipments after OFAC cautionary letter. Warning + continued conduct = enhanced penalty.',
    relevance: [
      'Continued conduct after warning = reckless disregard',
      'Directly analogous to networks\' 22-month delay',
      'Treasury warnings equivalent to cautionary letter',
      'Upheld on appeal'
    ],
    tags: ['OFAC', 'Reckless Disregard', 'Cautionary Letter', 'Penalties']
  },
  {
    id: 'hsbc',
    name: 'United States v. HSBC',
    citation: 'DPA (2012) — $1.92B Settlement',
    court: 'DOJ/DPA',
    year: 2012,
    summary: 'HSBC entered deferred prosecution agreement and paid $1.92 billion for AML failures that enabled drug cartels and sanctions evasion over several years.',
    holding: 'Years of regulatory warnings followed by continued processing of suspicious transactions justified historic penalty. Pattern of ignoring compliance obligations in favor of profits.',
    relevance: [
      'Comparable to networks\' multi-year delay',
      'Ignored warnings while processing billions',
      'Sets precedent for $1B+ financial penalties',
      'Pattern of conduct aggravating factor'
    ],
    tags: ['AML', 'DPA', 'Pattern of Conduct', 'Historic Penalty']
  },
  {
    id: 'bnp',
    name: 'United States v. BNP Paribas',
    citation: 'Guilty Plea (2014) — $8.97B Settlement',
    court: 'DOJ/Guilty Plea',
    year: 2014,
    summary: 'BNP Paribas pleaded guilty and paid $8.97 billion for processing transactions for sanctioned countries including Sudan and Iran over a decade.',
    holding: 'Deliberate stripping of information to evade sanctions detection, combined with massive transaction volumes, justified largest bank penalty in history.',
    relevance: [
      'Sets upper bound for sanctions penalties',
      'Deliberate conduct vs. reckless disregard',
      'Volume of transactions matters',
      'Years of conduct matters'
    ],
    tags: ['Sanctions', 'Guilty Plea', 'Record Penalty', 'Deliberate Conduct']
  },
  {
    id: 'td-bank',
    name: 'United States v. TD Bank',
    citation: 'Guilty Plea (2024) — $3.0B Settlement',
    court: 'DOJ/Guilty Plea',
    year: 2024,
    summary: 'TD Bank pleaded guilty to AML failures and paid $3 billion, with unprecedented growth restrictions imposed for failing to report suspicious transactions.',
    holding: 'Bank\'s AML program failed to detect and report billions in suspicious activity. Growth restrictions imposed as additional penalty beyond monetary fine.',
    relevance: [
      'Recent precedent for AML failures',
      'Comparable failure to detect anomalies',
      'Growth restrictions as non-monetary penalty',
      '2024 enforcement environment'
    ],
    tags: ['AML', 'Recent Precedent', 'Growth Restrictions', '2024']
  }
];

// Damages framework
export interface DamageScenario {
  name: string;
  totalRange: string;
  perNetwork: string;
  assumptions: string[];
}

export const damageScenarios: DamageScenario[] = [
  {
    name: 'Conservative Scenario',
    totalRange: '$600M – $840M',
    perNetwork: '$300M – $420M',
    assumptions: [
      'Substantial cooperation credit applied',
      'First-time sanctions/AML violation',
      'No criminal referral',
      'Mitigating factors fully credited',
      'Settlement before litigation'
    ]
  },
  {
    name: 'Moderate Scenario',
    totalRange: '$1.5B – $2.2B',
    perNetwork: '$750M – $1.1B',
    assumptions: [
      'Limited mitigation due to 22-month delay',
      'Aggravating factor: continued after warnings',
      'Civil enforcement only',
      'Pattern of conduct findings',
      'Independent monitor imposed'
    ]
  },
  {
    name: 'Aggressive Scenario',
    totalRange: '$3.0B – $5.6B',
    perNetwork: '$1.5B – $2.8B',
    assumptions: [
      'DOJ seeks to make example',
      'Criminal DPA or guilty plea',
      'Treble ATA damages triggered',
      'Multiple victim plaintiffs',
      'Full disgorgement of fees + penalties'
    ]
  }
];

// Get framework by ID
export const getFrameworkById = (id: string): LegalFramework | undefined => {
  return legalFrameworks.find(f => f.id === id);
};

// Get precedent by ID
export const getPrecedentById = (id: string): CasePrecedent | undefined => {
  return legalPrecedents.find(p => p.id === id);
};

