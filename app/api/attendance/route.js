import { NextResponse } from 'next/server';
import { getStore, nextId } from '@/lib/store';
import { getSpan } from '@/lib/auth';

export async function GET(request) {
  const store = getStore();
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');
  const forSpan = searchParams.get('forSpan'); // managerId to get span
  const date = searchParams.get('date');
  const from = searchParams.get('from');
  const to = searchParams.get('to');

  let records = [...store.attendance];

  if (userId) records = records.filter(r => r.userId === userId);
  if (forSpan) {
    const spanUsers = getSpan(forSpan).map(u => u.id);
    spanUsers.push(forSpan);
    records = records.filter(r => spanUsers.includes(r.userId));
  }
  if (date) records = records.filter(r => r.date === date);
  if (from) records = records.filter(r => r.date >= from);
  if (to) records = records.filter(r => r.date <= to);

  // Enrich
  records = records.map(r => {
    const user = store.users.find(u => u.id === r.userId);
    const location = store.locations.find(l => l.id === r.locationId);
    const customers = (r.customerIds || []).map(cid => {
      const c = store.customers.find(x => x.id === cid);
      return c ? c.name : cid;
    });
    return {
      ...r,
      userName: user ? user.name : 'Unknown',
      userEmpId: user ? user.empId : '',
      locationName: location ? location.name : '',
      customerNames: customers,
    };
  });

  records.sort((a, b) => b.date.localeCompare(a.date));
  return NextResponse.json({ attendance: records });
}

export async function POST(request) {
  const store = getStore();
  try {
    const body = await request.json();
    const { userId, date, type, locationId, customerIds, comments, lat, lng } = body;

    if (!userId || !date || !type) {
      return NextResponse.json({ error: 'userId, date, and type are required' }, { status: 400 });
    }
    if (type === 'present' && !locationId) {
      return NextResponse.json({ error: 'Location is required when marking present' }, { status: 400 });
    }

    const existing = store.attendance.find(a => a.userId === userId && a.date === date);
    if (existing) {
      return NextResponse.json({ error: 'Attendance already marked for this date' }, { status: 409 });
    }

    const record = {
      id: nextId('att'),
      userId, date, type,
      locationId: type === 'present' ? locationId : null,
      customerIds: type === 'present' ? (customerIds || []) : [],
      comments: comments || '',
      lat: lat || null,
      lng: lng || null,
      createdAt: new Date().toISOString(),
    };

    store.attendance.push(record);
    return NextResponse.json({ record }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
