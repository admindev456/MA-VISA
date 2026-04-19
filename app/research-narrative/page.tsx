import Link from 'next/link';
import {
  ArrowLeftIcon,
  DocumentTextIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import Badge from '@/components/ui/Badge';

export const metadata = {
  title: 'Statement of Facts — Research Narrative | V/MC Intelligence',
  description:
    'A ~60-paragraph chronological factual narrative organized as a research input to the "Statement of Facts" or "Factual Background" section of a JASTA aiding-and-abetting complaint. Each paragraph anchored to specific exhibits and timeline events. Labeled as a research narrative, not a pleading draft.',
};

// Small helpers to render inline citations
function Cite({ ex, evt }: { ex?: string[]; evt?: string[] }) {
  if (!ex && !evt) return null;
  return (
    <span className="text-2xs text-neutral-500 ml-1">
      {ex && ex.length > 0 && (
        <span className="font-mono">
          [Ex. {ex.join(', ')}]
        </span>
      )}
      {evt && evt.length > 0 && (
        <span className="font-mono ml-1">
          [{evt.join(', ')}]
        </span>
      )}
    </span>
  );
}

export default function ResearchNarrativePage() {
  return (
    <article className="max-w-prose-wide mx-auto">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-800 transition-colors mb-6"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        Back to Executive Summary
      </Link>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="amber" size="md">
            Research Narrative — Not a Pleading Draft
          </Badge>
        </div>
        <p className="kicker">Counsel Drafting Input</p>
        <h1>Statement of Facts — Research Narrative</h1>
        <p className="lead mt-4">
          A chronological factual narrative organized in six numbered sections (§§ 1-72),
          intended as a research input to support counsel&apos;s drafting of the
          &quot;Statement of Facts&quot; or &quot;Factual Background&quot; section of a JASTA
          aiding-and-abetting complaint. Each numbered paragraph is anchored to specific
          evidence exhibits (<span className="font-mono">PLTF-EX-####</span>) and timeline
          events (<span className="font-mono">evt-###</span>). Paragraphs are written in
          declarative-fact form to facilitate drafting efficiency.
        </p>
      </header>

      {/* Critical usage disclaimer */}
      <section className="section-block-alt mb-10">
        <div className="flex items-center gap-2 mb-3">
          <InformationCircleIcon className="w-5 h-5 text-amber-700" />
          <h2 className="m-0">Critical Usage Notice</h2>
        </div>
        <ul className="text-sm text-neutral-800 space-y-2 list-disc pl-5 mb-0">
          <li>
            <strong>This is not a legal pleading.</strong> It is a research narrative
            organized in complaint-template style to accelerate drafting. Counsel of record
            retains all responsibility for the final complaint — including verification of
            every factual assertion, evaluation of plaintiff-specific claims, independent
            authorities review, and the specific wording that ultimately appears in any court
            filing.
          </li>
          <li>
            <strong>Named-plaintiff allegations are absent</strong> from this narrative. Each
            Tower 22 family\'s specific wrongful-death allegations, each wounded
            servicemember\'s personal-injury allegations, and any Pure Platform /
            business-damages allegations must be drafted separately by counsel based on
            client-specific facts.
          </li>
          <li>
            <strong>Every citation must be verified</strong> against the underlying primary
            source before filing. Exhibit numbers refer to the V/MC Intelligence database
            evidence repository; the underlying source documents must be independently
            authenticated for any court filing.
          </li>
        </ul>
      </section>

      {/* Navigation tabs-like quick jumps */}
      <section className="mb-10 bg-neutral-50 border border-neutral-200 rounded-lg p-4">
        <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-2">
          Quick Navigation
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
          <a href="#part-1" className="text-navy-700 hover:text-navy-900 hover:underline">I. Parties &amp; Background (¶¶ 1-10)</a>
          <a href="#part-2" className="text-navy-700 hover:text-navy-900 hover:underline">II. The Surge &amp; First Warnings (¶¶ 11-22)</a>
          <a href="#part-3" className="text-navy-700 hover:text-navy-900 hover:underline">III. Yana Audit &amp; The Gap Period (¶¶ 23-36)</a>
          <a href="#part-4" className="text-navy-700 hover:text-navy-900 hover:underline">IV. Tower 22 &amp; Attack Campaign (¶¶ 37-49)</a>
          <a href="#part-5" className="text-navy-700 hover:text-navy-900 hover:underline">V. 2024-2025 Continuation &amp; Blocking (¶¶ 50-60)</a>
          <a href="#part-6" className="text-navy-700 hover:text-navy-900 hover:underline">VI. 2025-2026 Escalation (¶¶ 61-72)</a>
        </div>
      </section>

      <div className="prose prose-neutral max-w-none prose-p:text-neutral-800 prose-p:leading-relaxed prose-p:mb-3">

      {/* ======== PART I — PARTIES & BACKGROUND ======== */}
      <h2 id="part-1" className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-4">
        I. Parties and Background (¶¶ 1-10)
      </h2>

      <p>
        <strong>¶ 1.</strong> Defendant Mastercard Incorporated is a Delaware corporation with
        its principal place of business at 2000 Purchase Street, Purchase, New York 10577-2509.
        Mastercard Incorporated is publicly traded on the New York Stock Exchange under ticker
        symbol &quot;MA.&quot;
        <Cite ex={['040']} />
      </p>

      <p>
        <strong>¶ 2.</strong> Defendant Mastercard International Incorporated is a Delaware
        corporation and a wholly-owned operating subsidiary of Mastercard Incorporated. It
        operates the Mastercard payment network globally outside certain regional subsidiaries,
        and directly contracted with Iraqi issuing banks and acquiring institutions throughout
        the period relevant to this action.
      </p>

      <p>
        <strong>¶ 3.</strong> Defendant Mastercard Middle East Africa FZ-LLC is a UAE
        free-zone entity operating as Mastercard&apos;s regional operating subsidiary for the
        Middle East and Africa. It directly contracted with UAE acquiring institutions whose
        merchants processed the transactions that are the subject of this complaint.
      </p>

      <p>
        <strong>¶ 4.</strong> Defendant Visa Inc. is a Delaware corporation with its principal
        place of business at P.O. Box 8999, San Francisco, California 94128-8999. Visa Inc. is
        publicly traded on the New York Stock Exchange under ticker symbol &quot;V.&quot;
      </p>

      <p>
        <strong>¶ 5.</strong> Defendant Visa International Service Association is a Delaware
        corporation and an operating subsidiary of Visa Inc. It contracts with non-U.S.
        issuing and acquiring institutions outside Europe, including the Iraqi issuing banks
        at issue in this action. Defendant Visa U.S.A. Inc. is the parallel Delaware corporate
        operating subsidiary covering U.S. issuing/acquiring relationships.
      </p>

      <p>
        <strong>¶ 6.</strong> Between early 2023 and April 2025, a scheme of industrial-scale
        sanctions evasion was conducted through Defendants\' payment networks. The scheme
        involved Iran-backed Iraqi militias — principally Kata\'ib Hezbollah (&quot;KH&quot;),
        Asa\'ib Ahl al-Haq (&quot;AAH&quot;), the Badr Organization, Harakat Hezbollah
        al-Nujaba (&quot;HHN&quot;), Kata\'ib Sayyid al-Shuhada (&quot;KSS&quot;), and Harakat
        Ansar Allah al-Awfiya — exploiting Defendants\' networks to convert Iraqi dinars into
        U.S. dollars and foreign currency at arbitrage-generating rates, producing funds used
        to finance attacks on United States service members, contractors, and civilians.
        <Cite ex={['004']} evt={['evt-009']} />
      </p>

      <p>
        <strong>¶ 7.</strong> Kata\'ib Hezbollah was designated as a Foreign Terrorist
        Organization (&quot;FTO&quot;) by the U.S. Department of State on July 2, 2009 and as
        a Specially Designated Global Terrorist under Executive Order 13224 on the same date.
        Asa\'ib Ahl al-Haq was designated as an FTO on January 3, 2020 and as an SDGT on
        January 10, 2020. The Islamic Revolutionary Guard Corps (&quot;IRGC&quot;), which
        funds, arms, and directs these militias, was designated as an FTO on April 15, 2019.
        Harakat Hezbollah al-Nujaba, Kata\'ib Sayyid al-Shuhada, Harakat Ansar Allah
        al-Awfiya, and Kata\'ib al-Imam Ali were upgraded to FTO status on September 17, 2025.
        <Cite ex={['016']} evt={['evt-027']} />
      </p>

      <p>
        <strong>¶ 8.</strong> The Popular Mobilization Forces (&quot;PMF,&quot; also
        &quot;Hashd al-Shaabi&quot;) are an Iraqi state-sanctioned umbrella organization of
        predominantly Shi\'a militias, including KH, AAH, and HHN. By early 2025, more than
        200,000 PMF members received their state salaries through a payment card system known
        as Qi Card, operated by International Smart Card Ltd. (&quot;ISC&quot;), giving PMF
        militia members direct access to the Mastercard payment network.
        <Cite ex={['010']} />
      </p>

      <p>
        <strong>¶ 9.</strong> From the October 2003 U.S. invasion of Iraq through the present,
        the United States and its coalition partners have maintained military forces in Iraq,
        Syria, and Jordan under Operation Inherent Resolve. During the period April 2023
        through May 2025, Iran-backed Iraqi militia groups conducted more than 180 documented
        attacks on United States personnel, contractors, and installations in these three
        countries, killing four U.S. personnel (one contractor in March 2023 and three Army
        Reserve soldiers at Tower 22 in Jordan on January 28, 2024) and wounding approximately
        130 additional service members and contractors.
        <Cite evt={['evt-011', 'evt-032']} />
      </p>

      <p>
        <strong>¶ 10.</strong> Iraq\'s monetary system during the relevant period featured two
        effective exchange rates: an official rate set by the Central Bank of Iraq
        (&quot;CBI&quot;) at approximately 1,320 Iraqi dinars per U.S. dollar, and an
        unregulated market rate of approximately 1,600 dinars per dollar. This approximately
        21% spread created an arbitrage opportunity: a party able to purchase goods or foreign
        currency at the official rate and convert the proceeds at the market rate could earn
        the difference. From early 2023, CBI permitted cross-border card payments at the
        official rate, effectively opening this arbitrage to any party with access to
        international payment cards.
        <Cite evt={['evt-003']} />
      </p>

      {/* ======== PART II — THE SURGE AND FIRST WARNINGS ======== */}
      <h2 id="part-2" className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-4">
        II. The Transaction Surge and First Regulatory Warnings (¶¶ 11-22)
      </h2>

      <p>
        <strong>¶ 11.</strong> In November 2022, the U.S. Department of the Treasury and the
        Federal Reserve Bank of New York (&quot;NYFed&quot;) implemented an electronic
        monitoring platform for Iraqi bank wire transfers, requiring beneficiary disclosure
        and real-time dollar-flow tracking. In July 2023, Treasury banned 14 additional Iraqi
        banks from dollar transactions, bringing the total number of banned banks to
        approximately 22 out of 72 licensed Iraqi banks.
        <Cite evt={['evt-001', 'evt-007']} />
      </p>

      <p>
        <strong>¶ 12.</strong> In January 2023, cross-border transactions on Defendants\'
        networks originating in Iraq averaged approximately $50 million per month — a
        baseline consistent with historical Iraqi travel and commerce volumes.
        <Cite evt={['evt-002']} />
      </p>

      <p>
        <strong>¶ 13.</strong> Between January and April 2023, cross-border transaction
        volume on Defendants\' networks originating in Iraq increased approximately 2,900%,
        from approximately $50 million per month to approximately $1.5 billion per month. The
        surge occurred essentially overnight relative to Defendants\' historical Iraqi
        transaction baseline.
        <Cite ex={['004', '006']} evt={['evt-004']} />
      </p>

      <p>
        <strong>¶ 14.</strong> Modern payment networks employ sophisticated fraud-detection
        systems that analyze transaction patterns, velocity, geographic distribution, merchant
        categories, and many other variables in real time. Defendant Mastercard has publicly
        represented that its generative-AI-enhanced fraud detection systems produce &quot;an
        average increase of 20% in its fraud detection capabilities&quot; and &quot;up to 300%
        increase in its ability to detect fraud.&quot; Defendant Visa has publicly represented
        that its Visa Advanced Authorization system analyzes &quot;100 percent of the
        transactions — each in about one millisecond,&quot; keeping Visa\'s global fraud rate
        &quot;less than 0.1 percent.&quot;
        <Cite ex={['026', '030']} />
      </p>

      <p>
        <strong>¶ 15.</strong> A 2,900% overnight transaction-volume surge is statistically
        impossible in legitimate commercial activity absent a major economic intervention or
        policy change. Each of Defendants\' publicly marketed fraud-detection systems would be
        expected to flag such a surge in real time.
      </p>

      <p>
        <strong>¶ 16.</strong> On May 1, 2023, Defendant Visa launched the Visa Integrity Risk
        Program (&quot;VIRP&quot;), formally replacing the earlier Global Brand Protection
        Program. VIRP is marketed as a tiered (Tier 1/2/3) framework to &quot;deter, detect,
        and remediate illegal activity from entering the Visa payment system.&quot; VIRP took
        effect the same month that the NYFed and Treasury began pressing Defendants on the
        Iraqi transaction surge.
        <Cite ex={['022']} evt={['evt-049']} />
      </p>

      <p>
        <strong>¶ 17.</strong> In May 2023, officials at the Federal Reserve Bank of New York
        and the U.S. Department of the Treasury directly questioned Defendants Visa and
        Mastercard about the 2,900% surge in Iraqi cross-border card transactions. This was
        the first documented regulatory contact with Defendants concerning the Iraqi
        transaction pattern.
        <Cite ex={['003']} evt={['evt-005']} />
      </p>

      <p>
        <strong>¶ 18.</strong> On July 26, 2023, Western Union Holdings, Inc. held its second-
        quarter 2023 earnings call. Chief Executive Officer Devin McGranahan and Chief
        Financial Officer Matt Cagwin devoted substantial prepared remarks and three Q&amp;A
        exchanges to Iraq, naming the country in at least ten separate passages. Cagwin
        disclosed that Iraq had generated a 10% benefit to adjusted revenue in the quarter,
        that Western Union had raised full-year guidance because of Iraqi volume, and that
        &quot;we expect these volumes from Iraq to be significantly lower going forward&quot;
        due to &quot;recent U.S. government actions, which shut down a number of our agents
        in Iraq.&quot; Cagwin disclosed a 70% run-rate reduction in the first part of July
        and acknowledged that &quot;some of where the incremental revenue and profit we got
        from Iraq goes back into the compliance space over the last few months.&quot;
        <Cite ex={['036']} evt={['evt-050']} />
      </p>

      <p>
        <strong>¶ 19.</strong> Defendants Visa and Mastercard made no comparable disclosure on
        any quarterly earnings call during 2023, 2024, or 2025. A systematic review of every
        Visa and Mastercard quarterly earnings call from the first quarter of 2020 through the
        fourth quarter of 2025 reflects no substantive disclosure of Iraq-related compliance
        concerns, Treasury engagement, militia financing, or exposure to the cross-border
        surge.
        <Cite ex={['037', '038', '039', '042']} />
      </p>

      <p>
        <strong>¶ 20.</strong> In July 2023, Defendant Mastercard issued a public press
        release announcing that &quot;Mastercard\'s AI-powered cybersecurity solutions have
        stopped over $35 billion in fraud losses in the last three years.&quot; This
        announcement occurred in the same month that the NYFed was questioning Mastercard
        about the Iraqi surge.
        <Cite ex={['027']} />
      </p>

      <p>
        <strong>¶ 21.</strong> In August 2023, Mastercard\'s Global Compliance Team conducted
        a virtual review of Yana Banking Services, an Erbil, Iraq-based financial institution
        serving as a Mastercard issuer and acquirer. The review found that Yana performed
        &quot;no customer risk rating&quot; — zero of eleven tested customer files had a risk
        rating. It found &quot;ineffective suspicious activity monitoring and reporting&quot;
        aimed at preventing fraud, &quot;ineffective&quot; anti-money-laundering safeguards,
        and &quot;no evidence&quot; that customers were being screened against U.S. sanctions
        lists. The review classified these as &quot;High Priority&quot; violations. Yana was
        banned from issuing new Mastercard-branded cards pending remediation.
        <Cite ex={['001']} evt={['evt-008']} />
      </p>

      <p>
        <strong>¶ 22.</strong> The Yana audit findings describe the precise absence of the
        controls that Mastercard\'s publicly-posted Anti-Money Laundering and Sanctions
        Requirements (Mastercard Rules Chapter 1, § 1.2) obligate Mastercard\'s issuers and
        acquirers to implement.
        <Cite ex={['023']} />
      </p>

      {/* ======== PART III — YANA AUDIT & THE GAP PERIOD ======== */}
      <h2 id="part-3" className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-4">
        III. The Yana Audit, Specific Militia Briefings, and the Gap Period (¶¶ 23-36)
      </h2>

      <p>
        <strong>¶ 23.</strong> In the autumn of 2023, the U.S. Department of the Treasury
        formally briefed Defendants Visa and Mastercard that the Iraqi transaction surge was
        being conducted by Iran-backed Iraqi militias. Treasury identified specific groups by
        name — Kata\'ib Hezbollah, Asa\'ib Ahl al-Haq, and the Badr Brigade — and detailed
        the smuggling routes (to the United Arab Emirates, Turkey, and Jordan), the
        &quot;point-of-sale farm&quot; operations whereby UAE merchants processed
        fraudulent card transactions for 5% commissions, and the use of virtual private
        networks to mask transaction origins.
        <Cite ex={['002', '008']} evt={['evt-009']} />
      </p>

      <p>
        <strong>¶ 24.</strong> In late 2023, Defendant Mastercard reinstated Yana Banking
        Services\' ability to issue new Mastercard-branded cards following purported
        &quot;remediation&quot; of the High Priority violations identified in the August
        audit. The decision to reinstate — rather than terminate — the Yana relationship was
        an affirmative action taken by Mastercard after Mastercard had obtained direct
        documentary evidence that a principal Iraqi partner lacked fundamental sanctions-
        screening controls and after Treasury had separately briefed Mastercard that Iraqi
        militias were exploiting the Mastercard network for sanctions evasion.
        <Cite ex={['001']} evt={['evt-010']} />
      </p>

      <p>
        <strong>¶ 25.</strong> Between May 2023 and March 2025 (for Mastercard) and April 2025
        (for Visa) — a period of approximately 22 months — Defendants continued to process
        Iraqi cross-border card transactions at volumes ranging from approximately $400
        million to $1.1 billion per month. Defendants made no substantial reduction in
        transaction processing during this period.
        <Cite ex={['004']} />
      </p>

      <p>
        <strong>¶ 26.</strong> During this 22-month period (the &quot;Gap Period&quot;),
        representatives of Visa, Mastercard, the U.S. Department of the Treasury, the Federal
        Reserve Bank of New York, and the Central Bank of Iraq held &quot;regular meetings&quot;
        concerning the Iraqi transaction surge. Defendants thus received continuous, ongoing
        information concerning the militia-linked nature of the transaction flow.
        <Cite evt={['evt-014']} />
      </p>

      <p>
        <strong>¶ 27.</strong> In January 2024, Defendant Visa\'s partner First Iraqi Bank
        (&quot;FIB&quot;) launched a Visa Direct instant-transfer service in Iraq. Over the
        subsequent approximately ten weeks in early 2024, FIB Visa Direct processed
        approximately $1.2 billion in transfers to overseas recipients, including to Dubai,
        Turkey, and Indonesia. A single cardholder reportedly transferred approximately $5
        million per day to eleven Indonesian accounts.
        <Cite ex={['007']} evt={['evt-012', 'evt-013']} />
      </p>

      <p>
        <strong>¶ 28.</strong> The FIB Visa Direct pattern — a single cardholder moving $5
        million per day to eleven foreign accounts — is a paradigmatic money-laundering
        velocity-anomaly pattern that modern real-time transaction monitoring systems are
        specifically designed to detect and block. Defendant Visa did not suspend the FIB
        Visa Direct service for approximately ten weeks after this pattern began.
        <Cite ex={['007']} />
      </p>

      <p>
        <strong>¶ 29.</strong> On January 29, 2024, the U.S. Department of the Treasury\'s
        Financial Crimes Enforcement Network (&quot;FinCEN&quot;) published a finding, press
        release jy2053, identifying Al-Huda Bank (a private Iraqi bank) as a primary money-
        laundering concern for acting as a conduit for the IRGC-Quds Force, Kata\'ib
        Hezbollah, and Asa\'ib Ahl al-Haq. This finding, publicly available to Defendants,
        was an institutional-level regulatory confirmation that the Iraqi banking system
        was actively conducting militia-linked financing during the Gap Period.
        <Cite ex={['047']} evt={['evt-051']} />
      </p>

      <p>
        <strong>¶ 30.</strong> On February 1, 2024 — four days after the Tower 22 attack
        described infra at ¶¶ 37-39 — Defendant Mastercard issued a press release announcing
        &quot;Decision Intelligence Pro,&quot; a generative-AI-enhanced fraud-detection
        product. The press release represented that the product boosted fraud detection
        &quot;on average by 20% and as high as 300% in some instances&quot; and scanned
        &quot;an unprecedented one trillion data points&quot; in &quot;less than 50
        milliseconds.&quot; Ajay Bhalla, Mastercard\'s President of Cyber and Intelligence,
        was quoted: &quot;With generative AI we are transforming the speed and accuracy of
        our anti-fraud solutions.&quot;
        <Cite ex={['026']} />
      </p>

      <p>
        <strong>¶ 31.</strong> On March 27, 2024, Defendant Visa launched &quot;Visa
        Protect,&quot; representing that &quot;last year, Visa helped block $40 billion in
        fraudulent activity, nearly double from the year prior.&quot; On May 7, 2024, Visa
        launched the &quot;VAAI Score&quot; product, representing that it used 15 billion
        VisaNet transactions as training data, produced a 20-millisecond risk score, and
        reduced false positives by 85%.
        <Cite ex={['031', '032']} />
      </p>

      <p>
        <strong>¶ 32.</strong> On July 26, 2024, on the CNBC financial news network, Visa\'s
        James Mirfin stated: &quot;We do about 300 billion transactions a year. Every single
        one of those has been processed by AI. It\'s looking at a range of different
        attributes and we\'re evaluating every single transaction.&quot; This statement was
        made during the Gap Period, while Iraqi cross-border transactions continued to
        process on Visa\'s network at volumes of approximately $400 million to $1.1 billion
        per month.
        <Cite ex={['034']} />
      </p>

      <p>
        <strong>¶ 33.</strong> On December 19, 2024, Defendant Visa completed its
        approximately $1.4 billion acquisition of Featurespace, marketed as &quot;real-time
        artificial intelligence (AI) payments protection technology that prevents and
        mitigates payments fraud and financial crime risks.&quot; The acquisition closed
        while the Iraqi cross-border transaction scheme continued to process on Visa\'s
        network; Visa did not block any significant portion of the Iraqi volume until April
        2025.
        <Cite ex={['033']} />
      </p>

      <p>
        <strong>¶ 34.</strong> In approximately 2023, Defendants collectively earned
        approximately $120 million in cross-border transaction fees from the Iraqi
        transaction flow, charging between 1% and 1.4% of cross-border transaction value.
        Iranian-aligned militia cardholders are estimated to have earned approximately $450
        million in arbitrage profits in 2023, which the U.S. Department of the Treasury has
        publicly stated were likely used &quot;to buy weapons and finance terror
        operations.&quot;
        <Cite ex={['004']} />
      </p>

      <p>
        <strong>¶ 35.</strong> Despite the August 2023 Yana audit, the Fall 2023 Treasury
        briefing, the January 2024 FinCEN Al-Huda finding, the Q3-Q4 2023 and 2024 series of
        increasingly severe Iraq-theater attacks on U.S. forces, and the continuing
        $400-million-to-$1.1-billion monthly transaction volume, Defendants did not
        implement substantial blocking action on Iraqi-issued cards or UAE merchants
        participating in the scheme until March-April 2025.
        <Cite evt={['evt-017', 'evt-018']} />
      </p>

      <p>
        <strong>¶ 36.</strong> When Defendants did eventually act in March-April 2025, they
        implemented the blocking action substantially within a single month: Mastercard
        blocked more than 100,000 Iraqi-issued cards and removed 4,000 UAE merchants from
        its network in March 2025; Visa flagged 70,000 Iraqi cards and barred approximately
        5,000 UAE vendors in April 2025. The single-month execution of this blocking
        demonstrates that the prior 22 months of inaction reflected a conscious choice, not
        a technical limitation.
        <Cite ex={['004']} evt={['evt-017', 'evt-018']} />
      </p>

      {/* ======== PART IV — TOWER 22 AND THE ATTACK CAMPAIGN ======== */}
      <h2 id="part-4" className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-4">
        IV. Tower 22 and the Attack Campaign on U.S. Forces (¶¶ 37-49)
      </h2>

      <p>
        <strong>¶ 37.</strong> At approximately 5:30 AM local time on Sunday, January 28,
        2024, a one-way Shahed-style Iranian-origin drone struck Tower 22, a small U.S.
        logistics support outpost in the Rukban area of northeast Jordan, approximately ten
        kilometers from the Iraqi border and twenty kilometers south of the U.S. Al-Tanf
        Garrison in Syria. The drone struck containerized housing units in which
        approximately 350 U.S. Army and Air Force personnel were stationed.
        <Cite evt={['evt-011']} />
      </p>

      <p>
        <strong>¶ 38.</strong> The Tower 22 attack killed three United States Army Reserve
        soldiers of the 718th Engineer Company, 926th Engineer Battalion, 926th Engineer
        Brigade, 412th Theater Engineer Command, based at Fort Moore (formerly Fort
        Benning), Georgia: Sergeant William Jerome Rivers (46, of Carrollton, Georgia;
        posthumously promoted to Staff Sergeant); Specialist Kennedy Ladon Sanders (24, of
        Waycross, Georgia; posthumously promoted to Sergeant); and Specialist Breonna
        Alexsondria Moffett (23, of Savannah, Georgia; posthumously promoted to Sergeant,
        who died of wounds on January 29, 2024, one day after the strike). The attack
        wounded approximately 47 additional U.S. personnel.
      </p>

      <p>
        <strong>¶ 39.</strong> The U.S. formally attributed the Tower 22 attack to the
        &quot;Islamic Resistance in Iraq&quot; — an umbrella formation of Iran-backed Iraqi
        militia groups — on January 31, 2024. National Security Council Spokesman John
        Kirby publicly identified Kata\'ib Hezbollah as the group that &quot;planned,
        resourced, and facilitated&quot; the attack. On June 17, 2024, the U.S. Department
        of State designated Harakat Ansar Allah al-Awfiya (the 19th PMF Brigade) as a
        terrorist organization expressly for its role in the Tower 22 attack. In December
        2024, the U.S. Department of Justice unsealed an indictment charging Mahdi Mohammad
        Sadeghi (arrested in Natick, Massachusetts) and Mohammad Abedininajafabadi
        (arrested in Italy) with conspiring to export Iranian navigation components used
        in the Tower 22 drone.
        <Cite ex={['055', '057']} evt={['evt-040', 'evt-043']} />
      </p>

      <p>
        <strong>¶ 40.</strong> On January 30, 2024, Kata\'ib Hezbollah Secretary-General
        Ahmad Mohsen Faraj al-Hamidawi announced via KH\'s official Telegram channel the
        &quot;suspension of all KH military operations against U.S. forces&quot; to
        &quot;prevent embarrassment to the Iraqi government.&quot; This announcement
        constitutes Kata\'ib Hezbollah\'s own contemporary acknowledgment of its role in the
        October 2023 - February 2024 attack campaign.
      </p>

      <p>
        <strong>¶ 41.</strong> On February 2, 2024, U.S. Central Command
        (&quot;CENTCOM&quot;) conducted airstrikes on more than 85 targets at seven
        facilities — three in Iraq, four in Syria — of the IRGC-Quds Force and affiliated
        militia groups, using more than 125 precision-guided munitions. The strike was
        conducted by B-1B Lancer long-range bombers flown from Dyess Air Force Base, Texas.
        <Cite ex={['053']} evt={['evt-038']} />
      </p>

      <p>
        <strong>¶ 42.</strong> On February 7, 2024, CENTCOM conducted a Hellfire missile
        strike in the Mashtal neighborhood of eastern Baghdad that killed Wissam Mohammed
        &quot;Abu Baqir&quot; al-Saadi, a senior Kata\'ib Hezbollah commander who ran KH
        drone operations in Syria and had been a former bodyguard to Abu Mahdi al-Muhandis
        (the KH founder killed with Qassem Soleimani on January 3, 2020 in a U.S. strike).
        CENTCOM stated publicly that al-Saadi was &quot;responsible for directly planning
        and participating in attacks on U.S. forces in the region.&quot;
        <Cite ex={['054']} evt={['evt-039']} />
      </p>

      <p>
        <strong>¶ 43.</strong> The Tower 22 attack was one event in a sustained campaign of
        Iran-backed Iraqi militia attacks on U.S. forces between October 17, 2023 and
        February 9, 2024. The campaign comprised approximately 168 documented attacks on
        U.S. personnel, contractors, and installations in Iraq, Syria, and Jordan, wounding
        approximately 130 Americans in addition to those killed at Tower 22.
      </p>

      <p>
        <strong>¶ 44.</strong> On October 17-18, 2023, the campaign began with coordinated
        attacks on Al-Asad Airbase (Iraq) and the Al-Tanf Garrison (Syria). One U.S.
        contractor died of cardiac arrest during a false-alarm alert at Al-Asad; approximately
        21 U.S. personnel were wounded, including 15 confirmed traumatic brain injuries
        from the Al-Tanf strike.
        <Cite evt={['evt-034']} />
      </p>

      <p>
        <strong>¶ 45.</strong> On November 20, 2023, Kata\'ib Hezbollah fired a close-range
        ballistic missile at Al-Asad Airbase — the first ballistic-missile attack of the
        campaign — wounding eight U.S. and coalition service members. On December 25, 2023,
        a Kata\'ib Hezbollah explosive one-way drone penetrated Erbil Air Base\'s air
        defenses, wounding three U.S. service members, one critically. Defense Secretary
        Lloyd Austin directly attributed the Erbil strike to Kata\'ib Hezbollah.
        <Cite evt={['evt-035', 'evt-036']} />
      </p>

      <p>
        <strong>¶ 46.</strong> On January 20, 2024 — eight days before the Tower 22 attack
        — Iran-aligned militia forces fired approximately 15 ballistic missiles and rockets
        at Al-Asad Airbase, Iraq. Thirteen were intercepted; two impacted the base.
        Multiple U.S. personnel were evaluated for traumatic brain injury. U.S. retaliation
        on January 23 struck the Popular Mobilization Forces 45th, 46th, and 47th brigades
        — all commanded by Kata\'ib Hezbollah — at Al-Qa\'im (Anbar Province) and Jurf
        al-Sakhar (Babil Province).
        <Cite evt={['evt-037']} />
      </p>

      <p>
        <strong>¶ 47.</strong> On March 23, 2023 — predating the Tower 22 attack by
        approximately ten months — a one-way drone attributed by the Washington Institute to
        Kata\'ib Hezbollah (claimed by the facade group Liwa al-Ghaliboun) struck the
        coalition maintenance facility at Hasakah/Abu Hajar Airfield (Rmelan), Syria, killing
        one U.S. contractor and wounding five U.S. service members plus one additional U.S.
        contractor. This is the first documented U.S. death of the broader May 2023 - May 2025
        attack campaign.
        <Cite evt={['evt-032']} />
      </p>

      <p>
        <strong>¶ 48.</strong> On August 5, 2024, Iran-aligned militia forces fired two
        122mm Katyusha rockets from a truck launcher at Al-Asad Airbase, wounding seven U.S.
        personnel (five service members and two contractors), with one serious injury and
        four traumatic-brain-injury diagnoses. On August 9, 2024, a one-way attack drone
        struck Rumalyn Landing Zone, Syria, wounding eight U.S. service members with
        traumatic brain injuries and smoke inhalation.
        <Cite evt={['evt-041', 'evt-042']} />
      </p>

      <p>
        <strong>¶ 49.</strong> Each of the attacks described in paragraphs 37-48 was
        conducted during a period when the transaction scheme described in Part III was
        continuing to process on Defendants\' networks at volumes of approximately $400
        million to $1.1 billion per month, generating approximately $450 million in 2023
        arbitrage profits for the militia groups responsible for the attacks and approximately
        $120 million in cross-border fees for Defendants.
      </p>

      {/* ======== PART V — 2024-2025 CONTINUATION AND BLOCKING ======== */}
      <h2 id="part-5" className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-4">
        V. 2024-2025 Continuation, WSJ Investigation, and Blocking Wave (¶¶ 50-60)
      </h2>

      <p>
        <strong>¶ 50.</strong> On July 1, 2024, the U.S. government and the Government of
        Iraq imposed strict limits on Western Union and MoneyGram remittance transfers from
        Iraq, driving the combined monthly remittance outflow down to approximately $110
        million by October 2024. Comparable limits were not imposed on Defendants\' card
        networks during the same period.
        <Cite evt={['evt-015']} />
      </p>

      <p>
        <strong>¶ 51.</strong> On February 7, 2025, Representative Greg Steube\'s office
        issued a press release announcing a January 28, 2025 letter from Representatives Joe
        Wilson, Greg Steube, James R. Baird, Neal P. Dunn, Abraham J. Hamadeh, Randy K. Weber
        Sr., and Christopher H. Smith to Secretary of State Marco Rubio and National Security
        Adviser Michael Waltz, urging FTO designation of Iran-backed Iraqi militias,
        imposition of E.O. 13224 sanctions, and termination of U.S. security assistance to
        Iraq until militias were removed from Iraqi state forces.
        <Cite ex={['005']} evt={['evt-016']} />
      </p>

      <p>
        <strong>¶ 52.</strong> On March 1 through March 31, 2025, Defendant Mastercard
        blocked more than 100,000 Iraqi-issued cards and removed 4,000 merchants in the
        United Arab Emirates from its network. Approximately half of the cards came from a
        single Iraqi issuer — International Smart Card Ltd., operator of the Qi Card system
        that distributed PMF militia member salaries.
        <Cite evt={['evt-017']} />
      </p>

      <p>
        <strong>¶ 53.</strong> On April 1 through April 30, 2025, Defendant Visa flagged
        70,000 Iraqi cards for potential fraud and blocked approximately 5,000 UAE vendors.
        <Cite evt={['evt-018']} />
      </p>

      <p>
        <strong>¶ 54.</strong> On May 20, 2025, First Iraqi Bank publicly announced
        suspension of its international card transaction settlement mechanism, ending the
        Visa Direct channel that had processed approximately $1.2 billion in transfers over
        the approximately ten-week window in early 2024 described in paragraph 27.
        <Cite ex={['012']} evt={['evt-019']} />
      </p>

      <p>
        <strong>¶ 55.</strong> On May 28, 2025, Representatives Joe Wilson and Greg Steube
        sent a second letter to Secretary of State Rubio, specifically demanding that Treasury
        impose sanctions on Al-Rafidain Bank and the Qi Card e-payment system, describing
        them as entities that &quot;process the payroll for the PMF militias&quot; and
        asserting that &quot;Iraq\'s ability to receive US dollars through the Federal
        Reserve is directly supporting Iran and its proxies in Iraq.&quot;
        <Cite ex={['013']} evt={['evt-024']} />
      </p>

      <p>
        <strong>¶ 56.</strong> On May 28, 2025, the Department of the Treasury requested that
        the Central Bank of Iraq formally block more than 200,000 Iraqi-issued cards used by
        PMF militia members.
        <Cite evt={['evt-020']} />
      </p>

      <p>
        <strong>¶ 57.</strong> On May 31, 2025, the Wall Street Journal published a
        comprehensive investigative report by David S. Cloud, &quot;Needing Dollars, Iran-
        Backed Militias Turn to Visa and Mastercard,&quot; documenting the scheme described
        above. The investigation reported that &quot;warnings to the card companies about
        the militias\' role in the soaring cash- and debit-card activity [went] mostly
        unheeded for months.&quot; The investigation documented the August 2023 Yana Banking
        audit, quoting the internal Mastercard compliance finding verbatim.
        <Cite ex={['004']} evt={['evt-021']} />
      </p>

      <p>
        <strong>¶ 58.</strong> In response to the Wall Street Journal investigation,
        Mastercard Senior Vice President of Communications Seth Eisen issued three short
        statements: (a) &quot;Ongoing government engagement is built into our programs so
        that we can quickly look into claims, identify the situation and take action as
        appropriate. That\'s exactly what we have done with the U.S. government on this
        matter from a very early stage&quot;; (b) &quot;The goal is to ensure they avoid
        further violations of Mastercard standards or regulatory requirements. We reserve
        the right to revisit any allegation to ensure this compliance&quot;; and (c)
        &quot;Information about Qi Card and International Smart Card that Mastercard
        received from government agencies was compiled with existing information and
        actioned accordingly.&quot; Visa spokesperson Fletcher Cook issued a single
        statement: &quot;Central to our operations is a commitment to ensuring that
        transactions on our network do not violate the law.&quot; As of April 2026, neither
        Michael Miebach (CEO of Mastercard) nor Ryan McInerney (CEO of Visa) has publicly
        commented on the scheme.
        <Cite ex={['043']} />
      </p>

      <p>
        <strong>¶ 59.</strong> On June 1, 2025, the Central Bank of Iraq ordered local banks
        to suspend Mastercard use for international transactions and to conduct all foreign
        financial transactions exclusively through the U.S.-issued Switch card system.
        <Cite evt={['evt-052']} />
      </p>

      <p>
        <strong>¶ 60.</strong> On July 11, 2025, following sustained U.S. Treasury pressure
        on Qi Card and Rafidain Bank, the Popular Mobilization Forces announced a new
        in-house payment card system to replace Qi Card for PMF salary disbursement, with
        salaries transitioning from state-owned Rafidain Bank to state-owned Al-Nahrain
        Bank. The Abbas Combat Division commander, Maytham al-Zaidi, publicly attributed Qi
        Card\'s withdrawal to a direct U.S. Treasury threat of sanctions. Iraqi Member of
        Parliament Maeen al-Kadhimi publicly stated that &quot;these pressures have even
        reached Visa card companies, affecting the payment process.&quot;
        <Cite ex={['020']} evt={['evt-025', 'evt-026']} />
      </p>

      {/* ======== PART VI — 2025-2026 ESCALATION ======== */}
      <h2 id="part-6" className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-4">
        VI. 2025-2026 Escalation and Ongoing Conduct (¶¶ 61-72)
      </h2>

      <p>
        <strong>¶ 61.</strong> On July 3, 2025, the U.S. Department of the Treasury Office of
        Foreign Assets Control issued press release sb0188 designating Iraqi-British national
        Salim Ahmed Said and his oil-smuggling network, including VS Tankers FZE (formerly
        Al-Iraqia Shipping Services &amp; Oil Trading FZE / AISSOT), VS Oil Terminal FZE, VS
        Petroleum DMCC, and Rhine Shipping DMCC. Treasury found that the network blended
        Iranian crude at Khor al-Zubayr, Iraq, and sold the product as Iraqi oil, bribing
        Iraqi parliamentarians for forged origin certificates. Proceeds partly funded the
        IRGC-Quds Force.
        <Cite ex={['044']} evt={['evt-044']} />
      </p>

      <p>
        <strong>¶ 62.</strong> On September 2, 2025, the Treasury Office of Foreign Assets
        Control issued press release sb0233 designating Waleed al-Samarra\'i (a UAE-based
        Iraqi-Kittitian businessman), together with nine Liberia-flagged tankers (ADENA,
        ALEXANDRA, BELLAGIO, BIANCA, CAMILLA, DELFINA, LILIANA, PAOLA, and ROBERTA), five
        Marshall Islands shell companies, UAE-based Babylon Navigation DMCC, and UAE-based
        Galaxy Oil FZ LLC, for an approximately $300-million-per-year scheme blending Iranian
        oil with Iraqi oil using ship-to-ship transfers and AIS spoofing.
        <Cite ex={['045']} evt={['evt-045']} />
      </p>

      <p>
        <strong>¶ 63.</strong> On September 17, 2025, the U.S. Department of State upgraded
        four Iran-aligned Iraqi militias from SDGT status to full Foreign Terrorist
        Organization status: Harakat Hezbollah al-Nujaba, Kata\'ib Sayyid al-Shuhada,
        Harakat Ansar Allah al-Awfiya (the PMF 19th Brigade tied to Tower 22), and Kata\'ib
        al-Imam Ali. Combined with the pre-existing FTO designations of Kata\'ib Hezbollah
        (2009), Asa\'ib Ahl al-Haq (2020), and the IRGC (2019), all six principal
        Iran-aligned PMF militias are now FTOs.
        <Cite ex={['016']} evt={['evt-027']} />
      </p>

      <p>
        <strong>¶ 64.</strong> On October 9, 2025, the Treasury Office of Foreign Assets
        Control issued press release sb0277 designating Muhandis General Company for
        Construction, Engineering, Mechanical, Agricultural, and Industrial Contracting (OFAC
        Entity ID 55929) and its agricultural-front company Baladna Agricultural Investments
        under Executive Order 13224. The designation explicitly identified Muhandis General
        Company as &quot;Linked To: KATA\'IB HIZBALLAH; Linked To: ISLAMIC REVOLUTIONARY
        GUARD CORPS (IRGC)-QODS FORCE,&quot; and controlled by Abu Fadak (Abd al-Aziz
        al-Muhammadawi, PMF Chief of Staff and KH leader).
        <Cite ex={['014', '015']} evt={['evt-028']} />
      </p>

      <p>
        <strong>¶ 65.</strong> On January 22, 2026, the law firm of Kreindler &amp; Kreindler
        LLP filed a complaint in the United States District Court for the District of
        Columbia on behalf of the Gold Star families of Sergeant Rivers, Specialist Sanders,
        and Specialist Moffett, seeking compensatory and punitive damages against the
        Islamic Republic of Iran under the Foreign Sovereign Immunities Act state-sponsored
        terrorism exception, 28 U.S.C. § 1605A, for Iran\'s role in orchestrating the Tower
        22 attack.
        <Cite ex={['018']} evt={['evt-029']} />
      </p>

      <p>
        <strong>¶ 66.</strong> On February 11, 2026, Mastercard Incorporated filed its
        Annual Report on Form 10-K for fiscal year 2025 with the U.S. Securities and
        Exchange Commission, together with a notice signed by General Counsel Tiffany Hall
        pursuant to Section 219 of the Iran Threat Reduction and Syria Human Rights Act of
        2012 and Section 13(r) of the Securities Exchange Act of 1934. The 10-K adds one
        novel sentence to otherwise-identical six-year-static boilerplate: &quot;We do not
        maintain operations, assets or licensed customers in Iran. While we currently have
        no operations in Syria, we are evaluating market entry in strict accordance with
        applicable laws and restrictions.&quot; The filing does not mention Iraq, does not
        disclose the August 2023 Yana Banking audit, and does not discuss the blocking of
        100,000 Iraqi-issued cards in March 2025.
        <Cite ex={['017', '040']} evt={['evt-030']} />
      </p>

      <p>
        <strong>¶ 67.</strong> On February 28, 2026, President Donald J. Trump announced the
        commencement of &quot;major combat operations&quot; against Iran in coordination
        with Israel, operating as &quot;Operation Epic Fury.&quot; Stated objectives
        included destruction of Iran\'s ballistic-missile program, prevention of Iran\'s
        acquisition of a nuclear weapon, and termination of proxy groups\' (including
        Hezbollah, Hamas, and PMF-aligned Iraqi militias) regional destabilization
        capabilities.
        <Cite ex={['061']} evt={['evt-054']} />
      </p>

      <p>
        <strong>¶ 68.</strong> On March 31, 2026, Kata\'ib Hezbollah kidnapped United States
        national Shelly Kittleson, 49, a freelance journalist, on Baghdad\'s al-Saadoun
        Street. U.S. officials had warned Kittleson multiple times about specific threats
        from Iran-backed paramilitaries, most recently on the Monday before her abduction;
        her name had appeared on a Kata\'ib Hezbollah kidnap-or-kill list targeting female
        journalists. Kittleson was released on April 7, 2026, following intense U.S.-FBI
        diplomatic coordination, with the condition that she leave Iraq immediately.
        <Cite ex={['062']} evt={['evt-055', 'evt-056']} />
      </p>

      <p>
        <strong>¶ 69.</strong> On April 11, 2026, the Foundation for Defense of Democracies\'
        Long War Journal published a report by Ahmad Sharawi documenting that Iran-backed
        Iraqi militia-linked fundraising campaigns — including those operated by the
        Tower-22-linked Harakat Ansar Allah al-Awfiya — were explicitly instructing donors
        to route contributions via Mastercard and Zain Cash to fund Iran and Lebanese
        Hezbollah. These campaigns frame their solicitations as a &quot;financial front&quot;
        for Iran\'s war effort. The campaigns operated on Defendant Mastercard\'s network
        approximately one year after Mastercard\'s March 2025 blocking action.
        <Cite ex={['019']} evt={['evt-031']} />
      </p>

      <p>
        <strong>¶ 70.</strong> On April 14, 2026, the U.S. Department of State\'s Rewards for
        Justice program announced a $10 million reward for information on Ahmad al-Hamidawi,
        Secretary-General of Kata\'ib Hezbollah, citing his role in directing KH attacks on
        U.S. diplomatic facilities, the December 2019 Kirkuk rocket attack that killed a
        U.S. contractor, and the March 31, 2026 Kittleson kidnapping. Rewards for Justice
        stated that al-Hamidawi &quot;has played a central role in planning attacks against
        US and Iraqi government security forces since 2007.&quot;
        <Cite ex={['063']} evt={['evt-057']} />
      </p>

      <p>
        <strong>¶ 71.</strong> On April 17, 2026, the Treasury Office of Foreign Assets
        Control issued press release sb0458, &quot;Economic Fury Targets Iran-Backed Iraqi
        Militia Commanders,&quot; designating seven operational commanders of Kata\'ib
        Hezbollah, Asa\'ib Ahl al-Haq, Kata\'ib Sayyid al-Shuhada, and Harakat al-Nujaba
        under Executive Order 13224: Ammar Jasim Kadhim Al Rammahi, Radhwan Yousif Hameed
        Almohammed, and Hasan Dheyab Hamzah Hamzah (all KH); Safaa Adnan Jabbar Suwaed (AAH
        Chief of Operations for Salah ad-Din Province); Khalid Jameel Abed Albakhatra and
        Saeed Kadhim Mukhamis (both KSS); and Husham Hashim Jaythoom (HAN military trainer).
        Secretary of the Treasury Scott Bessent stated: &quot;We will not allow Iraq\'s
        terrorist militias, backed by Iran, to threaten American lives or interests. Those
        who enable these militias\' violence will be held accountable.&quot;
        <Cite ex={['046']} evt={['evt-053']} />
      </p>

      <p>
        <strong>¶ 72.</strong> As of the date of this complaint, Defendants have disclosed no
        Iraq-specific compliance failure, no Yana Banking audit, and no blocking action in
        any SEC filing. Defendants\' ongoing Iraq-related compliance posture — and
        particularly the April 2026 Long War Journal evidence that Mastercard remains a
        named militia fundraising channel as of the month this complaint is filed —
        establishes that the conduct alleged herein is not a historical episode but an
        ongoing course of knowing conduct.
      </p>

      </div>

      {/* End-of-narrative close */}
      <section className="section-block-alt mt-12">
        <div className="flex items-center gap-2 mb-3">
          <DocumentTextIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">Drafting Integration Notes</h2>
        </div>
        <ul className="text-sm text-neutral-800 space-y-2 list-disc pl-5 mb-0">
          <li>
            <strong>Named-plaintiff paragraphs</strong> should be inserted at Element 1
            (following ¶ 9 and ¶ 38-48). Counsel should draft individual-plaintiff §§ 38A
            (Tower 22 Gold Star family plaintiffs), §§ 38B (wounded servicemember plaintiffs),
            and §§ 38C (other plaintiffs including Pure Platform business-damages plaintiff
            and Kittleson-adjacent plaintiffs) based on each client\'s specific facts.
          </li>
          <li>
            <strong>Causes of action</strong> — this narrative supports claims under (i) 18
            U.S.C. § 2333(d)(2) JASTA aiding-and-abetting; (ii) 18 U.S.C. § 2333(a) ATA
            primary liability (with express acknowledgement of the Linde § 2331(1) bar and
            plea-around-strategy via the Atchley pathway); (iii) potential Section 10(b) /
            Rule 10b-5 claims by investor plaintiffs on material-omission theory; and (iv)
            state-law claims for intentional infliction of emotional distress, conversion,
            and unjust enrichment as available.
          </li>
          <li>
            <strong>Prayer for relief</strong> should reference 18 U.S.C. § 2333(a)\'s
            threefold damages mandate and recovery of attorney\'s fees, together with any
            applicable state-law remedies and equitable relief.
          </li>
          <li>
            <strong>Jurisdiction and venue</strong> — 28 U.S.C. § 1331 (federal question)
            plus 18 U.S.C. § 2334 (ATA venue). Counsel should weigh S.D.N.Y. (Moses post-
            Ashley denial) vs. D.D.C. (Atchley January 23, 2026 reversal) vs. D.N.D. (Balva
            forum-innovation) as venue choices; D.D.C. is currently the most plaintiff-
            friendly forum post-Taamneh.
          </li>
          <li>
            <strong>Verification</strong> — every exhibit reference in this narrative must be
            verified against the underlying source. Bluebook formatting of authorities and
            exhibits is available in the{' '}
            <Link href="/authorities" className="underline">
              Authorities Table
            </Link>
            .
          </li>
        </ul>
      </section>

      {/* Footer navigation */}
      <footer className="mt-12 pt-6 border-t border-neutral-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link href="/pleading-checklist" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Pleading Checklist
            </div>
            <div className="text-2xs text-neutral-500">Halberstam factor map</div>
          </Link>
          <Link href="/authorities" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Authorities Table
            </div>
            <div className="text-2xs text-neutral-500">Bluebook cites</div>
          </Link>
          <Link href="/discovery-targets" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Discovery Targets
            </div>
            <div className="text-2xs text-neutral-500">Custodians + docs</div>
          </Link>
          <Link href="/defendants" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Defendant Structures
            </div>
            <div className="text-2xs text-neutral-500">Proper captioning</div>
          </Link>
        </div>

        <p className="text-2xs text-neutral-400 leading-relaxed mt-6">
          <strong className="text-neutral-500">Disclaimer:</strong> This statement-of-facts
          research narrative is a drafting input only and is not a legal pleading. Counsel of
          record retains all responsibility for drafting, verification, authentication of
          exhibits, determination of proper parties, venue analysis, and the specific wording
          of any complaint or amended pleading. Allegations are phrased in declarative-fact
          style to facilitate drafting efficiency; they must not be filed without independent
          verification and licensed-attorney review.
        </p>
      </footer>
    </article>
  );
}
