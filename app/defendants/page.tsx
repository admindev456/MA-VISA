import Link from 'next/link';
import {
  ArrowLeftIcon,
  BuildingOffice2Icon,
  DocumentTextIcon,
  UsersIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';
import { visaFamily, mastercardFamily, defendantFamilies } from '@/lib/data/defendants';
import type { DefendantCorporateFamily, DefendantEntity } from '@/lib/data/defendants';
import Badge from '@/components/ui/Badge';

export const metadata = {
  title: 'Defendant Corporate Structures | V/MC Intelligence',
  description:
    'Litigation-caption-ready corporate structure table for Visa Inc. and Mastercard Incorporated, with principal subsidiaries, jurisdictions, known senior officers, and captioning guidance. Verified against SEC filings.',
};

function EntityCard({
  entity,
  kind,
}: {
  entity: DefendantEntity;
  kind: 'parent' | 'domestic' | 'foreign';
}) {
  const kindBadge = {
    parent: { label: 'Parent Holding', variant: 'navy' as const },
    domestic: { label: 'U.S. Operating', variant: 'success' as const },
    foreign: { label: 'Foreign Operating', variant: 'amber' as const },
  }[kind];

  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-5">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h4 className="text-base font-serif font-semibold text-neutral-900 mt-0 mb-1">
            {entity.legalName}
          </h4>
          <p className="text-xs text-neutral-500 mb-0 font-mono">
            Common name: {entity.commonName}
          </p>
        </div>
        <Badge variant={kindBadge.variant} size="sm">
          {kindBadge.label}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
        <div>
          <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1">
            Jurisdiction
          </p>
          <p className="text-sm text-neutral-800 mb-0">{entity.jurisdiction}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1">
            Principal Place of Business
          </p>
          <p className="text-sm text-neutral-800 mb-0">{entity.principalPlaceOfBusiness}</p>
        </div>
        {entity.ein && (
          <div>
            <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1">
              EIN
            </p>
            <p className="text-sm text-neutral-800 font-mono mb-0">{entity.ein}</p>
          </div>
        )}
        {entity.secInfo && (
          <div>
            <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1">
              SEC / Ticker
            </p>
            <p className="text-sm text-neutral-800 font-mono mb-0">{entity.secInfo}</p>
          </div>
        )}
      </div>

      <div className="mb-3">
        <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1">
          Role
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-0">{entity.role}</p>
      </div>

      <div className="mb-3">
        <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1">
          Litigation Relevance
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed mb-0">
          {entity.litigationRelevance}
        </p>
      </div>

      <div className="bg-neutral-50 border border-neutral-200 rounded p-3 mt-4">
        <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1">
          Caption form
        </p>
        <p className="font-serif text-sm text-neutral-900 selection:bg-amber-200 select-all mb-0">
          {entity.captionForm}
        </p>
      </div>

      {entity.registeredAgent && (
        <div className="mt-3 pt-3 border-t border-neutral-100">
          <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1">
            Registered Agent (verify before service)
          </p>
          <p className="text-xs text-neutral-700 mb-0">{entity.registeredAgent}</p>
        </div>
      )}
    </div>
  );
}

