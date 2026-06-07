'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/context/ToastContext';
import AppShell from '@/components/AppShell';

const STATUS_MAP = {
  pending_manager: { label: 'Pending Manager', cls: 'badge-pending' },
  pending_director: { label: 'Pending Director', cls: 'badge-pending' },
  manager_approved: { label: 'Manager Approved', cls: 'badge-mgr-approved' },
  approved: { label: 'Approved', cls: 'badge-approved' },
  rejected: { label: 'Rejected', cls: 'badge-rejected' },
};

export default function ExpensesPage() {
  const { user, loading } = useAuth();
  const { showToast } = useToast();
  const router = useRouter();

  const [expenses, setExpenses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ date: new Date().toISOString().split('T')[0], title: '', description: '', amount: '', image: null });
  const [imagePreview, setImagePreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [selectedExp, setSelectedExp] = useState(null);
  const [filter, setFilter] = useState('all');
  const fileRef = useRef(null);

  const canCreate = ['field_staff', 'manager', 'director', 'ceo'].includes(user?.role);
  const isAccountant = user?.role === 'accountant';

  useEffect(() => {
    if (!loading && !user) { router.push('/'); return; }
    if (user) loadExpenses();
  }, [user, loading]);

  const loadExpenses = async () => {
    let url;
    if (user.role === 'field_staff') url = `/api/expenses?userId=${user.id}`;
    else if (isAccountant) url = `/api/expenses?forAccountant=true`;
    else url = `/api/expenses?forSpan=${user.id}`;
    const res = await fetch(url);
    const data = await res.json();
    setExpenses(data.expenses || []);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 3 * 1024 * 1024) { showToast('Image must be under 3MB', 'error'); return; }
    const reader = new FileReader();
    reader.onload = (ev) => { setForm(p => ({ ...p, image: ev.target.result })); setImagePreview(ev.target.result); };
    reader.readAsDataURL(file);
  };

  const submitExpense = async (e) => {
    e.preventDefault();
    if (!form.title || !form.amount) { showToast('Title and amount are required', 'error'); return; }
    if (parseFloat(form.amount) <= 0) { showToast('Amount must be greater than 0', 'error'); return; }
    setSubmitting(true);
    try {
      const res = await fetch('/api/expenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, ...form, amount: parseFloat(form.amount) })
      });
      const data = await res.json();
      if (!res.ok) { showToast(data.error, 'error'); return; }
      showToast('Email Sent — Expense submitted and approver notified', 'success');
      setShowForm(false);
      setForm({ date: new Date().toISOString().split('T')[0], title: '', description: '', amount: '', image: null });
      setImagePreview(null);
      loadExpenses();
    } catch { showToast('Error submitting expense', 'error'); }
    finally { setSubmitting(false); }
  };

  const handleApprove = async (expId, action, rejectionReason) => {
    try {
      const res = await fetch(`/api/expenses/${expId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, approvedBy: user.id, rejectionReason })
      });
      if (!res.ok) { showToast('Action failed', 'error'); return; }
      showToast(action === 'approve' ? 'Email Sent — Expense approved' : 'Expense rejected', action === 'approve' ? 'success' : 'warning');
      setSelectedExp(null);
      loadExpenses();
    } catch { showToast('Error', 'error'); }
  };

  const exportCSV = async () => {
    const res = await fetch(`/api/reports?type=expenses&forSpan=${user.id}`);
    const data = await res.json();
    if (!data.rows?.length) { showToast('No data to export', 'warning'); return; }
    const headers = Object.keys(data.rows[0]);
    const csv = [headers.join(','), ...data.rows.map(r => headers.map(h => `"${String(r[h] || '').replace(/"/g, '""')}"`).join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = data.filename || 'expenses.csv'; a.click();
    URL.revokeObjectURL(url);
    showToast('Export downloaded', 'success');
  };

  if (loading || !user) return null;

  const filtered = filter === 'all' ? expenses : expenses.filter(e => e.status === filter);

  return (
    <AppShell>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 4 }}>
        <div>
          <h1 className="page-title">Expenses</h1>
          <p className="page-sub">Track and manage field expense claims</p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {(isAccountant || ['super_admin', 'ceo', 'director'].includes(user.role)) && (
            <button className="fe-btn-outline" onClick={exportCSV}><i className="ti ti-download" /> Export CSV</button>
          )}
          {canCreate && (
            <button className="fe-btn-primary" onClick={() => setShowForm(true)}><i className="ti ti-plus" /> New Expense</button>
          )}
        </div>
      </div>

      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
        {['all', 'pending_manager', 'pending_director', 'manager_approved', 'approved', 'rejected'].map(s => (
          <button key={s} onClick={() => setFilter(s)}
            style={{ padding: '5px 14px', borderRadius: 20, fontSize: 12, fontWeight: 500, cursor: 'pointer', border: filter === s ? 'none' : '1px solid var(--fe-gray-100)', background: filter === s ? 'var(--fe-teal-600)' : 'white', color: filter === s ? 'white' : 'var(--fe-gray-600)' }}>
            {s === 'all' ? 'All' : STATUS_MAP[s]?.label || s}
            {s !== 'all' && <span style={{ marginLeft: 4, opacity: 0.7 }}>({expenses.filter(e => e.status === s).length})</span>}
          </button>
        ))}
      </div>

      {/* Tile list */}
      {filtered.length === 0 ? (
        <div className="fe-card"><div className="empty-state"><i className="ti ti-receipt" style={{ fontSize: 36, display: 'block', marginBottom: 8 }} />No expenses found</div></div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {filtered.map(e => {
            const sm = STATUS_MAP[e.status] || {};
            const canApprove = canUserApprove(user, e);
            return (
              <div key={e.id} className="fe-card" style={{ padding: '14px 16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    {user.role !== 'field_staff' && (
                      <div style={{ fontSize: 12, color: 'var(--fe-teal-600)', fontWeight: 500, marginBottom: 2 }}>
                        {e.userName} <span style={{ color: 'var(--fe-gray-400)', fontWeight: 400 }}>· {e.userEmpId}</span>
                      </div>
                    )}
                    <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--fe-gray-900)' }}>{e.title}</div>
                    {e.description && (
                      <div style={{ fontSize: 12, color: 'var(--fe-gray-400)', marginTop: 2 }}>
                        {e.description.slice(0, 70)}{e.description.length > 70 ? '…' : ''}
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 12, color: 'var(--fe-gray-400)' }}>
                        <i className="ti ti-calendar" style={{ fontSize: 11, marginRight: 3 }} />{e.date}
                      </span>
                      <span className={`badge ${sm.cls}`}>{sm.label || e.status}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8, flexShrink: 0 }}>
                    <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--fe-teal-600)' }}>₹{e.amount?.toLocaleString('en-IN')}</div>
                    <button className="fe-btn-outline fe-btn-sm" onClick={() => setSelectedExp(e)}>
                      {canApprove ? 'Review' : 'View'}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* New Expense Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-title"><i className="ti ti-receipt-2" /> New Expense Claim</div>
            <form onSubmit={submitExpense}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="fe-label">Date</label>
                  <input type="date" className="fe-input" value={form.date} onChange={e => setForm(p => ({ ...p, date: e.target.value }))} max={new Date().toISOString().split('T')[0]} required />
                </div>
                <div className="form-group">
                  <label className="fe-label">Amount (₹)</label>
                  <input type="number" className="fe-input" placeholder="0.00" min="1" step="0.01" value={form.amount} onChange={e => setForm(p => ({ ...p, amount: e.target.value }))} required />
                </div>
                <div className="form-group full">
                  <label className="fe-label">Title / Expense Type</label>
                  <input className="fe-input" placeholder="e.g. HCP Visit Travel, CME Sponsorship..." value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} required />
                </div>
                <div className="form-group full">
                  <label className="fe-label">Description</label>
                  <textarea className="fe-input" style={{ minHeight: 72 }} placeholder="Detailed description..." value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} />
                </div>
                <div className="form-group full">
                  <label className="fe-label">Receipt / Supporting Image</label>
                  <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
                  <button type="button" className="fe-btn-outline" style={{ width: '100%', justifyContent: 'center' }} onClick={() => fileRef.current.click()}>
                    <i className="ti ti-upload" /> {imagePreview ? 'Change Image' : 'Upload Receipt'}
                  </button>
                  {imagePreview && <img src={imagePreview} alt="receipt" style={{ marginTop: 8, maxHeight: 100, borderRadius: 6, border: '1px solid var(--fe-gray-100)' }} />}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 8 }}>
                <button type="button" className="fe-btn-outline" onClick={() => setShowForm(false)}>Cancel</button>
                <button type="submit" className="fe-btn-primary" disabled={submitting}><i className="ti ti-send" /> Submit Claim</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Expense Detail / Approve Modal */}
      {selectedExp && (
        <ExpenseDetailModal expense={selectedExp} user={user} onClose={() => setSelectedExp(null)} onApprove={(action, reason) => handleApprove(selectedExp.id, action, reason)} />
      )}
    </AppShell>
  );
}

