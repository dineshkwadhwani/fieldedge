import { NextResponse } from 'next/server';
import { getStore, nextId } from '@/lib/store';

export async function GET(request) {
  const store = getStore();
  const { searchParams } = new URL(request.url);
  const locationId = searchParams.get('locationId');
  let customers = [...store.customers];
  if (locationId) customers = customers.filter(c => c.location === locationId);
  return NextResponse.json({ customers });
}

export async function POST(request) {
  const store = getStore();
  try {
    const body = await request.json();
    const { name, type, specialty, location, clinic } = body;
    if (!name || !type) return NextResponse.json({ error: 'Name and type required' }, { status: 400 });

    const customer = { id: nextId('c'), name, type: type || 'HCP', specialty: specialty || '', location: location || '', clinic: clinic || '' };
    store.customers.push(customer);
    return NextResponse.json({ customer }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(request) {
  const store = getStore();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const idx = store.customers.findIndex(c => c.id === id);
  if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  store.customers.splice(idx, 1);
  return NextResponse.json({ success: true });
}
