// Players compare 40 provinces per turn.
export function ResourcesTable({ rows }: { rows: { province: string; grain: number; iron: number; gold: number; unrest: number; trend: number }[] }) {
  return (
    <table>
      <thead><tr><th>Province</th><th>Grain</th><th>Iron</th><th>Gold</th><th>Unrest</th><th>Δ</th></tr></thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.province}><td>{r.province}</td><td>{r.grain}</td><td>{r.iron}</td><td>{r.gold}</td><td>{r.unrest}%</td><td>{r.trend}</td></tr>
        ))}
      </tbody>
    </table>
  );
}
