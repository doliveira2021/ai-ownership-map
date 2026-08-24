import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, CircleCheck, CircleDashed, FileText, Map, ShieldQuestion } from "lucide-react";
import { Shell, ScoreRing } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MATURITY_LABELS,
  raciFunctions,
  raciMatrix,
  type MaturityLevel,
} from "@/lib/assessment-data";
import { useAssessment } from "@/lib/assessment-store";
import { generateRecommendations, generateRoadmap, type Horizon } from "@/lib/recommendations";
import {
  accountabilityCoverage,
  coverageInterpretation,
  decisionRightsSummary,
  domainScores,
  maturityScore,
  progress,
} from "@/lib/scoring";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "AI Accountability Results | ASRA" },
      {
        name: "description",
        content:
          "ASRA accountability results: maturity score, coverage indicator, ownership gaps, decision-right gaps and a phased roadmap.",
      },
      { property: "og:title", content: "AI Accountability Results | ASRA" },
      {
        property: "og:description",
        content:
          "ASRA accountability results: maturity score, coverage indicator, ownership gaps, decision-right gaps and a phased roadmap.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResultsPage,
});

const priorityStyle: Record<string, string> = {
  Critical: "border-destructive/50 bg-destructive/15 text-destructive",
  High: "border-warning/50 bg-warning/15 text-warning",
  Medium: "border-primary/40 bg-primary/10 text-primary",
};

function maturityOf(level: MaturityLevel | undefined) {
  return level === undefined ? "Not assessed" : `${level} — ${MATURITY_LABELS[level]}`;
}

