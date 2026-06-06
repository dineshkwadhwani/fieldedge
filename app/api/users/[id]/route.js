import { NextResponse } from 'next/server';
import { getStore } from '@/lib/store';

export async function PATCH(request, { params }) {
  const store = getStore();
  const { id } = params;
  try {
    const body = await request.json();
    const idx = store.users.findIndex(u => u.id === id);
    if (idx === -1) return NextResponse.json({ error: 'User not found' }, { status: 404 });

    const allowed = ['name', 'email', 'title', 'managerId', 'baseLocation', 'isManager', 'role', 'active', 'password'];
    for (const key of allowed) {
      if (key in body) store.users[idx][key] = body[key];
    }

    const { password: _, ...safe } = store.users[idx];
    return NextResponse.json({ user: safe });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const store = getStore();
  const { id } = params;
  const idx = store.users.findIndex(u => u.id === id);
  if (idx === -1) return NextResponse.json({ error: 'User not found' }, { status: 404 });
  store.users[idx].active = false;
  return NextResponse.json({ success: true });
}
