'use client';

import { useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  size = 'md',
  className,
  children,
}: ModalProps) {
  // Handle escape key
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-[90vw] max-h-[90vh]',
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink-900/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className={cn(
            'relative w-full bg-white rounded-xl shadow-elevation-3 animate-scale-in',
            sizes[size],
            className
          )}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'modal-title' : undefined}
          aria-describedby={description ? 'modal-description' : undefined}
        >
          {/* Header */}
          {(title || description) && (
            <div className="px-6 pt-6 pb-4 border-b border-ink-100">
              {title && (
                <h2
                  id="modal-title"
                  className="font-serif text-xl font-semibold text-ink-900"
                >
                  {title}
                </h2>
              )}
              {description && (
                <p
                  id="modal-description"
                  className="mt-1 text-sm text-ink-500"
                >
                  {description}
                </p>
              )}
            </div>
          )}

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-ink-400 hover:text-ink-600 
                     rounded-lg hover:bg-ink-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Content */}
          <div className="px-6 py-4 overflow-y-auto max-h-[70vh]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// Modal Footer component for action buttons
interface ModalFooterProps {
  className?: string;
  children: React.ReactNode;
}

export function ModalFooter({ className, children }: ModalFooterProps) {
  return (
    <div
      className={cn(
        'px-6 py-4 border-t border-ink-100 flex items-center justify-end gap-3',
        className
      )}
    >
      {children}
    </div>
  );
}

