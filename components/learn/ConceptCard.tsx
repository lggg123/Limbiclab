import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

interface ConceptCardProps {
  emoji: string;
  title: string;
  summary: string;
  detail: string;
}

export function ConceptCard({ emoji, title, summary, detail }: ConceptCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span className="mr-2">{emoji}</span>
          {title}
        </CardTitle>
        <p className="text-sm font-normal text-muted-foreground">{summary}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-foreground/80">{detail}</p>
      </CardContent>
    </Card>
  );
}