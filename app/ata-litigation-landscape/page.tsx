import Link from 'next/link';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ScaleIcon,
  ChartBarIcon,
  BuildingLibraryIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
  ShieldExclamationIcon,
  ClockIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { legalPrecedents, adversePrecedents } from '@/lib/data/legal';
import {
  ataHurdles,
  pendingLitigationExpanded,
  atasol,
} from '@/lib/data/financial';
import Badge from '@/components/ui/Badge';

export const metadata = {
  title: 'ATA Litigation Landscape | V/MC Intelligence',
  description:
    'Honest doctrinal map of Anti-Terrorism Act litigation against financial institutions: 40 years of ATA bank cases, the post-Taamneh bar, the four compounding hurdles facing a Visa/Mastercard complaint, and the narrow surviving Atchley-style pathway.',
};

const freemanII = legalPrecedents.find((p) => p.id === 'prec-freeman2');
const linde = legalPrecedents.find((p) => p.id === 'prec-linde-2d-cir');
const kaplan = legalPrecedents.find((p) => p.id === 'prec-kaplan-lcb');
const ashley = adversePrecedents.find((p) => p.id === 'prec-ashley');
const honickman = legalPrecedents.find((p) => p.id === 'prec-honickman');
const atchley = legalPrecedents.find((p) => p.id === 'prec-atchley');
const raanan = legalPrecedents.find((p) => p.id === 'prec-raanan');
const balva = legalPrecedents.find((p) => p.id === 'prec-balva');
const taamneh = legalPrecedents.find((p) => p.id === 'taamneh');

const structuralBars = [
  { id: 'prec-linde-2d-cir', desc: '§ 2331(1) Linde bar on primary liability' },
  { id: 'prec-rothstein', desc: 'Proximate cause (Rothstein framework, Holmes v. SIPC)' },
  { id: 'prec-owens', desc: 'Proximate-cause application to sanctions-stripping (Owens)' },
  { id: 'prec-ashley', desc: '"Indifference is not enough" (Ashley, controlling post-Taamneh)' },
  { id: 'prec-honickman', desc: 'Rule 60(b)(6) revival foreclosure (Honickman SCOTUS 2025)' },
];

const survivingPrecedents = [
  { id: 'prec-atchley', desc: 'Atchley — "unusual way" affirmative misconduct (D.C. Cir. Jan 23, 2026)' },
  { id: 'prec-zobay', desc: 'Zobay — bespoke IRGC-front joint venture (MTD denied Sep 2023)' },
  { id: 'prec-raanan', desc: 'Raanan — admitted systemic AML failures (MTD denied Feb 2025)' },
  { id: 'prec-miller-pam', desc: 'Miller/Pam — pre-existing Linde factual record redeployed' },
  { id: 'prec-bartlett-sgbl', desc: 'Bartlett SGBL — concrete Hezbollah-affiliate customer list' },
];

