import Link from 'next/link';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ShieldExclamationIcon,
  MapPinIcon,
  CalendarDaysIcon,
  FireIcon,
  UsersIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { attackCasualtyLedger } from '@/lib/data/financial';
import { timelineEvents } from '@/lib/data/timeline';
import { evidenceDocuments } from '@/lib/data/evidence';
import Badge from '@/components/ui/Badge';

export const metadata = {
  title: 'Two-Year Attack Chronicle | V/MC Intelligence',
  description:
    'Primary-source attack chronicle: May 2023 - May 2025. More than 180 documented attacks by Iran-backed Iraqi militias on U.S. personnel, contractors, and installations. 4 U.S. personnel killed (1 contractor + 3 Tower 22 KIA); ~130+ wounded. Full record with attribution.',
};

const attackEventIds = [
  'evt-032', 'evt-033', 'evt-034', 'evt-035', 'evt-036', 'evt-037',
  'evt-011', 'evt-038', 'evt-039', 'evt-040', 'evt-041', 'evt-042', 'evt-043',
];

const attackEvents = timelineEvents
  .filter((e) => attackEventIds.includes(e.id))
  .sort((a, b) => a.dateSort.localeCompare(b.dateSort));

const tower22Event = timelineEvents.find((e) => e.id === 'evt-011');
const centcomFeb2 = evidenceDocuments.find((d) => d.id === 'doc-053');
const centcomFeb7 = evidenceDocuments.find((d) => d.id === 'doc-054');
const dojIndictment = evidenceDocuments.find((d) => d.id === 'doc-055');
const wapoTower22 = evidenceDocuments.find((d) => d.id === 'doc-056');
const stateDeptDesign = evidenceDocuments.find((d) => d.id === 'doc-057');

const totalKIA = attackCasualtyLedger.reduce((s, a) => s + a.killedInAction, 0);
const totalWounded = attackCasualtyLedger.reduce((s, a) => s + a.wounded, 0);

