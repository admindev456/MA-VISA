// ============================================================
// PLEADING CHECKLIST — Ashley/Halberstam/Taamneh Factor Mapping
// ============================================================
//
// Paragraph-by-paragraph construction guide for a JASTA aiding-
// and-abetting complaint under 18 U.S.C. § 2333(d)(2), mapping
// each Halberstam element / factor to the allegations our record
// supports and the specific evidence anchors that support them.
//
// Structure: three HALBERSTAM ELEMENTS + six substantial-assistance
// FACTORS, each with:
//   - the legal element statement
//   - the controlling authority
//   - supporting allegations from our record
//   - specific evidence-doc and timeline-event citations
//   - candidly-identified gaps in our record
//   - Ashley (2d Cir. 2025) distinguishing factors
//
// This is a research input for drafting, not a legal pleading.

export interface PleadingAllegation {
  /** Text of the allegation, as it might appear in a complaint */
  allegation: string;
  /** Evidence doc IDs from our database */
  evidenceDocIds: string[];
  /** Timeline event IDs from our database */
  timelineEventIds: string[];
  /** Authorities that support this allegation's evidentiary weight */
  supportingAuthorities?: string[];
}

export interface PleadingItem {
  id: string;
  category: 'element' | 'factor';
  number: string;
  title: string;
  legalStandard: string;
  controllingAuthority: string;
  allegations: PleadingAllegation[];
  gaps: string[];
  ashleyDistinguishing: string[];
  strengthAssessment: 'strong' | 'moderate' | 'contested' | 'weak';
}

