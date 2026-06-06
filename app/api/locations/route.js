import { NextResponse } from 'next/server';
import { getStore, nextId } from '@/lib/store';

export async function GET() {
  const store = getStore();
  return NextResponse.json({ locations: store.locations });
}

export async function POST(request) {
  const store = getStore();
  try {
    const { name, city, state } = await request.json();
    if (!name) return NextResponse.json({ error: 'Name is required' }, { status: 400 });

    const loc = { id: nextId('loc'), name, city: city || '', state: state || '' };
    store.locations.push(loc);
    return NextResponse.json({ location: loc }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(request) {
  const store = getStore();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const idx = store.locations.findIndex(l => l.id === id);
  if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  store.locations.splice(idx, 1);
  return NextResponse.json({ success: true });
}
