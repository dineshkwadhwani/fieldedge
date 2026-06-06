import { NextResponse } from 'next/server';
import { getStore } from '@/lib/store';
import { getSpan } from '@/lib/auth';

export async function GET(request) {
  const store = getStore();
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type'); // 'expenses' | 'attendance' | 'leaves'
  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const forSpan = searchParams.get('forSpan');

  if (type === 'expenses') {
    let records = [...store.expenses];
    if (from) records = records.filter(r => r.date >= from);
    if (to) records = records.filter(r => r.date <= to);
    if (forSpan) {
      const spanUsers = [forSpan, ...getSpan(forSpan).map(u => u.id)];
      records = records.filter(r => spanUsers.includes(r.userId));
    }

    const rows = records.map(r => {
      const user = store.users.find(u => u.id === r.userId);
      const mgr = r.managerId ? store.users.find(u => u.id === r.managerId) : null;
      return {
        'Expense ID': r.id,
        'Emp ID': user ? user.empId : '',
        'Employee Name': user ? user.name : '',
        'Date': r.date,
        'Title': r.title,
        'Description': r.description,
        'Amount (INR)': r.amount,
        'Status': r.status,
        'Manager': mgr ? mgr.name : '',
        'Manager Approved At': r.managerApprovedAt || '',
        'Accountant Approved At': r.accountantApprovedAt || '',
        'Rejection Reason': r.rejectionReason || '',
      };
    });

    return NextResponse.json({ rows, filename: `expenses_${from || 'all'}_to_${to || 'all'}.csv` });
  }

  if (type === 'attendance') {
    let records = [...store.attendance];
    if (from) records = records.filter(r => r.date >= from);
    if (to) records = records.filter(r => r.date <= to);
    if (forSpan) {
      const spanUsers = [forSpan, ...getSpan(forSpan).map(u => u.id)];
      records = records.filter(r => spanUsers.includes(r.userId));
    }

    const rows = records.map(r => {
      const user = store.users.find(u => u.id === r.userId);
      const loc = store.locations.find(l => l.id === r.locationId);
      const customers = (r.customerIds || []).map(cid => {
        const c = store.customers.find(x => x.id === cid);
        return c ? c.name : cid;
      }).join('; ');
      return {
        'Emp ID': user ? user.empId : '',
        'Employee Name': user ? user.name : '',
        'Date': r.date,
        'Type': r.type,
        'Location': loc ? loc.name : '',
        'HCPs/Customers Visited': customers,
        'Comments': r.comments,
        'GPS Lat': r.lat || '',
        'GPS Lng': r.lng || '',
      };
    });

    return NextResponse.json({ rows, filename: `attendance_${from || 'all'}_to_${to || 'all'}.csv` });
  }

  return NextResponse.json({ error: 'Invalid report type' }, { status: 400 });
}
