'use client';

import { useState } from 'react';
import Link from 'next/link';
import { legalFrameworks, legalPrecedents, damageScenarios } from '@/lib/data/legal';
import { ataHurdles, regulatoryLeverageTheory, atasol } from '@/lib/data/financial';
import { ArrowLeftIcon, ArrowRightIcon, ExclamationCircleIcon, ShieldCheckIcon, ScaleIcon, ClockIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function LegalAnalysisPage() {
  const [activeFramework, setActiveFramework] = useState('ata');
  const currentFramework = legalFrameworks.find(f => f.id === activeFramework);

  return (
    <article className="max-w-prose-wide mx-auto">
      {/* Header */}
      <header className="mb-8">
        <p className="kicker">Legal & Regulatory Analysis</p>
        <h1>Legal Framework for Liability</h1>
        <p className="lead mt-3">
          Three overlapping legal frameworks create potential civil and criminal liability.
        </p>
      </header>

      {/* Framework Tabs */}
      <div className="tab-list mb-8">
        {legalFrameworks.map((framework) => (
          <button
            key={framework.id}
            onClick={() => setActiveFramework(framework.id)}
            className={`tab ${activeFramework === framework.id ? 'tab-active' : ''}`}
          >
            {framework.shortName}
          </button>
        ))}
      </div>

      {/* Active Framework Content */}
      {currentFramework && (
        <section>
          {/* Framework Overview */}
          <div className="section-block mb-6">
            <h2 className="mt-0">{currentFramework.name}</h2>
            <p className="text-neutral-600 mb-4">
              {currentFramework.description}
            </p>

            <div className="prose-editorial">
              {currentFramework.overview.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Key Statutes */}
            <div className="mt-6 pt-4 border-t border-neutral-200">
              <h3 className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-2 mt-0">
                Key Statutes
              </h3>
              <div className="flex flex-wrap gap-2">
                {currentFramework.keyStatutes.map((statute, i) => (
                  <span key={i} className="legal-citation">
                    {statute}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Violations */}
          <div className="section-block-alt mb-6">
            <h2 className="mt-0">Specific Violations</h2>
            
            <div className="space-y-6">
              {currentFramework.violations.map((violation, index) => (
                <div key={violation.id} className="bg-white rounded p-4 shadow-sm">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xs text-neutral-500">
                          {index + 1}/{currentFramework.violations.length}
                        </span>
                        <span className="statute-ref">{violation.statute}</span>
                      </div>
                      <h3 className="text-sm font-medium text-neutral-900 mt-0 mb-0">
                        {violation.name}
                      </h3>
                    </div>
                    {violation.maxPenalty && (
                      <div className="text-right flex-shrink-0">
                        <div className="text-sm font-medium text-red-700">
                          {violation.maxPenalty}
                        </div>
                        <div className="text-2xs text-neutral-500">Max Penalty</div>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 mb-4">
                    {violation.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Elements */}
                    <div>
                      <h4 className="text-2xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
                        Elements of Proof
                      </h4>
                      <ol className="space-y-1 list-decimal list-inside text-sm text-neutral-600">
                        {violation.elements.map((element, i) => (
                          <li key={i} className="pl-1">{element}</li>
                        ))}
                      </ol>
                    </div>

                    {/* Evidence */}
                    <div>
                      <h4 className="text-2xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
                        Supporting Evidence
                      </h4>
                      <ul className="space-y-1 text-sm text-neutral-600">
                        {violation.evidence.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-500 mt-0.5">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Framework-Specific Notes */}
          {currentFramework.id === 'ata' && (
            <div className="callout-warning mb-6">
              <h4 className="text-sm font-semibold text-neutral-800 mb-1">Treble Damages</h4>
              <p className="text-sm text-neutral-600 mb-0">
                Under 18 U.S.C. § 2333(a), successful plaintiffs receive <strong>3× damages</strong> plus 
                attorneys' fees. $100M base → <strong>$300M judgment</strong>.
              </p>
            </div>
          )}

          {currentFramework.id === 'bsa' && (
            <div className="callout mb-6">
              <h4 className="text-sm font-semibold text-neutral-800 mb-1">"Reasonable Design" Standard</h4>
              <p className="text-sm text-neutral-600 mb-0">
                The <strong>2,900% overnight surge</strong> that went undetected demonstrates 
                systems were not designed to catch obvious anomalies—constitutes <em>per se</em> inadequacy.
              </p>
            </div>
          )}

          {currentFramework.id === 'ofac' && (
            <div className="callout-danger mb-6">
              <h4 className="text-sm font-semibold text-red-800 mb-1">Strict Liability</h4>
              <p className="text-sm text-neutral-700 mb-0">
                OFAC penalties are assessed on a <strong>strict liability basis</strong>—intent not required.
                Treasury warnings serve as <strong>aggravating factors</strong> enhancing penalties.
              </p>
            </div>
          )}
        </section>
      )}

      <div className="section-divider"></div>

      {/* Damages */}
      <section className="mb-8">
        <h2>Estimated Exposure</h2>
        <div className="overflow-x-auto rounded-lg border border-neutral-200">
          <table className="data-table">
            <thead>
              <tr>
                <th>Scenario</th>
                <th className="text-right">Total</th>
                <th className="text-right">Per Network</th>
                <th>Assumptions</th>
              </tr>
            </thead>
            <tbody>
              {damageScenarios.map((scenario, index) => (
                <tr key={index}>
                  <td className="font-medium text-neutral-800">{scenario.name}</td>
                  <td className="cell-number text-red-700 font-semibold">{scenario.totalRange}</td>
                  <td className="cell-number text-neutral-600">{scenario.perNetwork}</td>
                  <td className="text-sm text-neutral-500">{scenario.assumptions[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link href="/financial" className="btn btn-secondary mt-4">
          Full Analysis
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </section>

      <div className="section-divider"></div>

      {/* Precedents */}
      <section className="mb-8">
        <h2>Key Precedents</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {legalPrecedents.slice(0, 4).map((precedent) => (
            <div key={precedent.id} className="card-hover">
              <div className="text-2xs text-neutral-500 mb-1">
                {precedent.court} ({precedent.year})
              </div>
              <h3 className="text-sm font-medium text-neutral-900 mt-0 mb-1">
                {precedent.name}
              </h3>
              <p className="statute-ref text-2xs mb-2">{precedent.citation}</p>
              <p className="text-sm text-neutral-600 mb-2">{precedent.summary}</p>
              <div className="flex flex-wrap gap-1">
                {precedent.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="badge badge-neutral">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Link href="/precedents" className="btn btn-secondary mt-4">
          All {legalPrecedents.length} Precedents
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </section>

      {/* Visual Separator */}
      <div className="my-12 flex items-center gap-4">
        <div className="flex-1 h-px bg-neutral-300"></div>
        <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Detailed Analysis</span>
        <div className="flex-1 h-px bg-neutral-300"></div>
      </div>

      {/* Analysis of Compliance Failures */}
      <section className="section-block">
        <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">Analysis of Systemic Anti-Money Laundering Failures and Material Support for IRGC-Backed Militias</h2>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The intersection of globalized financial infrastructure and regional security vulnerabilities has reached a critical juncture in the Iraqi theater, where the utilization of prepaid debit and cash cards branded by Visa and Mastercard became a primary conduit for the financing of militias backed by the Islamic Revolutionary Guard Corps (IRGC) between 2023 and 2025. This memorandum provides an exhaustive analysis of the systemic failure of these global payment networks to adhere to their Anti-Money Laundering (AML) and Counter-Terrorism Financing (CTF) obligations under United States law.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The evidentiary record, synthesized from investigative reporting, Congressional inquiries, and Treasury Department disclosures, indicates that Visa and Mastercard operated with a level of negligence that transcends mere regulatory oversight. Despite an unprecedented surge in transaction volume—documented as a <strong>50-fold increase</strong> in specific segments—and direct warnings from the U.S. Department of the Treasury, these entities delayed necessary interventions for over a year. In doing so, they provided material support to Specially Designated Global Terrorists (SDGTs) and Foreign Terrorist Organizations (FTOs), thereby facilitating the lethal operations of the IRGC-QF and its Iraqi proxies, including Kata'ib Hezbollah and the Popular Mobilization Forces (PMF).
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">The Statistical Imperative: Analysis of the 2023-2025 Transaction Surge</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The fundamental predicate for legal liability in this matter rests upon the explosive and anomalous growth of the prepaid card market in Iraq beginning in early 2023. Prior to this period, cross-border transactions for Visa and Mastercard in the region were characterized by relatively low volume, averaging approximately <strong>$50 million per month</strong>. By April 2023, this figure reached an estimated <strong>$1.5 billion</strong>, representing a <strong>2,900% increase</strong> that occurred almost overnight. This statistical outlier should have immediately triggered enhanced due diligence (EDD) and a systemic review under the "red flag" protocols mandated by the Bank Secrecy Act (BSA), as such a trajectory is fundamentally inconsistent with legitimate organic market growth in a conflict-affected jurisdiction with a high degree of state fragility.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The magnitude of the surge is further highlighted when examining specific card programs. For instance, the Qi Card, which is the most widely held debit card in Iraq and is used to distribute salaries to millions of government workers, saw its monthly transaction volume grow from <strong>$10 million in early 2023 to over $500 million by 2025</strong>. This 50-fold increase within a critical infrastructure program provided a clear indicator that the network was being exploited for purposes far beyond its intended utility of payroll distribution.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">Comparative Growth of the Iraqi Prepaid Card Market</h4>
        
        <div className="overflow-x-auto mb-6">
          <table className="data-table w-full">
            <thead>
              <tr>
                <th className="text-left">Metric</th>
                <th className="text-left">Baseline (Early 2023)</th>
                <th className="text-left">Peak (April 2023 - 2025)</th>
                <th className="text-left">Percentage Increase</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total Cross-Border Transactions</td>
                <td>$50 Million / Month</td>
                <td>$1.5 Billion / Month</td>
                <td><span className="text-red-700 font-semibold">2,900%</span></td>
              </tr>
              <tr>
                <td>Qi Card Monthly Volume</td>
                <td>$10 Million / Month</td>
                <td>$500 Million+ / Month</td>
                <td><span className="text-red-700 font-semibold">4,900% (50-fold)</span></td>
              </tr>
              <tr>
                <td>Estimated Annual Militia Profit</td>
                <td>Negligible</td>
                <td>$450 Million (2023 Only)</td>
                <td>N/A</td>
              </tr>
              <tr>
                <td>Estimated Network Revenue (Combined)</td>
                <td>$1.2 Million / Month</td>
                <td>$120 Million (Total 2023)</td>
                <td><span className="text-red-700 font-semibold">~1,000%</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The financial incentives for the card networks to permit this surge were significant. Mastercard and Visa profited by charging <strong>1% to 1.4% on cross-border transactions</strong>, and in the high-risk Iraqi market, these fees were often higher due to the inherent volatility. It is estimated that the networks collectively captured nearly <strong>$120 million in revenue</strong> from these transactions in 2023 alone. This revenue stream creates a potential conflict of interest, where the networks' fiduciary duty to shareholders to increase transaction volume may have superseded their statutory obligation to mitigate the risk of terrorist financing.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-amber-50 border-l-4 border-amber-400">
          Under the Bank Secrecy Act, financial institutions are required to maintain AML programs that are <strong>"reasonably designed to prevent"</strong> the institution from being used for illicit purposes. The sheer scale of the Iraqi surge suggests that the "reasonably designed" threshold was not met, as the automated interdiction software and manual compliance reviews utilized by the networks failed to flag or halt a multi-billion dollar anomaly in a known FTO theater.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Mechanics of the Militia Financing Loop: Industrial Scale Extraction</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The operational core of the IRGC-backed militias' strategy involved a sophisticated currency arbitrage and smuggling scheme that leveraged the technical architecture of the global payment networks. The scheme exploited the discrepancy between the official Iraqi government-subsidized exchange rate for the U.S. dollar and the unofficial market rate, which expanded significantly in 2023 and 2024 as the U.S. began tightening restrictions on the Iraqi Central Bank's access to dollar auctions.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">The Currency Arbitrage and Smuggling Mechanism</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The mechanism relied on the PMF, Kata'ib Hezbollah (KH), and other IRGC-aligned groups acquiring thousands of prepaid cards through local partner banks of Visa and Mastercard. Many of these banks, such as Yana Banking Services and the Al Saqi Electronic Payment Company, had documented histories of corruption or were directly affiliated with religious and militia foundations.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The circular flow of capital operated as follows: Militia couriers loaded prepaid cards with Iraqi dinars at the official rate (approximately 1,320 dinars to the dollar). These physical cards were then smuggled in bulk to neighboring jurisdictions, primarily the United Arab Emirates (UAE), Turkey, and Jordan. In the UAE, specifically Dubai, couriers would use ATMs to withdraw dollars at the official rate, effectively capturing a <strong>profit margin of up to 21%</strong> based on the black-market rate in Baghdad. Alternatively, "Point-of-Sale (POS) farms" were utilized, where scammers used merchant terminals to simulate legitimate purchases of luxury goods. Merchants would process these fake transactions for a commission, providing the couriers with cash in U.S. dollars or UAE dirhams, which were then repatriated to Iraq through the hawala system or physical smuggling and sold on the black market for a significant markup.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">Revenue Extraction and Repatriation Strategy</h4>
        
        <div className="overflow-x-auto mb-6">
          <table className="data-table w-full">
            <thead>
              <tr>
                <th className="text-left">Component</th>
                <th className="text-left">Description</th>
                <th className="text-left">Relevance to Compliance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Arbitrage Margin</td>
                <td>~21% profit on every dollar cycled</td>
                <td>Incentivized massive transaction volume</td>
              </tr>
              <tr>
                <td>POS Farms</td>
                <td>Large-scale fake merchant transactions</td>
                <td>Indicated failure of merchant vetting</td>
              </tr>
              <tr>
                <td>Bulk Card Smuggling</td>
                <td>Transporting 300+ cards in cigarette packs</td>
                <td>Evidence of physical money laundering</td>
              </tr>
              <tr>
                <td>Hawala Networks</td>
                <td>Informal repatriation of illicit proceeds</td>
                <td>Obfuscated the final destination of funds</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The role of American financial infrastructure in this loop was essential. Without the Visa and Mastercard branding and the global inter-operability of their networks, these prepaid cards would have had no utility outside of Iraq. By signing up Iraqi partners and offering them financial incentives to boost transaction levels, the card giants effectively "fueled the boom" and provided the logistical backbone for the IRGC's regional revenue generation. The fact that <strong>200,000 members of the PMF</strong>, an umbrella organization for militias that have repeatedly attacked U.S. forces, were receiving government salaries via these cards should have been a primary focus of the networks' compliance teams. The failure to cross-reference the payroll data of the Qi Card with the Specially Designated Nationals (SDN) list and other sanctions databases constitutes a material breach of the due diligence requirements mandated by OFAC and FinCEN.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Analysis of Legal Obligations: The Bank Secrecy Act and 31 CFR Chapter X</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          Under the regulatory framework established by the Bank Secrecy Act (BSA) and codified in 31 CFR Chapter X, Visa and Mastercard are classified as <strong>"operators of credit card systems"</strong> and, as such, are defined as financial institutions with affirmative duties to detect, prevent, and report money laundering and terrorist financing.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">The "Four Pillars" of AML Compliance in High-Risk Jurisdictions</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          To comply with the BSA, an operator of a credit card system must maintain an AML program that incorporates four essential components, often referred to as the "Four Pillars":
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-1">1. Internal Controls</p>
            <p className="text-neutral-700 text-sm">Policies, procedures, and controls</p>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-1">2. Compliance Officer</p>
            <p className="text-neutral-700 text-sm">A designated compliance officer</p>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-1">3. Training Program</p>
            <p className="text-neutral-700 text-sm">An ongoing training program</p>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-1">4. Independent Testing</p>
            <p className="text-neutral-700 text-sm">Independent testing of the program</p>
          </div>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          In the context of Iraq—a jurisdiction the Treasury Department has repeatedly identified as a conduit for Iranian illicit finance—the "internal controls" pillar required the card networks to implement transaction monitoring systems capable of identifying the "industrial scale" extraction of dollars. The failure of these controls is evident in the fact that the networks permitted transactions to reach $1.5 billion per month despite the existence of numerous "red flags." Under FinCEN guidance, a statistical anomaly of this magnitude in a conflict zone is a <em>per se</em> indicator of suspicious activity. Furthermore, the networks had an obligation to vet their partner banks. For example, a Mastercard compliance review of Yana Banking Services in August 2023 revealed a total absence of customer risk ratings and ineffective money laundering guardrails. Despite these findings, the card companies reportedly took months to rein in transactions, suggesting that their commitment to compliance was secondary to the revenue generated by the high volume of cross-border fees.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">Suspicious Activity Reporting (SAR) Requirements</h4>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">31 U.S.C. § 5318(g) - SAR Filing Obligation:</p>
          <p className="text-neutral-700">
            A SAR must be filed for any transaction involving or aggregating to <strong>$5,000 or more</strong> that the institution "knows, suspects, or has reason to suspect" involves funds derived from illegal activity or is intended to hide or disguise such funds.
          </p>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-red-50 border-l-4 border-red-400">
          The discovery of massive "POS farms" and the use of VPNs to hide the location of transactions are classic typologies of money laundering that should have resulted in a flood of SAR filings by the networks. However, the Congressional inquiry led by Representatives Joe Wilson and Greg Steube suggests that the card companies failed to act on these red flags until they were directly confronted by Treasury officials. The failure to file timely SARs on a multi-billion dollar volume of transactions tied to sanctioned militias constitutes a material violation of federal law and subjects the networks to significant civil and criminal penalties under <strong>31 U.S.C. § 5321 and § 5322</strong>.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Material Support for Terrorism and 18 U.S.C. § 2339B</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The most severe legal implication for Visa and Mastercard arises from the potential violation of <strong>18 U.S.C. § 2339B</strong>, which prohibits the "knowing" provision of "material support or resources" to a designated Foreign Terrorist Organization (FTO).
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">The FTO Designation of the IRGC and Its Proxies</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The Islamic Revolutionary Guard Corps (IRGC), including its elite Quds Force (IRGC-QF), was designated as an FTO on April 8, 2019. This designation was a watershed moment in U.S. counter-terrorism policy, as it brought the economic activities of a major military and political organization under the purview of the material support statutes. Furthermore, multiple Iraqi militias that benefited from the card scheme, such as Kata'ib Hezbollah and Asa'ib Ahl al-Haq, have been designated as FTOs and Specially Designated Global Terrorists (SDGTs).
        </p>
        
        <div className="overflow-x-auto mb-6">
          <table className="data-table w-full">
            <thead>
              <tr>
                <th className="text-left">Designated Entity</th>
                <th className="text-left">Type of Designation</th>
                <th className="text-left">Date of Designation</th>
                <th className="text-left">Legal Authority</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IRGC / IRGC-QF</td>
                <td>FTO and SDGT</td>
                <td>April 8, 2019 / Oct 25, 2007</td>
                <td>INA § 219 / E.O. 13224</td>
              </tr>
              <tr>
                <td>Kata'ib Hezbollah (KH)</td>
                <td>FTO and SDGT</td>
                <td>July 2, 2009</td>
                <td>INA § 219 / E.O. 13224</td>
              </tr>
              <tr>
                <td>Asa'ib Ahl al-Haq (AAH)</td>
                <td>FTO and SDGT</td>
                <td>Jan 3, 2020</td>
                <td>INA § 219 / E.O. 13224</td>
              </tr>
              <tr>
                <td>Al-Nujaba</td>
                <td>Terrorist Organization</td>
                <td>Early 2020s</td>
                <td>Executive Action</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The law defines "material support" broadly to include <strong>"financial services"</strong> and <strong>"monetary instruments"</strong>. By providing the infrastructure and branding that allowed these militias to convert Iraqi dinars into U.S. dollars and repatriate the proceeds, Visa and Mastercard provided a critical financial service to FTOs.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">The "Knowing" Requirement and the Doctrine of Willful Blindness</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          A violation of § 2339B requires that the defendant "knowingly" provided support. Supreme Court jurisprudence, most notably in <em>Holder v. Humanitarian Law Project</em>, establishes that the government need only prove that the defendant knew the organization was a designated FTO or had engaged in terrorist activity; the government does not need to prove that the defendant intended to further the organization's specific terrorist goals.
        </p>
        
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-6">
          <p className="font-semibold text-red-900 mb-2">Willful Blindness Standard:</p>
          <p className="text-red-800">
            In the case of Visa and Mastercard, the "knowing" requirement is established through the doctrine of <strong>willful blindness or deliberate indifference</strong>. If the networks were informed by the U.S. Treasury in the fall of 2023 regarding the militias' exploitation of their systems and yet "took months to significantly rein in the transactions," they meet the threshold for willful blindness. By consciously avoiding the confirmation of the source of funds in the Iraqi prepaid card market while continuing to collect transaction fees, the companies provided a lifeline to the IRGC's regional operations. As noted by legal experts at Skadden and Hogan Lovells, willful blindness is no defense under the material support statutes; if an institution "should have known" and failed to investigate, it remains liable for the support provided.
          </p>
        </div>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Congressional and Executive Intervention: The Push for Accountability</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The scale of the Iraqi militia funding scheme has triggered a robust response from both the legislative and executive branches, framing the failure of the card networks as a significant national security threat.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">The Wilson-Steube and Durbin Inquiries</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          Members of Congress have correctly identified that a poorly regulated Iraqi financial sector, coupled with the negligence of American financial services firms, has undermined the U.S. policy of "Maximum Pressure" on the Iranian regime. On February 7, 2025, Representatives Joe Wilson and Greg Steube addressed a letter to the State Department and National Security Advisor calling for immediate sanctions against the Iraqi banks and individuals facilitating this laundering. Their letter explicitly highlighted the role of the Qi Card and Al-Rafidain bank in processing payroll for PMF members, urging the administration to sever these entities from the global financial system.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          Simultaneously, Senator Dick Durbin, Chair of the Senate Judiciary Committee, has used the Iraqi scandal to highlight the risks inherent in the Visa and Mastercard "duopoly". During hearings on credit card competition, it was argued that the lack of market competition has allowed the two giants to become <strong>"too big to comply,"</strong> leading them to ignore fraud and security risks that a more competitive market would naturally mitigate. The Durbin inquiry suggests that the networks' failure in Iraq is symptomatic of a broader structural issue where market power enables a tolerance for illicit activity as long as transaction volume remains high.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">The Trump Administration's 2025 Maximum Pressure Reconstitution</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The 2025 National Security Presidential Memorandum issued by President Donald Trump aimed to restore maximum economic pressure on Iran, specifically targeting the "shadow banking" schemes used to evade sanctions. This executive action was informed by the realization that Iranian proxies had successfully extracted billions of dollars from the formal financial system through the Iraqi card scheme. The Treasury Department's subsequent blacklisting of multiple Iraqi card issuers in January 2025, followed by Mastercard and Visa's belated blocking of 170,000 cards in the spring of 2025, represents a desperate attempt to close a loophole that remained open for nearly two years after it was first identified.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Civil Liability Under the Anti-Terrorism Act (ATA)</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          Beyond criminal and regulatory penalties, Visa and Mastercard face substantial civil risk under the Anti-Terrorism Act (ATA), <strong>18 U.S.C. § 2333</strong>, which provides a private right of action for U.S. nationals injured by acts of international terrorism.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">The Link to U.S. Casualties and Proximate Cause</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          Militias such as Kata'ib Hezbollah, which were major beneficiaries of the card scheme, have been directly implicated in the killing of American service members. For example, in January 2024, a drone attack by a PMF faction <strong>killed three U.S. troops at Tower 22 in Jordan</strong>. The ATA allows victims and their families to sue "any person who aids and abets, by knowingly providing substantial assistance," an act of international terrorism committed by an FTO.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-amber-50 border-l-4 border-amber-400">
          While the Supreme Court in <em>Twitter v. Taamneh</em> heightened the pleading standard for aiding and abetting liability, it did so in the context of "passive" social media algorithms. Financial services, by contrast, are categorized as a specific type of "material support" in the underlying criminal statutes. In the Iraqi case, the assistance provided by Visa and Mastercard was <strong>"pervasive" and "systemic,"</strong> involving the processing of billions of dollars for groups known to be attacking U.S. targets. Under the "sliding scale" of liability discussed in current legal scholarship, a weaker showing of specific intent can be offset by a stronger showing of the level of assistance provided. Given the "industrial scale" of the extraction and the 18-month delay in reining in the transactions after government warnings, a court could reasonably conclude that the networks' participation was <strong>"conscious, voluntary, and culpable"</strong>.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">Comparison with Contemporary 2025 FTO Litigation</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The legal landscape in 2025 has seen an increase in ATA lawsuits against corporations, including actions against telecommunications firms for protection payments and cryptocurrency exchanges for facilitating Hamas-linked transactions. The 2025 designation of eight transnational cartels as FTOs has further expanded the enforcement perimeter, as financial institutions are now held to the same "material support" standards for dealings with organized crime as they are for dealings with traditional terrorist groups. This trend suggests that the judicial system is becoming increasingly less tolerant of the "routine financial services" defense when such services are provided in the face of obvious illicit patterns.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">The Geopolitical Context: Regional Escalation and the Need for Financial Interdiction</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The failure to halt the Iraqi card scheme must be viewed through the lens of the broader conflict between the United States and the Iranian regime. Throughout 2025, the region saw a significant escalation, including Israeli strikes on Iranian nuclear and missile facilities and retaliatory threats against shipping in the Strait of Hormuz. The ability of IRGC-backed militias to access billions of dollars in liquidity through the payment networks provided them with the resources necessary to sustain their "Axis of Resistance" during a period of extreme military pressure.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The Treasury Department's June 2025 announcement regarding the designation of a network laundering billions through "shadow banking" confirms that the regime continues to view the international financial system as a primary theater of operations. By failing to act as a robust first line of defense, Visa and Mastercard allowed the financial strength of these groups to remain intact even as their military infrastructure was being degraded by airstrikes. The "unconditional surrender" called for by the U.S. administration in 2025 is predicated on the total financial isolation of the Iranian regime; a goal that is unattainable as long as global payment giants permit the continued exploitation of their networks by militia-aligned banks.
        </p>

        <h2 className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-6">Conclusion: The Case for Material Support and Systemic Reform</h2>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The synthesis of the Wall Street Journal's investigative findings, Congressional inquiries, and Treasury Department disclosures leads to the inescapable conclusion that Visa and Mastercard violated their fundamental AML obligations. The 50-fold surge in transaction volume was a clarion call for intervention that was ignored in favor of capturing transaction fees. By providing the logistical and financial infrastructure for a currency arbitrage scheme that funneled $1.5 billion per month into a conflict zone, the card networks provided material support to FTOs that are directly responsible for the deaths of American service members.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The legal argument for a violation of <strong>18 U.S.C. § 2339B</strong> is established through the companies' failure to act for over a year following formal Treasury warnings—a delay that constitutes willful blindness and culpable participation. Furthermore, the lack of due diligence regarding partner banks like the Qi Card and Yana Banking Services demonstrates a failure to meet the "Four Pillars" of the Bank Secrecy Act.
        </p>
        
        <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-lg">
          <p className="text-neutral-800 leading-relaxed mb-4">
            To mitigate these risks in the future, the global financial industry must move beyond reactive compliance. The Iraqi scandal proves that <strong>"waiting for a sanction"</strong> is an insufficient strategy in high-risk zones. Instead, the networks must implement <strong>proactive, statistical triggers</strong> for jurisdictional volume surges and maintain a more transparent dialogue with national security agencies.
          </p>
          <p className="text-neutral-800 leading-relaxed">
            The cost of their failure in this instance is measured not only in the hundreds of millions of dollars in illicit profits generated by IRGC militias but in the continued destabilization of the Iraqi state and the loss of American lives in the region. The path forward requires a re-evaluation of the legal immunities traditionally granted to "routine" financial services, ensuring that when those services become the lifeline for international terrorism, the providers are held to the highest standard of accountability under both civil and criminal law.
          </p>
        </div>
      </section>

      {/* Visual Separator */}
      <div className="my-12 flex items-center gap-4">
        <div className="flex-1 h-px bg-neutral-300"></div>
        <span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Regulatory Framework Analysis</span>
        <div className="flex-1 h-px bg-neutral-300"></div>
      </div>

      {/* Regulatory Framework Analysis */}
      <section className="section-block">
        <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">Geopolitical Risk and Regulatory Failure: Why Internal Controls Failed</h2>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The global financial system relies on a complex architecture of oversight intended to prevent the exploitation of cross-border payment networks by sanctioned actors and terrorist organizations. In early 2023, this architecture faced a systemic challenge in Iraq, where a massive statistical anomaly in transaction volumes signaled a rapid shift in the methods used by Iran-backed militias to access U.S. dollars. Between January and April 2023, cross-border transaction volumes on Visa and Mastercard networks in Iraq exploded from approximately <strong>$50 million per month to a staggering $1.5 billion</strong>—a nearly <strong>2,900% increase</strong> that occurred almost overnight.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          This report reconstructs the timeline of the subsequent intervention by the U.S. Department of the Treasury and the Federal Reserve Bank of New York (FRBNY) and provides a rigorous analysis of why this anomaly did not trigger an immediate suspension of service under the internal controls requirements mandated by <strong>31 CFR § 1028.210</strong>.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">The Structural Origins of the Transaction Anomaly</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          To analyze the 2023 surge, it is necessary to examine the broader historical and regulatory context of the Iraqi financial sector. For more than a decade, the system established during the U.S. occupation of Iraq contained inherent flaws that allowed for the systematic siphoning of U.S. dollars. The primary mechanism for this was the international wire transaction system used by Iraqi banks, which lacked sufficient money-laundering safeguards and allowed Iran and its proxy militias to access billions of dollars annually.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          In late 2022, the U.S. Treasury and the Federal Reserve Bank of New York intervened to shut down this "gaping loophole" by imposing strict vetting requirements on international wire transfers processed through the Central Bank of Iraq (CBI). This regulatory tightening forced illicit actors to seek alternative conduits for dollar acquisition. Simultaneously, the Iraqi government was attempting to modernize its economy by promoting digital payments and electronic points of sale (POS). In early 2023, the CBI permitted cross-border payments via debit and prepaid cards at the official exchange rate of 1,320 Iraqi dinars to the dollar, which was significantly more favorable than the parallel market rate.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-amber-50 border-l-4 border-amber-400">
          This policy convergence created the perfect conditions for a massive currency arbitrage scheme. Militia groups, including Kataib Hezbollah, the Badr Brigade, and Asaib Ahl al-Haq, quickly pivoted to exploit the gap between the official and black-market exchange rates. By acquiring thousands of prepaid cards, loading them with dinars at the official rate, and withdrawing dollars abroad, these groups generated industrial-scale profits to finance weapons procurement and terror operations.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">Comparative Transaction Volume Growth in the Iraqi Market (2023)</h4>
        
        <div className="overflow-x-auto mb-6">
          <table className="data-table w-full">
            <thead>
              <tr>
                <th className="text-left">Time Period</th>
                <th className="text-left">Monthly Volume (USD)</th>
                <th className="text-left">Percentage Increase</th>
                <th className="text-left">Primary Transaction Method</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>January 2023</td>
                <td>$50,000,000</td>
                <td>Baseline</td>
                <td>Retail/Legitimate Use</td>
              </tr>
              <tr>
                <td>February 2023</td>
                <td>$350,000,000</td>
                <td><span className="text-amber-700 font-medium">600%</span></td>
                <td>Early Arbitrage Adoption</td>
              </tr>
              <tr>
                <td>March 2023</td>
                <td>$900,000,000</td>
                <td><span className="text-red-700 font-medium">1,700%</span></td>
                <td>Militia-Led Industrial Scale</td>
              </tr>
              <tr>
                <td>April 2023</td>
                <td>$1,500,000,000</td>
                <td><span className="text-red-700 font-semibold">2,900%</span></td>
                <td>Peak Exploitation Phase</td>
              </tr>
              <tr className="bg-amber-50">
                <td>May 2023 (Intervention)</td>
                <td>$1,500,000,000</td>
                <td>2,900%</td>
                <td><strong>Formal Flagging by Treasury/Fed</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Reconstructing the Intervention Timeline</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The intervention by U.S. officials followed a trajectory from initial data observation to formal documentation and, eventually, a significant regulatory crackdown. The timeline reveals a persistent gap between the detection of the statistical anomaly and the implementation of restrictive measures by the card networks.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">Phase I: Detection and Initial Flagging (May 2023)</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          In May 2023, officials from the Federal Reserve Bank of New York and the Department of the Treasury first formally flagged the rising transaction volumes to Visa and Mastercard. During this period, the anomaly had reached its peak of $1.5 billion monthly. The intervention initially took the form of inquiries directed at the card companies to explain the unprecedented surge in the Iraqi market.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          U.S. and Iraqi officials later noted that these initial warnings went <strong>"mostly unheeded for months"</strong>. The card networks reportedly attributed the growth to the success of the CBI's digitization efforts and the expansion of electronic payment culture in Iraq. At this stage, the companies argued that transaction spikes were a natural outcome of bringing a cash-heavy economy into the formal financial sector.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">Phase II: Documentation and Evidence Sharing (Fall 2023)</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          By the fall of 2023, the U.S. Treasury provided <strong>"concrete documentation"</strong> to the card networks regarding the involvement of armed groups in the scheme. This evidence detailed how Iraqi militias were acquiring huge quantities of cards, transporting them to the United Arab Emirates (UAE) and other neighboring countries, and withdrawing cash to be returned to Iraq for black-market conversion.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The Treasury estimated that Iraqi cardholders participating in the scheme made approximately <strong>$450 million in profit in 2023 alone</strong>. Simultaneously, Visa and Mastercard were estimated to have collected nearly <strong>$120 million in transaction fees</strong> from these activities, creating a profit incentive that potentially complicated the immediate suspension of services.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">Phase III: Loophole Expansion and "Visa Direct" (Early 2024)</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          As the Treasury and the Fed continued their oversight, new vulnerabilities emerged. In early 2024, Baghdad's First Iraqi Bank launched "Visa Direct," a service intended for real-time person-to-person transfers. The service was immediately co-opted; in just ten weeks, cardholders sent <strong>$1.2 billion overseas</strong>. Forensic analysis revealed extreme cases, such as a single account holder transferring more than <strong>$5 million a day to 11 different accounts in Indonesia</strong>.
        </p>
        
        <div className="callout-danger mb-6">
          <p className="font-medium text-red-900 mb-1">Critical Delay</p>
          <p className="text-red-800">Despite the Federal Reserve and Treasury raising immediate concerns, it took <strong>ten weeks</strong> for Visa to suspend the service—allowing $1.2 billion in suspicious transfers to complete.</p>
        </div>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">Phase IV: Coordinated Crackdown (2025)</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The most significant enforcement actions did not occur until early 2025, nearly two years after the initial flagging. In <strong>March 2025</strong>, Mastercard blocked over 100,000 Iraqi-issued cards and delisted 4,000 merchants in the UAE who were identified as complicit in processing fake purchases for cash extraction. In <strong>April 2025</strong>, Visa followed by flagging 70,000 cards and blocking approximately 5,000 UAE-based vendors.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          In late May 2025, the U.S. Treasury formally requested that the Central Bank of Iraq block more than <strong>200,000 specific cards</strong> issued to militia members, specifically targeting those distributed via the Qi Card system to members of the Popular Mobilization Forces (PMF). Treasury Secretary Scott Bessent characterized the groups involved as a <strong>"clandestine network of financial facilitators"</strong>.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Analysis of 31 CFR § 1028.210 and Internal Control Failures</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The central regulatory question is why a 2,900% increase in transaction volume did not trigger an immediate, automated suspension under the "internal controls" requirements of <strong>31 CFR § 1028.210</strong>. This regulation mandates that operators of credit card systems develop and implement a written anti-money laundering (AML) program reasonably designed to prevent the system from being used for money laundering or terrorist financing.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">The Mechanics of 31 CFR § 1028.210</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-4">The regulation stipulates four "pillars" of compliance that card networks must maintain:</p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-1">1. Policies, Procedures, and Internal Controls</p>
            <p className="text-neutral-700 text-sm">Must be designed to ensure that the operator does not maintain authorization for any person to serve as an issuing or acquiring institution without taking "appropriate steps" to guard against money laundering and terrorist financing.</p>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-1">2. Compliance Officer Designation</p>
            <p className="text-neutral-700 text-sm">A designated individual is responsible for ensuring the program is implemented effectively and updated to reflect changes in risk factors.</p>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-1">3. Ongoing Training</p>
            <p className="text-neutral-700 text-sm">Appropriate personnel must be trained to identify red flags and understand their regulatory responsibilities.</p>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-1">4. Independent Audit</p>
            <p className="text-neutral-700 text-sm">The program must be subject to an independent audit, the scope and frequency of which must be commensurate with the risks posed by the system's participants.</p>
          </div>
        </div>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">Legal Interpretation of the "Reasonably Designed" Standard</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The primary reason for the lack of immediate suspension lies in the legal interpretation of what constitutes a <strong>"reasonably designed"</strong> program. Under 31 CFR § 1028.210(a), the standard is one of <em>process</em> rather than <em>outcome</em>. As long as an operator has established risk-based procedures, the occurrence of a massive anomaly does not automatically prove a violation of the rule if the operator can argue that the anomaly was initially consistent with its internal risk assessments.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-amber-50 border-l-4 border-amber-400">
          In the case of Iraq, the card networks could point to the CBI's official policy to digitize the economy as a plausible explanation for the surge. Because the growth was sanctioned by the host country's central bank, the "internal controls" of the card operators were not necessarily calibrated to treat the spike as a <em>per se</em> violation, but rather as an expansion of a high-risk but legitimate market.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">The Problem of "Heightened Risk" Presumptions</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          Section 1028.210(b)(1)(ii) provides a list of entities and jurisdictions that are presumed to pose a heightened risk, including those on the Specially Designated Nationals (SDN) List and those identified as state sponsors of terrorism. However, the Iraqi card issuers that partnered with Visa and Mastercard—such as Al-Saqi, First Iraqi Bank, and various PMF-linked entities—<strong>were not initially under U.S. sanctions at the time of the 2023 spike</strong>.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The regulation requires "appropriate steps" to guard against illicit use, but does not define what those steps must be when the participants are not on a formal blacklist. Consequently, the card companies had the legal latitude to continue processing transactions until they were provided with the "concrete documentation" from the Treasury that linked the ostensibly legitimate cardholders to the sanctioned militia groups.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">Mathematical Analysis of Profit Arbitrage as a "Red Flag"</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The scale of the profit motive for the militias can be quantified to demonstrate the magnitude of the signal that the internal controls failed to act upon. The profit margin was driven by the spread between the official exchange rate (R<sub>official</sub>) and the parallel market rate (R<sub>parallel</sub>).
        </p>
        
        <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg mb-4">
          <p className="font-semibold text-neutral-900 mb-2">Profit Percentage Formula:</p>
          <p className="font-mono text-neutral-700 mb-3">P = (R<sub>parallel</sub> / R<sub>official</sub> − 1) × 100</p>
          <p className="text-neutral-700 mb-2">At the height of the 2023 surge, the rates were approximately:</p>
          <ul className="list-disc list-inside text-neutral-700 mb-2">
            <li>Parallel market rate: ~1,600 dinars per dollar</li>
            <li>Official rate: 1,320 dinars per dollar</li>
          </ul>
          <p className="font-mono text-neutral-700 mb-2">P = (1600 / 1320 − 1) × 100 ≈ <strong className="text-red-700">21.2%</strong></p>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-red-50 border-l-4 border-red-400">
          For a transaction volume of $1.5 billion per month, the total illicit profit generated for the "clandestine network" was roughly <strong>$318 million monthly</strong>. From the perspective of 31 CFR § 1028.210, a profit incentive of over 20% for currency arbitrage is a classic "red flag" of money laundering. However, the internal controls of the card networks were primarily designed to detect traditional fraud (e.g., identity theft or stolen cards) rather than systemic geopolitical exploitation of exchange rate policies.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">The Role of Profit Incentives and Regulatory Capture</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          A critical component in the delayed response was the financial benefit accrued by the card networks during the surge. Mastercard and Visa charge between 1% and 1.4% on cross-border transactions, and even more in high-risk markets.
        </p>
        
        <div className="overflow-x-auto mb-6">
          <table className="data-table w-full">
            <thead>
              <tr>
                <th className="text-left">Metric</th>
                <th className="text-left">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Peak Monthly Volume</td>
                <td><strong>$1,500,000,000</strong></td>
              </tr>
              <tr>
                <td>Average Transaction Fee</td>
                <td>1.2%</td>
              </tr>
              <tr>
                <td>Estimated Monthly Network Revenue</td>
                <td><strong>$18,000,000</strong></td>
              </tr>
              <tr className="bg-amber-50">
                <td>Estimated Total 2023 Network Profit (Iraq)</td>
                <td><strong className="text-red-700">$120,000,000</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          This $120 million in profit created a conflict of interest that may have incentivized a "wait-and-see" approach. Industry analysts have argued that the duopoly status of Visa and Mastercard allows them to manage regulatory risk through engagement rather than immediate compliance-driven shutdowns. Because no public allegation was made that the companies violated sanctions—as the partner banks were not yet blacklisted—there was no immediate legal consequence for continuing to profit from the "industrial scale" exploitation until the Treasury forced their hand.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Operational Tactics of the Militia Groups</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The militias utilized highly sophisticated and organized methods to facilitate the transaction surge. Understanding these tactics is essential for evaluating why internal controls, which typically look for anomalous individual behavior, failed to stop a coordinated systemic attack.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">Smuggling and Physical Distribution</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          Militia members and their families were issued cards in bulk. These cards were then physically transported across borders. In one notable incident, a traveler at the airport in Najaf was arrested with <strong>300 cards hidden in cigarette packs</strong>. In other cases, Iraqi and Iranian nationals were caught smuggling Mastercards into Iran to provide the sanctioned regime with a direct link to the U.S. dollar.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">Merchant Arbitrage in the UAE</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The groups established relationships with merchants in neighboring countries, particularly in the UAE. These merchants would process fake high-value "purchases" on Iraqi cards in exchange for a commission. The merchant would then provide the cardholders with cash, which could be physically returned to Iraq.
        </p>
        
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-6">
          <p className="font-semibold text-red-900 mb-2">Statistical Anomaly:</p>
          <p className="text-red-800">
            Data confirmed the scale of this activity: in 2024, Iraqi debit and cash cards were used in <strong>20% of all foreign card transactions in the UAE</strong>, despite Iraqi travelers accounting for <strong>only 0.4%</strong> of total visitors to the country—a <strong>50x overrepresentation</strong>.
          </p>
        </div>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">Exploitation of "Visa Direct"</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The rapid launch of "Visa Direct" through First Iraqi Bank in early 2024 demonstrated how militias could adapt to new financial technologies faster than regulators could monitor them. By using real-time transfers, the groups bypassed the physical risk of smuggling cards across borders. The transfer of $1.2 billion in just two months to accounts in remote jurisdictions like Indonesia illustrates the use of "mule" accounts on a global scale.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Evolution of the Regulatory Response (2024–2025)</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          As the scale of the fraud became undeniable, the Central Bank of Iraq, under intense pressure from the U.S. Treasury and the FRBNY, began to implement structural barriers to the arbitrage scheme.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">Measures Implemented by the Central Bank of Iraq</h4>
        
        <div className="overflow-x-auto mb-6">
          <table className="data-table w-full">
            <thead>
              <tr>
                <th className="text-left">Policy Change</th>
                <th className="text-left">Date of Implementation</th>
                <th className="text-left">Objective</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly Transaction Cap</td>
                <td>Late 2024 / Early 2025</td>
                <td>Limit total market volume to <strong>$300 million</strong></td>
              </tr>
              <tr>
                <td>Individual Card Limit</td>
                <td>Early 2025</td>
                <td>Restrict single cards to <strong>$5,000 per month</strong></td>
              </tr>
              <tr>
                <td>Issuer-Bank Nexus</td>
                <td>Early 2025</td>
                <td>Require card issuers to be tied to banks with U.S. correspondent accounts</td>
              </tr>
              <tr>
                <td>Hiring of K2 Consulting</td>
                <td>2024</td>
                <td>Forensic audit and guidance on AML system design</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="text-neutral-700 leading-relaxed mb-6 p-4 bg-amber-50 border-l-4 border-amber-400">
          These measures were designed to rectify the "flaws" in the system created during the occupation era. By capping the total market volume at $300 million—down from the $1.5 billion peak—the CBI effectively acknowledged that <strong>$1.2 billion of the monthly volume in 2023 was likely fraudulent</strong>.
        </p>

        <h3 className="font-serif text-xl font-semibold text-neutral-900 mt-8 mb-4">Third-Order Insights: The Geopolitical and Economic Ripple Effects</h3>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The 2023 Iraqi transaction surge is more than a case of financial fraud; it represents a major tactical shift in the "shadow banking" networks used by the Iranian regime and its regional proxies.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">The Paradox of Economic Digitization</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The event reveals a profound paradox in the development of financial infrastructure in fragile states. The same tools intended to increase transparency—such as POS devices and debit cards—became the primary instruments of sanctions evasion. When the U.S. closed the wire transfer loophole, it expected to starve the militias of dollars. Instead, the militias co-opted the digitization of the economy to create a more decentralized and harder-to-track cash pipeline.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">The Limits of Network-Level Oversight</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The failure of 31 CFR § 1028.210 internal controls suggests that network-level oversight is fundamentally ill-equipped to handle state-sponsored or militia-driven financial warfare. Card networks are optimized to detect "anomalies" based on historical individual spending patterns. They are <strong>not optimized to detect a 2,900% market-wide spike</strong> that is supported by the regulatory environment of the host country. In this case, the anomaly was not "fraud" in the traditional sense of a stolen identity; it was a legitimate use of a card for an illicit geopolitical purpose.
        </p>

        <h4 className="font-semibold text-neutral-900 mt-6 mb-3">Preservation of the U.S. Dollar's Strength</h4>
        
        <p className="text-neutral-700 leading-relaxed mb-6">
          The Treasury's ultimate motivation for the intervention, as noted by a department spokeswoman, was to <strong>"preserve the strength of the U.S. dollar"</strong>. By allowing hundreds of millions of dollars to be siphoned via arbitrage monthly, the scheme was devaluing the dollar's role in Iraq and effectively forcing U.S. taxpayers to subsidize the operations of groups that were simultaneously attacking American forces in the region.
        </p>

        <h2 className="font-serif text-2xl font-bold text-neutral-900 mt-12 mb-6">Synthesis: Regulatory and Operational Failures</h2>
        
        <p className="text-neutral-700 leading-relaxed mb-4">
          The reconstruction of the May 2023 intervention and the subsequent analysis of 31 CFR § 1028.210 leads to several nuanced conclusions regarding the failure to immediately suspend services:
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">1. Reactive Framework</p>
            <p className="text-neutral-700 text-sm">The regulatory framework of 31 CFR § 1028.210 is inherently reactive. The requirement for a "reasonably designed" program allows operators to maintain high-volume, high-profit markets as long as they can point to legitimate local government policies as the cause of growth.</p>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">2. Profit Motive Conflict</p>
            <p className="text-neutral-700 text-sm">The profit motive for Visa and Mastercard—estimated at $120 million in 2023—created a significant hurdle for voluntary suspension in the absence of a direct mandate from the Treasury.</p>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <p className="font-semibold text-neutral-900 mb-2">3. Geopolitical Blindness</p>
            <p className="text-neutral-700 text-sm">The "internal controls" of the card networks were blind to the geopolitical context of the anomaly. While the volume surge was statistically impossible to ignore, it did not fit the traditional profile of consumer fraud.</p>
          </div>
        </div>
        
        <div className="p-6 bg-neutral-50 border border-neutral-200 rounded-lg">
          <p className="text-neutral-800 leading-relaxed mb-4">
            Ultimately, the 2,900% spike was a symptom of a broader strategic competition between the U.S. financial system and Iran's regional proxies. The move from wire transfers to "Visa Direct" and smuggled Mastercards demonstrates the <strong>extreme agility of sanctioned actors</strong> in exploiting the friction between global payment standards and local economic realities.
          </p>
          <p className="text-neutral-800 leading-relaxed">
            The intervention of 2023–2025 highlights the necessity for a <strong>modernization of 31 CFR § 1028.210</strong> to include mandates for real-time monitoring of systemic, market-wide anomalies that transcend individual cardholder behavior.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LITIGATION STRATEGY & HURDLES (Research 3 integration)         */}
      {/* ============================================================ */}

      <section className="section-block mt-12 mb-10">
        <div className="flex items-center gap-2 mb-4">
          <ScaleIcon className="w-6 h-6 text-neutral-700" />
          <h2 className="font-serif text-2xl font-bold text-neutral-900 m-0">
            Litigation Strategy &amp; Hurdles
          </h2>
        </div>

        <p className="lead mt-3 mb-6">
          An honest doctrinal assessment for the lawfirm. The ATA pathway faces four compounding
          hurdles — but a careful complaint mirroring <em>Atchley</em> / <em>Zobay</em> /
          <em>Raanan</em> has a plausible route through, and the regulatory + securities +
          public-pressure leverage is strong even if the ATA case does not reach trial.
        </p>

        {/* Four hurdles */}
        <div className="flex items-center gap-2 mb-3">
          <ExclamationCircleIcon className="w-5 h-5 text-red-700" />
          <h3 className="font-serif text-xl font-bold text-neutral-900 m-0">
            The Four Compounding Hurdles for a Direct ATA Complaint
          </h3>
        </div>
        <p className="text-neutral-700 mb-4">
          A hypothetical complaint alleging that card networks processed payments to Iraqi
          Shi&apos;a militia groups faces four compounding hurdles. Each is summarized below with
          its plaintiff counter.
        </p>

        <div className="space-y-3 mb-8">
          {ataHurdles.map((h, idx) => (
            <div
              key={h.id}
              className="bg-white border border-neutral-200 rounded-lg overflow-hidden"
            >
              <div className="flex items-start gap-3 p-4 border-b border-neutral-200 bg-red-50">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-red-200 text-red-900 font-semibold text-sm flex-shrink-0">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-red-900 mb-1 mt-0">{h.name}</p>
                  <p className="text-xs text-red-800 mb-0">{h.doctrine}</p>
                </div>
              </div>
              <div className="p-4 bg-emerald-50">
                <p className="text-xs font-semibold text-emerald-900 mb-1">OUR COUNTER</p>
                <p className="text-sm text-emerald-900 mb-0">{h.plaintiffCounter}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Three-pillar settlement leverage */}
        <div className="flex items-center gap-2 mb-3">
          <ShieldCheckIcon className="w-5 h-5 text-emerald-700" />
          <h3 className="font-serif text-xl font-bold text-neutral-900 m-0">
            The Three Pillars of Real Settlement Leverage
          </h3>
        </div>
        <p className="text-neutral-700 mb-4">
          Even if the direct ATA case stalls, three parallel pressure vectors produce settlement
          leverage. The lawfirm should pursue all three in parallel rather than betting on a
          courtroom ATA verdict.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {regulatoryLeverageTheory.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="bg-white border border-neutral-200 rounded-lg p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-navy-100 text-navy-800 font-semibold text-xs flex-shrink-0">
                  {idx + 1}
                </div>
                <h4 className="text-sm font-semibold text-neutral-900 m-0">{pillar.name}</h4>
              </div>
              <p className="text-xs text-neutral-700 mb-2">{pillar.mechanism}</p>
              <p className="text-xs text-neutral-600 mb-2">
                <strong className="text-neutral-800">Estimated leverage:</strong>{' '}
                {pillar.estimatedLeverage}
              </p>
              <p className="text-xs text-neutral-500 italic mb-0">
                Regulators: {pillar.regulators.join(', ')}
              </p>
            </div>
          ))}
        </div>

        {/* Atchley-style complaint architecture */}
        <div className="flex items-center gap-2 mb-3">
          <SparklesIcon className="w-5 h-5 text-emerald-700" />
          <h3 className="font-serif text-xl font-bold text-neutral-900 m-0">
            Atchley-Style Complaint Architecture
          </h3>
        </div>
        <p className="text-neutral-700 mb-4">
          The D.C. Circuit&apos;s January 23, 2026 reversal in <em>Atchley v. AstraZeneca</em>{' '}
          after SCOTUS GVR confirms that &quot;unusual way&quot; affirmative misconduct survives
          <em> Taamneh</em>. Our complaint should mirror Atchley&apos;s architecture:
        </p>

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5 mb-8">
          <ol className="list-decimal pl-6 space-y-2 text-sm text-emerald-900 mb-0">
            <li>
              <strong>Plead specific merchant-level relationships</strong> — Al Saqi Electronic
              Payment Company, named UAE merchants Mastercard listed on MATCH in March 2025,
              First Iraqi Bank (Visa Direct), International Smart Card (Qi Card). The Treasury
              blacklisting of Al Saqi is a Yana-equivalent factual anchor for Visa.
            </li>
            <li>
              <strong>Plead &quot;unusual way&quot; affirmative conduct</strong> — (a) Yana
              reinstatement after August 2023 zero-controls audit; (b) continued processing of
              known-militia-linked merchant populations after the Fall 2023 Treasury briefing;
              (c) financial incentives offered to boost Iraqi transaction volume during the
              surge (per IFMAT). Each is an affirmative act, not passive inaction.
            </li>
            <li>
              <strong>Anchor to Freeman II&apos;s Gold Star plaintiff structure</strong> — the
              ~300 Gold Star families in Freeman II v. HSBC E.D.N.Y. 18-cv-07359 offer a
              tested plaintiff-coalition model. Coordinate with Kreindler &amp; Kreindler whose
              January 22, 2026 FSIA suit against Iran establishes the upstream Tower 22
              attribution judgment.
            </li>
            <li>
              <strong>Specific-attack nexus</strong> — Tower 22 (Jan 28, 2024); Al-Asad ballistic
              missile (Nov 20, 2023); Erbil drone (Dec 25, 2023); Al-Asad rocket (Aug 5, 2024);
              Rumalyn drone (Aug 9, 2024). Each has named wounded plaintiffs and a public
              attribution chain — essential for Taamneh&apos;s specific-attack requirement.
            </li>
            <li>
              <strong>Ongoing-violation framing</strong> — April 11, 2026 FDD Long War Journal
              evidence that Mastercard is still a named militia fundraising channel converts the
              case from historical compliance failure to ongoing willful conduct. Supports
              continuing-violation tolling and defeats remediation defenses.
            </li>
            <li>
              <strong>Venue selection</strong> — D.D.C. (Atchley jurisdiction) is more favorable
              post-Taamneh than the Second Circuit. S.D.N.Y. (Raanan) has produced mixed
              results. D.N.D. (Balva) is an option for forum-innovation.
            </li>
          </ol>
        </div>

        {/* JASTA SOL */}
        <div className="flex items-center gap-2 mb-3">
          <ClockIcon className="w-5 h-5 text-amber-700" />
          <h3 className="font-serif text-xl font-bold text-neutral-900 m-0">
            JASTA 10-Year Statute of Limitations
          </h3>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-amber-900 mb-2">
            <strong>Critical deadline:</strong> {atasol.criticalDate} (for pre-September 28, 2016
            injury claims).
          </p>
          <p className="text-sm text-amber-900 mb-0">
            <strong>Good news for our case:</strong> {atasol.relevanceToVisaMastercard}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-neutral-50 border border-neutral-200 rounded-lg p-5">
          <h4 className="text-sm font-semibold text-neutral-900 mt-0 mb-2">Further reading</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <Link
              href="/ata-litigation-landscape"
              className="text-sm text-navy-700 hover:text-navy-900 underline"
            >
              → Full ATA litigation landscape
            </Link>
            <Link
              href="/compliance-gap"
              className="text-sm text-navy-700 hover:text-navy-900 underline"
            >
              → Compliance-gap documentation
            </Link>
            <Link
              href="/attacks-ledger"
              className="text-sm text-navy-700 hover:text-navy-900 underline"
            >
              → Two-year attack chronicle
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="flex justify-between pt-6 border-t border-neutral-200 no-print">
        <Link href="/timeline" className="btn btn-ghost">
          <ArrowLeftIcon className="w-4 h-4" />
          Timeline
        </Link>
        <Link href="/evidence" className="btn btn-secondary">
          Evidence
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </nav>
    </article>
  );
}
