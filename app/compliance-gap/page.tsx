import Link from 'next/link';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  DocumentMagnifyingGlassIcon,
  MegaphoneIcon,
  BuildingLibraryIcon,
  ScaleIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import { evidenceDocuments } from '@/lib/data/evidence';
import { complianceClaimsVsReality } from '@/lib/data/financial';
import Badge from '@/components/ui/Badge';

export const metadata = {
  title: 'The Compliance Gap | V/MC Intelligence',
  description:
    'Six years of public Visa/Mastercard compliance claims versus one Mastercard internal audit of Yana Banking Services. A side-by-side documentary record of the gap between marketed capabilities and operational reality during the 22-month Gap Period.',
};

const marketingArtifactIds = [
  'doc-021', 'doc-022', 'doc-023', 'doc-024', 'doc-025',
  'doc-026', 'doc-027', 'doc-028', 'doc-029', 'doc-030',
  'doc-031', 'doc-032', 'doc-033', 'doc-034', 'doc-035',
];

const earningsArtifactIds = ['doc-036', 'doc-037', 'doc-038', 'doc-039'];
const secArtifactIds = ['doc-040', 'doc-041', 'doc-042'];
const quotesArtifact = evidenceDocuments.find((d) => d.id === 'doc-043');
const yanaAudit = evidenceDocuments.find((d) => d.id === 'doc-001');

const marketingArtifacts = evidenceDocuments.filter((d) =>
  marketingArtifactIds.includes(d.id),
);
const earningsArtifacts = evidenceDocuments.filter((d) =>
  earningsArtifactIds.includes(d.id),
);
const secArtifacts = evidenceDocuments.filter((d) => secArtifactIds.includes(d.id));

