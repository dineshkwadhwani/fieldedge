'use client';
import { useState } from 'react';
import Sidebar from './Sidebar';
import { useAuth } from '@/context/AuthContext';
import { ROLE_LABELS } from '@/lib/auth';

export default function AppShell({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useAuth();

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="main-content">
        <div className="topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button
              onClick={() => setSidebarOpen(true)}
              style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
              className="mobile-menu-btn"
              aria-label="Open menu"
            >
              <i className="ti ti-menu-2" style={{ fontSize: 22, color: 'var(--fe-gray-600)' }} />
            </button>
            <div style={{ fontSize: 13, color: 'var(--fe-gray-400)' }}>
              {new Date().toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}
            </div>
          </div>
          {user && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 12, padding: '3px 10px', borderRadius: 20, background: 'var(--fe-teal-50)', color: 'var(--fe-teal-600)', border: '0.5px solid var(--fe-teal-100)' }}>
                {ROLE_LABELS[user.role] || user.role}
              </span>
            </div>
          )}
        </div>
        <div className="page-content">
          {children}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