function CorporateFamilySection({ fam }: { fam: DefendantCorporateFamily }) {
  const domesticSubs = fam.principalOperatingSubsidiaries;
  const foreignSubs = fam.relevantForeignSubsidiaries;
  return (
    <section className="section-block mb-10">
      <div className="flex items-center gap-2 mb-4">
        <BuildingOffice2Icon className="w-6 h-6 text-neutral-700" />
        <h2 className="m-0">{fam.family} Corporate Family</h2>
      </div>

      {/* Parent */}
      <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-3">
        Parent Entity
      </h3>
      <div className="mb-8">
        <EntityCard entity={fam.parent} kind="parent" />
      </div>

      {/* Domestic subs */}
      {domesticSubs.length > 0 && (
        <>
          <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-3">
            Principal U.S. Operating Subsidiaries ({domesticSubs.length})
          </h3>
          <div className="grid grid-cols-1 gap-4 mb-8">
            {domesticSubs.map((sub) => (
              <EntityCard key={sub.legalName} entity={sub} kind="domestic" />
            ))}
          </div>
        </>
      )}

      {/* Foreign subs */}
      {foreignSubs.length > 0 && (
        <>
          <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-3">
            Relevant Foreign Operating Subsidiaries ({foreignSubs.length})
          </h3>
          <div className="grid grid-cols-1 gap-4 mb-8">
            {foreignSubs.map((sub) => (
              <EntityCard key={sub.legalName} entity={sub} kind="foreign" />
            ))}
          </div>
        </>
      )}

      {/* Senior officers */}
      <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-3">
        <span className="inline-flex items-center gap-1.5">
          <UsersIcon className="w-4 h-4" />
          Known Senior Officers ({fam.knownSeniorOfficers.length})
        </span>
      </h3>
      <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-200 bg-neutral-50 text-left">
              <th className="py-3 px-4 font-semibold text-neutral-800">Name</th>
              <th className="py-3 px-4 font-semibold text-neutral-800">Title</th>
              <th className="py-3 px-4 font-semibold text-neutral-800">Notable Public Record</th>
            </tr>
          </thead>
          <tbody className="text-neutral-700">
            {fam.knownSeniorOfficers.map((o) => (
              <tr key={o.name} className="border-b border-neutral-100 last:border-b-0">
                <td className="py-3 px-4 font-medium text-neutral-900">{o.name}</td>
                <td className="py-3 px-4">{o.title}</td>
                <td className="py-3 px-4 text-xs text-neutral-600 italic">
                  {o.publicStatementsNote || '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Captioning notes */}
      <div className="bg-navy-50 border border-navy-200 rounded-lg p-5 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <ScaleIcon className="w-5 h-5 text-navy-700" />
          <h4 className="text-sm font-semibold text-navy-900 mt-0 mb-0">
            Captioning Strategy — {fam.family}
          </h4>
        </div>
        <p className="text-sm text-navy-900 leading-relaxed mb-0">{fam.captioningNotes}</p>
      </div>

      {/* Sources */}
      <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
        <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-2">
          Sources
        </p>
        <ul className="text-xs text-neutral-700 space-y-0.5 list-disc pl-5 mb-0">
          {fam.sources.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function DefendantsPage() {
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
        <p className="kicker">Litigation-Caption Reference</p>
        <h1>Defendant Corporate Structures</h1>
        <p className="lead mt-4">
          Verified corporate-structure table for both defendant families, covering parent
          holdings, principal U.S. and foreign operating subsidiaries, known senior officers,
          and captioning strategy for ATA/JASTA complaints. Subsidiary names and jurisdictions
          verified against SEC filings.
        </p>
      </header>

      {/* Headline metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
        <div className="bg-white border border-neutral-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-serif font-bold text-neutral-900">2</div>
          <div className="text-xs text-neutral-500 mt-1">Defendant Families</div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-serif font-bold text-neutral-900">
            {defendantFamilies.reduce(
              (n, f) => n + 1 + f.principalOperatingSubsidiaries.length + f.relevantForeignSubsidiaries.length,
              0,
            )}
          </div>
          <div className="text-xs text-neutral-500 mt-1">Relevant Entities</div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-serif font-bold text-neutral-900">
            {defendantFamilies.reduce((n, f) => n + f.knownSeniorOfficers.length, 0)}
          </div>
          <div className="text-xs text-neutral-500 mt-1">Named Officers</div>
        </div>
        <div className="bg-white border border-neutral-200 rounded-lg p-4 text-center">
          <div className="text-2xl font-serif font-bold text-neutral-900">DE</div>
          <div className="text-xs text-neutral-500 mt-1">State of Incorporation</div>
        </div>
      </div>

      {/* Key captioning points */}
      <section className="section-block-alt mb-10">
        <div className="flex items-center gap-2 mb-3">
          <InformationCircleIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">Key Captioning Points</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-neutral-200 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-neutral-900 mt-0 mb-2">
              The spelling matters
            </h4>
            <ul className="text-sm text-neutral-700 space-y-1 list-disc pl-5 mb-0">
              <li>
                <strong>Visa U.S.A. Inc.</strong> — periods included; not "Visa USA Inc."
              </li>
              <li>
                <strong>Visa International Service Association</strong> — full name; not
                "Visa International"
              </li>
              <li>
                <strong>Mastercard International Incorporated</strong> — full name; not
                "Mastercard International"
              </li>
              <li>
                <strong>Mastercard Middle East Africa FZ-LLC</strong> — free-zone designation
                included
              </li>
            </ul>
          </div>
          <div className="bg-white border border-neutral-200 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-neutral-900 mt-0 mb-2">
              Critical subsidiaries for ATA theory
            </h4>
            <ul className="text-sm text-neutral-700 space-y-1 list-disc pl-5 mb-0">
              <li>
                <strong>Visa International Service Association</strong> — CEMEA / Iraqi issuer
                contracts
              </li>
              <li>
                <strong>Mastercard International Incorporated</strong> — Yana / ISC / Al Saqi
                contracts
              </li>
              <li>
                <strong>Mastercard Middle East Africa FZ-LLC</strong> — UAE merchant
                relationships; subject to UAE jurisdiction
              </li>
              <li>
                <strong>Mastercard Technologies, LLC</strong> — DIP / AI fraud-detection
                operations
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visa family */}
      <CorporateFamilySection fam={visaFamily} />

      {/* Mastercard family */}
      <CorporateFamilySection fam={mastercardFamily} />

      {/* Verification notes */}
      <section className="mb-10">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
          <h3 className="text-sm font-semibold text-amber-900 mt-0 mb-2 flex items-center gap-2">
            <DocumentTextIcon className="w-5 h-5" />
            Verification Notes
          </h3>
          <ul className="text-sm text-amber-900 space-y-1.5 list-disc pl-5 mb-0">
            <li>
              <strong>Mastercard subsidiary names</strong> verified against{' '}
              <em>Mastercard Incorporated Form 10-K Exhibit 21 (List of Subsidiaries)</em> filed
              Feb. 11, 2026 (SEC Accession No. 0001141391-26-000013).
            </li>
            <li>
              <strong>Visa subsidiary names</strong> verified against Visa Inc. S-4/A filings
              (2007) that created the current holding-company structure; the
              parent/U.S.A./International three-tier structure has been stable since the 2008 IPO.
            </li>
            <li>
              <strong>Registered agents</strong> cited are the historical Delaware agent (The
              Corporation Trust Company, CT Corporation Trust Center). Current registered agents
              must be verified against the Delaware Secretary of State, Division of Corporations
              database before service of process.
            </li>
            <li>
              <strong>Officers</strong> listed are those identified in this database from public
              records (earnings calls, press releases, SEC signatures, hearings). Roster current
              as of April 2026; confirm against most recent proxy statement before deposition
              notices.
            </li>
            <li>
              <strong>Foreign service</strong> of subsidiaries like Mastercard MEA FZ-LLC
              requires Hague Convention compliance; plan for 4-9 month service timeline via
              U.S. Central Authority or direct UAE service.
            </li>
          </ul>
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
          <Link href="/pleading-checklist" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Pleading Checklist
            </div>
            <div className="text-2xs text-neutral-500">Halberstam factor map</div>
          </Link>
          <Link href="/research-narrative" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Statement of Facts
            </div>
            <div className="text-2xs text-neutral-500">Research narrative</div>
          </Link>
        </div>

        <p className="text-2xs text-neutral-400 leading-relaxed mt-6">
          <strong className="text-neutral-500">Disclaimer:</strong> Corporate-structure
          information compiled from SEC filings, state corporate records, and official corporate
          communications. Counsel must independently verify all captioning decisions, including
          current state of incorporation, registered agent, and specific subsidiary-party
          determinations for the particular claims pleaded, prior to filing any complaint or
          serving process. Research aid only; not legal advice.
        </p>
      </footer>
    </article>
  );
}
