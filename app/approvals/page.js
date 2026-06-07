'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/context/ToastContext';
import AppShell from '@/components/AppShell';

const STATUS_COLORS = {
  pending_manager: 'badge-pending', pending_director: 'badge-pending',
  manager_approved: 'badge-mgr-approved', approved: 'badge-approved', rejected: 'badge-rejected'
};
const STATUS_LABELS = {
  pending_manager: 'Pending Mgr', pending_director: 'Pending Dir',
  manager_approved: 'Mgr Approved', approved: 'Approved', rejected: 'Rejected'
};

export default function ApprovalsPage() {
  const { user, loading } = useAuth();
  const { showToast } = useToast();
  const router = useRouter();
  const [expenses, setExpenses] = useState([]);
  const [tab, setTab] = useState('pending');
  const [rejModal, setRejModal] = useState(null);
  const [rejReason, setRejReason] = useState('');

  useEffect(() => {
    if (!loading && !user) { router.push('/'); return; }
    if (user && !['manager', 'director', 'ceo', 'super_admin'].includes(user.role)) { router.push('/dashboard'); return; }
    if (user) loadExpenses();
  }, [user, loading]);

  const loadExpenses = async () => {
    const url = `/api/expenses?${['director', 'ceo', 'manager'].includes(user.role) ? `pendingFor=${user.id}` : `forSpan=${user.id}`}`;
    const res = await fetch(url);
    const data = await res.json();
    setExpenses(data.expenses || []);
  };

  const handleAction = async (expId, action, reason) => {
    try {
      const res = await fetch(`/api/expenses/${expId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, approvedBy: user.id, rejectionReason: reason })
      });
      if (!res.ok) { showToast('Action failed', 'error'); return; }
      showToast(action === 'approve' ? 'Email Sent — Expense approved' : 'Expense rejected', action === 'approve' ? 'success' : 'warning');
      setRejModal(null); setRejReason('');
      loadExpenses();
    } catch { showToast('Error', 'error'); }
  };

  if (loading || !user) return null;

  const pending = expenses.filter(e =>
    user.role === 'manager' ? e.status === 'pending_manager' :
    ['director', 'ceo'].includes(user.role) ? e.status === 'pending_director' :
    ['pending_manager', 'pending_director'].includes(e.status)
  );
  const processed = expenses.filter(e => ['manager_approved', 'approved', 'rejected'].includes(e.status));
  const displayList = tab === 'pending' ? pending : processed;

  return (
    <AppShell>
      <h1 className="page-title">Expense Approvals</h1>
      <p className="page-sub">Review and action expense claims from your team</p>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {[['pending', pending.length], ['processed', processed.length]].map(([t, count]) => (
          <button key={t} onClick={() => setTab(t)}
            style={{ padding: '7px 18px', borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: 'pointer', border: tab === t ? 'none' : '1px solid var(--fe-gray-100)', background: tab === t ? 'var(--fe-teal-600)' : 'white', color: tab === t ? 'white' : 'var(--fe-gray-600)', textTransform: 'capitalize' }}>
            {t.charAt(0).toUpperCase() + t.slice(1)} ({count})
          </button>
        ))}
      </div>

      {displayList.length === 0 ? (
        <div className="fe-card">
          <div className="empty-state">
            <i className="ti ti-checkbox" style={{ fontSize: 36, display: 'block', marginBottom: 8 }} />
            {tab === 'pending' ? 'No pending approvals — all clear!' : 'No processed expenses yet'}
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {displayList.map(e => (
            <div key={e.id} className="fe-card" style={{ padding: '14px 16px' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 40, background: 'var(--fe-amber-50)', border: '1px solid var(--fe-amber-100)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="ti ti-receipt" style={{ fontSize: 18, color: 'var(--fe-amber-600)' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{e.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--fe-teal-600)', marginTop: 1 }}>{e.userName} · {e.date}</div>
                  {e.description && (
                    <div style={{ fontSize: 12, color: 'var(--fe-gray-400)', marginTop: 2 }}>
                      {e.description.slice(0, 80)}{e.description.length > 80 ? '…' : ''}
                    </div>
                  )}
                  {e.rejectionReason && (
                    <div style={{ fontSize: 12, color: 'var(--fe-red-600)', marginTop: 4 }}>
                      Rejected: {e.rejectionReason}
                    </div>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontWeight: 700, fontSize: 16, color: 'var(--fe-teal-600)' }}>₹{e.amount?.toLocaleString('en-IN')}</span>
                      <span className={`badge ${STATUS_COLORS[e.status]}`}>{STATUS_LABELS[e.status]}</span>
                    </div>
                    {tab === 'pending' && (
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button className="fe-btn-danger fe-btn-sm" onClick={() => setRejModal(e)}>Reject</button>
                        <button className="fe-btn-primary fe-btn-sm" onClick={() => handleAction(e.id, 'approve')}>
                          <i className="ti ti-check" /> Approve
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {rejModal && (
        <div className="modal-overlay" onClick={() => setRejModal(null)}>
          <div className="modal" style={{ maxWidth: 400 }} onClick={e => e.stopPropagation()}>
            <div className="modal-title"><i className="ti ti-ban" style={{ color: 'var(--fe-red-400)' }} /> Reject Expense</div>
            <div style={{ marginBottom: 12, fontSize: 14 }}>
              <strong>{rejModal.title}</strong> — ₹{rejModal.amount?.toLocaleString('en-IN')} by {rejModal.userName}
            </div>
            <div className="form-group">
              <label className="fe-label">Rejection Reason *</label>
              <textarea className="fe-input" style={{ minHeight: 80 }} value={rejReason} onChange={e => setRejReason(e.target.value)} placeholder="Provide a reason..." />
            </div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
              <button className="fe-btn-outline" onClick={() => setRejModal(null)}>Cancel</button>
              <button className="fe-btn-danger" onClick={() => { if (!rejReason.trim()) return; handleAction(rejModal.id, 'reject', rejReason); }}>Confirm Reject</button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}
