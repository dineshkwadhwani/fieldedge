'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/context/ToastContext';
import AppShell from '@/components/AppShell';

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
    } finally {
      setLoadingData(false);
    }
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
    const a = document.createElement('a');
    a.href = url; a.download = data.filename || `${type}.csv`; a.click();
    URL.revokeObjectURL(url);
    showToast('Export downloaded', 'success');
  };

  if (loading || !user) return null;

  const totalExpAmount = expenses.reduce((s, e) => s + (e.amount || 0), 0);
  const approvedExp = expenses.filter(e => e.status === 'approved').reduce((s, e) => s + (e.amount || 0), 0);
  const presentDays = attendance.filter(a => a.userId === user.id && a.type === 'present').length;
  const leaveDays = leaves.filter(l => l.userId === user.id && l.status === 'approved').length;

  return (
    <AppShell>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 4 }}>
        <div>
          <h1 className="page-title">Reports</h1>
          <p className="page-sub">Field activity analytics and data export</p>
        </div>
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
          <button className="fe-btn-outline" onClick={() => exportCSV(tab)}>
            <i className="ti ti-download" /> Export {tab === 'attendance' ? 'Attendance' : tab === 'expenses' ? 'Expenses' : 'Leaves'} CSV
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

      {/* Tables */}
      {tab === 'attendance' && (
        <div className="fe-card">
          <div className="table-wrap">
            {attendance.length === 0 ? <div className="empty-state">No attendance data for selected period</div> : (
              <table>
                <thead><tr>
                  {isTeam && <th>Employee</th>}
                  <th>Date</th>
                  <th>Status</th>
                  <th>Location</th>
                  <th>HCPs Visited</th>
                  <th>Notes</th>
                </tr></thead>
                <tbody>
                  {attendance.map(a => (
                    <tr key={a.id}>
                      {isTeam && <td><div style={{ fontWeight: 500 }}>{a.userName}</div><div style={{ fontSize: 11, color: 'var(--fe-gray-400)' }}>{a.userEmpId}</div></td>}
                      <td>{a.date}</td>
                      <td><span className={`badge badge-${a.type}`}>{a.type === 'present' ? 'Present' : 'Leave'}</span></td>
                      <td>{a.locationName || '—'}</td>
                      <td style={{ fontSize: 12 }}>{a.customerNames?.join(', ') || '—'}</td>
                      <td style={{ fontSize: 12, color: 'var(--fe-gray-400)', maxWidth: 180, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{a.comments || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}

      {tab === 'expenses' && (
        <div className="fe-card">
          <div className="table-wrap">
            {expenses.length === 0 ? <div className="empty-state">No expense data for selected period</div> : (
              <table>
                <thead><tr>
                  {isTeam && <th>Employee</th>}
                  <th>Date</th>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr></thead>
                <tbody>
                  {expenses.map(e => {
                    const STATUS = { pending_manager: ['badge-pending', 'Pending Mgr'], pending_director: ['badge-pending', 'Pending Dir'], manager_approved: ['badge-mgr-approved', 'Mgr Approved'], approved: ['badge-approved', 'Approved'], rejected: ['badge-rejected', 'Rejected'] };
                    const [cls, lbl] = STATUS[e.status] || ['', e.status];
                    return (
                      <tr key={e.id}>
                        {isTeam && <td><div style={{ fontWeight: 500 }}>{e.userName}</div></td>}
                        <td>{e.date}</td>
                        <td>{e.title}</td>
                        <td style={{ fontWeight: 500 }}>₹{e.amount?.toLocaleString('en-IN')}</td>
                        <td><span className={`badge ${cls}`}>{lbl}</span></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}

      {tab === 'leaves' && (
        <div className="fe-card">
          <div className="table-wrap">
            {leaves.length === 0 ? <div className="empty-state">No leave data</div> : (
              <table>
                <thead><tr>
                  {isTeam && <th>Employee</th>}
                  <th>From</th>
                  <th>To</th>
                  <th>Days</th>
                  <th>Reason</th>
                  <th>Status</th>
                </tr></thead>
                <tbody>
                  {leaves.map(l => (
                    <tr key={l.id}>
                      {isTeam && <td style={{ fontWeight: 500 }}>{l.userName}</td>}
                      <td>{l.fromDate}</td>
                      <td>{l.toDate}</td>
                      <td>{Math.ceil((new Date(l.toDate) - new Date(l.fromDate)) / 86400000) + 1}</td>
                      <td style={{ fontSize: 12 }}>{l.reason}</td>
                      <td><span className={`badge badge-${l.status === 'approved' ? 'approved' : l.status === 'rejected' ? 'rejected' : 'pending'}`}>{l.status.charAt(0).toUpperCase() + l.status.slice(1)}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}
    </AppShell>
  );
}