function canUserApprove(user, exp) {
  if (user.role === 'accountant' && exp.status === 'manager_approved') return true;
  if (user.role === 'manager' && exp.status === 'pending_manager' && exp.managerId === user.id) return true;
  if (['director', 'ceo'].includes(user.role) && exp.status === 'pending_director' && exp.managerId === user.id) return true;
  if (user.role === 'super_admin') return ['pending_manager', 'pending_director', 'manager_approved'].includes(exp.status);
  return false;
}

function ExpenseDetailModal({ expense: exp, user, onClose, onApprove }) {
  const [rejReason, setRejReason] = useState('');
  const [showReject, setShowReject] = useState(false);
  const canApprove = canUserApprove(user, exp);
  const sm = STATUS_MAP[exp.status] || {};

  const steps = [
    { label: 'Submitted', done: true, date: exp.createdAt?.split('T')[0] },
    { label: exp.status === 'pending_director' ? 'Director Approval' : 'Manager Approval', done: !!exp.managerApprovedAt, date: exp.managerApprovedAt?.split('T')[0] },
    { label: 'Accountant Approval', done: !!exp.accountantApprovedAt, date: exp.accountantApprovedAt?.split('T')[0] },
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-title"><i className="ti ti-receipt-2" /> Expense Detail</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
          <div><div style={{ fontSize: 11, color: 'var(--fe-gray-400)' }}>Employee</div><div style={{ fontWeight: 500 }}>{exp.userName}</div></div>
          <div><div style={{ fontSize: 11, color: 'var(--fe-gray-400)' }}>Date</div><div>{exp.date}</div></div>
          <div><div style={{ fontSize: 11, color: 'var(--fe-gray-400)' }}>Title</div><div style={{ fontWeight: 500 }}>{exp.title}</div></div>
          <div><div style={{ fontSize: 11, color: 'var(--fe-gray-400)' }}>Amount</div><div style={{ fontWeight: 700, fontSize: 18, color: 'var(--fe-teal-600)' }}>₹{exp.amount?.toLocaleString('en-IN')}</div></div>
          <div style={{ gridColumn: '1/-1' }}><div style={{ fontSize: 11, color: 'var(--fe-gray-400)' }}>Description</div><div style={{ fontSize: 13 }}>{exp.description || '—'}</div></div>
          <div><div style={{ fontSize: 11, color: 'var(--fe-gray-400)' }}>Status</div><span className={`badge ${sm.cls}`}>{sm.label}</span></div>
        </div>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 12, color: 'var(--fe-gray-400)', marginBottom: 8 }}>Approval Progress</div>
          <div className="approval-timeline">
            {steps.map((s, i) => (
              <div key={i} className={`timeline-step ${s.done ? 'done' : ''}`}>
                <div style={{ fontSize: 13, fontWeight: s.done ? 500 : 400, color: s.done ? 'var(--fe-teal-800)' : 'var(--fe-gray-400)' }}>{s.label}</div>
                {s.date && <div style={{ fontSize: 11, color: 'var(--fe-gray-400)' }}>{s.date}</div>}
              </div>
            ))}
          </div>
        </div>
        {exp.rejectionReason && (
          <div style={{ background: 'var(--fe-red-50)', border: '1px solid var(--fe-red-100)', borderRadius: 8, padding: 12, marginBottom: 16, fontSize: 13, color: 'var(--fe-red-800)' }}>
            <strong>Rejected:</strong> {exp.rejectionReason}
          </div>
        )}
        {showReject && (
          <div style={{ marginBottom: 16 }}>
            <label className="fe-label">Rejection Reason</label>
            <textarea className="fe-input" style={{ minHeight: 64 }} value={rejReason} onChange={e => setRejReason(e.target.value)} placeholder="Please provide reason..." />
          </div>
        )}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          <button className="fe-btn-outline" onClick={onClose}>Close</button>
          {canApprove && !showReject && (
            <>
              <button className="fe-btn-danger fe-btn-sm" onClick={() => setShowReject(true)}>Reject</button>
              <button className="fe-btn-primary" onClick={() => onApprove('approve')}><i className="ti ti-check" /> Approve</button>
            </>
          )}
          {canApprove && showReject && (
            <>
              <button className="fe-btn-outline" onClick={() => setShowReject(false)}>Cancel</button>
              <button className="fe-btn-danger" onClick={() => { if (rejReason) onApprove('reject', rejReason); }}>Confirm Reject</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
