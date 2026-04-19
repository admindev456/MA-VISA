// ============================================================
// DEFENDANT CORPORATE STRUCTURE TABLE
// ============================================================
//
// Proper litigation-caption naming for Visa Inc. and Mastercard
// Incorporated and their principal U.S./international subsidiaries.
// Sourced from SEC filings (10-K Exhibit 21, 10-Q, proxy statements),
// state secretary-of-state business filings, and corporate websites.
//
// VERIFICATION STATUS: Subsidiary names and jurisdictions for
// Mastercard verified against the Mastercard FY2025 Form 10-K
// Exhibit 21 filed Feb. 11, 2026 (SEC Accession No. 0001141391-26-
// 000013). Visa subsidiary names verified against Visa S-4 2007
// restructuring filings (permanent structure unchanged post-2008
// IPO) and current SEC registrant data. Registered-agent details
// should be verified against Delaware Secretary of State records
// before service of process.

export interface DefendantEntity {
  /** Full legal name as it appears in SEC filings */
  legalName: string;
  /** Common name / trading name */
  commonName: string;
  /** State / jurisdiction of incorporation */
  jurisdiction: string;
  /** Principal place of business */
  principalPlaceOfBusiness: string;
  /** IRS Employer Identification Number where publicly disclosed */
  ein?: string;
  /** Role within the corporate family */
  role: string;
  /** SEC CIK / ticker (parent only) */
  secInfo?: string;
  /** Suggested use in caption */
  captionForm: string;
  /** Litigation-theory relevance */
  litigationRelevance: string;
  /** Registered agent for service (best-known; verify before service) */
  registeredAgent?: string;
}

export interface DefendantCorporateFamily {
  /** Short family name (Visa / Mastercard) */
  family: 'Visa' | 'Mastercard';
  /** Parent entity */
  parent: DefendantEntity;
  /** Principal U.S. operating subsidiaries directly relevant to litigation */
  principalOperatingSubsidiaries: DefendantEntity[];
  /** Relevant non-U.S. subsidiaries (particularly UAE / EEMEA) */
  relevantForeignSubsidiaries: DefendantEntity[];
  /** Known senior officers (C-suite + GC) */
  knownSeniorOfficers: Array<{
    name: string;
    title: string;
    publicStatementsNote?: string;
  }>;
  /** Notes on captioning strategy */
  captioningNotes: string;
  /** Source verification */
  sources: string[];
}

// ============================================================
// VISA CORPORATE FAMILY
// ============================================================

