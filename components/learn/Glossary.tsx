import React from "react";

interface GlossaryTermProps {
  term: string;
  definition: string;
}

export function GlossaryTerm({ term, definition }: GlossaryTermProps) {
  return (
    <div className="border-b border-border/50 py-3 last:border-0">
      <dt className="font-semibold text-foreground">{term}</dt>
      <dd className="mt-1 text-sm text-muted-foreground">{definition}</dd>
    </div>
  );
}

interface GlossaryProps {
  terms: GlossaryTermProps[];
}

export function Glossary({ terms }: GlossaryProps) {
  return (
    <dl className="divide-y divide-border/30">
      {terms.map((t) => (
        <GlossaryTerm key={t.term} {...t} />
      ))}
    </dl>
  );
}