'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/context/ToastContext';
import AppShell from '@/components/AppShell';

export default function AdminLocations() {
  const { user, loading } = useAuth();
  const { showToast } = useToast();
  const router = useRouter();
  const [locations, setLocations] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', city: '', state: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && !user) { router.push('/'); return; }
    if (user && user.role !== 'super_admin') { router.push('/dashboard'); return; }
    if (user) loadLocations();
  }, [user, loading]);

  const loadLocations = async () => {
    const res = await fetch('/api/locations');
    const data = await res.json();
    setLocations(data.locations || []);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) { showToast('Location name is required', 'error'); return; }
    setSubmitting(true);
    try {
      const res = await fetch('/api/locations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) { showToast(data.error, 'error'); return; }
      showToast('Location added successfully', 'success');
      setShowForm(false);
      setForm({ name: '', city: '', state: '' });
      loadLocations();
    } catch { showToast('Error', 'error'); }
    finally { setSubmitting(false); }
  };

  const deleteLocation = async (id) => {
    if (!confirm('Delete this location? Field staff assigned here will lose their base location.')) return;
    const res = await fetch(`/api/locations?id=${id}`, { method: 'DELETE' });
    if (res.ok) { showToast('Location deleted', 'warning'); loadLocations(); }
  };

  if (loading || !user) return null;

  return (
    <AppShell>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 4 }}>
        <div>
          <h1 className="page-title">Locations</h1>
          <p className="page-sub">Manage field territories and zones</p>
        </div>
        <button className="fe-btn-primary" onClick={() => setShowForm(true)}>
          <i className="ti ti-plus" /> Add Location
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12, marginTop: 8 }}>
        {locations.map(l => (
          <div key={l.id} className="fe-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ width: 40, height: 40, background: 'var(--fe-teal-50)', border: '1px solid var(--fe-teal-100)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <i className="ti ti-map-pin" style={{ fontSize: 18, color: 'var(--fe-teal-600)' }} />
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--fe-teal-800)' }}>{l.name}</div>
                {(l.city || l.state) && (
                  <div style={{ fontSize: 12, color: 'var(--fe-gray-400)', marginTop: 2 }}>
                    {[l.city, l.state].filter(Boolean).join(', ')}
                  </div>
                )}
                <div style={{ fontSize: 11, color: 'var(--fe-gray-300)', marginTop: 4 }}>ID: {l.id}</div>
              </div>
            </div>
            <button
              onClick={() => deleteLocation(l.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--fe-gray-300)', padding: 4, flexShrink: 0 }}
              title="Delete location"
            >
              <i className="ti ti-trash" style={{ fontSize: 16 }} />
            </button>
          </div>
        ))}

        {locations.length === 0 && (
          <div style={{ gridColumn: '1/-1' }}>
            <div className="fe-card">
              <div className="empty-state">
                <i className="ti ti-map-pin" style={{ fontSize: 36, display: 'block', marginBottom: 8 }} />
                No locations added yet
              </div>
            </div>
          </div>
        )}
      </div>

      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal" style={{ maxWidth: 420 }} onClick={e => e.stopPropagation()}>
            <div className="modal-title"><i className="ti ti-map-pin" /> Add Location</div>
            <form onSubmit={submitForm}>
              <div className="form-group">
                <label className="fe-label">Location Name *</label>
                <input className="fe-input" placeholder="e.g. Mumbai West Zone" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required />
              </div>
              <div className="form-grid">
                <div className="form-group">
                  <label className="fe-label">City</label>
                  <input className="fe-input" placeholder="Mumbai" value={form.city} onChange={e => setForm(p => ({ ...p, city: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="fe-label">State</label>
                  <input className="fe-input" placeholder="Maharashtra" value={form.state} onChange={e => setForm(p => ({ ...p, state: e.target.value }))} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 8 }}>
                <button type="button" className="fe-btn-outline" onClick={() => setShowForm(false)}>Cancel</button>
                <button type="submit" className="fe-btn-primary" disabled={submitting}>
                  <i className="ti ti-check" /> Add Location
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </AppShell>
  );
}
