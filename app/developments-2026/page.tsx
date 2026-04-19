import Link from 'next/link';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ScaleIcon,
  ShieldExclamationIcon,
  DocumentMagnifyingGlassIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
  BuildingLibraryIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import { timelineEvents } from '@/lib/data/timeline';
import { evidenceDocuments } from '@/lib/data/evidence';
import {
  legalPrecedents,
  adversePrecedents,
} from '@/lib/data/legal';
import {
  pendingLitigation,
  settlementDrivers2026,
} from '@/lib/data/financial';
import Badge from '@/components/ui/Badge';

export const metadata = {
  title: '2026 Developments & Parallel Litigation | V/MC Intelligence',
  description:
    'Post-October 2025 developments materially strengthening the Visa/Mastercard terror-finance liability case, including the Jan 2026 Kreindler Tower 22 FSIA suit, Oct 2025 OFAC designations, Sept 2025 FTO upgrades, and Mastercard\'s Feb 2026 SEC Iran disclosure — with a pre-emptive rebuttal to Ashley v. Deutsche Bank (2d Cir. 2025).',
};

const new2026Events = timelineEvents.filter((e) =>
  ['evt-024', 'evt-025', 'evt-026', 'evt-027', 'evt-028', 'evt-029', 'evt-030', 'evt-031'].includes(e.id),
);

const ofacEscalation = timelineEvents.filter((e) =>
  ['evt-027', 'evt-028'].includes(e.id),
);

const kreindlerEvidence = evidenceDocuments.find((d) => d.id === 'doc-018');
const lwjEvidence = evidenceDocuments.find((d) => d.id === 'doc-019');
const secEvidence = evidenceDocuments.find((d) => d.id === 'doc-017');
const rubioLetter = evidenceDocuments.find((d) => d.id === 'doc-013');
const muhandisCard = evidenceDocuments.find((d) => d.id === 'doc-020');
const ashley = adversePrecedents[0];

