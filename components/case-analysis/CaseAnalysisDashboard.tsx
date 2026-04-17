"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  symptomCards,
  ideologicalFrameworks,
  neuroLogEntries,
  indifferenceMetric,
  caseGlossaryTerms,
  type GlossaryTerm,
  type NeuroLogEntry,
  type SymptomCard,
} from "@/lib/caseAnalysisData";

// ── Colour tokens ─────────────────────────────────────────────────────────────
const CRIMSON = "#8B0000";
const TEAL = "#008B8B";
const BG = "#0a0a0a";
const SURFACE = "#111111";
const SURFACE2 = "#161616";
const BORDER = "#222222";
const MUTED = "#555555";
const TEXT = "#e8e8e8";
const TEXT_DIM = "#888888";

// ── Gauge SVG ─────────────────────────────────────────────────────────────────
function IndifferenceGauge({ score }: { score: number }) {
  const r = 70;
  const cx = 90;
  const cy = 90;
  const strokeWidth = 12;
  const circumference = Math.PI * r; // half circle arc
  const normalised = Math.min(Math.max(score, 0), 100) / 100;
  const dashOffset = circumference * (1 - normalised);

  const color =
    score >= 80 ? CRIMSON : score >= 50 ? "#c97d00" : TEAL;

  const subscoreMax = 100;

  return (
    <div
      style={{
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        borderRadius: 12,
        padding: "28px 24px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <span style={{ fontFamily: "monospace", fontSize: 11, color: TEAL, letterSpacing: 2 }}>
          METRIC
        </span>
        <span style={{ fontFamily: "monospace", fontSize: 11, color: MUTED, letterSpacing: 1 }}>
          / INDIFFERENCE INDEX
        </span>
      </div>

      {/* Semicircular Gauge */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ position: "relative", width: 180, height: 100 }}>
          <svg width="180" height="100" viewBox="0 0 180 100">
            {/* Track */}
            <path
              d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
              fill="none"
              stroke={BORDER}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            {/* Value arc */}
            <path
              d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
              fill="none"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)" }}
            />
            {/* Score label */}
            <text
              x={cx}
              y={cy - 10}
              textAnchor="middle"
              fill={color}
              fontSize={28}
              fontFamily="monospace"
              fontWeight="bold"
            >
              {score}
            </text>
            <text
              x={cx}
              y={cy + 8}
              textAnchor="middle"
              fill={TEXT_DIM}
              fontSize={10}
              fontFamily="monospace"
            >
              / 100
            </text>
          </svg>
          {/* Classification badge */}
          <div
            style={{
              position: "absolute",
              bottom: -8,
              left: "50%",
              transform: "translateX(-50%)",
              background: color,
              color: "#fff",
              fontFamily: "monospace",
              fontSize: 10,
              letterSpacing: 2,
              padding: "2px 10px",
              borderRadius: 3,
              whiteSpace: "nowrap",
            }}
          >
            {indifferenceMetric.classification.toUpperCase()}
          </div>
        </div>
      </div>

      <p style={{ fontFamily: "monospace", fontSize: 11, color: TEXT_DIM, lineHeight: 1.6, margin: 0 }}>
        {indifferenceMetric.description}
      </p>

      {/* Subscores */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {indifferenceMetric.subscores.map((s) => (
          <div key={s.label}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "monospace",
                fontSize: 10,
                color: TEXT_DIM,
                marginBottom: 4,
              }}
            >
              <span>{s.label}</span>
              <span style={{ color: TEXT }}>{s.value}</span>
            </div>
            <div
              style={{
                height: 3,
                background: BORDER,
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(s.value / subscoreMax) * 100}%` }}
                transition={{ duration: 1, delay: 0.4 }}
                style={{
                  height: "100%",
                  background:
                    s.value >= 80 ? CRIMSON : s.value >= 60 ? "#c97d00" : TEAL,
                  borderRadius: 2,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── SymptomCard ───────────────────────────────────────────────────────────────
function SymptomCardBlock({
  card,
  index,
  onGlossaryTermClick,
}: {
  card: SymptomCard;
  index: number;
  onGlossaryTermClick: (term: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      style={{
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        borderRadius: 10,
        padding: "22px 22px 18px",
        cursor: "pointer",
        userSelect: "none",
      }}
      onClick={() => setExpanded((v) => !v)}
    >
      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
        <div>
          <div style={{ fontFamily: "monospace", fontSize: 10, color: TEAL, letterSpacing: 2, marginBottom: 4 }}>
            {card.icdCode}
          </div>
          <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: TEXT, fontFamily: "monospace" }}>
            {card.title}
          </h3>
          <p style={{ margin: "3px 0 0", fontSize: 11, color: MUTED, fontFamily: "monospace" }}>
            {card.subtitle}
          </p>
        </div>
        <span style={{ color: MUTED, fontSize: 16, marginTop: 2 }}>{expanded ? "▲" : "▼"}</span>
      </div>

      <p style={{ margin: 0, fontSize: 12, color: TEXT_DIM, lineHeight: 1.7, fontFamily: "monospace" }}>
        {card.description}
      </p>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                marginTop: 16,
                padding: "14px 16px",
                background: SURFACE2,
                borderRadius: 6,
                borderLeft: `3px solid ${TEAL}`,
              }}
            >
              <div style={{ fontFamily: "monospace", fontSize: 10, color: TEAL, letterSpacing: 2, marginBottom: 8 }}>
                MECHANISM
              </div>
              <p style={{ margin: 0, fontSize: 11, color: TEXT_DIM, lineHeight: 1.7, fontFamily: "monospace" }}>
                {card.mechanism}
              </p>
            </div>

            <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 8 }}>
              <div style={{ fontFamily: "monospace", fontSize: 10, color: MUTED, letterSpacing: 2, width: "100%", marginBottom: 2 }}>
                IMPLICATED REGIONS
              </div>
              {card.brainRegions.map((r) => (
                <span
                  key={r}
                  style={{
                    fontFamily: "monospace",
                    fontSize: 10,
                    color: TEXT,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 3,
                    padding: "2px 8px",
                    background: SURFACE2,
                  }}
                >
                  {r}
                </span>
              ))}
            </div>

            <div style={{ marginTop: 14 }}>
              <div style={{ fontFamily: "monospace", fontSize: 10, color: MUTED, letterSpacing: 2, marginBottom: 6 }}>
                DIFFERENTIAL DIAGNOSIS
              </div>
              <ul style={{ margin: 0, paddingLeft: 16 }}>
                {card.differentials.map((d) => (
                  <li
                    key={d}
                    style={{ fontFamily: "monospace", fontSize: 11, color: TEXT_DIM, lineHeight: 1.7 }}
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 8 }}>
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: 10,
                  color: MUTED,
                  letterSpacing: 2,
                  width: "100%",
                  marginBottom: 2,
                }}
              >
                RELATED TERMS
              </div>
              {card.glossaryTerms.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onGlossaryTermClick(term);
                  }}
                  style={{
                    fontFamily: "monospace",
                    fontSize: 10,
                    color: TEAL,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 3,
                    padding: "2px 8px",
                    background: SURFACE2,
                    cursor: "pointer",
                  }}
                >
                  {term}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Ideological Comparison ────────────────────────────────────────────────────
function IdeologicalComparison() {
  return (
    <div
      style={{
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        borderRadius: 10,
        padding: "22px 22px 18px",
      }}
    >
      <div style={{ fontFamily: "monospace", fontSize: 10, color: TEAL, letterSpacing: 2, marginBottom: 14 }}>
        IDEOLOGICAL FRAMEWORK ANALYSIS
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {ideologicalFrameworks.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
            style={{
              background: SURFACE2,
              borderRadius: 8,
              padding: "16px",
              borderTop: `3px solid ${f.color}`,
            }}
          >
            <h4
              style={{
                margin: "0 0 12px",
                fontFamily: "monospace",
                fontSize: 12,
                color: f.color,
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              {f.label.toUpperCase()}
            </h4>
            {[
              { key: "Psych Vector", val: f.psychologicalVector },
              { key: "Somatic Impact", val: f.somaticImpact },
              { key: "Shut-Off Mechanism", val: f.shutOffMechanism },
            ].map(({ key, val }) => (
              <div key={key} style={{ marginBottom: 10 }}>
                <div style={{ fontFamily: "monospace", fontSize: 9, color: MUTED, letterSpacing: 2, marginBottom: 3 }}>
                  {key.toUpperCase()}
                </div>
                <p style={{ margin: 0, fontFamily: "monospace", fontSize: 10, color: TEXT_DIM, lineHeight: 1.6 }}>
                  {val}
                </p>
              </div>
            ))}
            <div style={{ fontFamily: "monospace", fontSize: 9, color: BORDER, marginTop: 10, fontStyle: "italic" }}>
              {f.literatureRef}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Neural Log Feed ───────────────────────────────────────────────────────────
function NeuroLogFeed() {
  const [visibleEntries, setVisibleEntries] = useState<NeuroLogEntry[]>([]);
  const [idx, setIdx] = useState(0);
  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (idx >= neuroLogEntries.length) return;
    const timer = setTimeout(() => {
      setVisibleEntries((prev) => [...prev, neuroLogEntries[idx]]);
      setIdx((i) => i + 1);
    }, 600);
    return () => clearTimeout(timer);
  }, [idx]);

  useEffect(() => {
    if (feedRef.current) {
      feedRef.current.scrollTop = feedRef.current.scrollHeight;
    }
  }, [visibleEntries]);

  const severityColor: Record<NeuroLogEntry["severity"], string> = {
    info: TEAL,
    warn: "#c97d00",
    critical: CRIMSON,
  };

  return (
    <div
      style={{
        background: "#050505",
        border: `1px solid ${BORDER}`,
        borderRadius: 10,
        padding: "18px 20px",
        fontFamily: "monospace",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <span style={{ fontSize: 10, color: TEAL, letterSpacing: 2 }}>NEURO-ANALYSIS FEED</span>
        <span
          style={{
            fontSize: 9,
            color: CRIMSON,
            letterSpacing: 1,
            animation: "pulse 1.5s infinite",
          }}
        >
          ● LIVE
        </span>
      </div>

      <div
        ref={feedRef}
        style={{
          height: 260,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 6,
          scrollbarWidth: "none",
        }}
      >
        {visibleEntries.map((entry, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              display: "grid",
              gridTemplateColumns: "52px 110px 1fr",
              gap: 10,
              padding: "6px 8px",
              background: SURFACE,
              borderRadius: 4,
              borderLeft: `2px solid ${severityColor[entry.severity]}`,
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: 9, color: MUTED, paddingTop: 1 }}>{entry.timestamp}</span>
            <span
              style={{
                fontSize: 9,
                color: severityColor[entry.severity],
                fontWeight: 700,
                letterSpacing: 1,
                paddingTop: 1,
              }}
            >
              [{entry.system}]
            </span>
            <span style={{ fontSize: 10, color: TEXT_DIM, lineHeight: 1.5 }}>{entry.event}</span>
          </motion.div>
        ))}
        {idx < neuroLogEntries.length && (
          <div style={{ padding: "4px 8px", fontSize: 10, color: MUTED }}>
            <span style={{ animation: "blink 1s infinite" }}>█</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Status Pill ───────────────────────────────────────────────────────────────
function StatusPill({
  label,
  value,
  level,
}: {
  label: string;
  value: string;
  level: "normal" | "elevated" | "severe";
}) {
  const color = level === "severe" ? CRIMSON : level === "elevated" ? "#c97d00" : TEAL;
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        border: `1px solid ${color}`,
        borderRadius: 4,
        padding: "5px 12px",
        background: `${color}18`,
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: color,
          display: "inline-block",
          flexShrink: 0,
        }}
      />
      <span style={{ fontFamily: "monospace", fontSize: 10, color: TEXT_DIM, letterSpacing: 1 }}>
        {label}:
      </span>
      <span style={{ fontFamily: "monospace", fontSize: 10, color, fontWeight: 700, letterSpacing: 1 }}>
        {value}
      </span>
    </div>
  );
}

// ── Glossary panel ───────────────────────────────────────────────────────────
function GlossaryPanel({
  query,
  onQueryChange,
  beginnerMode,
  onBeginnerModeChange,
  highlightedTerm,
}: {
  query: string;
  onQueryChange: (value: string) => void;
  beginnerMode: boolean;
  onBeginnerModeChange: (value: boolean) => void;
  highlightedTerm: string | null;
}) {
  const filteredTerms = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return caseGlossaryTerms;

    return caseGlossaryTerms.filter((item: GlossaryTerm) => {
      const haystack = `${item.term} ${item.plainEnglish} ${item.clinicalDefinition}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [query]);

  return (
    <div
      style={{
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        borderRadius: 10,
        padding: "18px 20px",
      }}
    >
      <div style={{ fontFamily: "monospace", fontSize: 10, color: TEAL, letterSpacing: 2, marginBottom: 8 }}>
        TERMINOLOGY GUIDE
      </div>
      <p style={{ margin: "0 0 12px", fontFamily: "monospace", fontSize: 11, color: TEXT_DIM, lineHeight: 1.6 }}>
        Plain-language definitions for complex clinical terms used in this dashboard.
      </p>

      <label
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          border: `1px solid ${BORDER}`,
          borderRadius: 6,
          padding: "6px 8px",
          background: SURFACE2,
          marginBottom: 10,
          cursor: "pointer",
        }}
      >
        <input
          type="checkbox"
          checked={beginnerMode}
          onChange={(e) => onBeginnerModeChange(e.target.checked)}
          style={{ accentColor: TEAL }}
        />
        <span style={{ fontFamily: "monospace", fontSize: 10, color: TEXT }}>
          BEGINNER MODE (PLAIN ENGLISH ONLY)
        </span>
      </label>

      <input
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search terms (e.g., somatic, ideological friction, PNES)"
        style={{
          width: "100%",
          boxSizing: "border-box",
          border: `1px solid ${BORDER}`,
          background: SURFACE2,
          color: TEXT,
          borderRadius: 6,
          padding: "8px 10px",
          fontFamily: "monospace",
          fontSize: 11,
          marginBottom: 12,
          outline: "none",
        }}
      />

      <div
        style={{
          maxHeight: 300,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          paddingRight: 2,
        }}
      >
        {filteredTerms.map((item) => (
          <div
            key={item.term}
            style={{
              background: SURFACE2,
              border:
                highlightedTerm && highlightedTerm.toLowerCase() === item.term.toLowerCase()
                  ? `1px solid ${TEAL}`
                  : `1px solid ${BORDER}`,
              borderRadius: 6,
              padding: "10px 12px",
            }}
          >
            <div style={{ fontFamily: "monospace", fontSize: 11, color: TEXT, fontWeight: 700, marginBottom: 6 }}>
              {item.term}
            </div>
            <div style={{ fontFamily: "monospace", fontSize: 10, color: TEAL, letterSpacing: 1, marginBottom: 4 }}>
              PLAIN ENGLISH
            </div>
            <p style={{ margin: "0 0 7px", fontFamily: "monospace", fontSize: 10, color: TEXT_DIM, lineHeight: 1.6 }}>
              {item.plainEnglish}
            </p>
            {!beginnerMode && (
              <>
                <div style={{ fontFamily: "monospace", fontSize: 10, color: MUTED, letterSpacing: 1, marginBottom: 4 }}>
                  CLINICAL DEFINITION
                </div>
                <p style={{ margin: 0, fontFamily: "monospace", fontSize: 10, color: TEXT_DIM, lineHeight: 1.6 }}>
                  {item.clinicalDefinition}
                </p>
              </>
            )}
          </div>
        ))}

        {filteredTerms.length === 0 && (
          <div style={{ fontFamily: "monospace", fontSize: 11, color: MUTED, padding: "8px 2px" }}>
            No matching term found.
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main Dashboard ────────────────────────────────────────────────────────────
export function CaseAnalysisDashboard() {
  const [glossaryQuery, setGlossaryQuery] = useState("");
  const [beginnerMode, setBeginnerMode] = useState(false);
  const [highlightedTerm, setHighlightedTerm] = useState<string | null>(null);
  const glossaryPanelRef = useRef<HTMLDivElement>(null);

  const handleGlossaryTermClick = (term: string) => {
    setGlossaryQuery(term);
    setHighlightedTerm(term);
    glossaryPanelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        color: TEXT,
        padding: "32px 24px 64px",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      {/* Global animation styles */}
      <style>{`
        @keyframes pulse { 0%,100% { opacity:1 } 50% { opacity:0.3 } }
        @keyframes blink { 0%,100% { opacity:1 } 50% { opacity:0 } }
        ::-webkit-scrollbar { display: none; }
      `}</style>

      {/* ── Header bar ── */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: SURFACE,
          border: `1px solid ${BORDER}`,
          borderRadius: 10,
          padding: "18px 24px",
          marginBottom: 28,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "monospace",
                fontSize: 10,
                color: CRIMSON,
                letterSpacing: 3,
                marginBottom: 6,
              }}
            >
              LIMBICLAB // CASE ANALYSIS MODULE
            </div>
            <h1
              style={{
                margin: 0,
                fontFamily: "monospace",
                fontSize: 20,
                fontWeight: 700,
                color: TEXT,
                letterSpacing: 1,
              }}
            >
              Functional Neurological Symptoms
            </h1>
            <p
              style={{
                margin: "4px 0 0",
                fontFamily: "monospace",
                fontSize: 11,
                color: MUTED,
              }}
            >
              Dissociation · PNES · Ideological Somatic Pathways
            </p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
            <StatusPill label="INDIFFERENCE" value="SEVERE" level="severe" />
            <StatusPill label="SENSORY RESP." value="SUPPRESSED" level="elevated" />
            <StatusPill label="SOMATIC ACT." value="ELEVATED" level="elevated" />
          </div>
        </div>

        <div
          style={{
            marginTop: 16,
            paddingTop: 14,
            borderTop: `1px solid ${BORDER}`,
            display: "flex",
            gap: 28,
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "DOMAIN", value: "Functional Neurology / Somatoform" },
            { label: "NOSOLOGY", value: "DSM-5 300.11 / ICD-10 F44.x" },
            { label: "FRAMEWORK", value: "Bio-psycho-social + Ideological" },
            { label: "EVIDENCE BASE", value: "fMRI · VEEG · ABR · HPA biomarkers" },
          ].map(({ label, value }) => (
            <div key={label}>
              <div style={{ fontFamily: "monospace", fontSize: 9, color: MUTED, letterSpacing: 2 }}>
                {label}
              </div>
              <div style={{ fontFamily: "monospace", fontSize: 11, color: TEXT, marginTop: 2 }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Main grid ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 320px",
          gap: 20,
          alignItems: "start",
        }}
      >
        {/* Left column */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Symptom cards */}
          <div
            style={{
              fontFamily: "monospace",
              fontSize: 10,
              color: MUTED,
              letterSpacing: 3,
              marginBottom: -8,
            }}
          >
            SYMPTOM MAPPING GRID
          </div>
          {symptomCards.map((card, i) => (
            <SymptomCardBlock
              key={card.id}
              card={card}
              index={i}
              onGlossaryTermClick={handleGlossaryTermClick}
            />
          ))}

          {/* Ideological comparison */}
          <IdeologicalComparison />

          {/* Log feed */}
          <NeuroLogFeed />
        </div>

        {/* Right column — gauge + glossary */}
        <div style={{ position: "sticky", top: 24, display: "flex", flexDirection: "column", gap: 16 }}>
          <IndifferenceGauge score={indifferenceMetric.score} />
          <div ref={glossaryPanelRef}>
            <GlossaryPanel
              query={glossaryQuery}
              onQueryChange={(value) => {
                setGlossaryQuery(value);
                setHighlightedTerm(value.trim() ? value : null);
              }}
              beginnerMode={beginnerMode}
              onBeginnerModeChange={setBeginnerMode}
              highlightedTerm={highlightedTerm}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
