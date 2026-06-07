'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/context/ToastContext';
import AppShell from '@/components/AppShell';

const TYPES = ['HCP', 'Chemist', 'Hospital', 'Distributor', 'Other'];
const SPECIALTIES = ['Cardiologist', 'Diabetologist', 'General Physician', 'Neurologist', 'Oncologist', 'Pulmonologist', 'Gastroenterologist', 'Retail Pharmacy', 'Hospital Pharmacy', 'Other'];

export default function AdminCustomers() {
  const { user, loading } = useAuth();
  const { showToast } = useToast();
  const router = useRouter();
  const [customers, setCustomers] = useState([]);
  const [locations, setLocations] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [form, setForm] = useState({ name: '', type: 'HCP', specialty: '', location: '', clinic: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && !user) { router.push('/'); return; }
    if (user && user.role !== 'super_admin') { router.push('/dashboard'); return; }
    if (user) { loadCustomers(); loadLocations(); }
  }, [user, loading]);

  const loadCustomers = async () => {
    const res = await fetch('/api/customers');
    const data = await res.json();
    setCustomers(data.customers || []);
  };

  const loadLocations = async () => {
    const res = await fetch('/api/locations');
    const data = await res.json();
    setLocations(data.locations || []);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) { showToast('Name is required', 'error'); return; }
    setSubmitting(true);
    try {
      const res = await fetch('/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) { showToast(data.error, 'error'); return; }
      showToast('Customer/HCP added', 'success');
      setShowForm(false);
      setForm({ name: '', type: 'HCP', specialty: '', location: '', clinic: '' });
      loadCustomers();
    } catch { showToast('Error', 'error'); }
    finally { setSubmitting(false); }
  };

  const deleteCustomer = async (id) => {
    if (!confirm('Remove this HCP/customer?')) return;
    const res = await fetch(`/api/customers?id=${id}`, { method: 'DELETE' });
    if (res.ok) { showToast('Customer removed', 'warning'); loadCustomers(); }
  };

  if (loading || !user) return null;

  const locMap = Object.fromEntries(locations.map(l => [l.id, l.name]));

  const filtered = customers.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      (c.clinic || '').toLowerCase().includes(search.toLowerCase()) ||
      (c.specialty || '').toLowerCase().includes(search.toLowerCase());
    const matchType = filterType === 'all' || c.type === filterType;
    return matchSearch && matchType;
  });

  const TYPE_COLORS = { HCP: 'var(--fe-teal-50)', Chemist: 'var(--fe-amber-50)', Hospital: 'var(--fe-green-50)', Distributor: 'var(--fe-gray-50)', Other: 'var(--fe-gray-50)' };
  const TYPE_ICON = { HCP: 'ti-stethoscope', Chemist: 'ti-pill', Hospital: 'ti-building-hospital', Distributor: 'ti-truck', Other: 'ti-user' };

  return (
    <AppShell>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 4 }}>
        <div>
          <h1 className="page-title">Customers & HCPs</h1>
          <p className="page-sub">Manage doctors, chemists, hospitals and distributors</p>
        </div>
        <button className="fe-btn-primary" onClick={() => setShowForm(true)}>
          <i className="ti ti-plus" /> Add HCP / Customer
        </button>
      </div>

      <div style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
        <input
          className="fe-input"
          style={{ maxWidth: 280 }}
          placeholder="Search by name, clinic, specialty..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select className="fe-select" style={{ width: 140 }} value={filterType} onChange={e => setFilterType(e.target.value)}>
          <option value="all">All Types</option>
          {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="fe-card">
          <div className="empty-state">
            <i className="ti ti-stethoscope" style={{ fontSize: 36, display: 'block', marginBottom: 8 }} />
            {search || filterType !== 'all' ? 'No results for your search' : 'No customers/HCPs added yet'}
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {filtered.map(c => (
            <div key={c.id} className="fe-card" style={{ padding: '14px 16px' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 42, height: 42, background: TYPE_COLORS[c.type] || 'var(--fe-gray-50)', border: '1px solid var(--fe-teal-100)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className={`ti ${TYPE_ICON[c.type] || 'ti-user'}`} style={{ fontSize: 18, color: 'var(--fe-teal-600)' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{c.name}</div>
                    <button onClick={() => deleteCustomer(c.id)}
                      style={{ background: 'none', border: '1px solid var(--fe-red-100)', borderRadius: 6, cursor: 'pointer', color: 'var(--fe-red-400)', padding: '3px 8px', fontSize: 12, flexShrink: 0 }}>
                      <i className="ti ti-trash" />
                    </button>
                  </div>
                  <div style={{ display: 'flex', gap: 6, marginTop: 4, flexWrap: 'wrap', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: 4, background: TYPE_COLORS[c.type] || 'var(--fe-gray-50)', color: 'var(--fe-teal-800)' }}>{c.type}</span>
                    {c.specialty && <span style={{ fontSize: 12, color: 'var(--fe-gray-500)' }}>{c.specialty}</span>}
                  </div>
                  {(c.clinic || locMap[c.location]) && (
                    <div style={{ display: 'flex', gap: 12, marginTop: 4, flexWrap: 'wrap' }}>
                      {c.clinic && <span style={{ fontSize: 12, color: 'var(--fe-gray-400)' }}><i className="ti ti-building" style={{ fontSize: 11 }} /> {c.clinic}</span>}
                      {locMap[c.location] && <span style={{ fontSize: 12, color: 'var(--fe-gray-400)' }}><i className="ti ti-map-pin" style={{ fontSize: 11 }} /> {locMap[c.location]}</span>}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal" style={{ maxWidth: 520 }} onClick={e => e.stopPropagation()}>
            <div className="modal-title"><i className="ti ti-stethoscope" /> Add HCP / Customer</div>
            <form onSubmit={submitForm}>
              <div className="form-grid">
                <div className="form-group full">
                  <label className="fe-label">Full Name *</label>
                  <input className="fe-input" placeholder="Dr. Meera Iyer" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required />
                </div>
                <div className="form-group">
                  <label className="fe-label">Type *</label>
                  <select className="fe-select" value={form.type} onChange={e => setForm(p => ({ ...p, type: e.target.value }))}>
                    {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="fe-label">Specialty</label>
                  <select className="fe-select" value={form.specialty} onChange={e => setForm(p => ({ ...p, specialty: e.target.value }))}>
                    <option value="">-- Select Specialty --</option>
                    {SPECIALTIES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="form-group full">
                  <label className="fe-label">Clinic / Outlet Name</label>
                  <input className="fe-input" placeholder="e.g. Iyer Heart Clinic" value={form.clinic} onChange={e => setForm(p => ({ ...p, clinic: e.target.value }))} />
                </div>
                <div className="form-group full">
                  <label className="fe-label">Zone / Location</label>
                  <select className="fe-select" value={form.location} onChange={e => setForm(p => ({ ...p, location: e.target.value }))}>
                    <option value="">-- Select Zone --</option>
                    {locations.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
                  </select>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 8 }}>
                <button type="button" className="fe-btn-outline" onClick={() => setShowForm(false)}>Cancel</button>
                <button type="submit" className="fe-btn-primary" disabled={submitting}>
                  <i className="ti ti-plus" /> Add Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AppShell>
  );
}