export const pleadingChecklist: PleadingItem[] = [
  // ============================================================
  // HALBERSTAM ELEMENTS (3)
  // ============================================================

  {
    id: 'elem-1',
    category: 'element',
    number: 'Element 1',
    title: 'Principal Wrongdoing — An Act of International Terrorism Occurred',
    legalStandard:
      'Plaintiffs must plead that an act of "international terrorism" as defined by 18 U.S.C. § 2331(1) occurred — i.e., activity involving violent acts or acts dangerous to human life, appearing to be intended to intimidate or coerce a civilian population or government, occurring primarily outside U.S. territorial jurisdiction.',
    controllingAuthority:
      '18 U.S.C. § 2331(1); Linde v. Arab Bank, 882 F.3d 314, 326 (2d Cir. 2018) (establishing primary-liability threshold); Halberstam v. Welch, 705 F.2d 472 (D.C. Cir. 1983) (aiding-and-abetting framework).',
    allegations: [
      {
        allegation:
          'On January 28, 2024, a one-way Shahed-style Iranian-origin drone struck Tower 22, a U.S. military support outpost in the Rukban area of northeast Jordan, killing three U.S. Army Reserve service members (Sgt. William Rivers, Spc. Kennedy Sanders, Spc. Breonna Moffett) and wounding 47 others.',
        evidenceDocIds: ['doc-055', 'doc-053', 'doc-054', 'doc-056', 'doc-057'],
        timelineEventIds: ['evt-011'],
        supportingAuthorities: ['auth-2331-1', 'auth-state-ansar', 'auth-doj-tower22'],
      },
      {
        allegation:
          'On November 20, 2023, Kata\'ib Hezbollah fired a close-range ballistic missile at Al-Asad Airbase, Iraq, wounding eight U.S. and coalition service members; this was the first ballistic-missile attack of the October 2023-February 2024 campaign.',
        evidenceDocIds: [],
        timelineEventIds: ['evt-035'],
      },
      {
        allegation:
          'On December 25, 2023, Kata\'ib Hezbollah conducted an explosive one-way drone attack on Erbil Air Base that penetrated air defenses and wounded three U.S. service members, one critically. Defense Secretary Austin directly attributed the attack to KH.',
        evidenceDocIds: [],
        timelineEventIds: ['evt-036'],
      },
      {
        allegation:
          'On March 23, 2023, a one-way drone launched by a KH/IRGC facade group (Liwa al-Ghaliboun) struck the coalition maintenance facility at Hasakah/Abu Hajar Airfield (Rmelan), Syria, killing one U.S. contractor and wounding five service members plus one additional contractor.',
        evidenceDocIds: [],
        timelineEventIds: ['evt-032'],
      },
      {
        allegation:
          'Between October 17, 2023 and February 9, 2024, Iran-backed Iraqi militias operating under the Islamic Resistance in Iraq umbrella conducted approximately 168 attacks on U.S. personnel, contractors, and installations in Iraq, Syria, and Jordan, wounding approximately 130 Americans.',
        evidenceDocIds: ['doc-053'],
        timelineEventIds: ['evt-034', 'evt-035', 'evt-036', 'evt-037'],
      },
    ],
    gaps: [
      'Plaintiff-specific injury allegations must be added by counsel — this is where each named plaintiff\'s specific attack and resulting injury attaches.',
      'For plaintiffs wounded in attacks other than Tower 22 / Al-Asad / Erbil, the specific-attack attribution requires expert declaration (Pregent, Gartenstein-Ross) typical of Freeman II.',
    ],
    ashleyDistinguishing: [
      'Ashley\'s plaintiffs were wounded in Afghanistan by IEDs made from fertilizer sold by third-party Pakistani companies to the Taliban/Haqqani — a far more attenuated injury chain. Our plaintiffs were directly targeted by FTO-designated militias at known U.S. military installations.',
      'Specific-attack attribution in our case is documented by Treasury (sb0458), State Department (June 17, 2024 Ansar Awfiya designation), DOJ (Sadeghi/Abedininajafabadi indictment), and CENTCOM (Feb 2 + Feb 7, 2024 press releases) — a level of government-record attribution absent in Ashley.',
    ],
    strengthAssessment: 'strong',
  },

  {
    id: 'elem-2',
    category: 'element',
    number: 'Element 2',
    title:
      'General Awareness — Defendants Were Generally Aware of Their Role as Part of an Overall Illegal or Tortious Activity',
    legalStandard:
      'Plaintiffs must plead that defendants were "generally aware" of their role as part of an overall illegal or tortious activity at the time they provided assistance. Post-Taamneh, this requires more than knowledge of risk; it requires awareness of a role in the specific activity resulting in terror attacks against U.S. nationals.',
    controllingAuthority:
      'Halberstam v. Welch, 705 F.2d at 477; Twitter, Inc. v. Taamneh, 598 U.S. 471, 493-94 (2023); Siegel v. HSBC, 933 F.3d 217, 224 (2d Cir. 2019).',
    allegations: [
      {
        allegation:
          'In May 2023, Federal Reserve Bank of New York and U.S. Treasury officials directly questioned Visa and Mastercard about the 2,900% surge in Iraqi cross-border card transactions from $50 million to $1.5 billion per month.',
        evidenceDocIds: ['doc-003'],
        timelineEventIds: ['evt-005'],
      },
      {
        allegation:
          'In Fall 2023, the U.S. Treasury Department formally briefed Visa and Mastercard executives that the Iraqi transaction surge was driven by Iran-backed Iraqi militias, including Kata\'ib Hezbollah, Asa\'ib Ahl al-Haq, and the Badr Brigade — all FTO-designated or SDGT-designated entities — exploiting the networks\' Iraqi partner banks for sanctions evasion.',
        evidenceDocIds: ['doc-002', 'doc-008'],
        timelineEventIds: ['evt-009'],
      },
      {
        allegation:
          'In August 2023, Mastercard\'s own Global Compliance Team conducted a virtual audit of Yana Banking Services, a principal Iraqi issuer of Mastercard-branded cards, finding "no customer risk rating is performed," "ineffective suspicious activity monitoring and reporting," "ineffective" AML safeguards, and no evidence customers were being screened against U.S. sanctions lists — findings classified as "High Priority" violations.',
        evidenceDocIds: ['doc-001'],
        timelineEventIds: ['evt-008'],
      },
      {
        allegation:
          'Throughout 2024, Treasury, Federal Reserve, Visa, Mastercard, and Central Bank of Iraq representatives held "regular meetings" concerning the Iraqi cross-border surge, at which defendants received ongoing information about the continuing militia use of their networks.',
        evidenceDocIds: [],
        timelineEventIds: ['evt-014'],
      },
      {
        allegation:
          'On January 29, 2024 — one day after the Tower 22 attack — FinCEN designated Al-Huda Bank as a primary money-laundering concern for acting as a conduit for the IRGC-Quds Force, Kata\'ib Hezbollah, and Asa\'ib Ahl al-Haq, putting defendants on peer-institution public notice of the Iraqi banking system\'s active role in Iran-proxy financing.',
        evidenceDocIds: ['doc-047'],
        timelineEventIds: ['evt-051'],
      },
      {
        allegation:
          'Despite these warnings, defendants did not implement significant blocking action until March 2025 (Mastercard) and April 2025 (Visa) — a period of approximately 22 months during which transaction volumes remained at $400 million to $1.1 billion per month.',
        evidenceDocIds: ['doc-004'],
        timelineEventIds: ['evt-017', 'evt-018'],
      },
    ],
    gaps: [
      'Internal Visa and Mastercard communications documenting specific executives\' receipt of Treasury briefings are not yet in our record; they will emerge in discovery.',
      'Specific attribution of Tower 22 / other predicate attacks to KH/AAH/HAN funded by the scheme will require expert declaration connecting scheme proceeds to attack financing.',
    ],
    ashleyDistinguishing: [
      'Ashley defendants had only generalized awareness that Pakistani fertilizer companies operated in a high-risk jurisdiction. Visa and Mastercard received SPECIFIC, NAMED militia attribution from Treasury — Kata\'ib Hezbollah, Asa\'ib Ahl al-Haq, Badr Brigade — in writing, repeatedly, over 22 months.',
      'Ashley did not involve a documented internal audit identifying zero sanctions controls at a principal partner. Our August 2023 Yana audit is a self-authenticating internal record of actual knowledge.',
      'Ashley did not involve "regular meetings" with U.S. regulators specifically addressing the plaintiffs\' injury-causing activity. Ours did.',
    ],
    strengthAssessment: 'strong',
  },

  {
    id: 'elem-3',
    category: 'element',
    number: 'Element 3',
    title:
      'Knowing and Substantial Assistance — Defendants Knowingly and Substantially Assisted the Principal Violation',
    legalStandard:
      'Plaintiffs must plead that defendants knowingly provided substantial assistance to the principal violation. Post-Taamneh, "conscious, voluntary, and culpable participation" is required; routine provision of services to parties that include terrorists is insufficient absent an "unusual way" of providing those services.',
    controllingAuthority:
      'Halberstam, 705 F.2d at 477-78; Taamneh, 598 U.S. at 490-94; Atchley v. AstraZeneca UK Ltd., No. 20-7077 (D.C. Cir. Jan. 23, 2026) (affirming Taamneh survives on "unusual" affirmative conduct).',
    allegations: [
      {
        allegation:
          'The Iraqi cross-border card transaction volume processed by defendants between April 2023 and April 2025 exceeded $20 billion cumulatively, peaking at $1.5 billion per month in April 2023 and sustained at $400 million to $1.1 billion per month throughout 2023-2025.',
        evidenceDocIds: ['doc-004', 'doc-006'],
        timelineEventIds: ['evt-004'],
      },
      {
        allegation:
          'Defendants collected approximately $120 million in combined fee revenue from Iraqi cross-border transactions in 2023 alone, charging between 1% and 1.4% on cross-border dealings, creating a direct financial dependency on the sanctions-evading transaction flow.',
        evidenceDocIds: ['doc-004'],
        timelineEventIds: [],
      },
      {
        allegation:
          'Despite the August 2023 Yana Banking Services audit identifying "High Priority" sanctions-screening failures, Mastercard reinstated Yana\'s ability to issue new Mastercard-branded cards after purported "remediation," rather than terminating the relationship. This affirmative act of reinstatement — not passive inaction — constitutes the "unusual way" conduct that survives Taamneh.',
        evidenceDocIds: ['doc-001'],
        timelineEventIds: ['evt-008', 'evt-010'],
      },
      {
        allegation:
          'Defendants launched or continued marketing of AI-powered fraud-detection capabilities during the Gap Period — including Mastercard\'s Decision Intelligence Pro (Feb. 1, 2024), Visa\'s VAA updates, Visa Protect (Mar. 27, 2024), and VAAI Score (May 7, 2024) — which they publicly represented could detect "every single transaction" (James Mirfin, CNBC, July 26, 2024). These capabilities were not applied to block the ongoing Iraqi scheme, and the 2,900% overnight transaction surge that should have triggered automated intervention did not.',
        evidenceDocIds: ['doc-026', 'doc-031', 'doc-032', 'doc-034'],
        timelineEventIds: ['evt-049'],
      },
      {
        allegation:
          'Defendants possessed the technical capability to block the Iraqi scheme years before they did. When they finally acted in March 2025, Mastercard blocked over 100,000 Iraqi-issued cards and removed 4,000 UAE merchants from its network within a single month; Visa followed in April 2025 with 70,000 cards flagged and 5,000 UAE vendors blocked. The single-month implementation of this blocking demonstrates that the prior 22 months of inaction was a choice rather than a technical limitation.',
        evidenceDocIds: ['doc-004'],
        timelineEventIds: ['evt-017', 'evt-018'],
      },
      {
        allegation:
          'Defendants provided financial incentives to Iraqi issuing partners to boost Iraqi transaction volumes during the surge period, actively encouraging the very transaction flow Treasury had identified as militia-linked.',
        evidenceDocIds: [],
        timelineEventIds: ['evt-003'],
      },
      {
        allegation:
          'As of April 11, 2026, Iran-backed Iraqi militia groups continue to instruct donors to use Mastercard as a payment channel for fundraising campaigns supporting Iran and Lebanese Hezbollah — evidence that defendants\' knowing facilitation persists beyond the March-April 2025 blocking action and undermines any remediation defense.',
        evidenceDocIds: ['doc-019'],
        timelineEventIds: ['evt-031'],
      },
    ],
    gaps: [
      'Internal documents quantifying Iraqi-specific fee revenue by month and by issuing partner are expected in discovery.',
      'Internal communications authorizing Yana\'s reinstatement post-audit — particularly identifying the decision-maker(s) — are expected in discovery.',
      'Expert declaration on payment-network capability to block a 2,900% surge in real time (addressing each of the three Taamneh categories: systems disabled, systems inadequate, alerts ignored) will be needed for MTD briefing.',
    ],
    ashleyDistinguishing: [
      'Ashley found that routine commercial banking for fertilizer companies, even with knowledge of third-party diversion, is not "unusual way" conduct. Our allegations of AFFIRMATIVE REINSTATEMENT of an issuer found to have zero sanctions screening is precisely the kind of anomalous act that takes conduct out of the Ashley "routine services" category.',
      'Ashley defendants\' fee exposure was attenuated from the specific transactions at issue; our defendants charge a direct 1-1.4% cross-border fee on every Iraqi militia transaction — creating the direct financial encouragement Taamneh identifies as escalating culpability.',
      'Ashley involved no post-warning delay; our 22-month delay after named-militia Treasury briefings is the textbook "conscious" posture Taamneh demands.',
    ],
    strengthAssessment: 'strong',
  },

  // ============================================================
  // HALBERSTAM SUBSTANTIAL-ASSISTANCE FACTORS (6)
  // ============================================================

  {
    id: 'factor-1',
    category: 'factor',
    number: 'Factor 1',
    title: 'Nature of the Act Assisted',
    legalStandard:
      'The more integral the assistance to the nature of the principal wrong, the greater the substantial-assistance weight. Financial services are a specifically enumerated form of material support under 18 U.S.C. § 2339A and § 2339B.',
    controllingAuthority: '18 U.S.C. § 2339A; 18 U.S.C. § 2339B; Halberstam, 705 F.2d at 483-84.',
    allegations: [
      {
        allegation:
          'The Iraqi militia scheme could not have operated at the observed scale without access to international payment-network infrastructure. Mastercard and Visa provided the exact "financial services" that 18 U.S.C. § 2339A and § 2339B enumerate as per se material support.',
        evidenceDocIds: ['doc-004', 'doc-010'],
        timelineEventIds: [],
        supportingAuthorities: ['auth-2339A', 'auth-2339B'],
      },
      {
        allegation:
          'The scheme depended on cross-border card processing to convert Iraqi dinars (at the official 1,320 IQD/USD rate) into foreign currency spending outside Iraq, which was then reconverted on the black market at ~1,600 IQD/USD — a 21% arbitrage margin the militias could not capture without defendants\' networks.',
        evidenceDocIds: ['doc-010'],
        timelineEventIds: ['evt-003'],
      },
    ],
    gaps: [
      'Per-transaction quantification of militia-attributable volume will require matching of Treasury-briefed cardholder lists against defendants\' transaction records in discovery.',
    ],
    ashleyDistinguishing: [
      'Ashley\'s defendants provided banking services to Pakistani fertilizer companies, not to the terrorist organization itself or its direct agents. Our defendants processed transactions directly initiated by cardholders later identified by Treasury as PMF militia members.',
    ],
    strengthAssessment: 'strong',
  },

  {
    id: 'factor-2',
    category: 'factor',
    number: 'Factor 2',
    title: 'Amount of Assistance',
    legalStandard:
      'Greater amounts of assistance weigh in favor of substantial assistance. Defendants\' contribution must be more than de minimis.',
    controllingAuthority: 'Halberstam, 705 F.2d at 484.',
    allegations: [
      {
        allegation:
          'Defendants processed approximately $20 billion cumulatively in Iraqi cross-border transactions between April 2023 and April 2025. At peak in April 2023, defendants processed $1.5 billion per month.',
        evidenceDocIds: ['doc-004'],
        timelineEventIds: ['evt-004'],
      },
      {
        allegation:
          'Iranian-aligned militia cardholders captured approximately $450 million in arbitrage profits in 2023 alone, which Treasury concluded were likely used "to buy weapons and finance terror operations."',
        evidenceDocIds: ['doc-004'],
        timelineEventIds: [],
      },
      {
        allegation:
          'In a ten-week period in early 2024, First Iraqi Bank\'s Visa Direct channel moved $1.2 billion to overseas recipients, including a single cardholder pushing $5 million per day to eleven Indonesian accounts — a pattern that should have triggered immediate suspension under any functional real-time monitoring system.',
        evidenceDocIds: ['doc-007'],
        timelineEventIds: ['evt-012', 'evt-013'],
      },
    ],
    gaps: [
      'Monthly Iraqi cross-border volume by defendant (Visa share vs. Mastercard share) must be developed from SEC filings + Treasury data + discovery.',
    ],
    ashleyDistinguishing: [
      'Ashley\'s defendants\' aggregate banking activity with Pakistani fertilizer importers was a small fraction of their overall business. Visa and Mastercard processed more than $20 billion in Iraqi cross-border card transactions — an unambiguously "substantial" amount for Halberstam purposes and orders of magnitude larger than Ashley.',
    ],
    strengthAssessment: 'strong',
  },

  {
    id: 'factor-3',
    category: 'factor',
    number: 'Factor 3',
    title: 'Presence at Time of Tort',
    legalStandard:
      'Whether the defendant was "present" at the time of the tort — interpreted broadly in the financial-institution context to mean proximate temporal engagement with the activity giving rise to the injury.',
    controllingAuthority: 'Halberstam, 705 F.2d at 484.',
    allegations: [
      {
        allegation:
          'The Iraqi transaction surge began in April 2023 and continued at peak through March-April 2025 — temporally overlapping with every attack on U.S. forces in the October 2023 - February 2024 campaign, including the January 28, 2024 Tower 22 attack.',
        evidenceDocIds: [],
        timelineEventIds: ['evt-004', 'evt-011', 'evt-017', 'evt-018'],
      },
      {
        allegation:
          'Defendants processed Iraqi cross-border transactions in real time during the period of active KH, AAH, and HHN attacks on U.S. personnel — including on January 28, 2024, the day of the Tower 22 attack.',
        evidenceDocIds: [],
        timelineEventIds: [],
      },
    ],
    gaps: [
      'Real-time transaction processing logs for Jan 28, 2024 will need to be subpoenaed; not yet in record.',
    ],
    ashleyDistinguishing: [
      'In Ashley, the banks\' services to Pakistani fertilizer companies and the Taliban IED attacks in Afghanistan were temporally continuous but separated by multiple intermediate steps. Our defendants\' transaction processing is simultaneous with the scheme by definition.',
    ],
    strengthAssessment: 'moderate',
  },

  {
    id: 'factor-4',
    category: 'factor',
    number: 'Factor 4',
    title: 'Relation to the Tortious Actor',
    legalStandard:
      'The closer the defendant\'s relationship to the tortious actor, the greater the substantial-assistance weight.',
    controllingAuthority: 'Halberstam, 705 F.2d at 484.',
    allegations: [
      {
        allegation:
          'Defendants maintained direct contractual relationships with at least 17 Iraqi-licensed card issuers, including Yana Banking Services, International Smart Card (Qi Card), Al Saqi Electronic Payment Company, First Iraqi Bank, and others — all of which were cited by U.S. Treasury and Iraqi Central Bank officials as conduits for militia-linked transactions.',
        evidenceDocIds: ['doc-010', 'doc-013'],
        timelineEventIds: [],
      },
      {
        allegation:
          'International Smart Card (ISC / Qi Card) was the principal payment conduit for more than 200,000 PMF militia members who received their state salaries via Qi Cards; Mastercard\'s contractual relationship with ISC directly exposed Mastercard to militia-cardholder transactions.',
        evidenceDocIds: ['doc-010'],
        timelineEventIds: [],
      },
      {
        allegation:
          'Al Saqi Electronic Payment Company — a Treasury-blacklisted Iraqi issuer with affiliation to the Holy Shrine of Al Abbas in Karbala, a major Iranian pilgrim destination — continued to display Visa logos on its website following Visa\'s stated termination, indicating continued relationship or continued authorization.',
        evidenceDocIds: ['doc-004'],
        timelineEventIds: [],
      },
    ],
    gaps: [
      'Full set of Iraqi-issuer license agreements and termination records is a primary discovery target.',
      'Merchant-acquiring relationships in UAE (for the 4,000+ merchants delisted by Mastercard and 5,000+ by Visa in March-April 2025) need documentation.',
    ],
    ashleyDistinguishing: [
      'Ashley held that correspondent banking for Pakistani companies that diverted goods to third-party terrorists was too attenuated. Visa and Mastercard contracted directly with Iraqi issuers that were — per Treasury — the principal militia payroll conduits (particularly ISC/Qi Card with 200,000+ militia cardholders).',
    ],
    strengthAssessment: 'strong',
  },

  {
    id: 'factor-5',
    category: 'factor',
    number: 'Factor 5',
    title: 'State of Mind',
    legalStandard:
      'The defendant\'s state of mind — whether the defendant acted knowingly, recklessly, negligently, or innocently — heavily influences substantial-assistance analysis. Post-Taamneh, "conscious, voluntary, and culpable participation" is the touchstone.',
    controllingAuthority:
      'Halberstam, 705 F.2d at 484; Taamneh, 598 U.S. at 490-94; Weiss v. NatWest, 768 F.3d 202 (2d Cir. 2014) (deliberate-indifference satisfies § 2339B scienter).',
    allegations: [
      {
        allegation:
          'Defendants received specific, named-militia notice from Treasury in Fall 2023 that their networks were being used by Kata\'ib Hezbollah, Asa\'ib Ahl al-Haq, and the Badr Brigade — all FTO-designated or SDGT-designated — to evade U.S. sanctions.',
        evidenceDocIds: ['doc-002', 'doc-008'],
        timelineEventIds: ['evt-009'],
      },
      {
        allegation:
          'Defendants continued processing Iraqi cross-border transactions at volumes of $400 million to $1.1 billion per month for approximately 22 months after receiving this notice.',
        evidenceDocIds: ['doc-004'],
        timelineEventIds: ['evt-017', 'evt-018'],
      },
      {
        allegation:
          'Defendants\' own internal August 2023 Yana Banking audit identified "High Priority" sanctions-screening failures at a principal Iraqi issuer, yet Mastercard reinstated Yana rather than terminating the relationship.',
        evidenceDocIds: ['doc-001'],
        timelineEventIds: ['evt-010'],
      },
      {
        allegation:
          'Mastercard\'s own Senior Vice President of Communications, Seth Eisen, acknowledged to the Wall Street Journal that Mastercard "took action as appropriate" — confirming that Mastercard consciously chose not to take broader action during the Gap Period.',
        evidenceDocIds: ['doc-043'],
        timelineEventIds: [],
      },
      {
        allegation:
          'Defendants\' public statements during the Gap Period — including Mastercard\'s February 1, 2024 Decision Intelligence Pro release (claiming 20-300% fraud-detection enhancement), Visa\'s July 26, 2024 CNBC statement that "every single [Visa] transaction has been processed by AI" — are inconsistent with defendants\' claimed inability to detect or block the 2,900% Iraqi surge, indicating either (a) the surge was detected and allowed, (b) detection systems were overridden, or (c) defendants\' public representations were materially false.',
        evidenceDocIds: ['doc-026', 'doc-034'],
        timelineEventIds: [],
      },
    ],
    gaps: [
      'Internal communications evidencing the specific decision-making on Yana reinstatement and "regular meetings" engagement with Treasury are the central discovery target for state-of-mind.',
    ],
    ashleyDistinguishing: [
      'Ashley defendants had no comparable named-militia briefing record, no comparable 22-month post-warning delay, and no comparable internal audit identifying zero controls at a principal partner. State of mind is categorically more culpable here than in Ashley.',
      'Weiss v. NatWest remains good law on deliberate-indifference scienter for JASTA; our record overwhelmingly satisfies Weiss even without satisfying Taamneh\'s heightened aiding-and-abetting standard.',
    ],
    strengthAssessment: 'strong',
  },

  {
    id: 'factor-6',
    category: 'factor',
    number: 'Factor 6',
    title: 'Duration of Assistance',
    legalStandard:
      'Longer-duration assistance weighs in favor of substantial assistance. Sustained engagement after notice is particularly probative of culpability.',
    controllingAuthority: 'Halberstam, 705 F.2d at 484.',
    allegations: [
      {
        allegation:
          'Defendants processed Iraqi militia-linked cross-border transactions for approximately 22 months between the May 2023 Treasury/NYFed inquiry and the March-April 2025 blocking wave.',
        evidenceDocIds: ['doc-004'],
        timelineEventIds: ['evt-005', 'evt-017', 'evt-018'],
      },
      {
        allegation:
          'Even after the March-April 2025 blocking wave, Iran-backed Iraqi militia groups continue to instruct donors to use Mastercard as a payment channel for Iran and Hezbollah fundraising as of April 11, 2026 — demonstrating that defendants\' facilitation persists on an ongoing basis, not merely historical.',
        evidenceDocIds: ['doc-019'],
        timelineEventIds: ['evt-031'],
      },
      {
        allegation:
          'The period of knowing assistance covers the entire window during which every attack pleaded as a predicate act occurred — including the January 28, 2024 Tower 22 attack, the November 20, 2023 Al-Asad ballistic missile attack, the December 25, 2023 Erbil drone attack, and the October 17-December 31, 2023 campaign.',
        evidenceDocIds: [],
        timelineEventIds: ['evt-011', 'evt-035', 'evt-036'],
      },
    ],
    gaps: [
      'Month-by-month Iraqi-specific transaction volume data needed for a continuity demonstration.',
    ],
    ashleyDistinguishing: [
      'Ashley involved no comparable documented post-warning delay. Our 22 months of post-warning continued processing is itself substantially greater than the delay in any prior failed aiding-and-abetting case.',
      'The April 2026 Long War Journal evidence showing Mastercard is STILL a named militia fundraising channel — a year after the blocking wave — converts our case from "historical" to "ongoing," which is precisely the posture that strengthens duration analysis and defeats any remediation argument.',
    ],
    strengthAssessment: 'strong',
  },
];

// Helpers
export function getElementsOnly(): PleadingItem[] {
  return pleadingChecklist.filter((p) => p.category === 'element');
}

export function getFactorsOnly(): PleadingItem[] {
  return pleadingChecklist.filter((p) => p.category === 'factor');
}

export const STRENGTH_LABEL: Record<
  PleadingItem['strengthAssessment'],
  string
> = {
  strong: 'Strong',
  moderate: 'Moderate',
  contested: 'Contested',
  weak: 'Weak',
};
