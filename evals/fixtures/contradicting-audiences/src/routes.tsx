export const routes = [
  { path: '/ledger', role: 'accountant' },
  { path: '/clients', role: 'accountant' },
  { path: '/clients/:id/invoices', role: 'accountant' },
  { path: '/reconciliation', role: 'accountant' },
  { path: '/tax-reports', role: 'accountant' },
  { path: '/portal', role: 'client' },
];
