export function Shipments() {
  return (
    <section className="rounded-card border border-border p-6">
      <h1 className="text-brand">Your next shipment</h1>
      <a className="text-blue-600 underline" href="/history">Shipment history</a>
      <p className="text-red-600">Payment failed. Update your card.</p>
      <button className="bg-brand text-white rounded-card px-4 py-2">Skip this month</button>
    </section>
  );
}