export default function AtaLitigationLandscapePage() {
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
        <p className="kicker">Honest Doctrinal Map</p>
        <h1>ATA Litigation Landscape</h1>
        <p className="lead mt-4">
          After forty years of civil Anti-Terrorism Act litigation against financial institutions,{' '}
          <strong>only one case (Linde v. Arab Bank) has ever produced a jury verdict against a
          bank</strong>, and the Supreme Court&apos;s 2023 decision in <em>Twitter v. Taamneh</em>{' '}
          has effectively foreclosed nearly every aiding-and-abetting theory against routine
          payment intermediaries. This page maps the doctrinal landscape honestly so that any
          Visa or Mastercard action is drafted with its eyes open.
        </p>
      </header>

      {/* Headline metrics */}
      <div className="metric-grid mb-12">
        <div className="metric-item">
          <div className="stat-inline">1</div>
          <div className="stat-label">ATA Bank Jury Verdict Ever (Linde)</div>
        </div>
        <div className="metric-item">
          <div className="stat-inline">0</div>
          <div className="stat-label">Cases Filed vs. Visa / MA / AmEx</div>
        </div>
        <div className="metric-item">
          <div className="stat-inline text-red-700">4</div>
          <div className="stat-label">Compounding Hurdles</div>
        </div>
        <div className="metric-item">
          <div className="stat-inline text-emerald-700">Atchley</div>
          <div className="stat-label">Surviving Pathway</div>
        </div>
      </div>

      {/* 1. No-case-ever-filed */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <ExclamationCircleIcon className="w-5 h-5 text-red-700" />
          <h2 className="m-0">1. The Blank Space: No ATA Case Has Ever Been Filed Against a U.S. Card Network</h2>
        </div>

        <p className="mb-4">
          The George Washington University Program on Extremism&apos;s 2024 encyclopedia of
          roughly 150 ATA cases confirms it: <strong>no ATA case has ever been filed against
          Visa, Mastercard, American Express, Discover, PayPal, Stripe, Western Union, or
          MoneyGram.</strong> A Visa or Mastercard complaint would be first-of-its-kind.
        </p>

        <p className="mb-0 text-neutral-700">
          First-mover status means the complaint will shape the post-Taamneh standard for
          payment-network defendants. It also means the complaint will face every defense
          argument that has stalled bank cases for a decade — without the benefit of surviving
          bank-case fact patterns to anchor to. The remedy is careful pleading that mirrors the
          two plaintiffs&apos;-friendly post-Taamneh pathways: <em>Atchley</em>&apos;s
          &quot;unusual way&quot; affirmative misconduct and <em>Raanan</em>&apos;s admitted
          systemic compliance failure.
        </p>
      </section>

      {/* 2. The parabolic arc */}
      <section className="section-block-alt mb-10">
        <div className="flex items-center gap-2 mb-4">
          <ChartBarIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">2. The Parabolic Arc — Linde High, Taamneh Low, Ashley Lower</h2>
        </div>

        <p className="mb-4">
          Plaintiffs&apos; trajectory in bank ATA litigation follows a parabolic arc. The peak
          came between the 2014 Linde verdict and the 2021 Kaplan II decision; since Taamneh in
          2023 and Ashley in 2025, the arc has bent steeply downward.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-neutral-300 text-left">
                <th className="py-3 pr-4 font-semibold text-neutral-800">Decision</th>
                <th className="py-3 px-3 font-semibold text-neutral-800">Year</th>
                <th className="py-3 px-3 font-semibold text-neutral-800">Plaintiffs&apos; Posture</th>
                <th className="py-3 pl-3 font-semibold text-neutral-800">Takeaway</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-200">
                <td className="py-3 pr-4 font-semibold">Linde jury verdict (E.D.N.Y.)</td>
                <td className="py-3 px-3">2014</td>
                <td className="py-3 px-3">
                  <Badge variant="success" size="sm">Peak</Badge>
                </td>
                <td className="py-3 pl-3 text-xs">Only ATA bank jury verdict; confidential settlement</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="py-3 pr-4 font-semibold">Linde 2d Cir. vacatur</td>
                <td className="py-3 px-3">2018</td>
                <td className="py-3 px-3">
                  <Badge variant="amber" size="sm">Descent</Badge>
                </td>
                <td className="py-3 pl-3 text-xs">§ 2331(1) Linde bar established</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="py-3 pr-4 font-semibold">Kaplan II</td>
                <td className="py-3 px-3">2021</td>
                <td className="py-3 px-3">
                  <Badge variant="success" size="sm">High-water</Badge>
                </td>
                <td className="py-3 pl-3 text-xs">Loose &quot;general awareness&quot; test; arguably undermined by Taamneh</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="py-3 pr-4 font-semibold">Taamneh (SCOTUS)</td>
                <td className="py-3 px-3">2023</td>
                <td className="py-3 px-3">
                  <Badge variant="danger" size="sm">Cliff</Badge>
                </td>
                <td className="py-3 pl-3 text-xs">&quot;Conscious, voluntary, culpable&quot; required; payment-provider analogy flagged</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="py-3 pr-4 font-semibold">Ashley v. Deutsche Bank</td>
                <td className="py-3 px-3">2025</td>
                <td className="py-3 px-3">
                  <Badge variant="danger" size="sm">Floor</Badge>
                </td>
                <td className="py-3 pl-3 text-xs">&quot;Indifference is not enough&quot;; controlling 2d Cir. template</td>
              </tr>
              <tr className="border-b border-neutral-200">
                <td className="py-3 pr-4 font-semibold">Honickman SCOTUS</td>
                <td className="py-3 px-3">2025</td>
                <td className="py-3 px-3">
                  <Badge variant="danger" size="sm">Procedural floor</Badge>
                </td>
                <td className="py-3 pl-3 text-xs">Rule 60(b)(6) revival foreclosed unanimously</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-semibold">Atchley D.C. Cir. reversal</td>
                <td className="py-3 px-3">Jan 23, 2026</td>
                <td className="py-3 px-3">
                  <Badge variant="success" size="sm">Pathway</Badge>
                </td>
                <td className="py-3 pl-3 text-xs">&quot;Unusual way&quot; post-GVR survival — the surviving pathway</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Plaintiff high-water marks */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <BuildingLibraryIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">3. Plaintiffs&apos; Peaks — Linde and Kaplan II</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {linde && (
            <div className="bg-white border border-neutral-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-neutral-900 mt-0 mb-1">{linde.name}</h3>
              <p className="text-xs text-neutral-500 mb-2">{linde.citation}</p>
              <p className="text-sm text-neutral-700 mb-2">{linde.summary}</p>
              <p className="text-xs text-neutral-600 mb-0">
                <strong>Outcome:</strong> {linde.outcome}
              </p>
            </div>
          )}
          {kaplan && (
            <div className="bg-white border border-neutral-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-neutral-900 mt-0 mb-1">{kaplan.name}</h3>
              <p className="text-xs text-neutral-500 mb-2">{kaplan.citation}</p>
              <p className="text-sm text-neutral-700 mb-2">{kaplan.summary}</p>
              <p className="text-xs text-neutral-600 mb-0">
                <strong>Doctrine:</strong> Plaintiffs&apos; &quot;high-water mark.&quot;
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 4. Structural bars */}
      <section className="section-block-alt mb-10">
        <div className="flex items-center gap-2 mb-4">
          <ShieldExclamationIcon className="w-5 h-5 text-red-700" />
          <h2 className="m-0">4. The Structural Bars a Visa/MA Case Must Plead Around</h2>
        </div>

        <p className="mb-4">
          Five doctrinal structures must be pled around or distinguished:
        </p>

        <div className="space-y-3">
          {structuralBars.map((bar) => {
            const prec = legalPrecedents.concat(adversePrecedents).find((p) => p.id === bar.id);
            return (
              <div
                key={bar.id}
                className="bg-white border-l-4 border-red-500 border border-neutral-200 rounded-r-lg p-4"
              >
                <p className="text-sm font-semibold text-neutral-900 mb-1">{bar.desc}</p>
                {prec && (
                  <>
                    <p className="text-xs text-neutral-500 mb-1">{prec.citation}</p>
                    <p className="text-xs text-neutral-700 mb-0">{prec.holding}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Four compounding hurdles */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <ExclamationCircleIcon className="w-5 h-5 text-red-700" />
          <h2 className="m-0">5. The Four Compounding Hurdles for a Visa/MA Complaint</h2>
        </div>

        <p className="mb-4">
          A hypothetical complaint alleging that card networks processed payments to Iraqi
          Shi&apos;a militia groups faces four compounding hurdles. Each has a plaintiffs&apos;
          counter based on facts unique to our record.
        </p>

        <div className="space-y-4">
          {ataHurdles.map((h, idx) => (
            <div
              key={h.id}
              className="bg-white border border-neutral-200 rounded-lg p-5"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-red-100 text-red-800 font-semibold text-sm flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-neutral-900 mt-0 mb-1">
                    {h.name}
                  </h3>
                  <p className="text-xs text-neutral-500 mb-2">{h.source}</p>
                  <div className="bg-red-50 border-l-2 border-red-400 p-3 rounded-r mb-3">
                    <p className="text-xs font-semibold text-red-900 mb-1">
                      THE DOCTRINE (ADVERSE)
                    </p>
                    <p className="text-sm text-red-900 mb-2">{h.doctrine}</p>
                    <p className="text-xs text-red-800 mb-0">{h.description}</p>
                  </div>
                  <div className="bg-emerald-50 border-l-2 border-emerald-400 p-3 rounded-r">
                    <p className="text-xs font-semibold text-emerald-900 mb-1">
                      OUR COUNTER
                    </p>
                    <p className="text-sm text-emerald-900 mb-0">{h.plaintiffCounter}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Surviving pathway */}
      <section className="section-block-alt mb-10">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircleIcon className="w-5 h-5 text-emerald-700" />
          <h2 className="m-0">6. The Surviving Pathway — Atchley, Zobay, Raanan</h2>
        </div>

        <p className="mb-4">
          The surviving post-Taamneh template combines three patterns: <em>Atchley</em>-style
          &quot;unusual way&quot; affirmative misconduct, <em>Zobay</em>-style bespoke
          counterparty relationships, and <em>Raanan</em>-style admitted systemic compliance
          collapse. Our fact pattern plausibly supplies all three.
        </p>

        <div className="space-y-3">
          {survivingPrecedents.map((sp) => {
            const prec = legalPrecedents.find((p) => p.id === sp.id);
            return (
              <div
                key={sp.id}
                className="bg-white border-l-4 border-emerald-500 border border-neutral-200 rounded-r-lg p-4"
              >
                <p className="text-sm font-semibold text-neutral-900 mb-1">{sp.desc}</p>
                {prec && (
                  <>
                    <p className="text-xs text-neutral-500 mb-1">{prec.citation}</p>
                    <p className="text-xs text-neutral-700 mb-0">{prec.summary}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {atchley && (
          <div className="bg-emerald-50 border border-emerald-300 rounded-lg p-5 mt-6">
            <h3 className="text-sm font-semibold text-emerald-900 mt-0 mb-2">
              Atchley Is the Template Our Complaint Should Mirror
            </h3>
            <p className="text-sm text-emerald-900 mb-2">{atchley.summary}</p>
            <p className="text-xs text-emerald-800 mb-0">
              <strong>Our &quot;unusual&quot; conduct:</strong> Yana reinstatement after the
              August 2023 zero-controls audit; continued processing of known-militia-linked UAE
              merchants post-Treasury briefing; financial incentives offered to boost Iraqi
              transaction volume during the surge; the documented post-2025 continuation of
              Mastercard-named militia fundraising (April 2026 LWJ report).
            </p>
          </div>
        )}
      </section>

      {/* 7. Freeman II - closest analog */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <SparklesIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">7. Freeman II — The Closest Doctrinal Analog</h2>
        </div>

        {freemanII && (
          <div className="bg-navy-50 border border-navy-200 rounded-lg p-5">
            <h3 className="text-base font-semibold text-navy-900 mt-0 mb-2">
              {freemanII.name}
            </h3>
            <p className="text-xs text-navy-700 mb-3">{freemanII.citation}</p>
            <p className="text-sm text-navy-900 mb-3">{freemanII.summary}</p>
            <div className="bg-white border border-navy-200 rounded p-3 mb-0">
              <p className="text-xs font-semibold text-navy-800 mb-2">
                Why Freeman II Is Our Closest Analog
              </p>
              <ul className="text-xs text-navy-900 list-disc pl-5 space-y-1 mb-0">
                {freemanII.relevance.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <p className="mt-4 text-sm text-neutral-700">
          Freeman II&apos;s MTD outcome on the Third Amended Complaint is the single most
          important pending event for our case. The litigation team should track Dkt. 136 and
          subsequent filings closely, and model the complaint architecture on Judge Chen&apos;s
          reasoning in any MTD ruling.
        </p>
      </section>

      {/* 8. JASTA SOL */}
      <section className="section-block-alt mb-10">
        <div className="flex items-center gap-2 mb-4">
          <ClockIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">8. JASTA 10-Year Statute of Limitations</h2>
        </div>

        <div className="bg-amber-50 border border-amber-300 rounded-lg p-5 mb-4">
          <h3 className="text-sm font-semibold text-amber-900 mt-0 mb-2">
            Critical Deadline: {atasol.criticalDate}
          </h3>
          <p className="text-sm text-amber-900 mb-3">{atasol.rule}</p>
          <p className="text-xs text-amber-800 mb-3">{atasol.significance}</p>
          <p className="text-xs text-amber-800 mb-2">
            <strong>Relevance to our case:</strong> {atasol.relevanceToVisaMastercard}
          </p>
          <p className="text-xs text-amber-800 mb-1">
            <strong>Plaintiff firms exploiting the SOL:</strong>
          </p>
          <ul className="list-disc pl-5 text-xs text-amber-900 space-y-0.5 mb-0">
            {atasol.practitionerFirms.map((firm, i) => (
              <li key={i}>{firm}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. Balva crypto parallel */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <ScaleIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">9. The Crypto Parallel — Balva v. Binance</h2>
        </div>

        {balva && (
          <div className="bg-white border border-neutral-200 rounded-lg p-5 mb-4">
            <h3 className="text-sm font-semibold text-neutral-900 mt-0 mb-2">{balva.name}</h3>
            <p className="text-xs text-neutral-500 mb-2">{balva.citation}</p>
            <p className="text-sm text-neutral-700 mb-3">{balva.summary}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-neutral-50 rounded p-3">
                <p className="text-xs font-semibold text-neutral-800 mb-1">Watch for</p>
                <ul className="text-xs text-neutral-700 list-disc pl-5 space-y-0.5 mb-0">
                  <li>Forum-selection strategy (N.D. not 2d Cir.)</li>
                  <li>Big Law plaintiffs&apos;-bar posture</li>
                  <li>$3B damages-theory benchmark</li>
                  <li>Post-Ashley survival outcomes</li>
                </ul>
              </div>
              <div className="bg-neutral-50 rounded p-3">
                <p className="text-xs font-semibold text-neutral-800 mb-1">Compared to Raanan</p>
                <p className="text-xs text-neutral-700 mb-0">
                  Raanan v. Binance (S.D.N.Y. Feb 2025) MTD DENIED on aiding/abetting — different
                  defendant behavior in different courts producing different outcomes. The
                  pattern suggests fact-specific pleading wins or loses the MTD. Our complaint
                  should lead with the strongest individual facts (Yana reinstatement; 22-month
                  delay; specific Treasury briefings).
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Pending litigation table */}
      <section className="section-block-alt mb-10">
        <div className="flex items-center gap-2 mb-4">
          <BuildingLibraryIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">Pending Litigation Register (Research 3 Expanded)</h2>
        </div>

        <p className="mb-4 text-sm text-neutral-700">
          Eight parallel dockets shaping the post-Taamneh standard. Our firm should monitor each
          for MTD rulings, discovery orders, and appellate activity.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-neutral-300 text-left">
                <th className="py-3 pr-4 font-semibold text-neutral-800">Case</th>
                <th className="py-3 px-3 font-semibold text-neutral-800">Docket</th>
                <th className="py-3 pl-3 font-semibold text-neutral-800">Relevance</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              {pendingLitigationExpanded.map((c) => (
                <tr key={c.docket + c.caseName} className="border-b border-neutral-200 align-top">
                  <td className="py-3 pr-4">
                    <div className="font-semibold text-neutral-900 text-sm">{c.caseName}</div>
                    <div className="text-xs text-neutral-500 mt-0.5">
                      {c.counsel} • {c.filed}
                    </div>
                  </td>
                  <td className="py-3 px-3 font-mono text-xs whitespace-nowrap">
                    {c.docket}
                    <div className="text-xs text-neutral-500 mt-0.5 font-sans">{c.court}</div>
                  </td>
                  <td className="py-3 pl-3 text-xs">{c.relevanceToVisaMastercard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom-line assessment */}
      <section className="mb-12">
        <div className="callout-danger">
          <h3 className="text-sm font-semibold text-red-800 mb-2">
            Honest Bottom-Line Assessment
          </h3>
          <p className="text-sm text-neutral-700 mb-3">
            For a plaintiff contemplating a suit against Visa or Mastercard over Iraq-militia
            payment flows, the doctrinal assessment is that without <em>Atchley</em>-style
            affirmative misconduct, <em>Zobay</em>-style bespoke counterparty relationships, or
            <em> Raanan</em>-style admitted internal compliance collapse, the complaint would
            likely be dismissed under <em>Taamneh</em> / <em>Ashley</em>.
          </p>
          <p className="text-sm text-neutral-700 mb-0">
            <strong>Fortunately,</strong> the Yana audit, the 22-month post-warning delay, the
            specific-named-militia Treasury briefings, and the April 2026 LWJ post-crackdown
            Mastercard-fundraising evidence plausibly supply all three. But the complaint must
            be drafted to foreground these facts — not to rely on the general scale of the
            scheme. See the{' '}
            <Link href="/legal-analysis" className="underline">
              Legal Analysis page
            </Link>{' '}
            Litigation Strategy section for the complaint architecture.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <footer className="mt-12 pt-6 border-t border-neutral-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link href="/precedents" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Precedents Catalog
            </div>
            <div className="text-2xs text-neutral-500">{legalPrecedents.length} cases</div>
          </Link>
          <Link href="/legal-analysis" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Legal Analysis
            </div>
            <div className="text-2xs text-neutral-500">Strategy + hurdles</div>
          </Link>
          <Link href="/compliance-gap" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Compliance Gap
            </div>
            <div className="text-2xs text-neutral-500">Claim vs. reality</div>
          </Link>
          <Link href="/developments-2026" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              2026 Developments
            </div>
            <div className="text-2xs text-neutral-500">Post-WSJ update</div>
          </Link>
        </div>

        <p className="text-2xs text-neutral-400 leading-relaxed mt-6">
          <strong className="text-neutral-500">Disclaimer:</strong> Compiled from published
          federal court decisions, Supreme Court opinions, PACER filings, Law360 reporting,
          George Washington University Program on Extremism ATA encyclopedia (2024), Sparacino
          PLLC public-docket disclosures, and Research 3 honest doctrinal assessment. For legal
          research and strategy. Does not constitute legal advice; consult qualified counsel on
          any specific litigation decision.
        </p>
      </footer>
    </article>
  );
}
