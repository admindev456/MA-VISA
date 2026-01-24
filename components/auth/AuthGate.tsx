'use client';

import { useState, useEffect } from 'react';
import { LockClosedIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

const CORRECT_PIN = '7901-0904';
const AUTH_KEY = 'vmc_auth';

export function AuthGate({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    // Check sessionStorage on mount
    const authStatus = sessionStorage.getItem(AUTH_KEY);
    setIsAuthenticated(authStatus === 'true');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (pin === CORRECT_PIN) {
      sessionStorage.setItem(AUTH_KEY, 'true');
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setShake(true);
      setPin('');
      setTimeout(() => setShake(false), 500);
    }
  };

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and hyphens, max 9 characters (xxxx-xxxx)
    if (/^[\d-]*$/.test(value) && value.length <= 9) {
      setPin(value);
      setError(false);
    }
  };

  // Still checking auth status
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="animate-pulse text-neutral-400">Loading...</div>
      </div>
    );
  }

  // Not authenticated - show PIN entry
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          {/* Logo/Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-900 rounded-full mb-4">
              <LockClosedIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-xl font-serif font-bold text-neutral-900">
              V/MC Liability
            </h1>
            <p className="text-sm text-neutral-500 mt-1">
              Intelligence Documentation
            </p>
          </div>

          {/* PIN Entry Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="pin" className="block text-sm font-medium text-neutral-700 mb-2">
                Enter Access Code
              </label>
              <input
                type="text"
                id="pin"
                value={pin}
                onChange={handlePinChange}
                placeholder="XXXX-XXXX"
                autoComplete="off"
                autoFocus
                className={`
                  w-full px-4 py-3 text-center text-lg font-mono tracking-widest
                  border rounded-lg transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent
                  ${error 
                    ? 'border-red-500 bg-red-50' 
                    : 'border-neutral-300 bg-white'
                  }
                  ${shake ? 'animate-shake' : ''}
                `}
              />
              {error && (
                <div className="flex items-center gap-2 mt-2 text-red-600 text-sm">
                  <ExclamationCircleIcon className="w-4 h-4" />
                  <span>Invalid access code</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={pin.length < 9}
              className="
                w-full py-3 px-4 
                bg-neutral-900 text-white font-medium rounded-lg
                hover:bg-neutral-800 
                focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2
                disabled:bg-neutral-300 disabled:cursor-not-allowed
                transition-colors duration-200
              "
            >
              Access Documentation
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-neutral-400 mt-8">
            Authorized access only
          </p>
        </div>
      </div>
    );
  }

  // Authenticated - render children
  return <>{children}</>;
}

