// ===================================
// Core Type Definitions
// ===================================

// Timeline Types
export type TimelineCategory = 'warning' | 'action' | 'violation' | 'attack' | 'regulatory';

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  category: TimelineCategory;
  sources?: string[];
  financialImpact?: string;
  expanded?: boolean;
}

// Entity Types
export type EntityType = 'network' | 'bank' | 'militia' | 'individual' | 'government';

export interface Entity {
  id: string;
  name: string;
  type: EntityType;
  description: string;
  aliases?: string[];
  designation?: string; // e.g., "FTO", "SDGT"
  relationships?: EntityRelationship[];
  keyFacts?: string[];
}

export interface EntityRelationship {
  targetId: string;
  type: 'partner' | 'subsidiary' | 'affiliate' | 'financed_by' | 'controlled_by';
  description?: string;
}

// Legal Framework Types
export type LegalFramework = 'ata' | 'bsa' | 'ofac' | 'ieepa';

export interface Violation {
  id: string;
  title: string;
  framework: LegalFramework;
  statute: string;
  description: string;
  evidence: string[];
  potentialPenalty?: string;
}

export interface LegalPrecedent {
  id: string;
  caseName: string;
  citation: string;
  court: string;
  year: number;
  relevance: string;
  holding: string;
  tags: string[];
  status?: 'pending' | 'decided' | 'settled';
  adverse?: boolean;
  distinguishingFactors?: string;
}

// Evidence Types
export type EvidenceCategory = 'audit' | 'warning' | 'congressional' | 'financial' | 'media' | 'litigation' | 'regulatory';

export interface EvidenceDocument {
  id: string;
  title: string;
  category: EvidenceCategory;
  date: string;
  source: string;
  description: string;
  keyFindings?: string[];
  documentUrl?: string;
}

// Financial Types
export interface FinancialMetric {
  id: string;
  label: string;
  value: string;
  numericValue?: number;
  period?: string;
  source: string;
  description?: string;
}

export interface DamageCalculation {
  category: string;
  baseAmount: string;
  multiplier?: number;
  totalAmount: string;
  explanation: string;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
  badge?: string;
}

// Filter Types
export interface FilterOption {
  id: string;
  label: string;
  count?: number;
}

// Component Props Types
export interface CardProps {
  title?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export interface BadgeProps {
  variant: 'gray' | 'amber' | 'navy' | 'danger' | 'success';
  children: React.ReactNode;
  className?: string;
}

export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