export default function ComplianceGapPage() {
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
        <p className="kicker">Claim vs. Reality Documentation</p>
        <h1>The Compliance Gap</h1>
        <p className="lead mt-4">
          Visa and Mastercard spent six years telling investors, regulators, and the public that
          they run AI-powered, &quot;best-in-class&quot; sanctions and anti-money-laundering
          programs. Their networks simultaneously processed roughly $1.5 billion per month in
          Iraqi transactions that U.S. Treasury officials traced to Iran-backed militias. This page
          puts the two sets of documents side by side.
        </p>
      </header>

      {/* Headline metrics */}
      <div className="metric-grid mb-12">
        <div className="metric-item">
          <div className="stat-inline">6 yrs</div>
          <div className="stat-label">Static 10-K Boilerplate</div>
        </div>
        <div className="metric-item">
          <div className="stat-inline text-red-700">0</div>
          <div className="stat-label">Customer Risk Ratings (Yana)</div>
        </div>
        <div className="metric-item">
          <div className="stat-inline">10+</div>
          <div className="stat-label">WU Iraq Mentions (Q2 2023)</div>
        </div>
        <div className="metric-item">
          <div className="stat-inline text-red-700">22 mo.</div>
          <div className="stat-label">Of Earnings-Call Silence</div>
        </div>
      </div>

      {/* 1. Executive synthesis */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <ShieldCheckIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">1. Six Years of Marketing vs. One Yana Audit</h2>
        </div>

        <p className="mb-4">
          The documentary record produces a single, unambiguous juxtaposition. Over six years,
          Visa and Mastercard posted policies committing to &quot;risk-based due diligence on
          issuers and acquirers,&quot; &quot;sanctions screening on issuers and acquirers,&quot;
          AI systems that &quot;process every single transaction,&quot; and fraud-prevention
          capabilities that — by their own marketing numbers — block tens of billions of dollars
          annually with fraud rates below 0.1%. Simultaneously, they published 10-K risk factors
          whose only material year-over-year changes were geographic list edits tracking executive
          orders, and whose text never mentioned Iraq despite 17 licensed Iraqi issuers operating
          under their networks.
        </p>

        {yanaAudit && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <h3 className="text-base font-semibold text-red-900 mt-0 mb-2">
              The Yana Banking Audit — {yanaAudit.date}
            </h3>
            <p className="text-sm text-red-900 mb-3">{yanaAudit.description}</p>
            <ul className="list-disc pl-5 text-sm text-red-900 space-y-1 mb-0">
              {yanaAudit.keyFindings.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-4 text-neutral-700">
          The gap between what the companies published about their compliance infrastructure and
          what their networks were actually doing in Iraq is not a matter of interpretation. It is
          a matter of reading the two sets of documents side by side.
        </p>
      </section>

      {/* 2. Side-by-side claim vs reality */}
      <section className="section-block-alt mb-10">
        <div className="flex items-center gap-2 mb-4">
          <DocumentMagnifyingGlassIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">2. Claim vs. Reality — Side by Side</h2>
        </div>

        <p className="mb-6 text-neutral-700">
          Each row pairs a public Visa or Mastercard compliance / AI-fraud claim with a
          documentary reality demonstrating the contrary. These pairings are the admission-
          against-interest foundation of any Rule 10b-5, OFAC, or ATA claim.
        </p>

        <div className="space-y-5">
          {complianceClaimsVsReality.map((row) => (
            <div
              key={row.id}
              className="bg-white border border-neutral-200 rounded-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-4 border-b md:border-b-0 md:border-r border-neutral-200 bg-emerald-50/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="success" size="sm">
                      PUBLIC CLAIM
                    </Badge>
                    <span className="text-xs text-neutral-500">{row.claimDate}</span>
                  </div>
                  <p className="text-sm text-neutral-800 mb-2">{row.claim}</p>
                  <p className="text-xs text-neutral-500 italic mb-0">
                    Source: {row.claimSource}
                  </p>
                </div>
                <div className="p-4 bg-red-50/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="danger" size="sm">
                      DOCUMENTED REALITY
                    </Badge>
                    <span className="text-xs text-neutral-500">{row.realityDate}</span>
                  </div>
                  <p className="text-sm text-neutral-800 mb-2">{row.reality}</p>
                  <p className="text-xs text-neutral-500 italic mb-0">
                    Source: {row.realitySource}
                  </p>
                </div>
              </div>
              <div className="px-4 py-3 bg-neutral-50 border-t border-neutral-200">
                <p className="text-xs text-neutral-700 mb-0">
                  <strong className="text-neutral-900">Significance:</strong> {row.significance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Marketing timeline */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <MegaphoneIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">3. The Marketing Timeline — AI Claims Issued During the Scheme</h2>
        </div>

        <p className="mb-4">
          These {marketingArtifacts.length} marketing / compliance-capability artifacts were
          published by Visa and Mastercard during or immediately surrounding the 22-month Gap
          Period. Each is a contemporaneous corporate statement about the systems that should
          have detected and blocked the Iraqi surge.
        </p>

        <div className="space-y-3 mt-4">
          {marketingArtifacts.map((d) => (
            <div
              key={d.id}
              className="bg-white border border-neutral-200 rounded-lg p-4"
            >
              <div className="flex items-start justify-between gap-3 mb-1">
                <h3 className="text-sm font-semibold text-neutral-900 m-0">{d.title}</h3>
                <span className="text-xs text-neutral-500 whitespace-nowrap">{d.date}</span>
              </div>
              <p className="text-sm text-neutral-600 mb-2">{d.description}</p>
              {d.keyFindings.length > 0 && (
                <ul className="list-disc pl-5 text-xs text-neutral-700 space-y-0.5">
                  {d.keyFindings.slice(0, 3).map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                  {d.keyFindings.length > 3 && (
                    <li className="text-neutral-500 italic list-none mt-1">
                      + {d.keyFindings.length - 3} more findings (see evidence repository)
                    </li>
                  )}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. Earnings-call contrast */}
      <section className="section-block-alt mb-10">
        <div className="flex items-center gap-2 mb-4">
          <BuildingLibraryIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">4. Earnings-Call Contrast — Western Union vs. Visa/Mastercard</h2>
        </div>

        <p className="mb-4">
          The most damning contrast with Western Union is not what Visa and Mastercard said on
          earnings calls — it is what they did not say. A systematic review of every Visa and
          Mastercard quarterly call from Q1 2020 through Q4 2025 found <strong>no substantive
          disclosure</strong> of Iraq-related compliance concerns, Treasury engagement, militia
          financing, or exposure to the cross-border surge.
        </p>

        <div className="space-y-4 mt-4">
          {earningsArtifacts.map((d) => {
            const isWU = d.id === 'doc-036';
            return (
              <div
                key={d.id}
                className={`border rounded-lg p-4 ${
                  isWU ? 'bg-emerald-50 border-emerald-300' : 'bg-red-50 border-red-200'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div>
                    <Badge variant={isWU ? 'success' : 'danger'} size="sm" className="mb-2">
                      {isWU ? 'FORTHRIGHT DISCLOSURE' : 'EUPHEMISM / SILENCE'}
                    </Badge>
                    <h3 className="text-sm font-semibold text-neutral-900 m-0">{d.title}</h3>
                  </div>
                  <span className="text-xs text-neutral-500 whitespace-nowrap">{d.date}</span>
                </div>
                <p className="text-sm text-neutral-700 mb-2 mt-2">{d.description}</p>
                <p className="text-xs text-neutral-700 mb-0">
                  <strong>Significance:</strong> {d.significance}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Eisen / Cook quotes */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <ChatBubbleLeftRightIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">5. The Entire On-Record Corporate Response</h2>
        </div>

        <p className="mb-4">
          The complete corporate response from Visa and Mastercard to the May 31, 2025 Wall
          Street Journal investigation consists of four statements — three from Mastercard SVP
          Communications Seth Eisen and one from Visa spokesperson Fletcher Cook. <strong>No
          follow-up statements by either spokesperson have appeared in any major outlet through
          April 2026.</strong> Michael Miebach and Ryan McInerney — the CEOs — have never
          publicly commented on Iraq.
        </p>

        {quotesArtifact && (
          <div className="space-y-3 mt-4">
            {quotesArtifact.keyFindings.map((quote, i) => (
              <div
                key={i}
                className="bg-white border-l-4 border-neutral-700 border border-neutral-200 p-4 rounded-r-lg"
              >
                <p className="text-sm text-neutral-800 italic mb-0">&ldquo;{quote}&rdquo;</p>
              </div>
            ))}
            <p className="text-xs text-neutral-500 italic mt-2">
              Source: WSJ investigation, David S. Cloud, May 31, 2025
            </p>
          </div>
        )}
      </section>

      {/* 6. SEC risk-factor evolution */}
      <section className="section-block-alt mb-10">
        <div className="flex items-center gap-2 mb-4">
          <DocumentMagnifyingGlassIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">6. SEC Risk-Factor Evolution — The Section 13(r) Narrowing</h2>
        </div>

        <p className="mb-4">
          Mastercard&apos;s Section 13(r) Iran disclosures, filed as Exhibit 99.1 to each 10-K
          and 10-Q, followed a pattern of <strong>progressive contraction</strong> — shrinking
          by FY2025 to a single &quot;de minimis&quot; line. Visa&apos;s 10-K risk-factor
          language was identical boilerplate across six years. At no point did either filing
          disclose transactions with the Iraqi card issuers Treasury would later identify as
          conduits to Iran-backed militias.
        </p>

        <div className="space-y-3 mt-4">
          {secArtifacts.map((d) => (
            <div
              key={d.id}
              className="bg-white border border-neutral-200 rounded-lg p-4"
            >
              <div className="flex items-start justify-between gap-3 mb-1">
                <h3 className="text-sm font-semibold text-neutral-900 m-0">{d.title}</h3>
                <span className="text-xs text-neutral-500 whitespace-nowrap">{d.date}</span>
              </div>
              <p className="text-sm text-neutral-600 mb-2">{d.description}</p>
              <p className="text-xs text-neutral-700 mb-0">
                <strong>Significance:</strong> {d.significance}
              </p>
              {d.documentUrl && (
                <a
                  href={d.documentUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-xs text-navy-700 hover:text-navy-900 underline"
                >
                  Read filing <ArrowRightIcon className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. The FY2025 novel sentence */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <ExclamationTriangleIcon className="w-5 h-5 text-red-700" />
          <h2 className="m-0">7. The FY2025 Novel Iran Sentence</h2>
        </div>

        <div className="callout-danger mb-4">
          <h4 className="text-sm font-semibold text-red-800 mb-1">
            The Conspicuous Post-WSJ Addition
          </h4>
          <p className="text-sm text-neutral-700 mb-0">
            Mastercard&apos;s FY2025 10-K — filed February 11, 2026, nine months after the WSJ
            exposé — added one novel sentence to otherwise six-year-static boilerplate:
            <strong className="block mt-2 text-red-900">
              &ldquo;We do not maintain operations, assets or licensed customers in Iran. While
              we currently have no operations in Syria, we are evaluating market entry in strict
              accordance with applicable laws and restrictions.&rdquo;
            </strong>
          </p>
        </div>

        <p className="text-neutral-700 mb-3">
          The sentence concedes the materiality of Iran-risk disclosure while simultaneously
          refusing to name the specific fact pattern: Iraqi partners processing Iran-linked flows.
          Under SEC material-omission doctrine, a new risk-factor sentence about a specific
          country <em>after</em> a press exposure is strong evidence of materiality — and the
          continued omission of the Iraqi conduit facts amounts to a material half-truth.
        </p>

        <p className="text-neutral-700 mb-0">
          The FY2025 10-K still does not mention Iraq, does not disclose the Yana Banking audit,
          and does not discuss the March 2025 blocking of 100,000+ Iraqi-issued cards.
        </p>
      </section>

      {/* 8. Why this matters for litigation */}
      <section className="section-block-alt mb-10">
        <div className="flex items-center gap-2 mb-4">
          <ScaleIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">8. Why This Matters for Litigation</h2>
        </div>

        <p className="mb-4">
          Every paired artifact on this page produces a potential admission against interest
          under Federal Rule of Evidence 801(d)(2). The documentary corpus supports at least
          three distinct causes of action that do <em>not</em> require clearing the ATA
          primary-liability bar:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
          <div className="bg-white border border-neutral-200 rounded-lg p-4">
            <Badge variant="navy" size="sm" className="mb-2">
              Pillar 1
            </Badge>
            <h3 className="text-sm font-semibold text-neutral-900 mt-0 mb-2">
              Rule 10b-5 Securities Disclosure
            </h3>
            <p className="text-xs text-neutral-600 mb-0">
              The Western Union July 2023 forthright disclosure establishes that Iraq-risk
              disclosure was materially required. Visa/MA&apos;s 22-month silence plus the FY2025
              novel sentence are actionable as material omissions / half-truths in an investor
              class-action or SEC Enforcement action.
            </p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-lg p-4">
            <Badge variant="navy" size="sm" className="mb-2">
              Pillar 2
            </Badge>
            <h3 className="text-sm font-semibold text-neutral-900 mt-0 mb-2">
              OFAC / IEEPA Civil Penalties
            </h3>
            <p className="text-xs text-neutral-600 mb-0">
              Payoneer ($1.4M), BitPay ($507K), Epsilon ($4.07M) all turned on the exact
              willful-blindness facts our documentary record establishes — and at ~1,000x their
              transaction volume. Statutory ceiling of &quot;greater of $250K or 2x transaction
              per violation&quot; applied at ~$1.5B peak monthly scales to multi-billion maxima.
            </p>
          </div>
          <div className="bg-white border border-neutral-200 rounded-lg p-4">
            <Badge variant="danger" size="sm" className="mb-2">
              Pillar 3
            </Badge>
            <h3 className="text-sm font-semibold text-neutral-900 mt-0 mb-2">
              ATA / JASTA Aiding-and-Abetting
            </h3>
            <p className="text-xs text-neutral-600 mb-0">
              The compliance-gap record supplies the &quot;conscious, voluntary, culpable
              participation&quot; Taamneh requires. Atchley v. AstraZeneca (D.C. Cir. Jan 23,
              2026 reversal) confirms &quot;unusual way&quot; conduct survives post-Taamneh.
              Yana reinstatement is our &quot;unusual way.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <footer className="mt-12 pt-6 border-t border-neutral-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link href="/evidence" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Evidence Repository
            </div>
            <div className="text-2xs text-neutral-500">{evidenceDocuments.length} documents</div>
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
          <strong className="text-neutral-500">Disclaimer:</strong> Compiled from SEC EDGAR
          filings, earnings-call transcripts (Western Union, Mastercard, Visa), public
          compliance-policy pages (usa.visa.com, mastercard.us, brighterion.com), Mastercard
          Global Compliance internal audit records obtained via the Wall Street Journal,
          corporate press releases, and published CNBC/television interviews. For legal research,
          policy analysis, and journalism. Does not constitute legal advice.
        </p>
      </footer>
    </article>
  );
}
