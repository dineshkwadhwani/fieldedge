'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/context/ToastContext';
import AppShell from '@/components/AppShell';

const STATUS_LABELS = {
  pending_manager: 'Pending Mgr', pending_director: 'Pending Dir',
  manager_approved: 'Mgr Approved', approved: 'Approved', rejected: 'Rejected'
};
const STATUS_CLS = {
  pending_manager: 'badge-pending', pending_director: 'badge-pending',
  manager_approved: 'badge-mgr-approved', approved: 'badge-approved', rejected: 'badge-rejected'
};

export default function ReportsPage() {
  const { user, loading } = useAuth();
  const { showToast } = useToast();
  const router = useRouter();

  const today = new Date().toISOString().split('T')[0];
  const firstOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0];

  const [tab, setTab] = useState('attendance');
  const [from, setFrom] = useState(firstOfMonth);
  const [to, setTo] = useState(today);
  const [attendance, setAttendance] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [leaves, setLeaves] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  const isTeam = ['ceo', 'director', 'manager', 'super_admin', 'accountant'].includes(user?.role);

  useEffect(() => {
    if (!loading && !user) { router.push('/'); return; }
    if (user) loadAll();
  }, [user, loading]);

  const loadAll = async () => {
    setLoadingData(true);
    const span = isTeam ? `forSpan=${user.id}` : `userId=${user.id}`;
    try {
      const [attRes, expRes, lvRes] = await Promise.all([
        fetch(`/api/attendance?${span}&from=${from}&to=${to}`),
        fetch(`/api/expenses?${span}&from=${from}&to=${to}`),
        fetch(`/api/leaves?${isTeam ? `forSpan=${user.id}` : `userId=${user.id}`}`),
      ]);
      const [attData, expData, lvData] = await Promise.all([attRes.json(), expRes.json(), lvRes.json()]);
      setAttendance(attData.attendance || []);
      setExpenses(expData.expenses || []);
      setLeaves(lvData.leaves || []);
    } finally { setLoadingData(false); }
  };

  const exportCSV = async (type) => {
    const span = isTeam ? `forSpan=${user.id}` : `userId=${user.id}`;
    const res = await fetch(`/api/reports?type=${type}&from=${from}&to=${to}&${span}`);
    const data = await res.json();
    if (!data.rows?.length) { showToast('No data to export', 'warning'); return; }
    const headers = Object.keys(data.rows[0]);
    const csv = [headers.join(','), ...data.rows.map(r => headers.map(h => `"${String(r[h] || '').replace(/"/g, '""')}"`).join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = data.filename || `${type}.csv`; a.click();
    URL.revokeObjectURL(url);
    showToast('Export downloaded', 'success');
  };

  if (loading || !user) return null;

  const totalExpAmount = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const approvedExp = expenses.filter(e => e.status === 'approved').reduce((s, e) => s + (e.amount || 0), 0);
  const presentDays = attendance.filter(a => a.userId === user.id && a.type === 'present').length;
  const leaveDays = leaves.filter(l => l.userId === user.id && l.status === 'approved').length;
  const dayCount = (from, to) => Math.ceil((new Date(to) - new Date(from)) / 86400000) + 1;

  return (
    <AppShell>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 4 }}>
        <div>
          <h1 className="page-title">Reports</h1>
          <p className="page-sub">Field activity analytics and data export</p>
        </div>
        <button className="fe-btn-outline" onClick={() => exportCSV(tab)}>
          <i className="ti ti-download" /> Export CSV
        </button>
      </div>

      {/* Date filter */}
      <div className="fe-card" style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <div>
            <label className="fe-label">From Date</label>
            <input type="date" className="fe-input" style={{ width: 160 }} value={from} onChange={e => setFrom(e.target.value)} max={to} />
          </div>
          <div>
            <label className="fe-label">To Date</label>
            <input type="date" className="fe-input" style={{ width: 160 }} value={to} onChange={e => setTo(e.target.value)} min={from} max={today} />
          </div>
          <button className="fe-btn-primary" onClick={loadAll} disabled={loadingData}>
            <i className="ti ti-search" /> {loadingData ? 'Loading...' : 'Apply Filter'}
          </button>
        </div>
      </div>

      {/* Summary stats */}
      <div className="stat-grid" style={{ marginBottom: 20 }}>
        <div className="stat-card">
          <div className="stat-value" style={{ color: 'var(--fe-teal-600)' }}>{isTeam ? attendance.filter(a => a.type === 'present').length : presentDays}</div>
          <div className="stat-label">{isTeam ? 'Team Present Days' : 'My Present Days'}</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{ color: 'var(--fe-amber-400)' }}>{isTeam ? leaves.filter(l => l.status === 'approved').length : leaveDays}</div>
          <div className="stat-label">Approved Leaves</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{ color: 'var(--fe-teal-400)' }}>₹{totalExpAmount.toLocaleString('en-IN')}</div>
          <div className="stat-label">Total Expenses</div>
        </div>
        <div className="stat-card">
          <div className="stat-value" style={{ color: 'var(--fe-green-600)' }}>₹{approvedExp.toLocaleString('en-IN')}</div>
          <div className="stat-label">Approved Expenses</div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {['attendance', 'expenses', 'leaves'].map(t => (
          <button key={t} onClick={() => setTab(t)}
            style={{ padding: '7px 18px', borderRadius: 8, fontSize: 13, fontWeight: 500, cursor: 'pointer', border: tab === t ? 'none' : '1px solid var(--fe-gray-100)', background: tab === t ? 'var(--fe-teal-600)' : 'white', color: tab === t ? 'white' : 'var(--fe-gray-600)', textTransform: 'capitalize' }}>
            {t}
          </button>
        ))}
      </div>

      {/* Attendance tiles */}
      {tab === 'attendance' && (
        attendance.length === 0
          ? <div className="fe-card"><div className="empty-state">No attendance data for selected period</div></div>
          : <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {attendance.map(a => (
                <div key={a.id} className="fe-card" style={{ padding: '12px 16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      {isTeam && <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 1 }}>{a.userName} <span style={{ color: 'var(--fe-gray-400)', fontWeight: 400, fontSize: 12 }}>{a.userEmpId}</span></div>}
                      <div style={{ fontSize: 13, color: isTeam ? 'var(--fe-gray-500)' : 'var(--fe-gray-800)' }}>{a.date}</div>
                      {a.locationName && <div style={{ fontSize: 12, color: 'var(--fe-gray-400)', marginTop: 2 }}><i className="ti ti-map-pin" style={{ fontSize: 11 }} /> {a.locationName}</div>}
                      {a.customerNames?.length > 0 && <div style={{ fontSize: 12, color: 'var(--fe-teal-600)', marginTop: 2 }}>{a.customerNames.join(', ')}</div>}
                      {a.comments && <div style={{ fontSize: 11, color: 'var(--fe-gray-400)', marginTop: 3, fontStyle: 'italic' }}>{a.comments.slice(0, 80)}{a.comments.length > 80 ? '…' : ''}</div>}
                    </div>
                    <span className={`badge badge-${a.type}`} style={{ flexShrink: 0 }}>{a.type === 'present' ? 'Present' : 'Leave'}</span>
                  </div>
                </div>
              ))}
            </div>
      )}

      {/* Expenses tiles */}
      {tab === 'expenses' && (
        expenses.length === 0
          ? <div className="fe-card"><div className="empty-state">No expense data for selected period</div></div>
          : <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {expenses.map(e => (
                <div key={e.id} className="fe-card" style={{ padding: '12px 16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      {isTeam && <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 1 }}>{e.userName}</div>}
                      <div style={{ fontWeight: 500, fontSize: 13 }}>{e.title}</div>
                      <div style={{ fontSize: 12, color: 'var(--fe-gray-400)', marginTop: 1 }}>{e.date}</div>
                      <div style={{ marginTop: 6, display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                        <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--fe-teal-600)' }}>₹{e.amount?.toLocaleString('en-IN')}</span>
                        <span className={`badge ${STATUS_CLS[e.status]}`}>{STATUS_LABELS[e.status] || e.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
      )}

      {/* Leaves tiles */}
      {tab === 'leaves' && (
        leaves.length === 0
          ? <div className="fe-card"><div className="empty-state">No leave data</div></div>
          : <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {leaves.map(l => (
                <div key={l.id} className="fe-card" style={{ padding: '12px 16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                    <div style={{ flex: 1 }}>
                      {isTeam && <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 2 }}>{l.userName}</div>}
                      <div style={{ fontSize: 13, color: 'var(--fe-gray-800)' }}>{l.fromDate} → {l.toDate}
                        <span style={{ fontSize: 12, color: 'var(--fe-gray-400)', marginLeft: 8 }}>{dayCount(l.fromDate, l.toDate)} days</span>
                      </div>
                      <div style={{ fontSize: 12, color: 'var(--fe-gray-400)', marginTop: 2 }}>{l.reason}</div>
                    </div>
                    <span className={`badge ${l.status === 'approved' ? 'badge-approved' : l.status === 'rejected' ? 'badge-rejected' : 'badge-pending'}`} style={{ flexShrink: 0 }}>
                      {l.status.charAt(0).toUpperCase() + l.status.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
      )}
    </AppShell>
  );
}
