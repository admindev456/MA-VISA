import Link from 'next/link';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ShieldExclamationIcon,
  ExclamationTriangleIcon,
  BuildingOffice2Icon,
  ScaleIcon,
  UserIcon,
  GlobeAltIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Negligence Per Se | V/MC Intelligence',
  description:
    'Pattern of institutional weaponization by ISC/Qi Card — including the unlawful detention of U.S. citizen Moe Alkhafaji, the criminal record of ISC founder Bahaa Abdul Hadi, and the legal case for willful blindness beyond negligence.',
};

export default function CoerciveEcosystemPage() {
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
      <header className="mb-10">
        <p className="kicker">Pattern of Institutional Weaponization</p>
        <h1>ISC/Qi Card Coercive Ecosystem</h1>
      </header>

      {/* ======== OVERVIEW ======== */}
      <section className="section-block mb-10">
        <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">Overview</h2>

        <p className="text-neutral-700 leading-relaxed mb-4">
          The International Smart Card Group (ISC), parent company of Qi Card, is not merely a
          passive payment infrastructure provider that was exploited by militia groups.
          ISC&apos;s power — its ability to operate at scale, process government payroll for
          200,000+ PMF militia members, and wield influence over Iraq&apos;s financial and
          judicial systems — is <strong>directly derived from its partnership with Mastercard
          and Visa</strong>. Without access to those international payment networks and the
          ability to transact in U.S. dollars through their rails, Qi Card is a domestic-only
          instrument with limited reach and negligible leverage. It is the Mastercard and Visa
          branding, the cross-border settlement capability, and the connection to the global
          financial system that transforms ISC from a local card issuer into the dominant
          financial institution in Iraq — one powerful enough to facilitate billions in
          militia-linked transactions, corrupt the judiciary, and imprison a U.S. citizen.
        </p>

        <p className="text-neutral-700 leading-relaxed mb-4">
          The evidentiary record demonstrates that ISC operates as a coercive institutional
          actor that wields Iraq&apos;s financial and judicial systems against competitors,
          business partners, and innovators who threaten its monopoly position.
          Mastercard and Visa&apos;s continued partnership with ISC throughout the Gap Period
          (May 2023 – early 2025) was not a passive relationship with a flawed compliance
          partner. It was an active business relationship that empowered and enabled an entity
          to suppress opposition, fund designated terrorist organizations, and maintain control
          over Iraq&apos;s payment ecosystem through coercion — including the unlawful detention
          of an American citizen. The networks did not merely fail to stop ISC. They gave ISC
          the tools and the standing to do what it did.
        </p>

        <div className="callout mb-6">
          <h4 className="text-sm font-semibold text-neutral-800 mb-2 flex items-center gap-2">
            <GlobeAltIcon className="w-4 h-4" />
            Regional Enforcement Accelerating
          </h4>
          <p className="text-sm text-neutral-700 mb-3">
            The international community is moving against these long-standing Iranian-backed
            corrupt financial institutions. In <strong>December 2025</strong>, the UAE Central
            Bank imposed substantial financial penalties on Al-Rafidain Bank&apos;s Abu Dhabi
            branch, citing repeated compliance failures and weak management, and warned the
            branch could face closure. Authorities in several countries, including the UAE,
            notified Iraq that they are monitoring Rafidain Bank&apos;s overseas accounts and
            financial transfers.
          </p>
          <p className="text-sm text-neutral-700 mb-3">
            In <strong>October 2025</strong>, Yemen closed Rafidain Bank&apos;s branch in
            Sanaa as part of international efforts to cut funding to Iran-backed groups. U.S.
            Representative Joe Wilson called for sanctions against Rafidain and threatened to
            cut funding to Iraq, alleging the bank was channeling money to the Houthis.
            Rafidain subsequently entered a compliance partnership with U.S.-based firm K2
            Integrity, and Iraq is now considering splitting the bank into two separate
            entities under pressure from Washington.
          </p>
          <p className="text-sm text-neutral-700 mb-0">
            Al-Rafidain Bank is the same state-owned institution with a branch office inside
            PMF headquarters that Moe Alkhafaji identified as &quot;the primary vehicle for my
            opponent&apos;s financial infrastructure.&quot;
          </p>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ======== CASE STUDY: MOE ALKHAFAJI ======== */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <UserIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">Case Study: Pure Platform and Moe Alkhafaji</h2>
        </div>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-6 mb-4">Background</h3>

        <p className="text-neutral-700 leading-relaxed mb-4">
          Moe Alkhafaji is an Iraqi-American entrepreneur and U.S. citizen based in Chicago,
          Illinois. He is the founder and CEO of Pure Platform, a U.S.-incorporated AI-driven
          cross-border e-commerce and fintech company established in 2019. Alkhafaji emigrated
          from Iraq in 1995 and arrived in the United States in 1997. He earned a Bachelor of
          Science degree from the University of Illinois at Urbana-Champaign, then began
          doctoral studies which he cut short to pursue a career path working on classified
          projects via Argonne National Laboratory. He went on to co-found CancerIQ, Inc., a
          medical EMR company that was recognized nationally as an innovative solution in risk
          assessment for cancer at the time of its release. He also served as Chief Information
          Officer at Discovery Health Partners. Pure Platform is headquartered in the Greater
          Chicago Area.
        </p>

        <p className="text-neutral-700 leading-relaxed mb-4">
          Pure Platform operates as a cross-border e-commerce solution enabling Iraqi consumers
          to purchase products from Turkey, the Gulf states, and the United States. The platform
          uses a proprietary rewards system (&quot;Kidu&quot;) and AI-driven logistics
          optimization. By the end of 2023, Pure Platform had achieved over 300% sales growth
          in 2022 and over 600% growth in 2023, reaching eight-digit cumulative revenue.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">
          Detention of a U.S. Citizen
        </h3>

        <p className="text-neutral-700 leading-relaxed mb-4">
          Moe Alkhafaji was detained and imprisoned in Iraq by actors within the ISC/Qi
          Card-affiliated ecosystem. The detention of a U.S. citizen was carried out by a
          corrupt judicial system known in Iraq to have previously regularly sided with Qi Card
          on key legal issues in Iraq.
        </p>

        <div className="callout-danger mb-6">
          <p className="text-sm text-neutral-800 mb-3">
            The detention of a U.S. citizen required the <strong>direct intervention of the
            United States Embassy in Baghdad</strong>. The Embassy recognized this was a
            different case — a knowingly corrupt and Iranian-linked Iraqi company that had
            utilized a U.S. company to whitelist their technology to continue their operations,
            and was now potentially positioning to transfer Moe to Iran to remain in detention
            indefinitely, which would have minimized any efforts by the United States to secure
            his release.
          </p>
          <p className="text-sm text-neutral-800 mb-3">
            Recognizing the severity and urgency of the situation, the Embassy prioritized
            their efforts, and <strong>Moe was released within two weeks</strong>. But this did
            not prevent the defamation attacks, harassment, and continued threats to him and his
            family by Qi Card, the destruction of his business, severe financial harm, and the
            torture he endured during his illegal imprisonment.
          </p>
        </div>

        <p className="text-neutral-700 leading-relaxed mb-2">
          Following his release, Alkhafaji stated publicly:
        </p>

        <blockquote className="border-l-4 border-neutral-400 pl-4 py-2 mb-6 text-neutral-700 italic text-sm leading-relaxed">
          &quot;I am fortunate to have a strong nation behind me — one that values justice,
          recognizes the rot within Iraq&apos;s legal and financial systems, and fought for my
          release and protection. But I refuse to return to silence. Now that I have cleared my
          name from this unlawful detention, I am choosing to stand up against criminality for
          all the Americans illegally detained through similar circumstances. I intend to
          dismantle, piece by piece, the largest and most corrupt financial machinery in Iraq —
          one that has directly benefitted from its connection to Mastercard and Visa and their
          transactional ability in U.S. dollars, connections that have enabled and sustained
          criminal schemes that the U.S. Treasury has been warning about for years.&quot;
        </blockquote>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">
          The Failure to Act: Congressional Warnings Ignored
        </h3>

        <p className="text-neutral-700 leading-relaxed mb-4">
          The detention of Moe Alkhafaji did not occur in a vacuum. It occurred within a period
          when multiple branches of the U.S. government had already identified the ISC/Qi Card
          ecosystem as a threat and had issued explicit warnings that went unheeded.
        </p>

        <p className="text-neutral-700 leading-relaxed mb-4">
          On <strong>January 28, 2025</strong>, Representatives Joe Wilson (R-SC) and Greg
          Steube (R-FL), joined by Representatives Baird, Dunn, Hamadeh, Weber, and Smith, sent
          a letter to Secretary of State Marco Rubio and National Security Adviser Michael Waltz
          urging FTO designation of Iran-backed militias and sanctions against the institutions
          sustaining them. On <strong>May 28, 2025</strong>, Wilson and Steube sent a second,
          more specific letter directly to Secretary Rubio that explicitly named Qi Card and
          Al-Rafidain Bank as sanctions targets, demanded FTO designation of the entire PMF
          umbrella, and called for sanctions against ISC founder Bahaa Abdul Hadi by name. That
          letter stated that Iraq&apos;s Qi Card system &quot;processes the payroll for the PMF
          militias&quot; and that &quot;Iraq&apos;s ability to receive US dollars through the
          Federal Reserve is directly supporting Iran and its proxies.&quot;
        </p>

        <p className="text-neutral-700 leading-relaxed mb-4">
          These congressional warnings — like the Treasury briefings to Visa and Mastercard
          that preceded them — were not acted upon with the urgency the situation demanded. Had
          the executive branch moved to sanction ISC/Qi Card and Al-Rafidain Bank when Congress
          urged it, and had Visa and Mastercard severed their network relationships with ISC
          when Treasury first warned them in Fall 2023, the financial infrastructure that
          empowered the ISC ecosystem would have been dismantled. The coercive apparatus that
          was used to detain Moe Alkhafaji — an apparatus funded by network fee revenues and
          sustained by access to international payment rails — would have been degraded or
          eliminated before it could be deployed against a U.S. citizen.
        </p>

        <p className="text-neutral-700 leading-relaxed mb-0 p-4 bg-neutral-50 border-l-4 border-neutral-400">
          The pattern is consistent across every level: Treasury warned the networks. Congress
          warned the State Department. In both cases, the warnings were met with delay. And in
          the interim, the ISC/Qi Card ecosystem continued to operate with impunity — financing
          militia operations, evading sanctions, and imprisoning an American entrepreneur who
          got in its way.
        </p>
      </section>

      <div className="section-divider"></div>

      {/* ======== PATTERN: ARREST-AND-RELEASE ======== */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <ShieldExclamationIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">Pattern: ISC&apos;s Arrest-and-Release Power Cycle</h2>
        </div>

        <p className="text-neutral-700 leading-relaxed mb-6">
          The Alkhafaji detention is not an isolated incident. It fits a documented pattern in
          which the ISC/Qi Card ecosystem leverages Iraq&apos;s compromised judicial and
          security apparatus against perceived threats.
        </p>

        {/* Bahaa */}
        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-6 mb-4">
          Bahaa Abdul Hadi — ISC Founder, Convicted Criminal, and Beneficiary of Regime Change
        </h3>

        <p className="text-neutral-700 leading-relaxed mb-4">
          Bahaa Abdul Hussein Abdul Hadi, the founder and chairman of ISC, has a documented
          criminal record in Iraq that directly illustrates how the Qi Card ecosystem operates
          at the intersection of corruption, political power, and impunity.
        </p>

        <p className="text-neutral-700 leading-relaxed mb-4">
          On September 17, 2020, immediately following the formation of Prime Minister
          Kadhimi&apos;s anti-corruption Committee No. 29, Iraqi security forces arrested Abdul
          Hadi at Baghdad International Airport as he attempted to flee the country. He was the
          first high-profile target of the Kadhimi government&apos;s corruption drive. The
          Washington Institute reported that he was arrested on allegations of involvement in
          &quot;a major money-laundering network used by Iraqi politicians.&quot; The Central
          Criminal Court of Anti-Corruption subsequently convicted Abdul Hadi of intentional
          harm to public funds and sentenced him to <strong>four years&apos;
          imprisonment</strong>. He was also fined for paying bribes to Ahmed al-Saedi, the
          former head of the National Pension Authority, who was separately convicted and
          sentenced to six years. The charges centered on Qi Card&apos;s systematic fraud in
          managing government salary and pension distributions — the same payment
          infrastructure that would later become the primary vehicle for the PMF militia card
          scheme.
        </p>

        <p className="text-neutral-700 leading-relaxed mb-4">
          The investigation revealed that Qi Card&apos;s system was used to maintain{' '}
          <strong>330,000 fictitious individuals</strong> on the Iraqi government payroll —
          ghost employees receiving illegal salaries and pensions costing the state an estimated
          100 billion Iraqi dinars per month, a fraud that had persisted for over seven years.
        </p>

        <p className="text-neutral-700 leading-relaxed mb-4">
          The pattern is unmistakable: a reformist government arrests Abdul Hadi on corruption
          and money-laundering charges, convicts him, and sentences him to prison. A successor
          government with closer ties to the Iranian-backed political establishment releases
          him, acquits him, dissolves the committee that investigated him, and prosecutes his
          interrogators. The same corrupt judicial infrastructure that freed Abdul Hadi and
          rehabilitated his standing is the infrastructure that ISC/Qi Card subsequently
          weaponized against Moe Alkhafaji. And throughout this entire cycle — from Abdul
          Hadi&apos;s arrest in 2020 through his acquittal in 2023 and the card scheme&apos;s
          peak — Mastercard and Visa maintained their partnership with ISC, continuing to
          process transactions and collect fees.
        </p>

        {/* Ali Ghulam */}
        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">
          Ali Mohammed Ghulam Hussein Al Anssari
        </h3>

        <p className="text-neutral-700 leading-relaxed mb-4">
          Designated by OFAC on October 9, 2025 for using his position at the top of several
          Iraqi commercial banks to enrich his family, the IRGC-QF, and Iranian-aligned militia
          groups. Treasury stated he &quot;played a central role in embedding militia financing
          within Iraq&apos;s financial system&quot; and enabled groups to &quot;access U.S.
          dollars, launder funds using counterfeit documentation, and invest militia
          leaders&apos; assets abroad, all while evading accountability through{' '}
          <strong>judicial bribery</strong>.&quot;
        </p>

        <p className="text-neutral-700 leading-relaxed mb-4">
          The explicit reference to &quot;judicial bribery&quot; in Treasury&apos;s own press
          release corroborates Alkhafaji&apos;s account of bribed judges being used to create
          fabricated cases against business adversaries within the Iraqi financial sector.
        </p>

        {/* Meften Brothers */}
        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">
          The Meften Brothers
        </h3>

        <p className="text-neutral-700 leading-relaxed mb-4">
          Ali Meften Khafeef Al Baidani and Aqeel Meften Khafeef Al Baidani, designated by
          OFAC on October 9, 2025, co-owned and managed an IRGC-QF-associated Iraqi bank.
          Aqeel Meften simultaneously served as President of Iraq&apos;s National Olympic
          Committee, using the position for corruption. Treasury stated they had &quot;laundered
          tens of millions of dollars for Iran, and smuggled oil and drugs.&quot;
        </p>

        <p className="text-neutral-700 leading-relaxed mb-0">
          This dual-hatting — holding legitimate institutional positions while operating as
          financial conduits for designated terrorist organizations — is the defining
          characteristic of the ISC ecosystem. It is the same structural pattern that allowed
          ISC/Qi Card to function simultaneously as a legitimate Mastercard partner and as the
          primary salary distribution channel for 200,000+ PMF militia members.
        </p>
      </section>

      <div className="section-divider"></div>

      {/* ======== LEGAL SIGNIFICANCE ======== */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <ScaleIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">Legal Significance</h2>
        </div>

        {/* But For */}
        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-6 mb-4">
          &quot;But For&quot; Causation
        </h3>

        <p className="text-neutral-700 leading-relaxed mb-4">
          If Visa and Mastercard had acted on Treasury&apos;s warnings in Fall 2023 and severed
          or restricted ISC/Qi Card&apos;s access to their payment networks, the financial
          power and institutional leverage that the ISC ecosystem wielded would have been
          materially diminished — or eliminated entirely. The Qi Card system&apos;s value — and
          thus ISC&apos;s coercive capacity — derived directly from its connection to
          international payment rails and its ability to transact at scale in U.S. dollars.
          Without Mastercard and Visa processing, Qi Card loses its cross-border settlement
          capability, its USD transactional ability, and its standing as a globally connected
          financial institution. It becomes a domestic-only instrument with no international
          reach, no dollar access, and no capacity to sustain the billion-dollar militia
          financing operation that funded its institutional power. Severing the network
          relationship would not merely have limited ISC — it would have{' '}
          <strong>removed ISC&apos;s ability to operate as a meaningful financial actor on the
          international stage</strong>.
        </p>

        <div className="callout-warning mb-6">
          <p className="text-sm text-neutral-800 mb-0">
            <strong>The argument:</strong> but for the networks&apos; continued processing
            during the Gap Period, the ISC ecosystem would not have retained the financial
            resources and institutional leverage necessary to detain a U.S. citizen through
            bribed judicial proceedings, nor to carry out the overtaking of Moe&apos;s
            legitimate U.S.-based cross-border technology and business.
          </p>
        </div>

        {/* ATA Standing */}
        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">
          ATA Standing
        </h3>

        <p className="text-neutral-700 leading-relaxed mb-4">
          Under 18 U.S.C. § 2333(a), any U.S. national injured in his or her &quot;person,
          property, or business&quot; by reason of an act of international terrorism may sue.
          Alkhafaji&apos;s detention by actors within the ISC/Qi Card ecosystem — an ecosystem
          that simultaneously served as the primary financial infrastructure for designated
          FTOs — potentially satisfies this standing requirement. His injuries include:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white border border-red-200 rounded-lg p-4">
            <p className="text-xs font-semibold text-red-800 uppercase tracking-wider mb-1">Person</p>
            <p className="text-sm text-neutral-700 mb-0">
              Unlawful imprisonment, torture, and threats to his life requiring U.S. Embassy
              intervention
            </p>
          </div>
          <div className="bg-white border border-red-200 rounded-lg p-4">
            <p className="text-xs font-semibold text-red-800 uppercase tracking-wider mb-1">Business</p>
            <p className="text-sm text-neutral-700 mb-0">
              Destruction of Pure Platform&apos;s operations in Iraq, loss of revenue, and
              forced cessation of business activities
            </p>
          </div>
          <div className="bg-white border border-red-200 rounded-lg p-4">
            <p className="text-xs font-semibold text-red-800 uppercase tracking-wider mb-1">Property</p>
            <p className="text-sm text-neutral-700 mb-0">
              Financial losses from operational disruption, defamation, and ongoing harassment
            </p>
          </div>
        </div>

        {/* Coercive Character */}
        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">
          Demonstrates Coercive Character of Network Partner
        </h3>

        <p className="text-neutral-700 leading-relaxed mb-4">
          For the broader case against Visa and Mastercard, the Alkhafaji detention
          demonstrates that ISC was not a passive, flawed compliance partner — it was an entity
          that actively wielded coercive power against U.S. citizens and U.S. companies. The
          networks&apos; continued partnership with ISC, despite Treasury warnings about
          ISC&apos;s role in militia financing, was a partnership with an organization that used
          its power to imprison an American entrepreneur.
        </p>

        <p className="text-neutral-700 leading-relaxed mb-0 p-4 bg-red-50 border-l-4 border-red-400">
          This significantly undermines any defense by Visa or Mastercard that their
          relationship with ISC was &quot;routine commercial activity.&quot; Routine commercial
          partners do not detain their business associates through bribed judges and require
          U.S. Embassy extraction.
        </p>
      </section>

      <div className="section-divider"></div>

      {/* ======== BEYOND NEGLIGENCE ======== */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <ExclamationTriangleIcon className="w-5 h-5 text-red-700" />
          <h2 className="m-0">Beyond Negligence: The Case for Willful Blindness and Conscious Disregard</h2>
        </div>

        <p className="text-neutral-700 leading-relaxed mb-6">
          The conduct documented in this database does not constitute mere negligence — a
          passive failure to notice or a reasonable oversight in a complex market. The
          evidentiary record establishes a pattern of conduct that rises to{' '}
          <strong>willful blindness</strong>, <strong>deliberate indifference</strong>, and{' '}
          <strong>conscious disregard</strong>, each of which carries substantially greater
          legal consequences than simple negligence.
        </p>

        {/* Willful Blindness */}
        <h3 className="font-serif text-lg font-semibold text-neutral-900 mt-6 mb-3">
          Willful Blindness
        </h3>

        <p className="text-neutral-700 leading-relaxed mb-4">
          <strong>Willful blindness</strong> — as defined by the Supreme Court in{' '}
          <em>Global-Tech Appliances, Inc. v. SEB S.A.</em>, 563 U.S. 754 (2011) — requires
          two elements: (1) the defendant subjectively believed there was a high probability
          that a fact existed, and (2) the defendant took deliberate actions to avoid learning
          that fact. Both elements are satisfied here. Visa and Mastercard were directly briefed
          by U.S. Treasury officials in Fall 2023 that designated militia groups were exploiting
          their networks. They had subjective awareness of a high probability of terrorist
          financing. And yet they continued processing for 18+ months without severing or
          meaningfully restricting the ISC relationship — a deliberate choice to avoid the
          commercial consequences of acting on what they had been told. The Yana Banking audit
          of August 2023, which found zero sanctions screening and &quot;ineffective&quot; AML
          safeguards at a Mastercard partner, was not a discovery that prompted corrective
          action — Yana was reinstated after superficial &quot;remediation.&quot; This is not
          negligence. This is a conscious decision to look away.
        </p>

        {/* Deliberate Indifference */}
        <h3 className="font-serif text-lg font-semibold text-neutral-900 mt-6 mb-3">
          Deliberate Indifference
        </h3>

        <p className="text-neutral-700 leading-relaxed mb-4">
          <strong>Deliberate indifference</strong> — the standard applied in{' '}
          <em>Weiss v. National Westminster Bank, PLC</em>, 993 F.3d 144 (2d Cir. 2021) and
          its progeny — requires that the defendant was aware of a substantial risk and
          consciously disregarded it. The Treasury briefing naming Kata&apos;ib Hezbollah,
          Asa&apos;ib Ahl al-Haq, and Badr as card-scheme beneficiaries constitutes actual
          notice of a substantial risk. The 2,900% transaction surge — from $50 million to $1.5
          billion per month — was a red flag so extreme that Visa and Mastercard&apos;s own
          fraud detection systems, which both companies publicly claimed could evaluate every
          transaction using AI, should have flagged it automatically. The fact that the surge
          went unaddressed for months before Treasury even contacted the networks suggests the
          systems were either not designed to detect this type of anomaly, were not applied to
          this market, or were deliberately configured to avoid triggering alerts that would
          disrupt a profitable revenue stream. Each of these scenarios constitutes something far
          more culpable than negligence.
        </p>

        {/* Conscious Participation */}
        <h3 className="font-serif text-lg font-semibold text-neutral-900 mt-6 mb-3">
          Conscious Participation
        </h3>

        <p className="text-neutral-700 leading-relaxed mb-6">
          <strong>Conscious participation</strong> — the standard articulated by the Supreme
          Court in <em>Twitter, Inc. v. Taamneh</em>, 598 U.S. 471 (2023) and applied in the
          D.C. Circuit&apos;s January 2026 reversal in <em>Atchley v. AstraZeneca</em> —
          requires &quot;conscious, voluntary, and culpable participation&quot; in the
          wrongdoing, conducted in an &quot;unusual way.&quot; The <em>Atchley</em> court held
          that commercial actors who engage in corrupt or unusual business practices with
          terror-linked entities can satisfy this standard even post-<em>Taamneh</em>. The
          conduct here is unusual by any measure: maintaining a partnership with ISC after
          Treasury named its cardholders as militia members; reinstating Yana Banking after an
          audit found zero compliance controls; collecting premium cross-border fees on
          transactions that were statistically impossible to explain as legitimate commerce (20%
          of all UAE foreign card transactions being Iraqi despite Iraqis comprising 0.4% of
          travelers); and continuing to process for 18 months after receiving specific
          intelligence about militia exploitation. This is not the &quot;routine&quot;
          commercial activity that <em>Taamneh</em> sought to protect from ATA liability. This
          is active, knowing participation in a scheme that the U.S. government had explicitly
          identified and warned about.
        </p>

        {/* Precedents */}
        <h3 className="font-serif text-lg font-semibold text-neutral-900 mt-8 mb-4">
          The Precedent Landscape Supports This Escalation
        </h3>

        <div className="space-y-4 mb-6">
          <div className="bg-white border border-neutral-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-neutral-900 mb-1">HSBC (2012) — $1.9 Billion Fine</p>
            <p className="text-sm text-neutral-700 mb-0">
              Fined by U.S. regulators for willful AML failures that allowed Mexican cartels to
              launder $881 million. Executives were aware of risks but failed to act — the same
              pattern documented here with Visa and Mastercard.
            </p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-neutral-900 mb-1">BNP Paribas (2014) — $8.97 Billion Guilty Plea</p>
            <p className="text-sm text-neutral-700 mb-0">
              The largest sanctions penalty in history — for deliberately processing
              transactions for sanctioned entities including Sudan and Iran. The{' '}
              <em>Moses v. BNP Paribas</em> ATA case (S.D.N.Y.), filed in 2024, survived a
              motion to dismiss in September 2025 — the first time an ATA claim has been
              allowed to proceed against a European bank for conducting business in Iran. The
              court found that &quot;warnings plus continued conduct&quot; established the JASTA
              fulcrum.
            </p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-neutral-900 mb-1">Danske Bank (2007-2015) — €200 Billion in Suspicious Flows</p>
            <p className="text-sm text-neutral-700 mb-0">
              Danish authorities prosecuted executives for willful misconduct in bypassing
              controls. The pattern — massive transaction volumes through a poorly controlled
              branch, known red flags, continued processing — mirrors the ISC/Qi Card fact
              pattern.
            </p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-neutral-900 mb-1">Standard Chartered (2012) — $667 Million Fine</p>
            <p className="text-sm text-neutral-700 mb-0">
              Fined for concealing approximately 60,000 transactions linked to Iran. Visa and
              Mastercard faced the same choice — comply with U.S. sanctions or continue doing
              business with Iran-linked entities — and chose continued business.
            </p>
          </div>
        </div>

        <div className="callout-danger mb-0">
          <p className="text-sm text-neutral-800 mb-0">
            The cumulative weight of this evidence — explicit government warnings, documented
            compliance failures at partner institutions, a 2,900% transaction surge that defied
            legitimate explanation, 22 months of continued processing, $120M+ in fee revenue
            collected, and the imprisonment of a U.S. citizen by the very entity they were
            partnered with — moves this case <strong>well beyond negligence</strong>. It
            establishes a pattern of willful blindness and conscious disregard that satisfies
            the scienter requirements under the ATA, the BSA, and OFAC&apos;s enforcement
            framework, and that supports the imposition of{' '}
            <strong>treble damages, punitive penalties, and disgorgement</strong>.
          </p>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* ======== EVIDENCE CROSS-REFERENCES ======== */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <DocumentMagnifyingGlassIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">Evidence Cross-References</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Database Reference</th>
                <th>Connection</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono text-xs">doc-001 (Yana Audit)</td>
                <td>Same Mastercard compliance ecosystem that failed to screen ISC</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">doc-002 (Treasury Briefing)</td>
                <td>Treasury warned networks about ISC/Qi Card militia role; warnings went unheeded</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">doc-010 (Qi Card Analysis)</td>
                <td>Documents ISC&apos;s 5,000% growth and PMF integration</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">doc-013 (Wilson-Steube Rubio Letter)</td>
                <td>Names ISC/Qi Card and Al-Rafidain Bank as sanctions targets; failure to act enabled continued ISC coercion</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">doc-011 (OFAC Designations)</td>
                <td>Ali Ghulam designation references &quot;judicial bribery&quot; — corroborates Alkhafaji account</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">evt-008 (Yana Audit)</td>
                <td>August 2023 — Mastercard knew ISC ecosystem lacked compliance controls</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">evt-009 (Treasury Militia Briefing)</td>
                <td>Fall 2023 — networks explicitly warned about militia exploitation of ISC/Qi Card</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">Entity: ISC (Qi Card)</td>
                <td>Detained Alkhafaji through bribed judiciary; power derived from Mastercard/Visa partnership</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">Entity: Al-Rafidain Bank</td>
                <td>Alkhafaji identified as &quot;primary vehicle for my opponent&apos;s financial infrastructure&quot;; fined by UAE Dec 2025; branch closed in Yemen Oct 2025</td>
              </tr>
              <tr>
                <td className="font-mono text-xs">Custodian: State Dept Consular</td>
                <td>U.S. Embassy Baghdad intervention records</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer navigation */}
      <footer className="mt-12 pt-6 border-t border-neutral-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link href="/compliance-gap" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Compliance Gap
            </div>
            <div className="text-2xs text-neutral-500">Claims vs. reality</div>
          </Link>
          <Link href="/attacks-ledger" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Attacks Ledger
            </div>
            <div className="text-2xs text-neutral-500">2-year chronicle</div>
          </Link>
          <Link href="/ata-litigation-landscape" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              ATA Landscape
            </div>
            <div className="text-2xs text-neutral-500">Litigation strategy</div>
          </Link>
          <Link href="/legal-analysis" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Legal Analysis
            </div>
            <div className="text-2xs text-neutral-500">3 frameworks</div>
          </Link>
        </div>

        <p className="text-2xs text-neutral-400 leading-relaxed mt-6">
          <strong className="text-neutral-500">Disclaimer:</strong> Compiled from public
          sources including LinkedIn public posts, Wamda News, Crunchbase, TEDxU of Baghdad,
          Ruwwad Al Iraq, France 24, Arab News, Middle East Eye, The Washington Institute,
          Shafaq News, MENA Rights Group, The National, Anadolu Agency, Amwaj Media,
          U.S. Treasury press releases, and OFAC designation records. Research aid only; not
          legal advice.
        </p>
      </footer>
    </article>
  );
}