export default function AttacksLedgerPage() {
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
        <p className="kicker">Primary-Source Attack Chronicle</p>
        <h1>Two-Year Attack Chronicle</h1>
        <p className="lead mt-4">
          Between May 2023 and May 2025, Iran-backed Iraqi militias launched{' '}
          <strong>more than 180 documented attacks</strong> on U.S. personnel, contractors, and
          installations in Iraq, Syria, and Jordan. The campaign killed <strong>4 U.S.
          personnel</strong> — one contractor by cardiac arrest during a false alarm, and three
          Army Reserve soldiers at Tower 22 in Jordan — and wounded approximately{' '}
          <strong>130+</strong> service members and contractors, most with traumatic brain
          injuries.
        </p>
      </header>

      {/* Headline metrics */}
      <div className="metric-grid mb-12">
        <div className="metric-item">
          <div className="stat-inline text-red-700">{totalKIA}</div>
          <div className="stat-label">U.S. Killed (Documented Attacks)</div>
        </div>
        <div className="metric-item">
          <div className="stat-inline text-red-700">{totalWounded}+</div>
          <div className="stat-label">U.S. Wounded (Major Attacks)</div>
        </div>
        <div className="metric-item">
          <div className="stat-inline">~195</div>
          <div className="stat-label">Total Attacks May 2023-May 2025</div>
        </div>
        <div className="metric-item">
          <div className="stat-inline">6 FTOs</div>
          <div className="stat-label">All Designated</div>
        </div>
      </div>

      {/* 1. Aggregate totals */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <UsersIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">1. Aggregate Totals</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-neutral-300 text-left">
                <th className="py-3 pr-4 font-semibold text-neutral-800">Date</th>
                <th className="py-3 px-3 font-semibold text-neutral-800">Location</th>
                <th className="py-3 px-3 font-semibold text-neutral-800">Type</th>
                <th className="py-3 px-3 font-semibold text-neutral-800 text-right">KIA</th>
                <th className="py-3 px-3 font-semibold text-neutral-800 text-right">WIA</th>
                <th className="py-3 pl-3 font-semibold text-neutral-800">Attribution</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              {attackCasualtyLedger.map((a) => (
                <tr key={a.date + a.location} className="border-b border-neutral-200 align-top">
                  <td className="py-3 pr-4 font-mono text-xs whitespace-nowrap">{a.date}</td>
                  <td className="py-3 px-3 text-xs">{a.location}</td>
                  <td className="py-3 px-3 text-xs">{a.attackType}</td>
                  <td className="py-3 px-3 text-xs text-right font-semibold text-red-700">
                    {a.killedInAction}
                  </td>
                  <td className="py-3 px-3 text-xs text-right font-semibold">
                    {a.wounded}
                  </td>
                  <td className="py-3 pl-3 text-xs">{a.attribution}</td>
                </tr>
              ))}
              <tr className="bg-red-50 font-semibold">
                <td className="py-3 pr-4 text-sm" colSpan={3}>
                  Ledger Totals (major attacks)
                </td>
                <td className="py-3 px-3 text-sm text-right text-red-700">{totalKIA}</td>
                <td className="py-3 px-3 text-sm text-right text-red-700">{totalWounded}+</td>
                <td className="py-3 pl-3 text-sm"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Pre-surge period */}
      <section className="section-block-alt mb-10">
        <div className="flex items-center gap-2 mb-4">
          <CalendarDaysIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">2. Pre-Surge Period (Mar 23 - Oct 16, 2023)</h2>
        </div>

        <p className="mb-4">
          The 17 months preceding the October 17, 2023 campaign onset contained very few Iranian-
          militia attacks on U.S. forces — reflecting Iranian guidance to pause attacks ahead of
          Iraq&apos;s 2023 elections and a self-imposed ceasefire after U.S. retaliatory strikes
          in March 2023. But two precedent events matter to our case: the Rmelan drone strike
          that killed a U.S. contractor, and the Al-Tanf strike from Jurf al-Sakhar, Babil that
          established the Iraq→Syria drone corridor Kata&apos;ib Hezbollah would use post-October.
        </p>

        <div className="space-y-4">
          {['evt-032', 'evt-033'].map((id) => {
            const e = timelineEvents.find((x) => x.id === id);
            if (!e) return null;
            return (
              <div
                key={e.id}
                className="bg-white border border-neutral-200 rounded-lg p-4"
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3 className="text-base font-semibold text-neutral-900 m-0">{e.title}</h3>
                  <span className="text-xs text-neutral-500 whitespace-nowrap">{e.date}</span>
                </div>
                <p className="text-sm text-neutral-600 mb-3">{e.description}</p>
                {e.details && (
                  <ul className="list-disc pl-5 text-xs text-neutral-700 space-y-0.5">
                    {e.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Post-Oct 7 blitz */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <FireIcon className="w-5 h-5 text-red-700" />
          <h2 className="m-0">3. The Post-October 7 Blitz (Oct 17, 2023 - Feb 9, 2024)</h2>
        </div>

        <p className="mb-4">
          Attacks resumed on October 17-18, 2023 and unfolded at near-daily tempo. By December
          31, 2023 the Pentagon officially counted <strong>~103 attacks</strong>. By the February
          4, 2024 effective ceasefire, the tally reached <strong>165-170</strong> across Iraq,
          Syria, and Jordan. Islamic Resistance in Iraq (IRI) claimed more than 90%; U.S.
          officials publicly attributed them overwhelmingly to Kata&apos;ib Hezbollah and Harakat
          Hezbollah al-Nujaba, with participation by AAH, KSS, and facade brands (Tashkil
          al-Waritheen, Ashab al-Kahf, Al-Dhafireen, Harakat Ansar Allah al-Awfiya).
        </p>

        <div className="space-y-3">
          {['evt-034', 'evt-035', 'evt-036', 'evt-037'].map((id) => {
            const e = timelineEvents.find((x) => x.id === id);
            if (!e) return null;
            return (
              <div
                key={e.id}
                className="bg-white border-l-4 border-red-500 border border-neutral-200 rounded-r-lg p-4"
              >
                <div className="flex items-center justify-between gap-3 mb-1">
                  <h3 className="text-sm font-semibold text-neutral-900 m-0">{e.title}</h3>
                  <span className="text-xs text-neutral-500 whitespace-nowrap">{e.date}</span>
                </div>
                <p className="text-sm text-neutral-700 mb-0">{e.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Tower 22 dedicated */}
      <section className="section-block-alt mb-10">
        <div className="flex items-center gap-2 mb-4">
          <ExclamationTriangleIcon className="w-5 h-5 text-red-700" />
          <h2 className="m-0">4. Tower 22 — January 28, 2024</h2>
        </div>

        <div className="callout-danger mb-6">
          <h4 className="text-sm font-semibold text-red-800 mb-1">
            The deadliest single attack of the campaign
          </h4>
          <p className="text-sm text-neutral-700 mb-0">
            Tower 22 is a small U.S. logistics support outpost in the Rukban area of northeast
            Jordan, ~10 km from the Iraqi border and ~20 km south of the U.S. Al-Tanf Garrison,
            supporting Operation Inherent Resolve. At approximately 5:30 AM local time on Sunday,
            January 28, 2024, a one-way Shahed-style Iranian-origin drone struck containerized
            housing units where ~350 U.S. Army and Air Force personnel were stationed. It was
            Tower 22&apos;s third drone attack in roughly six months.
          </p>
        </div>

        <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">
          The Three Americans Killed
        </h3>
        <p className="text-sm text-neutral-700 mb-4">
          All three were Army Reservists of the 718th Engineer Company, 926th Engineer Battalion,
          926th Engineer Brigade, 412th Theater Engineer Command, based at Fort Moore (formerly
          Fort Benning), Georgia, deployed in support of Operation Inherent Resolve. All three
          were posthumously promoted one grade. All three were from Georgia.
        </p>

        <div className="space-y-3">
          <div className="bg-white border border-neutral-300 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-neutral-900 mt-0 mb-1">
              Sgt. William Jerome Rivers (46, Carrollton, Georgia)
            </h4>
            <p className="text-xs text-neutral-600 mb-0">
              Enlisted 2011 as an interior electrician; deployed to Iraq for nine months in 2018;
              joined the 926th in 2023. Posthumously promoted to <strong>Staff Sergeant</strong>.
            </p>
          </div>
          <div className="bg-white border border-neutral-300 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-neutral-900 mt-0 mb-1">
              Spc. Kennedy Ladon Sanders (24, Waycross, Georgia)
            </h4>
            <p className="text-xs text-neutral-600 mb-0">
              Enlisted 2019 as a horizontal construction engineer; deployed to Djibouti for eight
              months in 2021. Posthumously promoted to <strong>Sergeant</strong>. Her father
              Shawn, a Marine veteran, described her as &quot;happy-go-lucky.&quot;
            </p>
          </div>
          <div className="bg-white border border-neutral-300 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-neutral-900 mt-0 mb-1">
              Spc. Breonna Alexsondria Moffett (23, Savannah, Georgia)
            </h4>
            <p className="text-xs text-neutral-600 mb-0">
              Enlisted 2019 as a horizontal construction engineer. On her first deployment. Died
              of wounds on <strong>January 29, 2024</strong>, one day after the strike.
              Posthumously promoted to <strong>Sergeant</strong>.
            </p>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">
          The Wounded — 47 by Final Count
        </h3>
        <p className="text-sm text-neutral-700 mb-4">
          CENTCOM&apos;s initial figure of &quot;at least 25&quot; wounded rose to 34 by the
          evening of January 28, 41 by January 29 (Pentagon/Sabrina Singh), and{' '}
          <strong>47</strong> as TBI assessments matured (Military Times/Army Times, Dec 2024).
          Eight service members were medically evacuated to the Baghdad Diplomatic Support
          Center; three continued on to Landstuhl Regional Medical Center, Germany. Injuries
          included TBI, at least one spinal injury, and shrapnel wounds. In May 2025, ten New
          York Army National Guard soldiers of the 101st Expeditionary Signal Battalion received
          Purple Hearts for their injuries.
        </p>

        <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">
          Attribution and the Operational Chain
        </h3>
        <div className="space-y-3">
          {stateDeptDesign && (
            <div className="bg-white border border-neutral-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-neutral-900 mt-0 mb-1">
                {stateDeptDesign.title}
              </h4>
              <span className="text-xs text-neutral-500">{stateDeptDesign.date}</span>
              <p className="text-sm text-neutral-700 mt-1 mb-0">{stateDeptDesign.description}</p>
            </div>
          )}
          {dojIndictment && (
            <div className="bg-white border border-neutral-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-neutral-900 mt-0 mb-1">
                {dojIndictment.title}
              </h4>
              <span className="text-xs text-neutral-500">{dojIndictment.date}</span>
              <p className="text-sm text-neutral-700 mt-1 mb-0">{dojIndictment.description}</p>
            </div>
          )}
          {wapoTower22 && (
            <div className="bg-white border border-neutral-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-neutral-900 mt-0 mb-1">
                {wapoTower22.title}
              </h4>
              <span className="text-xs text-neutral-500">{wapoTower22.date}</span>
              <p className="text-sm text-neutral-700 mt-1 mb-0">{wapoTower22.description}</p>
            </div>
          )}
        </div>
      </section>

      {/* 5. CENTCOM retaliation */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <ShieldExclamationIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">5. CENTCOM Retaliation — February 2 &amp; 7, 2024</h2>
        </div>

        <p className="mb-4">
          The deadly Tower 22 attack prompted two sweeping U.S. kinetic responses that broke the
          operational rhythm of the campaign.
        </p>

        <div className="space-y-4">
          {centcomFeb2 && (
            <div className="bg-white border-l-4 border-navy-500 border border-neutral-200 rounded-r-lg p-4">
              <h3 className="text-sm font-semibold text-neutral-900 mt-0 mb-1">
                {centcomFeb2.title}
              </h3>
              <span className="text-xs text-neutral-500">{centcomFeb2.date}</span>
              <p className="text-sm text-neutral-700 mt-2 mb-0">{centcomFeb2.description}</p>
            </div>
          )}
          {centcomFeb7 && (
            <div className="bg-white border-l-4 border-navy-500 border border-neutral-200 rounded-r-lg p-4">
              <h3 className="text-sm font-semibold text-neutral-900 mt-0 mb-1">
                {centcomFeb7.title}
              </h3>
              <span className="text-xs text-neutral-500">{centcomFeb7.date}</span>
              <p className="text-sm text-neutral-700 mt-2 mb-0">{centcomFeb7.description}</p>
            </div>
          )}
        </div>
      </section>

      {/* 6. Spring-summer 2024 */}
      <section className="section-block-alt mb-10">
        <div className="flex items-center gap-2 mb-4">
          <FireIcon className="w-5 h-5 text-amber-700" />
          <h2 className="m-0">6. Spring-Summer 2024 Resumption</h2>
        </div>

        <p className="mb-4">
          The KH-led pause held for about ten weeks. Attacks then flared, consistently in small
          volume, through autumn 2024.
        </p>

        <div className="space-y-3">
          {['evt-041', 'evt-042'].map((id) => {
            const e = timelineEvents.find((x) => x.id === id);
            if (!e) return null;
            return (
              <div
                key={e.id}
                className="bg-white border-l-4 border-amber-500 border border-neutral-200 rounded-r-lg p-4"
              >
                <div className="flex items-center justify-between gap-3 mb-1">
                  <h3 className="text-sm font-semibold text-neutral-900 m-0">{e.title}</h3>
                  <span className="text-xs text-neutral-500 whitespace-nowrap">{e.date}</span>
                </div>
                <p className="text-sm text-neutral-700 mb-0">{e.description}</p>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-sm text-neutral-600">
          By late November 2024, CENTCOM publicly disclosed that MSS Conoco had been attacked ~40
          times since October 2023 and Patrol Base Shaddadi had been attacked 22 times —
          illustrating how concentrated the Syria-theater campaign had been.
        </p>
      </section>

      {/* 7. Assad fall / quiet period */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircleIcon className="w-5 h-5 text-emerald-700" />
          <h2 className="m-0">7. Assad&apos;s Fall and the Six-Month Quiet Period</h2>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5 mb-4">
          <h3 className="text-sm font-semibold text-emerald-900 mt-0 mb-2">
            December 8, 2024 — Hayat Tahrir al-Sham seizes Damascus
          </h3>
          <p className="text-sm text-emerald-900 mb-0">
            Iran&apos;s &quot;land bridge&quot; to Hezbollah collapsed; KH and Harakat al-Nujaba
            withdrew forces from Syria to Iraq. The U.S. temporarily roughly doubled its Syria
            footprint (from ~900 to ~2,000) to guard against ISIS resurgence.
          </p>
        </div>

        <p className="text-sm text-neutral-700 mb-4">
          Per multiple open-source reports, Iraqi militias agreed with PM Sudani&apos;s government
          to cease attacks on U.S. forces — and on Israel — following Assad&apos;s collapse. This
          ended the campaign.
        </p>

        <p className="text-sm text-neutral-700 mb-4">
          Per JINSA&apos;s June 2025 projectile tracker, <strong>no confirmed Iraqi-militia
          attacks on U.S. forces occurred between January 20 and May 31, 2025</strong> — a 4.5-
          month window that, together with December 2024, constituted a de facto six-month pause.
          No U.S. retaliatory strikes against Iraqi militias occurred either. Attacks on U.S.
          forces would only resume on <strong>June 14, 2025</strong> — after Israel&apos;s June
          13 Operation Rising Lion — outside this window.
        </p>
      </section>

      {/* 8. Return to attacks + 2026 */}
      <section className="section-block-alt mb-10">
        <div className="flex items-center gap-2 mb-4">
          <ExclamationTriangleIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">8. Return to Attacks and 2026 Designations</h2>
        </div>

        <p className="mb-4">
          Beyond the May 2025 close of this chronicle, attack tempo resumed and Treasury
          escalated designations through April 2026. Notable post-window events:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-sm text-neutral-700">
          <li>
            <strong>June 14, 2025 —</strong> Iraqi-militia attacks on U.S. forces resume after
            Israel&apos;s Operation Rising Lion
          </li>
          <li>
            <strong>March 31, 2026 —</strong> Kata&apos;ib Hezbollah abducts journalist Shelley
            Kittleson from Baghdad&apos;s al-Saadoun Street (released April 7)
          </li>
          <li>
            <strong>March 2026 —</strong> Asa&apos;ib Ahl al-Haqq uses Iranian drones to attack
            U.S. and Coalition forces in northern Iraq (per Treasury sb0458)
          </li>
          <li>
            <strong>April 17, 2026 —</strong> OFAC designates seven Iraqi militia commanders
            (sb0458) across KH, AAH, KSS, HAN
          </li>
        </ul>
      </section>

      {/* 9. Attribution architecture */}
      <section className="section-block mb-10">
        <div className="flex items-center gap-2 mb-4">
          <DocumentMagnifyingGlassIcon className="w-5 h-5 text-neutral-700" />
          <h2 className="m-0">9. Attribution Architecture</h2>
        </div>

        <p className="mb-4">
          The umbrella <strong>Islamic Resistance in Iraq (IRI)</strong> claimed 90%+ of attacks
          via Telegram. U.S. public attribution consistently named:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
          <div className="bg-white border border-neutral-200 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-neutral-900 mt-0 mb-2">
              Principal Operational Groups (all FTOs)
            </h3>
            <ul className="text-xs text-neutral-700 list-disc pl-5 space-y-1 mb-0">
              <li>Kata&apos;ib Hezbollah (KH; FTO since July 2009)</li>
              <li>Harakat Hezbollah al-Nujaba (HAN; FTO Sep 17, 2025)</li>
              <li>Asa&apos;ib Ahl al-Haq (AAH; FTO Jan 3, 2020)</li>
              <li>Kata&apos;ib Sayyid al-Shuhada (KSS; FTO Sep 17, 2025)</li>
              <li>
                Ansar Allah al-Awfiya / 19th PMF Brigade (State Dept designation Jun 17, 2024 for
                Tower 22; FTO Sep 17, 2025)
              </li>
              <li>Kata&apos;ib al-Imam Ali (FTO Sep 17, 2025)</li>
            </ul>
          </div>
          <div className="bg-white border border-neutral-200 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-neutral-900 mt-0 mb-2">
              Facade Brands (Plausible Deniability)
            </h3>
            <ul className="text-xs text-neutral-700 list-disc pl-5 space-y-1 mb-0">
              <li>Tashkil al-Waritheen</li>
              <li>Ashab al-Kahf</li>
              <li>Al-Dhafireen</li>
              <li>Harakat Ansar Allah al-Awfiya (as facade claim vehicle)</li>
              <li>al-Thawriyun (&quot;Revolutionaries&quot;)</li>
              <li>Liwa al-Ghaliboun (Rmelan Mar 23, 2023)</li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-neutral-700 mt-4">
          Iran&apos;s <strong>IRGC Quds Force</strong> armed, funded, trained, and selected
          leadership for all these groups. The U.S. held Iran responsible for the campaign as a
          matter of sponsorship while targeting its retaliation mostly at Iraqi and Syrian
          militia infrastructure rather than Iranian territory or personnel.
        </p>
      </section>

      {/* Navigation */}
      <footer className="mt-12 pt-6 border-t border-neutral-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Link href="/compliance-gap" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Compliance Gap
            </div>
            <div className="text-2xs text-neutral-500">Claim vs. reality</div>
          </Link>
          <Link href="/ata-litigation-landscape" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              ATA Landscape
            </div>
            <div className="text-2xs text-neutral-500">Litigation strategy</div>
          </Link>
          <Link href="/entities" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Key Entities
            </div>
            <div className="text-2xs text-neutral-500">Parties and commanders</div>
          </Link>
          <Link href="/timeline" className="card-hover group">
            <div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-700">
              Full Timeline
            </div>
            <div className="text-2xs text-neutral-500">
              {timelineEvents.length} events
            </div>
          </Link>
        </div>

        <p className="text-2xs text-neutral-400 leading-relaxed mt-6">
          <strong className="text-neutral-500">Disclaimer:</strong> Compiled from USIP Iran
          Primer proxy-attack timeline, Critical Threats (AEI/ISW) Iran Updates, Pentagon
          briefings (BG Pat Ryder, Sabrina Singh), CENTCOM press releases, Lead IG Q4 2023 OIR
          quarterly report, Washington Institute Militia Spotlight, JINSA projectile tracker,
          FDD Long War Journal, State Department designations, DOJ indictments, Washington Post
          investigative reporting, and related primary sources. For legal research, policy
          analysis, and journalism. Does not constitute legal advice.
        </p>
      </footer>
    </article>
  );
}
