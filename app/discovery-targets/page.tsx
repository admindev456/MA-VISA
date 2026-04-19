import Link from 'next/link';
import {
  ArrowLeftIcon,
  UserCircleIcon,
  DocumentDuplicateIcon,
  DocumentMagnifyingGlassIcon,
  GlobeAltIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import {
  custodians,
  documentCategories,
  subpoenaTargets,
  publicDataSources,
  getCustodiansByOrg,
  CUSTODIAN_ORG_LABEL,
  PRIORITY_LABEL,
  type CustodianOrg,
} from '@/lib/data/discovery';
import Badge from '@/components/ui/Badge';

export const metadata = {
  title: 'Discovery Targets Register | V/MC Intelligence',
  description:
    'Comprehensive discovery planning register: custodians for deposition, document-request categories, third-party subpoena subjects, and public data sources. Structured research to accelerate discovery planning.',
};

const ORG_ORDER: CustodianOrg[] = ['mastercard', 'visa', 'iraqi-issuer', 'government', 'other'];

const priorityVariant: Record<'p0-critical' | 'p1-high' | 'p2-medium', 'danger' | 'amber' | 'navy'> = {
  'p0-critical': 'danger',
  'p1-high': 'amber',
  'p2-medium': 'navy',
};

const deponentPriorityLabel: Record<'high' | 'medium' | 'low', string> = {
  high: 'Priority Deponent',
  medium: 'Secondary Deponent',
  low: 'Subpoena (Institutional)',
};

const deponentVariant: Record<'high' | 'medium' | 'low', 'danger' | 'amber' | 'gray'> = {
  high: 'danger',
  medium: 'amber',
  low: 'gray',
};

export default function DiscoveryTargetsPage() {
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
        <p className="kicker">Structured Discovery Planning</p>
        <h1>Discovery Targets Register</h1>
        <p className="lead mt-4">
          A structured research register for discovery planning — custodians likely to hold
          relevant records, document-request categories with specific examples, third-party
          subpoena targets, and public data sources counsel can pull without a subpoena. Not
          legal advice; a research input to support Sparacino&apos;s own discovery strategy.
        </p>
      </header>

      {/* Headline metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
        <div className="bg-white border border-neutral-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-serif font-bold text-neutral-900">
            {custodians.length}
          </div>
          <div className="text-xs text-neutral-500 mt-1">Custodians</div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-serif font-bold text-neutral-900">
            {documentCategories.length}
          </div>
          <div className="text-xs text-neutral-500 mt-1">Doc Categories</div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-serif font-bold text-neutral-900">
            {subpoenaTargets.length}
          </div>
          <div className="text-xs text-neutral-500 mt-1">Subpoena Targets</div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-serif font-bold text-neutral-900">
            {publicDataSources.length}
          </div>
          <div className="text-xs text-neutral-500 mt-1">Public Data Sources</div>
        </div>
      </div>

      {/* ==================== CUSTODIANS ==================== */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-2">
          <UserCircleIcon className="w-6 h-6 text-neutral-700" />
          <h2 className="m-0">I. Custodians</h2>
        </div>
        <p className="text-neutral-700 mb-6">
          Named individuals likely to hold relevant records. Priority tiers reflect expected
          evidentiary centrality rather than ease of access. Government custodians are typically
          subpoena targets rather than deposition subjects.
        </p>

        {ORG_ORDER.map((org) => {
          const items = getCustodiansByOrg(org);
          if (items.length === 0) return null;
          return (
            <div key={org} className="mb-8">
              <h3 className="text-base font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                <BuildingOfficeIcon className="w-4 h-4 text-neutral-500" />
                {CUSTODIAN_ORG_LABEL[org]}
                <span className="text-xs font-normal text-neutral-500">
                  ({items.length})
                </span>
              </h3>

              <div className="space-y-3">
                {items.map((c) => (
                  <div
                    key={c.id}
                    className="bg-white border border-neutral-200 rounded-lg p-5"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h4 className="text-base font-serif font-semibold text-neutral-900 mt-0 mb-0.5">
                          {c.name}
                        </h4>
                        <p className="text-xs text-neutral-500 mb-0">
                          {c.title} — {c.organization}
                        </p>
                      </div>
                      <Badge variant={deponentVariant[c.depositionPriority]} size="sm">
                        {deponentPriorityLabel[c.depositionPriority]}
                      </Badge>
                    </div>

                    <p className="text-sm text-neutral-700 leading-relaxed mt-3 mb-3">
                      <span className="font-semibold text-neutral-800">Relevance:</span>{' '}
                      {c.relevance}
                    </p>

                    <div className="mt-3">
                      <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1.5">
                        Likely custodian of
                      </p>
                      <ul className="text-sm text-neutral-700 space-y-1 list-disc pl-5">
                        {c.likelyCustodianOf.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {c.publicStatements && (
                      <div className="mt-3 pt-3 border-t border-neutral-100">
                        <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1">
                          Public statements
                        </p>
                        <p className="text-xs text-neutral-600 italic mb-0">
                          {c.publicStatements}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* ==================== DOCUMENT CATEGORIES ==================== */}
      <section className="section-block-alt mb-10">
        <div className="flex items-center gap-2 mb-2">
          <DocumentDuplicateIcon className="w-6 h-6 text-neutral-700" />
          <h2 className="m-0">II. Document Request Categories</h2>
        </div>
        <p className="text-neutral-700 mb-6">
          Structured document-request categories with specific examples. Priority tiers reflect
          evidentiary centrality. Privilege-risk flags reflect realistic expectations counsel
          should plan for in Rule 26 / Local Rule privilege log preparation.
        </p>

        <div className="space-y-4">
          {documentCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white border border-neutral-200 rounded-lg p-5"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-base font-serif font-semibold text-neutral-900 mt-0 mb-0">
                  {cat.title}
                </h3>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Badge variant={priorityVariant[cat.priority]} size="sm">
                    {PRIORITY_LABEL[cat.priority]}
                  </Badge>
                  {cat.privilegeRisk === 'high' && (
                    <span className="inline-flex items-center gap-1 text-2xs text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                      <ExclamationTriangleIcon className="w-3 h-3" />
                      High privilege risk
                    </span>
                  )}
                  {cat.privilegeRisk === 'medium' && (
                    <span className="inline-flex items-center gap-1 text-2xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                      Privilege risk
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm text-neutral-700 leading-relaxed mb-3">
                {cat.description}
              </p>

              <div className="bg-neutral-50 border border-neutral-200 rounded p-3 mt-3">
                <p className="text-xs font-semibold text-neutral-700 mb-1.5">
                  Specific examples
                </p>
                <ul className="text-sm text-neutral-700 space-y-1 list-disc pl-5 mb-0">
                  {cat.specificExamples.map((ex, i) => (
                    <li key={i}>{ex}</li>
                  ))}
                </ul>
              </div>

              {cat.targetCustodians.length > 0 && (
                <div className="mt-3">
                  <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1">
                    Target custodians
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.targetCustodians.map((id) => {
                      const c = custodians.find((x) => x.id === id);
                      if (!c) return null;
                      return (
                        <span
                          key={id}
                          className="text-2xs px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded-full"
                        >
                          {c.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SUBPOENA TARGETS ==================== */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-2">
          <DocumentMagnifyingGlassIcon className="w-6 h-6 text-neutral-700" />
          <h2 className="m-0">III. Third-Party Subpoena Targets</h2>
        </div>
        <p className="text-neutral-700 mb-6">
          Non-party subpoena candidates. Includes foreign entities reachable via Hague Convention
          or letters rogatory; account for additional lead time on international service.
        </p>

        <div className="space-y-4">
          {subpoenaTargets.map((s) => (
            <div
              key={s.id}
              className="bg-white border-l-4 border-navy-500 border border-neutral-200 rounded-r-lg p-5"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <h3 className="text-base font-serif font-semibold text-neutral-900 mt-0 mb-0.5">
                    {s.name}
                  </h3>
                  <p className="text-xs text-neutral-500 mb-0">{s.jurisdiction}</p>
                </div>
                <Badge variant={priorityVariant[s.priority]} size="sm">
                  {PRIORITY_LABEL[s.priority]}
                </Badge>
              </div>

              <p className="text-sm text-neutral-700 leading-relaxed mt-3 mb-3">
                <span className="font-semibold text-neutral-800">Relevance:</span> {s.relevance}
              </p>

              <div className="bg-neutral-50 border border-neutral-200 rounded p-3">
                <p className="text-xs font-semibold text-neutral-700 mb-1.5">
                  Specific subpoena requests
                </p>
                <ul className="text-sm text-neutral-700 space-y-1 list-disc pl-5 mb-0">
                  {s.specificRequests.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== PUBLIC DATA SOURCES ==================== */}
      <section className="section-block-alt mb-10">
        <div className="flex items-center gap-2 mb-2">
          <GlobeAltIcon className="w-6 h-6 text-neutral-700" />
          <h2 className="m-0">IV. Public Data Sources (No Subpoena Required)</h2>
        </div>
        <p className="text-neutral-700 mb-6">
          Primary-source government and corporate records accessible directly without
          subpoena. These should form the spine of the pre-filing factual record and serve
          as the basis for any Rule 11-compliant complaint.
        </p>

        <div className="space-y-4">
          {publicDataSources.map((src) => (
            <div
              key={src.id}
              className="bg-white border-l-4 border-emerald-500 border border-neutral-200 rounded-r-lg p-5"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex-1">
                  <h3 className="text-base font-serif font-semibold text-neutral-900 mt-0 mb-0.5">
                    {src.title}
                  </h3>
                  <p className="text-xs text-neutral-500 mb-0">Source: {src.source}</p>
                </div>
                {src.url && (
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-navy-700 hover:text-navy-900 underline flex-shrink-0"
                  >
                    Open source →
                  </a>
                )}
              </div>

              <p className="text-sm text-neutral-700 leading-relaxed mt-3 mb-3">
                {src.description}
              </p>

              <div className="bg-neutral-50 border border-neutral-200 rounded p-3">
                <p className="text-xs font-semibold text-neutral-700 mb-1.5">
                  What to pull
                </p>
                <ul className="text-sm text-neutral-700 space-y-1 list-disc pl-5 mb-0">
                  {src.whatToPull.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== USAGE NOTES ==================== */}
      <section className="mb-10">
        <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-5">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheckIcon className="w-5 h-5 text-neutral-700" />
            <h3 className="text-sm font-semibold text-neutral-800 mt-0 mb-0">
              Usage Notes for Counsel
            </h3>
          </div>
          <ul className="text-sm text-neutral-700 space-y-2 list-disc pl-5 mb-0">
            <li>
              <strong>Privilege planning:</strong> Document categories tagged as "high
              privilege risk" — particularly SEC disclosure workpapers and GC correspondence —
              will require early privilege-log strategy and may involve in camera review.
            </li>
            <li>
              <strong>International service:</strong> Subpoenas to CBI, Hadi (ISC), and
              UAE-domiciled institutions require Hague Convention compliance or letters
              rogatory; allow 6-12 month lead time.
            </li>
            <li>
              <strong>Reporter&apos;s privilege:</strong> WSJ subpoena is largely shielded by
              reporter\'s privilege (First Amendment + Shield Laws); focus on non-privileged
              government-record subsets.
            </li>
            <li>
              <strong>Public-source pre-filing diligence:</strong> The public data sources in
              Section IV are sufficient to support Rule 11 pleading for most of our factual
              allegations. Subpoena targets in Section III are primarily post-MTD discovery.
            </li>
            <li>
              <strong>Alignment with Ashley distinguishing factors:</strong> Custodian and
              document priorities reflect what evidence would most strengthen the{' '}
              <Link href="/ata-litigation-landscape" className="underline">
                Ashley-distinguishing factors
              </Link>{' '}
              — particularly the 22-month post-warning delay, Yana reinstatement, and
              affirmative-conduct theory.
            </li>
          </ul>
        </div>
      </section>

      {/* Navigation */}
      <footer className="mt-12 pt-6 border-t border-neutral-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link href="/pleading-checklist" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Pleading Checklist
            </div>
            <div className="text-2xs text-neutral-500">Halberstam factor map</div>
          </Link>
          <Link href="/defendants" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Defendant Structures
            </div>
            <div className="text-2xs text-neutral-500">Proper captioning</div>
          </Link>
          <Link href="/authorities" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Authorities Table
            </div>
            <div className="text-2xs text-neutral-500">Bluebook-ready cites</div>
          </Link>
          <Link href="/evidence" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Evidence Repository
            </div>
            <div className="text-2xs text-neutral-500">Exhibits + sources</div>
          </Link>
        </div>
        <p className="text-2xs text-neutral-400 leading-relaxed mt-6">
          <strong className="text-neutral-500">Disclaimer:</strong> Discovery research register
          compiled from public-source materials and database cross-references. Not legal advice.
          All discovery planning decisions rest with counsel of record; this register is a
          research input only. Certain items may be privileged attorney work product;
          coordinate with Sparacino before acting on specific suggestions.
        </p>
      </footer>
    </article>
  );
}
