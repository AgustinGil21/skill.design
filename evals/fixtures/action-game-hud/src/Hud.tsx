// Rendered over the game canvas during matches.
export function Hud({ hp, ammo, allies }: { hp: number; ammo: number; allies: { name: string; team: 'red' | 'blue' }[] }) {
  return (
    <div style={{ position: 'absolute', inset: 0, color: 'rgba(255,255,255,0.45)', fontSize: 11 }}>
      <div style={{ position: 'absolute', bottom: 12, left: 12 }}>HP {hp} · AMMO {ammo}</div>
      <ul style={{ position: 'absolute', top: 12, right: 12 }}>
        {allies.map((a) => (
          <li key={a.name}><span style={{ width: 8, height: 8, borderRadius: 4, display: 'inline-block', background: a.team === 'red' ? '#ff3b30' : '#34c759' }} /> {a.name}</li>
        ))}
      </ul>
      <div className="animate-pulse" style={{ position: 'absolute', top: '50%', left: '50%' }}>+</div>
    </div>
  );
}
