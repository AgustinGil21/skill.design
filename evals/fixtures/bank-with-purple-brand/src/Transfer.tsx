export function Transfer() {
  return (
    <section className="bg-gradient-to-r from-violet-700 to-blue-600 p-6 text-white">
      <h1>Send money</h1>
      <input placeholder="Recipient" />
      <input placeholder="Amount" />
      <button>Done</button>
      <p className="text-xs opacity-60">Fees may apply.</p>
    </section>
  );
}
