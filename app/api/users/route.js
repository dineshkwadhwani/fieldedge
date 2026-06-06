import { NextResponse } from 'next/server';
import { getStore, nextId } from '@/lib/store';

export async function GET(request) {
  const store = getStore();
  const { searchParams } = new URL(request.url);
  const role = searchParams.get('role');
  const managerId = searchParams.get('managerId');

  let users = store.users.map(({ password: _, ...u }) => u);

  if (role) users = users.filter(u => u.role === role);
  if (managerId) users = users.filter(u => u.managerId === managerId);

  // Enrich with manager name and location name
  users = users.map(u => {
    const mgr = u.managerId ? store.users.find(x => x.id === u.managerId) : null;
    const loc = u.baseLocation ? store.locations.find(l => l.id === u.baseLocation) : null;
    return { ...u, managerName: mgr ? mgr.name : null, locationName: loc ? loc.name : null };
  });

  return NextResponse.json({ users });
}

export async function POST(request) {
  const store = getStore();
  try {
    const body = await request.json();
    const { empId, name, email, password, role, title, managerId, baseLocation, isManager } = body;

    if (!empId || !name || !email || !password || !role) {
      return NextResponse.json({ error: 'Required fields missing' }, { status: 400 });
    }

    if (store.users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
      return NextResponse.json({ error: 'Email already exists' }, { status: 409 });
    }
    if (store.users.find(u => u.empId === empId)) {
      return NextResponse.json({ error: 'Employee ID already exists' }, { status: 409 });
    }

    const user = {
      id: nextId('u'),
      empId, name, email, password, role, title: title || '',
      managerId: managerId || null,
      baseLocation: baseLocation || null,
      isManager: isManager || false,
      active: true
    };
    store.users.push(user);
    const { password: _, ...safe } = user;
    return NextResponse.json({ user: safe }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
