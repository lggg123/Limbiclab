import React from "react";
import type { DisorderProfile } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

interface DisorderProfileCardProps {
  profile: DisorderProfile;
}

export function DisorderProfileCard({ profile }: DisorderProfileCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <CardTitle className="text-lg">{profile.name}</CardTitle>
          <Badge variant="outline">{profile.family}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-foreground/85">{profile.keyFeatures}</p>
        <p className="mt-3 text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">Typical onset:</span>{" "}
          {profile.typicalOnset}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">{profile.contextNote}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {profile.citations.map((citation) => (
            <Badge key={citation} variant="outline" className="text-[11px]">
              {citation}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}