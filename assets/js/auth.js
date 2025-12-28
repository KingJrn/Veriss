// Mock authentication functions for Veriss Payments

const mockUsers = [
  { id: 1, email: 'admin@veriss.com', password: 'admin123', role: 'admin', name: 'Super Admin' },
  { id: 2, email: 'org@example.com', password: 'org123', role: 'org', name: 'Org Admin', orgId: 1 },
  { id: 1, email: 'user@example.com', password: 'user123', role: 'user', name: 'John Doe', orgId: 1 }
];

function login(email, password) {
  const user = mockUsers.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    return { success: true, user };
  }
  return { success: false, message: 'Invalid credentials' };
}

function logout() {
  localStorage.removeItem('currentUser');
}

function getCurrentUser() {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
}

function signup(userData) {
  // Mock signup - in real app, this would call API
  const newUser = { ...userData, id: Date.now(), role: userData.role || 'user' };
  mockUsers.push(newUser);
  localStorage.setItem('currentUser', JSON.stringify(newUser));
  return { success: true, user: newUser };
}