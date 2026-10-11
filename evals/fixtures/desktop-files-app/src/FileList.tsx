export function FileList({ files }: { files: { id: string; name: string; size: string }[] }) {
  return (
    <ul role="listbox" aria-label="Files">
      {files.map((f) => (
        <li key={f.id} role="option" aria-selected={false}>{f.name} <span>{f.size}</span></li>
      ))}
    </ul>
  );
}
