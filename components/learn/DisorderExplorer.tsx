"use client";

import React, { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { DisorderProfile, PsychoticDomain } from "@/lib/types";
import { DisorderProfileCard } from "@/components/learn/DisorderProfileCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

interface DisorderExplorerProps {
  profiles: DisorderProfile[];
  psychoticDomains: PsychoticDomain[];
}

type FamilyFilter = "all" | string;

export function DisorderExplorer({ profiles, psychoticDomains }: DisorderExplorerProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const families = useMemo(() => {
    return Array.from(new Set(profiles.map((p) => p.family))).sort();
  }, [profiles]);

  const [activeFamily, setActiveFamily] = useState<FamilyFilter>("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const raw = searchParams.get("family");
    const urlFamily: FamilyFilter =
      !raw || raw === "all" ? "all" : families.includes(raw) ? raw : "all";
    const urlQuery = searchParams.get("q") ?? "";
    setActiveFamily((prev) => (prev === urlFamily ? prev : urlFamily));
    setQuery((prev) => (prev === urlQuery ? prev : urlQuery));
  }, [searchParams, families]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (activeFamily === "all") {
      params.delete("family");
    } else {
      params.set("family", activeFamily);
    }

    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      params.set("q", trimmedQuery);
    } else {
      params.delete("q");
    }

    const nextQuery = params.toString();
    const currentQuery = searchParams.toString();
    if (nextQuery !== currentQuery) {
      router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname, {
        scroll: false,
      });
    }
  }, [activeFamily, query, searchParams, pathname, router]);

  const filteredProfiles = useMemo(() => {
    const familyFiltered =
      activeFamily === "all"
        ? profiles
        : profiles.filter((profile) => profile.family === activeFamily);

    const cleaned = query.trim().toLowerCase();
    if (!cleaned) return familyFiltered;

    return familyFiltered.filter((profile) => {
      return (
        profile.name.toLowerCase().includes(cleaned) ||
        profile.family.toLowerCase().includes(cleaned) ||
        profile.keyFeatures.toLowerCase().includes(cleaned)
      );
    });
  }, [activeFamily, profiles, query]);

  const isDefaultState = activeFamily === "all" && query.trim() === "";

  return (
    <div className="space-y-16">
      <section className="mx-auto max-w-5xl">
        <h2 className="mb-3 text-2xl font-bold text-foreground">Disorder Spotlights</h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Filter by DSM family to study selected diagnoses. This includes
          schizophrenia-spectrum disorders alongside mood, trauma, obsessive-compulsive,
          and substance-related conditions.
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveFamily("all")}
            className={[
              "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
              activeFamily === "all"
                ? "border-primary/40 bg-primary/15 text-primary"
                : "border-border text-muted-foreground hover:text-foreground",
            ].join(" ")}
          >
            All families ({profiles.length})
          </button>
          {families.map((family) => {
            const count = profiles.filter((profile) => profile.family === family).length;
            const isActive = activeFamily === family;
            return (
              <button
                key={family}
                type="button"
                onClick={() => setActiveFamily(family)}
                className={[
                  "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
                  isActive
                    ? "border-primary/40 bg-primary/15 text-primary"
                    : "border-border text-muted-foreground hover:text-foreground",
                ].join(" ")}
              >
                {family} ({count})
              </button>
            );
          })}
        </div>

        <div className="mb-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
            <div className="flex-1">
              <label
                htmlFor="disorder-search"
                className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              >
                Search by disorder name or keyword
              </label>
              <input
                id="disorder-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try: schizophrenia, bipolar, psychosis, PTSD"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <button
              type="button"
              onClick={() => {
                setActiveFamily("all");
                setQuery("");
              }}
              disabled={isDefaultState}
              className="rounded-lg border border-border px-3 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
            >
              Reset filters
            </button>
          </div>
        </div>

        <div className="mb-4 text-xs text-muted-foreground">
          Showing {filteredProfiles.length} of {profiles.length} spotlight entries.
        </div>

        {filteredProfiles.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {filteredProfiles.map((profile) => (
              <DisorderProfileCard key={profile.name} profile={profile} />
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                No spotlight entries matched your search. Try a broader keyword or reset
                to all families.
              </p>
            </CardContent>
          </Card>
        )}

        <details className="mt-6 rounded-xl border border-border bg-card">
          <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-foreground">
            Compare Schizophrenia vs Schizoaffective Disorder
          </summary>
          <div className="border-t border-border px-4 py-4">
            <p className="mb-4 text-sm text-muted-foreground">
              Quick study comparison focused on diagnostic boundaries. Educational
              summary only; not a diagnostic tool.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="border-b border-border py-2 pr-3 text-left font-semibold text-foreground">
                      Domain
                    </th>
                    <th className="border-b border-border py-2 pr-3 text-left font-semibold text-foreground">
                      Schizophrenia
                    </th>
                    <th className="border-b border-border py-2 text-left font-semibold text-foreground">
                      Schizoaffective Disorder
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      domain: "Core requirement",
                      schizophrenia:
                        "Psychotic symptoms are primary and persistent across the illness course.",
                      schizoaffective:
                        "Psychotic symptoms occur with major mood episodes and also during at least one mood-free psychotic period.",
                    },
                    {
                      domain: "Mood episodes",
                      schizophrenia:
                        "Mood episodes may occur but are not dominant for the majority of active/residual illness.",
                      schizoaffective:
                        "Major mood episodes are present for the majority of total illness duration.",
                    },
                    {
                      domain: "Diagnostic boundary",
                      schizophrenia:
                        "If mood syndromes are brief relative to psychosis, schizophrenia is favored.",
                      schizoaffective:
                        "If mood syndromes dominate duration while psychosis also persists independently, schizoaffective is favored.",
                    },
                    {
                      domain: "Common overlap",
                      schizophrenia:
                        "Can include negative, cognitive, and affective symptoms.",
                      schizoaffective:
                        "Shares schizophrenia-spectrum features while adding sustained mood-episode burden.",
                    },
                  ].map((row) => (
                    <tr key={row.domain}>
                      <td className="border-b border-border/60 py-2 pr-3 align-top text-foreground">
                        {row.domain}
                      </td>
                      <td className="border-b border-border/60 py-2 pr-3 align-top text-muted-foreground">
                        {row.schizophrenia}
                      </td>
                      <td className="border-b border-border/60 py-2 align-top text-muted-foreground">
                        {row.schizoaffective}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Source anchor: DSM-5-TR diagnostic framework (APA, 2022).
            </p>
          </div>
        </details>
      </section>

      <section className="mx-auto max-w-5xl">
        <h2 className="mb-3 text-2xl font-bold text-foreground">
          Psychotic Disorders Deep Dive
        </h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Symptom domains used in study and clinical reasoning for schizophrenia-spectrum
          conditions, including schizophrenia and schizoaffective disorder.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {psychoticDomains.map((domain) => (
            <Card key={domain.domain}>
              <CardHeader>
                <CardTitle className="text-lg">{domain.domain}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/85">{domain.description}</p>
                <p className="mt-3 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Examples:</span>{" "}
                  {domain.examples.join(", ")}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Why it matters:</span>{" "}
                  {domain.clinicalImportance}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
