export default function AdminDashboard() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/auth/login';
  };
  const handleBack = () => {
    window.history.back();
  };
  return (
    <main className="p-6">
      <h1 className="text-2xl mb-4">🧾 Admin Dashboard</h1>
      <div className="space-x-4">
        <button onClick={handleBack} className="bg-gray-500 text-white px-4 py-2 rounded">Zurück</button>
        <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded">Logout</button>
      </div>
    </main>
  );
}