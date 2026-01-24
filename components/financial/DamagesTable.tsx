import { cn } from '@/lib/utils';
import { Calculator } from 'lucide-react';

interface DamageRow {
  category: string;
  baseAmount: string;
  multiplier?: string;
  total: string;
  notes?: string;
}

interface DamagesTableProps {
  rows: DamageRow[];
  grandTotal?: string;
  title?: string;
  className?: string;
}

export default function DamagesTable({ 
  rows, 
  grandTotal,
  title = 'Potential Damages Framework',
  className 
}: DamagesTableProps) {
  return (
    <div className={cn('bg-white border border-ink-200 rounded-lg overflow-hidden', className)}>
      {/* Header */}
      <div className="px-4 py-3 bg-ink-50 border-b border-ink-200 flex items-center gap-2">
        <Calculator className="w-5 h-5 text-ink-500" />
        <h3 className="font-serif font-semibold text-ink-900">{title}</h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-ink-200 bg-ink-50/50">
              <th className="px-4 py-3 text-left font-semibold text-ink-700">Category</th>
              <th className="px-4 py-3 text-right font-semibold text-ink-700">Base Amount</th>
              <th className="px-4 py-3 text-center font-semibold text-ink-700">Multiplier</th>
              <th className="px-4 py-3 text-right font-semibold text-ink-700">Total</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="border-b border-ink-100 hover:bg-ink-50">
                <td className="px-4 py-3">
                  <span className="font-medium text-ink-900">{row.category}</span>
                  {row.notes && (
                    <p className="text-xs text-ink-500 mt-0.5">{row.notes}</p>
                  )}
                </td>
                <td className="px-4 py-3 text-right font-mono text-ink-700">
                  {row.baseAmount}
                </td>
                <td className="px-4 py-3 text-center">
                  {row.multiplier ? (
                    <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded text-xs font-medium">
                      {row.multiplier}
                    </span>
                  ) : (
                    <span className="text-ink-400">—</span>
                  )}
                </td>
                <td className="px-4 py-3 text-right font-mono font-semibold text-ink-900">
                  {row.total}
                </td>
              </tr>
            ))}
          </tbody>
          {grandTotal && (
            <tfoot>
              <tr className="bg-ink-900 text-white">
                <td colSpan={3} className="px-4 py-3 font-semibold">
                  Estimated Total Exposure
                </td>
                <td className="px-4 py-3 text-right font-mono font-bold text-lg">
                  {grandTotal}
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  );
}

