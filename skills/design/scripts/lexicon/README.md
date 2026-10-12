# Slop lexicons

One file per language, named with its language code (`en.mjs`, `es.mjs`, `pt.mjs`, `fr.mjs`…). Each exports an
array of `[pattern, message]` pairs, where `pattern` is the source of a regular expression matched as whole words,
case-insensitive, and `message` explains in English why the phrase is a problem.

To add a language, create its file following `en.mjs` and add it to `LEXICONS` in `../slop.mjs`. Include only
phrases that are generic in that language's marketing and AI writing, not literal translations of the English list:
what sounds empty differs between languages.

Placeholder content (lorem ipsum, "Acme", "John Doe") is language-independent and lives in `../slop.mjs`.
