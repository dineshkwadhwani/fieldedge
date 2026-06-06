import { NextResponse } from 'next/server';
import { authenticate } from '@/lib/auth';

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }
    const user = authenticate(email, password);
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials. Please check your email and password.' }, { status: 401 });
    }
    return NextResponse.json({ user });
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