function ResultsPage() {
  const state = useAssessment();
  const p = progress(state);
  const maturity = maturityScore(state);
  const cov = accountabilityCoverage(state);
  const dr = decisionRightsSummary(state);
  const scores = domainScores(state);
  const recs = generateRecommendations(state);
  const roadmap = generateRoadmap(state);

  if (p.done === 0) {
    return (
      <Shell>
        <div className="panel mx-auto max-w-lg p-8 text-center">
          <ShieldQuestion className="mx-auto size-8 text-primary" />
          <h1 className="mt-4 text-2xl font-semibold">No assessment data yet</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Complete the accountability assessment to generate the dashboard, executive report and
            roadmap.
          </p>
          <Button asChild className="mt-6">
            <Link to="/assessment">Start assessment</Link>
          </Button>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="label-mono">Results</p>
          <h1 className="mt-2 text-3xl font-semibold">
            {state.orgName ? `${state.orgName} — ` : ""}AI Accountability Posture
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {p.done} of {p.total} items answered ({p.percent}% complete)
          </p>
        </div>
        <Button asChild variant="secondary">
          <Link to="/assessment">Continue assessment</Link>
        </Button>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="panel p-5">
          <ScoreRing value={maturity.score} label="AI Security Maturity Score" />
          <p className="mt-4 text-sm text-muted-foreground">
            Average maturity {maturity.average.toFixed(1)} / 5 across {maturity.answered} assessed
            activities.
          </p>
        </div>
        <div className="panel p-5">
          <ScoreRing value={cov.score} label="Accountability Coverage" tone="accent" />
          <p className="mt-4 text-sm text-muted-foreground">{coverageInterpretation(state)}</p>
          <p className="mt-2 label-mono">Supporting governance indicator</p>
        </div>
        <div className="panel p-5">
          <p className="label-mono">Domain maturity</p>
          <div className="mt-3 space-y-3">
            {scores.map((s) => (
              <div key={s.domain.id}>
                <div className="flex justify-between text-xs">
                  <span>{s.domain.short}</span>
                  <span className="font-mono text-muted-foreground">
                    {s.average.toFixed(1)} / 5
                  </span>
                </div>
                <Progress value={s.percent} className="mt-1 h-1.5" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Tabs defaultValue="accountability" className="mt-10">
        <TabsList>
          <TabsTrigger value="accountability">AI Accountability</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="report">Executive Report</TabsTrigger>
          <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
        </TabsList>

        {/* ---------- Accountability ---------- */}
        <TabsContent value="accountability" className="mt-6 space-y-8">
          <div className="grid gap-4 md:grid-cols-3">
            <GapColumn
              tone="clear"
              title="Clearly Assigned"
              items={cov.clear.map((i) => i.area.label)}
            />
            <GapColumn
              tone="partial"
              title="Partially Assigned"
              items={cov.partial.map((i) => i.area.label)}
            />
            <GapColumn
              tone="missing"
              title="Missing or Unclear"
              items={cov.missing.map((i) => i.area.label)}
            />
          </div>

          <section>
            <h2 className="text-lg font-semibold">Decision rights</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {dr.clear.length} of {dr.items.length} decision rights are explicitly defined.
            </p>
            <div className="mt-4 grid gap-2 md:grid-cols-2">
              {dr.items.map((i) => (
                <div
                  key={i.right.id}
                  className="panel flex items-center justify-between gap-3 px-4 py-2.5"
                >
                  <span className="text-sm">{i.right.label}</span>
                  <StatusChip bucket={i.bucket} />
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Illustrative Target-State Responsibility Model</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Reference only — not a compliance requirement and not a required organizational
              structure. R Responsible · A Accountable · C Consulted · I Informed.
            </p>
            <div className="panel mt-4 overflow-x-auto">
              <table className="w-full min-w-160 text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-3 text-left label-mono">Activity</th>
                    {raciFunctions.map((f) => (
                      <th key={f} className="p-3 text-center label-mono">
                        {f}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {raciMatrix.map((row) => (
                    <tr key={row.activity} className="border-b border-border/60 last:border-0">
                      <td className="p-3">{row.activity}</td>
                      {row.assignments.map((a, i) => (
                        <td key={i} className="p-3 text-center">
                          <span
                            className={cn(
                              "inline-flex min-w-9 justify-center rounded border px-1.5 py-0.5 font-mono text-xs",
                              a.includes("A")
                                ? "border-accent/50 bg-accent/15 text-accent"
                                : a === "R"
                                  ? "border-primary/40 bg-primary/10 text-primary"
                                  : "border-border text-muted-foreground",
                            )}
                          >
                            {a}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </TabsContent>

        {/* ---------- Recommendations ---------- */}
        <TabsContent value="recommendations" className="mt-6 space-y-4">
          {recs.length === 0 ? (
            <div className="panel p-6 text-sm text-muted-foreground">
              No accountability gaps detected at the assessed maturity levels.
            </div>
          ) : (
            recs.map((rec) => (
              <article key={rec.id} className="panel p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold">{rec.title}</h3>
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "rounded border px-2 py-0.5 font-mono text-xs",
                        priorityStyle[rec.priority],
                      )}
                    >
                      {rec.priority}
                    </span>
                    <span className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground">
                      {rec.horizon}
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="text-foreground">Risk: </span>
                  {rec.risk}
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="label-mono">Recommended action</p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      {rec.actions.map((a) => (
                        <li key={a} className="flex gap-2">
                          <span className="text-primary">·</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="label-mono">Evidence of completion</p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      {rec.evidence.map((e) => (
                        <li key={e} className="flex gap-2">
                          <span className="text-primary">·</span>
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 grid gap-2 border-t border-border pt-3 text-sm sm:grid-cols-2">
                  <p className="text-muted-foreground">
                    <span className="label-mono">Suggested owners </span> {rec.owners}
                  </p>
                  <p className="text-muted-foreground sm:text-right">
                    <span className="label-mono">Target maturity </span> {rec.targetMaturity}
                  </p>
                </div>
              </article>
            ))
          )}
        </TabsContent>

        {/* ---------- Executive report ---------- */}
        <TabsContent value="report" className="mt-6 space-y-6">
          <div className="panel p-6">
            <div className="flex items-center gap-2">
              <FileText className="size-4 text-primary" />
              <h2 className="text-lg font-semibold">AI Accountability & Decision Rights</h2>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <Metric label="Accountability Coverage" value={`${cov.score} / 100`} />
              <Metric label="Decision Rights Defined" value={`${dr.clear.length} / ${dr.items.length}`} />
              <Metric label="AI Security Maturity" value={`${maturity.average.toFixed(1)} / 5`} />
            </div>
            <p className="mt-5 text-sm text-muted-foreground">{coverageInterpretation(state)}</p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <p className="label-mono">Major ownership gaps</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {[...cov.missing, ...cov.partial].length === 0 ? (
                    <li>None identified.</li>
                  ) : (
                    [...cov.missing, ...cov.partial].map((i) => (
                      <li key={i.area.id}>
                        {i.area.label} — {i.bucket === "missing" ? "missing or unclear" : "partial"}
                      </li>
                    ))
                  )}
                </ul>
              </div>
              <div>
                <p className="label-mono">Decision-right gaps</p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {[...dr.missing, ...dr.partial].length === 0 ? (
                    <li>None identified.</li>
                  ) : (
                    [...dr.missing, ...dr.partial].map((i) => (
                      <li key={i.right.id}>
                        {i.right.label} — {i.bucket === "missing" ? "undefined" : "partial"}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Metric
                label="Agent sponsorship maturity"
                value={maturityOf(state.answers["gov-agent-sponsorship"])}
              />
              <Metric
                label="Residual risk acceptance maturity"
                value={maturityOf(state.answers["gov-residual-risk"])}
              />
              <Metric
                label="Incident authority maturity"
                value={maturityOf(state.answers["gov-incident-accountability"])}
              />
            </div>
            <p className="mt-6 label-mono">
              No individual employee names are collected or displayed in this report.
            </p>
          </div>

          <div className="panel p-6">
            <h3 className="font-display font-semibold">Illustrative Target-State Responsibility Model</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Provided as a reference model for discussion. Organizations may assign these
              responsibilities differently.
            </p>
            <ul className="mt-3 grid gap-1 text-sm text-muted-foreground sm:grid-cols-2">
              {raciMatrix.map((r) => (
                <li key={r.activity} className="font-mono text-xs">
                  {r.activity}:{" "}
                  {r.assignments
                    .map((a, i) => `${raciFunctions[i]} ${a}`)
                    .join(" · ")}
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>

        {/* ---------- Roadmap ---------- */}
        <TabsContent value="roadmap" className="mt-6">
          <div className="grid gap-4 lg:grid-cols-3">
            {(Object.keys(roadmap) as Horizon[]).map((horizon) => (
              <div key={horizon} className="panel p-5">
                <div className="flex items-center gap-2">
                  <Map className="size-4 text-primary" />
                  <p className="font-display font-semibold">{horizon}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {roadmap[horizon].length === 0 ? (
                    <li className="text-muted-foreground">No actions required in this horizon.</li>
                  ) : (
                    roadmap[horizon].map((item) => (
                      <li key={item.label} className="flex gap-2 text-muted-foreground">
                        <span className="text-primary">→</span>
                        {item.label}
                      </li>
                    ))
                  )}
                </ul>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Shell>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-border bg-secondary/40 p-3">
      <p className="label-mono">{label}</p>
      <p className="mt-1 font-display text-base">{value}</p>
    </div>
  );
}

function StatusChip({ bucket }: { bucket: "clear" | "partial" | "missing" }) {
  const map = {
    clear: { label: "Defined", cls: "border-success/50 bg-success/15 text-success" },
    partial: { label: "Partial", cls: "border-warning/50 bg-warning/15 text-warning" },
    missing: { label: "Undefined", cls: "border-destructive/50 bg-destructive/15 text-destructive" },
  } as const;
  const s = map[bucket];
  return <span className={cn("rounded border px-2 py-0.5 font-mono text-xs", s.cls)}>{s.label}</span>;
}

function GapColumn({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "clear" | "partial" | "missing";
}) {
  const Icon = tone === "clear" ? CircleCheck : tone === "partial" ? CircleDashed : AlertTriangle;
  const color =
    tone === "clear" ? "text-success" : tone === "partial" ? "text-warning" : "text-destructive";
  return (
    <div className="panel p-5">
      <div className="flex items-center gap-2">
        <Icon className={cn("size-4", color)} />
        <p className="font-display font-semibold">{title}</p>
        <span className="ml-auto font-mono text-xs text-muted-foreground">{items.length}</span>
      </div>
      <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
        {items.length === 0 ? <li>None.</li> : items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}
