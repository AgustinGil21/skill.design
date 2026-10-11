// Generic German marketing and AI phrases. Each entry: [regular expression source, why it is a problem].
// Matched as whole words, case-insensitive. A match is a question for the writer, not a verdict.
export default [
  ['revolution[äa]r(?:e|en|er)?', 'Grandiose promise'],
  ['revolutionier(?:t|en)', 'Grandiose promise'],
  ['nahtlos(?:e|en|er)?', 'Filler: say what integrates with what'],
  ['all-in-one-l[öo]sung', 'Empty category: say what it does'],
  ['ganzheitliche l[öo]sung', 'Empty category: say what it does'],
  ['zukunftsweisend(?:e|en|er)?', 'Marketing filler'],
  ['innovativ(?:e|en|er)? l[öo]sung(?:en)?', 'Marketing filler'],
  ['auf das n[äa]chste level', 'Stock phrase'],
  ['die zukunft de[rs]', 'Empty headline'],
  ['mehrwert', 'Vague benefit: say what the person gets'],
];
