// Generic Portuguese marketing and AI phrases. Each entry: [regular expression source, why it is a problem].
// Matched as whole words, case-insensitive. A match is a question for the writer, not a verdict.
export default [
  ['revolucion[aá]ri[oa]s?', 'Grandiose promise'],
  ['revoluciona(?:r|mos)?', 'Grandiose promise'],
  ['solu[çc][aã]o completa', 'Empty category: say what it does'],
  ['tudo em um', 'Filler: say what it combines'],
  ['de [uú]ltima gera[çc][aã]o', 'Marketing filler'],
  ['de ponta', 'Marketing filler'],
  ['de classe mundial', 'Marketing filler'],
  ['potencialize', 'Hype verb: say the concrete result'],
  ['alavanc(?:ar|ue)', 'Jargon: use a plain verb'],
  ['leve (?:o seu|seu|a sua|sua) .{1,20} ao pr[oó]ximo n[ií]vel', 'Stock phrase'],
  ['o futuro d[aeo]', 'Empty headline'],
  ['sem complica[çc][oõ]es', 'Filler: say what got simpler'],
];
