// lib/auth.js
import { getStore } from './store';

export const ROLES = {
  SUPER_ADMIN: 'super_admin',
  CEO: 'ceo',
  DIRECTOR: 'director',
  MANAGER: 'manager',
  FIELD_STAFF: 'field_staff',
  ACCOUNTANT: 'accountant',
};

export const ROLE_LABELS = {
  super_admin: 'Super Admin',
  ceo: 'CEO',
  director: 'Director',
  manager: 'Manager',
  field_staff: 'Field Staff',
  accountant: 'Accountant',
};

export function authenticate(email, password) {
  const store = getStore();
  const user = store.users.find(
    u => u.email.toLowerCase() === email.toLowerCase() && u.password === password && u.active
  );
  if (!user) return null;
  const { password: _, ...safeUser } = user;
  return safeUser;
}

export function getUserById(id) {
  const store = getStore();
  const user = store.users.find(u => u.id === id);
  if (!user) return null;
  const { password: _, ...safeUser } = user;
  return safeUser;
}

export function getDirectReports(managerId) {
  const store = getStore();
  return store.users
    .filter(u => u.managerId === managerId && u.active)
    .map(({ password: _, ...u }) => u);
}

// Get all users in someone's span (direct + recursive)
export function getSpan(userId, visited = new Set()) {
  if (visited.has(userId)) return [];
  visited.add(userId);
  const directs = getDirectReports(userId);
  const all = [...directs];
  for (const d of directs) {
    all.push(...getSpan(d.id, visited));
  }
  return all;
}

export function getManager(userId) {
  const store = getStore();
  const user = store.users.find(u => u.id === userId);
  if (!user || !user.managerId) return null;
  return getUserById(user.managerId);
}
