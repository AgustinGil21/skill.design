// Started from an admin dashboard template.
export function App() {
  return (
    <div className="flex">
      <aside className="w-64 bg-slate-900 text-slate-300">
        <nav>Dashboard · Users · Stories · Analytics · Settings</nav>
      </aside>
      <main className="p-8">
        <h1>Dashboard</h1>
        <table className="text-sm">
          <thead><tr><th>Story</th><th>Words</th><th>Level</th><th>Completion rate</th></tr></thead>
        </table>
        <button className="bg-blue-600 text-white px-3 py-1 text-xs">Start reading</button>
        <a href="/parents">Parent area</a>
      </main>
    </div>
  );
}
