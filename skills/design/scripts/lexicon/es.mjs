// Generic Spanish marketing and AI phrases. Each entry: [regular expression source, why it is a problem].
// Matched as whole words, case-insensitive. A match is a question for the writer, not a verdict.
export default [
  ['potenci[aá] tu', 'Hype verb: say the concrete result'],
  ['revoluciona(?:r|mos)?', 'Grandiose promise'],
  ['sin fisuras', 'Filler: say what integrates with what'],
  ['de pr[oó]xima generaci[oó]n', 'Marketing filler'],
  ['de vanguardia', 'Marketing filler'],
  ['de clase mundial', 'Marketing filler'],
  ['soluci[oó]n integral', 'Empty category: say what it does'],
  ['todo en uno', 'Filler: say what it combines'],
  ['el futuro de', 'Empty headline'],
  ['en el mundo actual', 'Filler'],
  ['desbloque[aá]', 'Trendy verb: say what the person can now do'],
  ['llev[aá] tu .{1,20} al siguiente nivel', 'Stock phrase'],
  ['no es solo .{1,40}, es', 'Generic rhetorical structure'],
];
