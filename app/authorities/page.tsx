import Link from 'next/link';
import {
  ArrowLeftIcon,
  ScaleIcon,
  BookOpenIcon,
  DocumentTextIcon,
  ExclamationCircleIcon,
  CheckCircleIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import {
  authorities,
  getAuthoritiesByType,
  AUTHORITY_TYPE_LABEL,
  POSTURE_LABEL,
  type AuthorityType,
  type Authority,
} from '@/lib/data/authorities';
import Badge from '@/components/ui/Badge';

export const metadata = {
  title: 'Bluebook Authorities Table | V/MC Intelligence',
  description:
    'Cite-ready authorities for direct use in briefs and complaints. Formatted per The Bluebook: A Uniform System of Citation (21st ed. 2020). Covers Supreme Court, Circuit Courts, District Courts, statutes, regulations, executive orders, agency releases, and rules of procedure.',
};

const TYPE_ORDER: AuthorityType[] = [
  'scotus',
  'circuit',
  'district',
  'statute',
  'regulation',
  'executive-order',
  'agency-release',
  'rule',
];

const postureVariant: Record<
  Authority['posture'],
  'success' | 'danger' | 'gray' | 'amber' | 'navy'
> = {
  favorable: 'success',
  adverse: 'danger',
  neutral: 'gray',
  pending: 'amber',
  foundational: 'navy',
};

function PostureIcon({ posture }: { posture: Authority['posture'] }) {
  if (posture === 'favorable') return <CheckCircleIcon className="w-4 h-4 text-emerald-600" />;
  if (posture === 'adverse') return <ExclamationCircleIcon className="w-4 h-4 text-red-600" />;
  if (posture === 'pending') return <ClockIcon className="w-4 h-4 text-amber-600" />;
  return <BookOpenIcon className="w-4 h-4 text-neutral-500" />;
}

export default function AuthoritiesPage() {
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
        <p className="kicker">Cite-Ready Reference Table</p>
        <h1>Bluebook Authorities Table</h1>
        <p className="lead mt-4">
          Every case, statute, regulation, executive order, and agency release cited across the
          database, formatted per <em>The Bluebook: A Uniform System of Citation</em> (21st ed.
          2020). Copy-paste-ready for direct use in complaints, briefs, and memoranda.
        </p>
      </header>

      {/* Summary stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
        {TYPE_ORDER.slice(0, 5).map((t) => (
          <div
            key={t}
            className="bg-white border border-neutral-200 rounded-lg p-4 text-center"
          >
            <div className="text-2xl font-serif font-bold text-neutral-900">
              {getAuthoritiesByType(t).length}
            </div>
            <div className="text-xs text-neutral-500 mt-1">
              {AUTHORITY_TYPE_LABEL[t]}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <section className="section-block-alt mb-10">
        <h3 className="text-sm font-semibold text-neutral-800 mb-3 mt-0">Posture Key</h3>
        <div className="flex flex-wrap gap-3 text-xs">
          <span className="inline-flex items-center gap-1.5">
            <CheckCircleIcon className="w-4 h-4 text-emerald-600" />
            <span className="text-neutral-700">Favorable</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ExclamationCircleIcon className="w-4 h-4 text-red-600" />
            <span className="text-neutral-700">Adverse</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ClockIcon className="w-4 h-4 text-amber-600" />
            <span className="text-neutral-700">Pending</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <BookOpenIcon className="w-4 h-4 text-neutral-500" />
            <span className="text-neutral-700">Foundational / Neutral</span>
          </span>
        </div>
        <p className="text-xs text-neutral-500 mt-3 mb-0">
          Copy a full citation by selecting the gray citation block. Short cites (pin-cite ready)
          shown in monospace. Verify all citations against primary sources before filing;
          citations provided as research aids, not legal advice.
        </p>
      </section>

      {/* Authorities by Type */}
      {TYPE_ORDER.map((type) => {
        const items = getAuthoritiesByType(type);
        if (items.length === 0) return null;
        return (
          <section key={type} className="section-block mb-10">
            <div className="flex items-center gap-2 mb-4">
              <ScaleIcon className="w-5 h-5 text-neutral-700" />
              <h2 className="m-0">
                {AUTHORITY_TYPE_LABEL[type]}{' '}
                <span className="text-sm font-normal text-neutral-500">({items.length})</span>
              </h2>
            </div>

            <div className="space-y-4">
              {items.map((a) => (
                <div
                  key={a.id}
                  className="bg-white border border-neutral-200 rounded-lg p-5"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-base font-serif font-semibold text-neutral-900 mt-0 mb-0">
                      <em>{a.shortName}</em>{' '}
                      <span className="text-sm font-sans font-normal text-neutral-500">
                        ({a.year})
                      </span>
                    </h3>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <PostureIcon posture={a.posture} />
                      <Badge variant={postureVariant[a.posture]} size="sm">
                        {POSTURE_LABEL[a.posture]}
                      </Badge>
                    </div>
                  </div>

                  {/* Full Bluebook citation — copy-paste-ready */}
                  <div className="bg-neutral-50 border border-neutral-200 rounded p-3 my-3 font-serif text-sm text-neutral-900 selection:bg-amber-200 select-all">
                    {a.fullCitation}
                  </div>

                  {/* Short cite */}
                  {a.shortCite && (
                    <p className="text-xs text-neutral-500 mb-2">
                      <span className="font-semibold text-neutral-700">Short cite:</span>{' '}
                      <span className="font-mono bg-neutral-100 px-1.5 py-0.5 rounded">
                        {a.shortCite}
                      </span>
                    </p>
                  )}

                  {/* Holding */}
                  <p className="text-sm text-neutral-700 leading-relaxed mb-3 mt-0">
                    <span className="font-semibold text-neutral-800">Holding:</span> {a.holding}
                  </p>

                  {/* Tags + related */}
                  <div className="flex flex-wrap items-center gap-2">
                    {a.tags.map((t) => (
                      <span
                        key={t}
                        className="text-2xs px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                    {a.url && (
                      <a
                        href={a.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xs text-navy-700 hover:text-navy-900 underline ml-auto"
                      >
                        Official source →
                      </a>
                    )}
                    {a.relatedDocIds && a.relatedDocIds.length > 0 && (
                      <span className="text-2xs text-neutral-500">
                        Related docs: {a.relatedDocIds.join(', ')}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {/* Footer / usage note */}
      <footer className="mt-12 pt-6 border-t border-neutral-200">
        <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5 mb-6">
          <h3 className="text-sm font-semibold text-neutral-800 mb-2 mt-0">
            Usage Notes for Counsel
          </h3>
          <ul className="text-sm text-neutral-700 space-y-1 list-disc pl-5 mb-0">
            <li>
              <strong>Verification:</strong> Verify every citation against primary sources
              before filing. The Bluebook 21st Ed. is the controlling format; any inconsistency
              with current court preferences (particularly 2d Cir. and D.D.C. local rules)
              should be resolved in favor of local practice.
            </li>
            <li>
              <strong>Pin cites:</strong> Short-cite formats assume pin-cite follows. Fill in
              page numbers from primary sources when cited in briefs.
            </li>
            <li>
              <strong>Parallel citations:</strong> Where a case has Federal Reporter + L. Ed. +
              S. Ct. cites, use the Bluebook preferred reporter unless Local Rule requires
              parallel cites (e.g., some state courts).
            </li>
            <li>
              <strong>Pending decisions:</strong> For pending district-court orders and slip
              opinions, supplement with the Westlaw or LEXIS cite where available.
            </li>
            <li>
              <strong>Public sources:</strong> URLs for official government releases are
              included for verification; follow Bluebook Rule 18.2 for internet source citation
              in briefs.
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link href="/precedents" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Precedents (Analytical)
            </div>
            <div className="text-2xs text-neutral-500">Case summaries + holdings</div>
          </Link>
          <Link href="/pleading-checklist" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Pleading Checklist
            </div>
            <div className="text-2xs text-neutral-500">Halberstam factor map</div>
          </Link>
          <Link href="/discovery-targets" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Discovery Targets
            </div>
            <div className="text-2xs text-neutral-500">Custodians + documents</div>
          </Link>
          <Link href="/research-narrative" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Statement of Facts
            </div>
            <div className="text-2xs text-neutral-500">Research narrative</div>
          </Link>
        </div>

        <p className="text-2xs text-neutral-400 leading-relaxed mt-6">
          <strong className="text-neutral-500">Disclaimer:</strong> Citations provided for
          research purposes only; do not constitute legal advice. All authorities compiled from
          published federal court decisions, SEC EDGAR, OFAC/Treasury press releases, State
          Department announcements, DOJ filings, and public statutory/regulatory materials.
          Counsel must verify each citation against primary sources prior to use in any court
          filing.
        </p>
      </footer>
    </article>
  );
}
