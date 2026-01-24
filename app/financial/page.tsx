import Link from 'next/link';
import { 
  keyMetrics, 
  transactionTimeline, 
  feeCalculations, 
  networkFeeEstimates,
  damageComponents,
  enforcementPrecedents,
  arbitrageAnalysis,
  formatCurrency
} from '@/lib/data/financial';
import {
  ArrowTrendingUpIcon,
  BanknotesIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CurrencyDollarIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';

export default function FinancialPage() {
  const maxVolume = Math.max(...transactionTimeline.map(t => t.volume));

  return (
    <article className="max-w-prose-wide mx-auto">
      {/* Header */}
      <header className="mb-8">
        <p className="kicker">Financial Intelligence</p>
        <h1>Financial Analysis & Damages Exposure</h1>
        <p className="lead mt-4">
          Quantifying the financial dimensions of the Iraqi card scheme: transaction volumes, 
          network fee revenue, and potential liability exposure ranging from <strong>$600 million 
          to $5.6 billion</strong>.
        </p>
      </header>

      {/* Key Metrics Grid */}
      <div className="metric-grid mb-10">
        <div className="metric-item">
          <div className="stat-inline text-red-700">$1.5B</div>
          <div className="stat-label">Peak Monthly</div>
        </div>
        <div className="metric-item">
          <div className="stat-inline">$120M</div>
          <div className="stat-label">Network Fees</div>
        </div>
        <div className="metric-item">
          <div className="stat-inline">170K+</div>
          <div className="stat-label">Cards Blocked</div>
        </div>
        <div className="metric-item">
          <div className="stat-inline text-red-700">$5.6B</div>
          <div className="stat-label">Max Exposure</div>
        </div>
      </div>

      {/* The Profit Motive - NEW NARRATIVE SECTION */}
      <section className="bg-white py-10 -mx-4 px-4 lg:-mx-8 lg:px-8 mb-8">
        <h2>The Profit Motive</h2>
        <div className="space-y-4 text-neutral-700">
          <p>
            Why did Visa and Mastercard allow illicit transactions to continue for 22 months 
            after receiving Treasury warnings? The answer lies in the economics of cross-border 
            payment processing.
          </p>
          <p>
            Every transaction through the Iraqi card corridor generated revenue for the networks. 
            Cross-border fees typically range from <strong>0.5% to 1.5%</strong> of transaction value, 
            with elevated rates of <strong>1% to 1.4%</strong> applying to high-risk corridors like 
            Iraq. At peak volumes of $1.5 billion monthly, these fees generated substantial income.
          </p>
          <p>
            The causal connection between sanctions violations and fee revenue is direct and 
            unambiguous. Unlike cases involving attenuated chains of causation, here the illegal 
            conduct (processing sanctioned transactions) and the profit (transaction fees) are 
            <strong> simultaneous and inseparable</strong>.
          </p>
          <div className="callout-warning">
            <h4 className="text-sm font-semibold text-neutral-800 mb-1">Disgorgement Precedent</h4>
            <p className="text-sm text-neutral-600 mb-0">
              The U.S. Supreme Court in <em>Liu v. SEC</em> affirmed that disgorgement remains 
              available as equitable relief when it does not exceed net profits. Courts require 
              only a "reasonable approximation of profits causally connected to the violation"—the 
              burden then shifts to the defendant to demonstrate the figure is unreasonable.
            </p>
          </div>
        </div>
      </section>

      {/* Transaction Volume Timeline */}
      <section className="mb-10">
        <h2>Transaction Volume Timeline</h2>
        <p className="text-neutral-600 mb-6">
          The transaction data reveals a <strong>2,900% overnight surge</strong>—from $50 million 
          to $1.5 billion monthly—a statistical impossibility in legitimate commerce. This anomaly 
          should have triggered automatic interdiction by any adequately designed fraud detection system.
        </p>
        <div className="bg-white rounded-lg border border-neutral-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-neutral-800">Monthly Volume (USD Millions)</h3>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-red-500 rounded"></div>
                <span className="text-neutral-500">Peak</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-amber-500 rounded"></div>
                <span className="text-neutral-500">Key Event</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            {transactionTimeline.map((data, index) => {
              const widthPercent = (data.volume / maxVolume) * 100;
              const isPeak = data.volume === maxVolume;
              const isKeyEvent = ['Treasury Inquiry', 'Yana Audit', 'Militia Briefing', 'Blocking Begins'].some(
                label => data.label.includes(label.split(' ')[0])
              );
              
              return (
                <div key={index} className="bar-chart-row">
                  <div className="bar-chart-label text-xs">
                    {data.period}
                  </div>
                  <div className="bar-chart-bar">
                    <div 
                      className={`bar-chart-fill ${
                        isPeak ? 'bg-red-500' : 
                        isKeyEvent ? 'bg-amber-500' : 
                        'bg-neutral-400'
                      }`}
                      style={{ width: `${widthPercent}%` }}
                    ></div>
                  </div>
                  <div className="bar-chart-value">
                    ${data.volume}M
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-6 pt-4 border-t border-neutral-100 text-xs text-neutral-500">
            <strong className="text-neutral-600">Source:</strong> WSJ Investigation, IFMAT Report, Treasury Data
          </div>
        </div>
        
        <p className="text-sm text-neutral-600 mt-4">
          If Mastercard's AI systems can detect fraud with "300% improved accuracy," how did they 
          fail to flag a 2,900% transaction surge? The answer suggests either <strong>disabled systems</strong>, 
          <strong>inadequate systems</strong>, or <strong>ignored alerts</strong>—each scenario establishes liability.
        </p>
      </section>

      <div className="section-divider"></div>

      {/* Currency Arbitrage */}
      <section className="mb-10">
        <h2>Currency Arbitrage Mechanism</h2>
        <p className="text-neutral-600 mb-6">
          The scheme exploited the spread between Iraq's official exchange rate (1,320 IQD/USD) 
          and the black market rate (~1,600 IQD/USD). This <strong className="text-red-700">21% profit margin</strong> made 
          the Qi Card system an irresistible money-laundering vehicle for militia commanders.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-neutral-200 p-5 text-center">
            <CurrencyDollarIcon className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <div className="text-2xl font-serif font-bold text-neutral-900">1,320</div>
            <div className="text-xs text-neutral-500 uppercase tracking-wide mb-1">IQD per USD (Official)</div>
            <p className="text-xs text-neutral-500">CBI subsidized rate for card loading</p>
          </div>
          <div className="bg-white rounded-lg border border-neutral-200 p-5 text-center">
            <CurrencyDollarIcon className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-serif font-bold text-neutral-900">~1,600</div>
            <div className="text-xs text-neutral-500 uppercase tracking-wide mb-1">IQD per USD (Market)</div>
            <p className="text-xs text-neutral-500">Black market rate for dollar sales</p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
          <h3 className="text-sm font-semibold text-neutral-800 mb-3">Example Arbitrage Calculation</h3>
          <div className="grid md:grid-cols-3 gap-3 text-sm">
            <div className="p-3 bg-white rounded-lg">
              <div className="font-medium text-neutral-800 mb-1">1. Load Card</div>
              <p className="text-neutral-600 text-xs">
                $100,000 loaded at official rate<br/>
                <span className="font-mono">Cost: 132M IQD</span>
              </p>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="font-medium text-neutral-800 mb-1">2. Extract Abroad</div>
              <p className="text-neutral-600 text-xs">
                Withdraw/spend in UAE<br/>
                <span className="font-mono">Less fees: ~$97K net</span>
              </p>
            </div>
            <div className="p-3 bg-white rounded-lg">
              <div className="font-medium text-neutral-800 mb-1">3. Sell Dollars</div>
              <p className="text-neutral-600 text-xs">
                Sell at market rate<br/>
                <span className="font-mono text-emerald-700">Profit: ~$17.5K</span>
              </p>
            </div>
          </div>
          <p className="text-xs text-neutral-600 mt-3">
            At peak volumes ($1.5B/month), this mechanism generated an estimated 
            <strong className="text-red-700"> $225 million monthly</strong> in militia profits—funds that 
            supported attacks on American service members.
          </p>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Network Fee Estimates */}
      <section className="mb-10">
        <h2>Network Fee Revenue</h2>
        <p className="text-neutral-600 mb-4">
          Every transaction through the Iraqi card corridor generated revenue for Visa and 
          Mastercard. Based on standard cross-border fee structures, we estimate combined 
          network revenue of <strong>$102-204 million</strong> during the scheme's operational period.
        </p>
        <p className="text-neutral-600 mb-6">
          This revenue is directly subject to disgorgement claims. Under the <em>Liu v. SEC</em> 
          precedent, courts require only a "reasonable approximation" of ill-gotten gains—the 
          burden then shifts to defendants to prove the figure is unreasonable.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="data-table">
            <thead>
              <tr>
                <th>Fee Category</th>
                <th className="text-right">Low Rate</th>
                <th className="text-right">High Rate</th>
                <th>Methodology</th>
              </tr>
            </thead>
            <tbody>
              {feeCalculations.map((fee, index) => (
                <tr key={index}>
                  <td className="font-medium text-neutral-800">{fee.category}</td>
                  <td className="cell-number">{fee.lowEstimate}%</td>
                  <td className="cell-number">{fee.highEstimate}%</td>
                  <td className="text-xs text-neutral-500">{fee.methodology}</td>
                </tr>
              ))}
              <tr className="bg-neutral-50 font-semibold">
                <td className="text-neutral-900">Total Fee Rate</td>
                <td className="cell-number">~1.05%</td>
                <td className="cell-number">~1.85%</td>
                <td className="text-xs text-neutral-500">Combined network take</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg border border-neutral-200 p-5">
            <h3 className="text-sm font-semibold text-neutral-800 mb-3">Visa Revenue Estimate</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">Low Estimate</span>
                <span className="font-mono font-medium text-neutral-800">{formatCurrency(networkFeeEstimates.visa.low)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">Mid Estimate</span>
                <span className="font-mono font-medium text-neutral-800">{formatCurrency(networkFeeEstimates.visa.mid)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">High Estimate</span>
                <span className="font-mono font-semibold text-red-700">{formatCurrency(networkFeeEstimates.visa.high)}</span>
              </div>
            </div>
            <p className="text-2xs text-neutral-400 mt-3">Based on ~40-45% market share</p>
          </div>
          <div className="bg-white rounded-lg border border-neutral-200 p-5">
            <h3 className="text-sm font-semibold text-neutral-800 mb-3">Mastercard Revenue Estimate</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">Low Estimate</span>
                <span className="font-mono font-medium text-neutral-800">{formatCurrency(networkFeeEstimates.mastercard.low)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">Mid Estimate</span>
                <span className="font-mono font-medium text-neutral-800">{formatCurrency(networkFeeEstimates.mastercard.mid)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-500">High Estimate</span>
                <span className="font-mono font-semibold text-red-700">{formatCurrency(networkFeeEstimates.mastercard.high)}</span>
              </div>
            </div>
            <p className="text-2xs text-neutral-400 mt-3">Based on ~40-45% market share</p>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Statutory Maximum Exposure - NEW SECTION */}
      <section className="mb-10">
        <h2>Statutory Maximum Exposure</h2>
        <p className="text-neutral-600 mb-4">
          Under the International Emergency Economic Powers Act (IEEPA), civil penalties 
          can reach the greater of <strong>twice the transaction amount</strong> or 
          <strong>$250,000 per violation</strong>. For criminal violations, penalties reach 
          <strong>$1 million per violation</strong> and <strong>up to 20 years imprisonment</strong>.
        </p>
        
        <div className="bg-white rounded-lg border border-neutral-200 p-5 mb-6">
          <h3 className="text-sm font-semibold text-neutral-800 mb-3">Conservative Calculation</h3>
          <div className="space-y-2 text-sm text-neutral-600">
            <div className="flex justify-between">
              <span>Potentially sanctionable transactions</span>
              <span className="font-mono text-neutral-800">170,000 (cards blocked)</span>
            </div>
            <div className="flex justify-between">
              <span>Average transaction value</span>
              <span className="font-mono text-neutral-800">$5,000 (CBI limit)</span>
            </div>
            <div className="flex justify-between">
              <span>Total transaction value</span>
              <span className="font-mono text-neutral-800">$850 million</span>
            </div>
            <div className="border-t border-neutral-100 pt-2 mt-2">
              <div className="flex justify-between">
                <span>2x Transaction Formula</span>
                <span className="font-mono font-semibold text-red-700">$1.7 billion</span>
              </div>
              <div className="flex justify-between">
                <span>$250K Per-Violation Formula</span>
                <span className="font-mono font-semibold text-red-700">$42.5 billion</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-neutral-500 mt-3">
            Statutory maximum is the <em>greater</em> of these figures. OFAC has discretion 
            to assess below maximums based on cooperation and remediation.
          </p>
        </div>
      </section>

      {/* Damages Framework */}
      <section className="mb-10">
        <h2>Damages Framework</h2>
        <p className="text-neutral-600 mb-6">
          Exposure spans multiple legal theories: compensatory damages under the ATA 
          (automatically trebled), civil money penalties under BSA/OFAC, and equitable 
          disgorgement of ill-gotten fees.
        </p>

        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Damage Type</th>
                <th className="text-right">Amount/Formula</th>
                <th>Legal Basis</th>
                <th>Statutory Authority</th>
              </tr>
            </thead>
            <tbody>
              {damageComponents.map((component, index) => (
                <tr key={index}>
                  <td className="font-medium text-neutral-800">{component.type}</td>
                  <td className="cell-number text-red-700 font-semibold">{component.amount}</td>
                  <td className="text-xs text-neutral-500">{component.basis}</td>
                  <td className="statute-ref">{component.statute}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="callout-warning mt-6">
          <div className="flex items-start gap-3">
            <ExclamationTriangleIcon className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-neutral-800 mb-1">
                The Treble Damages Multiplier
              </h4>
              <p className="text-sm text-neutral-600 mb-0">
                Under the Anti-Terrorism Act (18 U.S.C. § 2333), compensatory damages are 
                <strong> automatically tripled</strong>. A $500 million judgment becomes 
                <strong> $1.5 billion</strong>, before attorneys' fees—which are also recoverable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Why Precedents Understate Exposure - NEW NARRATIVE */}
      <section className="mb-10">
        <h2>Why Precedents May Understate Exposure</h2>
        <p className="text-neutral-600 mb-4">
          Comparing Visa and Mastercard's situation to past OFAC enforcement reveals the 
          unprecedented scale of potential liability:
        </p>
        
        <div className="bg-white rounded-lg border border-neutral-200 p-5 mb-6">
          <div className="grid grid-cols-3 gap-4 text-center mb-4">
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-wide mb-1">vs. Payoneer</div>
              <div className="text-2xl font-serif font-bold text-red-700">1,870×</div>
              <div className="text-xs text-neutral-500">larger volume</div>
            </div>
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-wide mb-1">vs. BitPay</div>
              <div className="text-2xl font-serif font-bold text-red-700">11,628×</div>
              <div className="text-xs text-neutral-500">larger volume</div>
            </div>
            <div>
              <div className="text-xs text-neutral-500 uppercase tracking-wide mb-1">Cards Blocked</div>
              <div className="text-2xl font-serif font-bold text-red-700">44×</div>
              <div className="text-xs text-neutral-500">more violations</div>
            </div>
          </div>
          <p className="text-xs text-neutral-500 text-center">
            Most significantly: Visa and Mastercard received direct Treasury warnings—an 
            aggravating factor <strong>absent</strong> in Payoneer and BitPay cases.
          </p>
        </div>
      </section>

      {/* Enforcement Precedents */}
      <section className="mb-10">
        <h2>Comparative Enforcement Precedents</h2>
        <p className="text-neutral-600 mb-6">
          Three patterns emerge from enforcement history: <strong>scale matters</strong> (penalties 
          correlate with volume), <strong>willfulness escalates</strong> (ignoring warnings triggers 
          harsher treatment), and <strong>DPAs are standard</strong> (even avoiding indictment means 
          multi-hundred-million-dollar forfeitures).
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {enforcementPrecedents.map((precedent, index) => (
            <div key={index} className="bg-white rounded-lg border border-neutral-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="badge badge-neutral">{precedent.year}</span>
                <span className="text-lg font-serif font-bold text-red-700">
                  {precedent.amount}
                </span>
              </div>
              <h3 className="text-base font-semibold text-neutral-800 mb-2">
                {precedent.case}
              </h3>
              <p className="text-xs text-neutral-600 mb-2">
                <strong>Violation:</strong> {precedent.violation}
              </p>
              <p className="text-xs text-neutral-500">
                <strong>Relevance:</strong> {precedent.comparability}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Settlement Scenarios */}
      <section className="mb-10">
        <h2>Settlement Scenario Analysis</h2>
        <p className="text-neutral-600 mb-6">
          Balancing aggravating factors (post-warning delay, terrorism nexus, duopoly market power) 
          against mitigating factors (no prior OFAC enforcement, eventual cooperation, systemic 
          importance), the <strong>moderate scenario appears most likely</strong>.
        </p>

        <div className="space-y-4">
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-emerald-900">Conservative Scenario</h3>
              <span className="text-xl font-serif font-bold text-emerald-700">$600M-$840M</span>
            </div>
            <p className="text-sm text-emerald-800 mb-2">Substantial mitigation, cooperation, no prior violations:</p>
            <ul className="text-xs text-emerald-700 space-y-1 pl-4 list-disc">
              <li>Disgorgement: $100-120M (2023 Iraq transaction fees)</li>
              <li>Civil monetary penalty: $200-300M (2-3× disgorgement)</li>
              <li>Combined per network: $300-420M</li>
            </ul>
          </div>
          
          <div className="bg-amber-50 border border-amber-300 rounded-lg p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-amber-900">Moderate Scenario <span className="text-xs font-normal">(Most Likely)</span></h3>
              <span className="text-xl font-serif font-bold text-amber-700">$1.5B-$2.2B</span>
            </div>
            <p className="text-sm text-amber-800 mb-2">Limited mitigation credit due to delay after warnings:</p>
            <ul className="text-xs text-amber-700 space-y-1 pl-4 list-disc">
              <li>Disgorgement: $150M (2023-2024 earnings)</li>
              <li>Civil monetary penalty: $500-750M</li>
              <li>Criminal forfeiture: $100-200M (if individuals prosecuted)</li>
              <li>Combined per network: $750M-$1.1B</li>
            </ul>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-red-900">Aggressive Scenario</h3>
              <span className="text-xl font-serif font-bold text-red-700">$3.0B-$5.6B</span>
            </div>
            <p className="text-sm text-red-800 mb-2">DOJ seeks to make example, emphasizes warnings delay:</p>
            <ul className="text-xs text-red-700 space-y-1 pl-4 list-disc">
              <li>Disgorgement: $200M</li>
              <li>Civil monetary penalty: $1-2B</li>
              <li>Criminal forfeiture: $300-500M</li>
              <li>Compliance monitor: $50-100M over 5 years</li>
              <li>Combined per network: $1.5B-$2.8B</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Individual Liability Warning */}
      <section className="mb-10">
        <div className="callout-danger">
          <h3 className="text-sm font-semibold text-red-800 mb-2">Individual Executive Exposure</h3>
          <p className="text-sm text-neutral-700 mb-2">
            Corporate settlements do not fully insulate executives. The Binance settlement 
            included criminal charges against founder Changpeng Zhao. DOJ increasingly pursues 
            individual accountability where evidence suggests executive awareness.
          </p>
          <p className="text-sm text-neutral-700 mb-0">
            <strong>Key questions:</strong> Who received Treasury warnings? Who authorized the 
            delay? What was communicated to boards? Senior compliance officers and business 
            unit leaders face material criminal exposure.
          </p>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Navigation */}
      <nav className="flex justify-between pt-4 no-print">
        <Link href="/entities" className="btn btn-ghost">
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Key Entities
        </Link>
        <Link href="/precedents" className="btn btn-secondary">
          Legal Precedents
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </Link>
      </nav>
    </article>
  );
}
