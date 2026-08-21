import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, RotateCcw } from "lucide-react";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  coverageAreas,
  decisionRights,
  domains,
  MATURITY_LABELS,
  type CoverageStatus,
  type MaturityLevel,
} from "@/lib/assessment-data";
import { assessmentActions, useAssessment } from "@/lib/assessment-store";
import { progress } from "@/lib/scoring";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/assessment")({
  head: () => ({
    meta: [
      { title: "AI Accountability Assessment | Maturity Questionnaire" },
      {
        name: "description",
        content:
          "Answer 0–5 maturity questions on AI ownership, agent sponsorship, autonomy approval, residual risk acceptance, incident authority and decision rights.",
      },
      { property: "og:title", content: "AI Accountability Assessment" },
      {
        property: "og:description",
        content: "0–5 maturity questionnaire covering AI ownership, decision rights and agent sponsorship.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AssessmentPage,
});

const statusOptions: { value: CoverageStatus; label: string }[] = [
  { value: 0, label: "Missing / unclear" },
  { value: 1, label: "Partially assigned" },
  { value: 2, label: "Clearly assigned" },
];

function StatusPicker({
  value,
  onChange,
}: {
  value: CoverageStatus | undefined;
  onChange: (v: CoverageStatus) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {statusOptions.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={cn(
            "rounded border px-2.5 py-1 text-xs transition-colors",
            value === opt.value
              ? opt.value === 2
                ? "border-success bg-success/15 text-success"
                : opt.value === 1
                  ? "border-warning bg-warning/15 text-warning"
                  : "border-destructive bg-destructive/15 text-destructive"
              : "border-border text-muted-foreground hover:bg-secondary",
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function AssessmentPage() {
  const state = useAssessment();
  const p = progress(state);

  return (
    <Shell>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="label-mono">Assessment</p>
          <h1 className="mt-2 text-3xl font-semibold">AI Accountability & Responsibility</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Rate each activity on the 0–5 maturity model, then record where ownership and decision
            rights are assigned. Answers are saved automatically in this browser.
          </p>
        </div>
        <Button variant="ghost" size="sm" onClick={() => assessmentActions.reset()}>
          <RotateCcw className="size-4" /> Reset
        </Button>
      </div>

      <div className="panel sticky top-16 z-20 mt-6 flex flex-wrap items-center gap-4 p-4">
        <div className="min-w-52 flex-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>
              {p.done} of {p.total} answered
            </span>
            <span>{p.percent}%</span>
          </div>
          <Progress value={p.percent} className="mt-2 h-1.5" />
        </div>
        <Input
          value={state.orgName}
          onChange={(e) => assessmentActions.setOrgName(e.target.value)}
          placeholder="Organization or scope (optional)"
          className="max-w-64"
        />
        <Button asChild>
          <Link to="/results">
            Results <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>

      {domains.map((domain) => (
        <section key={domain.id} className="mt-12">
          <p className="label-mono">{domain.short}</p>
          <h2 className="mt-1 text-xl font-semibold">{domain.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{domain.intent}</p>

          <div className="mt-5 space-y-4">
            {domain.questions.map((q) => {
              const answer = state.answers[q.id];
              return (
                <article key={q.id} className="panel p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="max-w-3xl">
                      <h3 className="font-display font-semibold">{q.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{q.prompt}</p>
                      {q.helper && <p className="mt-2 text-xs text-primary/90">{q.helper}</p>}
                      {q.authorities && (
                        <ul className="mt-3 flex flex-wrap gap-1.5">
                          {q.authorities.map((a) => (
                            <li
                              key={a}
                              className="rounded border border-border bg-secondary/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                            >
                              {a}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    {answer !== undefined && (
                      <span className="flex items-center gap-1.5 rounded border border-primary/40 bg-primary/10 px-2 py-1 font-mono text-xs text-primary">
                        <Check className="size-3" /> {answer} — {MATURITY_LABELS[answer]}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 grid gap-2 lg:grid-cols-2">
                    {q.levels.map((desc, idx) => {
                      const level = idx as MaturityLevel;
                      const selected = answer === level;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => assessmentActions.setAnswer(q.id, level)}
                          className={cn(
                            "flex gap-3 rounded border p-3 text-left transition-colors",
                            selected
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/40 hover:bg-secondary/60",
                          )}
                        >
                          <span
                            className={cn(
                              "grid size-6 shrink-0 place-items-center rounded font-mono text-xs",
                              selected
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary text-muted-foreground",
                            )}
                          >
                            {idx}
                          </span>
                          <span className="text-sm">
                            <span className="font-medium">{MATURITY_LABELS[idx]}</span>
                            <span className="block text-muted-foreground">{desc}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}

      <section className="mt-14">
        <p className="label-mono">Supporting indicator</p>
        <h2 className="mt-1 text-xl font-semibold">Accountability Coverage</h2>
        <p className="mt-1 max-w-3xl text-sm text-muted-foreground">
          Mark whether accountability is clearly assigned for each area. This produces a 0–100
          supporting governance indicator; it does not replace the main maturity score.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {coverageAreas.map((area) => (
            <div key={area.id} className="panel p-4">
              <p className="font-display text-sm font-semibold">{area.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{area.description}</p>
              <div className="mt-3">
                <StatusPicker
                  value={state.coverage[area.id]}
                  onChange={(v) => assessmentActions.setCoverage(area.id, v)}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <p className="label-mono">Decision rights</p>
        <h2 className="mt-1 text-xl font-semibold">Who has authority to decide?</h2>
        <p className="mt-1 max-w-3xl text-sm text-muted-foreground">
          Ownership is necessary but not sufficient. Record whether decision rights are explicitly
          defined for each change that alters AI capability, access or authority.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {decisionRights.map((right) => (
            <div key={right.id} className="panel flex flex-wrap items-center justify-between gap-3 p-4">
              <p className="text-sm">{right.label}</p>
              <StatusPicker
                value={state.decisionRights[right.id]}
                onChange={(v) => assessmentActions.setDecisionRight(right.id, v)}
              />
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 flex justify-end">
        <Button asChild size="lg">
          <Link to="/results">
            View results & executive report <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </Shell>
  );
}
