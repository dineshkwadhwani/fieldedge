'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/context/ToastContext';
import AppShell from '@/components/AppShell';

export default function LeavesPage() {
  const { user, loading } = useAuth();
  const { showToast } = useToast();
  const router = useRouter();
  const [leaves, setLeaves] = useState([]);
  const [tab, setTab] = useState('pending');
  const [rejModal, setRejModal] = useState(null);
  const [rejReason, setRejReason] = useState('');
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [form, setForm] = useState({ fromDate: '', toDate: '', reason: '' });
  const today = new Date().toISOString().split('T')[0];
  const isManager = ['manager', 'director', 'ceo', 'super_admin'].includes(user?.role);

  useEffect(() => {
    if (!loading && !user) { router.push('/'); return; }
    if (user) loadLeaves();
  }, [user, loading]);

  const loadLeaves = async () => {
    const url = !isManager ? `/api/leaves?userId=${user.id}` : `/api/leaves?managerId=${user.id}`;
    const res = await fetch(url);
    const data = await res.json();
    setLeaves(data.leaves || []);
  };

  const handleAction = async (leaveId, action) => {
    try {
      const res = await fetch(`/api/leaves/${leaveId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, rejectionReason: rejReason })
      });
      if (!res.ok) { showToast('Action failed', 'error'); return; }
      showToast(action === 'approve' ? 'Email Sent — Leave approved' : 'Leave rejected', action === 'approve' ? 'success' : 'warning');
      setRejModal(null); setRejReason('');
      loadLeaves();
    } catch { showToast('Error', 'error'); }
  };

  const submitLeave = async (e) => {
    e.preventDefault();
    if (!form.fromDate || !form.toDate || !form.reason) { showToast('All fields required', 'error'); return; }
    try {
      const res = await fetch('/api/leaves', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, ...form })
      });
      const data = await res.json();
      if (!res.ok) { showToast(data.error, 'error'); return; }
      showToast('Email Sent — Leave request sent to your manager', 'success');
      setShowApplyForm(false); setForm({ fromDate: '', toDate: '', reason: '' });
      loadLeaves();
    } catch { showToast('Error', 'error'); }
  };

  if (loading || !user) return null;

  const pending = leaves.filter(l => l.status === 'pending');
  const processed = leaves.filter(l => l.status !== 'pending');
  const displayList = tab === 'pending' ? pending : processed;

  const dayCount = (from, to) => Math.ceil((new Date(to) - new Date(from)) / 86400000) + 1;

  return (
    <AppShell>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
        <div>
          <h1 className="page-title">{isManager ? 'Leave Approvals' : 'My Leaves'}</h1>
          <p className="page-sub">{isManager ? 'Manage leave requests from your team' : 'Track your leave requests'}</p>
        </div>
        {!isManager && (
          <button className="fe-btn-primary" onClick={() => setShowApplyForm(true)}>
            <i className="ti ti-plus" /> Apply Leave
          </button>
        )}
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {[['pending', pending.length], ['history', processed.length]].map(([t, count]) => (
          <button key={t} onClick={() => setTab(t)}
            style={{ padding: '7px 18px', borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: 'pointer', border: tab === t ? 'none' : '1px solid var(--fe-gray-100)', background: tab === t ? 'var(--fe-teal-600)' : 'white', color: tab === t ? 'white' : 'var(--fe-gray-600)', textTransform: 'capitalize' }}>
            {t.charAt(0).toUpperCase() + t.slice(1)} ({count})
          </button>
        ))}
      </div>

      {displayList.length === 0 ? (
        <div className="fe-card">
          <div className="empty-state">
            <i className="ti ti-calendar-time" style={{ fontSize: 36, display: 'block', marginBottom: 8 }} />
            {tab === 'pending' ? (isManager ? 'No pending leave requests' : 'No pending leaves') : 'No leave history yet'}
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {displayList.map(l => (
            <div key={l.id} className="fe-card" style={{ padding: '14px 16px' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 40, background: 'var(--fe-teal-50)', border: '1px solid var(--fe-teal-100)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className="ti ti-calendar-off" style={{ fontSize: 18, color: 'var(--fe-teal-600)' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  {isManager && (
                    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 2 }}>
                      {l.userName} <span style={{ fontSize: 12, color: 'var(--fe-gray-400)', fontWeight: 400 }}>({l.userEmpId})</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 13, fontWeight: isManager ? 400 : 500, color: 'var(--fe-gray-800)' }}>
                      {l.fromDate} → {l.toDate}
                    </span>
                    <span style={{ fontSize: 12, background: 'var(--fe-gray-100)', color: 'var(--fe-gray-600)', borderRadius: 4, padding: '1px 7px' }}>
                      {dayCount(l.fromDate, l.toDate)} day{dayCount(l.fromDate, l.toDate) > 1 ? 's' : ''}
                    </span>
                  </div>
                  <div style={{ fontSize: 13, color: 'var(--fe-gray-500)', marginTop: 4 }}>{l.reason}</div>
                  {l.rejectionReason && (
                    <div style={{ fontSize: 12, color: 'var(--fe-red-600)', marginTop: 4 }}>Rejected: {l.rejectionReason}</div>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
                    <span className={`badge ${l.status === 'approved' ? 'badge-approved' : l.status === 'rejected' ? 'badge-rejected' : 'badge-pending'}`}>
                      {l.status.charAt(0).toUpperCase() + l.status.slice(1)}
                    </span>
                    {isManager && l.status === 'pending' && (
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button className="fe-btn-danger fe-btn-sm" onClick={() => setRejModal(l)}>Reject</button>
                        <button className="fe-btn-primary fe-btn-sm" onClick={() => handleAction(l.id, 'approve')}>
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

      {showApplyForm && (
        <div className="modal-overlay" onClick={() => setShowApplyForm(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-title"><i className="ti ti-calendar-time" /> Apply for Leave</div>
            <form onSubmit={submitLeave}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="fe-label">From Date</label>
                  <input type="date" className="fe-input" value={form.fromDate} min={today} onChange={e => setForm(p => ({ ...p, fromDate: e.target.value }))} required />
                </div>
                <div className="form-group">
                  <label className="fe-label">To Date</label>
                  <input type="date" className="fe-input" value={form.toDate} min={form.fromDate || today} onChange={e => setForm(p => ({ ...p, toDate: e.target.value }))} required />
                </div>
                <div className="form-group full">
                  <label className="fe-label">Reason for Leave</label>
                  <textarea className="fe-input" style={{ minHeight: 80 }} value={form.reason} onChange={e => setForm(p => ({ ...p, reason: e.target.value }))} placeholder="e.g. Medical appointment, personal work..." required />
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
                <button type="button" className="fe-btn-outline" onClick={() => setShowApplyForm(false)}>Cancel</button>
                <button type="submit" className="fe-btn-primary"><i className="ti ti-send" /> Submit Request</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {rejModal && (
        <div className="modal-overlay" onClick={() => setRejModal(null)}>
          <div className="modal" style={{ maxWidth: 400 }} onClick={e => e.stopPropagation()}>
            <div className="modal-title"><i className="ti ti-ban" style={{ color: 'var(--fe-red-400)' }} /> Reject Leave Request</div>
            <div style={{ fontSize: 14, marginBottom: 12 }}>
              <strong>{rejModal.userName}</strong> — {rejModal.fromDate} to {rejModal.toDate}
            </div>
            <div className="form-group">
              <label className="fe-label">Rejection Reason *</label>
              <textarea className="fe-input" style={{ minHeight: 72 }} value={rejReason} onChange={e => setRejReason(e.target.value)} placeholder="Reason for rejection..." />
            </div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
              <button className="fe-btn-outline" onClick={() => setRejModal(null)}>Cancel</button>
              <button className="fe-btn-danger" onClick={() => { if (!rejReason.trim()) return; handleAction(rejModal.id, 'reject'); }}>Confirm Reject</button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}
