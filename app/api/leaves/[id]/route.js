import { NextResponse } from 'next/server';
import { getStore } from '@/lib/store';

export async function PATCH(request, { params }) {
  const store = getStore();
  const { id } = params;
  try {
    const { action, rejectionReason } = await request.json();
    const idx = store.leaves.findIndex(l => l.id === id);
    if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    if (action === 'approve') {
      store.leaves[idx].status = 'approved';
      store.leaves[idx].approvedAt = new Date().toISOString();
    } else if (action === 'reject') {
      store.leaves[idx].status = 'rejected';
      store.leaves[idx].rejectedAt = new Date().toISOString();
      store.leaves[idx].rejectionReason = rejectionReason || '';
    }

    return NextResponse.json({ leave: store.leaves[idx] });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