export default function Developments2026Page() {
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
        <p className="kicker">Post-WSJ Investigation Update</p>
        <h1>2026 Developments &amp; Parallel Litigation</h1>
        <p className="lead mt-4">
          Eight material events since the May 31, 2025 Wall Street Journal investigation have
          reshaped the litigation posture against Visa and Mastercard. This briefing captures what
          is new, what the networks&apos; counsel will argue, and how each development maps onto the
          three pillars of liability.
        </p>
      </header>

      {/* Headline metrics */}
      <div className="metric-grid mb-12">
        <div className="metric-item">
          <div className="stat-inline text-red-700">8</div>
          <div className="stat-label">New Developments</div>
        </div>
        <div className="metric-item">
          <div className="stat-inline">4 → FTO</div>
          <div className="stat-label">PMF Militias Upgraded</div>
        </div>
        <div className="metric-item">
          <div className="stat-inline">3</div>
          <div className="stat-label">Tower 22 Families Suing Iran</div>
        </div>
        <div className="metric-item">
          <div className="stat-inline text-red-700">5+</div>
          <div className="stat-label">Parallel ATA Dockets</div>
        </div>
      </div>

      {/* 1. Executive brief */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <SparklesIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">1. What&apos;s New Since the WSJ Investigation</h2>
        </div>

        <p className="mb-4">
          The period from May 2025 through April 2026 has produced a cluster of developments that
          materially strengthen the evidentiary record and legal predicates available to any
          Anti-Terrorism Act or OFAC action against Visa and Mastercard. Read chronologically,
          they tell a single story: <strong>the U.S. government has now put every element of the
          prima facie case on the public record</strong>.
        </p>

        <div className="space-y-4 mt-6">
          {new2026Events
            .slice()
            .sort((a, b) => a.dateSort.localeCompare(b.dateSort))
            .map((event) => (
              <div
                key={event.id}
                className="border-l-2 border-neutral-300 pl-4 py-1 hover:border-neutral-600 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-base font-semibold text-neutral-900 m-0">
                    {event.title}
                  </h3>
                  <span className="text-xs text-neutral-500 whitespace-nowrap">
                    {event.date}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 mb-0">{event.description}</p>
                {event.isKeyEvent && (
                  <div className="mt-2">
                    <Badge variant="danger" size="sm">
                      Key Event
                    </Badge>
                  </div>
                )}
              </div>
            ))}
        </div>
      </section>

      {/* 2. OFAC escalation ladder */}
      <section className="section-block-alt mb-10">
        <div className="flex items-center gap-2 mb-4">
          <ShieldExclamationIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">2. The 2025 OFAC Escalation Ladder</h2>
        </div>

        <p className="mb-4">
          Two consecutive Treasury and State Department actions in fall 2025 establish, at the
          highest U.S. government level, the <strong>Kata&apos;ib Hezbollah / IRGC-QF control</strong>{' '}
          over the PMF economic apparatus that receives and cashes out through the payment networks.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {ofacEscalation.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-neutral-200 rounded-lg p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="navy" size="sm">
                  {event.date}
                </Badge>
                <Badge variant="danger" size="sm">
                  {event.category}
                </Badge>
              </div>
              <h3 className="text-base font-semibold text-neutral-900 mb-2">
                {event.title}
              </h3>
              <p className="text-sm text-neutral-600 mb-3">{event.description}</p>
              {event.details && (
                <ul className="text-sm text-neutral-700 space-y-1 list-disc pl-5">
                  {event.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
              {event.source && (
                <p className="text-xs text-neutral-400 mt-3 mb-0 italic">
                  Source: {event.source}
                </p>
              )}
            </div>
          ))}
        </div>

        {rubioLetter && (
          <div className="callout-warning mt-6">
            <h4 className="text-sm font-semibold text-neutral-800 mb-1">
              Upstream Congressional Trigger: May 28, 2025 Wilson-Steube Letter to Sec. Rubio
            </h4>
            <p className="text-sm text-neutral-600 mb-2">
              The OFAC escalation did not occur in a vacuum. On May 28, 2025 Reps. Joe Wilson and
              Greg Steube wrote directly to Secretary of State Marco Rubio, <strong>explicitly
              naming the Qi Card e-payment system and Al-Rafidain Bank</strong> as sanctions
              targets and demanding FTO designation of the PMF, Muhandis General Company, and the
              Badr Organization. This letter is a self-authenticating public record that the
              networks&apos; Iraqi partners were the subject of specific congressional concern
              months before OFAC acted.
            </p>
            {rubioLetter.documentUrl && (
              <a
                href={rubioLetter.documentUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm text-navy-700 hover:text-navy-900 underline"
              >
                View letter PDF
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        )}
      </section>

      {/* 3. The Kreindler filing */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <ScaleIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">3. The Kreindler Tower 22 FSIA Filing (Jan 22, 2026)</h2>
        </div>

        <p className="mb-4">
          On January 22, 2026 the law firm of Kreindler &amp; Kreindler filed a complaint in the
          U.S. District Court for the District of Columbia on behalf of the families of the three
          U.S. soldiers killed at Tower 22 on January 28, 2024 — <strong>Sgt. William Rivers,
          Spc. Kennedy Sanders, and Spc. Breonna Moffett</strong> — seeking compensatory and
          punitive damages against the Islamic Republic of Iran under the FSIA state-sponsored
          terrorism exception, 28 U.S.C. § 1605A.
        </p>

        <div className="bg-red-50 border border-red-200 rounded-lg p-5 my-6">
          <h3 className="text-base font-semibold text-red-900 mb-3 mt-0">
            Why This Case Strengthens Any Action Against Visa &amp; Mastercard
          </h3>
          <ol className="list-decimal pl-6 space-y-2 text-sm text-red-900 mb-0">
            <li>
              <strong>Attribution certainty.</strong> An FSIA § 1605A judgment will formally
              attribute Tower 22 to Iran on the public record, foreclosing the attribution
              ambiguity that defeated the plaintiffs in <em>Ashley v. Deutsche Bank</em> (2d Cir. 2025).
            </li>
            <li>
              <strong>Damages benchmark.</strong> Comparable FSIA terror cases have routinely
              produced judgments in the $500M – $1.8B range per matter (Holladay, Fishbeck,
              Christie, Gration) — establishing the order-of-magnitude of recoverable damages for
              the same families if they pursue a § 2333(a) ATA action.
            </li>
            <li>
              <strong>Gold Star plaintiff audience.</strong> Juries, journalists, and policymakers
              engaging with Kreindler&apos;s filing are the same audience that will learn of the
              payment networks&apos; 22-month post-warning delay.
            </li>
            <li>
              <strong>Fact development.</strong> The § 1605A record will contain expert testimony
              on Iran&apos;s use of PMF proxies and financial facilitation — directly usable in a
              subsequent action against the networks.
            </li>
          </ol>
        </div>

        {kreindlerEvidence && (
          <p className="text-sm text-neutral-500 italic">
            Primary source:{' '}
            {kreindlerEvidence.documentUrl ? (
              <a
                href={kreindlerEvidence.documentUrl}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-neutral-800"
              >
                {kreindlerEvidence.citations?.[0] ?? kreindlerEvidence.title}
              </a>
            ) : (
              kreindlerEvidence.title
            )}
          </p>
        )}
      </section>

      {/* 4. Parallel bank-liability dockets */}
      <section className="section-block-alt mb-10">
        <div className="flex items-center gap-2 mb-4">
          <BuildingLibraryIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">4. Parallel Bank-Liability Dockets</h2>
        </div>

        <p className="mb-4">
          Five JASTA / ATA actions against financial-institution defendants are actively developing
          the pleading and discovery playbook that a Visa/Mastercard case would follow. Three of
          them are run by <strong>Sparacino PLLC</strong>, a plaintiffs&apos; practice that
          publicly represents <strong>more than 4,000 Americans, including more than 1,000 Gold
          Star families</strong>, in ongoing terrorism-related claims.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-neutral-300 text-left">
                <th className="py-3 pr-4 font-semibold text-neutral-800">Case</th>
                <th className="py-3 px-3 font-semibold text-neutral-800">Docket</th>
                <th className="py-3 px-3 font-semibold text-neutral-800">Filed</th>
                <th className="py-3 px-3 font-semibold text-neutral-800">Theory</th>
                <th className="py-3 pl-3 font-semibold text-neutral-800">Relevance</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              {pendingLitigation.map((c) => (
                <tr key={c.docket} className="border-b border-neutral-200 align-top">
                  <td className="py-3 pr-4">
                    <div className="font-semibold text-neutral-900">{c.caseName}</div>
                    <div className="text-xs text-neutral-500 mt-0.5">{c.counsel}</div>
                  </td>
                  <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">
                    {c.docket}
                    <div className="text-xs text-neutral-500 mt-0.5">{c.court}</div>
                  </td>
                  <td className="py-3 px-3 text-xs whitespace-nowrap">{c.filed}</td>
                  <td className="py-3 px-3 text-xs">{c.theory}</td>
                  <td className="py-3 pl-3 text-xs">{c.relevanceToVisaMastercard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-neutral-600">
          Collectively, these dockets will produce the Second Circuit&apos;s
          post-<em>Taamneh</em> synthesis on what constitutes &quot;knowing and substantial
          assistance&quot; by financial institutions. A Visa/Mastercard action will benefit
          whether it files before, during, or after their resolution.
        </p>
      </section>

      {/* 5. Adverse precedent rebuttal */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <ExclamationCircleIcon className="w-5 h-5 text-red-700" />
          <h2 className="m-0">5. Adverse Precedent: Ashley v. Deutsche Bank (2d Cir. July 21, 2025)</h2>
        </div>

        <div className="callout-danger mb-6">
          <h4 className="text-sm font-semibold text-red-800 mb-1">
            The Defense Will Lead With This
          </h4>
          <p className="text-sm text-neutral-700 mb-0">
            The Second Circuit in <em>Ashley v. Deutsche Bank Aktiengesellschaft</em> (July 21,
            2025) affirmed dismissal of JASTA aiding-and-abetting claims against Deutsche Bank,
            Standard Chartered, and Danske Bank brought by U.S. service members injured in
            Afghanistan by IEDs made from fertilizer supplied by Pakistani companies banked by the
            defendants. Applying <em>Twitter, Inc. v. Taamneh</em> (2023), the panel rejected a
            &quot;fungibility&quot; theory and held flatly that <strong>&quot;indifference is not
            enough&quot;</strong> — routine commercial banking, even where defendants knew goods
            were being diverted, does not meet Taamneh&apos;s &quot;conscious and culpable
            participation&quot; standard. <em>Ashley</em> is now the controlling post-<em>Taamneh</em>
            template in the Second Circuit; Visa and Mastercard&apos;s counsel will cite it first.
          </p>
        </div>

        {ashley && (
          <>
            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">
              Distinguishing Factors — Why Our Case Survives Where Ashley Fell
            </h3>

            <div className="space-y-3">
              {(ashley.distinguishingFactors ?? []).map((factor, idx) => {
                const colonIdx = factor.indexOf(':');
                const label = colonIdx > -1 ? factor.slice(0, colonIdx) : `Factor ${idx + 1}`;
                const body = colonIdx > -1 ? factor.slice(colonIdx + 1).trim() : factor;

                return (
                  <div
                    key={idx}
                    className="bg-white border border-neutral-200 rounded-lg p-4 flex gap-3"
                  >
                    <CheckCircleIcon className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-neutral-900 mb-1">{label}</p>
                      <p className="text-sm text-neutral-600 mb-0">{body}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-xs text-neutral-500 italic mt-4">
              Case reference: {ashley.citation}. Status: {ashley.status}. See the{' '}
              <Link href="/precedents" className="underline hover:text-neutral-800">
                full precedents catalog
              </Link>{' '}
              for additional context on related cases ({legalPrecedents.length} total).
            </p>
          </>
        )}
      </section>

      {/* 6. Mastercard SEC disclosure */}
      <section className="section-block-alt mb-10">
        <div className="flex items-center gap-2 mb-4">
          <DocumentMagnifyingGlassIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">6. Mastercard&apos;s Feb 11, 2026 SEC Iran Disclosure</h2>
        </div>

        {secEvidence && (
          <>
            <p className="mb-4">
              On <strong>{secEvidence.date}</strong>, Mastercard Incorporated filed its FY2025
              notice pursuant to <strong>Section 219 of the Iran Threat Reduction and Syria Human
              Rights Act of 2012</strong> and{' '}
              <strong>Section 13(r) of the Securities Exchange Act of 1934</strong>, signed by
              General Counsel Tiffany Hall. The accompanying 2025 Form 10-K explicitly identifies
              Iran among the comprehensive-OFAC-sanctioned jurisdictions that Mastercard&apos;s
              compliance systems must screen — the same sanctions regime the networks&apos; Iraqi
              partners were used to circumvent.
            </p>

            <div className="bg-navy-50 border border-navy-200 rounded-lg p-5">
              <h3 className="text-base font-semibold text-navy-900 mt-0 mb-2">
                Why This Disclosure Matters in Litigation
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-navy-900 mb-0">
                <li>
                  <strong>Admission against interest.</strong> The 10-K identifies Iran as a
                  comprehensive OFAC sanctions jurisdiction under Mastercard&apos;s own
                  risk-based screening obligations — a sworn corporate statement admissible under
                  FRE 801(d)(2).
                </li>
                <li>
                  <strong>Forecloses &quot;did not know&quot; defense.</strong> Mastercard cannot
                  simultaneously tell the SEC that Iran flows are a material compliance risk and
                  tell a court that Iran-linked flows through Iraqi partners were unforeseeable.
                </li>
                <li>
                  <strong>Recurring filing.</strong> The identical notice was filed for FY2024 on
                  February 12, 2025 — a multi-year pattern of Iran-risk acknowledgment that
                  brackets the entire 22-month Gap Period.
                </li>
              </ul>
              {secEvidence.documentUrl && (
                <a
                  href={secEvidence.documentUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-sm text-navy-700 hover:text-navy-900 underline"
                >
                  Read notice on SEC EDGAR
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </>
        )}
      </section>

      {/* 7. Ongoing scheme evidence */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <ExclamationTriangleIcon className="w-5 h-5 text-red-700" />
          <h2 className="m-0">7. The Scheme Persists — April 2026 Evidence</h2>
        </div>

        <p className="mb-4">
          Any defense premised on &quot;we already fixed it in March-April 2025&quot; must contend
          with two post-blocking data points:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {muhandisCard && (
            <div className="bg-white border border-neutral-200 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="amber" size="sm">
                  {muhandisCard.date}
                </Badge>
                <Badge variant="outline" size="sm">
                  PMF Adaptation
                </Badge>
              </div>
              <h3 className="text-base font-semibold text-neutral-900 mb-2">
                {muhandisCard.title}
              </h3>
              <p className="text-sm text-neutral-600 mb-3">{muhandisCard.description}</p>
              <p className="text-xs text-neutral-500 italic mb-0">
                Named after Abu Mahdi al-Muhandis, the Kata&apos;ib Hezbollah founder killed in
                the January 3, 2020 U.S. strike — a symbolic admission that the PMF understands
                exactly whose economic engine the card system serves.
              </p>
            </div>
          )}

          {lwjEvidence && (
            <div className="bg-white border border-red-200 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="danger" size="sm">
                  {lwjEvidence.date}
                </Badge>
                <Badge variant="outline" size="sm">
                  Ongoing Abuse
                </Badge>
              </div>
              <h3 className="text-base font-semibold text-neutral-900 mb-2">
                {lwjEvidence.title}
              </h3>
              <p className="text-sm text-neutral-600 mb-3">{lwjEvidence.description}</p>
              <p className="text-xs text-neutral-700 mb-0">
                <strong>Legal consequence:</strong> Converts the case from a historical compliance
                failure to <em>ongoing</em> willful conduct, supporting continuing-violation
                tolling and defeating any remediation defense.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Settlement drivers synthesis */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <ClockIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">2026 Settlement Drivers — Synthesis</h2>
        </div>

        <p className="mb-4 text-neutral-700">
          The five pressure vectors below convert isolated news items into a coherent settlement
          argument. Each is anchored to primary-source evidence already in the database.
        </p>

        <div className="space-y-3">
          {settlementDrivers2026.map((driver, idx) => (
            <div
              key={driver.id}
              className="bg-white border-l-4 border-red-500 border border-neutral-200 rounded-r-lg p-4"
            >
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-800 font-semibold text-sm flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-neutral-900 mb-1 mt-0">
                    {driver.title}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-2">{driver.description}</p>
                  <p className="text-sm text-neutral-700 mb-2">
                    <strong className="text-neutral-800">Mechanism:</strong> {driver.mechanism}
                  </p>
                  {driver.sourceEvidenceIds.length > 0 && (
                    <p className="text-xs text-neutral-500 mb-0">
                      Source documents:{' '}
                      {driver.sourceEvidenceIds
                        .map((id) => evidenceDocuments.find((d) => d.id === id)?.shortTitle ?? id)
                        .join(', ')}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. April 2026 Escalation */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <ShieldExclamationIcon className="w-5 h-5 text-red-700" />
          <h2 className="m-0">
            9. April 2026 Escalation — &quot;Economic Fury&quot; and the Kinetic-Sanctions Chain
          </h2>
        </div>

        <p className="mb-4">
          On <strong>April 17, 2026</strong>, Treasury/OFAC issued press release{' '}
          <a
            href="https://home.treasury.gov/news/press-releases/sb0458"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-neutral-900"
          >
            <strong>&quot;Economic Fury Targets Iran-Backed Iraqi Militia Commanders&quot;</strong>{' '}
            (sb0458)
          </a>, designating seven operational commanders of Iraq&apos;s four most lethal
          Iran-aligned militias (KH, AAH, KSS, HAN) under E.O. 13224. The action is the capstone
          of a kinetic-and-financial escalation chain that began two months earlier:
        </p>

        <div className="space-y-3 my-4">
          <div className="bg-white border border-neutral-200 rounded-lg p-4">
            <p className="text-xs font-semibold text-neutral-500 mb-1">Feb 28, 2026</p>
            <p className="text-sm text-neutral-800 mb-0">
              <strong>&quot;Operation Epic Fury&quot;</strong> — Trump announces U.S.-Israeli
              &quot;major combat operations&quot; against Iran to destroy the ballistic-missile
              program, eliminate the nuclear threat, and end proxy (Hezbollah/Hamas/PMF-aligned)
              capabilities.
            </p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-lg p-4">
            <p className="text-xs font-semibold text-neutral-500 mb-1">Mar 31, 2026</p>
            <p className="text-sm text-neutral-800 mb-0">
              Kata&apos;ib Hezbollah kidnaps American journalist <strong>Shelly Kittleson</strong>{' '}
              on Baghdad&apos;s al-Saadoun Street. Her name appeared on a KH kidnap/kill list
              targeting female journalists. Released April 7 after U.S.-FBI pressure with
              condition that she leave Iraq immediately.
            </p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-lg p-4">
            <p className="text-xs font-semibold text-neutral-500 mb-1">Apr 14, 2026</p>
            <p className="text-sm text-neutral-800 mb-0">
              U.S. State Dept Rewards for Justice announces a{' '}
              <strong>$10 million bounty on KH Secretary-General Ahmad al-Hamidawi</strong>,
              citing his direction of KH attacks on U.S. diplomatic facilities, the Dec 2019
              Kirkuk attack killing a U.S. contractor, and the Kittleson kidnapping.
            </p>
          </div>
          <div className="bg-red-50 border border-red-300 rounded-lg p-4">
            <p className="text-xs font-semibold text-red-600 mb-1">Apr 17, 2026</p>
            <p className="text-sm text-red-900 mb-0">
              OFAC <strong>&quot;Economic Fury&quot;</strong> designates <strong>seven
              commanders</strong> across KH, AAH, KSS, HAN — a pure-financial companion to the
              kinetic campaign.
            </p>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-5 my-4">
          <h3 className="text-sm font-semibold text-red-900 mt-0 mb-2">
            The Seven Commanders Designated April 17, 2026 (verified on OFAC SDN List)
          </h3>
          <ul className="text-sm text-red-900 list-disc pl-5 space-y-1 mb-0">
            <li>
              <strong>KH operational commanders:</strong> Ammar Jasim Kadhim Al Rammahi (DOB 16
              Aug 1976); Radhwan Yousif Hameed Almohammed (aliases: Hajji Abdallah, Abu Abdallah
              Al-Tawil, Abu Ghadir, Abu Tahir); Hasan Dheyab Hamzah Hamzah
            </li>
            <li>
              <strong>AAH Salah ad-Din chief of ops:</strong> Safaa Adnan Jabbar Suwaed —
              Treasury notes AAH used Iranian drones to attack U.S. and Coalition forces in
              northern Iraq as of March 2026
            </li>
            <li>
              <strong>KSS commanders:</strong> Khalid Jameel Abed Albakhatra (a.k.a. Khaled
              Bakhatri); Saeed Kadhim Mukhamis (a.k.a. Sameer Kadem Mghames, Said Kazim
              Mughamis)
            </li>
            <li>
              <strong>HAN military trainer:</strong> Husham Hashim Jaythoom
            </li>
          </ul>
        </div>

        <p className="text-sm text-neutral-700 mb-3">
          Secretary Bessent: <em>&quot;We will not allow Iraq&apos;s terrorist militias, backed
          by Iran, to threaten American lives or interests. Those who enable these militias&apos;
          violence will be held accountable.&quot;</em>
        </p>

        <p className="text-sm text-neutral-700 mb-0">
          For our case, the April 2026 escalation chain demonstrates that the U.S. government
          treats Iran-backed Iraqi militias as <strong>active, continuing threats to U.S.
          persons</strong> — not historical actors. Every financial facilitator of those
          militias&apos; revenue streams (card scheme, Rafidain Bank, Qi Card) is positioned in
          the U.S. government&apos;s own public framing as an active enabler of terror. The
          Kittleson kidnapping specifically establishes that KH still targets U.S. nationals,
          which defeats any &quot;mere historical episode&quot; framing Visa or Mastercard might
          advance in litigation and reinforces a continuing-violation theory for ATA predicates.
        </p>
      </section>

      {/* Navigation */}
      <footer className="mt-12 pt-6 border-t border-neutral-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link href="/timeline" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Timeline
            </div>
            <div className="text-2xs text-neutral-500">{timelineEvents.length} events</div>
          </Link>
          <Link href="/evidence" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Evidence
            </div>
            <div className="text-2xs text-neutral-500">
              {evidenceDocuments.length} documents
            </div>
          </Link>
          <Link href="/precedents" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Precedents
            </div>
            <div className="text-2xs text-neutral-500">{legalPrecedents.length} cases</div>
          </Link>
          <Link href="/legal-analysis" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Legal Analysis
            </div>
            <div className="text-2xs text-neutral-500">3 frameworks</div>
          </Link>
        </div>

        <p className="text-2xs text-neutral-400 leading-relaxed mt-6">
          <strong className="text-neutral-500">Disclaimer:</strong> Developments compiled from
          public sources including SEC EDGAR filings, U.S. Department of the Treasury OFAC
          releases, State Department designations, U.S. federal court filings (PACER/Law360),
          the Foundation for Defense of Democracies Long War Journal, the Wall Street Journal,
          Jerusalem Post, Shafaq News, The New Region, and Arab Weekly. For legal research, policy
          analysis, and journalism. Does not constitute legal advice. All parties presumed innocent
          until proven otherwise.
        </p>
      </footer>
    </article>
  );
}
