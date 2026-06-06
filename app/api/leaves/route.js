import { NextResponse } from 'next/server';
import { getStore, nextId } from '@/lib/store';
import { getSpan } from '@/lib/auth';

export async function GET(request) {
  const store = getStore();
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');
  const managerId = searchParams.get('managerId');
  const forSpan = searchParams.get('forSpan');
  const status = searchParams.get('status');

  let records = [...store.leaves];

  if (userId) records = records.filter(r => r.userId === userId);
  if (managerId) records = records.filter(r => r.managerId === managerId);
  if (forSpan) {
    const spanUsers = getSpan(forSpan).map(u => u.id);
    records = records.filter(r => spanUsers.includes(r.userId));
  }
  if (status) records = records.filter(r => r.status === status);

  records = records.map(r => {
    const user = store.users.find(u => u.id === r.userId);
    const mgr = r.managerId ? store.users.find(u => u.id === r.managerId) : null;
    return {
      ...r,
      userName: user ? user.name : 'Unknown',
      userEmpId: user ? user.empId : '',
      managerName: mgr ? mgr.name : '',
    };
  });

  records.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  return NextResponse.json({ leaves: records });
}

export async function POST(request) {
  const store = getStore();
  try {
    const body = await request.json();
    const { userId, fromDate, toDate, reason } = body;

    if (!userId || !fromDate || !toDate || !reason) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const user = store.users.find(u => u.id === userId);
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

    const leave = {
      id: nextId('lv'),
      userId,
      managerId: user.managerId,
      fromDate, toDate, reason,
      status: 'pending',
      approvedAt: null,
      rejectedAt: null,
      createdAt: new Date().toISOString(),
    };

    store.leaves.push(leave);
    return NextResponse.json({ leave }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
