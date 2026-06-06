'use client';
import { useAuth } from '@/context/AuthContext';
import { useRouter, usePathname } from 'next/navigation';

const ROLE_NAV = {
  super_admin: [
    { label: 'Dashboard', icon: 'ti-layout-dashboard', path: '/dashboard' },
    { label: 'Users', icon: 'ti-users', path: '/admin/users' },
    { label: 'Locations', icon: 'ti-map-pin', path: '/admin/locations' },
    { label: 'Customers / HCPs', icon: 'ti-stethoscope', path: '/admin/customers' },
    { label: 'Attendance', icon: 'ti-calendar-check', path: '/attendance' },
    { label: 'Expenses', icon: 'ti-receipt', path: '/expenses' },
    { label: 'Reports', icon: 'ti-chart-bar', path: '/reports' },
    { label: 'Notifications', icon: 'ti-bell', path: '/admin/notifications' },
  ],
  ceo: [
    { label: 'Dashboard', icon: 'ti-layout-dashboard', path: '/dashboard' },
    { label: 'Attendance', icon: 'ti-calendar-check', path: '/attendance' },
    { label: 'Expenses', icon: 'ti-receipt', path: '/expenses' },
    { label: 'Approvals', icon: 'ti-checkbox', path: '/approvals' },
    { label: 'Reports', icon: 'ti-chart-bar', path: '/reports' },
  ],
  director: [
    { label: 'Dashboard', icon: 'ti-layout-dashboard', path: '/dashboard' },
    { label: 'Attendance', icon: 'ti-calendar-check', path: '/attendance' },
    { label: 'Expenses', icon: 'ti-receipt', path: '/expenses' },
    { label: 'Approvals', icon: 'ti-checkbox', path: '/approvals' },
    { label: 'Reports', icon: 'ti-chart-bar', path: '/reports' },
  ],
  manager: [
    { label: 'Dashboard', icon: 'ti-layout-dashboard', path: '/dashboard' },
    { label: 'Attendance', icon: 'ti-calendar-check', path: '/attendance' },
    { label: 'Expenses', icon: 'ti-receipt', path: '/expenses' },
    { label: 'Approvals', icon: 'ti-checkbox', path: '/approvals' },
    { label: 'Leave Approvals', icon: 'ti-calendar-time', path: '/leaves' },
    { label: 'Reports', icon: 'ti-chart-bar', path: '/reports' },
  ],
  field_staff: [
    { label: 'Dashboard', icon: 'ti-layout-dashboard', path: '/dashboard' },
    { label: 'Attendance', icon: 'ti-calendar-check', path: '/attendance' },
    { label: 'Expenses', icon: 'ti-receipt', path: '/expenses' },
    { label: 'My Leaves', icon: 'ti-calendar-time', path: '/leaves' },
    { label: 'My Reports', icon: 'ti-chart-bar', path: '/reports' },
  ],
  accountant: [
    { label: 'Dashboard', icon: 'ti-layout-dashboard', path: '/dashboard' },
    { label: 'Expense Approvals', icon: 'ti-receipt', path: '/expenses' },
    { label: 'Leave Reports', icon: 'ti-calendar-time', path: '/leaves' },
    { label: 'Reports', icon: 'ti-chart-bar', path: '/reports' },
  ],
};

export default function Sidebar({ open, onClose }) {
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  if (!user) return null;
  const navItems = ROLE_NAV[user.role] || [];

  const initials = user.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();

  const handleNav = (path) => {
    router.push(path);
    if (onClose) onClose();
  };

  return (
    <>
      {open && <div className="mobile-sidebar-overlay" onClick={onClose} />}
      <div className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <div style={{ width: 36, height: 36, background: 'var(--fe-amber-200)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="ti ti-map-pin" style={{ fontSize: 18, color: 'var(--fe-amber-800)' }} />
          </div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'white', letterSpacing: '-0.3px' }}>FieldEdge</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.05em' }}>PHARMA FIELD FORCE</div>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map(item => (
            <div
              key={item.path}
              className={`sidebar-item ${pathname === item.path || pathname.startsWith(item.path + '/') ? 'active' : ''}`}
              onClick={() => handleNav(item.path)}
            >
              <i className={`ti ${item.icon} icon`} />
              <span>{item.label}</span>
            </div>
          ))}
        </nav>

        <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 36, height: 36, background: 'var(--fe-teal-400)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 600, color: 'white', flexShrink: 0 }}>
              {initials}
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: 'white', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.name}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>{user.empId} · {user.title}</div>
            </div>
          </div>
          <button
            onClick={() => { logout(); router.push('/'); }}
            style={{ width: '100%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 8, color: 'rgba(255,255,255,0.7)', padding: '8px 12px', cursor: 'pointer', fontSize: 13, display: 'flex', alignItems: 'center', gap: 8 }}
          >
            <i className="ti ti-logout" /> Sign Out
          </button>
        </div>
      </div>
    </>
  );
}
