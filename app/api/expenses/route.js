import { NextResponse } from 'next/server';
import { getStore, nextId } from '@/lib/store';
import { getSpan, getManager } from '@/lib/auth';

export async function GET(request) {
  const store = getStore();
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');
  const forSpan = searchParams.get('forSpan');
  const pendingFor = searchParams.get('pendingFor'); // userId who needs to approve
  const status = searchParams.get('status');
  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const forAccountant = searchParams.get('forAccountant');

  let records = [...store.expenses];

  if (userId) records = records.filter(r => r.userId === userId);

  if (forSpan) {
    const spanUsers = getSpan(forSpan).map(u => u.id);
    records = records.filter(r => spanUsers.includes(r.userId));
  }

  if (pendingFor) {
    // Manager seeing expenses pending their approval
    const user = store.users.find(u => u.id === pendingFor);
    if (user) {
      if (user.role === 'manager') {
        records = records.filter(r => r.managerId === pendingFor && r.status === 'pending_manager');
      } else if (user.role === 'director' || user.role === 'ceo') {
        // Director approves manager expenses
        const directs = store.users.filter(u => u.managerId === pendingFor).map(u => u.id);
        records = records.filter(r => directs.includes(r.userId) && r.status === 'pending_director');
      }
    }
  }

  if (forAccountant === 'true') {
    records = records.filter(r => ['manager_approved', 'approved'].includes(r.status));
  }

  if (status) records = records.filter(r => r.status === status);
  if (from) records = records.filter(r => r.date >= from);
  if (to) records = records.filter(r => r.date <= to);

  // Enrich
  records = records.map(r => {
    const user = store.users.find(u => u.id === r.userId);
    const mgr = r.managerId ? store.users.find(u => u.id === r.managerId) : null;
    return {
      ...r,
      image: undefined, // don't send image in list
      userName: user ? user.name : 'Unknown',
      userEmpId: user ? user.empId : '',
      userRole: user ? user.role : '',
      managerName: mgr ? mgr.name : '',
    };
  });

  records.sort((a, b) => b.date.localeCompare(a.date));
  return NextResponse.json({ expenses: records });
}

export async function POST(request) {
  const store = getStore();
  try {
    const body = await request.json();
    const { userId, date, title, description, amount, image } = body;

    if (!userId || !date || !title || !amount) {
      return NextResponse.json({ error: 'userId, date, title and amount are required' }, { status: 400 });
    }

    const user = store.users.find(u => u.id === userId);
    if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 });

    // Determine approval chain
    let initialStatus, managerId;

    if (user.role === 'field_staff') {
      // Goes to their manager first
      initialStatus = 'pending_manager';
      managerId = user.managerId;
    } else if (user.role === 'manager') {
      // Goes to their director
      initialStatus = 'pending_director';
      managerId = user.managerId;
    } else if (user.role === 'director') {
      // Goes to CEO
      initialStatus = 'pending_director';
      managerId = user.managerId;
    } else {
      initialStatus = 'pending_manager';
      managerId = user.managerId;
    }

    const expense = {
      id: nextId('exp'),
      userId, date, title,
      description: description || '',
      amount: parseFloat(amount),
      image: image || null,
      status: initialStatus,
      managerId: managerId || null,
      managerApprovedAt: null,
      accountantApprovedAt: null,
      rejectedAt: null,
      rejectedBy: null,
      rejectionReason: null,
      createdAt: new Date().toISOString(),
    };

    store.expenses.push(expense);
    return NextResponse.json({ expense: { ...expense, image: undefined } }, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
