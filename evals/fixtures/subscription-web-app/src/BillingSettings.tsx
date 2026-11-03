export function BillingSettings({ plan, renewsOn }: { plan: string; renewsOn: string }) {
  return (
    <section>
      <h2>Billing</h2>
      <p>Plan: {plan}</p>
      <p>Renews on {renewsOn}</p>
      <a href="/support">Contact support to change your plan</a>
    </section>
  );
}