export const visaFamily: DefendantCorporateFamily = {
  family: 'Visa',
  parent: {
    legalName: 'Visa Inc.',
    commonName: 'Visa',
    jurisdiction: 'Delaware',
    principalPlaceOfBusiness: 'P.O. Box 8999, San Francisco, California 94128-8999',
    ein: '26-0267673',
    role: 'Ultimate parent holding company; publicly traded on NYSE under ticker "V"',
    secInfo: 'SEC CIK 0001403161; NYSE:V',
    captionForm: 'Visa Inc.',
    litigationRelevance:
      'Publicly traded holding company; proper defendant for Section 10(b)/Rule 10b-5 material-omission claims grounded in 10-K disclosure. For ATA claims, the operating subsidiaries are the more appropriate defendants, though Visa Inc. would likely be named alongside on piercing / alter-ego / direct-conduct theories.',
    registeredAgent:
      'The Corporation Trust Company, Corporation Trust Center, 1209 Orange Street, Wilmington, DE 19801 (Delaware). Verify current agent via DE SOS before service.',
  },
  principalOperatingSubsidiaries: [
    {
      legalName: 'Visa U.S.A. Inc.',
      commonName: 'Visa U.S.A.',
      jurisdiction: 'Delaware',
      principalPlaceOfBusiness: 'San Francisco, California',
      role: 'Principal U.S. operating subsidiary; contracts with U.S. issuing and acquiring banks; operates Visa payment system within the United States.',
      captionForm: 'Visa U.S.A. Inc.',
      litigationRelevance:
        'Directly contracts with U.S. financial institutions on sanctions-compliance obligations. Primary ATA operating defendant for U.S.-issuer misconduct. "U.S.A." is punctuated with periods per Visa\'s public filings (not "Visa USA Inc.").',
      registeredAgent:
        'The Corporation Trust Company, Corporation Trust Center, 1209 Orange Street, Wilmington, DE 19801 (verify).',
    },
    {
      legalName: 'Visa International Service Association',
      commonName: 'Visa International',
      jurisdiction: 'Delaware',
      principalPlaceOfBusiness: 'San Francisco, California',
      role: 'Global operating subsidiary; contracts with non-U.S. issuing/acquiring institutions outside Europe (Visa Europe operates as separate subsidiary); operates Visa payment system for CEMEA region covering Iraq.',
      captionForm: 'Visa International Service Association',
      litigationRelevance:
        'CEMEA (Central Europe, Middle East, Africa) operations — including Iraqi issuer relationships — fall under this entity. The Yana Banking / ISC / Al Saqi / FIB contractual relationships are almost certainly held here, making this the single most important Visa entity to caption for the ATA primary claims.',
      registeredAgent:
        'The Corporation Trust Company, Corporation Trust Center, 1209 Orange Street, Wilmington, DE 19801 (verify).',
    },
    {
      legalName: 'Visa Canada Association',
      commonName: 'Visa Canada',
      jurisdiction: 'Delaware (federally chartered Canadian operations)',
      principalPlaceOfBusiness: 'Toronto, Canada',
      role: 'Canadian operating subsidiary. Not directly relevant to Iraq/Iran-proxy claims but included for completeness; may be named in any fully-joined action.',
      captionForm: 'Visa Canada Association',
      litigationRelevance: 'Low — included only for completeness. Consider omitting unless Canadian operations surface in discovery.',
    },
  ],
  relevantForeignSubsidiaries: [
    {
      legalName: 'Visa Europe Limited',
      commonName: 'Visa Europe',
      jurisdiction: 'England and Wales',
      principalPlaceOfBusiness: 'London, United Kingdom',
      role: 'European operating subsidiary; acquired from member banks in 2016. Operates Visa payment system across Europe, including UK, France, Germany.',
      captionForm: 'Visa Europe Limited',
      litigationRelevance:
        'Potentially relevant to European acquirers involved in Iraq-corridor cashout. Subject to UK jurisdiction.',
    },
  ],
  knownSeniorOfficers: [
    {
      name: 'Ryan McInerney',
      title: 'Chief Executive Officer',
      publicStatementsNote: 'Never publicly commented on Iraq / card scheme.',
    },
    {
      name: 'Chris Suh',
      title: 'Chief Financial Officer',
    },
    {
      name: 'Paul Fabara',
      title: 'Chief Risk Officer',
      publicStatementsNote: 'VAAI Score launch spokesperson; owns VIRP (effective May 1, 2023).',
    },
    {
      name: 'James Mirfin',
      title: 'Global Head of Risk & Identity Solutions',
      publicStatementsNote: 'CNBC July 26, 2024 "every transaction processed by AI" quote.',
    },
    {
      name: 'Bill Sheedy',
      title: 'Senior Advisor to the CEO',
      publicStatementsNote: 'Senate Judiciary Nov 19, 2024 testimony.',
    },
    {
      name: 'Al Kelly',
      title: 'Former CEO (2016-Feb 2023)',
      publicStatementsNote: 'Oct 25, 2022 Q4 FY2022 call touted "Visa Iraq Islamic Bank."',
    },
  ],
  captioningNotes:
    'For ATA/JASTA claims, name Visa Inc. (parent), Visa U.S.A. Inc., and Visa International Service Association as co-defendants. The Visa International Service Association entity is the most critical for Iraqi-issuer-contract claims. Consider adding Visa Europe Limited only if UK acquirer involvement is pleaded. "Visa U.S.A. Inc." is the correct form; "Visa USA Inc." without periods is incorrect under Visa\'s own public filings.',
  sources: [
    'Visa Inc. S-4/A Registration Statement (2007) (restructuring creating the Visa Inc. holding-company structure)',
    'Visa Inc. Form 10-K (most recent fiscal year)',
    'SEC EDGAR CIK 0001403161',
    'Delaware Secretary of State, Division of Corporations',
  ],
};

// ============================================================
// MASTERCARD CORPORATE FAMILY
// ============================================================

