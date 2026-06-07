'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/context/ToastContext';
import AppShell from '@/components/AppShell';
import MultiSelect from '@/components/MultiSelect';

export default function AttendancePage() {
  const { user, loading } = useAuth();
  const { showToast } = useToast();
  const router = useRouter();

  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [locationId, setLocationId] = useState('');
  const [customerIds, setCustomerIds] = useState([]);
  const [comments, setComments] = useState('');
  const [locations, setLocations] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [history, setHistory] = useState([]);
  const [gpsStatus, setGpsStatus] = useState('idle');
  const [gpsCoords, setGpsCoords] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [todayRecord, setTodayRecord] = useState(null);
  const [leaveForm, setLeaveForm] = useState({ fromDate: '', toDate: '', reason: '' });
  const [showLeaveForm, setShowLeaveForm] = useState(false);

  const today = new Date().toISOString().split('T')[0];
  const isTeamView = ['ceo', 'director', 'manager', 'super_admin'].includes(user?.role);

  useEffect(() => {
    if (!loading && !user) { router.push('/'); return; }
    if (user) { loadLocations(); loadCustomers(); loadHistory(); tryGPS(); }
  }, [user, loading]);

  const tryGPS = () => {
    if (!navigator.geolocation) { setGpsStatus('failed'); return; }
    setGpsStatus('detecting');
    navigator.geolocation.getCurrentPosition(
      pos => { setGpsCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude }); setGpsStatus('found'); },
      () => setGpsStatus('failed'),
      { timeout: 8000 }
    );
  };

  const loadLocations = async () => {
    const res = await fetch('/api/locations');
    const data = await res.json();
    setLocations(data.locations || []);
    if (data.locations?.length > 0 && user?.baseLocation) {
      const base = data.locations.find(l => l.id === user.baseLocation);
      if (base) setLocationId(base.id);
    }
  };

  const loadCustomers = async () => {
    const res = await fetch('/api/customers');
    const data = await res.json();
    setCustomers(data.customers || []);
  };

  const loadHistory = async () => {
    const url = isTeamView ? `/api/attendance?forSpan=${user.id}` : `/api/attendance?userId=${user.id}`;
    const res = await fetch(url);
    const data = await res.json();
    setHistory(data.attendance || []);
    const tday = (data.attendance || []).find(a => a.userId === user.id && a.date === today);
    setTodayRecord(tday || null);
  };

  const markAttendance = async (type) => {
    if (type === 'present' && !locationId) { showToast('Please select a location', 'error'); return; }
    setSubmitting(true);
    try {
      const res = await fetch('/api/attendance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, date, type, locationId, customerIds, comments, lat: gpsCoords?.lat, lng: gpsCoords?.lng })
      });
      const data = await res.json();
      if (!res.ok) { showToast(data.error, 'error'); return; }
      showToast(type === 'present' ? 'Attendance marked — Present' : 'Leave marked for today', 'success');
      setComments(''); setCustomerIds([]);
      loadHistory();
    } catch { showToast('Error marking attendance', 'error'); }
    finally { setSubmitting(false); }
  };

  const submitLeave = async (e) => {
    e.preventDefault();
    if (!leaveForm.fromDate || !leaveForm.toDate || !leaveForm.reason) { showToast('All leave fields are required', 'error'); return; }
    try {
      const res = await fetch('/api/leaves', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, ...leaveForm })
      });
      const data = await res.json();
      if (!res.ok) { showToast(data.error, 'error'); return; }
      showToast('Email Sent — Leave request submitted', 'success');
      setShowLeaveForm(false);
      setLeaveForm({ fromDate: '', toDate: '', reason: '' });
    } catch { showToast('Error submitting leave', 'error'); }
  };

  if (loading || !user) return null;

  const customerOptions = customers.map(c => ({ value: c.id, label: c.name, sub: `${c.type} · ${c.specialty}` }));
  const displayHistory = isTeamView ? history.slice(0, 30) : history.filter(a => a.userId === user.id).slice(0, 30);

  return (
    <AppShell>
      <h1 className="page-title">Attendance</h1>
      <p className="page-sub">Mark your daily field presence and HCP visit log</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, marginBottom: 24 }}>
        {/* Mark form */}
        <div className="fe-card">
          <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--fe-teal-800)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
            <i className="ti ti-calendar-plus" /> Mark Today's Attendance
          </div>
          {todayRecord ? (
            <div style={{ background: 'var(--fe-teal-50)', border: '1px solid var(--fe-teal-100)', borderRadius: 10, padding: 16, textAlign: 'center' }}>
              <i className="ti ti-circle-check" style={{ fontSize: 28, color: 'var(--fe-teal-600)', display: 'block', marginBottom: 8 }} />
              <div style={{ fontWeight: 600, color: 'var(--fe-teal-800)' }}>Already marked for today</div>
              <span className={`badge badge-${todayRecord.type}`} style={{ marginTop: 6 }}>{todayRecord.type === 'present' ? 'Present' : 'Leave'}</span>
              {todayRecord.locationName && <div style={{ fontSize: 12, color: 'var(--fe-gray-400)', marginTop: 6 }}>{todayRecord.locationName}</div>}
            </div>
          ) : (
            <>
              <div className="form-group">
                <label className="fe-label">Date</label>
                <input type="date" className="fe-input" value={date} onChange={e => setDate(e.target.value)} max={today} />
              </div>
              <div className="form-group">
                <label className="fe-label" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  Location
                  {gpsStatus === 'detecting' && <span style={{ fontSize: 11, color: 'var(--fe-amber-400)' }}><i className="ti ti-loader-2" /> Detecting GPS...</span>}
                  {gpsStatus === 'found' && <span style={{ fontSize: 11, color: 'var(--fe-green-600)' }}><i className="ti ti-map-pin" /> GPS captured</span>}
                  {gpsStatus === 'failed' && <span style={{ fontSize: 11, color: 'var(--fe-gray-400)' }}><i className="ti ti-map-pin-off" /> No GPS</span>}
                </label>
                <select className="fe-select" value={locationId} onChange={e => setLocationId(e.target.value)}>
                  <option value="">-- Select Location --</option>
                  {locations.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label className="fe-label">HCPs / Customers Visited</label>
                <MultiSelect options={customerOptions} value={customerIds} onChange={setCustomerIds} placeholder="Select HCPs and chemists..." />
              </div>
              <div className="form-group">
                <label className="fe-label">Visit Notes / Comments</label>
                <textarea className="fe-input" style={{ minHeight: 80, resize: 'vertical' }} placeholder="e.g. Discussed Cardivaz-5 with Dr. Iyer..." value={comments} onChange={e => setComments(e.target.value)} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <button className="fe-btn-primary" onClick={() => markAttendance('present')} disabled={submitting} style={{ justifyContent: 'center' }}>
                  <i className="ti ti-check" /> Mark Present
                </button>
                <button className="fe-btn-outline" onClick={() => markAttendance('leave')} disabled={submitting} style={{ justifyContent: 'center' }}>
                  <i className="ti ti-calendar-off" /> Mark Leave
                </button>
              </div>
            </>
          )}
          <div style={{ marginTop: 16, paddingTop: 16, borderTop: '0.5px solid var(--fe-gray-100)' }}>
            <button className="fe-btn-gold fe-btn-sm" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setShowLeaveForm(true)}>
              <i className="ti ti-calendar-time" /> Apply for Future Leave
            </button>
          </div>
        </div>

        {/* History tiles */}
        <div className="fe-card">
          <div className="section-title" style={{ marginBottom: 12 }}>
            <i className="ti ti-history" style={{ marginRight: 6, color: 'var(--fe-teal-400)' }} />
            {isTeamView ? "Team's Attendance" : 'My Attendance History'}
          </div>
          {displayHistory.length === 0 ? (
            <div className="empty-state"><i className="ti ti-calendar" style={{ fontSize: 32, display: 'block', marginBottom: 8 }} />No records yet</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxHeight: 460, overflowY: 'auto' }}>
              {displayHistory.map(a => (
                <div key={a.id} style={{ background: 'var(--fe-gray-50)', borderRadius: 8, padding: '10px 12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      {isTeamView && <div style={{ fontWeight: 500, fontSize: 13 }}>{a.userName}</div>}
                      <div style={{ fontSize: 13, color: isTeamView ? 'var(--fe-gray-500)' : 'var(--fe-gray-800)', fontWeight: isTeamView ? 400 : 500 }}>{a.date}</div>
                      {a.locationName && (
                        <div style={{ fontSize: 12, color: 'var(--fe-gray-400)', marginTop: 2 }}>
                          <i className="ti ti-map-pin" style={{ fontSize: 11 }} /> {a.locationName}
                        </div>
                      )}
                      {a.customerNames?.length > 0 && (
                        <div style={{ fontSize: 11, color: 'var(--fe-teal-600)', marginTop: 2 }}>
                          {a.customerNames.slice(0, 2).join(', ')}{a.customerNames.length > 2 ? ` +${a.customerNames.length - 2}` : ''}
                        </div>
                      )}
                    </div>
                    <span className={`badge badge-${a.type}`} style={{ flexShrink: 0 }}>{a.type === 'present' ? 'Present' : 'Leave'}</span>
                  </div>
                  {a.comments && (
                    <div style={{ fontSize: 11, color: 'var(--fe-gray-400)', marginTop: 4, fontStyle: 'italic' }}>
                      {a.comments.slice(0, 80)}{a.comments.length > 80 ? '…' : ''}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Leave Request Modal */}
      {showLeaveForm && (
        <div className="modal-overlay" onClick={() => setShowLeaveForm(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-title"><i className="ti ti-calendar-time" /> Apply for Leave</div>
            <form onSubmit={submitLeave}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="fe-label">From Date</label>
                  <input type="date" className="fe-input" value={leaveForm.fromDate} onChange={e => setLeaveForm(p => ({ ...p, fromDate: e.target.value }))} min={today} required />
                </div>
                <div className="form-group">
                  <label className="fe-label">To Date</label>
                  <input type="date" className="fe-input" value={leaveForm.toDate} onChange={e => setLeaveForm(p => ({ ...p, toDate: e.target.value }))} min={leaveForm.fromDate || today} required />
                </div>
                <div className="form-group full">
                  <label className="fe-label">Reason</label>
                  <textarea className="fe-input" style={{ minHeight: 80 }} value={leaveForm.reason} onChange={e => setLeaveForm(p => ({ ...p, reason: e.target.value }))} placeholder="Reason for leave..." required />
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
                <button type="button" className="fe-btn-outline" onClick={() => setShowLeaveForm(false)}>Cancel</button>
                <button type="submit" className="fe-btn-primary"><i className="ti ti-send" /> Submit Request</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AppShell>
  );
}
