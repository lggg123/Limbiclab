import React from "react";
import type { DsmCategory } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

interface DsmCategoryCardProps {
  category: DsmCategory;
}

export function DsmCategoryCard({ category }: DsmCategoryCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span className="mr-2">{category.emoji}</span>
          {category.family}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-foreground/80">{category.focus}</p>
        <p className="mt-3 text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">Examples:</span>{" "}
          {category.examples.join(", ")}
        </p>
      </CardContent>
    </Card>
  );
}