export const mastercardFamily: DefendantCorporateFamily = {
  family: 'Mastercard',
  parent: {
    legalName: 'Mastercard Incorporated',
    commonName: 'Mastercard',
    jurisdiction: 'Delaware',
    principalPlaceOfBusiness: '2000 Purchase Street, Purchase, New York 10577-2509',
    role: 'Ultimate parent holding company; publicly traded on NYSE under ticker "MA"',
    secInfo: 'SEC CIK 0001141391; NYSE:MA',
    captionForm: 'Mastercard Incorporated',
    litigationRelevance:
      'Publicly traded holding company; proper defendant for Section 10(b)/Rule 10b-5 and Section 13(r) claims grounded in 10-K and exhibit disclosures. Tiffany Hall (General Counsel) signs 13(r) notice. For ATA claims, operating subsidiaries are the more appropriate primary defendants.',
    registeredAgent:
      'The Corporation Trust Company, Corporation Trust Center, 1209 Orange Street, Wilmington, DE 19801 (Delaware). Verify before service.',
  },
  principalOperatingSubsidiaries: [
    {
      legalName: 'Mastercard International Incorporated',
      commonName: 'Mastercard International',
      jurisdiction: 'Delaware',
      principalPlaceOfBusiness: 'Purchase, New York',
      role: 'Principal global operating subsidiary; contracts with issuing and acquiring institutions worldwide outside certain regional subsidiaries; operates Mastercard payment network globally.',
      captionForm: 'Mastercard International Incorporated',
      litigationRelevance:
        'The single most important Mastercard entity for ATA claims. The Yana Banking Services / International Smart Card / Al Saqi contractual relationships almost certainly sit here. The August 2023 Yana compliance audit was conducted by "Mastercard Global Compliance Team" operating under this subsidiary. The March 2025 100,000+ card blocking and 4,000 UAE merchant delisting decisions also flow through this entity.',
      registeredAgent:
        'The Corporation Trust Company, Corporation Trust Center, 1209 Orange Street, Wilmington, DE 19801 (verify).',
    },
    {
      legalName: 'Mastercard A&M Investment Holdings, LLC',
      commonName: 'Mastercard A&M',
      jurisdiction: 'Delaware',
      principalPlaceOfBusiness: 'Purchase, New York',
      role: 'Acquisitions and investments holding subsidiary.',
      captionForm: 'Mastercard A&M Investment Holdings, LLC',
      litigationRelevance: 'Low — relevant only if M&A-related claims emerge (e.g., Brighterion acquisition oversight).',
    },
    {
      legalName: 'Mastercard Financing Solutions LLC',
      commonName: 'Mastercard Financing Solutions',
      jurisdiction: 'Delaware',
      principalPlaceOfBusiness: 'Purchase, New York',
      role: 'Financing solutions and debit-related services operating subsidiary.',
      captionForm: 'Mastercard Financing Solutions LLC',
      litigationRelevance: 'Low-Medium — relevant if Qi Card-style debit salary-disbursement operations are pleaded at the subsidiary level.',
    },
    {
      legalName: 'Mastercard Technologies, LLC',
      commonName: 'Mastercard Technologies',
      jurisdiction: 'Delaware',
      principalPlaceOfBusiness: 'St. Louis, Missouri (primary tech operations)',
      role: 'Technology operations subsidiary; manages Mastercard\'s transaction-processing infrastructure and fraud-detection AI systems (Decision Intelligence Pro, Brighterion integration).',
      captionForm: 'Mastercard Technologies, LLC',
      litigationRelevance:
        'Medium-High — AI fraud-detection systems (DIP, VAAI-analog) that allegedly failed to detect the 2,900% surge are operated here. Technology-facing discovery likely flows through this entity.',
    },
    {
      legalName: 'Mastercard US Holdings LLC',
      commonName: 'Mastercard US Holdings',
      jurisdiction: 'Delaware',
      principalPlaceOfBusiness: 'Purchase, New York',
      role: 'U.S. holding sub.',
      captionForm: 'Mastercard US Holdings LLC',
      litigationRelevance: 'Low — structural only.',
    },
  ],
  relevantForeignSubsidiaries: [
    {
      legalName: 'Mastercard Middle East Africa FZ-LLC',
      commonName: 'Mastercard Middle East Africa',
      jurisdiction: 'United Arab Emirates (Dubai Free Zone)',
      principalPlaceOfBusiness: 'Dubai, UAE',
      role: 'Regional operating subsidiary for Middle East and Africa; UAE-domiciled via Dubai free-zone structure. Contracts with UAE acquirers and regional issuers.',
      captionForm: 'Mastercard Middle East Africa FZ-LLC',
      litigationRelevance:
        'DIRECT relevance — this is the entity with jurisdiction over the UAE merchant relationships (the 4,000 merchants added to MATCH in March 2025 and the Iraqi issuer relationships for the CEMEA region). Subject to UAE jurisdiction; service via Hague Convention or letters rogatory.',
    },
    {
      legalName: 'Mastercard Europe SA',
      commonName: 'Mastercard Europe',
      jurisdiction: 'Belgium',
      principalPlaceOfBusiness: 'Waterloo, Belgium',
      role: 'European regional operating subsidiary.',
      captionForm: 'Mastercard Europe SA',
      litigationRelevance: 'Medium — relevant if European acquirers are involved in Iraq-corridor cashout (e.g., European credit partners of Middle Eastern acquirers).',
    },
    {
      legalName: 'Mastercard Asia/Pacific Pte. Ltd.',
      commonName: 'Mastercard Asia/Pacific',
      jurisdiction: 'Singapore',
      principalPlaceOfBusiness: 'Singapore',
      role: 'Asia-Pacific regional operating subsidiary.',
      captionForm: 'Mastercard Asia/Pacific Pte. Ltd.',
      litigationRelevance: 'Medium — relevant for Indonesian-destination flows (e.g., the FIB Visa Direct $5M/day pattern had 11 Indonesian accounts; Mastercard equivalent flows may route through this entity).',
    },
  ],
  knownSeniorOfficers: [
    {
      name: 'Michael Miebach',
      title: 'Chief Executive Officer (since January 2021)',
      publicStatementsNote: 'Never publicly commented on Iraq / card scheme.',
    },
    {
      name: 'Sachin Mehra',
      title: 'Chief Financial Officer',
      publicStatementsNote: 'Q1/Q2 2025 earnings call euphemisms on Iraq ("moderation," "enforcement of Mastercard rules").',
    },
    {
      name: 'Ajay Bhalla',
      title: 'President, Cyber and Intelligence',
      publicStatementsNote: 'Decision Intelligence Pro Feb 1, 2024 release spokesperson.',
    },
    {
      name: 'Linda Kirkpatrick',
      title: 'President, Americas',
      publicStatementsNote: 'Senate Judiciary Nov 19, 2024 testimony.',
    },
    {
      name: 'Ling Hai',
      title: 'President, Asia Pacific, Europe, Middle East and Africa',
      publicStatementsNote: 'Presented at Nov 13, 2024 Investment Community Meeting.',
    },
    {
      name: 'Karen Griffin',
      title: 'Chief Risk Officer',
      publicStatementsNote: 'Presented at Nov 13, 2024 Investment Community Meeting.',
    },
    {
      name: 'Tiffany Hall',
      title: 'General Counsel',
      publicStatementsNote: 'Signatory of Feb 11, 2026 Section 13(r) notice to SEC.',
    },
    {
      name: 'Seth Eisen',
      title: 'Senior Vice President, Communications',
      publicStatementsNote: 'Sole Mastercard spokesperson on WSJ investigation; three on-record quotes May 31, 2025.',
    },
  ],
  captioningNotes:
    'For ATA/JASTA claims, name Mastercard Incorporated (parent), Mastercard International Incorporated, and (critically) Mastercard Middle East Africa FZ-LLC as co-defendants. The MEA subsidiary holds the UAE acquirer and Iraqi issuer relationships directly and is the single most important Mastercard entity to reach for the "unusual way" affirmative-conduct theory. Also name Mastercard Technologies, LLC if the AI fraud-detection-failure theory is developed. Consider Mastercard Asia/Pacific Pte. Ltd. if Indonesian outbound flows emerge (FIB Visa Direct pattern analog). "Mastercard International Incorporated" is correct; not "Mastercard International" alone.',
  sources: [
    'Mastercard Incorporated Form 10-K Exhibit 21 (List of Subsidiaries), filed Feb. 11, 2026 (SEC Accession No. 0001141391-26-000013)',
    'Mastercard Incorporated Form 10-K (most recent fiscal year)',
    'SEC EDGAR CIK 0001141391',
    'Delaware Secretary of State, Division of Corporations',
  ],
};

export const defendantFamilies = [visaFamily, mastercardFamily];
