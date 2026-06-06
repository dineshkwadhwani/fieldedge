'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/context/ToastContext';
import AppShell from '@/components/AppShell';

const ROLE_LABELS = { field_staff: 'Field Staff', manager: 'Manager', director: 'Director', ceo: 'CEO', accountant: 'Accountant', super_admin: 'Super Admin' };

export default function AdminNotifications() {
  const { user, loading } = useAuth();
  const { showToast } = useToast();
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ subject: '', message: '', targetRole: 'all', targetUserId: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState([]);

  useEffect(() => {
    if (!loading && !user) { router.push('/'); return; }
    if (user && user.role !== 'super_admin') { router.push('/dashboard'); return; }
    if (user) loadUsers();
  }, [user, loading]);

  const loadUsers = async () => {
    const res = await fetch('/api/users');
    const data = await res.json();
    setUsers((data.users || []).filter(u => u.active !== false));
  };

  const sendNotification = async (e) => {
    e.preventDefault();
    if (!form.subject.trim() || !form.message.trim()) {
      showToast('Subject and message are required', 'error'); return;
    }
    setSending(true);
    await new Promise(r => setTimeout(r, 800));

    let recipientCount = 0;
    let recipientLabel = '';
    if (form.targetRole === 'all') {
      recipientCount = users.length;
      recipientLabel = 'All Users';
    } else if (form.targetRole === 'specific' && form.targetUserId) {
      recipientCount = 1;
      const u = users.find(u => u.id === form.targetUserId);
      recipientLabel = u ? u.name : 'Selected User';
    } else {
      const matching = users.filter(u => u.role === form.targetRole);
      recipientCount = matching.length;
      recipientLabel = `All ${ROLE_LABELS[form.targetRole]}s`;
    }

    const record = {
      id: Date.now(),
      subject: form.subject,
      message: form.message,
      targetLabel: recipientLabel,
      recipientCount,
      sentAt: new Date().toLocaleString('en-IN'),
      sentBy: user.name,
    };
    setSent(prev => [record, ...prev]);
    showToast(`Email Sent — Notification delivered to ${recipientCount} user${recipientCount !== 1 ? 's' : ''}`, 'success');
    setForm({ subject: '', message: '', targetRole: 'all', targetUserId: '' });
    setSending(false);
  };

  if (loading || !user) return null;

  const QUICK_TEMPLATES = [
    { label: 'Attendance Reminder', subject: 'Reminder: Mark your attendance today', message: 'This is a reminder to mark your attendance for today before 6:00 PM. Please ensure your location and HCP visits are logged accurately.\n\nRegards,\nFieldEdge Admin' },
    { label: 'Expense Deadline', subject: 'Expense submission deadline — end of month', message: 'Please submit all pending expense claims before month-end. Late submissions may not be processed in this cycle.\n\nRegards,\nFieldEdge Admin' },
    { label: 'System Maintenance', subject: 'Scheduled maintenance — FieldEdge', message: 'FieldEdge will undergo scheduled maintenance this Sunday from 2 AM to 4 AM. Please save your work beforehand.\n\nRegards,\nFieldEdge Admin' },
  ];

  return (
    <AppShell>
      <h1 className="page-title">Notifications</h1>
      <p className="page-sub">Send broadcast messages to the field force team</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
        {/* Compose */}
        <div className="fe-card">
          <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--fe-teal-800)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
            <i className="ti ti-mail-forward" style={{ color: 'var(--fe-teal-400)' }} /> Compose Notification
          </div>

          {/* Quick templates */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 12, color: 'var(--fe-gray-400)', marginBottom: 8 }}>Quick Templates</div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {QUICK_TEMPLATES.map(t => (
                <button key={t.label} type="button"
                  onClick={() => setForm(p => ({ ...p, subject: t.subject, message: t.message }))}
                  style={{ fontSize: 11, padding: '4px 10px', borderRadius: 6, border: '1px solid var(--fe-teal-100)', background: 'var(--fe-teal-50)', color: 'var(--fe-teal-700)', cursor: 'pointer' }}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={sendNotification}>
            <div className="form-group">
              <label className="fe-label">Send To</label>
              <select className="fe-select" value={form.targetRole} onChange={e => setForm(p => ({ ...p, targetRole: e.target.value, targetUserId: '' }))}>
                <option value="all">All Users ({users.length})</option>
                {Object.entries(ROLE_LABELS).map(([r, l]) => (
                  <option key={r} value={r}>{l}s ({users.filter(u => u.role === r).length})</option>
                ))}
                <option value="specific">Specific User</option>
              </select>
            </div>
            {form.targetRole === 'specific' && (
              <div className="form-group">
                <label className="fe-label">Select User</label>
                <select className="fe-select" value={form.targetUserId} onChange={e => setForm(p => ({ ...p, targetUserId: e.target.value }))}>
                  <option value="">-- Select User --</option>
                  {users.map(u => <option key={u.id} value={u.id}>{u.name} ({ROLE_LABELS[u.role]})</option>)}
                </select>
              </div>
            )}
            <div className="form-group">
              <label className="fe-label">Subject</label>
              <input className="fe-input" placeholder="Notification subject line" value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))} required />
            </div>
            <div className="form-group">
              <label className="fe-label">Message</label>
              <textarea
                className="fe-input"
                style={{ minHeight: 120, resize: 'vertical' }}
                placeholder="Enter your notification message here..."
                value={form.message}
                onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                required
              />
            </div>
            <button type="submit" className="fe-btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={sending}>
              {sending ? <><i className="ti ti-loader-2" style={{ animation: 'spin 1s linear infinite' }} /> Sending...</> : <><i className="ti ti-send" /> Send Notification</>}
            </button>
          </form>
        </div>

        {/* Sent history */}
        <div className="fe-card">
          <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--fe-teal-800)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
            <i className="ti ti-history" style={{ color: 'var(--fe-teal-400)' }} /> Sent Notifications
          </div>
          {sent.length === 0 ? (
            <div className="empty-state" style={{ padding: '40px 20px' }}>
              <i className="ti ti-bell" style={{ fontSize: 32, display: 'block', marginBottom: 8 }} />
              No notifications sent yet in this session
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {sent.map(n => (
                <div key={n.id} style={{ padding: '12px', background: 'var(--fe-gray-50)', borderRadius: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                    <div style={{ fontWeight: 500, fontSize: 13 }}>{n.subject}</div>
                    <span style={{ fontSize: 11, background: 'var(--fe-teal-50)', color: 'var(--fe-teal-600)', padding: '2px 8px', borderRadius: 4, whiteSpace: 'nowrap', flexShrink: 0 }}>
                      {n.recipientCount} recipients
                    </span>
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--fe-gray-400)', marginTop: 4 }}>
                    To: {n.targetLabel} · {n.sentAt}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--fe-gray-500)', marginTop: 4, fontStyle: 'italic' }}>
                    {n.message.slice(0, 80)}{n.message.length > 80 ? '…' : ''}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </AppShell>
  );
}
