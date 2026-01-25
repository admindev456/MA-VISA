'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  DocumentTextIcon,
  CalendarDaysIcon,
  ScaleIcon,
  FolderOpenIcon,
  BuildingLibraryIcon,
  BanknotesIcon,
  BookOpenIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  count?: number;
}

const navItems: NavItem[] = [
  { name: 'The Case', href: '/', icon: DocumentTextIcon },
  { name: 'Timeline', href: '/timeline', icon: CalendarDaysIcon, count: 23 },
  { name: 'Legal Analysis', href: '/legal-analysis', icon: ScaleIcon },
  { name: 'Full Assessment', href: '/comprehensive-assessment', icon: ClipboardDocumentCheckIcon },
  { name: 'Evidence', href: '/evidence', icon: FolderOpenIcon, count: 12 },
  { name: 'Key Entities', href: '/entities', icon: BuildingLibraryIcon },
  { name: 'Financial', href: '/financial', icon: BanknotesIcon },
  { name: 'Precedents', href: '/precedents', icon: BookOpenIcon, count: 9 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 bg-neutral-100 border-r border-neutral-200 hidden lg:flex flex-col no-print sticky top-0 h-screen">
      {/* Logo */}
      <div className="p-4 border-b border-neutral-200">
        <Link href="/" className="block">
          <h1 className="text-sm font-serif font-bold text-neutral-900">
            V/MC Liability
          </h1>
          <p className="text-2xs text-neutral-500 mt-0.5">
            Intelligence Documentation
          </p>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 overflow-y-auto">
        <ul className="space-y-0.5">
          {navItems.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/' && pathname.startsWith(item.href));
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-2.5 px-2.5 py-2 rounded text-sm transition-colors ${
                    isActive 
                      ? 'bg-white text-neutral-900 font-medium shadow-sm'
                      : 'text-neutral-600 hover:bg-white/60 hover:text-neutral-800'
                  }`}
                >
                  <item.icon className={`w-4 h-4 flex-shrink-0 ${
                    isActive ? 'text-neutral-700' : 'text-neutral-400'
                  }`} />
                  <span className="flex-1 truncate">{item.name}</span>
                  {item.count && (
                    <span className="text-2xs text-neutral-400">
                      {item.count}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-neutral-200 text-2xs text-neutral-400">
        <p>Sources: WSJ, IFMAT, Treasury</p>
      </div>
    </aside>
  );
}
