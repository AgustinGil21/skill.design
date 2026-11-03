import { Check } from 'lucide-react';
import { plans } from './plans';

export function PricingPage() {
  return (
    <main className="bg-surface text-fg">
      <h1 className="mx-auto max-w-2xl text-center text-5xl font-semibold">Reservations that fill your tables without filling your inbox</h1>
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-6">
        {plans.map((plan) => (
          <section key={plan.id} className="overflow-hidden rounded-card border border-border-subtle p-6 shadow-raised">
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p className="text-price font-semibold">€{plan.priceMonthly}<span className="text-muted">/month</span></p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="mt-2 size-4" />
                  {feature}
                </li>
              ))}
            </ul>
            <a href={`/signup?plan=${plan.id}`} className="mt-6 block rounded-control bg-action px-4 py-3 text-center text-surface outline-none focus:ring-4">
              Start with {plan.name}
            </a>
          </section>
        ))}
      </div>
    </main>
  );
}
