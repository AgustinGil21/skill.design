export function Button({ children, variant = 'primary' }: { children: React.ReactNode; variant?: 'primary' | 'quiet' }) {
  const styles = variant === 'primary' ? 'bg-action text-white' : 'text-action';
  return <button className={`${styles} rounded-control px-3 py-1.5 text-sm`}>{children}</button>;
}
