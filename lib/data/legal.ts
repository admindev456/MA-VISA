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
      },
      {
        id: 'ata-4',
        name: 'Primary ATA Civil Liability (Post-Sept 2025 FTO Upgrades)',
        statute: '18 U.S.C. § 2333(a)',
        description: 'The September 17, 2025 upgrade of four PMF-aligned militias (HHN, KSS, Ansar Allah al-Awfiya, KIA) from SDGT to full FTO status satisfies the statutory predicate for direct primary-liability civil claims under § 2333(a) by U.S. nationals injured by attacks attributed to these groups — including Tower 22.',
        elements: [
          'Plaintiff is a U.S. national injured in person, property, or business',
          'Injury resulted from an "act of international terrorism"',
          'Predicate offense has been committed by an FTO (18 U.S.C. § 2339B)',
          'Defendant provided "financial services" — a per se form of material support'
        ],
        evidence: [
          'Sep 17, 2025: State Dept upgrades HHN, KSS, Ansar Allah al-Awfiya (19th PMF Brigade), KIA to FTO',
          'June 17, 2024 State Dept terrorist designation of 19th PMF Brigade tied to Tower 22',
          'Tower 22 (Jan 28, 2024) killed Sgt. Rivers, Spc. Sanders, Spc. Moffett',
          'Kreindler & Kreindler FSIA suit against Iran filed Jan 22, 2026 (D.D.C.)',
          'Oct 9, 2025 OFAC: Muhandis General Co. + Baladna formally designated',
          'Networks processed billions for PMF cardholder base during period of attacks'
        ],
        maxPenalty: 'Treble damages + attorneys\' fees'
      },
      {
        id: 'ata-5',
        name: 'Financing of Terrorism (Tower 22 Nexus)',
        statute: '18 U.S.C. § 2339C',
        description: 'Prohibits providing or collecting funds with knowledge or intent that they be used to carry out an act defined as terrorism under the statute. The Tower 22 drone attack on Jan 28, 2024 and continuing militia operations anchor the "underlying act" requirement.',
        elements: [
          'Funds were collected or provided by the defendant',
          'Knowledge or intent that funds would be used for terrorism',
          'Underlying act meets the § 2339C definition (encompassing attacks on U.S. persons abroad)',
          'Jurisdictional nexus to the United States'
        ],
        evidence: [
          'Tower 22 Jan 28, 2024 attack killed 3 U.S. service members',
          'Attack occurred mid-Gap Period while scheme ran at $400M-$1.1B/month',
          '$450M militia profits in 2023 alone, "likely used to buy weapons" (Treasury)',
          'Oct 9, 2025 OFAC: KH/IRGC-QF controlled Muhandis General Company weapons supply',
          'Apr 11, 2026 FDD LWJ: militia fundraising explicitly labels itself a "financial front" for Iran war effort'
        ],
        maxPenalty: 'Up to 20 years imprisonment (criminal); civil disgorgement + damages'
      },
      {
        id: 'jasta-1',
        name: 'JASTA Aiding-and-Abetting (Halberstam as Clarified by Taamneh)',
        statute: '18 U.S.C. § 2333(d)(2) (JASTA, 2016)',
        description: 'Aiding-and-abetting liability under the Halberstam v. Welch six-factor framework, as clarified by Twitter v. Taamneh (2023). Requires (1) general awareness of role in an overall illegal or tortious activity and (2) knowing and substantial assistance. Taamneh demands more than passive provision of services — Visa/MA\'s post-warning conduct satisfies that bar.',
        elements: [
          'Halberstam factor 1: nature of act assisted',
          'Halberstam factor 2: amount of assistance',
          'Halberstam factor 3: presence at time of tort',
          'Halberstam factor 4: relation to tortious actor',
          'Halberstam factor 5: state of mind',
          'Halberstam factor 6: duration of assistance',
          'Taamneh: conscious, voluntary, culpable participation'
        ],
        evidence: [
          'Duration: 22 months of continued processing after Treasury warning',
          'State of mind: Treasury briefings specifically named KH, Badr, AAH',
          'Amount: ~$1.5B/month peak; $400M-$1.1B sustained',
          'Relation: direct fee revenue (1–1.4%) from the prohibited transaction stream',
          'Nature: financial services are per se material support under § 2339B',
          'Post-warning Yana reinstatement = affirmative act, not passive indifference'
        ],
        maxPenalty: 'Treble damages + attorneys\' fees (joint and several)'
      },
      {
        id: 'ata-6',
        name: 'Primary Liability Under § 2331(1) (the Linde Bar)',
        statute: '18 U.S.C. § 2333(a) + 18 U.S.C. § 2331(1) per Linde (2d Cir. 2018)',
        description: 'The Second Circuit\'s 2018 Linde decision held that primary § 2333(a) liability requires the defendant\'s OWN conduct to independently satisfy § 2331(1)\'s definition of "international terrorism" — conduct that "involve[s] violent acts or acts dangerous to human life" AND "appear[s] to be intended to intimidate or coerce a civilian population, to influence the policy of a government by intimidation or coercion, or to affect the conduct of a government by mass destruction, assassination, or kidnapping." Routine authorization and settlement by a card network cannot plausibly satisfy that test — which is why plaintiffs\' bar has pivoted almost entirely to JASTA § 2333(d)(2) aiding-and-abetting. This entry documents the hurdle honestly so counsel can plead around it via Atchley-style affirmative-misconduct theories.',
        elements: [
          'Defendant\'s own conduct must satisfy § 2331(1)(B)(i): "involve violent acts or acts dangerous to human life"',
          'Defendant\'s own conduct must satisfy § 2331(1)(B)(ii): "appear to be intended to intimidate or coerce..."',
          '§ 2339B predicate violation alone is NOT sufficient (Linde, 882 F.3d 314)',
          '"Routine banking services" are not inherently violent (Strauss, 379 F. Supp. 3d 148)',
          'Atchley-style "unusual way" / affirmative misconduct is the surviving pathway'
        ],
        evidence: [
          'OBSTACLE: Linde 2018 vacated the only ATA jury verdict against a bank on this ground',
          'OBSTACLE: Strauss 2019 extended the bar to bulk-transaction banking services',
          'PATHWAY: Post-warning reinstatement of Yana Banking Services (August 2023 audit found zero controls)',
          'PATHWAY: Offering financial incentives to boost Iraqi transaction volume',
          'PATHWAY: Continuation of specific merchant relationships after Treasury briefings',
          'PATHWAY: Post-2025 LWJ evidence (April 11, 2026) that Mastercard is still a named militia fundraising channel',
          'PATHWAY: Atchley v. AstraZeneca (D.C. Cir. Jan 23, 2026 reversal) — second GVR reversal approved commercial-actor JASTA claims on "unusual" bribery-based misconduct'
        ],
        maxPenalty: 'Treble damages + attorneys\' fees (IF § 2331(1) elements can be met)'
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
  status?: 'pending' | 'decided' | 'settled';
  adverse?: boolean;
  distinguishingFactors?: string[];
  judge?: string;
  outcome?: string;
  plaintiffsCount?: number;
  docket?: string;
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
    citation: '598 U.S. 471 (May 18, 2023)',
    court: 'Supreme Court',
    year: 2023,
    summary: 'Justice Thomas\'s unanimous SCOTUS opinion held that "aids and abets" in § 2333(d)(2) requires "a conscious, voluntary, and culpable participation in another\'s wrongdoing," anchored by Nye & Nissen v. United States, 336 U.S. 613 (1949). Plaintiffs lost because social-media services were "generally available to the internet-using public," algorithms were "agnostic as to the nature of the content," and nothing linked their services to the specific Istanbul attack. The Court warned that plaintiffs\' theory would sweep in "all internet or cell service providers" — **an analogy the defense will apply directly to payment networks.** Narrow carve-out: liability can attach where a service provider acts "in an unusual way" or provides "dangerous wares" that selling to an FTO could constitute foreseeable-attack aiding.',
    holding: 'Aiding and abetting under § 2333(d)(2) requires CONSCIOUS, VOLUNTARY, and CULPABLE participation. Halberstam\'s six factors should not be applied mechanically; "knowing" and "substantial" work inversely (less substantial assistance demands greater scienter). Passive routine services do not suffice. But defendants who act "in an unusual way" or provide "dangerous wares" tailored to FTO use remain actionable.',
    relevance: [
      'Distinguishes passive platforms from active facilitators',
      'ADVERSE: explicitly analogizes payment providers to cell service providers — defense will lead with this',
      'Narrow "unusual way / dangerous wares" carve-out is our pathway',
      'Networks\' Yana reinstatement + specific Treasury warnings + 22-month post-warning processing = affirmative/unusual conduct',
      'Anchored to Nye & Nissen, 336 U.S. 613 (1949)',
      'Halberstam factors still govern but not mechanically'
    ],
    tags: ['Aiding & Abetting', 'SCOTUS', 'Culpable Participation', 'Active vs Passive', 'Unusual Way', 'Payment Provider Analogy'],
    status: 'decided',
    judge: 'Thomas (SCOTUS unanimous)',
    outcome: 'Unanimously dismissed; set post-2023 aiding/abetting standard'
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
    tags: ['AML', 'Recent Precedent', 'Growth Restrictions', '2024'],
    status: 'settled'
  },

  // 2025-2026 ADDITIONS — Parallel model dockets and Tower 22 attribution case

  {
    id: 'prec-fraenkel',
    name: 'Fraenkel v. Standard Chartered Bank',
    citation: 'No. 1:24-cv-04484 (S.D.N.Y. filed June 11, 2024)',
    court: 'S.D.N.Y.',
    year: 2024,
    summary: 'JASTA aiding-and-abetting ATA action against Standard Chartered Bank alleging a multi-decade scheme to provide banking services to IRGC, Hezbollah, and their Iraqi militia proxies. Over 240 pages; pending.',
    holding: 'Pending — sets the contemporary template for plaintiff pleading of JASTA aiding-and-abetting against a correspondent bank providing dollar clearing/FX/trade finance to Iranian proxies.',
    relevance: [
      'Contemporary JASTA pleading template (2024 complaint)',
      'Proxy-chain IRGC → KH/AAH/Badr attribution structure our case needs',
      'Counsel: Sparacino PLLC (represents 4,000+ Americans / 1,000+ Gold Star families)',
      'Shows that "routine services" defense is still being actively litigated after Taamneh'
    ],
    tags: ['JASTA', 'Pending', 'S.D.N.Y.', 'Bank Aiding & Abetting', 'IRGC'],
    status: 'pending'
  },
  {
    id: 'prec-moses',
    name: 'Moses v. BNP Paribas S.A.',
    citation: 'No. 1:24-cv-04938 (S.D.N.Y.); MTD DENIED Sept 30, 2025',
    court: 'S.D.N.Y.',
    year: 2024,
    summary: 'JASTA ATA action filed June 11, 2024 by hundreds of American victims of Iran-backed terrorism (including Gold Star families and servicemembers) alleging BNP Paribas knowingly provided illicit banking services to IRGC-controlled Iranian oil and gas front companies despite repeated warnings — facilitating hundreds of millions of dollars in transactions while deliberately evading U.S. counterterrorism controls. Leverages BNP\'s 2014 $8.97B DOJ guilty plea as admission of the historical scheme.',
    holding: 'FAVORABLE — On September 30, 2025, Judge Jessica G. L. Clarke issued an Opinion and Order (Dkt. 40) largely DENYING BNP Paribas\'s motion to dismiss and allowing the case to proceed to DISCOVERY. Sparacino PLLC described this as historic — the first time an ATA claim has been allowed to proceed against a European bank for conducting business in Iran. BNP Paribas filed a motion for reconsideration and alternatively for interlocutory appeal on October 14, 2025; that motion is pending.',
    relevance: [
      'POST-ASHLEY FAVORABLE RULING — MTD denied Sept 30, 2025 after the 2d Cir. Ashley decision; Clarke\'s order is a pleading-stage template our Visa/MA complaint should mirror',
      'Post-guilty-plea civil use of a bank\'s prior admissions — directly analogous if Visa/MA enter a DPA first',
      'Establishes "warnings + continued conduct" as the JASTA fulcrum',
      'Counsel: Sparacino PLLC — the same firm doing Atchley, Miller/Pam, Averbach, Troell, King',
      'BNP\'s Oct 14, 2025 reconsideration/interlocutory-appeal motion is pending; monitor outcome',
      'Judge Clarke is now the most plaintiff-friendly S.D.N.Y. precedent for post-Taamneh bank cases'
    ],
    tags: ['JASTA', 'S.D.N.Y.', 'IRGC', 'Prior DPA', 'MTD Denied', 'Sparacino', 'Post-Ashley', 'Favorable'],
    status: 'pending',
    judge: 'Jessica G. L. Clarke',
    outcome: 'MTD DENIED Sept 30, 2025; BNP reconsideration motion filed Oct 14, 2025; in discovery',
    docket: 'S.D.N.Y. 1:24-cv-04938'
  },
  {
    id: 'prec-troell',
    name: 'Troell v. Binance Holdings Ltd. (2024 filing)',
    citation: 'No. 1:24-cv-07136 (S.D.N.Y. filed 2024); DISMISSED March 6, 2025',
    court: 'S.D.N.Y.',
    year: 2024,
    summary: 'JASTA ATA action against the world\'s largest crypto exchange alleging knowing facilitation of hundreds of millions in transfers to Hamas, Hezbollah, and al-Qaeda; leveraged Binance\'s 2023 $4.3B guilty plea. **DISMISSED MARCH 6, 2025 by Judge Vargas applying Ashley v. Deutsche Bank** — plaintiffs could not link specific transactions to specific Hamas attacks. ADVERSE outcome, but contrast with Raanan v. Binance (MTD denied Feb 2025) shows fact-specific variation. Counsel: Sparacino PLLC.',
    holding: 'ADVERSE: Generalized facilitation of crypto transactions — even with admitted AML failures — fails Taamneh\'s specific-attack-nexus requirement absent transaction-level traceability.',
    relevance: [
      'ADVERSE — demonstrates Ashley\'s immediate downstream impact on payment-infrastructure cases',
      'Same defendant as Raanan (which survived MTD) — fact-specific pleading matters',
      'Counsels our complaint to plead transaction-level specific-attack linkage',
      'Binance 2023 $4.3B plea was NOT enough without transaction nexus',
      'Defense will cite this against our case'
    ],
    tags: ['JASTA', 'S.D.N.Y.', 'Dismissed', 'Payment Infrastructure', 'Adverse', 'Post-Ashley', 'Sparacino'],
    status: 'decided',
    judge: 'Vargas',
    outcome: 'Dismissed March 6, 2025 (applying Ashley)',
    adverse: true,
    docket: 'S.D.N.Y. 24-cv-07136'
  },
  {
    id: 'prec-king',
    name: 'King v. Habib Bank Ltd.',
    citation: 'No. 1:20-cv-04322 (S.D.N.Y.)',
    court: 'S.D.N.Y.',
    year: 2020,
    summary: 'ATA/JASTA case against Pakistan\'s largest commercial bank, Habib Bank Limited, alleging it operated as the financial arm of Pakistan\'s intelligence service supporting the Taliban, al-Qaeda, and Lashkar-e-Taiba.',
    holding: 'Pending — continues to shape the contours of bank aiding-and-abetting liability post-Taamneh.',
    relevance: [
      'Longest-running contemporary JASTA-vs-bank docket',
      'Demonstrates that factual development can overcome Taamneh pleading hurdles',
      'Counsel: Sparacino PLLC',
      'Establishes "state-backed proxy" factual theory used against Visa/MA'
    ],
    tags: ['JASTA', 'Pending', 'S.D.N.Y.', 'Bank Aiding & Abetting'],
    status: 'pending'
  },
  {
    id: 'prec-atchley',
    name: 'Atchley v. AstraZeneca UK Ltd.',
    citation: '22 F.4th 204 (D.C. Cir. 2022); GVR 144 S. Ct. 2679 (2024); REVERSED AGAIN Jan. 23, 2026',
    court: 'D.C. Circuit',
    year: 2026,
    summary: 'ATA/JASTA case against AstraZeneca, Johnson & Johnson, GE Healthcare, Pfizer, and Roche alleging that corrupt kickbacks paid through the Iraqi Ministry of Health during Iran/Jaysh al-Mahdi (JAM) control constituted material support to JAM — a Hezbollah-trained Iraqi militant group that attacked U.S. forces. The Supreme Court GVR\'d in June 2024 in light of Taamneh, but the D.C. Circuit **REVERSED DISMISSAL AGAIN on January 23, 2026**, finding the bribery allegations sufficiently "unusual" to survive Taamneh. Atchley is now the principal surviving pathway for plaintiffs arguing that affirmative, anomalous conduct (bribery, sanctions-stripping, bespoke relationships with FTO fronts) clears the Taamneh bar.',
    holding: 'Commercial-actor JASTA liability survives Taamneh where the conduct is "unusual" — i.e. bribery of an FTO-controlled government ministry. Counsel: Sparacino PLLC. This is the leading positive post-Taamneh precedent for our theory: a Visa/MA complaint that pleads "unusual" post-warning reinstatement of Yana + continued processing of known-militia-linked merchant populations should track Atchley\'s reasoning.',
    relevance: [
      '**PRINCIPAL SURVIVING PATHWAY** post-Taamneh',
      'SCOTUS GVR\'d once; D.C. Cir. reversed dismissal AGAIN Jan 23, 2026',
      '"Unusual" conduct (bribery) cleared the Taamneh bar',
      'Commercial-actor (non-bank) template directly applicable',
      'Iraq-theater ATA template',
      'Counsel: Sparacino PLLC',
      'Our complaint\'s architecture should mirror Atchley\'s "unusual conduct" framing'
    ],
    tags: ['ATA', 'Iraq', 'D.D.C.', 'Commercial Actor', 'Surviving Pathway', 'Unusual Conduct', 'Sparacino'],
    status: 'pending',
    judge: 'D.C. Cir. panel',
    outcome: 'Survived MTD; reversed again Jan 23, 2026 post-GVR',
    docket: 'D.D.C. 17-cv-02136'
  },
  {
    id: 'prec-tower22-iran',
    name: 'Families of Tower 22 Soldiers v. Islamic Republic of Iran',
    citation: 'D.D.C. (filed January 22, 2026)',
    court: 'D.D.C.',
    year: 2026,
    summary: 'FSIA state-sponsored-terrorism exception (28 U.S.C. § 1605A) action filed by Kreindler & Kreindler on behalf of the Gold Star families of Sgt. William Rivers, Spc. Kennedy Sanders, and Spc. Breonna Moffett, seeking compensatory and punitive damages against Iran for orchestrating the Jan 28, 2024 Tower 22 drone attack.',
    holding: 'Pending — any Iran attribution judgment will operate as persuasive authority (and issue-preclusion-adjacent fact basis) for a downstream ATA action against the facilitators (Visa / Mastercard).',
    relevance: [
      'Direct Tower 22 attribution case filed Jan 22, 2026',
      'Counsel: Kreindler & Kreindler LLP',
      'Defeats any attribution dispute in a subsequent §2333(a) action',
      'Consistent with Holladay, Fishbeck, Christie pattern — Iran judgments routinely total $800M-$1.8B',
      'Sister case for any §2333(a) action by the same families against Visa/MA'
    ],
    tags: ['FSIA', 'Tower 22', 'Pending', 'D.D.C.', 'Iran State Sponsor'],
    status: 'pending'
  },

  // =============================================================
  // RESEARCH 3 INTEGRATION — FOUNDATIONAL AND IRAQ-PROXY PRECEDENTS
  // =============================================================

  // Foundational / structural precedents

  {
    id: 'prec-halberstam',
    name: 'Halberstam v. Welch',
    citation: '705 F.2d 472 (D.C. Cir. 1983)',
    court: 'D.C. Circuit',
    year: 1983,
    summary: 'D.C. Circuit decision articulating the three-element aiding-and-abetting framework (principal wrongdoing; general awareness; knowing and substantial assistance) and six substantial-assistance factors (nature of act, amount of assistance, presence, relation, state of mind, duration). Congress expressly endorsed this framework in JASTA § 2(a)(5).',
    holding: 'A person may be liable for aiding and abetting a tort when (1) the principal commits a wrongful act; (2) the secondary actor is generally aware of her role as part of an overall illegal or tortious activity; and (3) the secondary actor knowingly and substantially assists the principal violation. The six substantial-assistance factors guide the inquiry.',
    relevance: [
      'Foundational framework for JASTA aiding-and-abetting',
      'Explicitly endorsed by Congress in JASTA § 2(a)(5)',
      'Six factors still govern post-Taamneh analysis',
      'Our 22-month duration + ~$120M fee amount satisfy two factors on their face'
    ],
    tags: ['Aiding & Abetting', 'Foundational', 'D.C. Circuit', 'JASTA', 'Halberstam Factors'],
    status: 'decided',
    judge: 'D.C. Circuit panel',
    outcome: 'Foundational aiding-and-abetting doctrine'
  },
  {
    id: 'prec-linde-2d-cir',
    name: 'Linde v. Arab Bank, PLC',
    citation: '882 F.3d 314 (2d Cir. 2018)',
    court: '2nd Circuit',
    year: 2018,
    summary: 'Judge Reena Raggi\'s opinion vacated the September 22, 2014 Brooklyn jury verdict — the only ATA jury verdict ever returned against a bank — on the ground that the district court\'s instruction erroneously equated a § 2339B material-support violation with the full § 2331(1) definition of "international terrorism." The decision established that primary § 2333(a) liability requires the bank\'s own conduct to satisfy § 2331(1)\'s "violent or life-endangering" and "appear to be intended to intimidate or coerce" elements independently. Confidential post-remand settlement resolved the case.',
    holding: 'Primary § 2333(a) ATA liability requires more than a § 2339B material-support predicate. The defendant\'s own conduct must independently satisfy § 2331(1)\'s violence and coercion elements. JASTA\'s aiding-and-abetting provision applies retroactively but was not independently established as a matter of law.',
    relevance: [
      'Only ATA bank jury verdict in history — and it was vacated',
      'Created the § 2331(1) Linde bar that defeats primary-liability theories against banks',
      'Confidential settlement: the only ATA case where a bank has paid plaintiffs',
      'Arab Bank had processed "Saudi Committee martyr payments" via NY correspondent',
      'Aug 2010 adverse-inference sanction (Judge Gershon) was the pressure catalyst',
      'Directly shapes how our complaint must plead primary liability'
    ],
    tags: ['Landmark', 'Vacated', 'Settled', '2nd Circuit', 'Primary Liability', 'Linde Bar'],
    status: 'settled',
    judge: 'Reena Raggi (2d Cir.); Brian Cogan (trial); Nina Gershon (pretrial)',
    outcome: 'Jury verdict Sept 2014 → vacated Feb 2018 → confidential settlement',
    plaintiffsCount: 300,
    docket: 'E.D.N.Y. 04-cv-02799'
  },
  {
    id: 'prec-weiss-v',
    name: 'Weiss v. National Westminster Bank, PLC',
    citation: '993 F.3d 144 (2d Cir. 2021); cert. denied June 27, 2022',
    court: '2nd Circuit',
    year: 2021,
    summary: 'Second Circuit (Judge Kearse) affirmed Chief Judge Dora Irizarry\'s March 2019 summary judgment for NatWest. Processing of 457 Interpal wires (196 through its New York correspondent) could not satisfy § 2331(1)\'s violence/coercion elements; JASTA amendments denied as futile because plaintiffs could not plead "general awareness" of a role in Hamas\'s violent activities. Supreme Court denied certiorari June 27, 2022. Capstone of the post-Linde doctrinal era.',
    holding: 'Correspondent wire processing to a designated Hamas-linked charity (Interpal) is not itself "international terrorism" under § 2331(1). JASTA amendment futile where plaintiffs cannot plead general awareness of a role in the FTO\'s violent activities specifically.',
    relevance: [
      'Applied Linde bar to correspondent-banking activity',
      'Established "general awareness of violent activities" requirement for JASTA',
      'SCOTUS denial cements the 2d Circuit approach',
      'Earlier Weiss III (768 F.3d 202, 2014) survived temporarily because of Judge Straub\'s willful-blindness doctrine'
    ],
    tags: ['JASTA', '2nd Circuit', 'Cert Denied', 'Wire Processing', 'Futility'],
    status: 'decided',
    judge: 'Kearse (2d Cir.); Irizarry (trial)',
    outcome: 'Dismissed on summary judgment; affirmed; cert denied',
    docket: 'E.D.N.Y. 05-cv-04622'
  },
  {
    id: 'prec-strauss-2019',
    name: 'Strauss v. Crédit Lyonnais, S.A.',
    citation: '379 F. Supp. 3d 148 (E.D.N.Y. 2019); aff\'d 2d Cir. summary order 842 F. App\'x 701 (2021)',
    court: 'E.D.N.Y. / 2nd Circuit',
    year: 2019,
    summary: 'Chief Judge Dora Irizarry\'s 2019 summary judgment for Crédit Lyonnais on its 13-year maintenance of CBSP (Hamas-linked charity) accounts and five U.S.-dollar transfers through its New York branch. Sharpest articulation of the Linde bar: "deliberate indifference as to whether it provided financial services to organizations that support terrorist groups does not satisfy the fault requirement for Section 2331(1)(B)."',
    holding: 'Deliberate indifference — even to whether a customer is terror-linked — is insufficient for § 2331(1)(B) primary liability. The holding that definitively narrowed Weiss III\'s willful-blindness doctrine to JASTA aiding-and-abetting only.',
    relevance: [
      'Sharpest post-Linde articulation of the § 2331(1) bar',
      'Kills deliberate-indifference as a standalone primary-liability theory',
      'Triggered pleading pivot to JASTA aiding-and-abetting',
      'Affirmed via summary order; cert denied same day as Weiss'
    ],
    tags: ['JASTA', 'E.D.N.Y.', '2nd Circuit', 'Summary Judgment', 'Linde Bar'],
    status: 'decided',
    judge: 'Irizarry',
    outcome: 'Summary judgment for defendant; affirmed',
    docket: 'E.D.N.Y. 06-cv-00702'
  },
  {
    id: 'prec-siegel',
    name: 'Siegel v. HSBC North America Holdings',
    citation: '933 F.3d 217 (2d Cir. Aug. 8, 2019)',
    court: '2nd Circuit',
    year: 2019,
    summary: 'Second Circuit rejected JASTA claims against HSBC and Al Rajhi Bank brought by victims of the November 2005 Amman hotel bombings by Al-Qaeda in Iraq. Affirmed dismissal for failure to plead "general awareness" of the bank\'s role in the FTO\'s violent activities.',
    holding: 'Correspondent banking services to a bank (Al Rajhi) with Saudi royal ownership does not itself establish "general awareness" of a role in AQI\'s violent activities. Plaintiffs must plead specific awareness, not generalized risk.',
    relevance: [
      'JASTA "general awareness" bar applied to Iraq-theater AQI attacks',
      'Rejects "banked a bank that later funded terror" theory',
      'Controls our fact pattern\'s correspondent-chain allegations',
      'Cited extensively in post-Taamneh Second Circuit dismissals'
    ],
    tags: ['JASTA', '2nd Circuit', 'AQI', 'General Awareness'],
    status: 'decided',
    judge: '2d Cir. panel',
    outcome: 'Dismissed; affirmed'
  },
  {
    id: 'prec-owens',
    name: 'Owens v. BNP Paribas',
    citation: '897 F.3d 266 (D.C. Cir. 2018)',
    court: 'D.C. Circuit',
    year: 2018,
    summary: 'D.C. Circuit affirmed Judge Ellen Huvelle\'s January 2017 dismissal of an ATA suit by victims of Al-Qaeda\'s 1998 East Africa embassy bombings against BNP Paribas. BNP had processed $8.8 billion in stripped Sudanese, Iranian, and Cuban transactions through its New York operations — conduct it admitted in its June 2014 guilty plea and $8.9 billion DOJ/OFAC settlement, the largest sanctions penalty ever imposed. Judge Griffith found proximate cause failed because Sudan had countless legitimate uses for hard currency and the chain from BNP to a state sponsor to a non-customer FTO was "far too speculative." Adopted the Rothstein framework that § 2333(a)\'s "by reason of" language imports Holmes v. SIPC proximate causation. Also held JASTA\'s aiding-and-abetting provision does not apply to pre-September 2001 attacks.',
    holding: 'Even an admitted $8.9 billion sanctions-evasion conspiracy cannot satisfy ATA proximate causation when money moved through a sovereign intermediary before reaching the ultimate terrorist actor. The most adverse proximate-cause decision in ATA jurisprudence.',
    relevance: [
      'Proximate-cause bar that kills "sanctions-evasion → state sponsor → proxy" theories',
      'Adopts Rothstein framework importing Holmes v. SIPC',
      'Visa/MA transactions → Iraqi banks → PMF → KH is structurally similar',
      'JASTA pre-9/11 bar separately limits claims',
      'Counter-theory: our case has direct militia cardholders (not sovereign intermediary)'
    ],
    tags: ['Proximate Cause', 'D.C. Circuit', 'Sanctions Stripping', 'Rothstein Framework'],
    status: 'decided',
    judge: 'Griffith (D.C. Cir.); Huvelle (trial)',
    outcome: 'Dismissed; affirmed',
    docket: 'D.D.C. 15-cv-01945'
  },
  {
    id: 'prec-rothstein',
    name: 'Rothstein v. UBS AG',
    citation: '708 F.3d 82 (2d Cir. 2013)',
    court: '2nd Circuit',
    year: 2013,
    summary: 'Second Circuit held that § 2333(a)\'s "by reason of" language imports Holmes v. SIPC proximate causation. Victims of Hamas/Hezbollah attacks could not establish proximate cause for UBS\'s currency provision to Iran, where the funds went to Iran-controlled entities and then allegedly to terrorists.',
    holding: 'ATA plaintiffs must plead direct — not "remote, contingent, or indirect" — causation. Fungibility of funds is not enough. Proximate cause requires a direct nexus between the defendant\'s conduct and the injury.',
    relevance: [
      'Foundational proximate-cause framework',
      'Co-sibling of Owens as the proximate-cause bar',
      'Applied against Iran-proxy theories specifically',
      'Our fact pattern must plead direct nexus via specific merchant/cardholder'
    ],
    tags: ['Proximate Cause', '2nd Circuit', 'Iran', 'Fungibility'],
    status: 'decided',
    judge: '2d Cir. panel',
    outcome: 'Dismissed; affirmed'
  },

  // Iraq / Iran-proxy dockets — directly on-point

  {
    id: 'prec-freeman1',
    name: 'Freeman I v. HSBC Holdings PLC',
    citation: '57 F.4th 66 (2d Cir. 2023); 413 F. Supp. 3d 67 (E.D.N.Y. 2019)',
    court: '2nd Circuit',
    year: 2023,
    summary: 'Predecessor action dismissed on the ground that plaintiffs had pleaded only a conspiracy among HSBC, StanChart, Barclays, CS, Commerzbank, RBS/ABN, and Bank Saderat to evade sanctions — not a conspiracy to kill Americans. Affirmed by the Second Circuit January 5, 2023. Served as the doctrinal predicate for the current Freeman II action.',
    holding: '"Conspiracy to evade sanctions" is not the same as "conspiracy to kill Americans" under JASTA. Plaintiffs must plead the banks shared in the specific intent to injure U.S. nationals, not merely in a scheme whose downstream consequences included attacks.',
    relevance: [
      'Direct Iraq-theater EFP-attack predicate',
      'Same defendants later re-sued in Freeman II with Iraq-specific allegations',
      'Identifies the "sanctions evasion vs. attack conspiracy" pleading gap we must close',
      '~300 Gold Star family plaintiffs'
    ],
    tags: ['JASTA', '2nd Circuit', 'Iraq', 'EFP Attacks', 'Iran Proxies', 'Conspiracy'],
    status: 'decided',
    judge: '2d Cir. panel; Chen (trial)',
    outcome: 'Dismissed; affirmed',
    plaintiffsCount: 300,
    docket: 'E.D.N.Y. 14-cv-06601'
  },
  {
    id: 'prec-freeman2',
    name: 'Freeman II v. HSBC Holdings PLC',
    citation: 'No. 1:18-cv-07359 (E.D.N.Y.) (Judge Pamela Chen)',
    court: 'E.D.N.Y.',
    year: 2018,
    summary: 'Active ATA/JASTA action against HSBC, Standard Chartered, Barclays, Credit Suisse, Commerzbank, RBS/ABN AMRO, and Bank Saderat on behalf of ~300 Gold Star families whose servicemember relatives were killed or injured by Iranian-backed Shi\'a militia EFP (explosively formed penetrator) attacks in Iraq between 2004 and 2011. Judge Chen stayed the case for Taamneh, revived with a Second Amended Complaint in September 2023, partially thrown out in February 2025 (Dkt. 136) after Bartlett protective-order issues, and the MTD on the Third Amended Complaint remains pending as of April 2026. **This is the closest doctrinal analog to any Visa/Mastercard case.**',
    holding: 'Pending — will produce the definitive post-Taamneh test of whether sanctions-stripping for Iranian state banks can be recharacterized (with Iraq-specific IED-attack evidence) as aiding-and-abetting KH/AAH/IRGC-QF attacks on U.S. servicemembers.',
    relevance: [
      'CLOSEST DOCTRINAL ANALOG to a Visa/MA case: ~300 Gold Star plaintiffs + Iraq IED/EFP attacks + Iran-proxy chain',
      'Same predicate attacks window (2004-2011 EFP attacks) our case would cite',
      'Same FTO defendants (KH, AAH, IRGC-QF)',
      'MTD outcome will shape viability of our case',
      'Third Amended Complaint currently pending',
      'Judge Chen\'s reasoning on "sanctions-evasion vs. attack-conspiracy" split will apply to us'
    ],
    tags: ['JASTA', 'Pending', 'Iraq', 'EFP Attacks', 'Iran Proxies', 'Gold Star', 'E.D.N.Y.', 'Closest Analog'],
    status: 'pending',
    judge: 'Pamela Chen',
    outcome: 'MTD pending April 2026 on Third Amended Complaint',
    plaintiffsCount: 300,
    docket: 'E.D.N.Y. 18-cv-07359'
  },
  {
    id: 'prec-bartlett-sgbl',
    name: 'Bartlett v. Société Générale de Banque au Liban',
    citation: 'No. 1:19-cv-00007 (E.D.N.Y.) (Judge Carol Amon)',
    court: 'E.D.N.Y.',
    year: 2019,
    summary: 'Action against thirteen Lebanese banks for correspondent services benefiting Hezbollah-linked customers. MTDs were denied in November 2020 and again in June 2022 after Kaplan. The case remains in discovery.',
    holding: 'Pending — one of the few bank cases that has cleared multiple MTDs post-Taamneh and is now developing a factual record in discovery.',
    relevance: [
      'Bank case with strong post-Taamneh MTD survival track record',
      'Demonstrates that "concrete Hezbollah-affiliate customer list" pleading works',
      'Factually analogous to our "named PMF cardholder cohort" theory',
      'Ongoing discovery may inform our complaint architecture'
    ],
    tags: ['JASTA', 'Pending', 'E.D.N.Y.', 'Hezbollah', 'MTD Survived'],
    status: 'pending',
    judge: 'Carol Amon',
    outcome: 'MTDs denied 2020 and 2022; in discovery',
    docket: 'E.D.N.Y. 19-cv-00007'
  },
  {
    id: 'prec-bartlett-baasiri',
    name: 'Bartlett v. Baasiri',
    citation: '81 F.4th 28 (2d Cir. 2023); cert. denied April 29, 2024',
    court: '2nd Circuit',
    year: 2023,
    summary: 'Second Circuit vacated the denial of Jammal Trust Bank\'s FSIA sovereign-immunity motion in the Bartlett litigation. Cert denied April 29, 2024.',
    holding: 'FSIA sovereign-immunity protections must be independently adjudicated before JASTA aiding-and-abetting claims can proceed against a foreign state-owned bank.',
    relevance: [
      'FSIA procedural adjunct to the main Bartlett docket',
      'Marginal doctrinal impact on our case (Iraqi partners are not sovereign)'
    ],
    tags: ['FSIA', '2nd Circuit', 'Bartlett', 'Sovereign Immunity'],
    status: 'decided',
    judge: '2d Cir. panel',
    outcome: 'Vacated; cert denied'
  },
  {
    id: 'prec-kaplan-lcb',
    name: 'Kaplan v. Lebanese Canadian Bank',
    citation: '999 F.3d 842 (2d Cir. 2021)',
    court: '2nd Circuit',
    year: 2021,
    summary: 'Judge Kearse vacated dismissal, reading Linde\'s "general awareness" test loosely: a defendant need only be aware of playing a role in unlawful activities from which terrorism is foreseeable, and substantial assistance can be indirect (through an intermediary). The plaintiffs\' bar\'s high-water mark in ATA bank litigation.',
    holding: 'General awareness of a role in unlawful activities from which terrorism is foreseeable is sufficient; substantial assistance may be indirect through an intermediary.',
    relevance: [
      'Plaintiffs\' "high-water mark" in ATA bank litigation',
      'Doctrine arguably undermined by Taamneh but not explicitly overruled',
      'Our fact pattern must claim Kaplan\'s "role in foreseeable unlawful activities" framing',
      'LCB later settled confidentially; discovery continues in parallel cases'
    ],
    tags: ['JASTA', '2nd Circuit', 'Kaplan II', 'Hezbollah', 'High-Water Mark'],
    status: 'decided',
    judge: 'Kearse (2d Cir.)',
    outcome: 'Revived; remanded for discovery'
  },
  {
    id: 'prec-honickman',
    name: 'Honickman v. BLOM Bank SAL (SCOTUS)',
    citation: '605 U.S. 204 (June 5, 2025)',
    court: 'Supreme Court',
    year: 2025,
    summary: 'Justice Ketanji Brown Jackson\'s unanimous Supreme Court opinion reversed the Second Circuit\'s 2024 attempt to revive Honickman via Rule 60(b)(6). The Court held that the "extraordinary circumstances" standard is not diluted by a desire to amend — a procedural ruling that effectively ends Honickman and limits post-dismissal revival routes for ATA plaintiffs.',
    holding: 'Rule 60(b)(6)\'s "extraordinary circumstances" standard is not relaxed merely because plaintiffs wish to amend. Unanimous SCOTUS.',
    relevance: [
      'Forecloses Rule 60(b)(6) revival strategies for dismissed ATA cases',
      'Narrows plaintiffs\' post-judgment options',
      'Counsels filing our case correctly the first time',
      'Unanimous vote signals cross-ideological skepticism of ATA revival attempts'
    ],
    tags: ['SCOTUS', 'Rule 60(b)', 'Procedural', 'Unanimous', 'Adverse-Procedural'],
    status: 'decided',
    judge: 'Jackson (SCOTUS unanimous)',
    outcome: 'Reversed 2d Cir.; forecloses Rule 60(b)(6) revival'
  },
  {
    id: 'prec-miller-pam',
    name: 'Miller / Pam v. Arab Bank',
    citation: 'No. 1:18-cv-02192 / 18-cv-04670 (E.D.N.Y.) (Judge Cogan)',
    court: 'E.D.N.Y.',
    year: 2018,
    summary: 'Post-Linde follow-on litigation against Arab Bank targeting Hamas-linked charity accounts and martyr payments. MTDs largely denied in 2019; the case continues in discovery, building on the Linde factual record. Counsel: Sparacino PLLC.',
    holding: 'Pending — represents the "Linde factual record redeployed post-Taamneh" approach. MTD denial shows this architecture can survive.',
    relevance: [
      'Direct Hamas-front account-holder factual pattern',
      'Builds on Linde evidentiary foundation',
      'Counsel: Sparacino PLLC',
      'Shows that pre-existing bank-specific factual record can beat Taamneh at pleading stage'
    ],
    tags: ['JASTA', 'Pending', 'E.D.N.Y.', 'Hamas', 'MTD Denied', 'Sparacino'],
    status: 'pending',
    judge: 'Brian Cogan',
    outcome: 'MTD largely denied 2019; in discovery',
    docket: 'E.D.N.Y. 18-cv-02192 / 18-cv-04670'
  },
  {
    id: 'prec-averbach',
    name: 'Averbach v. Cairo Amman Bank',
    citation: 'No. 1:19-cv-00004 (S.D.N.Y.)',
    court: 'S.D.N.Y.',
    year: 2019,
    summary: 'Parallel Hamas-linked charity account case against Cairo Amman Bank. Aiding/abetting claim proceeds to discovery. Counsel: Sparacino PLLC.',
    holding: 'Pending — aiding/abetting claim proceeds; adds to Sparacino PLLC\'s book of post-Taamneh bank dockets.',
    relevance: [
      'Additional Sparacino JASTA docket',
      'Hamas-linked customer architecture',
      'In discovery'
    ],
    tags: ['JASTA', 'Pending', 'S.D.N.Y.', 'Hamas', 'Sparacino'],
    status: 'pending',
    outcome: 'Aiding/abetting claim proceeds; in discovery',
    docket: 'S.D.N.Y. 19-cv-00004'
  },
  {
    id: 'prec-zobay',
    name: 'Zobay v. MTN Group Ltd.',
    citation: 'No. 1:21-cv-03503 (E.D.N.Y.)',
    court: 'E.D.N.Y.',
    year: 2021,
    summary: 'JASTA action against MTN Group (South African telecom; not a bank but an analogous infrastructure provider) for allegedly providing telecom services to IRGC, Taliban, and al-Qaeda through a joint venture with an IRGC front. MTD denied September 2023; in discovery.',
    holding: 'Pending — infrastructure-provider JASTA liability can survive MTD where plaintiffs plead a direct joint venture with an FTO front.',
    relevance: [
      'Direct analog for "payment infrastructure as defendant" theory',
      'MTD denial is doctrinal daylight for Visa/MA-type defendants',
      'Key fact: joint venture with IRGC front (bespoke counterparty)',
      'Counsel: Sparacino PLLC'
    ],
    tags: ['JASTA', 'Pending', 'E.D.N.Y.', 'Infrastructure', 'MTD Denied', 'Sparacino'],
    status: 'pending',
    outcome: 'MTD denied September 2023; in discovery',
    docket: 'E.D.N.Y. 21-cv-03503'
  },

  // Crypto parallels — the current frontier

  {
    id: 'prec-raanan',
    name: 'Raanan v. Binance Holdings Ltd.',
    citation: '2025 WL 605594 (S.D.N.Y. Feb 2025)',
    court: 'S.D.N.Y.',
    year: 2025,
    summary: 'S.D.N.Y. DENIED Binance\'s MTD on JASTA aiding-and-abetting claims brought by victims of Hamas attacks, while dismissing primary-liability claims. The favorable ruling emerged post-Ashley and reflects the court giving weight to Binance\'s 2023 $4.3 billion DOJ plea admitting systemic AML failures on terror-linked transactions.',
    holding: 'Admitted systemic AML failures on terror-linked transactions can support JASTA aiding-and-abetting survival at the MTD stage — even after Ashley. Primary-liability claims separately fail the Linde bar.',
    relevance: [
      'POST-Ashley FAVORABLE ruling — critical for our posture',
      'Establishes that admitted AML failures can beat Taamneh',
      'Mastercard has NOT admitted AML failures (yet) — but the Yana audit is documentary equivalent',
      'Counsel for our case can cite Raanan as MTD-survival template',
      'Crypto parallel; the factual record has more smoking guns'
    ],
    tags: ['JASTA', 'S.D.N.Y.', 'MTD Denied', 'Binance', 'Crypto', 'Favorable', 'Post-Ashley'],
    status: 'pending',
    judge: 'S.D.N.Y.',
    outcome: 'MTD DENIED on aiding/abetting; primary claims dismissed'
  },
  {
    id: 'prec-troell-dismiss',
    name: 'Troell v. Binance Holdings Ltd.',
    citation: 'S.D.N.Y. March 6, 2025 (Judge Vargas)',
    court: 'S.D.N.Y.',
    year: 2025,
    summary: 'Judge Vargas dismissed JASTA claims against Binance on March 6, 2025, applying Ashley v. Deutsche Bank. Plaintiffs could not link specific transactions to specific Hamas attacks. Counsel: Sparacino PLLC.',
    holding: 'Applying Ashley, generalized facilitation of crypto transactions — even with admitted AML failures — fails Taamneh\'s specific-attack-nexus requirement in the absence of transaction-level traceability.',
    relevance: [
      'ADVERSE — shows Ashley\'s immediate downstream impact',
      'Dismissal of same defendant where Raanan survived is jurisdiction-dependent',
      'Counsels pleading transaction-level linkage in our complaint',
      'Contrast Raanan (MTD denied same defendant) shows fact-specific results'
    ],
    tags: ['JASTA', 'S.D.N.Y.', 'Dismissed', 'Binance', 'Adverse', 'Post-Ashley'],
    status: 'decided',
    judge: 'Vargas',
    outcome: 'Dismissed (applying Ashley)',
    adverse: true
  },
  {
    id: 'prec-balva',
    name: 'Balva v. Binance',
    citation: 'D.N.D. filed November 24, 2025',
    court: 'D.N.D.',
    year: 2025,
    summary: 'JASTA aiding-and-abetting action against Binance filed November 24, 2025 in the District of North Dakota, demanding ~$3 billion trebled. Counsel: Willkie Farr & Gallagher. Represents the plaintiffs\' bar\'s most aggressive post-Taamneh damages theory against a payment-adjacent defendant.',
    holding: 'Pending — a North Dakota forum and a Big Law counsel team suggest the plaintiffs\' bar is exploring forum-specific differences in post-Taamneh doctrine.',
    relevance: [
      '$3B trebled damages demand — scale benchmark',
      'Willkie Farr counsel — Big Law plaintiffs\' bar entrant',
      'N.D. forum outside the dominant 2d Cir. doctrine',
      'Our firm should track outcome for venue-selection implications'
    ],
    tags: ['JASTA', 'Pending', 'D.N.D.', 'Binance', 'Crypto', 'Big Law', 'Damages'],
    status: 'pending',
    outcome: 'Filed; pending',
    docket: 'D.N.D. filed Nov 24, 2025'
  },

  // ADVERSE PRECEDENT — must be addressed head-on

  {
    id: 'prec-ashley',
    name: 'Ashley v. Deutsche Bank Aktiengesellschaft',
    citation: '2d Cir. July 21, 2025',
    court: '2nd Circuit',
    year: 2025,
    summary: 'The Second Circuit affirmed dismissal of JASTA aiding-and-abetting claims against Deutsche Bank, Standard Chartered Bank, and Danske Bank brought by U.S. service members injured in Afghanistan by IEDs made from fertilizer supplied by Pakistani companies banked by the defendants even after U.S. military warnings. Applying Twitter v. Taamneh, the panel rejected a "fungibility" theory and held that routine commercial banking — even where defendants knew goods were being diverted — does not meet Taamneh\'s "conscious and culpable participation" standard.',
    holding: 'ADVERSE: "Indifference is not enough." Generalized banking services provided to diverter/front companies, even with notice of high-risk jurisdictions and prior U.S. military warnings, fall short of JASTA\'s Halberstam/Taamneh standard. Ashley has become the controlling post-Taamneh template in the Second Circuit for dismissing bank-defendant ATA cases absent evidence of affirmative, anomalous conduct.',
    relevance: [
      'Defense will lead with this — the most important adverse precedent of the 2023-2025 era',
      'Controls every pending bank case in the Second Circuit post-Taamneh',
      'Cited by district courts to dismiss Troell v. Binance (March 2025)',
      'Rejects "fungibility of funds" theory that Boim III / Linde had suggested was viable',
      'Pleading-stage dismissal — not a summary-judgment or trial outcome'
    ],
    tags: ['Adverse', 'JASTA', 'Taamneh', '2nd Circuit', 'Pleading Standard', 'Financial Institutions', 'Controlling'],
    status: 'decided',
    adverse: true,
    judge: 'Second Circuit panel',
    outcome: 'Affirmed dismissal (July 21, 2025)',
    distinguishingFactors: [
      'FACT PATTERN IS FAR MORE ATTENUATED: Ashley involved Pakistani fertilizer companies whose product was diverted by unaffiliated third parties to Taliban/Haqqani IED-makers in Afghanistan. Our case involves direct transaction-level facilitation, not a downstream-diversion chain.',
      'DIRECT TREASURY/NYFed WARNINGS: Ashley defendants had generalized U.S. military warnings about diversion risk; Visa/MA received specific May 2023 and Fall 2023 Treasury/NY Fed briefings explicitly naming Kata\'ib Hezbollah, Badr Brigade, and Asa\'ib Ahl al-Haq and identifying the Iraqi cross-border surge as militia-linked.',
      '22-MONTH POST-WARNING DELAY: Ashley had no comparable notice-then-inaction narrative; our delay is documented to the month, with "regular meetings" throughout 2024 that the networks never acted on.',
      'FEE-BASED PROFIT DEPENDENCY: Visa/MA earn 1–1.4% cross-border fees on the very transactions at issue (~$120M collectively). Ashley defendants\' fee exposure from Pakistani fertilizer counterparties was far more attenuated and not tied to the diverted IED-precursor volume.',
      'REAL-TIME FRAUD MODELS: A 2,900% overnight surge is precisely the anomaly Visa/MA\'s own marketed AI fraud systems claim to catch in real time (Decision Intelligence Pro: "20%-300%"; VAAI Score: 20ms; Mirfin July 2024: "every transaction processed by AI"). Ashley\'s wire-service defendants did not market comparable real-time screening capabilities.',
      'FTO PREDICATE: Sept 17, 2025 FTO upgrades of HHN, KSS, Ansar Awfiya, and Kata\'ib al-Imam Ali satisfy § 2333\'s statutory predicate that Ashley plaintiffs, relying on Taliban/Haqqani, lacked at the time of the relevant conduct.',
      'TOWER 22 ATTRIBUTION: June 17, 2024 State Dept terrorist designation of Ansar Allah al-Awfiya (19th PMF Brigade) eliminates the diffuse attribution problem that sank Ashley; the DOJ indictment of Sadeghi/Abedininajafabadi in December 2024 further nails attribution.',
      'AFFIRMATIVE ACT: Yana reinstatement after the August 2023 "zero-controls" audit is an affirmative act — not passive inaction — that goes beyond the passive routine-banking posture Ashley condemned; this is the Atchley-style "unusual way" conduct that post-Taamneh courts look for.',
      'CONTINUATION POST-BLOCKING: April 2026 FDD Long War Journal evidence that militia fundraising STILL names Mastercard shows ongoing knowing facilitation, not a single historical episode.'
    ]
  }
];

// Adverse / defense precedents — surfaced on the Legal Analysis page so the
// litigation team is never blindsided and the distinguishing arguments are captured
// in the data layer.
export const adversePrecedents: CasePrecedent[] = legalPrecedents.filter(p => p.adverse);

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
