import { NextResponse } from 'next/server';
import { getStore } from '@/lib/store';

export async function GET(request, { params }) {
  const store = getStore();
  const { id } = params;
  const exp = store.expenses.find(e => e.id === id);
  if (!exp) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const user = store.users.find(u => u.id === exp.userId);
  const mgr = exp.managerId ? store.users.find(u => u.id === exp.managerId) : null;
  return NextResponse.json({
    expense: {
      ...exp,
      userName: user ? user.name : '',
      userEmpId: user ? user.empId : '',
      managerName: mgr ? mgr.name : '',
    }
  });
}

export async function PATCH(request, { params }) {
  const store = getStore();
  const { id } = params;
  try {
    const { action, approvedBy, rejectionReason } = await request.json();
    const idx = store.expenses.findIndex(e => e.id === id);
    if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    const exp = store.expenses[idx];
    const approver = store.users.find(u => u.id === approvedBy);

    if (action === 'approve') {
      if (exp.status === 'pending_manager') {
        // Manager approves → goes to accountant
        store.expenses[idx].status = 'manager_approved';
        store.expenses[idx].managerApprovedAt = new Date().toISOString();
      } else if (exp.status === 'pending_director') {
        // Director/CEO approves → goes to accountant
        store.expenses[idx].status = 'manager_approved';
        store.expenses[idx].managerApprovedAt = new Date().toISOString();
      } else if (exp.status === 'manager_approved') {
        // Accountant final approval
        store.expenses[idx].status = 'approved';
        store.expenses[idx].accountantApprovedAt = new Date().toISOString();
      }
    } else if (action === 'reject') {
      store.expenses[idx].status = 'rejected';
      store.expenses[idx].rejectedAt = new Date().toISOString();
      store.expenses[idx].rejectedBy = approvedBy;
      store.expenses[idx].rejectionReason = rejectionReason || 'No reason provided';
    }

    return NextResponse.json({ expense: store.expenses[idx] });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
