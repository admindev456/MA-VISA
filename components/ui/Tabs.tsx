'use client';

import { useState, createContext, useContext } from 'react';
import { cn } from '@/lib/utils';

// Context for Tabs
interface TabsContextValue {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs provider');
  }
  return context;
}

// Tabs Root
interface TabsProps {
  defaultValue: string;
  className?: string;
  children: React.ReactNode;
}

export default function Tabs({ defaultValue, className, children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn('', className)}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

// Tab List
interface TabListProps {
  className?: string;
  children: React.ReactNode;
}

export function TabList({ className, children }: TabListProps) {
  return (
    <div className={cn('flex border-b border-ink-200', className)} role="tablist">
      {children}
    </div>
  );
}

// Tab Trigger
interface TabTriggerProps {
  value: string;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export function TabTrigger({ value, className, children, disabled = false }: TabTriggerProps) {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={() => !disabled && setActiveTab(value)}
      className={cn(
        'px-4 py-3 text-sm font-medium border-b-2 -mb-px transition-all duration-150',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-500 focus-visible:ring-offset-2',
        isActive
          ? 'border-ink-900 text-ink-900'
          : 'border-transparent text-ink-500 hover:text-ink-700 hover:border-ink-300',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {children}
    </button>
  );
}

// Tab Content
interface TabContentProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export function TabContent({ value, className, children }: TabContentProps) {
  const { activeTab } = useTabsContext();

  if (activeTab !== value) return null;

  return (
    <div
      role="tabpanel"
      className={cn('animate-fade-in pt-6', className)}
    >
      {children}
    </div>
  );
}

