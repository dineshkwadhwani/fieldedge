'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/context/ToastContext';
import AppShell from '@/components/AppShell';

const ROLES = ['field_staff', 'manager', 'director', 'ceo', 'accountant', 'super_admin'];
const ROLE_LABELS = { field_staff: 'Field Staff', manager: 'Manager', director: 'Director', ceo: 'CEO', accountant: 'Accountant', super_admin: 'Super Admin' };

export default function AdminUsers() {
  const { user, loading } = useAuth();
  const { showToast } = useToast();
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [locations, setLocations] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [search, setSearch] = useState('');
  const [form, setForm] = useState({ empId: '', name: '', email: '', password: '', role: 'field_staff', title: '', managerId: '', baseLocation: '', isManager: false });
  const [submitting, setSubmitting] = useState(false);
  const [resetModal, setResetModal] = useState(null);
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    if (!loading && !user) { router.push('/'); return; }
    if (user && user.role !== 'super_admin') { router.push('/dashboard'); return; }
    if (user) { loadUsers(); loadLocations(); }
  }, [user, loading]);

  const loadUsers = async () => {
    const res = await fetch('/api/users');
    const data = await res.json();
    setUsers((data.users || []).filter(u => u.active !== false));
  };

  const loadLocations = async () => {
    const res = await fetch('/api/locations');
    const data = await res.json();
    setLocations(data.locations || []);
  };

  const openCreate = () => {
    setEditUser(null);
    setForm({ empId: '', name: '', email: '', password: '', role: 'field_staff', title: '', managerId: '', baseLocation: '', isManager: false });
    setShowForm(true);
  };

  const openEdit = (u) => {
    setEditUser(u);
    setForm({ empId: u.empId, name: u.name, email: u.email, password: '', role: u.role, title: u.title || '', managerId: u.managerId || '', baseLocation: u.baseLocation || '', isManager: u.isManager || false });
    setShowForm(true);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      let res;
      if (editUser) {
        const body = { ...form };
        if (!body.password) delete body.password;
        res = await fetch(`/api/users/${editUser.id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
      } else {
        if (!form.password) { showToast('Password is required for new user', 'error'); setSubmitting(false); return; }
        res = await fetch('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form)
        });
      }
      const data = await res.json();
      if (!res.ok) { showToast(data.error, 'error'); return; }
      showToast(editUser ? 'User updated' : 'Email Sent — User created and credentials sent', 'success');
      setShowForm(false);
      loadUsers();
    } catch {
      showToast('Error', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const deactivateUser = async (uid) => {
    if (!confirm('Deactivate this user?')) return;
    await fetch(`/api/users/${uid}`, { method: 'DELETE' });
    showToast('User deactivated', 'warning');
    loadUsers();
  };

  const resetPassword = async () => {
    if (!newPassword || newPassword.length < 6) { showToast('Password must be at least 6 characters', 'error'); return; }
    const res = await fetch(`/api/users/${resetModal.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: newPassword })
    });
    if (res.ok) {
      showToast('Email Sent — Password reset and user notified', 'success');
      setResetModal(null); setNewPassword('');
    }
  };

  if (loading || !user) return null;

  const managerOptions = users.filter(u => u.isManager || ['manager', 'director', 'ceo'].includes(u.role));
  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    u.empId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppShell>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 4 }}>
        <div>
          <h1 className="page-title">User Management</h1>
          <p className="page-sub">Create and manage field force accounts</p>
        </div>
        <button className="fe-btn-primary" onClick={openCreate}><i className="ti ti-user-plus" /> Add User</button>
      </div>

      <div style={{ marginBottom: 16 }}>
        <input className="fe-input" style={{ maxWidth: 340 }} placeholder="Search by name, email, or emp ID..." value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      <div className="fe-card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Emp ID</th><th>Name</th><th>Role</th><th>Title</th><th>Manager</th><th>Location</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {filtered.map(u => (
                <tr key={u.id}>
                  <td style={{ fontWeight: 500, fontSize: 12 }}>{u.empId}</td>
                  <td>
                    <div style={{ fontWeight: 500 }}>{u.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--fe-gray-400)' }}>{u.email}</div>
                  </td>
                  <td>
                    <span style={{ fontSize: 11, padding: '3px 8px', borderRadius: 4, background: 'var(--fe-teal-50)', color: 'var(--fe-teal-800)' }}>
                      {ROLE_LABELS[u.role] || u.role}
                    </span>
                  </td>
                  <td style={{ fontSize: 12 }}>{u.title || '—'}</td>
                  <td style={{ fontSize: 12 }}>{u.managerName || '—'}</td>
                  <td style={{ fontSize: 12 }}>{u.locationName || '—'}</td>
                  <td>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button className="fe-btn-outline fe-btn-sm" onClick={() => openEdit(u)}><i className="ti ti-edit" /></button>
                      <button className="fe-btn-outline fe-btn-sm" onClick={() => { setResetModal(u); setNewPassword(''); }}><i className="ti ti-key" /></button>
                      <button style={{ padding: '5px 10px', borderRadius: 6, border: '1px solid var(--fe-red-100)', background: 'var(--fe-red-50)', color: 'var(--fe-red-600)', cursor: 'pointer', fontSize: 12 }} onClick={() => deactivateUser(u.id)}><i className="ti ti-trash" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create/Edit Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal" style={{ maxWidth: 580 }} onClick={e => e.stopPropagation()}>
            <div className="modal-title"><i className={editUser ? 'ti ti-edit' : 'ti ti-user-plus'} /> {editUser ? 'Edit User' : 'Add New User'}</div>
            <form onSubmit={submitForm}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="fe-label">Employee ID *</label>
                  <input className="fe-input" placeholder="EMP001" value={form.empId} onChange={e => setForm(p => ({ ...p, empId: e.target.value }))} required disabled={!!editUser} />
                </div>
                <div className="form-group">
                  <label className="fe-label">Role *</label>
                  <select className="fe-select" value={form.role} onChange={e => setForm(p => ({ ...p, role: e.target.value }))}>
                    {ROLES.map(r => <option key={r} value={r}>{ROLE_LABELS[r]}</option>)}
                  </select>
                </div>
                <div className="form-group full">
                  <label className="fe-label">Full Name *</label>
                  <input className="fe-input" placeholder="Dr. Ananya Das" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} required />
                </div>
                <div className="form-group">
                  <label className="fe-label">Email *</label>
                  <input type="email" className="fe-input" placeholder="user@company.com" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} required />
                </div>
                <div className="form-group">
                  <label className="fe-label">{editUser ? 'New Password (leave blank to keep)' : 'Password *'}</label>
                  <input type="password" className="fe-input" placeholder={editUser ? 'Leave blank to keep current' : 'Set password'} value={form.password} onChange={e => setForm(p => ({ ...p, password: e.target.value }))} required={!editUser} />
                </div>
                <div className="form-group full">
                  <label className="fe-label">Title / Designation</label>
                  <input className="fe-input" placeholder="Medical Representative" value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="fe-label">Reporting Manager</label>
                  <select className="fe-select" value={form.managerId} onChange={e => setForm(p => ({ ...p, managerId: e.target.value }))}>
                    <option value="">-- Select Manager --</option>
                    {managerOptions.filter(m => !editUser || m.id !== editUser.id).map(m => <option key={m.id} value={m.id}>{m.name} ({ROLE_LABELS[m.role]})</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="fe-label">Base Location</label>
                  <select className="fe-select" value={form.baseLocation} onChange={e => setForm(p => ({ ...p, baseLocation: e.target.value }))}>
                    <option value="">-- Select Location --</option>
                    {locations.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
                  </select>
                </div>
                <div className="form-group full">
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 14, color: 'var(--fe-gray-800)' }}>
                    <input type="checkbox" checked={form.isManager} onChange={e => setForm(p => ({ ...p, isManager: e.target.checked }))} />
                    Is Manager (can approve for their directs)
                  </label>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', marginTop: 8 }}>
                <button type="button" className="fe-btn-outline" onClick={() => setShowForm(false)}>Cancel</button>
                <button type="submit" className="fe-btn-primary" disabled={submitting}>
                  {editUser ? <><i className="ti ti-check" /> Save Changes</> : <><i className="ti ti-user-plus" /> Create User</>}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Reset Password Modal */}
      {resetModal && (
        <div className="modal-overlay" onClick={() => setResetModal(null)}>
          <div className="modal" style={{ maxWidth: 380 }} onClick={e => e.stopPropagation()}>
            <div className="modal-title"><i className="ti ti-key" /> Reset Password</div>
            <div style={{ fontSize: 14, marginBottom: 16 }}>Reset password for <strong>{resetModal.name}</strong></div>
            <div className="form-group">
              <label className="fe-label">New Password</label>
              <input type="text" className="fe-input" placeholder="Enter new password (min 6 chars)" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
            </div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
              <button className="fe-btn-outline" onClick={() => setResetModal(null)}>Cancel</button>
              <button className="fe-btn-primary" onClick={resetPassword}><i className="ti ti-check" /> Reset</button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}
