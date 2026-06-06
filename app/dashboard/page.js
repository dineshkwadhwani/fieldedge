'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import AppShell from '@/components/AppShell';

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState(null);
  const [recentAttendance, setRecentAttendance] = useState([]);
  const [pendingExpenses, setPendingExpenses] = useState([]);
  const [pendingLeaves, setPendingLeaves] = useState([]);

  useEffect(() => {
    if (!loading && !user) { router.push('/'); return; }
    if (user) loadData();
  }, [user, loading]);

  const today = new Date().toISOString().split('T')[0];

  const loadData = async () => {
    try {
      const [attRes, expRes, leaveRes] = await Promise.all([
        fetch(`/api/attendance?${user.role === 'field_staff' ? `userId=${user.id}` : `forSpan=${user.id}`}&date=${today}`),
        fetch(`/api/expenses?${user.role === 'field_staff' ? `userId=${user.id}` : `forSpan=${user.id}`}`),
        fetch(`/api/leaves?${user.role === 'field_staff' ? `userId=${user.id}` : `forSpan=${user.id}`}`),
      ]);
      const [attData, expData, leaveData] = await Promise.all([attRes.json(), expRes.json(), leaveRes.json()]);

      const att = attData.attendance || [];
      const exp = expData.expenses || [];
      const lv = leaveData.leaves || [];

      setRecentAttendance(att.slice(0, 5));
      setPendingExpenses(exp.filter(e => e.status !== 'approved' && e.status !== 'rejected').slice(0, 5));
      setPendingLeaves(lv.filter(l => l.status === 'pending').slice(0, 5));

      const myAtt = att.find(a => a.userId === user.id);
      setStats({
        presentToday: att.filter(a => a.type === 'present').length,
        leaveToday: att.filter(a => a.type === 'leave').length,
        totalTeam: att.length,
        pendingExpCount: exp.filter(e => ['pending_manager', 'pending_director', 'manager_approved'].includes(e.status)).length,
        myAttToday: myAtt,
        totalExpMTD: exp.filter(e => {
          const d = new Date(e.date); const now = new Date();
          return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
        }).reduce((s, e) => s + (e.amount || 0), 0),
      });
    } catch {}
  };

  if (loading || !user) return null;

  const isTeamRole = ['ceo', 'director', 'manager', 'super_admin'].includes(user.role);

  return (
    <AppShell>
      <div>
        <div style={{ marginBottom: 24 }}>
          <h1 className="page-title">Good {getGreeting()}, {user.name.split(' ')[0]} 👋</h1>
          <p className="page-sub">{user.title} · {today}</p>
        </div>

        {stats && (
          <div className="stat-grid">
            {isTeamRole && (
              <>
                <div className="stat-card">
                  <div className="stat-value" style={{ color: 'var(--fe-teal-600)' }}>{stats.presentToday}</div>
                  <div className="stat-label">Present Today</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value" style={{ color: 'var(--fe-amber-400)' }}>{stats.leaveToday}</div>
                  <div className="stat-label">On Leave Today</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value" style={{ color: 'var(--fe-red-400)' }}>{stats.pendingExpCount}</div>
                  <div className="stat-label">Pending Expenses</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value" style={{ color: 'var(--fe-teal-400)' }}>₹{stats.totalExpMTD.toLocaleString('en-IN')}</div>
                  <div className="stat-label">Expenses MTD</div>
                </div>
              </>
            )}
            {!isTeamRole && (
              <>
                <div className="stat-card">
                  <div className="stat-value" style={{ color: stats.myAttToday ? 'var(--fe-green-600)' : 'var(--fe-gray-400)' }}>
                    {stats.myAttToday ? (stats.myAttToday.type === 'present' ? 'Present' : 'On Leave') : 'Not Marked'}
                  </div>
                  <div className="stat-label">Today's Status</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value" style={{ color: 'var(--fe-amber-400)' }}>{stats.pendingExpCount}</div>
                  <div className="stat-label">Pending Expenses</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value" style={{ color: 'var(--fe-teal-400)' }}>₹{stats.totalExpMTD.toLocaleString('en-IN')}</div>
                  <div className="stat-label">Expenses MTD</div>
                </div>
              </>
            )}
          </div>
        )}

        {/* Today's action card */}
        {stats && !stats.myAttToday && (
          <div style={{ background: 'var(--fe-teal-50)', border: '1px solid var(--fe-teal-100)', borderRadius: 12, padding: 20, marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div style={{ fontWeight: 600, color: 'var(--fe-teal-800)', marginBottom: 4 }}>
                <i className="ti ti-alert-circle" style={{ marginRight: 6 }} />Attendance not marked for today
              </div>
              <div style={{ fontSize: 13, color: 'var(--fe-teal-600)' }}>Mark your attendance to log your field visits</div>
            </div>
            <button className="fe-btn-primary fe-btn-sm" onClick={() => router.push('/attendance')}>
              <i className="ti ti-calendar-check" /> Mark Attendance
            </button>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {/* Recent Attendance */}
          {recentAttendance.length > 0 && (
            <div className="fe-card">
              <div className="section-header">
                <div className="section-title"><i className="ti ti-calendar-check" style={{ marginRight: 6, color: 'var(--fe-teal-400)' }} />Recent Attendance</div>
                <button className="fe-btn-outline fe-btn-sm" onClick={() => router.push('/attendance')}>View All</button>
              </div>
              {recentAttendance.slice(0, 4).map(a => (
                <div key={a.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '0.5px solid var(--fe-gray-100)' }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{isTeamRole ? a.userName : a.date}</div>
                    <div style={{ fontSize: 11, color: 'var(--fe-gray-400)' }}>{isTeamRole ? a.date : (a.locationName || 'No location')}</div>
                  </div>
                  <span className={`badge badge-${a.type}`}>{a.type === 'present' ? 'Present' : 'Leave'}</span>
                </div>
              ))}
            </div>
          )}

          {/* Pending Expenses */}
          {pendingExpenses.length > 0 && (
            <div className="fe-card">
              <div className="section-header">
                <div className="section-title"><i className="ti ti-receipt" style={{ marginRight: 6, color: 'var(--fe-amber-400)' }} />Pending Expenses</div>
                <button className="fe-btn-outline fe-btn-sm" onClick={() => router.push('/expenses')}>View All</button>
              </div>
              {pendingExpenses.slice(0, 4).map(e => (
                <div key={e.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '0.5px solid var(--fe-gray-100)' }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{e.title}</div>
                    <div style={{ fontSize: 11, color: 'var(--fe-gray-400)' }}>{isTeamRole ? e.userName : e.date} · ₹{e.amount?.toLocaleString('en-IN')}</div>
                  </div>
                  <span className={`badge badge-pending`}>{statusLabel(e.status)}</span>
                </div>
              ))}
            </div>
          )}

          {/* Pending leaves for managers */}
          {pendingLeaves.length > 0 && ['manager', 'director', 'ceo'].includes(user.role) && (
            <div className="fe-card">
              <div className="section-header">
                <div className="section-title"><i className="ti ti-calendar-time" style={{ marginRight: 6, color: 'var(--fe-red-400)' }} />Pending Leaves</div>
                <button className="fe-btn-outline fe-btn-sm" onClick={() => router.push('/leaves')}>View All</button>
              </div>
              {pendingLeaves.slice(0, 4).map(l => (
                <div key={l.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '0.5px solid var(--fe-gray-100)' }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{l.userName}</div>
                    <div style={{ fontSize: 11, color: 'var(--fe-gray-400)' }}>{l.fromDate} → {l.toDate}</div>
                  </div>
                  <span className="badge badge-pending">Pending</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return 'morning';
  if (h < 17) return 'afternoon';
  return 'evening';
}

function statusLabel(s) {
  const m = { pending_manager: 'Pending Mgr', pending_director: 'Pending Dir', manager_approved: 'Mgr Approved', approved: 'Approved', rejected: 'Rejected' };
  return m[s] || s;
}
