'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/context/ToastContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const { login } = useAuth();
  const { showToast } = useToast();
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) { showToast('Please enter email and password', 'error'); return; }
    setLoading(true);
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) { showToast(data.error || 'Login failed', 'error'); return; }
      login(data.user);
      router.push('/dashboard');
    } catch {
      showToast('Connection error. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    if (!resetEmail) { showToast('Please enter your email', 'error'); return; }
    showToast('Email Sent — Password reset link sent to ' + resetEmail, 'success');
    setShowReset(false);
    setResetEmail('');
  };

  const demoUsers = [
    { label: 'Super Admin', email: 'admin@fieldedge.com', pwd: 'admin123' },
    { label: 'CEO', email: 'ceo@fieldedge.com', pwd: 'ceo123' },
    { label: 'Director', email: 'director1@fieldedge.com', pwd: 'dir123' },
    { label: 'Manager', email: 'manager1@fieldedge.com', pwd: 'mgr123' },
    { label: 'Field Staff', email: 'staff1@fieldedge.com', pwd: 'staff123' },
    { label: 'Accountant', email: 'accountant@fieldedge.com', pwd: 'acc123' },
  ];

  return (
    <div className="login-page">
      <div style={{ width: '100%', maxWidth: 420, padding: 24 }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div style={{ width: 64, height: 64, background: 'var(--fe-amber-200)', borderRadius: 16, margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="ti ti-map-pin" style={{ fontSize: 30, color: 'var(--fe-amber-800)' }} />
          </div>
          <h1 style={{ fontSize: 26, fontWeight: 700, color: 'white', margin: 0 }}>FieldEdge</h1>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', margin: '6px 0 0' }}>Pharma Field Force Platform</p>
        </div>

        {!showReset ? (
          <form onSubmit={handleLogin}>
            <div style={{ background: 'white', borderRadius: 16, padding: 28 }}>
              <h2 style={{ fontSize: 17, fontWeight: 600, color: 'var(--fe-teal-800)', margin: '0 0 20px' }}>Sign in to your account</h2>
              <div className="form-group">
                <label className="fe-label">Email Address</label>
                <input type="email" className="fe-input" placeholder="you@company.com" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" />
              </div>
              <div className="form-group">
                <label className="fe-label">Password</label>
                <input type="password" className="fe-input" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password" />
              </div>
              <button type="submit" className="fe-btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 4 }} disabled={loading}>
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
              <button type="button" onClick={() => setShowReset(true)} style={{ width: '100%', marginTop: 12, background: 'none', border: 'none', color: 'var(--fe-teal-600)', fontSize: 13, cursor: 'pointer', padding: '4px 0' }}>
                Forgot password?
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleReset}>
            <div style={{ background: 'white', borderRadius: 16, padding: 28 }}>
              <h2 style={{ fontSize: 17, fontWeight: 600, color: 'var(--fe-teal-800)', margin: '0 0 8px' }}>Reset Password</h2>
              <p style={{ fontSize: 13, color: 'var(--fe-gray-400)', marginBottom: 20 }}>Enter your email and we will send a reset link.</p>
              <div className="form-group">
                <label className="fe-label">Email Address</label>
                <input type="email" className="fe-input" placeholder="you@company.com" value={resetEmail} onChange={e => setResetEmail(e.target.value)} />
              </div>
              <button type="submit" className="fe-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Send Reset Link</button>
              <button type="button" onClick={() => setShowReset(false)} style={{ width: '100%', marginTop: 10, background: 'none', border: 'none', color: 'var(--fe-gray-400)', fontSize: 13, cursor: 'pointer' }}>Back to Login</button>
            </div>
          </form>
        )}

        <div style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 12, padding: 16, marginTop: 16 }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 10, fontWeight: 500 }}>DEMO CREDENTIALS — Click to fill</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            {demoUsers.map(u => (
              <button key={u.email} type="button" onClick={() => { setEmail(u.email); setPassword(u.pwd); }}
                style={{ background: 'rgba(255,255,255,0.1)', border: '0.5px solid rgba(255,255,255,0.15)', borderRadius: 6, padding: '6px 10px', color: 'rgba(255,255,255,0.8)', fontSize: 12, cursor: 'pointer', textAlign: 'left' }}>
                <div style={{ fontWeight: 500 }}>{u.label}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>{u.email}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
