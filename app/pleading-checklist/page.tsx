import Link from 'next/link';
import {
  ArrowLeftIcon,
  ClipboardDocumentCheckIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  ScaleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import {
  pleadingChecklist,
  getElementsOnly,
  getFactorsOnly,
  STRENGTH_LABEL,
  type PleadingItem,
} from '@/lib/data/pleading-checklist';
import { timelineEvents } from '@/lib/data/timeline';
import { evidenceDocuments, getExhibitNumber } from '@/lib/data/evidence';
import Badge from '@/components/ui/Badge';

export const metadata = {
  title: 'Pleading Checklist | V/MC Intelligence',
  description:
    'Paragraph-by-paragraph construction guide for a JASTA aiding-and-abetting complaint. Maps each Halberstam element and substantial-assistance factor to supporting allegations and evidence anchors from our record, with gaps honestly flagged and Ashley distinguishing factors.',
};

const strengthVariant: Record<
  PleadingItem['strengthAssessment'],
  'success' | 'amber' | 'danger' | 'gray'
> = {
  strong: 'success',
  moderate: 'amber',
  contested: 'danger',
  weak: 'gray',
};

function evtTitle(id: string) {
  return timelineEvents.find((e) => e.id === id)?.title ?? id;
}

function docTitle(id: string) {
  return evidenceDocuments.find((d) => d.id === id)?.shortTitle ?? id;
}

function PleadingItemCard({ item }: { item: PleadingItem }) {
  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-6 mb-6">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3 pb-3 border-b border-neutral-200">
        <div>
          <p className="kicker mb-1">{item.number}</p>
          <h3 className="text-lg font-serif font-semibold text-neutral-900 m-0">
            {item.title}
          </h3>
        </div>
        <Badge variant={strengthVariant[item.strengthAssessment]} size="md">
          Record strength: {STRENGTH_LABEL[item.strengthAssessment]}
        </Badge>
      </div>

      {/* Legal standard */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1.5">
          Legal Standard
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-0">{item.legalStandard}</p>
      </div>

      {/* Controlling authority */}
      <div className="mb-5 bg-navy-50 border border-navy-200 rounded p-3">
        <p className="text-xs font-semibold text-navy-700 uppercase tracking-wider mb-1.5">
          Controlling Authority
        </p>
        <p className="font-serif text-sm text-navy-900 mb-0 selection:bg-amber-200 select-all">
          {item.controllingAuthority}
        </p>
      </div>

      {/* Allegations with evidence anchors */}
      <div className="mb-5">
        <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-2">
          Supporting Allegations &amp; Evidence Anchors ({item.allegations.length})
        </p>
        <div className="space-y-4">
          {item.allegations.map((a, i) => (
            <div
              key={i}
              className="border-l-2 border-emerald-400 pl-4 py-2"
            >
              <div className="flex items-start gap-2 mb-2">
                <CheckCircleIcon className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-neutral-800 leading-relaxed mb-0">
                  <span className="font-mono text-2xs text-neutral-500 mr-1.5">
                    ¶ {i + 1}.
                  </span>
                  {a.allegation}
                </p>
              </div>

              {(a.evidenceDocIds.length > 0 || a.timelineEventIds.length > 0) && (
                <div className="ml-6 space-y-1.5 text-2xs">
                  {a.evidenceDocIds.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 items-baseline">
                      <span className="font-semibold text-neutral-500 uppercase tracking-wider">
                        Exhibits:
                      </span>
                      {a.evidenceDocIds.map((d) => (
                        <span
                          key={d}
                          className="inline-flex items-center gap-1 px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded"
                        >
                          <span className="font-mono">{getExhibitNumber(d)}</span>
                          <span className="text-neutral-500">— {docTitle(d)}</span>
                        </span>
                      ))}
                    </div>
                  )}
                  {a.timelineEventIds.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 items-baseline">
                      <span className="font-semibold text-neutral-500 uppercase tracking-wider">
                        Timeline:
                      </span>
                      {a.timelineEventIds.map((e) => (
                        <span
                          key={e}
                          className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-800 rounded"
                        >
                          <span className="font-mono">{e}</span>
                          <span className="text-blue-600">— {evtTitle(e)}</span>
                        </span>
                      ))}
                    </div>
                  )}
                  {a.supportingAuthorities && a.supportingAuthorities.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 items-baseline">
                      <span className="font-semibold text-neutral-500 uppercase tracking-wider">
                        Authority:
                      </span>
                      {a.supportingAuthorities.map((auth) => (
                        <span
                          key={auth}
                          className="px-2 py-0.5 bg-navy-50 text-navy-800 rounded font-mono"
                        >
                          {auth}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Gaps */}
      {item.gaps.length > 0 && (
        <div className="mb-5 bg-amber-50 border border-amber-200 rounded p-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <ExclamationTriangleIcon className="w-4 h-4 text-amber-700" />
            <p className="text-xs font-semibold text-amber-900 uppercase tracking-wider mb-0">
              Gaps in Our Record (discovery targets)
            </p>
          </div>
          <ul className="text-sm text-amber-900 space-y-1 list-disc pl-5 mb-0">
            {item.gaps.map((g, i) => (
              <li key={i}>{g}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Ashley distinguishing */}
      <div className="bg-red-50 border border-red-200 rounded p-3">
        <div className="flex items-center gap-1.5 mb-1.5">
          <ShieldCheckIcon className="w-4 h-4 text-red-700" />
          <p className="text-xs font-semibold text-red-900 uppercase tracking-wider mb-0">
            Ashley (2d Cir. 2025) Distinguishing Factors
          </p>
        </div>
        <ul className="text-sm text-red-900 space-y-1 list-disc pl-5 mb-0">
          {item.ashleyDistinguishing.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function PleadingChecklistPage() {
  const elements = getElementsOnly();
  const factors = getFactorsOnly();

  // Strength distribution
  const strengths = pleadingChecklist.reduce(
    (acc, p) => {
      acc[p.strengthAssessment] = (acc[p.strengthAssessment] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

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
        <p className="kicker">MTD-Survival Drafting Template</p>
        <h1>Pleading Checklist — Ashley / Halberstam / Taamneh Map</h1>
        <p className="lead mt-4">
          Paragraph-by-paragraph construction guide for a JASTA aiding-and-abetting complaint
          under 18 U.S.C. § 2333(d)(2). Each Halberstam element and substantial-assistance
          factor is mapped to the allegations our record supports, the specific evidence anchors
          that support them, candidly-identified gaps in our record, and Ashley v. Deutsche Bank
          distinguishing factors that counsel should pre-empt.
        </p>
      </header>

      {/* Strength dashboard */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        <div className="bg-white border border-neutral-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-serif font-bold text-neutral-900">
            {pleadingChecklist.length}
          </div>
          <div className="text-xs text-neutral-500 mt-1">Total Items</div>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-serif font-bold text-emerald-900">
            {strengths.strong || 0}
          </div>
          <div className="text-xs text-emerald-700 mt-1">Strong Record</div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-serif font-bold text-amber-900">
            {strengths.moderate || 0}
          </div>
          <div className="text-xs text-amber-700 mt-1">Moderate Record</div>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-serif font-bold text-red-900">
            {(strengths.contested || 0) + (strengths.weak || 0)}
          </div>
          <div className="text-xs text-red-700 mt-1">Contested / Weak</div>
        </div>
      </div>

      {/* How to use */}
      <section className="section-block-alt mb-10">
        <div className="flex items-center gap-2 mb-3">
          <InformationCircleIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">How to Use This Checklist</h2>
        </div>
        <ol className="text-sm text-neutral-700 leading-relaxed space-y-2 list-decimal pl-5 mb-3">
          <li>
            <strong>For each element and factor below,</strong> use the "Supporting Allegations"
            as a draft paragraph template. Each allegation is phrased as it might appear in a
            complaint and is anchored to specific exhibits and timeline events.
          </li>
          <li>
            <strong>Verify every citation</strong> against the underlying exhibit before filing.
            Exhibit numbers (PLTF-EX-####) are assigned sequentially to our evidence repository
            and are consistent with the{' '}
            <Link href="/evidence" className="underline">Evidence Repository</Link>.
          </li>
          <li>
            <strong>Fill the gaps</strong> identified in each item — these are the discovery
            targets that will convert "moderate" items into "strong" items once record is
            developed. Cross-reference with the{' '}
            <Link href="/discovery-targets" className="underline">
              Discovery Targets Register
            </Link>
            .
          </li>
          <li>
            <strong>Pre-empt Ashley in your MTD opposition.</strong> Each item\'s Ashley
            distinguishing factors identify how our record affirmatively defeats the arguments
            Visa/Mastercard counsel will make under Ashley v. Deutsche Bank (2d Cir. July 21,
            2025). Incorporate these distinctions in your memorandum of law in opposition to
            motion to dismiss.
          </li>
          <li>
            <strong>Named-plaintiff-specific allegations</strong> (for each Tower 22 KIA family,
            each 47 wounded servicemember, and each other injured plaintiff) are outside this
            template — counsel should draft each plaintiff\'s specific attack-and-injury
            paragraphs separately and incorporate them at Element 1.
          </li>
        </ol>
        <p className="text-xs text-neutral-500 italic mb-0">
          This checklist is a research input, not a legal pleading. Counsel of record retains
          all responsibility for drafting, verification, and final wording.
        </p>
      </section>

      {/* Halberstam Elements */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <ScaleIcon className="w-6 h-6 text-neutral-700" />
          <h2 className="m-0">Part I — The Three Halberstam Elements</h2>
        </div>
        <p className="text-neutral-700 mb-6">
          Each of these three elements must be alleged with sufficient factual detail to meet
          the Iqbal / Twombly plausibility standard and to distinguish our case from Ashley.
          Element 1 (principal wrongdoing) is established by the attack record; Element 2
          (general awareness) is our strongest element given the extensive Treasury briefing
          record; Element 3 (knowing and substantial assistance) is where the Atchley-style
          "unusual way" narrative concentrates.
        </p>

        {elements.map((item) => (
          <PleadingItemCard key={item.id} item={item} />
        ))}
      </section>

      {/* Halberstam Factors */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <ClipboardDocumentCheckIcon className="w-6 h-6 text-neutral-700" />
          <h2 className="m-0">Part II — The Six Halberstam Substantial-Assistance Factors</h2>
        </div>
        <p className="text-neutral-700 mb-6">
          These factors refine the Element 3 substantial-assistance analysis. Post-Taamneh, the
          Supreme Court cautioned against mechanical application: the factors should be weighed
          together, and greater "amount" of assistance can partly substitute for lower
          "knowing" culpability — and vice versa. Our record is strong on five of the six
          factors, with "presence" (Factor 3) receiving a moderate rating pending discovery.
        </p>

        {factors.map((item) => (
          <PleadingItemCard key={item.id} item={item} />
        ))}
      </section>

      {/* Meta-strategy note */}
      <section className="mb-10">
        <div className="bg-navy-50 border border-navy-200 rounded-lg p-5">
          <h3 className="text-sm font-semibold text-navy-900 mt-0 mb-2 flex items-center gap-2">
            <ScaleIcon className="w-5 h-5" />
            Meta-Strategy: The Atchley Template
          </h3>
          <p className="text-sm text-navy-900 leading-relaxed mb-2">
            The surviving post-Taamneh pathway is the one the D.C. Circuit articulated on
            January 23, 2026 in <em>Atchley v. AstraZeneca UK Ltd.</em> — that "unusual,"
            affirmative conduct beyond routine service provision can clear Taamneh\'s conscious-
            voluntary-culpable threshold. Three aspects of our record fit the Atchley template
            precisely:
          </p>
          <ul className="text-sm text-navy-900 space-y-1 list-disc pl-5 mb-2">
            <li>
              <strong>Affirmative act of reinstatement</strong> (Yana Banking Services,
              Late 2023, after August 2023 zero-controls audit) — not passive inaction but a
              deliberate decision to continue.
            </li>
            <li>
              <strong>Financial incentives to Iraqi partners</strong> to boost transaction
              volume during the surge period — active encouragement of the very transaction
              flow Treasury had identified as militia-linked.
            </li>
            <li>
              <strong>Continued processing after named-militia briefing</strong> — 22 months
              of sustained operation after Treasury identified KH, AAH, and Badr by name.
            </li>
          </ul>
          <p className="text-sm text-navy-900 mb-0">
            Counsel should foreground these three affirmative acts — not the broader scheme
            scale alone — in the complaint. Ashley\'s defect was an absence of such acts;
            Atchley\'s preservation of JASTA claims rests on their presence. See the{' '}
            <Link href="/ata-litigation-landscape" className="underline">
              ATA Litigation Landscape page
            </Link>{' '}
            for the full doctrinal framework.
          </p>
        </div>
      </section>

      {/* Footer navigation */}
      <footer className="mt-12 pt-6 border-t border-neutral-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
          <Link href="/research-narrative" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Statement of Facts
            </div>
            <div className="text-2xs text-neutral-500">Research narrative</div>
          </Link>
        </div>

        <p className="text-2xs text-neutral-400 leading-relaxed mt-6">
          <strong className="text-neutral-500">Disclaimer:</strong> This pleading checklist is a
          research input for drafting only, not a legal pleading. Counsel of record retains all
          responsibility for drafting, verification, final wording, and determining whether
          particular allegations are appropriate for a given client\'s circumstances.
          Allegations are phrased in complaint-template style to facilitate drafting efficiency;
          they must not be filed without independent verification and licensed-attorney review.
        </p>
      </footer>
    </article>
  );
}
