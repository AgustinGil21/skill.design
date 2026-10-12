// Generic English marketing and AI phrases. Each entry: [regular expression source, why it is a problem].
// Matched as whole words, case-insensitive. A match is a question for the writer, not a verdict.
export default [
  ['seamless(?:ly)?', 'Filler: say what integrates with what'],
  ['supercharge[sd]?', 'Hype verb: say the concrete result'],
  ['unlock(?:s|ing)?', 'Hype verb: say what the person can now do'],
  ['next[- ]gen(?:eration)?', 'Marketing filler'],
  ['cutting[- ]edge', 'Marketing filler'],
  ['game[- ]chang(?:er|ing)', 'Marketing filler'],
  ['world[- ]class', 'Marketing filler'],
  ['empower(?:s|ing)?', 'Hype verb: say what changes for the person'],
  ['elevate (?:your|the)', 'Hype verb'],
  ['revolutioni[sz](?:e|es|ing)', 'Grandiose promise'],
  ['all-in-one', 'Filler: say what it combines'],
  ['the future of', 'Empty headline'],
  ["in today's (?:fast-paced )?world", 'Filler'],
  ['take your .{1,20} to the next level', 'Stock phrase'],
  ['leverage', 'Jargon: use a plain verb'],
  ['delve', 'Generic AI phrasing'],
  ['tapestry', 'Generic AI phrasing'],
  ["it'?s not just .{1,40}, it'?s", 'Generic rhetorical structure'],
];
